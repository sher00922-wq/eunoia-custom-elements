class EunoiaServices extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  eunoia-services {
    display: block;
    font-family: 'Inter', -apple-system, sans-serif;
    color: #333840;
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    overflow: visible !important;
  }
  eunoia-services * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: none !important;
  }
  eunoia-services *::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  eunoia-services ::selection {
    background: #c5d1a8;
    color: #181d26;
  }

  /* ─── VARIABLES ─── */
  :host {
    --ink: #181d26;
    --body: #333840;
    --muted: #5f6b5a;
    --line: #e7ebe3;
    --canvas: #ffffff;
    --surface: #f8faf6;
    --forest: #243126;
    --cream: #f4efe7;
    --green: #5f7f3a;
    --green-soft: #a8ba92;
    --green-pale: #c5d1a8;
    --radius-sm: 14px;
    --radius-md: 20px;
    --radius-lg: 28px;
    --font-serif: 'DM Serif Display', Georgia, serif;
    --font-sans: 'Inter', -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    --shadow-2: 0 4px 16px rgba(24,29,38,0.05);
    --shadow-3: 0 12px 40px rgba(24,29,38,0.08);
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* ─── NAVIGATION ─── */
  .ep-navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9999;
    padding: 12px 24px;
    backdrop-filter: blur(24px) saturate(140%);
    -webkit-backdrop-filter: blur(24px) saturate(140%);
    background: rgba(255,255,255,0.92);
    border-bottom: 1px solid rgba(214,220,208,0.4);
    transition: all 0.4s var(--ease-out);
  }
  .ep-nav-inner {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .ep-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }
  .ep-logo img { width: 44px; height: 44px; object-fit: contain; }
  .ep-logo-title {
    font-family: var(--font-serif);
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    color: var(--ink);
  }
  .ep-nav-links {
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .ep-nav-links a {
    position: relative;
    text-decoration: none;
    color: #3a3f36;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.2px;
    transition: color 0.3s ease;
    padding: 4px 0;
  }
  .ep-nav-links a::after {
    content: "";
    position: absolute;
    left: 0; bottom: -2px;
    width: 0%;
    height: 1.5px;
    background: var(--green);
    border-radius: 1px;
    transition: width 0.35s var(--ease-out);
  }
  .ep-nav-links a:hover::after { width: 100%; }
  .ep-nav-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 0 16px;
    border-radius: 10px;
    text-decoration: none;
    background: #181d26;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
    transition: all 0.3s var(--ease-out);
    border: none;
    cursor: pointer;
  }
  .ep-nav-button:hover { background: var(--green); color: var(--ink); }
  .ep-mobile-btn {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    z-index: 10000;
  }
  .ep-mobile-btn span {
    width: 22px;
    height: 2px;
    background: var(--ink);
    display: block;
    transition: all 0.3s ease;
    border-radius: 1px;
  }
  .ep-mobile-btn.active span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
  .ep-mobile-btn.active span:nth-child(2) { opacity: 0; }
  .ep-mobile-btn.active span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }
  .ep-mobile-menu {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(255,255,255,0.98);
    backdrop-filter: blur(30px);
    z-index: 9990;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }
  .ep-mobile-menu.active { opacity: 1; pointer-events: all; }
  .ep-mobile-menu a {
    font-family: var(--font-serif);
    font-size: 1.375rem;
    color: var(--ink);
    text-decoration: none;
  }

  /* ─── HERO ─── */
  .services-hero {
    position: relative;
    padding: 100px 32px 60px;
    max-width: 1280px;
    margin: 0 auto;
    background: linear-gradient(180deg, #ffffff 0%, var(--surface) 100%);
  }
  .hero-inner {
    position: relative;
    z-index: 2;
    max-width: 900px;
    margin: auto;
    text-align: center;
  }
  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 20px;
  }
  .hero-eyebrow::before {
    content: '';
    width: 28px;
    height: 1.5px;
    background: var(--green);
    border-radius: 1px;
  }
  .hero-inner h1 {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 4vw, 2.75rem);
    line-height: 1.05;
    letter-spacing: -2px;
    font-weight: 400;
    color: var(--ink);
    margin-bottom: 24px;
  }
  .hero-inner p {
    max-width: 640px;
    margin: 0 auto;
    font-size: 0.9375rem;
    line-height: 1.75;
    color: var(--muted);
  }

  /* ─── EDITORIAL ─── */
  .editorial-intro {
    background: var(--canvas);
    padding: 60px 32px;
    max-width: 1280px;
    margin: 0 auto;
  }
  .editorial-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 60px;
    align-items: start;
  }
  .editorial-title {
    font-family: var(--font-serif);
    font-size: clamp(1.5rem, 2.8vw, 2rem);
    line-height: 1.1;
    letter-spacing: -1.5px;
    font-weight: 400;
    color: var(--ink);
  }
  .editorial-copy p {
    font-size: 0.875rem;
    line-height: 1.85;
    color: var(--muted);
    margin-bottom: 16px;
  }
  .editorial-copy p:last-child { margin-bottom: 0; }

  /* ─── FEATURE SECTION ─── */
  .feature-section {
    padding: 30px 32px 60px;
    max-width: 1280px;
    margin: 0 auto;
  }
  .feature-layout {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 20px;
    margin-bottom: 20px;
  }
  .feature-primary {
    background: var(--forest);
    color: white;
    border-radius: var(--radius-lg);
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    transition: all 0.5s var(--ease-out);
    box-shadow: var(--shadow-2);
  }
  .feature-primary::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--green-soft), var(--green-pale));
    opacity: 0.6;
  }
  .feature-primary:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-3);
  }
  .feature-tag {
    font-family: var(--font-mono);
    font-size: 0.5625rem;
    letter-spacing: 2px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--green-soft);
    margin-bottom: 16px;
    display: inline-block;
  }
  .feature-primary h2 {
    font-family: var(--font-serif);
    font-size: clamp(1.375rem, 2.5vw, 2rem);
    line-height: 1.08;
    letter-spacing: -1.5px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  .feature-primary > div > p {
    max-width: 480px;
    font-size: 0.875rem;
    line-height: 1.75;
    color: rgba(255,255,255,0.75);
  }
  .feature-list {
    margin-top: 28px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .feature-item {
    padding: 16px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: var(--radius-md);
    background: rgba(255,255,255,0.04);
    transition: all 0.3s ease;
  }
  .feature-item:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.15);
    transform: translateY(-2px);
  }
  .feature-item h4 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: white;
  }
  .feature-item p {
    font-size: 0.8125rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.65);
  }
  .feature-side {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .side-card {
    border-radius: var(--radius-lg);
    padding: 32px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s var(--ease-out);
    position: relative;
    border: 1px solid transparent;
  }
  .side-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--green-soft), var(--green-pale));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .side-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-3);
    border-color: rgba(168,186,146,0.2);
  }
  .side-card:hover::before { opacity: 1; }
  .side-card.light {
    background: var(--surface);
    border: 1px solid var(--line);
  }
  .side-card.cream { background: var(--cream); }
  .side-card h3 {
    font-family: var(--font-serif);
    font-size: clamp(1.25rem, 1.8vw, 1.5rem);
    line-height: 1.15;
    letter-spacing: -1px;
    font-weight: 400;
    color: var(--ink);
    margin-bottom: 12px;
  }
  .side-card p {
    font-size: 0.875rem;
    line-height: 1.75;
    color: var(--muted);
  }

  /* ─── SERVICE STRIP ─── */
  .service-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .strip-card {
    background: var(--canvas);
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    padding: 28px 24px;
    transition: all 0.5s var(--ease-out);
    position: relative;
  }
  .strip-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--green-soft), var(--green-pale));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .strip-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-3);
    border-color: rgba(168,186,146,0.3);
    background: var(--surface);
  }
  .strip-card:hover::before { opacity: 1; }
  .strip-card h4 {
    font-family: var(--font-serif);
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: -0.3px;
    font-weight: 400;
    color: var(--ink);
    margin-bottom: 12px;
  }
  .strip-card p {
    font-size: 0.8125rem;
    line-height: 1.75;
    color: var(--muted);
  }

  /* ─── ASSESSMENT SECTION ─── */
  .assessment-band {
    background: var(--surface);
    padding: 60px 32px;
  }
  .assessment-box {
    max-width: 1180px;
    margin: auto;
    border-radius: var(--radius-lg);
    background: var(--canvas);
    border: 1px solid var(--line);
    padding: 48px 44px;
    position: relative;
    transition: all 0.5s var(--ease-out);
  }
  .assessment-box:hover {
    box-shadow: var(--shadow-3);
    border-color: rgba(168,186,146,0.25);
  }
  .assessment-box::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--green-soft), var(--green-pale));
    opacity: 0.7;
  }
  .assessment-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 48px;
    align-items: center;
  }
  .assessment-left h2 {
    font-family: var(--font-serif);
    font-size: clamp(1.375rem, 2.5vw, 1.875rem);
    line-height: 1.08;
    letter-spacing: -1.5px;
    font-weight: 400;
    color: var(--ink);
  }
  .assessment-right p {
    font-size: 0.875rem;
    line-height: 1.85;
    color: var(--muted);
    margin-bottom: 14px;
  }
  .assessment-right p:last-child { margin-bottom: 0; }

  /* ─── CTA ─── */
  .cta-band {
    padding: 80px 32px;
    text-align: center;
    background: var(--ink);
    position: relative;
  }
  .cta-orb {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(95,127,58,0.18) 0%, transparent 60%);
    pointer-events: none;
    animation: ctaOrb 10s ease-in-out infinite;
  }
  @keyframes ctaOrb {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.15); }
  }
  .cta-inner {
    max-width: 700px;
    margin: auto;
    position: relative;
    z-index: 2;
  }
  .cta-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    color: var(--green-soft);
    margin-bottom: 14px;
    text-transform: uppercase;
    display: inline-block;
  }
  .cta-inner h2 {
    font-family: var(--font-serif);
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    line-height: 1.05;
    letter-spacing: -2px;
    font-weight: 400;
    color: white;
    margin-bottom: 16px;
  }
  .cta-inner p {
    max-width: 560px;
    margin: 0 auto 28px;
    font-size: 0.875rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.65);
  }
  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 0 32px;
    border-radius: var(--radius-sm);
    text-decoration: none;
    background: white;
    color: var(--ink);
    font-size: 0.8125rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 1px 2px rgba(24,29,38,0.04);
    border: none;
    cursor: pointer;
  }
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  }

  /* ─── FOOTER ─── */
  .footer {
    background: var(--canvas);
    border-top: 1px solid var(--line);
    padding: 48px 32px;
  }
  .footer-container {
    max-width: 1180px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;
    flex-wrap: wrap;
  }
  .footer-brand h3 {
    font-family: var(--font-serif);
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--ink);
    margin-bottom: 10px;
  }
  .footer-brand p {
    font-size: 0.75rem;
    line-height: 1.7;
    color: var(--muted);
    max-width: 360px;
  }
  .footer-links {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
  }
  .footer-links a {
    color: #6b7268;
    text-decoration: none;
    font-size: 0.75rem;
    transition: all 0.3s ease;
    position: relative;
  }
  .footer-links a::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0;
    width: 0; height: 1px;
    background: var(--green);
    transition: width 0.3s ease;
  }
  .footer-links a:hover { color: var(--ink); }
  .footer-links a:hover::after { width: 100%; }

  @media (max-width: 1024px) {
    .feature-layout, .assessment-grid, .editorial-grid { grid-template-columns: 1fr; }
    .service-strip { grid-template-columns: repeat(2, 1fr); }
    .ep-nav-links { display: none; }
    .ep-mobile-btn { display: flex; }
  }
  @media (max-width: 768px) {
    .services-hero { padding: 90px 20px 40px; }
    .hero-inner h1 { font-size: 1.75rem; letter-spacing: -1.5px; }
    .editorial-intro { padding: 40px 20px; }
    .feature-section { padding: 20px 20px 40px; }
    .feature-layout { gap: 16px; }
    .feature-primary { padding: 28px; }
    .feature-list { grid-template-columns: 1fr; }
    .side-card { padding: 28px; }
    .service-strip { grid-template-columns: 1fr; }
    .strip-card { padding: 24px 20px; }
    .assessment-band { padding: 40px 20px; }
    .assessment-box { padding: 32px 24px; }
    .assessment-grid { gap: 28px; }
    .cta-band { padding: 60px 20px; }
    .cta-inner h2 { font-size: 1.625rem; letter-spacing: -1px; }
    .footer { padding: 40px 20px; }
    .footer-container { flex-direction: column; align-items: flex-start; gap: 24px; }
  }
  @media (max-width: 480px) {
    .hero-inner h1 { font-size: 1.5rem; }
    .editorial-title { font-size: 1.25rem; }
    .feature-primary h2 { font-size: 1.25rem; }
    .side-card h3 { font-size: 1.125rem; }
    .cta-inner h2 { font-size: 1.375rem; }
  }
