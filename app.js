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
        /* Smooth scroll, but also switch to Restaurants tab */
        e.preventDefault();
        activateSection('section-restaurants');
        setTimeout(function () {
          const target = document.getElementById(anchorId);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    const meta = el('div', { class: 'meta-grid' });
    meta.appendChild(metaCard('Dates', D.meta.dateRange));
    meta.appendChild(metaCard('Travelers', D.meta.travelers));
    meta.appendChild(metaCard('Countdown', '', 'countdown'));
    section.appendChild(meta);

    section.appendChild(el('p', { class: 'intro', text: D.meta.intro }));

    /* Quick links to all sections */
    const quickLinks = el('div', { class: 'quick-links' });
    [
      { label: 'Itinerary, Athens (arrival)', target: 'section-athens1' },
      { label: 'Itinerary, Chios', target: 'section-chios' },
      { label: 'Itinerary, Crete', target: 'section-crete' },
      { label: 'Itinerary, Athens (departure)', target: 'section-athens2' },
      { label: 'Logistics', target: 'section-logistics' },
      { label: 'Restaurants', target: 'section-restaurants' },
      { label: 'Sites + beaches', target: 'section-sites' },
      { label: 'Practical', target: 'section-budget' },
      { label: 'Contact form', target: 'section-form' }
    ].forEach(function (link) {
      quickLinks.appendChild(el('button', {
        class: 'quick-link',
        text: link.label,
        onclick: function () { activateSection(link.target); }
      }));
    });
    section.appendChild(quickLinks);
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
    section.appendChild(el('p', { class: 'section__lede', text: 'Accommodation details. Editable booking fields highlighted so Athan can fill in addresses and confirmation numbers as bookings finalize.' }));

    Object.keys(D.accommodations).forEach(function (k) {
      const a = D.accommodations[k];
      const card = el('div', { class: 'stay-card' + (a.confirmed ? ' stay-card--confirmed' : ' stay-card--pending') });

      card.appendChild(el('div', { class: 'stay-card__header' }, [
        el('div', { class: 'stay-card__label', text: a.label }),
        el('div', { class: 'stay-card__dates', text: a.dates })
      ]));

      const grid = el('div', { class: 'stay-card__grid' });
      grid.appendChild(stayField('Property', a.name));
      grid.appendChild(stayField('Address (editable)', null, editable(a.address || '', 'stay.' + k + '.address')));
      grid.appendChild(stayField('Phone (editable)', null, editable(a.phone || '', 'stay.' + k + '.phone')));
      grid.appendChild(stayField('Confirmation (editable)', null, editable(a.confirmation || '', 'stay.' + k + '.conf')));
      if (a.checkIn) grid.appendChild(stayField('Check in', a.checkIn));
      if (a.checkOut) grid.appendChild(stayField('Check out', a.checkOut));
      if (a.host) grid.appendChild(stayField('Host', a.host));
      if (a.hostEmail) grid.appendChild(stayField('Host email', a.hostEmail));
      card.appendChild(grid);

      if (a.notes) card.appendChild(el('p', { class: 'stay-card__notes', text: a.notes }));

      const links = el('div', { class: 'links-row' });
      const mb = linkBtn('Google Maps', mapsUrl(a.name, a.address));
      const wb = a.website ? linkBtn('Listing site', a.website) : null;
      if (mb) links.appendChild(mb);
      if (wb) links.appendChild(wb);
      if (links.children.length) card.appendChild(links);

      section.appendChild(card);
    });

    /* Emergency contacts */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Emergency contacts' }));
    const emer = el('div', { class: 'emer-grid' });
    D.emergency.forEach(function (e) {
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
      const card = el('article', { class: 'entry-card', 'data-city': r.city, id: id });

      const head = el('div', { class: 'entry-card__head' });
      head.appendChild(el('h3', { class: 'entry-card__name', text: r.name }));
      head.appendChild(el('div', { class: 'entry-card__tags' }, [
        el('span', { class: 'tag', text: r.city }),
        el('span', { class: 'tag', text: r.area || '' }),
        el('span', { class: 'tag tag--cuisine', text: r.cuisine || '' })
      ]));
      card.appendChild(head);

      card.appendChild(el('p', { class: 'entry-card__desc', text: r.description }));

      if (r.why) {
        card.appendChild(el('p', { class: 'entry-card__why' }, [
          el('span', { class: 'entry-card__why-label', text: 'Why: ' }),
          el('span', { text: r.why })
        ]));
      }

      const info = el('div', { class: 'entry-card__info' });
      if (r.phone) info.appendChild(infoBit('Phone', r.phone));
      if (r.price) info.appendChild(infoBit('Price', r.price));
      if (r.hours) info.appendChild(infoBit('Hours', r.hours));
      if (r.reservations) info.appendChild(infoBit('Reservations', r.reservations));
      if (info.children.length) card.appendChild(info);

      if (r.signatures && r.signatures.length) {
        const sig = el('div', { class: 'entry-card__sig' });
        sig.appendChild(el('span', { class: 'entry-card__sig-label', text: 'Signatures: ' }));
        r.signatures.forEach(function (s) { sig.appendChild(el('span', { class: 'chip', text: s })); });
        card.appendChild(sig);
      }

      if (r.bestFor && r.bestFor.length) {
        const bf = el('div', { class: 'entry-card__bestfor' });
        bf.appendChild(el('span', { class: 'entry-card__sig-label', text: 'Best for: ' }));
        r.bestFor.forEach(function (s) { bf.appendChild(el('span', { class: 'chip chip--alt', text: s })); });
        card.appendChild(bf);
      }

      const links = el('div', { class: 'links-row' });
      if (r.website) {
        const lb = linkBtn('Website', r.website);
        if (lb) links.appendChild(lb);
      }
      const mb = linkBtn('Google Maps', mapsUrl(r.name, r.address));
      if (mb) links.appendChild(mb);
      if (links.children.length) card.appendChild(links);

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
      const card = el('article', { class: 'entry-card', 'data-city': s.city, id: id });

      const head = el('div', { class: 'entry-card__head' });
      head.appendChild(el('h3', { class: 'entry-card__name', text: s.name }));
      head.appendChild(el('div', { class: 'entry-card__tags' }, [
        el('span', { class: 'tag', text: s.city }),
        el('span', { class: 'tag', text: s.type || '' })
      ]));
      card.appendChild(head);

      card.appendChild(el('p', { class: 'entry-card__desc', text: s.description }));

      const info = el('div', { class: 'entry-card__info' });
      if (s.cost) info.appendChild(infoBit('Cost', s.cost));
      if (s.hours) info.appendChild(infoBit('Hours', s.hours));
      if (s.whenToVisit) info.appendChild(infoBit('When to visit', s.whenToVisit));
      if (info.children.length) card.appendChild(info);

      if (s.tips) {
        card.appendChild(el('p', { class: 'entry-card__tip' }, [
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
      if (links.children.length) card.appendChild(links);

      return card;
    }

    function renderBeachCard(b) {
      const id = 'beach-' + slugify(b.name);
      const card = el('article', { class: 'entry-card', 'data-city': b.city, id: id });

      const head = el('div', { class: 'entry-card__head' });
      head.appendChild(el('h3', { class: 'entry-card__name', text: b.name }));
      head.appendChild(el('div', { class: 'entry-card__tags' }, [
        el('span', { class: 'tag', text: b.city }),
        el('span', { class: 'tag', text: b.surface || '' })
      ]));
      card.appendChild(head);

      card.appendChild(el('p', { class: 'entry-card__desc', text: b.description }));

      const info = el('div', { class: 'entry-card__info' });
      if (b.distance) info.appendChild(infoBit('Distance', b.distance));
      if (b.facilities) info.appendChild(infoBit('Facilities', b.facilities));
      if (b.vibe) info.appendChild(infoBit('Vibe', b.vibe));
      if (info.children.length) card.appendChild(info);

      if (b.bestFor && b.bestFor.length) {
        const bf = el('div', { class: 'entry-card__bestfor' });
        bf.appendChild(el('span', { class: 'entry-card__sig-label', text: 'Best for: ' }));
        b.bestFor.forEach(function (s) { bf.appendChild(el('span', { class: 'chip chip--alt', text: s })); });
        card.appendChild(bf);
      }

      const links = el('div', { class: 'links-row' });
      if (b.website) {
        const lb = linkBtn('More info', b.website);
        if (lb) links.appendChild(lb);
      }
      const mb = linkBtn('Google Maps', mapsUrl(b.name + ' beach', b.city + ', Greece'));
      if (mb) links.appendChild(mb);
      if (links.children.length) card.appendChild(links);

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
    b.appendChild(el('span', { class: 'info-bit__value', text: value }));
    return b;
  }

  /* ---------------- budget + packing + culture ---------------- */

  function renderPractical() {
    const section = $('#section-budget');
    if (!section) return;
    section.innerHTML = '';

    section.appendChild(el('h2', { class: 'section__title', text: 'Practical' }));
    section.appendChild(el('p', { class: 'section__lede', text: 'Emergency numbers, packing checklist, useful Greek, and etiquette notes for the trip.' }));

    /* Emergency contacts */
    section.appendChild(el('h3', { class: 'subsection__title', text: 'Emergency contacts' }));
    const eGrid = el('div', { class: 'emergency-grid' });
    (D.emergency || []).forEach(function (item) {
      const cell = el('div', { class: 'emergency-cell' });
      cell.appendChild(el('div', { class: 'emergency-cell__label', text: item.label }));
      cell.appendChild(el('div', { class: 'emergency-cell__value', text: item.value }));
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
    renderPractical();
    renderForm();
    activateSection('section-overview');

    /* When a link points to a specific day, open that day's details */
    function openTargetedDay() {
      const hash = window.location.hash;
      if (!hash || hash.indexOf('#day-') !== 0) return;
      const target = document.querySelector(hash);
      if (target && target.tagName === 'DETAILS') target.open = true;
    }
    window.addEventListener('hashchange', openTargetedDay);
    openTargetedDay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
