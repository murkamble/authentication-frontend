importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
workbox
.precaching
.precacheAndRoute([
    {"revision":"38c627743b6f4107322a7c99aad010ed","url":"index.html"},
    {"revision":"286b95999674de35fe1999dd1b781b2e","url":"logo192.png"},
    {"revision":"a0fda779bace1695fad80bf256ed9691","url":"logo512.png"},
    {"revision":"4abe19367f79cf7d630c399feab2b231","url":"static/css/2.4f8976c6.chunk.css"},
    {"revision":"90daa39b7a1308834c45dad0efc0c3a0","url":"static/css/main.2b280977.chunk.css"},
    {"revision":"89a5ecf9c1a6286dadd88209caddaf21","url":"static/js/2.56f81688.chunk.js"},
    {"revision":"1973c0005a2ee542c17a6adaaac95a43","url":"static/js/main.036483d4.chunk.js"},
    {"revision":"25048e83288e220b06617f65da7141e0","url":"static/js/runtime-main.493233b0.js"}
    ]);