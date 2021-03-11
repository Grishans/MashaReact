importScripts("workbox-v5.1.3/workbox-sw.js");
workbox.setConfig({ modulePathPrefix: "workbox-v5.1.3/" });

const dataCacheConfig = {
  cacheName: "meme-data",
};

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
  /.*forms/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);
workbox.routing.registerRoute(
  /.*/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);
workbox.routing.registerRoute(
  /.*inst/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);
workbox.routing.registerRoute(
  /.*reviews/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);
workbox.routing.registerRoute(
  /.*about/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);
workbox.routing.registerRoute(
  /.*course/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);
workbox.routing.registerRoute(
  /.*portfolio/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);
workbox.routing.registerRoute(
  /.*service/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);
workbox.routing.registerRoute(
  /.*settings/,
  new workbox.strategies.NetworkFirst(dataCacheConfig),
  "GET"
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.NetworkFirst({ cacheName: "meme-images" }),
  "GET"
);

self.addEventListener("install", (e) => {
  const channel = new BroadcastChannel("service-worker-channel");
  channel.postMessage({ promptToReload: true });
  channel.onmessage = (message) => {
    if (message.data.skipWaiting) {
      self.skipWaiting();
    }
  };
  //e.waitUntil(self.skipWaiting())
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
