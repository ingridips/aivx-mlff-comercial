
/* ═══════════ CONFIG ═══════════ */
const SLIDES = [
  {id:'s-hero',label:'Início'},{id:'s-about',label:'Empresa'},
  {id:'s-freeflow',label:'Free Flow'},
  {id:'s-comp',label:'Posicionamento'},
  {id:'s-solution',label:'Solução'},{id:'s-portico',label:'Pórtico'},
  {id:'s-archlvl',label:'Arquitetura'},
  {id:'s-video',label:'Na Prática'},{id:'s-dashboard',label:'Validação N2'},{id:'s-diff',label:'Diferenciais'},
  {id:'s-impact',label:'Impacto'},
  {id:'s-end',label:'Conclusão'},
];

/* ═══════════ ARCH DATA ═══════════ */
const ARCH_STEPS = [
  { label:'Arquitetura · Visão Geral', title:'Layout de Equipamentos',
    desc:'Dois sentidos, duas faixas e acostamento cobertos por uma rede integrada de sensores — cada um com função específica e acionado via gatilho inteligente do LIDAR.',
    layer:null, eqImg:null, eqSub:'', eqTitle:'Layout Completo',
    eqDesc:'Visualização top-down da distribuição dos sensores no pórtico.', specs:[], appImg:null },
  { label:'Sensor 01 · Gatilho Principal', title:'Sensor LIDAR 360°',
    desc:'O LIDAR cria um identificador único do veículo durante a travessia. Define pontos de gatilho inteligentes — sincronizando todos os demais sensores com base no percurso real do veículo.',
    layer:'layer-lidar', eqImg:'assets/images/img005.jpg', eqSub:'VANJEE Technology',
    eqTitle:'LIDAR 360°', eqDesc:'Varredura completa da pista. Identifica perfil e posição de cada veículo com precisão centimétrica.',
    specs:['360° scan','Perfil único','Multi-faixa','Gatilho ativo'], appImg:null },
  { label:'Sensor 02 · Leitura de Placa', title:'OCR Frontal / Traseira',
    desc:'Câmera inteligente com duas lentes: uma para leitura de placa (OCR) e outra para identificação de marca, modelo e cor. Opera a até 120 FPS e captura veículos a até 320 km/h — com IA embarcada.',
    layer:'layer-ocr', eqImg:'assets/images/img006.jpg', eqSub:'Adaptive Recognition · VIDAR',
    eqTitle:'OCR Frontal / Traseira', eqDesc:'Alta precisão em múltiplas faixas e alta velocidade.',
    specs:['120 FPS','320 km/h','Multi-faixa','IA embarcada'], appImg:'assets/images/img007.jpg' },
  { label:'Sensor 03 · Classificação', title:'Câmera de Eixo',
    desc:'Sistema compacto de contagem de eixos com deep learning. Detecta e conta eixos 24/7, gera imagens reconstruídas dos veículos e fornece metadados de classificação configuráveis.',
    layer:'layer-eixo', eqImg:'assets/images/img008.jpg', eqSub:'Axle Counter Tattile',
    eqTitle:'Câmera de Eixo', eqDesc:'Reconhecimento por IA — classificação precisa em qualquer condição.',
    specs:['Deep Learning','24/7','Reconstrução visual','Metadados'], appImg:'assets/images/img009.jpg' },
  { label:'Sensor 04 · Identificação TAG', title:'Antena RFID / DSRC',
    desc:'Transmite e recebe sinais de radiofrequência para leitura de TAGs veiculares. Identificação complementar ao OCR — especialmente eficaz para frotas com TAGs ativas.',
    layer:'layer-rfid', eqImg:'assets/images/img010.jpg', eqSub:'Antena RFID / DSRC',
    eqTitle:'Antena RFID', eqDesc:'Leitura de TAG passiva e ativa. Opera em conjunto com OCR para identificação redundante.',
    specs:['RFID','DSRC','Multi-vendor','Identificação TAG'], appImg:null },
];

let archCurrent = 0;
const ARCH_TOTAL = ARCH_STEPS.length;

/* ═══════════ BUILD NAV ═══════════ */
const dotsWrap = document.getElementById('navDots');
const scroller  = document.getElementById('scroller');

SLIDES.forEach((s,i) => {
  const b = document.createElement('button');
  b.className = 'nav-dot'; b.title = s.label;
  b.addEventListener('click', () => {
    const el = document.getElementById(s.id);
    if (el) scroller.scrollTo({top:el.offsetTop, behavior:'smooth'});
  });
  dotsWrap.appendChild(b);
});

