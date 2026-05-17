/* ======================================================
   main.js  —  i18n 双语切换 + 动态渲染论文卡片 + 导航交互
   ====================================================== */

// =====================================================
// 1. 翻译字典
// =====================================================
const translations = {
//   zh: {
//     // 'nav-logo':          '吕锋',
//     'nav-about':         '关于',
//     'nav-experience':    '经历',
//     'nav-publications':  '论文',
//     'nav-projects':      '项目',
//     'nav-awards':        '荣誉',
//     'nav-contact':       '联系',
//     'hero-name': '吕锋',
//     'hero-title': '算法工程师 · 百度 · 交通视觉与多模态大模型',
//     'chip-1': '多模态大模型',
//     'chip-2': '计算机视觉',
//     'chip-3': '图像生成与编辑',
//     'chip-4': '目标检测',
//     'chip-5': '自动驾驶感知',

//     // 'about-text': '百度算法工程师，聚焦<strong>交通视觉算法优化与技术创新</strong>，涵盖检测/分类/分割/OCR 等传统视觉任务，以及 CV/多模态大模型（图像/视频理解）、AIGC 图像生成与编辑、预训练等技术方向。在多模态大模型、CV 大模型、AIGC、开集检测、迁移学习、半监督、自监督等方向均有深入探索与丰富工程落地经验。<br><br>学术成果包含 <strong>CVPR / WACV / PR / ITS</strong> 等 Oral/Highlight 顶会/刊论文，Google Scholar 引用 <strong>540+</strong>，GitHub Star <strong>700+</strong>。',

//     'news-title': '📢 最新动态',
//     'news-1': '<span class="news-date">2026.03</span> CRASH-Bench 投稿 ECCV 2025，多模态交通事故推理基准',
//     'news-2': '<span class="news-date">2026.02</span> Text2Traffic 被 AIGC 2025 接收，文生图&图像编辑方向',
//     'news-3': '<span class="news-date">2025.01</span> 负责「多模态异常事件理解」项目，施工/事故/火灾 PR&gt;90%',
//     'news-4': '<span class="news-date">2024.11</span> RT-DETRv3 被 WACV 2025 Oral 接收',

//     'btn-phone': '📞 电话',
//     'stat-github':  'GitHub Stars',
//     'stat-scholar': 'Scholar 引用',
//     'stat-email':   'Email',
//     'stat-phone':   '电话',
//     // 'btn-cv':    '📄 简历 / CV',

//     'exp-section-title': '经历',
//     'work-panel-title':  '💼 工作经历',
//     'edu-panel-title':   '🎓 教育背景',
// // 专注交通视觉算法研发与创新，贯通传统CV任务（检测/分类/分割/OCR）与前沿AI技术（多模态大模型、AIGC图像生成与编辑、大规模预训练），打造面向下一代智慧交通的智能感知引擎。

//     'work-1-place': '百度',
//     'work-1-role':  '算法工程师 · 全职',
//     'work-1-time':  '2021.07 — 2026.06',
//     'work-1-desc':  '专注于交通视觉算法的研发与创新，技术体系涵盖经典计算机视觉任务（目标检测、图像分类、语义分割、OCR识别）与前沿人工智能范式。我们深度融合多模态大语言模型、AIGC图像生成与编辑技术，以及大规模自监督预训练架构，致力于构建高精度、强泛化、可演进的交通智能感知系统。',
//     'work-2-place': 'OPPO 研究院',
//     'work-2-role':  '算法工程师 · 实习',
//     'work-2-time':  '2021.03 — 2021.06',
//     'work-3-place': '陌陌',
//     'work-3-role':  '算法工程师 · 实习',
//     'work-3-time':  '2019.12 — 2020.04',

//     'edu-1-place': '东南大学',
//     'edu-1-role':  '集成电路设计 · 硕士',
//     'edu-1-time':  '2018.09 — 2021.06',
//     'edu-2-place': '东南大学',
//     'edu-2-role':  '应用物理学 · 本科',
//     'edu-2-time':  '2014.09 — 2018.06',

//     'pub-section-title': '论文',
//     'loading-tip':       '加载中…',

//     'proj-section-title': '项目',
//     'proj-1-name': '🧠 多模态异常事件理解',
//     'proj-1-time': '2025.01—2026.01',
//     'proj-1-desc': '基于多模态大模型重构传统交通异常事件识别系统，支持事故、施工、拥堵、行人闯入、火灾烟雾等复杂场景端到端感知与结构化输出。采用 SFT+GRPO 强化对齐，施工/事故/火灾烟雾等事件 PR&gt;95%。',
//     'proj-1-role': '负责人',

//     'proj-2-name': '🖼️ AIGC 交通场景应用',
//     'proj-2-time': '2024.08—2025.08',
//     'proj-2-desc': '构建可控、语义对齐、高保真的图像生成与编辑系统，支持文生图、图生图、目标消除、Inpainting-anything。累计生成 2 万+高价值数据，覆盖 10+长尾交通场景，平均生成可用率 74.6%。',
//     'proj-2-role': '负责人',

//     'proj-3-name': '🚦 交通感知大模型',
//     'proj-3-time': '2022.07—2024.01',
//     'proj-3-desc': '构建百度智能交通感知大模型 Open-TransMind（100亿+参数），全面覆盖检测/分割/分类/OCR 等 70 余项任务，平均相对错误率较小模型降低 50.6%，树立行业新标杆。',
//     'proj-3-role': '核心研发',

//     'proj-4-name': '🔬 ViT-CoMer 大模底座升级',
//     'proj-4-time': '2023.06—2024.01',
//     'proj-4-desc': '提出即插即用 CNN-ViT 多尺度特征协同机制，中稿 CVPR 2024 Highlight，COCO AP 64.3% SOTA，ADE20K mIoU 62.1%。相比初版大模型在 70 项子任务中平均相对错误率降低 8.84%。',
//     'proj-4-role': '核心研发',

//     'proj-5-name': '🛣️ 交通隐患识别专项',
//     'proj-5-time': '2024.01—2025.12',
//     'proj-5-desc': '负责智能交管、高速、网联及轨道交通方向 60+业务需求算法开发，覆盖检测/分割/分类/OCR。提出无监督域自适应算法 RT-DATR，以及参与自研实时 SOTA 算法 RT-DETRv3。',
//     'proj-5-role': '负责人',

//     'proj-6-name': '📡 V2X 鱼眼感知算法优化',
//     'proj-6-time': '2021.07—2022.07',
//     'proj-6-desc': '优化路侧鱼眼相机 2/3D 检测模型，检测 mAP 优化至 85.7%（+9.13%），3D 位置误差 Q99 突破 3m 以下，推理时延从 24ms 降至 3.7ms，助力 Apollo Air 路口通过率稳定在 98%以上。',
//     'proj-6-role': '负责人',

//     'skills-section-title': '技能',
//     'skill-label-1': '编程框架',
//     'skill-label-2': '研究方向',
//     'sk-det':   '目标检测',
//     'sk-seg':   '图像分割',
//     'sk-mllm':  '多模态大模型',
//     'sk-aigc':  '图像生成与编辑',
//     // 'sk-fm':    '视觉大模型',
//     'sk-pt':    '预训练',
//     'sk-tl':    '迁移学习',
//     'sk-ssl':   '自监督 / 半监督',
//     'sk-ovd':   '开集检测',
//     'sk-rl':    '强化学习',
//     // 'sk-ts':    '时序模型',
//     'sk-quant': '模型压缩',

//     'awards-section-title': '荣誉',
//     // 'aw-1-cat':  '学术',
//     // 'aw-1-name': 'Google Scholar 引用 540+',
//     // 'aw-1-org':  'CVPR / WACV / T-ITS / PR 等顶会/刊',
//     // 'aw-2-cat':  '开源',
//     // 'aw-2-name': 'GitHub Star 700+',
//     // 'aw-2-org':  'ViT-CoMer / Open-TransMind 等项目',
//     'aw-3-cat':  '竞赛',
//     'aw-3-name': '全国研究生数学竞赛 二等奖',
//     'aw-3-org':  '中国学位与研究生教育学会',
//     'aw-4-cat':  '奖学金',
//     'aw-4-name': '国家奖学金',
//     'aw-4-org':  '中华人民共和国教育部',
//     'aw-5-cat':  '专利',
//     'aw-5-name': '若干发明专利',
//     'aw-5-org':  '中华人民共和国国家知识产权局',
//     'aw-6-cat':  '研讨会',
//     'aw-6-name': 'CVPR 2023 Workshop 组织者',
//     'aw-6-org':  '第一届基础大模型挑战赛',

//     'contact-section-title': '联系 Contact',
//     'contact-intro':    '欢迎学术交流与技术合作，期待共同探索视觉与多模态大模型的前沿方向！',
//     'c-label-phone':    '电话',
//     'c-scholar-link':   'Scholar 引用 540+',

//     'footer-text': '© 2025 吕锋 · Built with pure HTML/CSS/JS · Hosted on <a href="https://pages.github.com" target="_blank">GitHub Pages</a>',

//     // publications card labels
//     'pub-link':    '[论文]',
//     'pub-code':    '[代码]',
//     'pub-project': '[项目页]',
//     'pub-demo':    '[Demo]',
//     'pub-nodata':  '暂无数据，请编辑 data/items.json 并添加论文/项目条目。',
//     'pub-noserver':'⚠️ 无法加载数据。请在本地服务器下运行：<br><code>cd my-homepage && python3 -m http.server 8080</code><br>然后访问 <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>',
//   },

  en: {
    // 'nav-logo':          'Feng Lv',
    'nav-about':         'About',
    'nav-experience':    'Experience',
    'nav-publications':  'Publications',
    'nav-projects':      'Projects',
    'nav-awards':        'Awards',
    'nav-contact':       'Contact',

    'hero-name': 'Feng Lv',
    'hero-title': 'Algorithm Engineer · Baidu · Traffic Vision & Multimodal LLM',
    'chip-1': 'Multimodal LLM',
    'chip-2': 'Computer Vision',
    'chip-3': 'Image Generation & Edit',
    'chip-4': 'Object Detection',
    'chip-5': 'Autonomous Driving Perception',

    'about-text': 'Algorithm engineer at Baidu, focused on <strong>traffic vision algorithm optimization and innovation</strong>, covering traditional visual tasks (detection/classification/segmentation/OCR) and CV/multimodal LLMs (image/video understanding), AIGC image generation &amp; editing, and pretraining. Deep expertise across multimodal LLMs, CV foundation models, AIGC, open-vocabulary detection, transfer learning, semi/self-supervised learning.<br><br>Publications at <strong>CVPR / WACV / PR / ITS</strong> (Oral/Highlight). Google Scholar citations <strong>540+</strong>, GitHub Stars <strong>700+</strong>.',

    'news-title': '📢 Latest News',
    'news-1': '<span class="news-date">2026.03</span> CRASH-Bench submitted to ECCV 2025 — multimodal traffic accident causal reasoning benchmark',
    'news-2': '<span class="news-date">2026.01</span> Text2Traffic accepted at AIGC 2025 — text-to-image &amp; image editing',
    'news-3': '<span class="news-date">2025.05</span> Leading "Multimodal Abnormal Event Understanding" project — PR&gt;95% on construction/accident/fire',
    'news-4': '<span class="news-date">2024.09</span> RT-DETRv3 accepted at WACV 2025 Oral',

    'btn-phone': '📞 Phone',
    'stat-github':  'GitHub Stars',
    'stat-scholar': 'Google Scholar Citations',
    'stat-email':   'Email',
    'stat-phone':   'Phone',
    // 'btn-cv':    '📄 Resume / CV',

    'exp-section-title': 'Experience',
    'work-panel-title':  '💼 Work Experience',
    'edu-panel-title':   '🎓 Education',

    'work-1-place': 'Baidu',
    'work-1-role':  'Algorithm Engineer · Full-time',
    'work-1-time':  'Jul 2021 — Jun 2026',
    'work-1-desc':  'Focused on traffic vision algorithm R&D and innovation, covering traditional tasks (detection/classification/segmentation/OCR) and multimodal LLMs, AIGC image generation &amp; editing, and pretraining.',
    'work-2-place': 'OPPO',
    'work-2-role':  'Algorithm Intern',
    'work-2-time':  'Mar 2021 — Jun 2021',
    'work-3-place': 'Momo Inc.',
    'work-3-role':  'Algorithm Intern',
    'work-3-time':  'Dec 2019 — Apr 2020',

    'edu-1-place': 'Southeast University',
    'edu-1-role':  'Integrated Circuit Design · M.Eng.',
    'edu-1-time':  'Sep 2018 — Jun 2021',
    // 'edu-1-desc':  'National Scholarship; 2nd Prize, National Postgraduate Mathematics Competition; multiple invention patents.',
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
    'proj-3-desc': 'Built Baidu\'s Open-TransMind traffic perception foundation model (10B+ parameters), covering detection/segmentation/classification/OCR across 70+ tasks, reducing average relative error by 50.6% over task-specific models, setting a new industry benchmark.',
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
    // 'sk-fm':    'Foundation Model',
    'sk-pt':    'Pretraining',
    'sk-tl':    'Transfer Learning / UDA',
    'sk-ssl':   'Self / Semi-Supervised',
    'sk-ovd':   'Open-Vocabulary Detection',
    'sk-rl':    'Reinforcement Learning',
    // 'sk-ts':    'Temporal Modeling',
    'sk-quant': 'Model Compression',
    // 'sk-quant': 'Model Compression &amp; Quantization',

    'awards-section-title': 'Awards',
    // 'aw-1-cat':  'Academic',
    // 'aw-1-name': 'Google Scholar Citations 540+',
    // 'aw-1-org':  'CVPR / WACV / T-ITS / PR and other top venues',
    // 'aw-2-cat':  'Open Source',
    // 'aw-2-name': 'GitHub Stars 700+',
    // 'aw-2-org':  'ViT-CoMer / Open-TransMind and more',
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

    'contact-section-title': 'Contact',
    'contact-intro':    'Feel free to reach out for academic exchanges or collaboration opportunities!',
    'c-label-phone':    'Phone',
    'c-scholar-link':   'Google Scholar Citations',

    'footer-text': '© 2025 Feng Lv · Built with pure HTML/CSS/JS · Hosted on <a href="https://pages.github.com" target="_blank">GitHub Pages</a>',

    // publications card labels
    'pub-link':    '[Paper]',
    'pub-code':    '[Code]',
    'pub-project': '[Project Page]',
    'pub-demo':    '[Demo]',
    'pub-nodata':  'No data yet. Please edit data/items.json and add your publications.',
    'pub-noserver':'⚠️ Failed to load data. Please run a local server:<br><code>cd my-homepage && python3 -m http.server 8080</code><br>Then visit <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>',
  }
};

