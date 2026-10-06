// دمج كائنات البيانات من الملفات الثلاثة
const quizData = {
  ...circuitsDsaData,
  ...networksSignalsData,
  ...statsDbData
};

const i18n = {
  ar: {
    logoTitle: "المهندس 3LI", logoSub: "منصة المذاكرة التفاعلية", rateBtn: "⭐ التقييم", modalTitle: "⭐ تقييم منصة المذاكرة | المهندس 3LI",
    disclaimer: "<b>⚠ تنبيه وإخلاء مسؤولية:</b> هذا الموقع هو جهد استرشادي وداعم للمذاكرة جرى إعداده بواسطة المهندس 3LI.",
    copy: "© 2026 جميع الحقوق محفوظة — <span class=\"brand\">المهندس 3LI</span>", footRate: "⭐ شاركنا رأيك وتقييمك",
    home: "الرئيسية", selectSubjectTitle: "اختر المادة", selectSubjectSub: "اختر المادة اللي تبغى تراجعها من مواد الترم الخامس",
    natureTitle: "طبيعة المادة", natureSub: "هل المادة عملي ولا نظري؟", examTitle: "نوع الاختبار", examSub: "اختر نوع الاختبار اللي تذاكر له",
    patternTitle: "نمط الأسئلة", patternSub: "اختر نمط الأسئلة اللي تبغى تتدرب عليه", soonTitle: "قريباً",
    soonDesc: "هذا القسم قيد الإعداد، بيتم إضافة الأسئلة هنا قريباً بإذن الله.", back: "↩ رجوع", backHome: "↩ رجوع للرئيسية", practical: "عملي", theory: "نظري",
    resetBtn: "🔄 إعادة الاختبار", scoreText: "النتيجة:"
  },
  en: {
    logoTitle: "Eng. 3LI", logoSub: "Interactive Study Platform", rateBtn: "⭐ Rate Us", modalTitle: "⭐ Platform Feedback | Eng. 3LI",
    disclaimer: "<b>⚠️ Disclaimer:</b> Educational study aid prepared by Eng. 3LI.",
    copy: "© 2026 All Rights Reserved — <span class=\"brand\">Eng. 3LI</span>", footRate: "⭐ Share Your Feedback",
    home: "Home", selectSubjectTitle: "Select Subject", selectSubjectSub: "Choose the course for 5th Semester",
    natureTitle: "Course Type", natureSub: "Practical or theoretical?", examTitle: "Exam Type", examSub: "Select your exam",
    patternTitle: "Question Pattern", patternSub: "Choose question style", soonTitle: "Coming Soon",
    soonDesc: "This section is under development.", back: "↩ Back", backHome: "↩ Back to Home", practical: "Practical", theory: "Theory",
    resetBtn: "🔄 Reset Quiz", scoreText: "Score:"
  }
};

let currentLang = 'ar';
function initLang() { currentLang = localStorage.getItem('lang') || 'ar'; applyLang(); }
function toggleLang() { currentLang = currentLang === 'ar' ? 'en' : 'ar'; localStorage.setItem('lang', currentLang); applyLang(); render(); }
function applyLang() {
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('langBtn').innerText = currentLang === 'ar' ? '🌐 English' : '🌐 العربية';
  const t = i18n[currentLang];
  document.getElementById('txt-logo-title').innerText = t.logoTitle;
  document.getElementById('txt-logo-sub').innerText = t.logoSub;
  document.getElementById('txt-rate-btn').innerText = t.rateBtn;
  document.getElementById('txt-modal-title').innerText = t.modalTitle;
  document.getElementById('txt-disclaimer').innerHTML = t.disclaimer;
  document.getElementById('txt-copy').innerHTML = t.copy;
  document.getElementById('txt-foot-rate').innerText = t.footRate;
}

function initTheme() { const savedTheme = localStorage.getItem('theme') || 'dark'; document.documentElement.setAttribute('data-theme', savedTheme); updateThemeBtn(savedTheme); }
function toggleTheme() { const ct = document.documentElement.getAttribute('data-theme'); const nt = ct === 'light' ? 'dark' : 'light'; document.documentElement.setAttribute('data-theme', nt); localStorage.setItem('theme', nt); updateThemeBtn(nt); }
function updateThemeBtn(t) { document.getElementById('themeBtn').innerText = t === 'light' ? '☀️ Light' : '🌙 Dark'; }
initTheme(); initLang();

