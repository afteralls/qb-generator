if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const t=e=>i(e,l),c={module:{uri:l},exports:o,require:t};n[l]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"barcode-generation-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.b3d4de78.css",revision:null},{url:"img/check.ff04ee2d.png",revision:null},{url:"img/github.c23374f8.png",revision:null},{url:"img/ntf.0d7349c2.png",revision:null},{url:"img/telegram.b4653941.png",revision:null},{url:"index.html",revision:"48d772f77ef581bf379c5500f99c0bcb"},{url:"js/app.a9d973f1.js",revision:null},{url:"js/chunk-vendors.b8c8d886.js",revision:null},{url:"manifest.json",revision:"7c54c279642867e7b96359d7b5235a8e"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
