const cacheName = "cache-insects";

// Når websitet indlæses, cache ressourcer nævnt i listen
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(["/insects2/", "/insects2/index.html", "/insects2/butterflies.jpg", "/insects2/butterfly.jpg", "/insects2/dragonfly.jpg"]);
        })
    )
})

// Hvis ressource ikke er tilgængelig online, så søg i cachen
// efter et match.
self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(() =>
        caches.open(cacheName).then(cache=>cache.match(event.request))
        )
    )
})
