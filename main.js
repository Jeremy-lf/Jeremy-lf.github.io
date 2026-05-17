/* ======================================================
   main.js  —  论文卡片渲染 + 导航交互 + 实时统计
   ====================================================== */

// =====================================================
// 1. 文字内容（English only）
// =====================================================
const i18n = {
  'nav-about':         'About',
  'nav-experience':    'Experience',
  'nav-publications':  'Publications',
  'nav-projects':      'Projects',
  'nav-awards':        'Awards',

  'hero-title': 'Algorithm Engineer · Baidu · Traffic Vision & Multimodal LLM',
  'chip-1': 'Multimodal LLM',
  'chip-2': 'Computer Vision',
  'chip-3': 'Image Generation & Edit',
  'chip-4': 'Object Detection',
  'chip-5': 'Autonomous Driving Perception',

  'news-title': '📢 Latest News',
  'news-1': '<span class="news-date">2026.03</span> CRASH-Bench submitted to ECCV 2025 — multimodal traffic accident causal reasoning benchmark',
  'news-2': '<span class="news-date">2026.01</span> Text2Traffic accepted at AIGC 2025 — text-to-image &amp; image editing',
  'news-3': '<span class="news-date">2025.05</span> Leading "Multimodal Abnormal Event Understanding" project — PR&gt;95% on construction/accident/fire',
  'news-4': '<span class="news-date">2024.09</span> RT-DETRv3 accepted at WACV 2025 Oral',

  'stat-github':  'GitHub Stars',
  'stat-scholar': 'Google Scholar Citations',
  'stat-email':   'Email',

  'exp-section-title': 'Experience',
  'work-panel-title':  '💼 Work Experience',
  'edu-panel-title':   '🎓 Education',

  'work-1-place': 'Baidu',
  'work-1-role':  'Algorithm Engineer · Full-time',
  'work-1-time':  'Jul 2021 — Jun 2026',
  'work-2-place': 'OPPO Research Institute',
  'work-2-role':  'Algorithm Intern',
  'work-2-time':  'Mar 2021 — Jun 2021',
  'work-3-place': 'Momo Inc.',
  'work-3-role':  'Algorithm Intern',
  'work-3-time':  'Dec 2019 — Apr 2020',

  'edu-1-place': 'Southeast University',
  'edu-1-role':  'Integrated Circuit Design · M.Eng.',
  'edu-1-time':  'Sep 2018 — Jun 2021',
  'edu-2-place': 'Southeast University',
  'edu-2-role':  'Applied Physics · B.Sc.',
  'edu-2-time':  'Sep 2014 — Jun 2018',

  'pub-section-title': 'Publications',
  'loading-tip':       'Loading…',

  'proj-section-title': 'Projects',
  'proj-1-name': '🧠 Multimodal Abnormal Event Understanding',
  'proj-1-time': 'Jan 2025—Present',
  'proj-1-desc': 'Rebuilt traffic abnormal event recognition with multimodal LLMs, enabling end-to-end perception and structured output for accidents, construction, congestion, pedestrian intrusion, and fire/smoke. Achieved PR&gt;95% on construction/accident/fire via SFT+GRPO alignment.',
  'proj-1-role': 'Lead',

  'proj-2-name': '🖼️ AIGC Traffic Scene Applications',
  'proj-2-time': 'Aug 2024—Aug 2025',
  'proj-2-desc': 'Built a controllable, semantically-aligned, high-fidelity image generation &amp; editing system supporting text-to-image, image-to-image, object removal, and inpainting. Generated 20k+ high-value images covering 10+ long-tail traffic scenarios with 74.6% average usability.',
  'proj-2-role': 'Lead',

  'proj-3-name': '🚦 Traffic Perception Foundation Model',
  'proj-3-time': 'Jul 2022—Jan 2024',
  'proj-3-desc': 'Built Baidu\'s Open-TransMind traffic perception foundation model (10B+ parameters), covering detection/segmentation/classification/OCR across 70+ tasks, reducing average relative error by 50.6% over task-specific models.',
  'proj-3-role': 'Core Developer',

  'proj-4-name': '🔬 ViT-CoMer Backbone Upgrade',
  'proj-4-time': 'Jun 2023—Jan 2024',
  'proj-4-desc': 'Proposed a plug-and-play CNN-ViT multi-scale feature interaction module accepted at CVPR 2024 Highlight. COCO AP 64.3% SOTA, ADE20K mIoU 62.1%. Reduced average relative error by 8.84% across 70 sub-tasks vs. first-gen foundation model.',
  'proj-4-role': 'Core Developer',

  'proj-5-name': '🛣️ Traffic Hazard Recognition',
  'proj-5-time': 'Jan 2024—Present',
  'proj-5-desc': 'Led algorithm development for 60+ requirements across intelligent traffic management, highways, V2X, and rail transit. Proposed unsupervised domain adaptation algorithm RT-DATR and contributed to in-house SOTA RT-DETRv3.',
  'proj-5-role': 'Lead',

  'proj-6-name': '📡 V2X Fisheye Perception Optimization',
  'proj-6-time': 'Jul 2021—Jul 2022',
  'proj-6-desc': 'Optimized roadside fisheye 2D/3D detection models. Detection mAP improved to 85.7% (+9.13%), 3D position error Q99 below 3m, inference latency reduced from 24ms to 3.7ms. Apollo Air intersection pass rate stabilized above 98%.',
  'proj-6-role': 'Lead',

  'skills-section-title': 'Skills',
  'skill-label-1': 'Frameworks',
  'skill-label-2': 'Research Areas',
  'sk-det':   'Object Detection',
  'sk-seg':   'Image Segmentation',
  'sk-mllm':  'Multimodal LLM',
  'sk-aigc':  'Image Generation & Edit',
  'sk-pt':    'Pretraining',
  'sk-tl':    'Transfer Learning / UDA',
  'sk-ssl':   'Self / Semi-Supervised',
  'sk-ovd':   'Open-Vocabulary Detection',
  'sk-rl':    'Reinforcement Learning',
  'sk-quant': 'Model Compression',

  'awards-section-title': 'Awards',
  'aw-3-cat':  'Contest',
  'aw-3-name': '2nd Prize, National Postgraduate Math Competition',
  'aw-3-org':  'China Academic Degrees & Graduate Education Society',
  'aw-4-cat':  'Scholarship',
  'aw-4-name': 'National Scholarship',
  'aw-4-org':  'Ministry of Education, P.R.C.',
  'aw-5-cat':  'Patent',
  'aw-5-name': 'Multiple Invention Patents',
  'aw-5-org':  'China National Intellectual Property Administration',
  'aw-6-cat':  'Workshop',
  'aw-6-name': 'CVPR 2023 Workshop Organizer',
  'aw-6-org':  'Foundation Models: 1st Foundation Model Challenge, 1.4K+ participants',

  'footer-text': '© 2025 Feng Lv · Built with pure HTML/CSS/JS · Hosted on <a href="https://pages.github.com" target="_blank">GitHub Pages</a>',

  'pub-link':    '[Paper]',
  'pub-code':    '[Code]',
  'pub-project': '[Project Page]',
  'pub-demo':    '[Demo]',
  'pub-nodata':  'No data yet. Please edit data/items.json.',
  'pub-noserver':'⚠️ Failed to load data. Please run a local server:<br><code>python3 -m http.server 8081</code><br>Then visit <a href="http://localhost:8081" target="_blank">http://localhost:8081</a>',
};

