const LG=['ar','fr','en','mz'],DIR={ar:'rtl',fr:'ltr',en:'ltr',mz:'ltr'},IX={ar:0,fr:1,en:2};
const NM={ar:{ar:'العربية',fr:'الفرنسية',en:'الإنجليزية',mz:'المزابية Tumẓabt'},fr:{ar:'Arabe',fr:'Français',en:'Anglais',mz:'Mozabite Tumẓabt'},en:{ar:'Arabic',fr:'French',en:'English',mz:'Mozabite Tumẓabt'}};
const D={dash:['الرئيسية','Accueil','Home'],vocab:['مفرداتي','Mon vocabulaire','My vocabulary'],quiz:['اختبر نفسي','Quiz','Quiz'],stats:['إحصائياتي','Statistiques','Stats'],set:['الإعدادات','Réglages','Settings'],soon:['قريبًا','Bientôt','Soon'],
add:['إضافة كلمة أو جملة','Ajouter un mot ou une phrase','Add a word or phrase'],q:['ابحث في النصوص والترجمات','Rechercher dans les textes et traductions','Search texts and translations'],all:['الكل','Tous','All'],inc:['ترجمات ناقصة','Traductions manquantes','Missing translations'],
words:['كلمات','Mots','Words'],phr:['جمل وتعابير','Phrases et expressions','Phrases & expressions'],done:['متقنة','Maîtrisés','Mastered'],rev:['تحتاج مراجعة','À revoir','Needs review'],today:['أُضيفت اليوم','Ajoutés aujourd’hui','Added today'],
lanes:['حضور كل لغة في مفرداتك','Présence de chaque langue','Each language in your vocabulary'],et:['ابدأ بأول كلمة','Commencez par un premier mot','Start with your first word'],
ed:['احفظ كلمة بلغة واحدة، وأضف باقي الترجمات متى شئت.','Enregistrez un mot dans une langue, ajoutez les autres traductions plus tard.','Save a word in one language and add the other translations whenever you like.'],
m0:['خطوة صغيرة اليوم، وطلاقة أكبر غدًا.','Un petit pas aujourd’hui, plus d’aisance demain.','A small step today, more fluency tomorrow.'],m1:['راجع ما تعلمته، فالتكرار يصنع الفرق.','Révisez ce que vous savez : la répétition fait la différence.','Review what you know: repetition makes the difference.'],m2:['كل كلمة تتعلمها اليوم تقرّبك من هدفك.','Chaque mot appris vous rapproche de votre but.','Every word you learn brings you closer to your goal.'],
save:['حفظ','Enregistrer','Save'],cancel:['إلغاء','Annuler','Cancel'],del:['حذف','Supprimer','Delete'],sure:['تأكيد الحذف النهائي','Confirmer la suppression','Confirm delete'],edit:['تعديل','Modifier','Edit'],
type:['النوع','Type','Type'],t:[['كلمة','جملة','تعبير'],['Mot','Phrase','Expression'],['Word','Sentence','Expression']],src:['اللغة الأصلية','Langue d’origine','Source language'],
pron:['النطق / الكتابة الصوتية','Prononciation','Pronunciation'],alt:['كتابات بديلة (افصل بفاصلة)','Graphies alternatives (virgule)','Alternative spellings (comma)'],dirl:['اتجاه الكتابة','Sens d’écriture','Writing direction'],
notes:['ملاحظات','Notes','Notes'],ex:['مثال على الاستخدام','Exemple d’usage','Usage example'],cat:['التصنيف','Catégorie','Category'],diff:['الصعوبة','Difficulté','Difficulty'],
d:[['سهل','متوسط','صعب'],['Facile','Moyen','Difficile'],['Easy','Medium','Hard']],stt:['الحالة','Statut','Status'],
s:[['جديد','قيد التعلم','يحتاج مراجعة','متقن'],['Nouveau','En cours','À revoir','Maîtrisé'],['New','Learning','Needs review','Mastered']],
mzh:['اكتبها بنفسك؛ لا يقترح التطبيق أي ترجمة مزابية.','Saisissez-la vous-même ; l’app ne suggère aucune traduction mozabite.','Enter it yourself; the app never suggests Mozabite translations.'],
opt:['اختياري','facultatif','optional'],dup:['هذا العنصر موجود مسبقًا.','Cet élément existe déjà.','This item already exists.'],req:['اكتب النص في حقل اللغة الأصلية.','Saisissez le texte dans la langue d’origine.','Fill in the text of the source language.'],
none:['لا نتائج مطابقة.','Aucun résultat.','No matching results.'],miss:['ناقص:','Manque :','Missing:'],ui:['لغة الواجهة','Langue de l’interface','Interface language'],th:['المظهر','Thème','Theme'],tt:[['تلقائي','فاتح','داكن'],['Auto','Clair','Sombre'],['Auto','Light','Dark']],
bk:['النسخ الاحتياطي والاستيراد','Sauvegarde et import','Backup and import'],ex2:['تصدير (JSON): انسخ النص واحفظه في ملف','Export (JSON) : copiez et enregistrez dans un fichier','Export (JSON): copy and save to a file'],
im:['استيراد: الصق JSON هنا','Import : collez le JSON ici','Import: paste JSON here'],ib:['استيراد','Importer','Import'],ok:['تم استيراد %a وتجاهل %b مكررًا أو غير صالح.','%a importés, %b ignorés (doublons ou invalides).','Imported %a, skipped %b duplicate or invalid.'],
bad:['JSON غير صالح.','JSON invalide.','Invalid JSON.'],loc:['بياناتك محفوظة محليًا على هذا الجهاز فقط.','Vos données restent sur cet appareil.','Your data stays on this device only.'],
nodb:['تعذّر التخزين الدائم في هذا المتصفح؛ ستُفقد البيانات عند الإغلاق.','Stockage persistant indisponible : les données seront perdues à la fermeture.','Persistent storage unavailable: data is lost on close.'],
pend:['الاختبارات والإحصائيات المفصلة تأتي مع المرحلة الثالثة؛ لا تُعرض هنا أرقام غير حقيقية.','Quiz et statistiques détaillées arrivent en phase 3 ; aucun chiffre fictif ici.','Quizzes and detailed stats arrive in phase 3; no made-up numbers shown here.']};
Object.assign(D,{tr:['ترجمة','Traduire','Translate'],trl:['جارٍ الترجمة…','Traduction…','Translating…'],tm:['ترجمة آلية — راجعها قبل الحفظ','Traduction automatique — à vérifier','Machine translation — review before saving'],mach:['آلية','Auto','Auto'],
eoff:['لا يوجد اتصال بالإنترنت.','Pas de connexion Internet.','No Internet connection.'],euns:['الترجمة الآلية غير متاحة لهذه اللغة (المزابية بالإدخال اليدوي).','Traduction automatique indisponible pour cette langue (mozabite : saisie manuelle).','Machine translation isn’t available for this language (Mozabite is manual).'],
elim:['تجاوزت حد الاستخدام، جرّب لاحقًا.','Limite d’utilisation atteinte, réessayez plus tard.','Usage limit reached, try again later.'],efail:['تعذّرت الترجمة، حاول مرة أخرى.','Échec de la traduction, réessayez.','Translation failed, try again.'],elong:['النص أطول من 500 حرف.','Texte de plus de 500 caractères.','Text longer than 500 characters.']});
/* Learning programme settings. ONE_PER_DATE=true: one learning day can be completed per calendar date (next day unlocks tomorrow). Set false to unlock the next day immediately. */
const DAYS=60,DAILY_MIN=10,ONE_PER_DATE=true,IV=[1,3,7,14];
const S={items:[],set:{ui:'ar',theme:'auto'},view:'dash',q:'',st:'',inc:false,conf:null,db:true,err:false,dy:'',comp:[],qh:[],rv:[],qz:null,upd:null,ip:null};
Object.assign(D,{
stk:['سلسلة التعلم:','Série :','Learning streak:'],curd:['اليوم الحالي:','Jour actuel :','Current day:'],cmpd:['أيام مكتملة:','Jours terminés :','Completed days:'],nxtd:['اليوم التالي:','Prochain jour :','Next day:'],tmrw:['غدًا','demain','tomorrow'],
prg:['التقدم','Progression','Progress'],dayn:['اليوم %n','Jour %n','Day %n'],dayl:['يوم التعلم','Jour d’apprentissage','Learning day'],nod:['بدون يوم','Sans jour','No day'],
fin:['انتهيت من اليوم','J’ai terminé la journée','I finished today'],fdone:['تمت مهمة اليوم ✓','Journée terminée ✓','Today is done ✓'],
lockm:['اكتمل يوم اليوم بالفعل؛ اليوم التالي يُفتح غدًا.','La journée est déjà terminée ; la suivante s’ouvre demain.','Today is already completed; the next day unlocks tomorrow.'],
needm:['لا يمكن إنهاء اليوم بعد: لديك %a من %b عنصرًا مكتملًا (نص عربي + ترجمة مزابية) في هذا اليوم.','Impossible de terminer : %a élément(s) complet(s) sur %b (arabe + mozabite) pour ce jour.','Can’t finish yet: %a of %b complete items (Arabic + Mozabite) for this day.'],
ready:['%a / %b عنصرًا جاهزًا (نص عربي + ترجمة مزابية)','%a / %b éléments prêts (arabe + mozabite)','%a / %b items ready (Arabic + Mozabite)'],
incm:['%n ناقص ولا يُحتسب','%n incomplet(s), non compté(s)','%n incomplete, not counted'],pdone:['أتممت برنامج الـ %n يومًا.','Vous avez terminé le programme de %n jours.','You completed the %n-day programme.'],
dberr:['تعذّر الحفظ في قاعدة البيانات المحلية. حاول مرة أخرى.','Échec de l’enregistrement local. Réessayez.','Saving to the local database failed. Try again.'],
blk:['أغلق علامات التبويب الأخرى للتطبيق ثم أعد تحميل الصفحة لإكمال تحديث قاعدة البيانات.','Fermez les autres onglets de l’app puis rechargez pour terminer la mise à jour de la base.','Close the app’s other tabs, then reload to finish the database update.'],
cls:['إغلاق','Fermer','Close'],
qscope:['نطاق الاختبار','Portée du test','Test scope'],qday:['يوم تعلّم محدد','Un jour précis','A specific learning day'],qall:['كل العناصر المحفوظة','Tous les éléments','All saved items'],qrev:['العناصر التي تحتاج مراجعة فقط','Éléments à revoir uniquement','Items awaiting revision only'],
qcont:['نوع المحتوى','Type de contenu','Content type'],qw:['كلمات فقط','Mots seulement','Words only'],qs:['جمل فقط','Phrases seulement','Sentences only'],qb:['الاثنان','Les deux','Both'],qcnt:['عدد الأسئلة','Nombre de questions','Number of questions'],qalln:['كل العناصر المتاحة','Tous les éléments','All available'],
qstart:['ابدأ الاختبار','Commencer le test','Start the test'],qavail:['العناصر الصالحة للاختبار: %n (لها نص عربي وترجمة مزابية محفوظة)','Éléments testables : %n (texte arabe + traduction mozabite enregistrés)','Testable items: %n (saved Arabic text + Mozabite translation)'],qnone:['لا توجد عناصر صالحة لهذه الإعدادات.','Aucun élément pour ces réglages.','No items for these settings.'],
qn:['السؤال %a من %b','Question %a sur %b','Question %a of %b'],qask:['اكتب الترجمة المزابية','Écrivez la traduction mozabite','Type the Mozabite translation'],qsub:['تحقق','Valider','Check'],qdk:['لا أعرف','Je ne sais pas','I don’t know'],qstop:['إيقاف','Arrêter','Stop'],
qempty:['اكتب إجابتك أو اضغط «لا أعرف».','Saisissez une réponse ou « Je ne sais pas ».','Type an answer or press “I don’t know”.'],qok:['إجابة صحيحة','Bonne réponse','Correct'],qko:['إجابة خاطئة','Mauvaise réponse','Incorrect'],qyou:['إجابتك','Votre réponse','Your answer'],qcorr:['الصحيحة','Correct','Correct'],
qnext:['التالي','Suivant','Next'],qfin:['عرض النتيجة','Voir le résultat','See results'],qres:['نتيجة الاختبار','Résultat du test','Test results'],qtot:['عدد الأسئلة','Questions','Questions'],qcor:['إجابات صحيحة','Bonnes réponses','Correct answers'],qinc:['إجابات خاطئة','Mauvaises réponses','Incorrect answers'],qacc:['نسبة الدقة','Précision','Accuracy'],
qwrong:['الأسئلة الخاطئة','Questions ratées','Missed questions'],qperf:['لا أخطاء — أحسنت!','Aucune erreur — bravo !','No mistakes — well done!'],qagain:['اختبار جديد','Nouveau test','New test'],
rvt:['كلمات تحتاج مراجعة','Mots à réviser','Words to revise'],rvdue:['مستحقة الآن','À réviser maintenant','Due now'],rvup:['مراجعات قادمة','Révisions à venir','Upcoming revisions'],rvdn:['أنهت دورة المراجعة','Cycle de révision terminé','Finished the revision cycle'],
rvnone:['لا توجد عناصر تحتاج مراجعة الآن.','Rien à réviser maintenant.','Nothing to revise right now.'],rvgo:['ابدأ اختبار المراجعة','Commencer la révision','Start revision test'],rvw:['أخطاء: %n','Erreurs : %n','Mistakes: %n'],rvnx:['المراجعة القادمة: %d','Prochaine révision : %d','Next revision: %d'],rvok:['صحيحة متتالية: %n','Bonnes d’affilée : %n','Correct in a row: %n'],
sdays:['أيام مكتملة','Jours terminés','Completed days'],satt:['عدد الاختبارات','Tests passés','Tests taken'],scur:['السلسلة الحالية','Série actuelle','Current streak'],sbest:['أطول سلسلة','Meilleure série','Longest streak'],sawait:['عناصر تنتظر المراجعة','Éléments à réviser','Awaiting revision'],sprog:['التقدم العام','Progression globale','Overall progress'],
updm:['يتوفر إصدار جديد من التطبيق.','Une nouvelle version est disponible.','A new version is available.'],updb:['تحديث','Mettre à jour','Update'],inst:['تثبيت التطبيق','Installer l’app','Install app']});
const t=k=>{const v=D[k][IX[S.set.ui]];return v},tt=(k,i)=>D[k][IX[S.set.ui]][i];
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f\u064B-\u065F\u0670]/g,'').toLowerCase().trim();
const ico={dash:'<path d="M3 11l9-8 9 8v10H15v-7H9v7H3z"/>',vocab:'<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',quiz:'<path d="M12 3l10 5-10 5L2 8zM6 11v5c3 3 9 3 12 0v-5"/>',stats:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',set:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',plus:'<path d="M12 5v14M5 12h14"/>'};
const svg=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ico[n]}</svg>`;
/* ---- storage (IndexedDB) ---- */
/* v1: items, settings. v2 (additive migration, existing data untouched): completions, quizzes, revisions */
const DB=new Promise(r=>{try{const q=indexedDB.open('linguaflow',2);q.onupgradeneeded=()=>{const d=q.result,mk=(n,k)=>{if(!d.objectStoreNames.contains(n))d.createObjectStore(n,{keyPath:k})};mk('items','id');mk('settings','k');mk('completions','day');mk('quizzes','id');mk('revisions','itemId')};q.onsuccess=()=>{q.result.onversionchange=()=>q.result.close();r(q.result)};q.onerror=()=>r(null);q.onblocked=()=>{const a=document.getElementById('app');if(a)a.textContent=D.blk[IX[S.set.ui]]}}catch(e){r(null)}});
async function run(store,mode,fn){const d=await DB;if(!d){S.db=false;return null}return new Promise(res=>{try{const x=d.transaction(store,mode),q=fn(x.objectStore(store));x.oncomplete=()=>{S.err=false;res(q&&q.result)};x.onerror=x.onabort=()=>{S.err=true;res(null)}}catch(e){S.err=true;res(null)}})}
const saveItem=i=>run('items','readwrite',s=>s.put(i)),delItem=id=>run('items','readwrite',s=>s.delete(id)),saveSet=()=>run('settings','readwrite',s=>s.put({k:'s',v:S.set}));
/* ---- helpers ---- */
const tr=(it,l)=>it.translations.find(x=>x.language===l&&x.text);
const texts=it=>LG.map(l=>l===it.sourceLanguage?{language:l,text:it.sourceText}:tr(it,l)).filter(Boolean);
const miss=it=>LG.filter(l=>l!==it.sourceLanguage&&!tr(it,l));
const hay=it=>norm([it.sourceText,it.category,it.notes,...it.translations.flatMap(x=>[x.text,x.pronunciation,...(x.alternatives||[])])].join(' '));
const uid=()=>crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(16).slice(2);
/* ---- learning system: dates, streak, progress, revision, stats ---- */
const ymd=(d=new Date())=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const dnum=x=>{const[a,b,c]=x.split('-').map(Number);return Math.round(Date.UTC(a,b-1,c)/864e5)};
const addDays=(x,n)=>new Date((dnum(x)+n)*864e5).toISOString().slice(0,10);
const fm=(k,o)=>t(k).replace(/%(\w)/g,(m,x)=>o[x]);
const fdate=x=>{const[a,b,c]=x.split('-').map(Number);try{return new Date(a,b-1,c).toLocaleDateString(S.set.ui==='ar'?'ar-u-nu-latn':S.set.ui)}catch(e){return x}};
const dtxt=n=>S.set.ui==='ar'?(n===1?'يوم واحد':n===2?'يومان':n<=10?n+' أيام':n+' يومًا'):S.set.ui==='fr'?n+(n>1?' jours':' jour'):n+(n===1?' day':' days');
const upsert=(a,o,k)=>{const i=a.findIndex(x=>x[k]===o[k]);if(i<0)a.push(o);else a[i]=o};
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
/* atomic multi-store write: resolves true, or null on failure */
async function tx(names,fn){const d=await DB;if(!d){S.db=false;return null}return new Promise(res=>{try{const x=d.transaction(names,'readwrite');fn(n=>x.objectStore(n));x.oncomplete=()=>{S.err=false;res(true)};x.onerror=x.onabort=()=>{S.err=true;res(null)}}catch(e){S.err=true;res(null)}})}
async function delItemFull(id){const r=await tx(['items','revisions'],g=>{g('items').delete(id);g('revisions').delete(id)});S.rv=S.rv.filter(x=>x.itemId!==id);return r}
/* answer normalisation: Unicode NFC, invisible/bidi marks, tatweel, typographic apostrophe, spaces, case. Letters and diacritics are preserved. */
const nz=x=>String(x||'').normalize('NFC').replace(/[\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF\u0640]/g,'').replace(/\u2019/g,"'").replace(/\s+/g,' ').trim().toLowerCase();
const side=(it,l)=>l===it.sourceLanguage?(it.sourceText?{text:it.sourceText,...(it.srcMeta||{})}:null):(tr(it,l)||null);
/* a quizzable pair: saved Arabic text + saved Mozabite text; accepted answers = Mozabite text + its saved alternatives */
const qpair=it=>{const a=side(it,'ar'),m=side(it,'mz');if(!a||!m||!a.text||!m.text)return null;return{q:a.text,a:[m.text,...(m.alternatives||[])].filter(Boolean),dir:m.dir||DIR.mz}};
function streaks(dates){const u=[...new Set(dates)].map(dnum).sort((a,b)=>a-b);let best=0,rl=0,prev=null;
for(const x of u){rl=prev!==null&&x===prev+1?rl+1:1;if(rl>best)best=rl;prev=x}
const td=dnum(ymd());let cur=0;if(u.length){const last=u[u.length-1];if(last===td||last===td-1)cur=rl}return{cur,best}}
function prog(){const ds=new Set(S.comp.map(c=>c.day)),td=ymd();let cur=1;while(cur<=DAYS&&ds.has(cur))cur++;
const all=cur>DAYS,tc=S.comp.filter(c=>c.date===td).sort((a,b)=>b.completedAt-a.completedAt)[0],doneToday=!!tc,lock=ONE_PER_DATE&&doneToday&&!all;
return{all,cur,day:all?DAYS:lock?tc.day:cur,doneToday,lock,tc,next:all?null:lock?cur:(cur<DAYS?cur+1:null)}}
const isDue=r=>r.status!=='completed'&&!!r.nextDate&&r.nextDate<=ymd();
/* revision: wrong -> active, due at next session, streak reset. Correct (only when due) -> 1,3,7,14 days, then completed. Records are never deleted. */
function nextRev(old,ok,td,sid,id){let r=old?{...old,history:[...(old.history||[])]}:null;
if(!ok){r=r||{itemId:id,wrong:0,lastWrongDate:null,nextDate:td,streak:0,status:'active',history:[]};r.wrong++;r.lastWrongDate=td;r.streak=0;r.nextDate=td;r.status='active';r.history.push({date:td,ok:false,sid});return r}
if(!r)return null;const due=r.status!=='completed'&&!!r.nextDate&&r.nextDate<=td;r.history.push({date:td,ok:true,sid,counted:due});if(!due)return r;
r.streak++;if(r.streak>IV.length){r.status='completed';r.nextDate=null}else r.nextDate=addDays(td,IV[r.streak-1]);return r}
function stats(){const sk=streaks(S.comp.map(c=>c.date)),as=S.qh.flatMap(q=>q.answers||[]);
return{w:S.items.filter(i=>i.type==='word').length,p:S.items.filter(i=>i.type!=='word').length,days:S.comp.length,att:S.qh.filter(q=>(q.answers||[]).length).length,ok:as.filter(a=>a.ok).length,ko:as.filter(a=>!a.ok).length,cur:sk.cur,best:sk.best,due:S.rv.filter(r=>isDue(r)&&S.items.some(i=>i.id===r.itemId)).length,pct:Math.round(S.comp.length/DAYS*100)}}
function pool(c){return S.items.filter(i=>{if(!qpair(i))return false;if(c.c==='w'&&i.type!=='word')return false;if(c.c==='s'&&i.type==='word')return false;
if(c.s==='day')return c.d!=null&&i.day===c.d;if(c.s==='rev'){const r=S.rv.find(x=>x.itemId===i.id);return !!r&&isDue(r)}return true})}
/* ---- top strip, daily panel ---- */
function topbar(){const p=prog(),k=streaks(S.comp.map(c=>c.date)).cur,pc=Math.round(S.comp.length/DAYS*100);
return`<div class="top" role="status"><span class="chip">🔥 ${t('stk')} ${dtxt(k)}</span><span class="chip">${t('curd')} ${p.day}${p.lock?' ✓':''}</span><span class="chip">${t('cmpd')} ${S.comp.length}</span><span class="chip">${t('nxtd')} ${p.next?p.next+(p.lock?' ('+t('tmrw')+')':''):'—'}</span><div class="bar" title="${t('prg')}: ${S.comp.length}/${DAYS}"><i style="width:${pc}%;background:var(--pr)"></i></div></div>`}
function daily(){const p=prog();if(p.all)return`<div class="card" style="margin-bottom:14px"><b>${fm('pdone',{n:DAYS})}</b></div>`;
const its=S.items.filter(i=>i.day===p.cur),rd=its.filter(qpair).length,bad=its.length-rd,due=S.rv.filter(r=>isDue(r)&&S.items.some(i=>i.id===r.itemId)).length;
return`<div class="card" style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;align-items:center"><b>${fm('dayn',{n:p.lock?p.tc.day:p.cur})}${p.lock?' ✓':''}</b>${p.doneToday?`<span class="chip">${t('fdone')}</span>`:''}</div>${p.lock?`<p class="hint">${t('lockm')}</p>`:`<div class="bar" style="margin:10px 0"><i style="width:${Math.min(100,Math.round(rd/DAILY_MIN*100))}%;background:var(--tq)"></i></div><p class="hint">${fm('ready',{a:rd,b:DAILY_MIN})}${bad?' · '+fm('incm',{n:bad}):''}</p>`}<div class="acts"><button class="btn" data-a="fin" ${p.lock?'disabled':''}>${t('fin')}</button><button class="btn g" data-a="rvw">${t('rvt')} (${due})</button></div><div class="err" id="dce" role="alert"></div></div>`}
async function finDay(){const e=$('#dce'),er=m=>{if(e)e.textContent=m};if(!S.db)return er(t('dberr'));
const fresh=await run('completions','readonly',x=>x.getAll());if(fresh===null)return er(t('dberr'));S.comp=fresh;
const p=prog();if(p.all||p.lock){render();if(p.lock)return;return}
const its=S.items.filter(i=>i.day===p.cur&&qpair(i));if(its.length<DAILY_MIN)return er(fm('needm',{a:its.length,b:DAILY_MIN}));
const rec={day:p.cur,date:ymd(),completedAt:Date.now(),itemIds:its.map(i=>i.id)};
const res=await tx(['completions'],g=>g('completions').add(rec));if(res===null)return er(t('dberr'));S.comp.push(rec);render()}
/* ---- dialogs ---- */
function openDlg(h){const d=$('#dlg');d.innerHTML=h;if(!d.open)d.showModal()}
function dayField(it){const p=prog(),cd=p.all?DAYS:p.cur,dv=Number.isInteger(it.day)?it.day:'',v=it.id?dv:cd,mx=Math.max(cd,Number.isInteger(it.day)?it.day:0);
let o=`<option value="" ${v===''?'selected':''}>${t('nod')}</option>`;for(let d=1;d<=mx;d++)o+=`<option value="${d}" ${v===d?'selected':''}>${fm('dayn',{n:d})}</option>`;return`<div><label>${t('dayl')}</label><select id="fy">${o}</select></div>`}
function dayFilter(){const ds=[...new Set(S.items.filter(i=>Number.isInteger(i.day)).map(i=>i.day))].sort((a,b)=>a-b),un=S.items.some(i=>!Number.isInteger(i.day));
return`<select id="dy" aria-label="${t('dayl')}"><option value="">${t('dayl')}: ${t('all')}</option>${ds.map(d=>`<option value="${d}" ${S.dy===String(d)?'selected':''}>${fm('dayn',{n:d})}</option>`).join('')}${un?`<option value="n" ${S.dy==='n'?'selected':''}>${t('nod')}</option>`:''}</select>`}
function stOpen(){const s=stats(),L=[[s.w,t('words')],[s.p,t('phr')],[s.days,t('sdays')],[s.att,t('satt')],[s.ok,t('qcor')],[s.ko,t('qinc')],[s.cur,t('scur')],[s.best,t('sbest')],[s.due,t('sawait')]];
openDlg(`<div class="dl"><h2 style="margin:0">${t('stats')}</h2><div class="grid">${L.map(([v,l])=>`<div class="card st"><b>${v}</b><span>${l}</span></div>`).join('')}</div><div class="card"><div style="display:flex;justify-content:space-between"><span>${t('sprog')}</span><b>${s.days}/${DAYS} · ${s.pct}%</b></div><div class="bar" style="margin-top:8px"><i style="width:${s.pct}%;background:var(--pr)"></i></div></div><div style="display:flex;justify-content:flex-end"><button class="btn g" data-a="close">${t('cls')}</button></div></div>`)}
function rvRow(x){const q=qpair(x.it),r=x.r;return`<div class="card it"><div class="tr"><div class="tx" lang="ar" dir="rtl">${esc(q?q.q:x.it.sourceText)}</div></div>${q?`<div class="tr"><div class="tx" lang="mz" dir="${q.dir}">${esc(q.a[0])}</div></div>`:''}<div class="row"><span class="chip w">${fm('rvw',{n:r.wrong})}</span><span class="chip">${fm('rvok',{n:r.streak})}</span>${r.nextDate?`<span class="chip">${fm('rvnx',{d:fdate(r.nextDate)})}</span>`:''}</div></div>`}
function rvOpen(){const L=S.rv.map(r=>({r,it:S.items.find(i=>i.id===r.itemId)})).filter(x=>x.it),due=L.filter(x=>isDue(x.r)),up=L.filter(x=>x.r.status!=='completed'&&!isDue(x.r)).sort((a,b)=>a.r.nextDate<b.r.nextDate?-1:1),dn=L.filter(x=>x.r.status==='completed');
openDlg(`<div class="dl"><h2 style="margin:0">${t('rvt')}</h2>${due.length?`<h2 style="margin:6px 0">${t('rvdue')} (${due.length})</h2>${due.map(rvRow).join('')}<div class="acts"><button class="btn" data-a="rvgo">${t('rvgo')}</button></div>`:`<p class="hint">${t('rvnone')}</p>`}<div class="err" id="rver" role="alert"></div>${up.length?`<h2 style="margin:6px 0">${t('rvup')} (${up.length})</h2>${up.map(rvRow).join('')}`:''}${dn.length?`<p class="hint">${t('rvdn')}: ${dn.length}</p>`:''}<div style="display:flex;justify-content:flex-end"><button class="btn g" data-a="close">${t('cls')}</button></div></div>`)}
function rvGo(){S.qz={cfg:{s:'rev',d:null,c:'b',n:'all'},run:null};if(!pool(S.qz.cfg).length){const e=$('#rver');if(e)e.textContent=t('qnone');return}qzStart()}
/* ---- self-test ---- */
function qzOpen(){const ds=[...new Set(S.items.filter(i=>Number.isInteger(i.day)&&qpair(i)).map(i=>i.day))].sort((a,b)=>a-b),p=prog();
S.qz={cfg:{s:'all',d:ds.includes(p.day)?p.day:(ds.length?ds[0]:null),c:'b',n:'10'},run:null};qzCfg()}
function qzCfg(){const c=S.qz.cfg,ds=[...new Set(S.items.filter(i=>Number.isInteger(i.day)&&qpair(i)).map(i=>i.day))].sort((a,b)=>a-b);
const o=(a,v)=>a.map(([k,l])=>`<option value="${k}" ${String(k)===String(v)?'selected':''}>${l}</option>`).join('');
openDlg(`<div class="dl f"><h2 style="margin:0">${t('quiz')}</h2><div><label>${t('qscope')}</label><select id="qs">${o([['day',t('qday')],['all',t('qall')],['rev',t('qrev')]],c.s)}</select></div><div><label>${t('dayl')}</label><select id="qd">${o(ds.map(d=>[d,fm('dayn',{n:d})]),c.d)}</select></div><div class="two"><div><label>${t('qcont')}</label><select id="qc">${o([['w',t('qw')],['s',t('qs')],['b',t('qb')]],c.c)}</select></div><div><label>${t('qcnt')}</label><select id="qn">${o([['5','5'],['10','10'],['20','20'],['all',t('qalln')]],c.n)}</select></div></div><p class="hint" id="qinfo" role="status"></p><div class="err" id="qer" role="alert"></div><div style="display:flex;gap:10px;justify-content:flex-end"><button class="btn g" data-a="close">${t('cls')}</button><button class="btn" id="qgo" data-a="qgo">${t('qstart')}</button></div></div>`);qzInfo()}
function qzInfo(){const c=S.qz.cfg,n=pool(c).length;$('#qd').disabled=c.s!=='day';$('#qinfo').textContent=fm('qavail',{n})+(n?'':' — '+t('qnone'));$('#qgo').disabled=!n}
function qzStart(){const c=S.qz.cfg;if(!S.db){const e=$('#qer')||$('#rver');if(e)e.textContent=t('dberr');return}
const p=shuf(pool(c));if(!p.length)return;const n=c.n==='all'?p.length:Math.min(+c.n,p.length);
const qs=p.slice(0,n).map(i=>{const x=qpair(i);return{id:i.id,q:x.q,a:x.a,dir:x.dir}});
S.qz.run={qs,i:0,busy:false,last:null,ses:{id:uid(),startedAt:Date.now(),finishedAt:null,date:ymd(),scope:c.s,day:c.s==='day'?c.d:null,content:c.c,requested:c.n==='all'?'all':+c.n,total:qs.length,correct:0,incorrect:0,answers:[]}};qzQ()}
function qzQ(err){const r=S.qz.run,q=r.qs[r.i];
openDlg(`<div class="dl f"><div class="hint">${fm('qn',{a:r.i+1,b:r.qs.length})}</div><div class="bar"><i style="width:${Math.round(r.i/r.qs.length*100)}%;background:var(--pr)"></i></div><p class="msg" style="margin:6px 0;max-width:none" lang="ar" dir="rtl">${esc(q.q)}</p><div><label for="qa">${t('qask')}</label><input id="qa" lang="mz" dir="${q.dir}" autocomplete="off" autocapitalize="off" spellcheck="false"></div><div class="err" id="qer" role="alert">${err||''}</div><div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap"><button class="btn g" data-a="close">${t('qstop')}</button><button class="btn g" data-a="qdk">${t('qdk')}</button><button class="btn" data-a="qsub">${t('qsub')}</button></div></div>`);$('#qa').focus()}
async function qzSub(dk){const r=S.qz&&S.qz.run;if(!r||r.busy||r.last&&r.last.q===r.qs[r.i])return;const q=r.qs[r.i],raw=dk?'':$('#qa').value,er=m=>{const e=$('#qer');if(e)e.textContent=m};
if(!dk&&!nz(raw))return er(t('qempty'));
r.busy=true;try{const ok=!dk&&q.a.some(a=>nz(a)===nz(raw)),td=ymd(),last=r.i===r.qs.length-1;
const ses={...r.ses,answers:[...r.ses.answers,{itemId:q.id,q:q.q,submitted:raw.trim(),expected:q.a[0],accepted:q.a,ok,date:td,at:Date.now()}],correct:r.ses.correct+(ok?1:0),incorrect:r.ses.incorrect+(ok?0:1)};if(last)ses.finishedAt=Date.now();
const old=S.rv.find(x=>x.itemId===q.id),nr=nextRev(old,ok,td,ses.id,q.id),it=S.items.find(i=>i.id===q.id);let ni=null;
if(it){if(!ok&&it.status!=='review')ni={...it,status:'review',updatedAt:Date.now()};else if(ok&&nr&&old&&old.status!=='completed'&&nr.status==='completed')ni={...it,status:'mastered',updatedAt:Date.now()}}
const res=await tx(['quizzes','revisions','items'],g=>{g('quizzes').put(ses);if(nr)g('revisions').put(nr);if(ni)g('items').put(ni)});
if(res===null)return er(t('dberr'));
r.ses=ses;upsert(S.qh,ses,'id');if(nr)upsert(S.rv,nr,'itemId');if(ni)S.items=S.items.map(i=>i.id===ni.id?ni:i);r.last={ok,raw:raw.trim(),q};qzFb()}finally{r.busy=false}}
function qzFb(){const r=S.qz.run,l=r.last,last=r.i===r.qs.length-1,c=l.ok?'var(--ok)':'var(--or)';
openDlg(`<div class="dl f"><div class="hint">${fm('qn',{a:r.i+1,b:r.qs.length})}</div><p class="msg" style="margin:6px 0;max-width:none" lang="ar" dir="rtl">${esc(l.q.q)}</p><div class="card" style="border-color:${c}"><b style="color:${c}">${l.ok?'✓ '+t('qok'):'✗ '+t('qko')}</b>${l.ok?'':`<div class="tr"><span class="ln">${t('qyou')}</span><div class="tx" dir="${l.q.dir}">${esc(l.raw)||'—'}</div></div><div class="tr"><span class="ln">${t('qcorr')}</span><div><div class="tx" lang="mz" dir="${l.q.dir}">${esc(l.q.a[0])}</div>${l.q.a.length>1?`<div class="pn" dir="${l.q.dir}">${l.q.a.slice(1).map(esc).join(' · ')}</div>`:''}</div></div>`}</div><div style="display:flex;justify-content:flex-end"><button class="btn" id="qnx" data-a="qnx">${last?t('qfin'):t('qnext')}</button></div></div>`);$('#qnx').focus()}
function qzNx(){const r=S.qz&&S.qz.run;if(!r)return;if(r.i>=r.qs.length-1)return qzRes();r.i++;r.last=null;qzQ()}
function qzRes(){const s=S.qz.run.ses,pc=s.total?Math.round(s.correct/s.total*100):0,bad=s.answers.filter(a=>!a.ok);
openDlg(`<div class="dl"><h2 style="margin:0">${t('qres')}</h2><div class="grid">${[[s.total,'qtot'],[s.correct,'qcor'],[s.incorrect,'qinc'],[pc+'%','qacc']].map(([v,k])=>`<div class="card st"><b>${v}</b><span>${t(k)}</span></div>`).join('')}</div>${bad.length?`<h2 style="margin:6px 0">${t('qwrong')}</h2>${bad.map(a=>`<div class="card it"><div class="tx" lang="ar" dir="rtl">${esc(a.q)}</div><div class="tr"><span class="ln">${t('qyou')}</span><div class="tx" dir="auto">${esc(a.submitted)||'—'}</div></div><div class="tr"><span class="ln">${t('qcorr')}</span><div><div class="tx" lang="mz" dir="auto">${esc(a.expected)}</div>${a.accepted.length>1?`<div class="pn" dir="auto">${a.accepted.slice(1).map(esc).join(' · ')}</div>`:''}</div></div></div>`).join('')}`:`<p class="hint">${t('qperf')}</p>`}<div class="acts" style="justify-content:flex-end"><button class="btn g" data-a="close">${t('cls')}</button><button class="btn g" data-a="rvw">${t('rvt')}</button><button class="btn" data-a="qz">${t('qagain')}</button></div></div>`)}
/* ---- backup extras (completions, quizzes, revisions): merge without overwriting ---- */
const rdate=x=>typeof x==='string'&&/^\d{4}-\d\d-\d\d$/.test(x);
async function impExtra(j){if(!j||Array.isArray(j))return;
for(const c of Array.isArray(j.completions)?j.completions:[])if(c&&Number.isInteger(c.day)&&c.day>=1&&c.day<=DAYS&&rdate(c.date)&&!S.comp.some(x=>x.day===c.day)){const r={day:c.day,date:c.date,completedAt:+c.completedAt||Date.now(),itemIds:Array.isArray(c.itemIds)?c.itemIds.map(String):[]};if(await tx(['completions'],g=>g('completions').add(r))!==null)S.comp.push(r)}
for(const x of Array.isArray(j.quizzes)?j.quizzes:[]){if(!x||typeof x.id!=='string'||!Array.isArray(x.answers)||S.qh.some(q=>q.id===x.id))continue;
const an=x.answers.filter(a=>a&&typeof a.ok==='boolean'&&typeof a.itemId==='string').map(a=>({itemId:a.itemId,q:String(a.q||''),submitted:String(a.submitted||''),expected:String(a.expected||''),accepted:Array.isArray(a.accepted)?a.accepted.map(String):[],ok:a.ok,date:rdate(a.date)?a.date:ymd(),at:+a.at||Date.now()}));
const r={id:x.id,startedAt:+x.startedAt||Date.now(),finishedAt:x.finishedAt?+x.finishedAt:null,date:rdate(x.date)?x.date:ymd(),scope:['day','all','rev'].includes(x.scope)?x.scope:'all',day:Number.isInteger(x.day)?x.day:null,content:['w','s','b'].includes(x.content)?x.content:'b',requested:x.requested==='all'?'all':(+x.requested||an.length),total:an.length,correct:an.filter(a=>a.ok).length,incorrect:an.filter(a=>!a.ok).length,answers:an};
if(await tx(['quizzes'],g=>g('quizzes').put(r))!==null)S.qh.push(r)}
for(const x of Array.isArray(j.revisions)?j.revisions:[]){if(!x||typeof x.itemId!=='string'||!S.items.some(i=>i.id===x.itemId)||S.rv.some(r=>r.itemId===x.itemId))continue;
const r={itemId:x.itemId,wrong:+x.wrong||0,lastWrongDate:rdate(x.lastWrongDate)?x.lastWrongDate:null,nextDate:rdate(x.nextDate)?x.nextDate:null,streak:+x.streak||0,status:x.status==='completed'?'completed':'active',history:Array.isArray(x.history)?x.history.filter(h=>h&&rdate(h.date)&&typeof h.ok==='boolean').map(h=>({date:h.date,ok:h.ok,sid:String(h.sid||''),counted:!!h.counted})):[]};
if(r.status==='active'&&!r.nextDate)r.nextDate=ymd();if(await tx(['revisions'],g=>g('revisions').put(r))!==null)S.rv.push(r)}}
/* ---- render ---- */
function render(){const u=S.set.ui,r=document.documentElement;r.lang=u;r.dir=u==='ar'?'rtl':'ltr';
if(S.set.theme==='auto')r.removeAttribute('data-theme');else r.dataset.theme=S.set.theme;
const nav=[['dash'],['vocab'],['quiz'],['stats'],['set']].map(([k])=>`<button class="nb ${S.view===k?'on':''}" ${k==='quiz'?'data-a="qz"':k==='stats'?'data-a="stx"':`data-v="${k}"`}>${svg(k)}<span>${t(k)}</span></button>`).join('');
$('#app').innerHTML=`<nav aria-label="LinguaFlow"><div class="logo">LinguaFlow</div>${nav}</nav><main>${S.db?'':`<div class="banner">${t('nodb')}</div>`}${S.err?`<div class="banner" role="alert">${t('dberr')}</div>`:''}${S.upd?`<div class="banner">${t('updm')} <button class="btn g" data-a="upd">${t('updb')}</button></div>`:''}${topbar()}${{dash,vocab,set:settings}[S.view]()}</main>${S.view==='vocab'&&S.items.length?`<button class="btn fab" data-a="add">${svg('plus')} ${t('add')}</button>`:''}`}
function dash(){const n=S.items.length,w=S.items.filter(i=>i.type==='word').length,p=n-w,m=S.items.filter(i=>i.status==='mastered').length,rv=S.items.filter(i=>i.status==='review').length,day=new Date().toDateString(),td=S.items.filter(i=>new Date(i.createdAt).toDateString()===day).length;
if(!n)return`<h1>LinguaFlow</h1><div class="card empty"><h2>${t('et')}</h2><p class="hint">${t('ed')}</p><button class="btn" data-a="add">${svg('plus')} ${t('add')}</button><p class="hint">${t('loc')}</p></div>`;
const msg=rv?t('m1'):td?t('m2'):t('m0'),cols={ar:'--c-ar',fr:'--c-fr',en:'--c-en',mz:'--c-mz'};
const lanes=LG.map(l=>{const c=S.items.filter(i=>texts(i).some(x=>x.language===l)).length;return`<div class="lane"><span lang="${l}" dir="${DIR[l]}">${(NM[l]&&NM[l][l])||NM[S.set.ui][l]}</span><div class="bar"><i style="width:${Math.round(c/n*100)}%;background:var(${cols[l]})"></i></div><b>${c}</b></div>`}).join('');
return`<h1>LinguaFlow</h1><p class="msg">${msg}</p>${daily()}<div class="grid">${[[w,'words'],[p,'phr'],[m,'done'],[rv,'rev'],[td,'today']].map(([v,k])=>`<div class="card st"><b>${v}</b><span>${t(k)}</span></div>`).join('')}</div><h2>${t('lanes')}</h2><div class="card">${lanes}</div><button class="btn" data-a="add" style="margin-top:12px">${svg('plus')} ${t('add')}</button>`}
function vocab(){const q=norm(S.q);let L=S.items.filter(i=>(!q||hay(i).includes(q))&&(!S.st||i.status===S.st)&&(!S.inc||miss(i).length)&&(!S.dy||(S.dy==='n'?!Number.isInteger(i.day):i.day===+S.dy))).sort((a,b)=>b.createdAt-a.createdAt);
const head=`<h1>${t('vocab')}</h1><div class="bar2"><input id="q" type="search" dir="auto" placeholder="${t('q')}" value="${esc(S.q)}" aria-label="${t('q')}"><select id="st"><option value="">${t('all')}</option>${['new','learning','review','mastered'].map((k,i)=>`<option value="${k}" ${S.st===k?'selected':''}>${tt('s',i)}</option>`).join('')}</select>${dayFilter()}<label class="chip" style="display:flex;align-items:center;gap:6px;min-height:44px"><input type="checkbox" id="inc" ${S.inc?'checked':''} style="width:auto;min-height:0"> ${t('inc')}</label></div>`;
if(!S.items.length)return head+`<div class="card empty"><h2>${t('et')}</h2><p class="hint">${t('ed')}</p><button class="btn" data-a="add">${svg('plus')} ${t('add')}</button></div>`;
return head+(L.length?L.map(card).join(''):`<p class="hint">${t('none')}</p>`)}
function card(it){const rows=texts(it).map(x=>{const dir=x.dir||DIR[x.language];return`<div class="tr"><span class="ln" style="color:var(--c-${x.language})">${NM[S.set.ui][x.language]}</span><div><div class="tx" lang="${x.language}" dir="${dir}">${esc(x.text)}</div>${x.pronunciation?`<div class="pn" dir="ltr">/${esc(x.pronunciation)}/</div>`:''}${(x.alternatives||[]).length?`<div class="pn" dir="${dir}">${x.alternatives.map(esc).join(' · ')}</div>`:''}</div></div>`}).join('');
const ms=miss(it),ix=['new','learning','review','mastered'].indexOf(it.status);
return`<div class="card it"><div>${rows}</div>${it.notes?`<p class="hint" dir="auto">${esc(it.notes)}</p>`:''}<div class="row"><span class="chip">${tt('t',['word','sentence','expression'].indexOf(it.type))}</span><span class="chip">${tt('s',ix)}</span>${Number.isInteger(it.day)?`<span class="chip">${fm('dayn',{n:it.day})}</span>`:''}${it.category?`<span class="chip" dir="auto">${esc(it.category)}</span>`:''}${texts(it).some(x=>x.source==='machine'&&!x.verified)?'<span class="chip w">'+t('mach')+'</span>':''}${ms.length?`<span class="chip w">${t('miss')} ${ms.map(l=>NM[S.set.ui][l]).join('، ')}</span>`:''}
<span style="margin-inline-start:auto;display:flex;gap:8px">${S.conf===it.id?`<button class="btn d" data-a="del" data-id="${it.id}">${t('sure')}</button><button class="btn g" data-a="nc">${t('cancel')}</button>`:`<button class="btn g" data-a="edit" data-id="${it.id}">${t('edit')}</button><button class="btn g" data-a="cd" data-id="${it.id}">${t('del')}</button>`}</span></div></div>`}
function settings(){const o=(a,v)=>a.map((x,i)=>`<option value="${x[0]}" ${x[0]===v?'selected':''}>${x[1]}</option>`).join('');
return`<h1>${t('set')}</h1><div class="card f" style="display:grid;gap:14px"><div><label>${t('ui')}</label><select id="ui">${o([['ar','العربية'],['fr','Français'],['en','English']],S.set.ui)}</select></div><div><label>${t('th')}</label><select id="th">${o(['auto','light','dark'].map((k,i)=>[k,tt('tt',i)]),S.set.theme)}</select></div>${S.ip?`<div><button class="btn g" data-a="inst">${t('inst')}</button></div>`:''}<p class="hint">${t('loc')}</p></div>
<h2>${t('bk')}</h2><div class="card f" style="display:grid;gap:10px"><label>${t('ex2')}</label><textarea id="exp" rows="4" readonly dir="ltr">${esc(JSON.stringify({app:'linguaflow',version:2,items:S.items,completions:S.comp,quizzes:S.qh,revisions:S.rv}))}</textarea><div><button class="btn g" data-a="dl">JSON ⬇</button></div><label>${t('im')}</label><textarea id="imp" rows="4" dir="ltr"></textarea><div><button class="btn" data-a="imp">${t('ib')}</button></div><p id="impm" class="hint" role="status"></p></div>`}
/* ---- add/edit dialog ---- */
function openForm(id){const it=S.items.find(i=>i.id===id)||{type:'word',sourceLanguage:S.set.ui,sourceText:'',translations:[],status:'new',difficulty:1};
const blocks=LG.map(l=>{const x=l===it.sourceLanguage?{text:it.sourceText,...(it.srcMeta||{})}:tr(it,l)||{};const d=x.dir||DIR[l];
return`<div class="lb" data-l="${l}"${x.source==='machine'&&!x.verified?' data-machine="1"':''}><label style="color:var(--c-${l});font-weight:500">${NM[S.set.ui][l]} <span class="hint">${l===it.sourceLanguage?'':'('+t('opt')+')'}</span></label><div style="display:flex;gap:8px"><input class="tx" lang="${l}" dir="${d}" value="${esc(x.text||'')}" style="flex:1;border:1px solid var(--bd);border-radius:10px;padding:10px;min-height:44px;background:var(--sf)">${l==='fr'||l==='en'?`<button type="button" class="btn g" data-a="tr">${t('tr')}</button>`:''}</div><p class="hint mh">${x.source==='machine'&&!x.verified?t('tm'):''}</p>${l==='mz'?`<p class="hint">${t('mzh')}</p>`:''}<details><summary>${t('pron')} / ${t('alt')}</summary><div class="two" style="margin-top:8px"><input class="pn" dir="ltr" placeholder="${t('pron')}" value="${esc(x.pronunciation||'')}"><input class="al" dir="${d}" lang="${l}" placeholder="${t('alt')}" value="${esc((x.alternatives||[]).join(', '))}">${l==='mz'?`<select class="dr" aria-label="${t('dirl')}"><option value="ltr" ${d==='ltr'?'selected':''}>LTR</option><option value="rtl" ${d==='rtl'?'selected':''}>RTL</option></select>`:''}</div></details></div>`}).join('');
const o=(arr,v)=>arr.map((x,i)=>`<option value="${i}" ${i===v?'selected':''}>${x}</option>`).join('');
$('#dlg').innerHTML=`<div class="dl f" data-id="${it.id||''}"><h2 style="margin:0">${t('add')}</h2><div class="two"><div><label>${t('type')}</label><select id="ft">${o(D.t[IX[S.set.ui]],['word','sentence','expression'].indexOf(it.type))}</select></div><div><label>${t('src')}</label><select id="fs">${LG.map(l=>`<option value="${l}" ${l===it.sourceLanguage?'selected':''}>${NM[S.set.ui][l]}</option>`).join('')}</select></div></div>${blocks}
<div class="two"><div><label>${t('cat')}</label><input id="fc" dir="auto" value="${esc(it.category||'')}"></div><div><label>${t('diff')}</label><select id="fd">${o(D.d[IX[S.set.ui]],(it.difficulty||1)-1)}</select></div></div><div class="two"><div><label>${t('stt')}</label><select id="fz">${['new','learning','review','mastered'].map((k,i)=>`<option value="${k}" ${it.status===k?'selected':''}>${tt('s',i)}</option>`).join('')}</select></div><div><label>${t('ex')}</label><input id="fe" dir="auto" value="${esc((it.examples||[])[0]||'')}"></div></div>${dayField(it)}<div><label>${t('notes')}</label><textarea id="fn" dir="auto" rows="2">${esc(it.notes||'')}</textarea></div><div class="err" id="fer" role="alert"></div><div style="display:flex;gap:10px;justify-content:flex-end"><button class="btn g" data-a="close">${t('cancel')}</button><button class="btn" data-a="sv">${t('save')}</button></div></div>`;
$('#dlg').showModal();
$('#dlg').querySelector('.lb[data-l="'+it.sourceLanguage+'"] .tx').focus()}
async function submit(){const f=$('#dlg .dl'),id=f.dataset.id,sl=$('#fs').value;let src='',srcMeta,trs=[];
f.querySelectorAll('.lb').forEach(b=>{const mc=b.dataset.machine==='1',l=b.dataset.l,text=b.querySelector('.tx').value.trim(),dir=b.querySelector('.dr')?.value||DIR[l],pr=b.querySelector('.pn').value.trim(),al=b.querySelector('.al').value.split(',').map(s=>s.trim()).filter(Boolean),meta={pronunciation:pr,alternatives:al,dir};
if(l===sl){src=text;srcMeta=meta}else if(text)trs.push({language:l,text,source:mc?'machine':'manual',verified:!mc,...meta})});
const err=m=>$('#fer').textContent=m;if(!src)return err(t('req'));
if(S.items.some(i=>i.id!==id&&i.sourceLanguage===sl&&norm(i.sourceText)===norm(src)))return err(t('dup'));
const old=S.items.find(i=>i.id===id),now=Date.now(),ty=['word','sentence','expression'][+$('#ft').value];
const it={id:id||uid(),type:ty,sourceLanguage:sl,sourceText:src,srcMeta,translations:trs,category:$('#fc').value.trim(),difficulty:+$('#fd').value+1,notes:$('#fn').value.trim(),examples:$('#fe').value.trim()?[$('#fe').value.trim()]:[],status:$('#fz').value,day:$('#fy').value===''?null:+$('#fy').value,createdAt:old?.createdAt||now,updatedAt:now};
S.items=old?S.items.map(i=>i.id===id?it:i):[it,...S.items];await saveItem(it);$('#dlg').close();render()}
async function doImport(){const m=$('#impm');let j;try{j=JSON.parse($('#imp').value)}catch(e){m.textContent=t('bad');return}
const arr=Array.isArray(j)?j:j&&Array.isArray(j.items)?j.items:null;if(!arr){m.textContent=t('bad');return}let a=0,b=0;
for(const x of arr){const ok=x&&typeof x.sourceText==='string'&&x.sourceText.trim()&&LG.includes(x.sourceLanguage)&&Array.isArray(x.translations);
if(!ok||S.items.some(i=>i.id===x.id||(i.sourceLanguage===x.sourceLanguage&&norm(i.sourceText)===norm(x.sourceText)))){b++;continue}
const it={id:typeof x.id==='string'?x.id:uid(),type:['word','sentence','expression'].includes(x.type)?x.type:'word',sourceLanguage:x.sourceLanguage,sourceText:String(x.sourceText).trim().slice(0,1000),srcMeta:x.srcMeta&&typeof x.srcMeta==='object'?{pronunciation:String(x.srcMeta.pronunciation||''),alternatives:(x.srcMeta.alternatives||[]).map(String),dir:x.srcMeta.dir==='rtl'?'rtl':'ltr'}:undefined,
translations:x.translations.filter(y=>y&&LG.includes(y.language)&&typeof y.text==='string'&&y.text.trim()).map(y=>({language:y.language,text:y.text.trim().slice(0,1000),source:'imported',verified:y.language==='mz'?!!y.verified:!!y.verified,pronunciation:String(y.pronunciation||''),alternatives:(y.alternatives||[]).map(String),dir:y.dir==='rtl'?'rtl':'ltr'})),
category:String(x.category||''),difficulty:[1,2,3].includes(x.difficulty)?x.difficulty:1,notes:String(x.notes||''),examples:(x.examples||[]).map(String),status:['new','learning','review','mastered'].includes(x.status)?x.status:'new',day:Number.isInteger(x.day)&&x.day>=1&&x.day<=DAYS?x.day:null,createdAt:+x.createdAt||Date.now(),updatedAt:Date.now()};
S.items.push(it);await saveItem(it);a++}
await impExtra(j);
render();$('#impm').textContent=t('ok').replace('%a',a).replace('%b',b)}
/* ---- machine translation (MyMemory public API: no key, ~500 chars/request, daily quota). Mozabite is never machine-translated. ---- */
const fail=c=>{const e=new Error(c);e.code=c;return e};
async function translate(text,from,to){
if(from==='mz'||to==='mz'||from===to)throw fail('unsupported');if(text.length>500)throw fail('long');if(navigator.onLine===false)throw fail('offline');
let r;try{r=await fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(text)+'&langpair='+from+'|'+to)}catch(e){throw fail('offline')}
if(r.status===429)throw fail('limit');if(!r.ok)throw fail('failed');
const j=await r.json().catch(()=>null);if(Number(j&&j.responseStatus)===429)throw fail('limit');
const out=j&&j.responseData&&j.responseData.translatedText;if(Number(j&&j.responseStatus)!==200||typeof out!=='string'||!out.trim())throw fail('failed');return out.trim()}
async function trField(btn){const b=btn.closest('.lb'),l=b.dataset.l,sl=$('#fs').value,er=$('#fer');er.textContent='';
const src=$('#dlg .lb[data-l="'+sl+'"] .tx').value.trim();if(!src){er.textContent=t('req');return}
btn.disabled=true;const old=btn.textContent;btn.textContent=t('trl');
try{b.querySelector('.tx').value=await translate(src,sl,l);b.dataset.machine='1';b.querySelector('.mh').textContent=t('tm')}
catch(x){er.textContent=t({offline:'eoff',unsupported:'euns',limit:'elim',long:'elong'}[x.code]||'efail')}
finally{btn.disabled=false;btn.textContent=old}}
/* ---- events ---- */
document.addEventListener('click',async e=>{const b=e.target.closest('[data-v],[data-a]');if(!b)return;
if(b.dataset.v){S.view=b.dataset.v;location.hash=S.view;return render()}
const a=b.dataset.a,id=b.dataset.id;
if(a==='add')openForm();else if(a==='edit')openForm(id);else if(a==='close')$('#dlg').close();else if(a==='sv')submit();
else if(a==='tr')trField(b);else if(a==='dl'){const x=document.createElement('a');x.href=URL.createObjectURL(new Blob([$('#exp').value],{type:'application/json'}));x.download='linguaflow-backup.json';x.click()}else if(a==='cd'){S.conf=id;render()}else if(a==='nc'){S.conf=null;render()}
else if(a==='del'){S.items=S.items.filter(i=>i.id!==id);S.conf=null;await delItemFull(id);render()}else if(a==='imp')doImport()
else if(a==='qz')qzOpen();else if(a==='qgo')qzStart();else if(a==='qsub')qzSub(false);else if(a==='qdk')qzSub(true);else if(a==='qnx')qzNx();else if(a==='stx')stOpen();else if(a==='rvw')rvOpen();else if(a==='rvgo')rvGo();else if(a==='fin')finDay();else if(a==='upd')updNow();else if(a==='inst')instNow()});
document.addEventListener('input',e=>{if(e.target.classList&&e.target.classList.contains('tx')){const b=e.target.closest('.lb');if(b&&b.dataset.machine){delete b.dataset.machine;b.querySelector('.mh').textContent=''}}if(e.target.id==='q'){S.q=e.target.value;const p=e.target.selectionStart;render();const q=$('#q');q.focus();q.setSelectionRange(p,p)}});
document.addEventListener('change',async e=>{const i=e.target.id;
if(i==='dy'){S.dy=e.target.value;render()}else if(['qs','qd','qc','qn'].includes(i)&&S.qz&&!S.qz.run){const k={qs:'s',qd:'d',qc:'c',qn:'n'}[i];S.qz.cfg[k]=k==='d'?+e.target.value:e.target.value;qzInfo()}else if(i==='st'){S.st=e.target.value;render()}else if(i==='inc'){S.inc=e.target.checked;render()}
else if(i==='ui'){S.set.ui=e.target.value;await saveSet();render()}else if(i==='th'){S.set.theme=e.target.value;await saveSet();render()}
else if(i==='fs'){/* keep field values; source change only re-labels which field is the original */}});
(async()=>{const s=await run('settings','readonly',x=>x.get('s'));if(s&&s.v)Object.assign(S.set,s.v);
const all=await run('items','readonly',x=>x.getAll());if(all)S.items=all;
const cs=await run('completions','readonly',x=>x.getAll()),qs=await run('quizzes','readonly',x=>x.getAll()),rs=await run('revisions','readonly',x=>x.getAll());if(cs)S.comp=cs;if(qs)S.qh=qs;if(rs)S.rv=rs;
const h=location.hash.slice(1);if(['dash','vocab','set'].includes(h))S.view=h;render()})();

/* ---- PWA: service worker with user-confirmed updates, real install prompt ---- */
function updNow(){const w=S.upd&&S.upd.waiting;if(w)w.postMessage('skip');else location.reload()}
function instNow(){const e=S.ip;if(!e)return;S.ip=null;e.prompt();render()}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();S.ip=e;render()});
window.addEventListener('appinstalled',()=>{S.ip=null;render()});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='qa'&&!e.isComposing){e.preventDefault();qzSub(false)}});
$('#dlg').addEventListener('close',()=>{S.qz=null;render()});
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){const had=!!navigator.serviceWorker.controller;let rl=false;
navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!had||rl)return;rl=true;location.reload()});
navigator.serviceWorker.register('./sw.js').then(reg=>{const chk=()=>{if(reg.waiting&&navigator.serviceWorker.controller){S.upd=reg;render()}};chk();
reg.addEventListener('updatefound',()=>{const w=reg.installing;if(w)w.addEventListener('statechange',()=>{if(w.state==='installed')chk()})})}).catch(()=>{})}
