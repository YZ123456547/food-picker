const CACHE_NAME = "shimeal-v1";
const urlsToCache = [
  "/food-picker/",
  "/food-picker/index.html",
  "/food-picker/manifest.json",
  "/food-picker/src/style.css",
  "/food-picker/src/app.js",
  "/food-picker/src/data.js",
  "/food-picker/public/icons/icon.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((c) => c.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
});
