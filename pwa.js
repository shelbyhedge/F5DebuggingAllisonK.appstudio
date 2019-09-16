const version = 1567268484.1;
const contentToCache = [
'/',  'index.html',
  'code.js',
  'OfflineApp.appcache',
  'manifest.json',
  'toolbox/as/dist/asStyle.css',
  'nsb/images/LauncherIcon57.png',
  'nsb/images/192.png',
  'nsb/library/appstudioFunctions.js',
  'nsb/library/jquery3.js',
  'nsb/library/jquery.modal.min.css',
  'nsb/library/jquery.modal.min.js',
];

;
const cacheName = `app-$1567268484.1`;
console.log('[PWA] Startup', cacheName);

self.addEventListener('activate', ((e) => {
  'use strict';

  console.log('[PWA] Clear old caches');
  e.waitUntil(
    caches.keys().then((keyList) => {
      console.log('keylist', keyList);
      return Promise.all(keyList.map((key) => {
        console.log('  Key:', key);
        if (cacheName.indexOf(key) === -1) {
          console.log('  Delete:', key);
          return caches.delete(key);
        }
      }));
    }),
  );
}));

self.addEventListener('install', (e) => {
  'use strict';

  console.log('[PWA] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[PWA] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  'use strict';

  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => response || fetch(event.request)),
  );
});

/* Add to home screen prompt:
https://developers.google.com/web/fundamentals/app-install-banners/#criteria
- needs an Install button to show

- Should PWA stuff happen for PhoneGap? no, but we can't check for cordova.js
- Any reason to have a switch for PWA?
- What triggers the update? Simple refresh doesn't do it.
- Clear cache happens on activate. When does that happen?


AppCaching:
remove AddToHome screen library
remove app Caching
test transition from appcache to PWA
remove manifestFile property
*/

/*
Get list of current caches:
caches.keys().then((keyList) => {console.log(keyList)})
*/