const subjects = [
  {id:'circuits',   name:{ar:'دوائر كهربائية', en:'Electric Circuits'}, icon:'⚡', desc:{ar:'تحليل الدوائر والتيار والجهد', en:'Circuit Analysis'}},
  {id:'networks',   name:{ar:'شبكات الحاسب', en:'Computer Networks'}, icon:'🌐', desc:{ar:'الطبقات والبروتوكولات', en:'Layers & Protocols'}},
  {id:'signals',    name:{ar:'الإشارات والنظم', en:'Signals & Systems'}, icon:'📈', desc:{ar:'الإشارات المستمرة والمتقطعة', en:'Signals'}},
  {id:'dsa',        name:{ar:'هياكل البيانات وخوارزميات الشبكات', en:'Data Structures & Network Algorithms'}, icon:'🧩', desc:{ar:'الهياكل والخوارزميات', en:'Structures & Algorithms'}},
  {id:'stats',      name:{ar:'الإحصاء الاحتمالات', en:'Statistics & Probability'}, icon:'📊', desc:{ar:'التوزيعات والاحتمالات', en:'Probability'}},
  {id:'db',         name:{ar:'مفاهيم وتصميم قواعد البيانات', en:'Database Concepts & Design'}, icon:'🗄️', desc:{ar:'التصميم والعلاقات', en:'DB Design'}},
];

const patterns = [
  {id:'mcq',   name:{ar:'اختيارات (MCQs)', en:'Multiple Choice (MCQs)'}, icon:'🔘'},
  {id:'short', name:{ar:'إجابات قصيرة (Short Answer)', en:'Short Answer'}, icon:'✏️'},
  {id:'long',  name:{ar:'إجابات طويلة / علل (Long Answer)', en:'Long Answer'}, icon:'📄'},
];

let userAnswers = {};
let state = { subject:null, nature:null, exam:null, pattern:null };

function openModal(){ document.getElementById('rateModal').classList.add('active'); }
function closeModal(){ document.getElementById('rateModal').classList.remove('active'); }

let currentScale = 1;
function openZoomModal(imgSrc) {
  const modal = document.getElementById('zoomModal');
  const img = document.getElementById('zoomedImg');
  img.src = imgSrc;
  currentScale = 1;
  img.style.transform = `scale(${currentScale})`;
  modal.classList.add('active');
}

function closeZoomModal() {
  document.getElementById('zoomModal').classList.remove('active');
}

function zoomImage(factor) {
  currentScale *= factor;
  if (currentScale < 0.5) currentScale = 0.5;
  if (currentScale > 4) currentScale = 4;
  document.getElementById('zoomedImg').style.transform = `scale(${currentScale})`;
}

function resetZoom() {
  currentScale = 1;
  document.getElementById('zoomedImg').style.transform = `scale(${currentScale})`;
}

function toggleSolution(solId) {
  const solBox = document.getElementById(solId);
  const btn = document.getElementById('btn-' + solId);
  if (solBox.classList.contains('visible')) {
    solBox.classList.remove('visible');
    btn.innerHTML = '👁️ أظهر الحل الصحيح لأسئلة التدريب';
  } else {
    solBox.classList.add('visible');
    btn.innerHTML = '🙈 إخفاء الحل الصحيح';
  }
}

const view = document.getElementById('view');
const crumbsEl = document.getElementById('crumbs');
function goHome(){ state = {subject:null,nature:null,exam:null,pattern:null}; render(); }

function renderCrumbs(){
  const t = i18n[currentLang];
  const c = [];
  
  if (!state.subject) {
    c.push(`<span class="active">${t.home}</span>`);
  } else {
    c.push(`<span class="crumb-link" onclick="goHome()">${t.home}</span>`);
  }

  if (state.subject) {
    const s = subjects.find(x => x.id === state.subject);
    if (!state.nature) {
      c.push(`<span class="sep">›</span><span class="active">${s.name[currentLang]}</span>`);
    } else {
      c.push(`<span class="sep">›</span><span class="crumb-link" onclick="backTo('nature')">${s.name[currentLang]}</span>`);
    }
  }

  if (state.nature) {
    const natureName = state.nature === 'theory' ? t.theory : t.practical;
    if (!state.exam) {
      c.push(`<span class="sep">›</span><span class="active">${natureName}</span>`);
    } else {
      c.push(`<span class="sep">›</span><span class="crumb-link" onclick="backTo('exam')">${natureName}</span>`);
    }
  }

  if (state.exam) {
    let examName = state.exam.toUpperCase();
    if (!state.pattern) {
      c.push(`<span class="sep">›</span><span class="active">${examName}</span>`);
    } else {
      c.push(`<span class="sep">›</span><span class="crumb-link" onclick="backTo('pattern')">${examName}</span>`);
    }
  }

  if (state.pattern) {
    const p = patterns.find(x => x.id === state.pattern);
    c.push(`<span class="sep">›</span><span class="active">${p.name[currentLang]}</span>`);
  }

  crumbsEl.innerHTML = c.join('');
}

