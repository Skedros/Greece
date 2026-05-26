/* =========================================================================
   GREECE 2026, app.js
   Renders the deep itinerary with vetted options, link generation,
   Formspree-backed contact form. Limited editable cells (notes, packing,
   accommodation booking details, budget).
   ========================================================================= */

(function () {
  'use strict';

  const D = window.TRIP_DATA;
  if (!D) return;

  const STORAGE_KEY = 'greece2026.v2';

  /* ---------------- helpers ---------------- */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else if (k.startsWith('on')) node.addEventListener(k.slice(2), attrs[k]);
        else if (attrs[k] !== null && attrs[k] !== undefined) node.setAttribute(k, attrs[k]);
      });
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c == null) return;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  function mapsUrl(name, address) {
    const q = encodeURIComponent([name, address].filter(Boolean).join(' '));
    return 'https://www.google.com/maps/search/?api=1&query=' + q;
  }

  function slugify(str) {
    return (str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  /* ---------------- storage ---------------- */

  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function saveStore(s) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) { /* ignore */ }
  }
  const store = loadStore();
  function setStoreVal(k, v) { store[k] = v; saveStore(store); }
  function getStoreVal(k, fallback) {
    return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : fallback;
  }

  /* ---------------- editable + checkbox primitives ---------------- */

  function editable(text, storeKey) {
    const cur = getStoreVal(storeKey, text || '');
    const span = el('span', {
      class: 'editable',
      contenteditable: 'true',
      'data-key': storeKey,
      text: cur
    });
    span.addEventListener('blur', function () { setStoreVal(storeKey, span.textContent.trim()); });
    return span;
  }

  function checkboxItem(labelText, storeKey) {
    const cur = !!getStoreVal(storeKey, false);
    const wrap = el('label', { class: 'check' });
    const box = el('input', { type: 'checkbox' });
    box.checked = cur;
    box.addEventListener('change', function () { setStoreVal(storeKey, box.checked); });
    wrap.appendChild(box);
    wrap.appendChild(el('span', { text: labelText }));
    return wrap;
  }

  /* ---------------- link helpers ---------------- */

  function linkBtn(label, href) {
    if (!href) return null;
    return el('a', { class: 'link-btn', href: href, target: '_blank', rel: 'noopener', text: label });
  }

  function linksRow(arr) {
    const row = el('div', { class: 'links-row' });
    (arr || []).forEach(function (l) {
      const btn = linkBtn(l.label, l.url);
      if (btn) row.appendChild(btn);
    });
    return row.children.length ? row : null;
  }

  function mealOptionPill(name) {
    /* Look up in restaurants array to make a same-page anchor link */
    const r = (D.restaurants || []).find(function (x) { return x.name === name; });
    if (r) {
      const anchorId = 'rest-' + slugify(r.name);
      return el('a', { class: 'meal-pill', href: '#' + anchorId, onclick: function (e) {
        /* Smooth scroll, switch to Restaurants tab, open the target card */
        e.preventDefault();
        activateSection('section-restaurants');
        setTimeout(function () {
          const target = document.getElementById(anchorId);
          if (target) {
            if (target.tagName === 'DETAILS') target.open = true;
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }, text: r.name });
    }
    /* Free-text meal option (when not in master list) */
    return el('span', { class: 'meal-pill meal-pill--text', text: name });
  }

  /* ---------------- countdown ---------------- */

  function renderCountdown() {
    const target = new Date(D.meta.countdownTarget).getTime();
    const node = $('#countdown');
    if (!node) return;
    function tick() {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) { node.textContent = "It's happening."; return; }
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      node.textContent = days + ' days, ' + hours + ' hours, ' + mins + ' minutes';
    }
    tick();
    setInterval(tick, 60000);
  }

  /* ---------------- overview ---------------- */

  function renderOverview() {
    const section = $('#section-overview');
    if (!section) return;
    section.innerHTML = '';

    section.appendChild(el('h2', { class: 'section__title', text: 'Overview' }));

    /* TODAY highlight: what's happening today, with quick link */
    section.appendChild(renderTodayHighlight());

    const meta = el('div', { class: 'meta-grid' });
    meta.appendChild(metaCard('Dates', D.meta.dateRange));
    meta.appendChild(metaCard('Travelers', D.meta.travelers));
    meta.appendChild(metaCard('Countdown', '', 'countdown'));
    section.appendChild(meta);

    section.appendChild(el('p', { class: 'intro', text: D.meta.intro }));

    /* Calendar export + Search */
    const tools = el('div', { class: 'overview-tools' });
    tools.appendChild(el('button', {
      class: 'tool-btn tool-btn--ics',
      text: 'Download trip to calendar (.ics)',
      onclick: function () { downloadIcs(); }
    }));
    section.appendChild(tools);

    section.appendChild(renderSearchBar());

    /* Quick links to all sections */
    const quickLinks = el('div', { class: 'quick-links' });
    [
      { label: 'Stays', target: 'section-stays' },
      { label: 'Itinerary, Athens (arrival)', target: 'section-athens1' },
      { label: 'Itinerary, Chios', target: 'section-chios' },
      { label: 'Itinerary, Crete', target: 'section-crete' },
      { label: 'Itinerary, Athens (departure)', target: 'section-athens2' },
      { label: 'Logistics', target: 'section-logistics' },
      { label: 'Restaurants', target: 'section-restaurants' },
      { label: 'Sites + beaches', target: 'section-sites' },
      { label: 'Map', target: 'section-map' },
      { label: 'Practical', target: 'section-budget' }
    ].forEach(function (link) {
      quickLinks.appendChild(el('button', {
        class: 'quick-link',
        text: link.label,
        onclick: function () { activateSection(link.target); }
      }));
    });
    section.appendChild(quickLinks);
  }

  /* ---------------- TODAY highlight ---------------- */

  function parseDayDate(dateStr) {
    /* "Saturday, Jun 6, 2026" -> Date */
    const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    const m = dateStr.match(/(\w{3}) (\d{1,2}), (\d{4})/);
    if (!m) return null;
    return new Date(parseInt(m[3], 10), months[m[1]], parseInt(m[2], 10));
  }

  function renderTodayHighlight() {
    const wrap = el('div', { class: 'today-block' });
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const matchedDay = (D.days || []).find(function (d) {
      const dd = parseDayDate(d.date);
      return dd && dd.getTime() === today.getTime();
    });

    const tripStart = parseDayDate(D.days[0].date);
    const tripEnd = parseDayDate(D.days[D.days.length - 1].date);

    if (matchedDay) {
      wrap.classList.add('today-block--active');
      wrap.appendChild(el('div', { class: 'today-block__label', text: 'Today, ' + matchedDay.date }));
      wrap.appendChild(el('h3', { class: 'today-block__title', text: matchedDay.title }));
      if (matchedDay.summary) wrap.appendChild(el('p', { class: 'today-block__summary', text: matchedDay.summary }));
      const sectionId = 'section-' + (matchedDay.id.indexOf('athens-') === 0 ? 'athens1' : matchedDay.id.indexOf('athens2-') === 0 ? 'athens2' : matchedDay.id.split('-')[0]);
      const btn = el('button', {
        class: 'today-block__btn',
        text: 'Open today\u2019s plan',
        onclick: function () {
          activateSection(sectionId);
          setTimeout(function () {
            const t = document.getElementById('day-' + matchedDay.id);
            if (t) { if (t.tagName === 'DETAILS') t.open = true; t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
          }, 100);
        }
      });
      wrap.appendChild(btn);
    } else if (today < tripStart) {
      const days = Math.ceil((tripStart - today) / 86400000);
      wrap.appendChild(el('div', { class: 'today-block__label', text: 'Trip starts in' }));
      wrap.appendChild(el('h3', { class: 'today-block__title', text: days + ' ' + (days === 1 ? 'day' : 'days') }));
      wrap.appendChild(el('p', { class: 'today-block__summary', text: 'First flight: United 1710 from Chicago on June 6.' }));
    } else if (today > tripEnd) {
      wrap.appendChild(el('div', { class: 'today-block__label', text: 'Trip ended' }));
      wrap.appendChild(el('h3', { class: 'today-block__title', text: 'Welcome home' }));
      wrap.appendChild(el('p', { class: 'today-block__summary', text: 'Yamas. Until the next one.' }));
    } else {
      wrap.appendChild(el('div', { class: 'today-block__label', text: 'Mid-trip' }));
      wrap.appendChild(el('h3', { class: 'today-block__title', text: 'Travel day' }));
    }
    return wrap;
  }

  /* ---------------- dual-time clock ---------------- */

  function renderDualClock() {
    const wrap = el('div', { class: 'dual-clock' });
    const athens = el('div', { class: 'dual-clock__cell' });
    athens.appendChild(el('div', { class: 'dual-clock__city', text: 'Athens' }));
    athens.appendChild(el('div', { class: 'dual-clock__time', id: 'clock-athens', text: '--:--' }));
    const slc = el('div', { class: 'dual-clock__cell' });
    slc.appendChild(el('div', { class: 'dual-clock__city', text: 'Salt Lake City' }));
    slc.appendChild(el('div', { class: 'dual-clock__time', id: 'clock-slc', text: '--:--' }));
    wrap.appendChild(athens);
    wrap.appendChild(slc);

    function tick() {
      const now = new Date();
      const fmtAthens = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Athens', hour: '2-digit', minute: '2-digit', hour12: false });
      const fmtSlc = new Intl.DateTimeFormat('en-GB', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', hour12: false });
      const a = document.getElementById('clock-athens');
      const s = document.getElementById('clock-slc');
      if (a) a.textContent = fmtAthens.format(now);
      if (s) s.textContent = fmtSlc.format(now);
    }
    tick();
    setInterval(tick, 30000);
    return wrap;
  }

  /* ---------------- search ---------------- */

  function renderSearchBar() {
    const wrap = el('div', { class: 'search-bar' });
    const input = el('input', {
      type: 'search',
      class: 'search-bar__input',
      placeholder: 'Search restaurants, sites, beaches...'
    });
    const results = el('div', { class: 'search-bar__results' });

    function doSearch() {
      const q = input.value.trim().toLowerCase();
      results.innerHTML = '';
      if (q.length < 2) { results.style.display = 'none'; return; }
      results.style.display = 'block';

      const hits = [];
      (D.restaurants || []).forEach(function (r) {
        if ((r.name + ' ' + (r.cuisine || '') + ' ' + (r.area || '')).toLowerCase().indexOf(q) > -1) {
          hits.push({ kind: 'Restaurant', name: r.name, city: r.city, anchor: 'rest-' + slugify(r.name), section: 'section-restaurants' });
        }
      });
      (D.sites || []).forEach(function (s) {
        if ((s.name + ' ' + (s.type || '')).toLowerCase().indexOf(q) > -1) {
          hits.push({ kind: 'Site', name: s.name, city: s.city, anchor: 'site-' + slugify(s.name), section: 'section-sites' });
        }
      });
      (D.beaches || []).forEach(function (b) {
        if (b.name.toLowerCase().indexOf(q) > -1) {
          hits.push({ kind: 'Beach', name: b.name, city: b.city, anchor: 'beach-' + slugify(b.name), section: 'section-sites' });
        }
      });

      if (!hits.length) {
        results.appendChild(el('div', { class: 'search-bar__empty', text: 'No matches.' }));
        return;
      }
      hits.slice(0, 12).forEach(function (h) {
        const row = el('button', {
          class: 'search-bar__hit',
          onclick: function () {
            activateSection(h.section);
            setTimeout(function () {
              const t = document.getElementById(h.anchor);
              if (t) { if (t.tagName === 'DETAILS') t.open = true; t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
            }, 100);
            results.style.display = 'none';
            input.value = '';
          }
        });
        row.appendChild(el('span', { class: 'search-bar__kind', text: h.kind }));
        row.appendChild(el('span', { class: 'search-bar__name', text: h.name }));
        row.appendChild(el('span', { class: 'search-bar__city', text: h.city }));
        results.appendChild(row);
      });
    }
    input.addEventListener('input', doSearch);
    input.addEventListener('focus', doSearch);
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) results.style.display = 'none';
    });

    wrap.appendChild(input);
    wrap.appendChild(results);
    return wrap;
  }

  /* ---------------- calendar (.ics) export ---------------- */

  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function icsTimestamp(dateStr, timeStr) {
    /* dateStr "2026-06-06", timeStr "10:35" -> "20260606T103500" (floating local time in Europe/Athens) */
    return dateStr.replace(/-/g, '') + 'T' + timeStr.replace(':', '') + '00';
  }
  function icsEscape(s) {
    return (s || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
  }
  function generateIcs() {
    const lines = [];
    lines.push('BEGIN:VCALENDAR');
    lines.push('VERSION:2.0');
    lines.push('PRODID:-//Skedros//Greece 2026//EN');
    lines.push('CALSCALE:GREGORIAN');
    lines.push('METHOD:PUBLISH');
    lines.push('X-WR-CALNAME:Greece 2026');
    lines.push('X-WR-TIMEZONE:Europe/Athens');
    (D.events || []).forEach(function (e, i) {
      lines.push('BEGIN:VEVENT');
      lines.push('UID:greece2026-' + i + '@skedros');
      lines.push('DTSTAMP:20260101T000000Z');
      lines.push('DTSTART;TZID=Europe/Athens:' + icsTimestamp(e.date, e.time));
      lines.push('DTEND;TZID=Europe/Athens:' + icsTimestamp(e.date, e.end || e.time));
      lines.push('SUMMARY:' + icsEscape(e.title));
      if (e.description) lines.push('DESCRIPTION:' + icsEscape(e.description));
      if (e.location) lines.push('LOCATION:' + icsEscape(e.location));
      lines.push('END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }
  function downloadIcs() {
    const blob = new Blob([generateIcs()], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'greece-2026.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function metaCard(label, value, valueId) {
    const card = el('div', { class: 'meta-card' });
    card.appendChild(el('div', { class: 'meta-card__label', text: label }));
    card.appendChild(el('div', { class: 'meta-card__value', id: valueId || '', text: value }));
    return card;
  }

  /* ---------------- accommodations + emergency ---------------- */

  function renderStays() {
    const section = $('#section-stays');
    if (!section) return;
    section.innerHTML = '';

    section.appendChild(el('h2', { class: 'section__title', text: 'Stays' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'All four stays at a glance. Tap an address for Google Maps, tap a phone number to call. The address you need when the taxi driver is waiting.' }));

    (D.stays || []).forEach(function (s) {
      const card = el('article', { class: 'stay-v5' });

      const head = el('header', { class: 'stay-v5__head' });
      head.appendChild(el('div', { class: 'stay-v5__leg', text: s.leg }));
      head.appendChild(el('h3', { class: 'stay-v5__name', text: s.name }));
      head.appendChild(el('div', { class: 'stay-v5__dates', text: s.nights + (s.nights === 1 ? ' night' : ' nights') + ' . ' + s.checkIn.replace(/^[A-Za-z]+, /, '') + ' to ' + s.checkOut.replace(/^[A-Za-z]+, /, '') }));
      card.appendChild(head);

      const grid = el('div', { class: 'stay-v5__grid' });

      const addrCell = el('div', { class: 'stay-v5__cell stay-v5__cell--wide' });
      addrCell.appendChild(el('div', { class: 'stay-v5__label', text: 'Address' }));
      addrCell.appendChild(el('a', {
        class: 'stay-v5__address',
        href: 'https://www.google.com/maps/search/' + encodeURIComponent(s.address),
        target: '_blank',
        rel: 'noopener',
        text: s.address
      }));
      addrCell.appendChild(el('div', { class: 'stay-v5__neighborhood', text: s.neighborhood }));
      grid.appendChild(addrCell);

      if (s.phone) {
        const phoneCell = el('div', { class: 'stay-v5__cell' });
        phoneCell.appendChild(el('div', { class: 'stay-v5__label', text: 'Phone' }));
        phoneCell.appendChild(el('a', {
          class: 'stay-v5__phone',
          href: 'tel:' + s.phone.replace(/\s/g, ''),
          text: s.phone
        }));
        grid.appendChild(phoneCell);
      }

      const ciCell = el('div', { class: 'stay-v5__cell' });
      ciCell.appendChild(el('div', { class: 'stay-v5__label', text: 'Check in' }));
      ciCell.appendChild(el('div', { class: 'stay-v5__val', text: s.checkIn + (s.checkInTime ? ', ' + s.checkInTime : '') }));
      grid.appendChild(ciCell);

      const coCell = el('div', { class: 'stay-v5__cell' });
      coCell.appendChild(el('div', { class: 'stay-v5__label', text: 'Check out' }));
      coCell.appendChild(el('div', { class: 'stay-v5__val', text: s.checkOut + (s.checkOutTime ? ', ' + s.checkOutTime : '') }));
      grid.appendChild(coCell);

      if (s.booking) {
        const bk = el('div', { class: 'stay-v5__cell stay-v5__cell--wide' });
        bk.appendChild(el('div', { class: 'stay-v5__label', text: 'Booking' }));
        bk.appendChild(el('div', { class: 'stay-v5__val', text: s.booking }));
        grid.appendChild(bk);
      }

      card.appendChild(grid);

      if (s.links && s.links.length) {
        const links = el('div', { class: 'links-row' });
        s.links.forEach(function (l) {
          const lb = linkBtn(l.label, l.url);
          if (lb) links.appendChild(lb);
        });
        card.appendChild(links);
      }

      section.appendChild(card);
    });

    /* Emergency contacts at the bottom of the Stays page */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Emergency contacts' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Tap any number to call.' }));
    const emer = el('div', { class: 'emer-grid' });
    (D.emergency || []).forEach(function (e) {
      const c = el('div', { class: 'emer-card' });
      c.appendChild(el('div', { class: 'emer-card__label', text: e.label }));
      c.appendChild(el('a', { class: 'emer-card__value', href: 'tel:' + e.value.replace(/\s/g, ''), text: e.value }));
      emer.appendChild(c);
    });
    section.appendChild(emer);
  }

  function stayField(label, value, editableNode) {
    const f = el('div', { class: 'stay-field' });
    f.appendChild(el('div', { class: 'stay-field__label', text: label }));
    if (editableNode) {
      const v = el('div', { class: 'stay-field__value' });
      v.appendChild(editableNode);
      f.appendChild(v);
    } else {
      f.appendChild(el('div', { class: 'stay-field__value', text: value || '' }));
    }
    return f;
  }

  /* ---------------- logistics ---------------- */

  function renderLogistics() {
    const section = $('#section-logistics');
    if (!section) return;
    section.innerHTML = '';

    section.appendChild(el('h2', { class: 'section__title', text: 'Logistics' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Ferries between islands, car rentals, and driving tips. Travel arrangements (flights, hotels) are handled separately.' }));

    /* Ferries */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Ferries' }));
    (D.logistics.ferries || []).forEach(function (leg) {
      const card = el('div', { class: 'logistics-card' });
      card.appendChild(el('div', { class: 'logistics-card__head' }, [
        el('div', { class: 'logistics-card__leg', text: leg.leg }),
        el('div', { class: 'logistics-card__date', text: leg.date })
      ]));
      const mode = el('div', { class: 'logistics-mode' });
      mode.appendChild(el('div', { class: 'logistics-mode__name', text: leg.operator }));
      mode.appendChild(el('div', { class: 'logistics-mode__meta', text: leg.duration + ' . ' + leg.cost }));
      mode.appendChild(el('p', { class: 'logistics-mode__notes', text: leg.notes }));
      if (leg.site) mode.appendChild(linkBtn('Operator site', leg.site));
      card.appendChild(mode);
      section.appendChild(card);
    });

    /* Car rentals */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Car rentals' }));
    D.logistics.carRentals.forEach(function (loc) {
      const card = el('div', { class: 'logistics-card' });
      card.appendChild(el('div', { class: 'logistics-card__head' }, [
        el('div', { class: 'logistics-card__leg', text: loc.location })
      ]));
      loc.vendors.forEach(function (v) {
        const item = el('div', { class: 'logistics-mode' });
        item.appendChild(el('div', { class: 'logistics-mode__name', text: v.name }));
        item.appendChild(el('div', { class: 'logistics-mode__meta', text: (v.phone || 'phone TBD') + ' . ' + v.cost }));
        item.appendChild(el('p', { class: 'logistics-mode__notes', text: v.notes }));
        const links = el('div', { class: 'links-row' });
        if (v.site) {
          const lb = linkBtn('Website', v.site);
          if (lb) links.appendChild(lb);
        }
        const mb = linkBtn('Google Maps', mapsUrl(v.name, loc.location + ', Greece'));
        if (mb) links.appendChild(mb);
        if (links.children.length) item.appendChild(links);
        card.appendChild(item);
      });
      section.appendChild(card);
    });

    /* Driving tips */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Driving in Greece' }));
    const ul = el('ul', { class: 'tips-list' });
    D.logistics.driving.forEach(function (t) { ul.appendChild(el('li', { text: t })); });
    section.appendChild(ul);
  }

  /* ---------------- days ---------------- */

  function renderDayCard(d) {
    const card = el('details', { class: 'day', id: 'day-' + d.id });

    /* Summary bar (always visible, click to expand) */
    const summary = el('summary', { class: 'day__summary-bar' });
    const summaryInner = el('div', { class: 'day__summary-inner' });
    summaryInner.appendChild(el('div', { class: 'day__city', text: d.city }));
    summaryInner.appendChild(el('div', { class: 'day__date', text: d.date }));
    summaryInner.appendChild(el('h3', { class: 'day__title', text: d.title }));
    summary.appendChild(summaryInner);
    summary.appendChild(el('span', { class: 'day__chevron', text: '+' }));
    card.appendChild(summary);

    /* Body (collapsed by default) */
    const body = el('div', { class: 'day__body' });

    if (d.summary) body.appendChild(el('p', { class: 'day__summary', text: d.summary }));
    if (d.weather) body.appendChild(el('p', { class: 'day__weather', text: 'Weather: ' + d.weather }));

    /* Slots */
    if (d.slots && d.slots.length) {
      const slotsWrap = el('div', { class: 'slots' });
      d.slots.forEach(function (s) {
        slotsWrap.appendChild(renderSlot(s));
      });
      body.appendChild(slotsWrap);
    }

    /* Reservations + what to bring + walking */
    const meta = el('div', { class: 'day__meta-grid' });

    if (d.reservations && d.reservations.length) {
      const r = el('div', { class: 'day__meta-block' });
      r.appendChild(el('h4', { class: 'day__meta-title', text: 'Reservations' }));
      const ul = el('ul', { class: 'meta-list' });
      d.reservations.forEach(function (x) { ul.appendChild(el('li', { text: x })); });
      r.appendChild(ul);
      meta.appendChild(r);
    }

    if (d.whatToBring && d.whatToBring.length) {
      const w = el('div', { class: 'day__meta-block' });
      w.appendChild(el('h4', { class: 'day__meta-title', text: 'Bring' }));
      const ul = el('ul', { class: 'meta-list' });
      d.whatToBring.forEach(function (x) { ul.appendChild(el('li', { text: x })); });
      w.appendChild(ul);
      meta.appendChild(w);
    }

    if (d.walking) {
      const w = el('div', { class: 'day__meta-block' });
      w.appendChild(el('h4', { class: 'day__meta-title', text: 'Walking' }));
      w.appendChild(el('p', { class: 'day__walking', text: d.walking }));
      meta.appendChild(w);
    }

    if (meta.children.length) body.appendChild(meta);

    if (d.tip) {
      body.appendChild(el('div', { class: 'day__tip' }, [
        el('span', { class: 'day__tip-label', text: 'Tip: ' }),
        el('span', { text: d.tip })
      ]));
    }

    /* Personal notes block, editable, one per day */
    const notes = el('div', { class: 'day__notes' });
    notes.appendChild(el('h4', { class: 'day__notes-title', text: 'Your notes' }));
    notes.appendChild(el('div', { class: 'day__notes-box' }, [
      editable(getStoreVal('day.notes.' + d.id, '') || 'Tap to add notes for this day...', 'day.notes.' + d.id)
    ]));
    body.appendChild(notes);

    card.appendChild(body);
    return card;
  }

  function renderSlot(s) {
    const slot = el('div', { class: 'slot' });
    if (s.time) slot.appendChild(el('div', { class: 'slot__time', text: s.time }));
    if (s.headline) slot.appendChild(el('div', { class: 'slot__headline', text: s.headline }));
    if (s.description) slot.appendChild(el('p', { class: 'slot__description', text: s.description }));

    /* Links on the slot itself */
    if (s.links && s.links.length) {
      const lr = linksRow(s.links);
      if (lr) slot.appendChild(lr);
    }

    /* Tip */
    if (s.tip) {
      slot.appendChild(el('div', { class: 'slot__tip' }, [
        el('span', { class: 'slot__tip-label', text: 'Tip: ' }),
        el('span', { text: s.tip })
      ]));
    }

    /* timeNeeded */
    if (s.timeNeeded) {
      slot.appendChild(el('div', { class: 'slot__meta', text: 'Time needed: ' + s.timeNeeded }));
    }

    /* Options (numbered choices for the slot) */
    if (s.options && s.options.length) {
      const optWrap = el('div', { class: 'slot__options' });
      optWrap.appendChild(el('h5', { class: 'slot__options-title', text: 'Options' }));
      s.options.forEach(function (o) {
        const oRow = el('div', { class: 'option' });
        oRow.appendChild(el('div', { class: 'option__name', text: o.name }));
        if (o.detail) oRow.appendChild(el('p', { class: 'option__detail', text: o.detail }));
        if (o.links && o.links.length) {
          const lr = linksRow(o.links);
          if (lr) oRow.appendChild(lr);
        }
        if (o.mealOptions) {
          const mWrap = el('div', { class: 'meal-options' });
          o.mealOptions.forEach(function (n) { mWrap.appendChild(mealOptionPill(n)); });
          oRow.appendChild(mWrap);
        }
        optWrap.appendChild(oRow);
      });
      slot.appendChild(optWrap);
    }

    /* Alternatives (if-different from primary) */
    if (s.alternatives && s.alternatives.length) {
      const altWrap = el('div', { class: 'slot__alts' });
      altWrap.appendChild(el('h5', { class: 'slot__options-title', text: 'Alternatives' }));
      s.alternatives.forEach(function (a) {
        const aRow = el('div', { class: 'option' });
        aRow.appendChild(el('div', { class: 'option__name', text: a.name }));
        if (a.detail) aRow.appendChild(el('p', { class: 'option__detail', text: a.detail }));
        if (a.links && a.links.length) {
          const lr = linksRow(a.links);
          if (lr) aRow.appendChild(lr);
        }
        altWrap.appendChild(aRow);
      });
      slot.appendChild(altWrap);
    }

    /* Meal options (pills linking to restaurants section) */
    if (s.mealOptions && s.mealOptions.length) {
      const mealWrap = el('div', { class: 'meal-options-wrap' });
      mealWrap.appendChild(el('h5', { class: 'slot__options-title', text: 'Meal options' }));
      const pills = el('div', { class: 'meal-options' });
      s.mealOptions.forEach(function (n) { pills.appendChild(mealOptionPill(n)); });
      mealWrap.appendChild(pills);
      slot.appendChild(mealWrap);
    }

    return slot;
  }

  function renderDaysByPrefix(sectionId, prefix, title, lede) {
    const section = $('#' + sectionId);
    if (!section) return;
    section.innerHTML = '';
    section.appendChild(el('h2', { class: 'section__title', text: title }));
    if (lede) section.appendChild(el('p', { class: 'section__lede', text: lede }));

    const days = D.days.filter(function (d) { return d.id.indexOf(prefix) === 0; });
    days.forEach(function (d) { section.appendChild(renderDayCard(d)); });
  }

  function renderMap() {
    const section = $('#section-map');
    if (!section) return;
    section.innerHTML = '';

    section.appendChild(el('h2', { class: 'section__title', text: 'Map' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Cartography of the Greek regions and islands. Pinch to zoom, drag to pan. Tap a region for context. Best on a desktop or tablet, works on phone.' }));

    const wrap = el('div', { class: 'map-frame-wrap' });
    const iframe = el('iframe', {
      class: 'map-frame',
      src: 'map.html',
      title: 'Greece map',
      loading: 'lazy'
    });
    iframe.setAttribute('allowfullscreen', '');
    wrap.appendChild(iframe);
    section.appendChild(wrap);

    section.appendChild(el('p', { class: 'map-frame__hint' }, [
      el('a', { href: 'map.html', target: '_blank', text: 'Open map full-screen in a new tab' })
    ]));
  }

  /* ---------------- restaurants / sites / beaches ---------------- */

  function renderRestaurants() {
    const section = $('#section-restaurants');
    if (!section) return;
    section.innerHTML = '';

    section.appendChild(el('h2', { class: 'section__title', text: 'Restaurants' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Every restaurant is vetted with a description, why it made the list, signature dishes, and a Google Maps link. Grouped by city below.' }));

    const CITY_ORDER = ['Athens', 'Chios', 'Crete'];

    /* Quick-jump pills to each city bin */
    const jumpWrap = el('div', { class: 'filter-row' });
    CITY_ORDER.forEach(function (city) {
      const count = D.restaurants.filter(function (r) { return r.city === city; }).length;
      if (!count) return;
      jumpWrap.appendChild(el('a', {
        class: 'filter-btn',
        href: '#restaurants-' + slugify(city),
        text: city + ' (' + count + ')'
      }));
    });
    section.appendChild(jumpWrap);

    function renderRestaurantCard(r) {
      const id = 'rest-' + slugify(r.name);
      const card = el('details', { class: 'entry-card', 'data-city': r.city, id: id });

      /* Summary bar (always visible) */
      const summary = el('summary', { class: 'entry-card__summary' });
      const sumInner = el('div', { class: 'entry-card__sum-inner' });
      sumInner.appendChild(el('h3', { class: 'entry-card__name', text: r.name }));
      const tags = el('div', { class: 'entry-card__tags' });
      if (r.city) tags.appendChild(el('span', { class: 'tag', text: r.city }));
      if (r.area) tags.appendChild(el('span', { class: 'tag', text: r.area }));
      if (r.cuisine) tags.appendChild(el('span', { class: 'tag tag--cuisine', text: r.cuisine }));
      if (r.source) tags.appendChild(el('span', { class: 'tag tag--source', text: r.source }));
      sumInner.appendChild(tags);
      summary.appendChild(sumInner);
      summary.appendChild(el('span', { class: 'entry-card__chevron', text: '+' }));
      card.appendChild(summary);

      /* Body */
      const body = el('div', { class: 'entry-card__body' });
      body.appendChild(el('p', { class: 'entry-card__desc', text: r.description }));

      if (r.why) {
        body.appendChild(el('p', { class: 'entry-card__why' }, [
          el('span', { class: 'entry-card__why-label', text: 'Why: ' }),
          el('span', { text: r.why })
        ]));
      }

      const info = el('div', { class: 'entry-card__info' });
      if (r.phone) info.appendChild(infoBit('Phone', r.phone));
      if (r.price) info.appendChild(infoBit('Price', r.price));
      if (r.hours) info.appendChild(infoBit('Hours', r.hours));
      if (r.reservations) info.appendChild(infoBit('Reservations', r.reservations));
      if (info.children.length) body.appendChild(info);

      if (r.signatures && r.signatures.length) {
        const sig = el('div', { class: 'entry-card__sig' });
        sig.appendChild(el('span', { class: 'entry-card__sig-label', text: 'Signatures: ' }));
        r.signatures.forEach(function (s) { sig.appendChild(el('span', { class: 'chip', text: s })); });
        body.appendChild(sig);
      }

      if (r.bestFor && r.bestFor.length) {
        const bf = el('div', { class: 'entry-card__bestfor' });
        bf.appendChild(el('span', { class: 'entry-card__sig-label', text: 'Best for: ' }));
        r.bestFor.forEach(function (s) { bf.appendChild(el('span', { class: 'chip chip--alt', text: s })); });
        body.appendChild(bf);
      }

      const links = el('div', { class: 'links-row' });
      if (r.website) {
        const lb = linkBtn('Website', r.website);
        if (lb) links.appendChild(lb);
      }
      const mb = linkBtn('Google Maps', mapsUrl(r.name, r.address));
      if (mb) links.appendChild(mb);
      if (links.children.length) body.appendChild(links);

      card.appendChild(body);
      return card;
    }

    /* Restaurants binned by city */
    CITY_ORDER.forEach(function (city) {
      const matches = D.restaurants.filter(function (r) { return r.city === city; });
      if (!matches.length) return;
      section.appendChild(el('h4', {
        class: 'city-group__title',
        id: 'restaurants-' + slugify(city),
        text: city + ' (' + matches.length + ')'
      }));
      const grid = el('div', { class: 'city-group' });
      matches.forEach(function (r) { grid.appendChild(renderRestaurantCard(r)); });
      section.appendChild(grid);
    });
  }

  function renderSitesAndBeaches() {
    const section = $('#section-sites');
    if (!section) return;
    section.innerHTML = '';

    section.appendChild(el('h2', { class: 'section__title', text: 'Sites and beaches' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Archaeological sites, museums, and beaches, grouped by city. Every entry has hours, cost, and direct links to the official site, ticket page, and Google Maps.' }));

    const CITY_ORDER = ['Athens', 'Chios', 'Crete'];

    function renderSiteCard(s) {
      const id = 'site-' + slugify(s.name);
      const card = el('details', { class: 'entry-card', 'data-city': s.city, id: id });

      const summary = el('summary', { class: 'entry-card__summary' });
      const sumInner = el('div', { class: 'entry-card__sum-inner' });
      sumInner.appendChild(el('h3', { class: 'entry-card__name', text: s.name }));
      const tags = el('div', { class: 'entry-card__tags' });
      if (s.city) tags.appendChild(el('span', { class: 'tag', text: s.city }));
      if (s.type) tags.appendChild(el('span', { class: 'tag', text: s.type }));
      if (s.source) tags.appendChild(el('span', { class: 'tag tag--source', text: s.source }));
      sumInner.appendChild(tags);
      summary.appendChild(sumInner);
      summary.appendChild(el('span', { class: 'entry-card__chevron', text: '+' }));
      card.appendChild(summary);

      const body = el('div', { class: 'entry-card__body' });
      body.appendChild(el('p', { class: 'entry-card__desc', text: s.description }));

      const info = el('div', { class: 'entry-card__info' });
      if (s.cost) info.appendChild(infoBit('Cost', s.cost));
      if (s.hours) info.appendChild(infoBit('Hours', s.hours));
      if (s.whenToVisit) info.appendChild(infoBit('When to visit', s.whenToVisit));
      if (info.children.length) body.appendChild(info);

      if (s.tips) {
        body.appendChild(el('p', { class: 'entry-card__tip' }, [
          el('span', { class: 'entry-card__sig-label', text: 'Tips: ' }),
          el('span', { text: s.tips })
        ]));
      }

      const links = el('div', { class: 'links-row' });
      if (s.website) {
        const lb = linkBtn('Official site', s.website);
        if (lb) links.appendChild(lb);
      }
      if (s.tickets && s.tickets.startsWith('http')) {
        const tb = linkBtn('Tickets', s.tickets);
        if (tb) links.appendChild(tb);
      }
      const mb = linkBtn('Google Maps', mapsUrl(s.name, s.city + ', Greece'));
      if (mb) links.appendChild(mb);
      if (links.children.length) body.appendChild(links);

      card.appendChild(body);
      return card;
    }

    function renderBeachCard(b) {
      const id = 'beach-' + slugify(b.name);
      const card = el('details', { class: 'entry-card', 'data-city': b.city, id: id });

      const summary = el('summary', { class: 'entry-card__summary' });
      const sumInner = el('div', { class: 'entry-card__sum-inner' });
      sumInner.appendChild(el('h3', { class: 'entry-card__name', text: b.name }));
      const tags = el('div', { class: 'entry-card__tags' });
      if (b.city) tags.appendChild(el('span', { class: 'tag', text: b.city }));
      if (b.surface) tags.appendChild(el('span', { class: 'tag', text: b.surface }));
      if (b.source) tags.appendChild(el('span', { class: 'tag tag--source', text: b.source }));
      sumInner.appendChild(tags);
      summary.appendChild(sumInner);
      summary.appendChild(el('span', { class: 'entry-card__chevron', text: '+' }));
      card.appendChild(summary);

      const body = el('div', { class: 'entry-card__body' });
      body.appendChild(el('p', { class: 'entry-card__desc', text: b.description }));

      const info = el('div', { class: 'entry-card__info' });
      if (b.distance) info.appendChild(infoBit('Distance', b.distance));
      if (b.facilities) info.appendChild(infoBit('Facilities', b.facilities));
      if (b.vibe) info.appendChild(infoBit('Vibe', b.vibe));
      if (info.children.length) body.appendChild(info);

      if (b.bestFor && b.bestFor.length) {
        const bf = el('div', { class: 'entry-card__bestfor' });
        bf.appendChild(el('span', { class: 'entry-card__sig-label', text: 'Best for: ' }));
        b.bestFor.forEach(function (s) { bf.appendChild(el('span', { class: 'chip chip--alt', text: s })); });
        body.appendChild(bf);
      }

      const links = el('div', { class: 'links-row' });
      if (b.website) {
        const lb = linkBtn('More info', b.website);
        if (lb) links.appendChild(lb);
      }
      const mb = linkBtn('Google Maps', mapsUrl(b.name + ' beach', b.city + ', Greece'));
      if (mb) links.appendChild(mb);
      if (links.children.length) body.appendChild(links);

      card.appendChild(body);
      return card;
    }

    /* Sites subsection, grouped by city */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Sites and museums' }));
    CITY_ORDER.forEach(function (city) {
      const matches = D.sites.filter(function (s) { return s.city === city; });
      if (!matches.length) return;
      section.appendChild(el('h4', { class: 'city-group__title', text: city }));
      const grid = el('div', { class: 'city-group' });
      matches.forEach(function (s) { grid.appendChild(renderSiteCard(s)); });
      section.appendChild(grid);
    });

    /* Beaches subsection, grouped by city */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Beaches' }));
    CITY_ORDER.forEach(function (city) {
      const matches = D.beaches.filter(function (b) { return b.city === city; });
      if (!matches.length) return;
      section.appendChild(el('h4', { class: 'city-group__title', text: city }));
      const grid = el('div', { class: 'city-group' });
      matches.forEach(function (b) { grid.appendChild(renderBeachCard(b)); });
      section.appendChild(grid);
    });
  }

  function infoBit(label, value) {
    const b = el('div', { class: 'info-bit' });
    b.appendChild(el('span', { class: 'info-bit__label', text: label + ': ' }));
    /* Auto-detect phone numbers and wrap in tel: */
    const looksPhone = label === 'Phone' || /^\+?\d[\d\s().-]{6,}$/.test(String(value).trim());
    if (looksPhone && String(value).trim()) {
      b.appendChild(el('a', {
        class: 'info-bit__value info-bit__value--phone',
        href: 'tel:' + String(value).replace(/\s/g, ''),
        text: value
      }));
    } else {
      b.appendChild(el('span', { class: 'info-bit__value', text: value }));
    }
    return b;
  }

  /* ---------------- budget + packing + culture ---------------- */

  function renderPractical() {
    const section = $('#section-budget');
    if (!section) return;
    section.innerHTML = '';

    section.appendChild(el('h2', { class: 'section__title', text: 'Practical' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Emergency numbers, packing checklist, useful Greek, and etiquette notes for the trip.' }));

    /* Currency hint */
    const usd = el('div', { class: 'usd-hint' });
    usd.appendChild(el('div', { class: 'usd-hint__label', text: 'Currency' }));
    usd.appendChild(el('div', { class: 'usd-hint__body', text: 'Prices on this site are in euros (EUR). As of May 2026, EUR 1 is approximately USD 1.08. Quick mental math: drop the cents, add 10% (EUR 25 dinner ~ USD 27). For exact conversions, the XE app works offline once installed.' }));
    section.appendChild(usd);

    /* Emergency contacts */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Emergency contacts' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Tap any number to call.' }));
    const eGrid = el('div', { class: 'emergency-grid' });
    (D.emergency || []).forEach(function (item) {
      const cell = el('div', { class: 'emergency-cell' });
      cell.appendChild(el('div', { class: 'emergency-cell__label', text: item.label }));
      cell.appendChild(el('a', {
        class: 'emergency-cell__value',
        href: 'tel:' + item.value.replace(/\s/g, ''),
        text: item.value
      }));
      eGrid.appendChild(cell);
    });
    section.appendChild(eGrid);

    /* Packing */
    section.appendChild(el('h2', { class: 'section__title', text: 'Packing' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Check off as you pack. Each person has their own state on their device.' }));
    D.packing.forEach(function (group) {
      const card = el('div', { class: 'packing-card' });
      card.appendChild(el('h3', { class: 'packing-card__title', text: group.section }));
      const list = el('div', { class: 'packing-list' });
      group.items.forEach(function (item, i) {
        list.appendChild(checkboxItem(item, 'packing.' + slugify(group.section) + '.' + i));
      });
      card.appendChild(list);
      section.appendChild(card);
    });

    /* Phrases */
    section.appendChild(el('h2', { class: 'section__title', text: 'Useful Greek' }));
    D.phrases.forEach(function (group) {
      const card = el('div', { class: 'phrases-card' });
      card.appendChild(el('h3', { class: 'phrases-card__title', text: group.section }));
      const table = el('table', { class: 'phrases-table' });
      group.items.forEach(function (p) {
        const r = el('tr');
        r.appendChild(el('td', { class: 'phrases-table__gr', text: p.gr }));
        r.appendChild(el('td', { class: 'phrases-table__trans', text: p.trans }));
        r.appendChild(el('td', { class: 'phrases-table__en', text: p.en }));
        table.appendChild(r);
      });
      card.appendChild(table);
      section.appendChild(card);
    });

    /* Etiquette */
    section.appendChild(el('h2', { class: 'section__title', text: 'Etiquette' }));
    const eul = el('ul', { class: 'tips-list' });
    D.etiquette.forEach(function (e) { eul.appendChild(el('li', { text: e })); });
    section.appendChild(eul);
  }

  /* ---------------- contact form ---------------- */

  function renderForm() {
    const section = $('#section-form');
    if (!section) return;
    section.innerHTML = '';

    const form = D.form;
    section.appendChild(el('h2', { class: 'section__title', text: form.title }));
    section.appendChild(el('p', { class: 'section__lede', text: form.intro }));

    if (!D.meta.formEndpoint || D.meta.formEndpoint.indexOf('YOUR_FORM_ID') !== -1) {
      section.appendChild(el('div', { class: 'form-warning' }, [
        el('strong', { text: 'Form not yet configured. ' }),
        el('span', { text: 'See README for Formspree setup instructions. Submissions will fail until the endpoint is set in data.js.' })
      ]));
    }

    const formNode = el('form', { class: 'form', novalidate: 'true' });

    form.fields.forEach(function (f) {
      formNode.appendChild(renderFormField(f));
    });

    const submit = el('button', { type: 'submit', class: 'form__submit', text: 'Send to Athan' });
    formNode.appendChild(submit);

    const status = el('div', { class: 'form__status', id: 'form-status' });
    formNode.appendChild(status);

    formNode.addEventListener('submit', function (e) {
      e.preventDefault();
      handleFormSubmit(formNode, status, submit);
    });

    section.appendChild(formNode);
  }

  function renderFormField(f) {
    const wrap = el('div', { class: 'form__field' });
    wrap.appendChild(el('label', { class: 'form__label', text: f.label + (f.required ? ' *' : '') }));

    if (f.type === 'text' || f.type === 'email' || f.type === 'tel') {
      wrap.appendChild(el('input', {
        type: f.type, name: f.name, class: 'form__input',
        placeholder: f.placeholder || '',
        required: f.required ? 'required' : null
      }));
    } else if (f.type === 'textarea') {
      wrap.appendChild(el('textarea', {
        name: f.name, class: 'form__textarea', rows: '4',
        placeholder: f.placeholder || '',
        required: f.required ? 'required' : null
      }));
    } else if (f.type === 'select') {
      const sel = el('select', { name: f.name, class: 'form__select', required: f.required ? 'required' : null });
      sel.appendChild(el('option', { value: '', text: 'Choose...' }));
      f.options.forEach(function (o) { sel.appendChild(el('option', { value: o, text: o })); });
      wrap.appendChild(sel);
    } else if (f.type === 'checkbox') {
      const group = el('div', { class: 'form__check-group' });
      f.options.forEach(function (o, i) {
        const lab = el('label', { class: 'form__check' });
        lab.appendChild(el('input', { type: 'checkbox', name: f.name + '[]', value: o }));
        lab.appendChild(el('span', { text: o }));
        group.appendChild(lab);
      });
      wrap.appendChild(group);
    } else if (f.type === 'radio') {
      const group = el('div', { class: 'form__radio-group' });
      f.options.forEach(function (o, i) {
        const lab = el('label', { class: 'form__radio' });
        const r = el('input', { type: 'radio', name: f.name, value: o });
        if (f.required && i === 0) r.setAttribute('required', 'required');
        lab.appendChild(r);
        lab.appendChild(el('span', { text: o }));
        group.appendChild(lab);
      });
      wrap.appendChild(group);
    }

    return wrap;
  }

  function handleFormSubmit(formNode, status, submitBtn) {
    const endpoint = D.meta.formEndpoint;
    if (!endpoint || endpoint.indexOf('YOUR_FORM_ID') !== -1) {
      status.className = 'form__status form__status--error';
      status.textContent = 'Form endpoint not configured. See README for setup.';
      return;
    }

    /* Build payload */
    const payload = {};
    const fd = new FormData(formNode);
    /* Handle multi-value fields (checkboxes) */
    const keys = {};
    for (var pair of fd.entries()) {
      const k = pair[0];
      const v = pair[1];
      if (k.endsWith('[]')) {
        const real = k.slice(0, -2);
        if (!keys[real]) keys[real] = [];
        keys[real].push(v);
      } else {
        payload[k] = v;
      }
    }
    Object.keys(keys).forEach(function (k) { payload[k] = keys[k].join(', '); });

    /* Submit */
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    status.className = 'form__status';
    status.textContent = '';

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (res.ok) {
        status.className = 'form__status form__status--success';
        status.textContent = D.form.successMessage;
        formNode.reset();
        submitBtn.textContent = 'Sent';
      } else {
        return res.json().then(function (data) {
          status.className = 'form__status form__status--error';
          status.textContent = D.form.errorMessage + (data && data.error ? ' (' + data.error + ')' : '');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send to Athan';
        });
      }
    }).catch(function () {
      status.className = 'form__status form__status--error';
      status.textContent = D.form.errorMessage;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send to Athan';
    });
  }

  /* ---------------- navigation ---------------- */

  function activateSection(id) {
    $$('.section').forEach(function (s) { s.classList.remove('is-active'); });
    $$('.nav__btn').forEach(function (b) { b.classList.remove('is-active'); });
    const sec = $('#' + id);
    if (sec) sec.classList.add('is-active');
    const btn = $('.nav__btn[data-target="' + id + '"]');
    if (btn) btn.classList.add('is-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function bindNav() {
    $$('.nav__btn').forEach(function (b) {
      b.addEventListener('click', function () {
        activateSection(b.getAttribute('data-target'));
      });
    });
    /* Brand click returns to overview */
    const brand = $('.brand');
    if (brand) {
      brand.addEventListener('click', function () { activateSection('section-overview'); });
      brand.style.cursor = 'pointer';
    }
  }

  /* ---------------- header titles ---------------- */

  function renderHeader() {
    const t = $('.brand__title');
    const s = $('.brand__sub');
    if (t) t.textContent = D.meta.title;
    if (s) s.textContent = D.meta.subtitle + ' . ' + D.meta.dateRange;
  }

  /* ---------------- boot ---------------- */

  function boot() {
    renderHeader();
    bindNav();
    renderOverview();
    renderCountdown();
    renderLogistics();
    renderDaysByPrefix('section-athens1', 'athens-', 'Athens, arrival leg', 'Jun 6 to Jun 9. Land, settle, see the Acropolis, fly to Chios.');
    renderDaysByPrefix('section-chios', 'chios-', 'Chios', 'Jun 9 to Jun 14. Five nights at the Grecian Castle Hotel exploring the mastic villages, mountain monastery, and the quiet Aegean beaches.');
    renderDaysByPrefix('section-crete', 'crete-', 'Crete', 'Jun 14 to Jun 19. Five nights in Chania, Old Town and Venetian harbor, Balos and Elafonisi, and the Samaria Gorge.');
    renderDaysByPrefix('section-athens2', 'athens2-', 'Athens, departure leg', 'Jun 19 to Jun 21. Cape Sounion at sunset, last meals, fly home.');
    renderRestaurants();
    renderSitesAndBeaches();
    renderMap();
    renderStays();
    renderPractical();
    activateSection('section-overview');

    /* When a link points to a specific day or entry card, open it */
    function openTargetedDetails() {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target && target.tagName === 'DETAILS') target.open = true;
    }
    window.addEventListener('hashchange', openTargetedDetails);
    openTargetedDetails();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