/* ═══════════ ARCH RENDER ═══════════ */
function renderArch(step) {
  if (!document.getElementById('archStepLabel')) return;
  archCurrent = step;
  const d = ARCH_STEPS[step];

  // label
  document.getElementById('archStepLabel').textContent = d.label;

  // layers — hide all first, then show only active
  // Hide ALL images in the stack first
  document.querySelectorAll('.diag-stack img').forEach(img => {
    img.classList.remove('active');
  });
  // Show only the correct image for this step
  if (d.layer) {
    // Steps 1-4: show the specific layer image
    const el = document.getElementById(d.layer);
    if (el) el.classList.add('active');
  } else {
    // Step 0: show the base overview image
    const baseImg = document.querySelector('.diag-stack img.base');
    if (baseImg) baseImg.classList.add('active');
  }

  // dots
  document.querySelectorAll('.arch-dot').forEach((dot,i) => dot.classList.toggle('on', i === step));

  // counter
  document.getElementById('archCounter').textContent = `${step+1} / ${ARCH_TOTAL}`;

  // buttons
  document.getElementById('archPrev').disabled = (step === 0);
  document.getElementById('archNext').disabled = (step === ARCH_TOTAL - 1);

  // panel
  const panel = document.getElementById('archPanel');
  const specs  = d.specs.map(s => `<span class="espec">${s}</span>`).join('');
  const appHtml = d.appImg
    ? `<div class="eq-app-img"><img src="${d.appImg}" alt="aplicação em campo"></div>`
    : '';
  const eqHtml = d.eqImg
    ? `<div class="eq-card lit">
        <div class="eq-img-wrap"><img src="${d.eqImg}" alt="${d.eqTitle}"></div>
        <div>
          <div class="eq-sub">${d.eqSub}</div>
          <div class="eq-title">${d.eqTitle}</div>
          <div class="eq-desc">${d.eqDesc}</div>
          <div class="eq-specs">${specs}</div>
        </div>
       </div>${appHtml}`
    : `<div class="eq-card"><div class="eq-img-wrap" style="width:52px;height:52px;font-size:1.8rem;background:rgba(116,96,255,.1)">🏗️</div>
        <div><div class="eq-title">${d.eqTitle}</div><div class="eq-desc">${d.eqDesc}</div></div></div>`;

  panel.innerHTML = `
    <div>
      <h2 class="arch-step-title">${d.title}</h2>
      <p class="arch-step-desc">${d.desc}</p>
    </div>
    ${eqHtml}`;
}

window.archStep  = (dir) => { renderArch(Math.max(0, Math.min(ARCH_TOTAL-1, archCurrent + dir))); };
window.archGoTo  = (i)   => { renderArch(i); };
renderArch(0);

/* ═══════════ TRACK FOCUS ON ARCH SECTION ═══════════ */
let archFocused = false;

function isArchVisible() {
  return false;
}

/* ═══════════ KEYBOARD ═══════════ */
document.addEventListener('keydown', e => {
  const inArch = isArchVisible();

  // Left / Right — always navigate arch steps when arch is visible
  if (inArch && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    e.preventDefault();
    archStep(e.key === 'ArrowRight' ? 1 : -1);
    return;
  }

  // Up / Down / PageUp / PageDown — navigate sections
  if (!['ArrowDown','ArrowUp','PageDown','PageUp'].includes(e.key)) return;
  e.preventDefault();

  let cur = 0;
  SLIDES.forEach((s,i) => {
    const el = document.getElementById(s.id);
    if (!el) return;
    if (el.getBoundingClientRect().top >= -120 && el.getBoundingClientRect().top < window.innerHeight * 0.5) cur = i;
  });
  const dir  = (e.key==='ArrowDown'||e.key==='PageDown') ? 1 : -1;
  const next = Math.max(0, Math.min(SLIDES.length-1, cur+dir));
  const el   = document.getElementById(SLIDES[next].id);
  if (el) scroller.scrollTo({top:el.offsetTop, behavior:'smooth'});
});

/* ═══════════ PROGRESS + DOTS ═══════════ */
function updateUI() {
  const st  = scroller.scrollTop;
  const max = scroller.scrollHeight - scroller.clientHeight;
  document.getElementById('pb').style.width = (max > 0 ? (st/max)*100 : 0) + '%';

  const dots = dotsWrap.querySelectorAll('.nav-dot');
  let active = 0;
  SLIDES.forEach((s,i) => {
    const el = document.getElementById(s.id);
    if (!el) return;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.45) active = i;
  });
  dots.forEach((d,i) => d.classList.toggle('active', i === active));
}

scroller.addEventListener('scroll', updateUI, {passive:true});

/* ═══════════ REVEAL ═══════════ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, {threshold:0.08, root:null});
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ═══════════ BAR CHARTS ═══════════ */
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting)
      e.target.querySelectorAll('.bar-fill[data-w]').forEach(bar =>
        setTimeout(() => { bar.style.width = bar.getAttribute('data-w') + '%'; }, 250));
  });
}, {threshold:0.3, root:null});
document.querySelectorAll('#barChart').forEach(el => barObs.observe(el));

/* margin bar */
const mbObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const mb = document.getElementById('marginBar');
      if (mb) setTimeout(() => { mb.style.width = mb.getAttribute('data-w') + '%'; }, 500);
    }
  });
}, {threshold:0.3, root:null});
const compSec = document.getElementById('s-comp');
if (compSec) mbObs.observe(compSec);

/* ═══════════ ANCHOR CLICKS ═══════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) scroller.scrollTo({top:t.offsetTop, behavior:'smooth'});
  });
});

/* ═══════════ NAV BG + PARALLAX ═══════════ */
const heroVid = document.querySelector('.hero-vid');
scroller.addEventListener('scroll', () => {
  document.querySelector('nav').style.background =
    scroller.scrollTop > 60 ? 'rgba(8,8,16,.98)' : 'rgba(8,8,16,.92)';
  if (heroVid && scroller.scrollTop < window.innerHeight)
    heroVid.style.transform = 'translateY(' + scroller.scrollTop * 0.28 + 'px)';
}, {passive:true});

updateUI();
console.log('%cAIVX · MLFF Platform v4', 'color:#7460ff;font-size:1.1rem;font-weight:bold');
console.log('%c↑↓ seções | ←→ equipamentos na seção de diagrama', 'color:#74d5d0;font-size:.85rem');

/* -- expostos para i18n.js -- */
window.ARCH_STEPS = ARCH_STEPS;
window.archGetCurrent = function() { return archCurrent; };
window.archGoTo = function(step) { archGoTo(step); };