function render(){
  renderCrumbs();
  if(!state.subject) return renderSubjects();
  if(!state.nature)  return renderNatures();
  if(!state.exam)    return renderExams();
  if(!state.pattern) return renderPatterns();
  
  const key = `${state.subject}_${state.nature}_${state.exam}_${state.pattern}`;
  if(quizData[key]){
    if(state.pattern === 'mcq') {
      renderQuizMCQ(quizData[key]);
    } else {
      renderQuestionsList(quizData[key]);
    }
  } else {
    renderSoon();
  }
}

function cardHTML(id, icon, name, desc, onClick){
  return `<div class="card" onclick="${onClick}"><div class="icon">${icon}</div><div class="name">${name}</div>${desc?`<div class="desc">${desc}</div>`:''}</div>`;
}

function renderSubjects(){
  const t = i18n[currentLang];
  view.innerHTML = `<h1 class="title">${t.selectSubjectTitle}</h1><p class="subtitle">${t.selectSubjectSub}</p><div class="grid">${subjects.map(s=>cardHTML(s.id,s.icon,s.name[currentLang],s.desc[currentLang],`selectSubject('${s.id}')`)).join('')}</div>`;
}

function renderNatures(){
  const t = i18n[currentLang];
  if(state.subject === 'stats'){ state.nature = 'theory'; return renderExams(); }
  const natures = [{id:'practical', name:t.practical, icon:'🛠️'}, {id:'theory', name:t.theory, icon:'📚'}];
  view.innerHTML = `<h1 class="title">${t.natureTitle}</h1><p class="subtitle">${t.natureSub}</p><div class="grid">${natures.map(n=>cardHTML(n.id,n.icon,n.name,'',`selectNature('${n.id}')`)).join('')}</div><button class="btn back" onclick="goHome()">${t.backHome}</button>`;
}

function renderExams(){
  const t = i18n[currentLang];
  let currentExams = (state.subject === 'stats') ? [{id:'midterm1', name:'Midterm 1', icon:'📝'},{id:'midterm2', name:'Midterm 2', icon:'📝'},{id:'final', name:'Final', icon:'🎯'}] : (state.nature === 'practical' ? [{id:'final', name:'Final', icon:'🎯'}] : [{id:'midterm', name:'Midterm', icon:'📝'},{id:'final', name:'Final', icon:'🎯'}]);
  view.innerHTML = `<h1 class="title">${t.examTitle}</h1><p class="subtitle">${t.examSub}</p><div class="grid">${currentExams.map(e=>cardHTML(e.id,e.icon,e.name,'',`selectExam('${e.id}')`)).join('')}</div><button class="btn back" onclick="backTo('nature')">${t.back}</button>`;
}

function renderPatterns(){
  const t = i18n[currentLang];
  view.innerHTML = `<h1 class="title">${t.patternTitle}</h1><p class="subtitle">${t.patternSub}</p><div class="grid">${patterns.map(p=>cardHTML(p.id,p.icon,p.name[currentLang],'',`selectPattern('${p.id}')`)).join('')}</div><button class="btn back" onclick="backTo('exam')">${t.back}</button>`;
}

function renderQuizMCQ(questions){
  const t = i18n[currentLang];
  const sName = subjects.find(x=>x.id===state.subject).name[currentLang];
  
  let html = `<h1 class="title">${sName}</h1><p class="subtitle">اختبار تجريبي تفاعلي • ${questions.length} أسئلة</p>`;
  
  html += `
    <div class="quiz-header">
      <div class="quiz-score" id="score-counter">${t.scoreText} 0 / ${questions.length}</div>
      <button class="btn-reset" onclick="resetQuiz()">${t.resetBtn}</button>
    </div>
    <div class="quiz-container">
  `;
  
  questions.forEach((q, qIndex) => {
    html += `
      <div class="q-card" id="qc-${qIndex}">
        <div class="q-title">${q.q}</div>
        <div class="q-sub">${q.qAr}</div>
        ${q.code ? `<pre class="q-code"><code>${q.code}</code></pre>` : ''}
        <div class="q-options">
          ${q.options.map((opt, oIndex) => `
            <button class="opt-btn" id="btn-${qIndex}-${oIndex}" onclick="checkAnswer(${qIndex}, ${oIndex},${q.ans})">
              <span>${opt.txt}</span>
              <span style="font-size:12px; opacity:0.8;">${opt.ar}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });
  
  html += `</div><button class="btn back" onclick="backTo('pattern')">${t.back}</button>`;
  view.innerHTML = html;
  
  userAnswers = {};
  updateScore(questions.length);
}

