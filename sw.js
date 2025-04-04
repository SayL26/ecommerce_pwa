self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('shop-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/images/phone.jpeg',
                '/js/script.js'
            ]);
        })
    );
});