</style>

<nav class="ep-navbar" id="navbar">
  <div class="ep-nav-inner">
    <a href="https://www.eunoiapraxis.com/" class="ep-logo">
      <img src="https://static.wixstatic.com/media/29117f_58e0681b66f44c4887d00b7691aeb160~mv2.png" alt="Eunoia Praxis logo">
      <div><div class="ep-logo-title">Eunoia Praxis</div></div>
    </a>
    <div class="ep-nav-links">
      <a href="https://www.eunoiapraxis.com/" target="_top">About</a>
      <a href="https://www.eunoiapraxis.com/services" target="_top">Services</a>
      <a href="https://www.eunoiapraxis.com/assessment" target="_top">Assessments</a>
      <a href="https://www.eunoiapraxis.com/treatment" target="_top">Treatment</a>
      <a href="https://www.eunoiapraxis.com/contact" target="_top">Contact</a>
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <a href="https://www.eunoiapraxis.com/contact" class="ep-nav-button">Book Consultation</a>
      <button class="ep-mobile-btn" id="mobileBtn" aria-label="Toggle navigation menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</nav>

<div class="ep-mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
  <a href="https://www.eunoiapraxis.com/" target="_top">About</a>
  <a href="https://www.eunoiapraxis.com/services" target="_top">Services</a>
  <a href="https://www.eunoiapraxis.com/assessment" target="_top">Assessments</a>
  <a href="https://www.eunoiapraxis.com/treatment" target="_top">Treatment</a>
  <a href="https://www.eunoiapraxis.com/contact" target="_top">Contact</a>
