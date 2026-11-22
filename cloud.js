/* LinguaFlow cloud layer (ES module). Shared vocabulary = Firestore collection "vocab" (public read, admin-only write).
   app.js owns the local outbox; this file only reads the collection and pushes one outbox entry at a time. */
const G='https://www.gstatic.com/firebasejs/10.12.2/';
const emit=d=>window.dispatchEvent(new CustomEvent('cloud',{detail:d}));
const cfg=window.FIREBASE_CONFIG,off=!cfg||!cfg.apiKey||/YOUR_/.test(JSON.stringify(cfg));
window.Cloud={ready:()=>false,signIn(){},signOut(){},pushDoc:async()=>({ok:false,code:'off'})};
if(off)emit({status:'off',user:null,docs:[]});
else try{
const [A,F,U]=await Promise.all([import(G+'firebase-app.js'),import(G+'firebase-firestore.js'),import(G+'firebase-auth.js')]);
const app=A.initializeApp(cfg);
const db=F.initializeFirestore(app,{localCache:F.persistentLocalCache({tabManager:F.persistentMultipleTabManager()})});
const auth=U.getAuth(app);let st='connecting',user=null,docs=[],err='';
const pub=()=>emit({status:st,user,docs,error:err});
window.Cloud={ready:()=>true,
/* one outbox entry. Transaction = reads the cloud copy first: a newer cloud edit (higher "ut") wins and is never overwritten. Needs a connection, so it fails cleanly offline. */
async pushDoc(key,op,data){try{const r=F.doc(db,'vocab',key);
return await Promise.race([F.runTransaction(db,async tx=>{const s=await tx.get(r),c=s.exists()?s.data():null;
if(op==='delete'){if(c&&!c.deleted)tx.update(r,{deleted:true,ut:Date.now(),updatedAt:F.serverTimestamp()});return{ok:true}}
if(c&&(c.ut||0)>data.ut)return{ok:true,newer:true};
tx.set(r,{...data,deleted:false,updatedAt:F.serverTimestamp()});return{ok:true}}),new Promise((_,j)=>setTimeout(()=>j({code:'timeout'}),20000))])}
catch(e){return{ok:false,code:(e&&e.code)||'failed'}}},
signIn(){return U.signInWithPopup(auth,new U.GoogleAuthProvider()).catch(()=>{})},signOut(){return U.signOut(auth)}};
U.onAuthStateChanged(auth,async u=>{if(!u){user=null;pub();return}
let admin=false,checked=false;try{admin=(await F.getDoc(F.doc(db,'admins',u.uid))).exists();checked=true}catch(e){}
user={uid:u.uid,name:u.displayName||'',admin,checked};pub()});
F.onSnapshot(F.collection(db,'vocab'),s=>{docs=s.docs.map(d=>{const x=d.data();return{key:d.id,arabic:x.arabic,mz:x.mz||'',mzAlt:Array.isArray(x.mzAlt)?x.mzAlt:[],mzPron:x.mzPron||'',mzDir:x.mzDir,day:Number.isInteger(x.day)?x.day:null,deleted:!!x.deleted,ut:x.ut||0}});st=navigator.onLine?'ok':'offline';err='';pub()},e=>{st='error';err=e.code||'failed';pub()});
window.addEventListener('offline',()=>{st='offline';pub()});window.addEventListener('online',()=>{if(st==='offline')st='ok';pub()});
}catch(e){console.error('cloud init failed',e);emit({status:'error',user:null,docs:[],error:'init'})}
