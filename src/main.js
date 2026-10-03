const projects = [
  {no:'01',title:'Software Aging Analyzer',eyebrow:'SYSTEMS · MONITORING',description:'A system monitoring platform built to observe OS-level resource behaviour, surface degradation patterns and support proactive failure analysis.',stack:['Python','Flask','SQLite','HTML','CSS','JavaScript'],github:'https://github.com/nivya691234/final_project',live:'https://final-project-jvww.onrender.com/',details:['CPU, RAM, disk, network and process monitoring','Background monitoring with SQLite persistence','Trend analysis and degradation detection','Failure prediction and root-cause analysis','Notification workflow and system tray support','Auto-start and PyInstaller packaging support']},
  {no:'02',title:'Vehicle Parking App V2',eyebrow:'FULL STACK · AUTOMATION',description:'A parking management application combining a Flask backend, Vue.js interface, SQLite storage and Celery-backed background jobs.',stack:['Flask','Vue.js','SQLite','Celery'],github:'https://github.com/24f1002781/Vehicle_Parking_App_V2',details:['User and administrator workflows','Parking search and reservation flow','Celery-based asynchronous work','Email reminders and scheduled reporting','Parking history export']},
  {no:'03',title:'Vehicle Parking App V1',eyebrow:'WEB APPLICATION · IIT MADRAS',description:'An earlier parking management system using Flask, Jinja templates and SQLite with separate user and administrative flows.',stack:['Flask','SQLite'],github:'https://github.com/24f1002781/Vehicle_Parking_App',details:['Multi-user parking workflow','Separate user and admin interfaces','Flask + Jinja server-side rendering','SQLite application database']},
  {no:'04',title:'Quiz Solver using LLM',eyebrow:'AI · FLASK',description:'A Python/Flask application that extracts quiz content and uses an LLM-assisted pipeline to help solve questions.',stack:['Python','Flask'],github:'https://github.com/24f1002781/llm_quiz_solver',details:['Quiz page and supporting content extraction','Question extraction stage','LLM-assisted reasoning stage','Flask API exposure']}
];

