/* ==================== i18n ==================== */
const translations = {
  tr: {
    navOverview: 'Genel Bakış', navArch: 'Mimari', navPipeline: 'Pipeline',
    navFeatures: 'Özellikler', navTech: 'Teknolojiler', navTeam: 'Ekip',
    heroBadge: '🎓 Bitirme Projesi — 2026',
    heroTitle1: 'Longitudinal Beyin MR', heroTitle2: 'Analiz Pipeline',
    heroSub: 'MR kayıt yönetimi, pipeline orkestrasyonu ve yapay zeka destekli analiz raporlamayı tek bir platformda birleştiren uçtan uca web uygulaması.',
    heroBtnExplore: 'Keşfet', heroBtnArch: 'Mimariyi İncele',
    statLayers: 'Katman', statEndpoints: 'API Endpoint', statStages: 'Pipeline Aşaması', statServices: 'Docker Servis',
    overviewTag: 'Genel Bakış', overviewTitle: 'Proje Nedir?',
    overviewDesc: 'Longitudinal beyin MR çalışmaları için geliştirilmiş, üç katmanlı monorepo mimarisine sahip tam yığın bir web uygulamasıdır.',
    ov1Title: 'Amaç', ov1Desc: 'Aynı hastaya ait farklı zamanlarda çekilmiş beyin MR görüntülerini karşılaştırarak, beyin hacmindeki değişimleri otomatik olarak analiz etmek. Klinisyenlere ve araştırmacılara zaman içindeki nörodejeneratif değişimleri takip edebilecekleri bir araç sunmak.',
    ov2Title: 'Yükle', ov2Desc: 'NIfTI formatında (.nii / .nii.gz) MR dosyalarını sisteme yükleyin ve hasta bilgileriyle eşleştirin.',
    ov3Title: 'İşle', ov3Desc: 'Baseline ve follow-up taramalarını seçip pipeline oluşturun. Worker kuyruğu üzerinden otomatik işleme başlasın.',
    ov4Title: 'Analiz Et', ov4Desc: 'Voxel bazlı yoğunluk farkı, template QC ve normalizasyon raporlarını arayüzden inceleyin.',
    archTag: 'Mimari', archTitle: 'Sistem Mimarisi', archDesc: 'Monorepo yapısında üç ana katmandan oluşan modüler bir mimari.',
    archFe: 'Frontend', archBe: 'Backend', archMl: 'Pipeline / Worker',
    pipeTag: 'Pipeline', pipeTitle: 'Analiz Aşamaları', pipeDesc: 'LOCAL_CPU modunda çalışan, CPU dostu MR işleme akışı.',
    p1: 'Dosya Kopyalama', p1d: 'Baseline ve follow-up NIfTI dosyaları proje output yapısına kopyalanır.',
    p2: 'Preprocessing', p2d: 'Görüntüler ön işleme adımlarından geçirilir; yeniden örnekleme ve filtre uygulanır.',
    p3: 'Brain Mask & Extraction', p3d: 'Otsu tabanlı brain mask üretimi yapılır ve beyin dokusu çıkarılır.',
    p4: 'Normalization', p4d: 'Mask tabanlı intensity normalization ve histogram matching QC üretimi gerçekleştirilir.',
    p5: 'Registration', p5d: 'Direct registration ve within-subject template oluşturma aşaması.',
    p6: 'Voxelwise Analysis', p6d: 'Template uzayında voxel bazlı yoğunluk farkı analizi hesaplanır.',
    p7: 'Rapor Üretimi', p7d: 'JSON rapor, NIfTI çıktılar, CSV özetleri ve manifest dosyası üretilir.',
    featTag: 'Özellikler', featTitle: 'Temel Yetenekler',
    f1: 'MR Study Yönetimi', f1d: 'NIfTI dosya yükleme, metadata saklama, study geçmişi listeleme ve detay görüntüleme.',
    f2: 'Longitudinal Eşleştirme', f2d: 'Aynı hastaya ait baseline ve follow-up taramalarını otomatik eşleştirme ve doğrulama.',
    f3: 'Pipeline Orkestrasyonu', f3d: 'Aşama seçimi, execution mode (LOCAL_CPU / FULL_ANALYSIS) ve otomatik iş kuyruğu yönetimi.',
    f4: 'Canlı İlerleme Takibi', f4d: 'Pipeline durumu, aktif aşama, yüzde bilgisi ve timeline bazlı aşama görünümü.',
    f5: 'Analiz Raporları', f5d: 'JSON tabanlı normalization QC, template QC, voxelwise QC raporları ve CSV özetleri.',
    f6: 'Dashboard & Metrikler', f6d: 'Toplam study, pipeline sayısı, tamamlanan iş ve worker bekleyen iş metrikleri.',
    f7: 'Docker Compose', f7d: 'Frontend, backend, PostgreSQL ve CPU worker servislerini tek komutla ayağa kaldırma.',
    f8: 'Veri Modeli', f8d: 'MrStudy, PipelineJob ve AnalysisResult entity\'leri ile ilişkisel veri yönetimi.',
    apiTag: 'API', apiTitle: 'REST API Endpoints', apiDesc: 'Spring Boot backend tarafından sunulan API arayüzü.',
    apiColMethod: 'Method', apiColEndpoint: 'Endpoint', apiColDesc: 'Açıklama',
    api1: 'Sistem sağlık kontrolü', api2: 'Dashboard özet metrikleri', api3: 'Tüm MR study listesi',
    api4: 'Tek study detayı', api5: 'Yeni MR study kaydı oluşturma', api6: 'NIfTI dosyası yükleme',
    api7: 'Study silme', api8: 'Pipeline listesi', api9: 'Yeni pipeline oluşturma', api10: 'Analiz rapor içeriği',
    techTag: 'Teknolojiler', techTitle: 'Kullanılan Teknoloji Yığını',
    techFe: 'Frontend', techBe: 'Backend', techPipe: 'Pipeline', techInfra: 'Altyapı',
    outTag: 'Çıktılar', outTitle: 'Çıktı Organizasyonu', outDesc: 'Subject-merkezli klasör yapısıyla organize edilen pipeline çıktıları.',
    teamTag: 'Ekip', teamTitle: 'Proje Ekibi',
    footerCopy: '© 2026 Bitirme Projesi. Tüm hakları saklıdır.',
  },
  en: {
    navOverview: 'Overview', navArch: 'Architecture', navPipeline: 'Pipeline',
    navFeatures: 'Features', navTech: 'Technologies', navTeam: 'Team',
    heroBadge: '🎓 Graduation Project — 2026',
    heroTitle1: 'Longitudinal Brain MRI', heroTitle2: 'Analysis Pipeline',
    heroSub: 'An end-to-end web application that unifies MR record management, pipeline orchestration, and AI-powered analysis reporting in a single platform.',
    heroBtnExplore: 'Explore', heroBtnArch: 'View Architecture',
    statLayers: 'Layers', statEndpoints: 'API Endpoints', statStages: 'Pipeline Stages', statServices: 'Docker Services',
    overviewTag: 'Overview', overviewTitle: 'What Is This Project?',
    overviewDesc: 'A full-stack web application with a three-layer monorepo architecture, developed for longitudinal brain MRI studies.',
    ov1Title: 'Purpose', ov1Desc: 'Automatically analyze brain volume changes by comparing brain MRI images taken at different times from the same patient. Provide clinicians and researchers with a tool to track neurodegenerative changes over time.',
    ov2Title: 'Upload', ov2Desc: 'Upload MR files in NIfTI format (.nii / .nii.gz) and match them with patient information.',
    ov3Title: 'Process', ov3Desc: 'Select baseline and follow-up scans to create a pipeline. Automatic processing starts via the worker queue.',
    ov4Title: 'Analyze', ov4Desc: 'Review voxel-based intensity difference, template QC, and normalization reports through the interface.',
    archTag: 'Architecture', archTitle: 'System Architecture', archDesc: 'A modular architecture consisting of three main layers in a monorepo structure.',
    archFe: 'Frontend', archBe: 'Backend', archMl: 'Pipeline / Worker',
    pipeTag: 'Pipeline', pipeTitle: 'Analysis Stages', pipeDesc: 'CPU-friendly MR processing workflow running in LOCAL_CPU mode.',
    p1: 'File Copy', p1d: 'Baseline and follow-up NIfTI files are copied to the project output structure.',
    p2: 'Preprocessing', p2d: 'Images go through preprocessing steps; resampling and filtering are applied.',
    p3: 'Brain Mask & Extraction', p3d: 'Otsu-based brain mask generation and brain tissue extraction.',
    p4: 'Normalization', p4d: 'Mask-based intensity normalization and histogram matching QC generation.',
    p5: 'Registration', p5d: 'Direct registration and within-subject template creation stage.',
    p6: 'Voxelwise Analysis', p6d: 'Voxel-based intensity difference analysis computed in template space.',
    p7: 'Report Generation', p7d: 'JSON reports, NIfTI outputs, CSV summaries, and manifest files are generated.',
    featTag: 'Features', featTitle: 'Core Capabilities',
    f1: 'MR Study Management', f1d: 'NIfTI file upload, metadata storage, study history listing, and detail viewing.',
    f2: 'Longitudinal Matching', f2d: 'Automatic matching and validation of baseline and follow-up scans from the same patient.',
    f3: 'Pipeline Orchestration', f3d: 'Stage selection, execution mode (LOCAL_CPU / FULL_ANALYSIS), and automatic job queue management.',
    f4: 'Live Progress Tracking', f4d: 'Pipeline status, active stage, percentage info, and timeline-based stage view.',
    f5: 'Analysis Reports', f5d: 'JSON-based normalization QC, template QC, voxelwise QC reports, and CSV summaries.',
    f6: 'Dashboard & Metrics', f6d: 'Total studies, pipeline count, completed jobs, and worker pending job metrics.',
    f7: 'Docker Compose', f7d: 'Spin up frontend, backend, PostgreSQL, and CPU worker services with a single command.',
    f8: 'Data Model', f8d: 'Relational data management with MrStudy, PipelineJob, and AnalysisResult entities.',
    apiTag: 'API', apiTitle: 'REST API Endpoints', apiDesc: 'API interface served by the Spring Boot backend.',
    apiColMethod: 'Method', apiColEndpoint: 'Endpoint', apiColDesc: 'Description',
    api1: 'System health check', api2: 'Dashboard summary metrics', api3: 'All MR study list',
    api4: 'Single study detail', api5: 'Create new MR study record', api6: 'Upload NIfTI file',
    api7: 'Delete study', api8: 'Pipeline list', api9: 'Create new pipeline', api10: 'Analysis report content',
    techTag: 'Technologies', techTitle: 'Technology Stack',
    techFe: 'Frontend', techBe: 'Backend', techPipe: 'Pipeline', techInfra: 'Infrastructure',
    outTag: 'Outputs', outTitle: 'Output Organization', outDesc: 'Pipeline outputs organized in a subject-centered folder structure.',
    teamTag: 'Team', teamTitle: 'Project Team',
    footerCopy: '© 2026 Graduation Project. All rights reserved.',
  }
};