// =====================================================
// 2. 语言状态与切换
// =====================================================
let currentLang = localStorage.getItem('lang') || 'zh';
let cachedItems = null;

function setLang(lang) {
  currentLang = lang;

  // 替换所有 data-i18n 元素（支持 innerHTML，允许带 HTML 标签）
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // 更新 <html lang> 属性
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // 更新页面标题
  document.title = lang === 'zh' ? '吕锋 · 算法工程师' : 'LvFeng · Algorithm Engineer';

  // 切换按钮文字：当前是中文 → 显示 EN；当前是英文 → 显示 中
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = lang === 'zh' ? 'EN' : '中';
    btn.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切换为中文');
  }

  // 重新渲染论文卡片（因卡片内文字也需切换）
  if (cachedItems) renderWorks(cachedItems);

  // 持久化
  localStorage.setItem('lang', lang);
}

function toggleLang() {
  setLang(currentLang === 'zh' ? 'en' : 'zh');
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
// 5. 论文卡片渲染（语言感知）
// =====================================================
function t(key) {
  return translations[currentLang][key] || translations['zh'][key] || '';
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
    return `<div class="item-thumb"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>`;
  }
  const emoji = item.type === 'paper' ? '📄' : '🚀';
  return `<div class="item-thumb placeholder">${emoji}</div>`;
}