// =====================================================
// 2. 应用文字内容
// =====================================================
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = i18n[el.getAttribute('data-i18n')];
    if (val !== undefined) el.innerHTML = val;
  });
}

// =====================================================
// 3. 导航：移动端菜单
// =====================================================
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}
function closeMobileMenu() {
  if (mobileMenu) mobileMenu.classList.remove('open');
}

// =====================================================
// 4. 导航：滚动高亮
// =====================================================
function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a, .mobile-menu a');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  links.forEach(link => {
    link.style.background = '';
    link.style.color      = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.background = 'var(--primary-soft)';
      link.style.color      = 'var(--primary)';
    }
  });
}
window.addEventListener('scroll', highlightNav, { passive: true });

// =====================================================
// 5. 论文卡片渲染
// =====================================================
function t(key) {
  return i18n[key] || '';
}

function typeClass(type) {
  if (type === 'paper')   return 'paper';
  if (type === 'project') return 'project';
  return 'default';
}

function tagsHtml(item) {
  const vTag = item.venue
    ? `<span class="vtag ${typeClass(item.type)}">${item.venue}</span>`
    : '';
  const extra = (item.tags || [])
    .map(tag => `<span class="vtag default">${tag}</span>`)
    .join('');
  return vTag + extra;
}

function thumbHtml(item) {
  if (item.image) {
    return `<div class="item-thumb"><img src="${item.image}" alt="${item.title_en || item.title}" loading="lazy"></div>`;
  }
  const emoji = item.type === 'paper' ? '📄' : '🚀';
  return `<div class="item-thumb placeholder">${emoji}</div>`;
}

