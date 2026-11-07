/* LinguaFlow service worker. Bump VERSION whenever any app file changes. */
const VERSION='v2',CACHE='linguaflow-'+VERSION;
const SHELL=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{
  /* tolerant precache: one missing file must not break installation */
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('linguaflow-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
/* the page asks for activation only when the user taps "Update" */
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin!==location.origin){
    /* Google Fonts: cache for offline; every other cross-origin call (e.g. the optional MyMemory translation) always uses the network */
    if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
      e.respondWith(caches.open(CACHE).then(c=>c.match(r).then(h=>{
        const n=fetch(r).then(res=>{if(res.ok||res.type==='opaque')c.put(r,res.clone());return res}).catch(()=>h);
        return h||n;
      })));
    }
    return;
  }
  if(r.mode==='navigate'){
    e.respondWith(fetch(r).then(res=>{if(res.ok){const k=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',k))}return res}).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.open(CACHE).then(c=>c.match(r).then(h=>{
    const n=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}).catch(()=>h);
    return h||n;
  })));
});
