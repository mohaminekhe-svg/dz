const LG=['ar','fr','en','mz'],DIR={ar:'rtl',fr:'ltr',en:'ltr',mz:'ltr'},IX={ar:0,fr:1,en:2};
const NM={ar:{ar:'العربية',fr:'الفرنسية',en:'الإنجليزية',mz:'المزابية Tumẓabt'},fr:{ar:'Arabe',fr:'Français',en:'Anglais',mz:'Mozabite Tumẓabt'},en:{ar:'Arabic',fr:'French',en:'English',mz:'Mozabite Tumẓabt'}};
const D={dash:['الرئيسية','Accueil','Home'],vocab:['مفرداتي','Mon vocabulaire','My vocabulary'],quiz:['اختبر نفسك','Quiz','Quiz'],stats:['إحصائياتي','Statistiques','Stats'],set:['الإعدادات','Réglages','Settings'],soon:['قريبًا','Bientôt','Soon'],
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
const S={items:[],set:{ui:'ar',theme:'auto'},view:'dash',q:'',st:'',inc:false,conf:null,db:true};
const t=k=>{const v=D[k][IX[S.set.ui]];return v},tt=(k,i)=>D[k][IX[S.set.ui]][i];
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f\u064B-\u065F\u0670]/g,'').toLowerCase().trim();
const ico={dash:'<path d="M3 11l9-8 9 8v10H15v-7H9v7H3z"/>',vocab:'<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',quiz:'<path d="M12 3l10 5-10 5L2 8zM6 11v5c3 3 9 3 12 0v-5"/>',stats:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',set:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',plus:'<path d="M12 5v14M5 12h14"/>'};
const svg=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ico[n]}</svg>`;
/* ---- storage (IndexedDB) ---- */
const DB=new Promise(r=>{try{const q=indexedDB.open('linguaflow',1);q.onupgradeneeded=()=>{q.result.createObjectStore('items',{keyPath:'id'});q.result.createObjectStore('settings',{keyPath:'k'})};q.onsuccess=()=>r(q.result);q.onerror=()=>r(null)}catch(e){r(null)}});
async function run(store,mode,fn){const d=await DB;if(!d){S.db=false;return null}return new Promise(res=>{try{const x=d.transaction(store,mode),q=fn(x.objectStore(store));x.oncomplete=()=>res(q&&q.result);x.onerror=()=>{S.db=false;res(null)}}catch(e){S.db=false;res(null)}})}
const saveItem=i=>run('items','readwrite',s=>s.put(i)),delItem=id=>run('items','readwrite',s=>s.delete(id)),saveSet=()=>run('settings','readwrite',s=>s.put({k:'s',v:S.set}));
/* ---- helpers ---- */
const tr=(it,l)=>it.translations.find(x=>x.language===l&&x.text);
const texts=it=>LG.map(l=>l===it.sourceLanguage?{language:l,text:it.sourceText}:tr(it,l)).filter(Boolean);
const miss=it=>LG.filter(l=>l!==it.sourceLanguage&&!tr(it,l));
const hay=it=>norm([it.sourceText,it.category,it.notes,...it.translations.flatMap(x=>[x.text,x.pronunciation,...(x.alternatives||[])])].join(' '));
const uid=()=>crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(16).slice(2);
/* ---- render ---- */
function render(){const u=S.set.ui,r=document.documentElement;r.lang=u;r.dir=u==='ar'?'rtl':'ltr';
if(S.set.theme==='auto')r.removeAttribute('data-theme');else r.dataset.theme=S.set.theme;
const nav=[['dash'],['vocab'],['quiz',1],['stats',1],['set']].map(([k,off])=>`<button class="nb ${S.view===k?'on':''}" ${off?'disabled':''} data-v="${k}">${svg(k)}<span>${t(k)}</span>${off?`<small>${t('soon')}</small>`:''}</button>`).join('');
$('#app').innerHTML=`<nav aria-label="LinguaFlow"><div class="logo">LinguaFlow</div>${nav}</nav><main>${S.db?'':`<div class="banner">${t('nodb')}</div>`}${{dash,vocab,set:settings}[S.view]()}</main>${S.view==='vocab'&&S.items.length?`<button class="btn fab" data-a="add">${svg('plus')} ${t('add')}</button>`:''}`}
function dash(){const n=S.items.length,w=S.items.filter(i=>i.type==='word').length,p=n-w,m=S.items.filter(i=>i.status==='mastered').length,rv=S.items.filter(i=>i.status==='review').length,day=new Date().toDateString(),td=S.items.filter(i=>new Date(i.createdAt).toDateString()===day).length;
if(!n)return`<h1>LinguaFlow</h1><div class="card empty"><h2>${t('et')}</h2><p class="hint">${t('ed')}</p><button class="btn" data-a="add">${svg('plus')} ${t('add')}</button><p class="hint">${t('loc')}</p></div>`;
const msg=rv?t('m1'):td?t('m2'):t('m0'),cols={ar:'--c-ar',fr:'--c-fr',en:'--c-en',mz:'--c-mz'};
const lanes=LG.map(l=>{const c=S.items.filter(i=>texts(i).some(x=>x.language===l)).length;return`<div class="lane"><span lang="${l}" dir="${DIR[l]}">${NM[l][l]||NM[S.set.ui][l]}</span><div class="bar"><i style="width:${Math.round(c/n*100)}%;background:var(${cols[l]})"></i></div><b>${c}</b></div>`}).join('');
return`<h1>LinguaFlow</h1><p class="msg">${msg}</p><div class="grid">${[[w,'words'],[p,'phr'],[m,'done'],[rv,'rev'],[td,'today']].map(([v,k])=>`<div class="card st"><b>${v}</b><span>${t(k)}</span></div>`).join('')}</div><h2>${t('lanes')}</h2><div class="card">${lanes}</div><p class="hint">${t('pend')}</p><button class="btn" data-a="add" style="margin-top:12px">${svg('plus')} ${t('add')}</button>`}
function vocab(){const q=norm(S.q);let L=S.items.filter(i=>(!q||hay(i).includes(q))&&(!S.st||i.status===S.st)&&(!S.inc||miss(i).length)).sort((a,b)=>b.createdAt-a.createdAt);
const head=`<h1>${t('vocab')}</h1><div class="bar2"><input id="q" type="search" dir="auto" placeholder="${t('q')}" value="${esc(S.q)}" aria-label="${t('q')}"><select id="st"><option value="">${t('all')}</option>${['new','learning','review','mastered'].map((k,i)=>`<option value="${k}" ${S.st===k?'selected':''}>${tt('s',i)}</option>`).join('')}</select><label class="chip" style="display:flex;align-items:center;gap:6px;min-height:44px"><input type="checkbox" id="inc" ${S.inc?'checked':''} style="width:auto;min-height:0"> ${t('inc')}</label></div>`;
if(!S.items.length)return head+`<div class="card empty"><h2>${t('et')}</h2><p class="hint">${t('ed')}</p><button class="btn" data-a="add">${svg('plus')} ${t('add')}</button></div>`;
return head+(L.length?L.map(card).join(''):`<p class="hint">${t('none')}</p>`)}
function card(it){const rows=texts(it).map(x=>{const dir=x.dir||DIR[x.language];return`<div class="tr"><span class="ln" style="color:var(--c-${x.language})">${NM[S.set.ui][x.language]}</span><div><div class="tx" lang="${x.language}" dir="${dir}">${esc(x.text)}</div>${x.pronunciation?`<div class="pn" dir="ltr">/${esc(x.pronunciation)}/</div>`:''}${(x.alternatives||[]).length?`<div class="pn" dir="${dir}">${x.alternatives.map(esc).join(' · ')}</div>`:''}</div></div>`}).join('');
const ms=miss(it),ix=['new','learning','review','mastered'].indexOf(it.status);
return`<div class="card it"><div>${rows}</div>${it.notes?`<p class="hint" dir="auto">${esc(it.notes)}</p>`:''}<div class="row"><span class="chip">${tt('t',['word','sentence','expression'].indexOf(it.type))}</span><span class="chip">${tt('s',ix)}</span>${it.category?`<span class="chip" dir="auto">${esc(it.category)}</span>`:''}${texts(it).some(x=>x.source==='machine'&&!x.verified)?'<span class="chip w">'+t('mach')+'</span>':''}${ms.length?`<span class="chip w">${t('miss')} ${ms.map(l=>NM[S.set.ui][l]).join('، ')}</span>`:''}
<span style="margin-inline-start:auto;display:flex;gap:8px">${S.conf===it.id?`<button class="btn d" data-a="del" data-id="${it.id}">${t('sure')}</button><button class="btn g" data-a="nc">${t('cancel')}</button>`:`<button class="btn g" data-a="edit" data-id="${it.id}">${t('edit')}</button><button class="btn g" data-a="cd" data-id="${it.id}">${t('del')}</button>`}</span></div></div>`}
function settings(){const o=(a,v)=>a.map((x,i)=>`<option value="${x[0]}" ${x[0]===v?'selected':''}>${x[1]}</option>`).join('');
return`<h1>${t('set')}</h1><div class="card f" style="display:grid;gap:14px"><div><label>${t('ui')}</label><select id="ui">${o([['ar','العربية'],['fr','Français'],['en','English']],S.set.ui)}</select></div><div><label>${t('th')}</label><select id="th">${o(['auto','light','dark'].map((k,i)=>[k,tt('tt',i)]),S.set.theme)}</select></div><p class="hint">${t('loc')}</p></div>
<h2>${t('bk')}</h2><div class="card f" style="display:grid;gap:10px"><label>${t('ex2')}</label><textarea id="exp" rows="4" readonly dir="ltr">${esc(JSON.stringify({app:'linguaflow',version:1,items:S.items}))}</textarea><div><button class="btn g" data-a="dl">JSON ⬇</button></div><label>${t('im')}</label><textarea id="imp" rows="4" dir="ltr"></textarea><div><button class="btn" data-a="imp">${t('ib')}</button></div><p id="impm" class="hint" role="status"></p></div>`}
/* ---- add/edit dialog ---- */
function openForm(id){const it=S.items.find(i=>i.id===id)||{type:'word',sourceLanguage:S.set.ui,sourceText:'',translations:[],status:'new',difficulty:1};
const blocks=LG.map(l=>{const x=l===it.sourceLanguage?{text:it.sourceText,...(it.srcMeta||{})}:tr(it,l)||{};const d=x.dir||DIR[l];
return`<div class="lb" data-l="${l}"${x.source==='machine'&&!x.verified?' data-machine="1"':''}><label style="color:var(--c-${l});font-weight:500">${NM[S.set.ui][l]} <span class="hint">${l===it.sourceLanguage?'':'('+t('opt')+')'}</span></label><div style="display:flex;gap:8px"><input class="tx" lang="${l}" dir="${d}" value="${esc(x.text||'')}" style="flex:1;border:1px solid var(--bd);border-radius:10px;padding:10px;min-height:44px;background:var(--sf)">${l==='fr'||l==='en'?`<button type="button" class="btn g" data-a="tr">${t('tr')}</button>`:''}</div><p class="hint mh">${x.source==='machine'&&!x.verified?t('tm'):''}</p>${l==='mz'?`<p class="hint">${t('mzh')}</p>`:''}<details><summary>${t('pron')} / ${t('alt')}</summary><div class="two" style="margin-top:8px"><input class="pn" dir="ltr" placeholder="${t('pron')}" value="${esc(x.pronunciation||'')}"><input class="al" dir="${d}" lang="${l}" placeholder="${t('alt')}" value="${esc((x.alternatives||[]).join(', '))}">${l==='mz'?`<select class="dr" aria-label="${t('dirl')}"><option value="ltr" ${d==='ltr'?'selected':''}>LTR</option><option value="rtl" ${d==='rtl'?'selected':''}>RTL</option></select>`:''}</div></details></div>`}).join('');
const o=(arr,v)=>arr.map((x,i)=>`<option value="${i}" ${i===v?'selected':''}>${x}</option>`).join('');
$('#dlg').innerHTML=`<div class="dl f" data-id="${it.id||''}"><h2 style="margin:0">${t('add')}</h2><div class="two"><div><label>${t('type')}</label><select id="ft">${o(D.t[IX[S.set.ui]],['word','sentence','expression'].indexOf(it.type))}</select></div><div><label>${t('src')}</label><select id="fs">${LG.map(l=>`<option value="${l}" ${l===it.sourceLanguage?'selected':''}>${NM[S.set.ui][l]}</option>`).join('')}</select></div></div>${blocks}
<div class="two"><div><label>${t('cat')}</label><input id="fc" dir="auto" value="${esc(it.category||'')}"></div><div><label>${t('diff')}</label><select id="fd">${o(D.d[IX[S.set.ui]],(it.difficulty||1)-1)}</select></div></div><div class="two"><div><label>${t('stt')}</label><select id="fz">${['new','learning','review','mastered'].map((k,i)=>`<option value="${k}" ${it.status===k?'selected':''}>${tt('s',i)}</option>`).join('')}</select></div><div><label>${t('ex')}</label><input id="fe" dir="auto" value="${esc((it.examples||[])[0]||'')}"></div></div><div><label>${t('notes')}</label><textarea id="fn" dir="auto" rows="2">${esc(it.notes||'')}</textarea></div><div class="err" id="fer" role="alert"></div><div style="display:flex;gap:10px;justify-content:flex-end"><button class="btn g" data-a="close">${t('cancel')}</button><button class="btn" data-a="sv">${t('save')}</button></div></div>`;
$('#dlg').showModal();
$('#dlg').querySelector('.lb[data-l="'+it.sourceLanguage+'"] .tx').focus()}
async function submit(){const f=$('#dlg .dl'),id=f.dataset.id,sl=$('#fs').value;let src='',srcMeta,trs=[];
f.querySelectorAll('.lb').forEach(b=>{const mc=b.dataset.machine==='1',l=b.dataset.l,text=b.querySelector('.tx').value.trim(),dir=b.querySelector('.dr')?.value||DIR[l],pr=b.querySelector('.pn').value.trim(),al=b.querySelector('.al').value.split(',').map(s=>s.trim()).filter(Boolean),meta={pronunciation:pr,alternatives:al,dir};
if(l===sl){src=text;srcMeta=meta}else if(text)trs.push({language:l,text,source:mc?'machine':'manual',verified:!mc,...meta})});
const err=m=>$('#fer').textContent=m;if(!src)return err(t('req'));
if(S.items.some(i=>i.id!==id&&i.sourceLanguage===sl&&norm(i.sourceText)===norm(src)))return err(t('dup'));
const old=S.items.find(i=>i.id===id),now=Date.now(),ty=['word','sentence','expression'][+$('#ft').value];
const it={id:id||uid(),type:ty,sourceLanguage:sl,sourceText:src,srcMeta,translations:trs,category:$('#fc').value.trim(),difficulty:+$('#fd').value+1,notes:$('#fn').value.trim(),examples:$('#fe').value.trim()?[$('#fe').value.trim()]:[],status:$('#fz').value,createdAt:old?.createdAt||now,updatedAt:now};
S.items=old?S.items.map(i=>i.id===id?it:i):[it,...S.items];await saveItem(it);$('#dlg').close();render()}
async function doImport(){const m=$('#impm');let j;try{j=JSON.parse($('#imp').value)}catch(e){m.textContent=t('bad');return}
const arr=Array.isArray(j)?j:j&&Array.isArray(j.items)?j.items:null;if(!arr){m.textContent=t('bad');return}let a=0,b=0;
for(const x of arr){const ok=x&&typeof x.sourceText==='string'&&x.sourceText.trim()&&LG.includes(x.sourceLanguage)&&Array.isArray(x.translations);
if(!ok||S.items.some(i=>i.id===x.id||(i.sourceLanguage===x.sourceLanguage&&norm(i.sourceText)===norm(x.sourceText)))){b++;continue}
const it={id:typeof x.id==='string'?x.id:uid(),type:['word','sentence','expression'].includes(x.type)?x.type:'word',sourceLanguage:x.sourceLanguage,sourceText:String(x.sourceText).trim().slice(0,1000),srcMeta:x.srcMeta&&typeof x.srcMeta==='object'?{pronunciation:String(x.srcMeta.pronunciation||''),alternatives:(x.srcMeta.alternatives||[]).map(String),dir:x.srcMeta.dir==='rtl'?'rtl':'ltr'}:undefined,
translations:x.translations.filter(y=>y&&LG.includes(y.language)&&typeof y.text==='string'&&y.text.trim()).map(y=>({language:y.language,text:y.text.trim().slice(0,1000),source:'imported',verified:y.language==='mz'?!!y.verified:!!y.verified,pronunciation:String(y.pronunciation||''),alternatives:(y.alternatives||[]).map(String),dir:y.dir==='rtl'?'rtl':'ltr'})),
category:String(x.category||''),difficulty:[1,2,3].includes(x.difficulty)?x.difficulty:1,notes:String(x.notes||''),examples:(x.examples||[]).map(String),status:['new','learning','review','mastered'].includes(x.status)?x.status:'new',createdAt:+x.createdAt||Date.now(),updatedAt:Date.now()};
S.items.push(it);await saveItem(it);a++}
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
else if(a==='del'){S.items=S.items.filter(i=>i.id!==id);S.conf=null;await delItem(id);render()}else if(a==='imp')doImport()});
document.addEventListener('input',e=>{if(e.target.classList&&e.target.classList.contains('tx')){const b=e.target.closest('.lb');if(b&&b.dataset.machine){delete b.dataset.machine;b.querySelector('.mh').textContent=''}}if(e.target.id==='q'){S.q=e.target.value;const p=e.target.selectionStart;render();const q=$('#q');q.focus();q.setSelectionRange(p,p)}});
document.addEventListener('change',async e=>{const i=e.target.id;
if(i==='st'){S.st=e.target.value;render()}else if(i==='inc'){S.inc=e.target.checked;render()}
else if(i==='ui'){S.set.ui=e.target.value;await saveSet();render()}else if(i==='th'){S.set.theme=e.target.value;await saveSet();render()}
else if(i==='fs'){/* keep field values; source change only re-labels which field is the original */}});
(async()=>{const s=await run('settings','readonly',x=>x.get('s'));if(s&&s.v)Object.assign(S.set,s.v);
const all=await run('items','readonly',x=>x.getAll());if(all)S.items=all;
const h=location.hash.slice(1);if(['dash','vocab','set'].includes(h))S.view=h;render()})();

if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