function checkAnswer(qIdx, selectedIdx, correctIdx) {
  if (userAnswers[qIdx] !== undefined) return;
  
  userAnswers[qIdx] = (selectedIdx === correctIdx);
  const card = document.getElementById(`qc-${qIdx}`);
  const btns = card.querySelectorAll('.opt-btn');
  
  btns.forEach((btn, idx) => {
    btn.classList.add('disabled');
    if(idx === correctIdx) {
      btn.classList.add('correct');
    } else if(idx === selectedIdx) {
      btn.classList.add('wrong');
    }
  });
  
  const quizKey = `${state.subject}_${state.nature}_${state.exam}_${state.pattern}`;
  updateScore(quizData[quizKey].length);
}

function updateScore(total) {
  const t = i18n[currentLang];
  const correctCount = Object.values(userAnswers).filter(v => v === true).length;
  const scoreEl = document.getElementById('score-counter');
  if (scoreEl) {
    scoreEl.innerText = `${t.scoreText} ${correctCount} / ${total}`;
  }
}

function resetQuiz() {
  userAnswers = {};
  const quizKey = `${state.subject}_${state.nature}_${state.exam}_${state.pattern}`;
  const questions = quizData[quizKey];
  
  questions.forEach((q, qIndex) => {
    const card = document.getElementById(`qc-${qIndex}`);
    if (card) {
      const btns = card.querySelectorAll('.opt-btn');
      btns.forEach((btn, oIndex) => {
        btn.className = 'opt-btn';
        btn.onclick = () => checkAnswer(qIndex, oIndex, q.ans);
      });
    }
  });
  
  updateScore(questions.length);
}

function renderQuestionsList(questions){
  const t = i18n[currentLang];
  const sName = subjects.find(x=>x.id===state.subject).name[currentLang];
  const pName = patterns.find(x=>x.id===state.pattern).name[currentLang];
  
  let html = `<h1 class="title">${sName}</h1><p class="subtitle">${pName} • عدد الأسئلة: ${questions.length}</p><div class="quiz-container">`;
  
  questions.forEach((q, idx) => {
    html += `
      <div class="q-card">
        <div class="q-title">${q.titleEn}</div>
        <div class="q-sub">${q.titleAr}</div>
        
        ${q.imageSrc ? `
          <div class="question-image-box">
            <img src="${q.imageSrc}" alt="رسمة السؤال" onclick="openZoomModal('${q.imageSrc}')">
          </div>
        ` : ''}

        ${q.twoImages ? `
          <div class="images-grid-2">
            <div class="question-image-box">
              <img src="${q.twoImages[0]}" alt="صورة 1" onclick="openZoomModal('${q.twoImages[0]}')">
            </div>
            <div class="question-image-box">
              <img src="${q.twoImages[1]}" alt="صورة 2" onclick="openZoomModal('${q.twoImages[1]}')">
            </div>
          </div>
        ` : ''}

        ${q.solImage ? `
          <div style="text-align:center;">
            <button class="btn-toggle-sol" id="btn-sol-${idx}" onclick="toggleSolution('sol-${idx}')">
              👁️ أظهر الحل الصحيح لأسئلة التدريب
            </button>
          </div>
          <div class="hidden-sol-box" id="sol-${idx}">
            <div class="question-image-box">
              <img src="${q.solImage}" alt="صورة الحل الصحيح" onclick="openZoomModal('${q.solImage}')">
            </div>
          </div>
        ` : ''}
        
        ${q.ansEn ? `
          <div class="answer-box">
            <div class="answer-en"><strong>Answer:</strong><br>${q.ansEn}</div>
            <div class="answer-ar">${q.ansAr}</div>
          </div>
        ` : ''}
        
        ${q.expEn ? `
          <div class="explanation-box">
            <div class="exp-en"><strong>Explanation / Notes:</strong><br>${q.expEn}</div>
            <div class="exp-ar">${q.expAr}</div>
          </div>
        ` : ''}
      </div>
    `;
  });
  
  html += `</div><button class="btn back" onclick="backTo('pattern')">${t.back}</button>`;
  view.innerHTML = html;
}

function renderSoon(){
  const t = i18n[currentLang];
  view.innerHTML = `<h1 class="title">${t.soonTitle}</h1><div class="soon-box"><div class="emoji">🚧</div><h2>${t.soonTitle}</h2><p>${t.soonDesc}</p></div><button class="btn back" onclick="backTo('pattern')">${t.back}</button>`;
}

function selectSubject(id){ state.subject=id; render(); }
function selectNature(id){ state.nature=id; render(); }
function selectExam(id){ state.exam=id; render(); }
function selectPattern(id){ state.pattern=id; render(); }

function backTo(level){
  if(level==='nature'){ state.nature=null; state.exam=null; state.pattern=null; if(state.subject==='stats') state.subject=null; }
  if(level==='exam'){ state.exam=null; state.pattern=null; }
  if(level==='pattern'){ state.pattern=null; }
  render();
}

render();