const proofs = [
  ['zoho','Professional','Zoho Corporation — DevOps Internship','Zoho Corporation Private Limited','23 Oct 2025 – 31 Jan 2026','zoho-devops-internship',1],
  ['iitm-foundation','Academic','Foundational Level in Programming and Data Science','IIT Madras','30 Dec 2024','iitm-foundation-programming-data-science',1],
  ['iitm-advanced','Academic','Advanced Certificate in Programming and Application Development','IIT Madras','2024','iitm-advanced-programming-application',1],
  ['iitm-diploma','Academic','Diploma in Programming — Course Completion','IIT Madras','2025','iitm-diploma-programming',1],
  ['git','Workshop','Code, Commit, Collaborate: Git & GitHub','IIT Madras BS Degree Programme','19–20 Jan 2026','iitm-git-github-workshop',1],
  ['numpy','Workshop','Implementing Machine Learning Techniques using Numpy','IIT Madras BS Degree Programme','27–30 Jan 2026','iitm-ml-numpy-workshop',1],
  ['arvr','Technical','AR / VR — 75 Hours Immersive Training','Monolith Research & Training Labs','2024','monolith-ar-vr-75h',0],
  ['game','Technical','Game Development — 90 Hours Training','Monolith Research & Training Labs','2024','monolith-game-development-90h',0],
  ['ethical','Security','Ethical Hacking — 75 Hours Training','Capricio Securities','2024','ethical-hacking-75h',1],
  ['nptel-dt','NPTEL','Design Thinking — A Primer','NPTEL / IIT Madras','2023 · 75%','nptel-design-thinking-a-primer',1],
  ['nptel-dti','NPTEL','Design, Technology and Innovation','NPTEL / IIT Bombay','2023 · 44%','nptel-design-technology-innovation',0],
  ['nptel-research','NPTEL','Introduction to Research','NPTEL / IIT Madras','2023 · 65%','nptel-introduction-to-research',1],
  ['nco4','Olympiad','National Cyber Olympiad — Class 4','SOF National Cyber Olympiad','2013','nco-class4-2013',0],
  ['nco8','Olympiad','National Cyber Olympiad — Class 8','SOF National Cyber Olympiad','2017–18','nco-class8-2017-2018',0],
  ['nso9','Olympiad','National Science Olympiad — Class 9','SOF National Science Olympiad','2018','nso-class9-2018',0],
  ['nso10','Olympiad','National Science Olympiad — Class 10','SOF National Science Olympiad','2019','nso-class10-2019',0],
  ['nstse','Olympiad','National Level Science Talent Search Examination','Unified Council','2014','nstse-2014',0],
  ['bhar17','Culture','National Level Competition on Bharatiya Culture','Vijayabharathi Tamil Nadu','2017–18','bharatiya-culture-2017-2018',0],
  ['bhar18','Culture','National Level Competition on Bharatiya Culture','Vijayabharathi Tamil Nadu','2018–19','bharatiya-culture-2018-2019',0],
  ['sanskrit-pradhama','Sanskrit','Pradhama — Sanskrit Giana Pariksha','Samskrita Bharati','2013 · Class IV A','sanskrit-pradhama-2013',0],
  ['sanskrit-kalika','Sanskrit','Kalika — Balabharati Pariksha','Samskrita Bharati Tamilnadu Trust','2015 · Distinction','sanskrit-kalika-2015',0],
  ['sanskrit-malika','Sanskrit','Malika — Balabharati Pariksha','Samskrita Bharati Tamilnadu Trust','2016 · Distinction','sanskrit-malika-2016',0],
  ['sanskrit-vatika','Sanskrit','Vatika — Balabharati Pariksha','Samskrita Bharati Uttaramilkanadu Trust','2016–17 · Distinction','sanskrit-vatika-2016-2017',0],
  ['sanskrit-geethika','Sanskrit','Geethika — Balabharati Exam','Samskrita Bharati Uttaramilkanadu Trust','2017–18 · Distinction','sanskrit-geethika-2017-2018',0],
  ['hindi-prathamic','Hindi','Prathamic Examination','Dakshina Bharat Hindi Prachar Sabha','2013 · Second class','hindi-prathamic-2013',0],
  ['hindi-parichaya','Hindi','Parichaya Examination','Dakshina Bharat Hindi Prachar Sabha','2013 · First class','hindi-parichaya-2013',0],
  ['hindi-madhyama','Hindi','Madhyama Examination','Dakshina Bharat Hindi Prachar Sabha','2014 · Second class','hindi-madhyama-2014',0],
  ['ncc-a','NCC','NCC Certificate A','National Cadet Corps','2019','ncc-a-2019',1],
  ['ncc-blc','NCC','Basic Leadership Course (BLC) Camp','2 TN Air Sqn NCC','25 Oct – 05 Nov 2023','ncc-blc-2023',0],
  ['ncc-b','NCC','NCC Certificate B','NCC Tamil Nadu, Puducherry & A&N','2024 · A Grade','ncc-b-2024',1],
  ['ncc-catc','NCC','Combined Annual Training Camp','1 (TN) R&V Sqn NCC','07–16 Jul 2024','ncc-catc-2024',0],
  ['ncc-c','NCC','NCC Certificate C','NCC Tamil Nadu, Puducherry & A&N','2025 · B Grade','ncc-c-2025',1]
].map(([id,category,title,issuer,date,file,featured])=>({id,category,title,issuer,date,file,featured:Boolean(featured)}));

