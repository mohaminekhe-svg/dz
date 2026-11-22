/* LinguaFlow cloud layer (ES module). Shared vocabulary = Firestore collection "vocab" (public read, write for any signed-in Google account).
   Every failure is reported to app.js with a precise status so the UI can show a useful diagnostic. */
const G='https://www.gstatic.com/firebasejs/10.12.2/';
const cfg=window.FIREBASE_CONFIG||{},pid=cfg.projectId||'';
const bad=['apiKey','authDomain','projectId','appId'].filter(k=>!cfg[k]||/YOUR_|^\s*$/.test(String(cfg[k])));
let st='connecting',user=null,docs=[],err='',autherr='';
const emit=(o={})=>window.dispatchEvent(new CustomEvent('cloud',{detail:{status:st,user,docs,error:err,autherr,projectId:pid,...o}}));
window.Cloud={ready:()=>false,signIn(){},signOut(){},pushDoc:async()=>({ok:false,code:'off'})};
(async()=>{
if(bad.length){st='off';err=bad.join(', ');return emit()}
let A,F,U;
try{[A,F,U]=await Promise.all([import(G+'firebase-app.js'),import(G+'firebase-firestore.js'),import(G+'firebase-auth.js')])}
catch(e){st='sdk';err=String(e&&e.message||e);return emit()}
try{
const app=A.initializeApp(cfg);let db;
try{db=F.initializeFirestore(app,{localCache:F.persistentLocalCache({tabManager:F.persistentMultipleTabManager()})})}catch(e){db=F.getFirestore(app)}
const auth=U.getAuth(app);
window.Cloud={ready:()=>true,
/* one outbox entry. Transaction: the cloud copy is read first, a newer cloud edit (higher "ut") is never overwritten. Needs a connection, so it fails cleanly offline. */
async pushDoc(key,op,data){try{const r=F.doc(db,'vocab',key);
return await Promise.race([F.runTransaction(db,async tx=>{const s=await tx.get(r),c=s.exists()?s.data():null;
if(op==='delete'){if(c&&!c.deleted)tx.update(r,{deleted:true,ut:Date.now(),updatedAt:F.serverTimestamp()});return{ok:true}}
if(c&&(c.ut||0)>data.ut)return{ok:true,newer:true};
tx.set(r,{...data,deleted:false,updatedAt:F.serverTimestamp()});return{ok:true}}),new Promise((_,j)=>setTimeout(()=>j({code:'timeout'}),20000))])}
catch(e){return{ok:false,code:(e&&e.code)||'failed'}}},
async signIn(){autherr='';try{await U.signInWithPopup(auth,new U.GoogleAuthProvider())}catch(e){autherr=e.code||'failed';emit()}},signOut(){return U.signOut(auth)}};
/* shared dictionary: every signed-in Google account is a full contributor (no admin list). "admin" stays in the user object only as the flag app.js reads to mean "may write". */
U.onAuthStateChanged(auth,u=>{if(!u){user=null;return emit()}
user={uid:u.uid,name:u.displayName||u.email||'',admin:true,checked:true};emit()});
F.onSnapshot(F.collection(db,'vocab'),s=>{docs=s.docs.map(d=>{const x=d.data(),sv=k=>typeof x[k]==='string'?x[k]:null;return{key:d.id,arabic:x.arabic,mz:x.mz||'',fr:sv('fr'),en:sv('en'),mzAlt:Array.isArray(x.mzAlt)?x.mzAlt:[],mzPron:x.mzPron||'',mzDir:x.mzDir,day:Number.isInteger(x.day)?x.day:null,deleted:!!x.deleted,ut:x.ut||0}});
st=navigator.onLine?'ok':'offline';err='';emit()},e=>{const c=e.code||'failed';st=c==='permission-denied'?'perm':(c==='not-found'||/does not exist/i.test(e.message||''))?'nodb':'error';err=c;emit()});
window.addEventListener('offline',()=>{if(st==='ok'){st='offline';emit()}});window.addEventListener('online',()=>{if(st==='offline'){st='ok';emit()}});
}catch(e){st='error';err=e.code||String(e&&e.message||e);emit()}
})();
