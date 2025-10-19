self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', () => {
  clients.claim()
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('equilibrium-cache-v1').then(cache =>
      cache.match(event.request).then(response =>
        response || fetch(event.request).then(networkResponse => {
          cache.put(event.request, networkResponse.clone())
          return networkResponse
        })
      )
    )
  )
})