let currentLang = 'en';

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) el.innerHTML = t[key];
  });
  // Update lang toggle button
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang === 'tr' ? 'EN' : 'TR';
}

function toggleLang() {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  applyTranslations();
  localStorage.setItem('lang', currentLang);
}

/* ==================== TEAM DATA ==================== */
const teamMembers = [
  { name: 'Ufuk Cefaker', role: 'Full-Stack Developer' },
  { name: 'Alperen Polat', role: 'Backend Developer' },
  { name: 'Gökalp Aslan', role: 'ML / Pipeline Engineer' },
];

/* ==================== INIT ==================== */
document.addEventListener('DOMContentLoaded', () => {
  currentLang = localStorage.getItem('lang') || 'en';
  renderTeam();
  setupMobileMenu();
  setupNavScroll();
  setupRevealAnimations();
  setupLangToggle();
  applyTranslations();
});

/* ==================== LANG TOGGLE ==================== */
function setupLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', toggleLang);
}

/* ==================== TEAM RENDER ==================== */
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  grid.innerHTML = teamMembers.map(m => `
    <div class="team-card">
      <div class="team-avatar">${m.name.split(' ').map(w => w[0]).join('')}</div>
      <h3>${m.name}</h3>
      <p>${m.role}</p>
    </div>
  `).join('');
}

/* ==================== MOBILE MENU ==================== */
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

/* ==================== NAV ACTIVE ==================== */
function setupNavScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px' });
  sections.forEach(s => observer.observe(s));
}

/* ==================== REVEAL ON SCROLL ==================== */
function setupRevealAnimations() {
  const selectors = [
    '.overview-card', '.arch-layer', '.feature-card',
    '.tech-card', '.team-card', '.api-table-wrap',
    '.folder-tree', '.section-header'
  ];
  document.querySelectorAll(selectors.join(',')).forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