const modes = [
  {label:'WORK',title:'Selected Work',text:'Four working repositories across systems, web applications and LLM experimentation.',href:'#projects'},
  {label:'DEVOPS',title:'DevOps Core',text:'Zoho internship experience with a focus on automation, deployment workflows and engineering tools.',href:'#experience'},
  {label:'TOOLS',title:'Engineering Stack',text:'Python, Flask, Linux, SQL, Git, Docker, Vue.js and supporting tooling.',href:'#stack'},
  {label:'PROOF',title:'Proof Archive',text:`${proofs.length} certificate and achievement records are packaged as real local proof files.`,href:'#proof'},
  {label:'LEARN',title:'Two Learning Paths',text:'B.E. Computer Science and Engineering + IIT Madras BS Data Science and Applications.',href:'#education'},
  {label:'CONNECT',title:'Open to Opportunities',text:'Software engineering, backend, DevOps and related roles.',href:'#contact'}
];
const techs=['Python','Flask','Linux','SQL','Git','GitHub','Docker','Vue.js','SQLite','Celery','JavaScript','HTML','CSS','Postman','Java','C'];
const slug={Python:'python',Flask:'flask',Linux:'linux',SQL:'mysql',Git:'git',GitHub:'github',Docker:'docker','Vue.js':'vuedotjs',SQLite:'sqlite',Celery:'celery',JavaScript:'javascript',HTML:'html5',CSS:'css3',Postman:'postman',Java:'openjdk',C:'c'};
const icon=(name,size=22)=>`https://cdn.simpleicons.org/${slug[name]}/${size>=23?'42ff57':'9adfa1'}`;
const img=(name,alt,cls='')=>`<img class="${cls}" src="${icon(name)}" alt="${alt}" loading="lazy">`;

