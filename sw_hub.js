/* ==================== Game Hub Service Worker ==================== */
const CACHE_NAME = 'game-hub-cache-v1';
const CACHE_FILES = [
  'game-hub.html',
  'bgm.mp3',
  'icon-hub.jpg',
  'manifest_hub.json'
];

/* Install - cache core assets */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CACHE_FILES))
      .catch(() => {})
  );
  self.skipWaiting();
});

/* Activate - clean up old caches */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

/* Fetch - cache-first with network fallback */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          // Cache successful responses for same-origin requests
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return cached fallback if available
          return caches.match(event.request);
        });
    })
  );
});
