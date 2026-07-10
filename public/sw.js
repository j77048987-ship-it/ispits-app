const CACHE_NAME = 'ispits-pwa-cache-v3';
const OFFLINE_URL = '/';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_URL]);
    })
  );
  self.skipWaiting(); // التنشيط الفوري فور التثبيت دون انتظار إغلاق المتصفح
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // فرض التحكم الفوري في الصفحة الحالية لتمرير الفحص بنجاح
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.match(OFFLINE_URL);
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