function tickWatch(containerId){
  const el=document.getElementById(containerId); if(!el)return;
  el.innerHTML=Array.from({length:24},(_,i)=>`<i style="transform:rotate(${i*15}deg)"></i>`).join('');
}
function buildTicker(){
  document.getElementById('ticker-track').innerHTML=[...techs,...techs].map(n=>`<span class="ticker-item">${img(n,n,18)}${n}</span>`).join('');
}
function buildProjectGrid(){
  document.getElementById('project-grid').innerHTML=projects.map(p=>`<article class="project-card reveal" data-reveal><div class="project-top"><b>${p.no}</b><span>${p.eyebrow}</span></div><h3>${p.title}</h3><p>${p.description}</p><div class="mini-stack">${p.stack.map(s=>`<span>${img(s,s,15)}${s}</span>`).join('')}</div><div class="project-actions"><button data-project="${p.no}">Inspect ↗</button><a href="${p.github}" target="_blank" rel="noreferrer">GitHub ↗</a>${p.live?`<a href="${p.live}" target="_blank" rel="noreferrer">Live ↗</a>`:''}</div></article>`).join('');
  document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openProject(projects.find(p=>p.no===b.dataset.project))));
}
function buildTools(){
  const stage=document.getElementById('tool-stage');
  stage.insertAdjacentHTML('afterbegin', '<div class="tool-beam"></div>');
  stage.innerHTML='<div class="tool-beam"></div>'+[...techs,...techs].map((n,i)=>`<div class="tool-chip" style="--top:${10+(i%8)*30}px;--duration:${8+(i%5)*1.5}s;--delay:-${i*.75}s">${img(n,n,23)}<strong>${n}</strong><small>READY</small></div>`).join('');
}
function buildModeDial(){
  const dial=document.getElementById('watch-dial');
  dial.innerHTML=modes.map((m,i)=>{const a=i*60-90;return `<button class="mode-button ${i===0?'active':''}" data-mode="${i}" style="transform:rotate(${a}deg) translateY(-173px) rotate(${-a}deg)">${m.label}</button>`}).join('');
  dial.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(Number(b.dataset.mode))));
}
function setMode(i){
  const m=modes[i];
  document.querySelectorAll('.mode-button').forEach(b=>b.classList.toggle('active',Number(b.dataset.mode)===i));
  document.getElementById('watch-label').textContent=m.label;
  document.getElementById('mode-number').textContent=String(i+1).padStart(2,'0');
  document.getElementById('mode-label').textContent=m.label;
  document.getElementById('mode-title').textContent=m.title;
  document.getElementById('mode-text').textContent=m.text;
  document.getElementById('mode-link').href=m.href;
}
function buildProofFilters(){
  const cats=['Featured','All','Professional','Academic','Workshop','Technical','Security','NPTEL','Olympiad','Culture','Sanskrit','Hindi','NCC'];
  document.getElementById('proof-tabs').innerHTML=cats.map(c=>`<button class="${c==='Featured'?'active':''}" data-filter="${c}">${c}</button>`).join('');
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>renderProofs(b.dataset.filter)));
}
function renderProofs(filter='Featured'){
  const arr=filter==='Featured'?proofs.filter(p=>p.featured):filter==='All'?proofs:proofs.filter(p=>p.category===filter);
  document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
  document.getElementById('proof-grid').innerHTML=arr.map(p=>`<button class="proof-card reveal" data-proof="${p.id}"><div class="proof-image"><img src="/proofs/${p.file}.jpg" alt="${p.title}" loading="lazy"></div><div class="proof-meta"><span>${p.category}</span><small>${p.date}</small></div><h3>${p.title}</h3><p>${p.issuer}</p><strong>VIEW PROOF ↗</strong></button>`).join('');
  document.querySelectorAll('[data-proof]').forEach(b=>b.addEventListener('click',()=>openProof(proofs.find(p=>p.id===b.dataset.proof))));
  observeReveals();
}
function openProject(p){
  const m=document.getElementById('modal');
  m.innerHTML=`<button class="close" id="modal-close">×</button><span class="small-label">${p.eyebrow}</span><h2>${p.title}</h2><p>${p.description}</p><div class="modal-tags">${p.stack.map(s=>`<span>${img(s,s,18)}${s}</span>`).join('')}</div><div class="modal-list">${p.details.map(d=>`<div>+ ${d}</div>`).join('')}</div><div class="modal-actions"><a class="btn solid" href="${p.github}" target="_blank" rel="noreferrer">GitHub ↗</a>${p.live?`<a class="btn outline" href="${p.live}" target="_blank" rel="noreferrer">Live ↗</a>`:''}</div>`;
  showOverlay();
}
function openProof(p){
  const m=document.getElementById('modal');
  m.className='proof-modal';
  m.innerHTML=`<button class="close" id="modal-close">×</button><div class="proof-modal-head"><div><span class="small-label">${p.category}</span><h2>${p.title}</h2><p>${p.issuer} · ${p.date}</p></div><a href="/proofs/${p.file}.pdf" target="_blank" rel="noreferrer">OPEN ORIGINAL PDF ↗</a></div><div class="proof-large"><img src="/proofs/${p.file}.jpg" alt="${p.title}"></div>`;
  showOverlay();
}
function showOverlay(){document.getElementById('overlay').classList.remove('hidden');document.getElementById('modal-close').onclick=closeOverlay;}
function closeOverlay(){document.getElementById('overlay').classList.add('hidden');document.getElementById('modal').className='modal';document.getElementById('modal').innerHTML='';}
function observeReveals(){
  const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.1});
  document.querySelectorAll('.reveal:not(.visible)').forEach(n=>io.observe(n));
}
function boot(){
  tickWatch('boot-ticks');tickWatch('main-ticks');buildTicker();buildProjectGrid();buildTools();buildModeDial();buildProofFilters();renderProofs();
  document.getElementById('year').textContent=new Date().getFullYear();
  document.getElementById('overlay').addEventListener('click',e=>{if(e.target.id==='overlay')closeOverlay()});
  document.getElementById('theme-toggle').addEventListener('click',()=>{const light=document.documentElement.dataset.theme==='light';document.documentElement.dataset.theme=light?'dark':'light';document.getElementById('theme-toggle').textContent=light?'DAY':'DARK';localStorage.setItem('lnb-theme',light?'dark':'light')});
  document.documentElement.dataset.theme=localStorage.getItem('lnb-theme')||'dark';document.getElementById('theme-toggle').textContent=document.documentElement.dataset.theme==='light'?'DARK':'DAY';
  observeReveals();
  let p=0;const bar=document.getElementById('boot-progress-bar');const pct=document.getElementById('boot-percent');const timer=setInterval(()=>{p+=2;bar.style.width=p+'%';pct.textContent=String(p).padStart(3,'0')+'%';if(p>=100){clearInterval(timer);setTimeout(()=>{document.getElementById('boot').classList.add('hidden');document.getElementById('app').classList.remove('hidden');observeReveals()},450)}},35);
}
boot();