function cardHtml(item) {
  const title   = (currentLang === 'en' && item.title_en)   ? item.title_en   : item.title;
  const authors = (currentLang === 'en' && item.authors_en) ? item.authors_en : (item.authors || '');
  const desc    = (currentLang === 'en' && item.desc_en)    ? item.desc_en    : (item.desc || '');

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
    cachedItems = await res.json();
    renderWorks(cachedItems);
  } catch {
    container.innerHTML = `<p class="loading-tip">${t('pub-noserver')}</p>`;
  }
}

// =====================================================
// 6. 实时统计数据
// =====================================================

// GitHub Stars：汇总核心论文仓库，兼容 API 限流场景
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
    // 若任一仓库返回了有效 star 数，才更新显示
    const validResults = results.filter(d => typeof d.stargazers_count === 'number');
    if (validResults.length === 0) return; // 全部失败（限流等），保留默认值
    const total = validResults.reduce((sum, d) => sum + d.stargazers_count, 0);
    if (total > 0) {
      const el = document.getElementById('stat-stars');
      if (el) el.textContent = total >= 1000 ? (total / 1000).toFixed(1) + 'k+' : total + '+';
    }
  } catch (e) { /* 网络失败时保留默认值 */ }
}

// Scholar 引用：通过 Semantic Scholar 批量接口一次查询所有论文引用数
async function fetchScholarCitations() {
  const arxivIds = [
    'arXiv:2403.07392',  // ViT-CoMer
    'arXiv:2304.06051',  // Open-TransMind
    'arXiv:2409.08475',  // RT-DETRv3
    'arXiv:2504.09196',  // RT-DATR
    'arXiv:2511.12932',  // Text2Traffic
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
  } catch (e) { /* 网络失败时保留默认值 */ }
}

// =====================================================
// 7. 初始化
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  loadWorks();
  // 应用持久化的语言偏好（页面首次加载时同步所有文字）
  setLang(currentLang);
  // 实时拉取统计数据
  fetchGitHubStars();
  fetchScholarCitations();
});
