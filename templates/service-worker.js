"use strict";var precacheConfig=[["/index.html","41899e2c6d4cdd7dfa53f152dcf3bfd3"],["/static/css/main.89de889a.css","e8b83df7ed6fa1a8c98c26cb24d64adb"],["/static/js/main.90090a7d.js","b0cc7df29d9e97fdcc71a7413bed80f2"],["/static/media/SeanCollings.6c34ae65.png","6c34ae65e5d979709306ae8ae3180b16"],["/static/media/apacheinstall.e9d36fc4.png","e9d36fc498f3b4d306bdef90e4c07a9c"],["/static/media/blue-mobo.9807ddc9.png","9807ddc90946bfcb18a34809eeed1e11"],["/static/media/blue.84330bbb.png","84330bbba5461c6d29d3da761db2dd29"],["/static/media/cts.c79a11fc.png","c79a11fc20b2af03ca45baee14f64574"],["/static/media/logo-color.59ee6a58.png","59ee6a581ffe8b1aea99dc95d96d6a3e"],["/static/media/logo.031d59bd.png","031d59bd4ec9acfec57a76f98f19ed73"],["/static/media/mta.e7007069.png","e70070698bde7ca502590662f89b4de5"],["/static/media/netPro.1ba77250.png","1ba77250316bc69cf3e69bece18258d3"],["/static/media/npminstall.b7f26e6d.png","b7f26e6dfe721bd955b39c1bd88c5985"],["/static/media/npmstart.ca7f02ca.png","ca7f02cad363988296fae14b9cbf6782"],["/static/media/pcPro.88070591.png","880705911303962834a94e8a2a9ad94c"],["/static/media/ssh.2b90afbe.png","2b90afbe0f7377f92264a5182622d67b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});