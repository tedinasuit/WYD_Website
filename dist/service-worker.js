if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const u=e=>n(e,l),t={module:{uri:l},exports:o,require:u};i[l]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"WYD_Website"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.837ef107.css",revision:null},{url:"/img/Figma.90c9bed9.png",revision:null},{url:"/img/Hippie-kleurrijk.b606e163.png",revision:null},{url:"/img/Instagram.b1bac937.png",revision:null},{url:"/img/WhatYouDesign-TransWit.72ccd3f7.png",revision:null},{url:"/img/contactus.b361b3d5.png",revision:null},{url:"/img/hippie-achtergrond-2.b72193a7.png",revision:null},{url:"/img/instapage.3cb40226.png",revision:null},{url:"/img/whoarewe.83ba970f.png",revision:null},{url:"/index.html",revision:"7b7e7b9ed98082dcec93646a73bcfd88"},{url:"/js/app.6ac72a05.js",revision:null},{url:"/js/chunk-vendors.e83b1ba0.js",revision:null},{url:"/manifest.json",revision:"4284aea8b9ad6c1efb663b9c78629c60"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