</div>

<main>
  <section class="services-hero">
    <div class="hero-inner">
      <div class="hero-eyebrow">Eunoia Praxis Services</div>
      <h1>Integrated Clinical &amp; Rehabilitation Services</h1>
      <p>Comprehensive medical, psychological, and rehabilitation services designed to support recovery, function, and long-term well-being.</p>
    </div>
  </section>

  <section class="editorial-intro">
    <div class="editorial-grid">
      <div>
        <h2 class="editorial-title">Modern care,<br>collaborative by design.</h2>
      </div>
      <div class="editorial-copy">
        <p>Eunoia Praxis provides multidisciplinary assessment, treatment, and rehabilitation services across physical, cognitive, emotional, and functional health.</p>
        <p>Our integrated clinical model brings together healthcare professionals across psychology, medicine, rehabilitation, and functional care to support meaningful recovery and long-term well-being.</p>
      </div>
    </div>
  </section>

  <section class="feature-section">
    <div class="feature-layout">
      <div class="feature-primary">
        <div>
          <div class="feature-tag">Featured Care</div>
          <h2>Psychological &amp; Emotional Health</h2>
          <p>Evidence-informed therapeutic and psychological services supporting emotional well-being, resilience, recovery, and long-term mental health care.</p>
        </div>
        <div class="feature-list">
          <div class="feature-item"><h4>Psychology</h4><p>Therapeutic support for emotional and behavioural well-being.</p></div>
          <div class="feature-item"><h4>Psychiatry</h4><p>Integrated psychiatric and medical mental health care.</p></div>
          <div class="feature-item"><h4>Neuropsychology</h4><p>Cognitive assessment and rehabilitation support.</p></div>
          <div class="feature-item"><h4>Counselling</h4><p>Recovery-focused psychotherapy and emotional support.</p></div>
        </div>
      </div>
      <div class="feature-side">
        <div class="side-card light">
          <h3>Medical &amp; Physical Health</h3>
          <p>Specialized healthcare services supporting physical recovery, pain management, mobility, neurological care, and rehabilitation following illness or injury.</p>
        </div>
        <div class="side-card cream">
          <h3>Functional Rehabilitation</h3>
          <p>Occupational and rehabilitation-focused services supporting independence, work participation, and meaningful daily living.</p>
        </div>
      </div>
    </div>

    <div class="service-strip">
      <div class="strip-card"><h4>Physiatry</h4><p>Rehabilitation-focused medical care supporting recovery, mobility, and quality of life.</p></div>
      <div class="strip-card"><h4>Orthopedics</h4><p>Assessment and treatment support for musculoskeletal conditions and injury recovery.</p></div>
      <div class="strip-card"><h4>Occupational Therapy</h4><p>Functional support for work, activities of daily living, and community participation.</p></div>
    </div>
  </section>

  <section class="assessment-band">
    <div class="assessment-box">
      <div class="assessment-grid">
        <div class="assessment-left"><h2>Comprehensive assessment services.</h2></div>
        <div class="assessment-right">
          <p>Eunoia Praxis provides independent clinical and functional assessments supporting treatment planning, rehabilitation, insurance, legal, and workplace-related contexts.</p>
          <p>Our multidisciplinary assessment model supports accurate documentation, collaborative care planning, and patient-centred recovery pathways.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="cta-orb"></div>
    <div class="cta-inner">
      <span class="cta-eyebrow">Start Today</span>
      <h2>Start your care journey.</h2>
      <p>Connect with our team regarding assessment services, treatment options, referrals, or collaborative care opportunities.</p>
      <a href="https://www.eunoiapraxis.com/contact" class="cta-button">Contact Eunoia Praxis</a>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <h3>EUNOIA PRAXIS</h3>
      <p>Accessible mental health &amp; functional care across Ontario.</p>
    </div>
    <div class="footer-links">
      <a href="https://www.eunoiapraxis.com/privacy-policy">Privacy Policy</a>
      <a href="https://www.eunoiapraxis.com/terms-of-use">Terms of Use</a>
      <a href="https://www.eunoiapraxis.com/confidentiality">Confidentiality Statement</a>
    </div>
  </div>
</footer>

<script>
  (function() {
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn.addEventListener('click', () => {
      const isActive = mobileBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = isActive ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  })();
</script>
    `;
  }
}

customElements.define('eunoia-services', EunoiaServices);
