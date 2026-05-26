/* Greece 2026 service worker. Network-first for HTML, cache-first for assets. */
const CACHE = 'greece2026-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './map.html',
  './manifest.json'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  const url = new URL(e.request.url);
  /* Only handle same-origin GETs. Skip everything else (fonts, MCP, third-party). */
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;

  /* HTML: network-first so updates are picked up, fallback to cache offline */
  if (e.request.mode === 'navigate' || e.request.headers.get('accept').indexOf('text/html') > -1) {
    e.respondWith(
      fetch(e.request).then(function (resp) {
        const copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return resp;
      }).catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match('./index.html'); }); })
    );
    return;
  }

  /* Other assets: cache-first */
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      return cached || fetch(e.request).then(function (resp) {
        const copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return resp;
      });
    })
  );
});
