/* ==================== i18n ==================== */
const translations = {
  tr: {
    navOverview: 'Genel Bakış', navMotivation: 'Motivasyon', navPipeline: 'Pipeline',
    navEvidence: 'Kanıt', navArch: 'Mimari', navTech: 'Uygulama', navTeam: 'Ekip',
    heroBadge: 'Bitirme Projesi — 2026',
    heroTitle1: 'Analysis of MR images', heroTitle2: 'for MS patients',
    heroSub: 'Baseline ve follow-up beyin MR taramalarını karşılaştırmak için geliştirilen, multiple sclerosis lezyon ve doku değişimi incelemesine odaklanan araştırma yönelimli pipeline.',
    heroBtnExplore: 'Keşfet', heroBtnArch: 'Mimariyi İncele',
    statModes: 'Mod', statModels: 'Model', statRois: 'ROI', statQc: 'Metrikler',
    overviewTag: 'Genel Bakış', overviewTitle: 'Proje Nedir?',
    overviewDesc: 'Aynı hastayı farklı zaman noktalarında karşılaştırmak için geliştirilen confidence-aware longitudinal MRI analysis pipeline.',
    ov1Title: 'Araştırma Amacı', ov1Desc: 'Proje baseline ve follow-up beyin MR taramalarını karşılaştırarak zaman içindeki lezyon ve doku değişimlerini incelemeyi hedefler. İlk odak multiple sclerosis progression inspection olsa da segmentasyon tabanlı yapı farklı nörolojik hastalıklara genişletilebilir.',
    ovDisclaimer: 'This is not a clinical diagnostic tool; it is a research-oriented inspection and analysis pipeline.',
    ov2Title: 'Taramaları Eşleştir', ov2Desc: 'Baseline ve follow-up NIfTI taramaları aynı subject etrafında eşleştirilerek longitudinal karşılaştırma hazırlanır.',
    ov3Title: 'Değişimi Analiz Et', ov3Desc: 'Preprocessing, masking, registration, template construction ve voxelwise change analysis adımları scan pair çıktıları üretir.',
    ov4Title: 'Güveni Ölç', ov4Desc: 'NCC, MAE, Dice, brain volume, ROI agreement ve model cross-check sinyalleri bulguları artefaktlardan ayırmaya yardımcı olur.',
    motivationTag: 'Problem & Motivasyon', motivationTitle: 'Longitudinal MRI Karşılaştırması Neden Zor?',
    motivationDesc: 'Multiple sclerosis zaman içinde ince lezyon ve doku değişimleri oluşturabilir; bu değişimleri scanner, modality, preprocessing ve registration etkilerinden ayırmak zordur.',
    mot1Kicker: 'Hastalık sinyali', mot1Title: 'Zaman içinde ince değişimler', mot1Desc: 'MS ilişkili lezyon ve doku değişimleri küçük, düzensiz ve farklı beyin bölgelerine dağılmış olabilir.',
    mot2Kicker: 'Teknik gürültü', mot2Title: 'Scanner ve modality farkları', mot2Desc: 'Güvenilir karşılaştırma intensity normalization, brain masking, spatial alignment ve quality-control sinyalleri gerektirir.',
    mot3Kicker: 'Genişletilebilirlik', mot3Title: 'Segmentasyon tabanlı analiz', mot3Desc: 'Segmentation-aware workflow sistemi başka nörolojik hastalık araştırma senaryolarına genişletmeyi kolaylaştırır.',
    modalitiesTag: 'MRI Modalities', modalitiesTitle: 'T1w, T2w ve FLAIR Perspektifi',
    modalitiesDesc: 'Proje multimodal MRI bakışıyla tasarlanmıştır, çünkü MS ilişkili değişimler T1w, T2w ve FLAIR taramalarda farklı görünebilir.',
    modT1: 'Anatomik yapı ve doku kontrastı sağlar. Registration, template construction ve anatomik karşılaştırma için yararlıdır.',
    modT2: 'Anormal doku sinyalini vurgular ve lesion burden incelemesini destekler.',
    modFlair: 'Cerebrospinal fluid sinyalini baskılayarak periventricular ve juxtacortical MS lezyonlarını incelemeyi kolaylaştırır.',
    pipeTag: 'Core Pipeline', pipeTitle: 'Scan Pair’den Change Inspection’a',
    pipeDesc: 'Core flow CPU-only demo ile sınırlı değildir. Local CPU mode temel görüntüleme adımlarını doğrular; full analysis ise aynı kuyruğu daha ağır segmentation ve confidence aşamalarıyla genişletir.',
    p1: 'Preprocessing', p1d: 'Baseline ve follow-up taramalar resampling, filtering ve tutarlı output organizasyonu ile hazırlanır.',
    p2: 'Brain Mask Extraction', p2d: 'Karşılaştırılabilir beyin dokusunu izole etmek ve background kaynaklı artefaktları azaltmak için brain mask çıkarılır.',
    p3: 'Masked Intensity Normalization', p3d: 'Time-point karşılaştırmasını daha güvenilir yapmak için intensity normalization ortak beyin bölgesi içinde hesaplanır.',
    p4: 'Direct / Optimized Registration', p4d: 'Baseline ve follow-up anatomiyi voxel bazında karşılaştırmak için taramalar spatial olarak hizalanır.',
    p5: 'Subject-Specific Template', p5d: 'Within-subject template, longitudinal karşılaştırmayı stabil subject-centered uzayda destekler.',
    p6: 'Voxelwise Change Analysis', p6d: 'Inspection için difference maps, absolute difference maps ve change-direction outputs üretilir.',
    p7: 'Report Generation', p7d: 'NIfTI çıktılar, CSV metrics, JSON QC reports ve pipeline_step_report.json analizi özetler.',
    execTag: 'Execution Modes', execTitle: 'Local CPU + Full Analysis GPU',
    execDesc: 'Advanced path, her hafif doğrulama koşusu için zorunlu değil; daha ağır AI-ready medical imaging aşamaları için opsiyonel execution route olarak anlatılır.',
    cpuTitle: 'Local CPU Mode', cpuDesc: 'Standart donanımda preprocessing, brain masking, normalization, registration, template construction ve voxelwise reports için lightweight validation sağlar.',
    gpuTitle: 'Full Analysis GPU Mode', gpuDesc: 'GPU worker queue üzerinden SynthSeg segmentation, FastSurfer cross-checking, ROI registration QC, model agreement, confidence scoring ve MS lesion detection hedefler.',
    featTag: 'Segmentation & Confidence', featTitle: 'Temel Araştırma Yetenekleri',
    f1: 'Longitudinal MRI Pairing', f1d: 'Baseline ve follow-up scans aynı subject için zaman içinde karşılaştırılır.',
    f2: 'Confidence-Aware QC', f2d: 'Similarity, overlap, volume ve registration sinyalleri karşılaştırmayı güvenilir şekilde yorumlamaya yardımcı olur.',
    f3: 'Segmentation-Based Analysis', f3d: 'Anatomik bölgeler ve lesion-focused çıktılar global brain-volume sinyalinin ötesinde incelenebilir.',
    f4: 'SynthSeg / FastSurfer Agreement', f4d: 'Full analysis path, confidence scoring için segmentation outputlarını karşılaştırır.',
    f5: 'Voxelwise Change Maps', f5d: 'Template-space difference maps lokal intensity değişimlerini araştırma incelemesi için görünür yapar.',
    f6: 'Subject-Specific Template', f6d: 'Subject-centered template, time pointler arasındaki gereksiz spatial mismatch etkisini azaltır.',
    f7: 'CPU + GPU Execution Modes', f7d: 'Queue hem lightweight local runs hem de opsiyonel advanced GPU worker profile destekler.',
    f8: 'Web App Interface', f8d: 'Study management, pipeline builder, history, dashboard ve report inspection uygulama özellikleri olarak korunur.',
    evidenceTag: 'Prototype Evidence', evidenceTitle: 'Quality Metrics Explained',
    evidenceDesc: 'Project evidence içindeki prototype QC değerleri, klinik validasyon değil engineering validation sinyalleri olarak gösterilir.',
    evNcc: 'Registration sonrası intensity similarity. Daha yüksek değer daha iyi benzerlik gösterir.',
    evMae: 'Ortalama voxel-level intensity farkı. Daha düşük değer daha iyi alignment ve normalization düşündürür.',
    evDice: 'Preprocessing ve registration sonrası mask overlap. Daha yüksek Dice daha iyi shared-mask overlap demektir.',
    evMask: 'Voxelwise longitudinal comparison için kullanılabilen ortak beyin voxel sayısı.',
    metricColMetric: 'Metric', metricColMeaning: 'Meaning', metricColWhy: 'Why it matters',
    metricNccMeaning: 'Aligned scanler arasındaki intensity similarity ölçer.', metricNccWhy: 'Yüksek değer registration sonrası daha iyi similarity gösterir.',
    metricMaeMeaning: 'Ortalama voxel-level intensity difference ölçer.', metricMaeWhy: 'Düşük değer daha iyi alignment ve normalization düşündürür.',
    metricDiceMeaning: 'Maskeler arasındaki overlap ölçer.', metricDiceWhy: 'Yüksek Dice preprocessing ve registration sonrası brain masklerin iyi çakıştığını gösterir.',
    metricMaskMeaning: 'Ne kadar ortak beyin bölgesi kaldığını gösterir.', metricMaskWhy: 'Daha geniş güvenilir shared region voxelwise comparisonı destekler.',
    metricVolumeMeaning: 'Mask-derived volume değerini QC sinyali olarak takip eder.', metricVolumeWhy: 'Gerçekçi olmayan değişimler masking veya preprocessing sorununa işaret edebilir.',
    evidenceNote: 'Prototype QC values, not clinical validation.',
    archTag: 'Sistem Mimarisi', archTitle: 'Frontend, Backend, Queue ve Workers',
    archDesc: 'Web interface önemli kalır; ancak mimari artık worker queue ve CPU/GPU pipeline execution pathlerini öne çıkarır.',
    implTag: 'Implementation Details', implTitle: 'Tech Stack, API ve Outputs',
    implDesc: 'Düşük seviye implementation detayları burada toplanır; sayfa önce araştırma pipelineını, sonra web sistemini anlatır.',
    apiTitle: 'REST API Endpoints', apiDesc: 'Study management, previews, pipeline execution ve artifact inspection için seçili Spring Boot endpointleri.',
    apiColMethod: 'Method', apiColEndpoint: 'Endpoint', apiColDesc: 'Açıklama',
    api1: 'Sistem sağlık kontrolü', api2: 'Dashboard özet metrikleri', api3: 'Tüm MR study listesi',
    api4: 'Study image preview', api5: 'Study preview metadata', api6: 'NIfTI dosyası yükleme',
    api7: 'Pipeline job oluşturma', api8: 'Analysis artifact preview', api9: 'Artifact preview metadata', api10: 'Artifact veya report content',
    outTitle: 'Çıktı Organizasyonu', outDesc: 'Subject-centered folders; NIfTI outputs, CSV metrics, voxelwise difference maps ve JSON QC reports organize eder.',
    teamTag: 'Ekip', teamTitle: 'Proje Ekibi',
    footerCopy: '© 2026 Bitirme Projesi. Tüm hakları saklıdır.',
  },
  en: {
    navOverview: 'Overview', navMotivation: 'Motivation', navPipeline: 'Pipeline',
    navEvidence: 'Evidence', navArch: 'Architecture', navTech: 'Implementation', navTeam: 'Team',
    heroBadge: 'Graduation Project — 2026',
    heroTitle1: 'Analysis of MR images', heroTitle2: 'for MS patients',
    heroSub: 'A research-oriented pipeline for comparing baseline and follow-up brain MRI scans, with a focus on multiple sclerosis lesion and tissue-change inspection.',
    heroBtnExplore: 'Explore', heroBtnArch: 'View Architecture',
    statModes: 'Modes', statModels: 'Models', statRois: 'ROIs', statQc: 'Metrics',
    overviewTag: 'Overview', overviewTitle: 'What Is This Project?',
    overviewDesc: 'A confidence-aware longitudinal MRI analysis pipeline for comparing the same subject across different time points.',
    ov1Title: 'Research Purpose', ov1Desc: 'The project compares baseline and follow-up brain MRI scans to inspect lesion and tissue changes over time. Its first focus is multiple sclerosis progression inspection, while the segmentation-based design makes it extensible to other neurological diseases.',
    ovDisclaimer: 'This is not a clinical diagnostic tool; it is a research-oriented inspection and analysis pipeline.',
    ov2Title: 'Pair Scans', ov2Desc: 'Baseline and follow-up NIfTI scans are paired around the same subject to support longitudinal comparison.',
    ov3Title: 'Analyze Change', ov3Desc: 'Preprocessing, masking, registration, template construction, and voxelwise change analysis turn scan pairs into inspectable outputs.',
    ov4Title: 'Score Confidence', ov4Desc: 'NCC, MAE, Dice, brain volume, ROI agreement, and model cross-checks help separate useful findings from preprocessing or registration artifacts.',
    motivationTag: 'Problem & Motivation', motivationTitle: 'Why Longitudinal MRI Comparison Is Difficult',
    motivationDesc: 'Multiple sclerosis can cause subtle lesion and tissue changes over time, but those changes are difficult to separate from scanner, modality, preprocessing, and registration effects.',
    mot1Kicker: 'Disease signal', mot1Title: 'Subtle changes over time', mot1Desc: 'MS-related lesion and tissue changes may be small, irregular, and distributed across different brain regions.',
    mot2Kicker: 'Technical noise', mot2Title: 'Scanner and modality differences', mot2Desc: 'Reliable comparison requires intensity normalization, brain masking, spatial alignment, and quality-control signals.',
    mot3Kicker: 'Extensibility', mot3Title: 'Segmentation-based analysis', mot3Desc: 'A segmentation-aware workflow makes the system easier to extend to additional neurological disease research scenarios.',
    modalitiesTag: 'MRI Modalities', modalitiesTitle: 'T1w, T2w, and FLAIR Perspective',
    modalitiesDesc: 'The project is designed around a multimodal MRI perspective, because MS-related changes may appear differently across T1w, T2w, and FLAIR scans.',
    modT1: 'Provides anatomical structure and tissue contrast. Useful for registration, template construction, and anatomical comparison.',
    modT2: 'Highlights abnormal tissue signal and supports lesion burden inspection.',
    modFlair: 'Suppresses cerebrospinal fluid signal, making periventricular and juxtacortical MS lesions easier to inspect.',
    pipeTag: 'Core Pipeline', pipeTitle: 'From Scan Pair to Change Inspection',
    pipeDesc: 'The core flow is not limited to a CPU-only demo. Local CPU mode validates the essential imaging steps, while full analysis extends the same queue with heavier segmentation and confidence stages.',
    p1: 'Preprocessing', p1d: 'Baseline and follow-up scans are prepared through resampling, filtering, and consistent output organization.',
    p2: 'Brain Mask Extraction', p2d: 'Brain masks are extracted to isolate comparable brain tissue and reduce background-driven artifacts.',
    p3: 'Masked Intensity Normalization', p3d: 'Intensity normalization is computed inside the shared brain region to make time-point comparison more reliable.',
    p4: 'Direct / Optimized Registration', p4d: 'Scans are spatially aligned so baseline and follow-up anatomy can be compared voxel by voxel.',
    p5: 'Subject-Specific Template', p5d: 'A within-subject template supports longitudinal comparison in a stable subject-centered space.',
    p6: 'Voxelwise Change Analysis', p6d: 'Difference maps, absolute difference maps, and change-direction outputs are produced for inspection.',
    p7: 'Report Generation', p7d: 'NIfTI outputs, CSV metrics, JSON QC reports, and pipeline_step_report.json summarize the analysis.',
    execTag: 'Execution Modes', execTitle: 'Local CPU + Full Analysis GPU',
    execDesc: 'The advanced path is an optional execution route for heavier AI-ready medical imaging stages, not a requirement for every lightweight validation run.',
    cpuTitle: 'Local CPU Mode', cpuDesc: 'Runs on standard hardware for lightweight validation of preprocessing, brain masking, normalization, registration, template construction, and voxelwise reports.',
    gpuTitle: 'Full Analysis GPU Mode', gpuDesc: 'Targets SynthSeg segmentation, FastSurfer cross-checking, ROI registration QC, model agreement, confidence scoring, and MS lesion detection through the GPU worker queue.',
    featTag: 'Segmentation & Confidence', featTitle: 'Core Research Capabilities',
    f1: 'Longitudinal MRI Pairing', f1d: 'Baseline and follow-up scans are paired for same-subject comparison across time.',
    f2: 'Confidence-Aware QC', f2d: 'Similarity, overlap, volume, and registration signals make every comparison easier to trust or question.',
    f3: 'Segmentation-Based Analysis', f3d: 'Anatomical regions and lesion-focused outputs can be inspected beyond global brain-volume signals.',
    f4: 'SynthSeg / FastSurfer Agreement', f4d: 'The full analysis path compares segmentation outputs to support confidence scoring.',
    f5: 'Voxelwise Change Maps', f5d: 'Template-space difference maps make local intensity changes visible for research inspection.',
    f6: 'Subject-Specific Template', f6d: 'A subject-centered template reduces avoidable spatial mismatch between time points.',
    f7: 'CPU + GPU Execution Modes', f7d: 'The queue supports lightweight local runs and an optional advanced GPU worker profile.',
    f8: 'Web App Interface', f8d: 'Study management, pipeline builder, history, dashboard, and report inspection stay available as implementation features.',
    evidenceTag: 'Prototype Evidence', evidenceTitle: 'Quality Metrics Explained',
    evidenceDesc: 'Prototype QC values from the project evidence, shown as engineering validation signals rather than clinical validation.',
    evNcc: 'Intensity similarity after registration. Higher values indicate better similarity.',
    evMae: 'Average voxel-level intensity difference. Lower values suggest better alignment and normalization.',
    evDice: 'Mask overlap after preprocessing and registration. Higher Dice means better shared-mask overlap.',
    evMask: 'Shared brain voxels available for voxelwise longitudinal comparison.',
    metricColMetric: 'Metric', metricColMeaning: 'Meaning', metricColWhy: 'Why it matters',
    metricNccMeaning: 'Measures intensity similarity between aligned scans.', metricNccWhy: 'Higher values indicate better similarity after registration.',
    metricMaeMeaning: 'Measures average voxel-level intensity difference.', metricMaeWhy: 'Lower values suggest better alignment and normalization.',
    metricDiceMeaning: 'Measures overlap between masks.', metricDiceWhy: 'Higher Dice means brain masks overlap well after preprocessing and registration.',
    metricMaskMeaning: 'Shows how much shared brain region is available.', metricMaskWhy: 'A larger reliable shared region supports voxelwise comparison.',
    metricVolumeMeaning: 'Tracks mask-derived volume as a QC signal.', metricVolumeWhy: 'Unrealistic changes may indicate masking or preprocessing issues.',
    evidenceNote: 'Prototype QC values, not clinical validation.',
    archTag: 'System Architecture', archTitle: 'Frontend, Backend, Queue, and Workers',
    archDesc: 'The web interface remains important, but the architecture now foregrounds the worker queue and the CPU/GPU pipeline execution paths.',
    implTag: 'Implementation Details', implTitle: 'Tech Stack, API, and Outputs',
    implDesc: 'The lower-level implementation details are grouped here so the page reads first as a research pipeline and then as a web system.',
    apiTitle: 'REST API Endpoints', apiDesc: 'Selected Spring Boot endpoints for study management, previews, pipeline execution, and artifact inspection.',
    apiColMethod: 'Method', apiColEndpoint: 'Endpoint', apiColDesc: 'Description',
    api1: 'System health check', api2: 'Dashboard summary metrics', api3: 'All MR study list',
    api4: 'Study image preview', api5: 'Study preview metadata', api6: 'NIfTI file upload',
    api7: 'Create pipeline job', api8: 'Analysis artifact preview', api9: 'Artifact preview metadata', api10: 'Artifact or report content',
    outTitle: 'Output Organization', outDesc: 'Subject-centered folders organize NIfTI outputs, CSV metrics, voxelwise difference maps, and JSON QC reports.',
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
    '.overview-card', '.info-card', '.modality-card', '.mode-card',
    '.arch-layer', '.feature-card', '.evidence-card',
    '.tech-card', '.team-card', '.api-table-wrap', '.metric-table-wrap',
    '.folder-tree', '.section-header', '.subsection-header'
  ];
  document.querySelectorAll(selectors.join(',')).forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