function cardHtml(item) {
  const title   = item.title_en   || item.title;
  const authors = item.authors_en || item.authors || '';
  const desc    = item.desc_en    || item.desc    || '';

  const links = [];
  if (item.link)    links.push(`<a href="${item.link}"    target="_blank">${t('pub-link')}</a>`);
  if (item.code)    links.push(`<a href="${item.code}"    target="_blank">${t('pub-code')}</a>`);
  if (item.project) links.push(`<a href="${item.project}" target="_blank">${t('pub-project')}</a>`);
  if (item.demo)    links.push(`<a href="${item.demo}"    target="_blank">${t('pub-demo')}</a>`);

  return `
    <article class="item-card">
      ${thumbHtml(item)}
      <div class="item-meta">
        <div class="item-tags">${tagsHtml(item)}</div>
        <div class="item-title">${title}</div>
        ${authors ? `<div class="item-venue">${authors}</div>` : ''}
        ${desc    ? `<div class="item-desc">${desc}</div>`     : ''}
        ${links.length ? `<div class="item-link">${links.join(' ')}</div>` : ''}
      </div>
    </article>`;
}

function renderWorks(items) {
  const container = document.getElementById('works-container');
  if (!container) return;

  const valid = items.filter(i => i.year && i.year > 0);
  if (!valid.length) {
    container.innerHTML = `<p class="loading-tip">${t('pub-nodata')}</p>`;
    return;
  }

  const years = [...new Set(valid.map(i => i.year))].sort((a, b) => b - a);
  container.innerHTML = years.map(year => {
    const cards = valid.filter(i => i.year === year).map(cardHtml).join('');
    return `<div class="year-block"><h3 class="year-title">${year}</h3>${cards}</div>`;
  }).join('');
}

async function loadWorks() {
  const container = document.getElementById('works-container');
  if (!container) return;
  try {
    const res = await fetch('data/items.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    renderWorks(await res.json());
  } catch {
    container.innerHTML = `<p class="loading-tip">${t('pub-noserver')}</p>`;
  }
}

// =====================================================
// 6. 实时统计数据
// =====================================================
async function fetchGitHubStars() {
  const repos = ['Traffic-X/ViT-CoMer', 'Traffic-X/Open-TransMind', 'clxia12/RT-DETRv3', 'Jeremy-lf/RT-DATR'];
  try {
    const results = await Promise.all(
      repos.map(r =>
        fetch(`https://api.github.com/repos/${r}`)
          .then(res => res.ok ? res.json() : {})
          .catch(() => ({}))
      )
    );
    const valid = results.filter(d => typeof d.stargazers_count === 'number');
    if (valid.length === 0) return;
    const total = valid.reduce((sum, d) => sum + d.stargazers_count, 0);
    if (total > 0) {
      const el = document.getElementById('stat-stars');
      if (el) el.textContent = total >= 1000 ? (total / 1000).toFixed(1) + 'k+' : total + '+';
    }
  } catch (e) {}
}

async function fetchScholarCitations() {
  const arxivIds = [
    'arXiv:2403.07392',
    'arXiv:2304.06051',
    'arXiv:2409.08475',
    'arXiv:2504.09196',
    'arXiv:2511.12932',
  ];
  try {
    const res = await fetch(
      'https://api.semanticscholar.org/graph/v1/paper/batch?fields=citationCount',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: arxivIds }),
      }
    );
    if (!res.ok) return;
    const data = await res.json();
    const total = (Array.isArray(data) ? data : [])
      .reduce((sum, d) => sum + (d && d.citationCount ? d.citationCount : 0), 0);
    if (total > 0) {
      const el = document.getElementById('stat-citations');
      if (el) el.textContent = total + '+';
    }
  } catch (e) {}
}

// =====================================================
// 7. 初始化
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  applyI18n();
  loadWorks();
  fetchGitHubStars();
  fetchScholarCitations();
});
