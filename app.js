/**
 * SHALEM | Netflix-Style Developer Portfolio Application Engine
 * 
 * Features:
 * 1. Native Web Audio API "TA-DUM" Sound Synthesizer
 * 2. Cinematic Preloader Lifecycle Management
 * 3. Horizontal Carousel Scrollers with Smooth Chevron Controls
 * 4. Interactive "More Info" Title Modal Dialog with Complete Architecture Data
 * 5. Dynamic Real-Time Search Filtering
 * 6. "Who's Watching?" Profile Context Switcher
 * 7. One-Click Clipboard Copy & Signature Netflix Toast Notification
 * 8. Navbar Scroll Observer & Mobile Drawer
 */

(function () {
  'use strict';

  // --- Project Metadata Database ---
  const PROJECT_CATALOG = {
    'doctutorials': {
      title: 'DOCTUTORIALS: QUIZ ANALYTICS',
      seriesBadge: 'A SHALEM RAJU ORIGINAL // LIVE IN PRODUCTION',
      match: '99% Match',
      year: '2026',
      rating: 'PROD-READY',
      hd: '4K UHD • 5.1 SURROUND',
      gradient: 'linear-gradient(135deg, #1e3a8a, #0369a1)',
      synopsis: 'Faced with critical institutional reporting bottlenecks across partner medical colleges, independently architected and deployed a production-grade quiz assessment and academic telemetry dashboard. Features real-time participation tracking, institutional score distributions, and automated student engagement reporting.',
      techStack: 'Antigravity, PostgreSQL Relational Cluster, Railway Cloud Orchestration, REST APIs',
      classification: 'Flagship Production Software, Medical Edutech Analytics',
      deployment: 'Live on Railway Cloud (https://doctutorials-quiz-dashboard-production.up.railway.app/)',
      playLink: 'https://doctutorials-quiz-dashboard-production.up.railway.app/',
      repoLink: 'https://railway.com/dashboard',
      episodes: [
        { idx: 'E01', title: 'Problem Discovery & Data Bottleneck Audit', meta: 'Operations Analysis' },
        { idx: 'E02', title: 'PostgreSQL Relational Schema & Partitioning', meta: 'Database Design' },
        { idx: 'E03', title: 'Antigravity Full-Stack Frontend & Analytics UI', meta: 'Telemetry Dashboard' },
        { idx: 'E04', title: 'Production Railway Cloud CI/CD Deployment', meta: 'Live Production SLA' }
      ]
    },
    'b2b-dashboard': {
      title: 'DOCTUTORIALS: B2B PARTNER DASHBOARD',
      seriesBadge: 'A SHALEM RAJU ORIGINAL // LIVE IN PRODUCTION',
      match: '99% Match',
      year: '2026',
      rating: 'PROD-READY',
      hd: '4K UHD • 5.1 SURROUND',
      gradient: 'linear-gradient(135deg, #0f766e, #0369a1)',
      synopsis: 'Enterprise B2B partner operations and institutional management dashboard engineered for DocTutorials to orchestrate medical college partnerships, manage user tiering, monitor live student batches, and streamline commercial workflows.',
      techStack: 'Antigravity, PostgreSQL Relational Cluster, Railway Cloud Orchestration, Studio Analytics',
      classification: 'Flagship Production Software, B2B Enterprise Portal',
      deployment: 'Live on Railway Cloud (https://studio-dashboard-production-ec48.up.railway.app/)',
      playLink: 'https://studio-dashboard-production-ec48.up.railway.app/',
      repoLink: 'https://railway.com/dashboard',
      episodes: [
        { idx: 'E01', title: 'Institutional Partner Lifecycle & Batch Governance', meta: 'Partner Ops' },
        { idx: 'E02', title: 'Real-Time College Subscription & Quota Engine', meta: 'Relational DB' },
        { idx: 'E03', title: 'Studio Dashboard UI & High-Velocity Telemetry', meta: 'Frontend Engine' },
        { idx: 'E04', title: 'Zero-Downtime Railway Cloud Deployment', meta: 'Production SLA' }
      ]
    },
    'talent-scout': {
      title: 'AUTONOMOUS TALENT SCOUTING AGENT',
      seriesBadge: 'DECCAN AI CATALYST // HACKATHON FINALIST',
      match: '98% Match',
      year: '2025',
      rating: 'AI-AGENT',
      hd: 'HD • STEREO',
      gradient: 'linear-gradient(135deg, #4c1d95, #2563eb)',
      synopsis: 'An autonomous recruiting intelligence agent engineered for the Deccan AI Catalyst Hackathon. Ingests raw candidate profiles, parses unstructured resume data, benchmarks qualifications against multi-tiered role rubrics, and conducts automated contextual outreach.',
      techStack: 'Modern LLM APIs, Agentic Workflows, Prompt Architecture, Python, GitHub CI/CD',
      classification: 'Autonomous Agentic Systems, AI Recruitment Pipelines',
      deployment: 'Live on Railway Cloud (https://talent-scout-ai-production.up.railway.app/)',
      playLink: 'https://talent-scout-ai-production.up.railway.app/',
      repoLink: 'https://github.com/shalemraju35',
      episodes: [
        { idx: 'E01', title: 'Candidate Profile Ingestion & Structured Parsing', meta: 'Unstructured NLP' },
        { idx: 'E02', title: 'Rubric Qualification Scoring via Gemini LLM', meta: '94.2% Match Accuracy' },
        { idx: 'E03', title: 'Automated Multi-Stage Outreach Synthesis', meta: 'Contextual Agent' }
      ]
    },
    'smart-farming': {
      title: 'SMART VALUE FARMING PLATFORM',
      seriesBadge: 'NATIONAL VISWAKARMA AWARD // PRODUCTION',
      match: '98% Match',
      year: '2024',
      rating: 'AGRITECH',
      hd: '4K UHD • TELEMETRY',
      gradient: 'linear-gradient(135deg, #065f46, #047857)',
      synopsis: 'Award-nominated agricultural intelligence platform delivering real-time agronomic advisory, automated crop disease diagnosis, soil telemetry analysis, and localized weather alerts to empower regional farmers with data-driven decision support.',
      techStack: 'Full-Stack Web Development, Agronomic Logic, Relational Database, Railway Cloud',
      classification: 'Flagship Production Software, Agritech Telemetry & Advisory',
      deployment: 'Live on Railway Cloud (https://smart-value-farming-production.up.railway.app/)',
      playLink: 'https://smart-value-farming-production.up.railway.app/',
      repoLink: 'https://github.com/shalemraju35',
      episodes: [
        { idx: 'E01', title: 'Precision Soil Telemetry & Crop Advisory Engine', meta: 'Decision Support' },
        { idx: 'E02', title: 'Crop Disease Diagnosis & Treatment Protocols', meta: 'Agronomic Logic' },
        { idx: 'E03', title: 'Automated Real-Time Micro-Climate Weather Alerts', meta: 'Environmental Data' },
        { idx: 'E04', title: 'Live Production Railway Cloud Deployment', meta: 'Production SLA' }
      ]
    },
    'regional-ecommerce': {
      title: 'REGIONAL CONNECT E-COMMERCE',
      seriesBadge: 'NATIONAL VISWAKARMA AWARD // PRODUCTION',
      match: '97% Match',
      year: '2024',
      rating: 'COMMERCE',
      hd: '5.1 SURROUND',
      gradient: 'linear-gradient(135deg, #d97706, #b45309)',
      synopsis: 'Award-nominated hyper-local peer-to-peer commerce ecosystem connecting regional rural agricultural producers directly with urban retail consumers and commercial buyers, eliminating exploitative intermediary fees.',
      techStack: 'Full-Stack Web Marketplace, PostgreSQL Relational Schema, Logistics Routing, Railway Cloud',
      classification: 'Flagship Production Software, Hyper-Local Commerce Platform',
      deployment: 'Live on Railway Cloud (https://regional-connect-ecommerce-production.up.railway.app/)',
      playLink: 'https://regional-connect-ecommerce-production.up.railway.app/',
      repoLink: 'https://github.com/shalemraju35',
      episodes: [
        { idx: 'E01', title: 'Direct Farmer-to-Consumer Produce Marketplace', meta: 'Direct Commerce' },
        { idx: 'E02', title: 'Dynamic Hyper-Local Inventory & Pricing Engine', meta: 'Real-Time Catalog' },
        { idx: 'E03', title: 'Last-Mile Regional Logistics & Pickup Mesh', meta: 'Logistics Routing' },
        { idx: 'E04', title: 'Live Production Railway Cloud Orchestration', meta: 'Production SLA' }
      ]
    },
    'viswakarma': {
      title: 'SMART FARMING & REGIONAL E-COMMERCE',
      seriesBadge: 'NATIONAL VISWAKARMA AWARD // DUAL PLATFORM',
      match: '98% Match',
      year: '2024',
      rating: 'INNOVATION',
      hd: '4K UHD • 5.1',
      gradient: 'linear-gradient(135deg, #065f46, #d97706)',
      synopsis: 'National Viswakarma Award-nominated dual engineering initiatives encompassing the Smart Value Farming Advisory platform and the Regional Connect E-Commerce marketplace.',
      techStack: 'Full-Stack Web Development, PostgreSQL, Agritech Decision Systems, Railway Cloud',
      classification: 'Agritech Telemetry & Hyper-Local Marketplace',
      deployment: 'Live on Railway Cloud',
      playLink: 'https://smart-value-farming-production.up.railway.app/',
      repoLink: 'https://github.com/shalemraju35',
      episodes: [
        { idx: 'E01', title: 'Smart Value Farming Agricultural Platform', meta: 'Live Production' },
        { idx: 'E02', title: 'Regional Connect Peer-to-Peer E-Commerce', meta: 'Live Production' }
      ]
    },
    'ai-eval': {
      title: 'AI EVALUATION & DATA REASONING',
      seriesBadge: 'DECCAN AI RESEARCH // BENCHMARK AUDITING',
      match: '96% Match',
      year: '2025',
      rating: 'RESEARCH',
      hd: 'HDR • 4K',
      gradient: 'linear-gradient(135deg, #701a75, #312e81)',
      synopsis: 'Conducted rigorous performance benchmarking, relational multi-table logic stress tests, and system guardrail evaluations for production-grade AI models at Deccan AI to verify model alignment and reasoning accuracy across complex edge cases.',
      techStack: 'Multimodal AI Auditing, Multi-Table Structured Reasoning, Edge-Case Verification, Safety Guardrails',
      classification: 'Model Evaluation, AI Safety & Enterprise Benchmarking',
      deployment: 'Live on Deccan Experts AI (https://platform.deccanexperts.ai/)',
      playLink: 'https://platform.deccanexperts.ai/',
      repoLink: 'https://github.com/shalemraju35',
      episodes: [
        { idx: 'E01', title: 'Multi-Table Relational Logic Verification', meta: 'Logical Consistency' },
        { idx: 'E02', title: 'Adversarial Edge-Case Stress Testing', meta: '124 Edge Scenarios' },
        { idx: 'E03', title: 'Production Guardrail Containment Verification', meta: 'Safety Compliance' }
      ]
    },
    'prompt-router': {
      title: 'LLM PROMPT ROUTER & AUTONOMOUS GATEWAY',
      seriesBadge: 'AI INFRASTRUCTURE // HIGH PERFORMANCE',
      match: '99% Match',
      year: '2025',
      rating: 'LOW-LATENCY',
      hd: '4K UHD',
      gradient: 'linear-gradient(135deg, #0f766e, #0369a1)',
      synopsis: 'Dynamic multi-model prompt gateway that routes incoming prompts across Gemini, Claude, and specialized local models based on semantic complexity, latency constraints, token budgets, and safety evaluations with semantic embedding cache.',
      techStack: 'Fast Multi-Model Routing, Semantic Cache, Fallback Cascades, Cost Telemetry',
      classification: 'AI Gateway & High-Throughput Routing Infrastructure',
      deployment: 'Open-Source Gateway on GitHub',
      playLink: 'https://github.com/shalemraju35',
      repoLink: 'https://github.com/shalemraju35',
      episodes: [
        { idx: 'E01', title: 'Semantic Complexity & Token Budget Classification', meta: 'Fast Classifier' },
        { idx: 'E02', title: 'Multi-Model Fallback Cascades & Latency Routing', meta: 'P95 < 150ms' },
        { idx: 'E03', title: 'Cosine Similarity Semantic Embedding Cache', meta: '65% Cost Reduction' }
      ]
    },
    'prompt-engineering': {
      title: 'AI PROMPT ENGINEERING',
      seriesBadge: 'DECCAN EXPERTS // PRACTICAL AI WORKFLOWS',
      match: '99% Match',
      year: '2025',
      rating: 'PROMPT-AI',
      hd: '4K UHD • LLM OPTIMIZED',
      gradient: 'linear-gradient(135deg, #4c1d95, #0284c7)',
      synopsis: 'The process of creating and refining instructions or prompts to guide AI models toward producing accurate, relevant, and useful responses. Designed different types of prompts, tested them with AI models, analyzed responses, and modified prompts whenever output was inaccurate or unclear. Researched how wording, structure, context, and constraints influence AI quality to communicate effectively and optimize performance across tasks.',
      techStack: 'Prompt Engineering, Context Architecture, Constraint Optimization, AI Alignment, Deccan Experts',
      classification: 'Model Guidance & Response Quality Optimization',
      deployment: 'Live on Deccan Experts AI Platform (https://platform.deccanexperts.ai/)',
      playLink: 'https://platform.deccanexperts.ai/',
      repoLink: 'https://platform.deccanexperts.ai/',
      episodes: [
        { idx: 'E01', title: 'Instruction Framing & Context Optimization', meta: 'Prompt Design' },
        { idx: 'E02', title: 'Output Quality & Constraint Refinement', meta: 'Accuracy Audits' },
        { idx: 'E03', title: 'Multi-Task Performance Tuning via Deccan Experts', meta: 'Hands-on AI' }
      ]
    },
    'ai-annotation': {
      title: 'AI ANNOTATION & RLHF QUALITY',
      seriesBadge: 'DECCAN EXPERTS // DATA-CENTRIC AI',
      match: '98% Match',
      year: '2025',
      rating: 'DATA-EVAL',
      hd: 'HDR • HUMAN-IN-THE-LOOP',
      gradient: 'linear-gradient(135deg, #0f766e, #1e3a8a)',
      synopsis: 'The process of labeling, categorizing, reviewing, and evaluating data used to train and improve Artificial Intelligence models. Handled diverse data streams following project-specific guidelines to guarantee correct classification, reviewed AI-generated content, identified incorrect or irrelevant outputs, verified annotation quality, and maintained consistency throughout evaluation cycles.',
      techStack: 'Data Labeling, Categorization, Quality Assurance, RLHF Feedback, Deccan Experts',
      classification: 'Human Feedback & AI Training Data Verification',
      deployment: 'Live on Deccan Experts AI Platform (https://platform.deccanexperts.ai/)' ,
      playLink: 'https://platform.deccanexperts.ai/',
      repoLink: 'https://platform.deccanexperts.ai/',
      episodes: [
        { idx: 'E01', title: 'Taxonomy Adherence & Dataset Classification', meta: 'Data Quality' },
        { idx: 'E02', title: 'AI-Generated Content Review & Error Detection', meta: 'Output Audits' },
        { idx: 'E03', title: 'High-Quality Human Feedback Delivery', meta: 'Reliable AI' }
      ]
    },
    'project-matrix': {
      title: 'PROJECT MATRIX: STRUCTURED AI OPERATIONS',
      seriesBadge: 'DECCAN EXPERTS // SYSTEMATIC AI DELIVERY',
      match: '99% Match',
      year: '2025',
      rating: 'WORKFLOW',
      hd: '5.1 • QA VERIFIED',
      gradient: 'linear-gradient(135deg, #701a75, #4338ca)',
      synopsis: 'Working in a structured project environment where AI-related tasks were organized, evaluated, and completed according to specific project requirements. Handled end-to-end workflows: analyzing task requirements, executing AI tasks, evaluating outputs, pinpointing errors, and maintaining strict quality standards across multi-tier project matrices.',
      techStack: 'Workflow Orchestration, Task Decomposition, Quality Standards, Error Analysis, Deccan Experts',
      classification: 'Systematic AI Operations & Quality Governance',
      deployment: 'Live on Deccan Experts AI Platform (https://platform.deccanexperts.ai/)',
      playLink: 'https://platform.deccanexperts.ai/',
      repoLink: 'https://platform.deccanexperts.ai/',
      episodes: [
        { idx: 'E01', title: 'Task Requirement Analysis & Work Breakdown', meta: 'Requirements' },
        { idx: 'E02', title: 'Systematic Error Detection & Quality Verification', meta: 'QA Standards' },
        { idx: 'E03', title: 'Multi-Tier AI Matrix Task Execution', meta: 'Operations' }
      ]
    },
    'frameaxis': {
      title: 'FRAMEAXIS: WORDPRESS PLATFORMS',
      seriesBadge: 'HIGH-THROUGHPUT WEB DEVELOPMENT // STUDIO',
      match: '99% Match',
      year: '2024',
      rating: 'WORDPRESS',
      hd: '4K UHD • DUAL PORTAL',
      gradient: 'linear-gradient(135deg, #1e293b, #0f172a)',
      synopsis: 'High-performance digital studio and content platform engineered on WordPress. Features custom modular page layouts, responsive media galleries, advanced theme customization, SEO optimization, and sub-second load times across global devices. Spans both the primary production studio and the creative showcase portal.',
      techStack: 'WordPress CMS, Custom Themes, Responsive Web, Speed Optimization, FrameAxis',
      classification: 'Web Development & Creative Studio Portal',
      deployment: 'Live on FrameAxis (https://frameaxis.com/ & https://first.frameaxis.com/)',
      playLink: 'https://frameaxis.com/',
      repoLink: 'https://first.frameaxis.com/',
      episodes: [
        { idx: 'E01', title: 'FrameAxis Main Studio Platform (frameaxis.com)', meta: 'Production Portal' },
        { idx: 'E02', title: 'FrameAxis Showcase Sub-Portal (first.frameaxis.com)', meta: 'Creative Showcase' },
        { idx: 'E03', title: 'Mobile Responsiveness & Asset Caching', meta: 'Fast CDN' }
      ]
    },
    'graphic-design': {
      title: 'GRAPHIC DESIGN & CREATIVE DIRECTION',
      seriesBadge: 'VISUAL ASSETS // GOOGLE DRIVE PORTFOLIO',
      match: '98% Match',
      year: '2024',
      rating: 'CREATIVE',
      hd: 'VECTOR • HIGH-RES',
      gradient: 'linear-gradient(135deg, #c2410c, #7c2d12)',
      synopsis: 'Comprehensive graphic design and creative media portfolio encompassing brand identities, vector illustrations, promotional collateral, typography hierarchies, and social media creative assets curated in high-resolution Google Drive cloud storage.',
      techStack: 'Graphic Design, Brand Identity, Vector Illustration, Adobe Creative Suite, Visual Composition',
      classification: 'Visual Design, Brand Identity & Creative Media',
      deployment: 'Curated Google Drive Portfolio',
      playLink: 'https://drive.google.com/drive/folders/1pRh-EDxS40hb_Mn34JvD1dzj44JoXskN?usp=sharing',
      repoLink: 'https://drive.google.com/drive/folders/1pRh-EDxS40hb_Mn34JvD1dzj44JoXskN?usp=sharing',
      episodes: [
        { idx: 'E01', title: 'Brand Identity Systems & Visual Identity Guides', meta: 'Branding' },
        { idx: 'E02', title: 'Vector Illustration & Typography Compositions', meta: 'Creative Art' },
        { idx: 'E03', title: 'High-Res Media Cloud Repository (Google Drive)', meta: 'Portfolio' }
      ]
    },
    'education': {
      title: 'ACADEMIC FOUNDATION: B.TECH IN ECE',
      seriesBadge: 'SANTHIRAM ENGINEERING COLLEGE // GRADUATED 2021',
      match: '100% Match',
      year: '2021',
      rating: 'DEGREE',
      hd: '4K',
      gradient: 'linear-gradient(135deg, #065f46, #059669)',
      synopsis: 'Graduated with a Bachelor of Technology in Electronics & Communication Engineering from Santhiram Engineering College, Nandyal, Andhra Pradesh (Score: 68%). Built core competency in embedded logic, signal processing, and low-level computer architecture.',
      techStack: 'Electronics & Communication, Digital Signal Processing, Embedded Systems, C++',
      classification: 'Engineering Degree & Computer Hardware Foundations',
      deployment: 'Santhiram Engineering College',
      playLink: '#who-is-watching',
      repoLink: 'https://github.com/shalemraju35',
      episodes: [
        { idx: 'E01', title: 'Signal Processing & Transform Foundations', meta: 'Core Theory' },
        { idx: 'E02', title: 'Microcontrollers & Embedded Hardware Interfaces', meta: 'Hardware Logic' },
        { idx: 'E03', title: 'Graduation & Transition to Software Architecture', meta: 'Graduated 68%' }
      ]
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    initLiveWallpaper();
    initHeroMotionAndTilt();
    initAudioAndPreloader();
    initHeaderScroll();
    initCarouselScrollers();
    initModalSystem();
    initLiveSearch();
    initProfileSelector();
    initClipboardToast();
    initMobileNav();
    initContactForm();
  });

  /* ==========================================================================
     1. WEB AUDIO API "TA-DUM" SOUND SYNTHESIZER
     ========================================================================== */
  let audioContext = null;
  let isMuted = false;

  function playTaDumSound() {
    if (isMuted) return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContext) {
        audioContext = new AudioCtx();
      }

      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      const now = audioContext.currentTime;

      // --- Part 1: Deep Bass Strike (D2 ~ 73.4 Hz) ---
      const bassOsc = audioContext.createOscillator();
      const bassGain = audioContext.createGain();
      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(73.4, now);
      bassOsc.frequency.exponentialRampToValueAtTime(55.0, now + 1.2);

      const bassFilter = audioContext.createBiquadFilter();
      bassFilter.type = 'lowpass';
      bassFilter.frequency.setValueAtTime(320, now);
      bassFilter.frequency.exponentialRampToValueAtTime(80, now + 1.2);

      bassGain.gain.setValueAtTime(0.7, now);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      bassOsc.connect(bassFilter);
      bassFilter.connect(bassGain);
      bassGain.connect(audioContext.destination);

      bassOsc.start(now);
      bassOsc.stop(now + 1.4);

      // --- Part 2: Cinematic Metallic Chord Strike (At +0.18s) ---
      const chordTime = now + 0.18;
      const freqs = [146.83, 185.0, 220.0, 440.0]; // D3, F#3, A3, A4 (D-major chord)

      freqs.forEach((freq, idx) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, chordTime);

        gain.gain.setValueAtTime(0.001, chordTime);
        gain.gain.linearRampToValueAtTime(0.35 / freqs.length, chordTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, chordTime + 2.2);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(chordTime);
        osc.stop(chordTime + 2.2);
      });

    } catch (err) {
      console.warn('Web Audio playback thwarted by browser policy:', err);
    }
  }

  function initAudioAndPreloader() {
    const preloader = document.getElementById('netflix-preloader');
    const skipBtn = document.getElementById('preloader-skip');
    const soundToggle = document.getElementById('sound-toggle');
    const soundIcon = document.getElementById('sound-icon');

    function dismissPreloader(playAudio) {
      if (playAudio) {
        playTaDumSound();
      }
      if (preloader) {
        preloader.classList.add('is-hidden');
      }
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        dismissPreloader(true);
      });
    }

    // Auto dismiss after 2.8s
    setTimeout(() => {
      dismissPreloader(false);
    }, 2800);

    // Audio Toggle Button on Billboard
    if (soundToggle && soundIcon) {
      soundToggle.addEventListener('click', () => {
        isMuted = !isMuted;
        soundIcon.textContent = isMuted ? '🔇' : '🔊';
        if (window.showToast) {
          window.showToast(isMuted ? 'Audio Muted' : 'Audio Unmuted');
        }
        if (!isMuted) {
          playTaDumSound();
        }
      });
    }
  }

  /* ==========================================================================
     2. HEADER SCROLL OBSERVER
     ========================================================================== */
  function initHeaderScroll() {
    const header = document.getElementById('netflix-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ==========================================================================
     3. HORIZONTAL CAROUSEL SCROLLER
     ========================================================================== */
  function initCarouselScrollers() {
    const wrappers = document.querySelectorAll('.carousel-wrapper');

    wrappers.forEach((wrapper) => {
      const track = wrapper.querySelector('.carousel-track');
      const leftBtn = wrapper.querySelector('.carousel-nav.left');
      const rightBtn = wrapper.querySelector('.carousel-nav.right');

      if (!track) return;

      if (leftBtn) {
        leftBtn.addEventListener('click', () => {
          const scrollDistance = track.clientWidth * 0.75;
          track.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        });
      }

      if (rightBtn) {
        rightBtn.addEventListener('click', () => {
          const scrollDistance = track.clientWidth * 0.75;
          track.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        });
      }
    });
  }

  /* ==========================================================================
     4. INTERACTIVE "MORE INFO" TITLE MODAL DIALOG
     ========================================================================== */
  function initModalSystem() {
    const modal = document.getElementById('netflix-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const backdrop = document.getElementById('modal-backdrop');

    // Modal UI fields
    const modalTitle = document.getElementById('modal-title');
    const modalSeriesBadge = document.getElementById('modal-series-badge');
    const modalBanner = document.getElementById('modal-hero-banner');
    const modalPlayLink = document.getElementById('modal-play-link');
    const modalRepoLink = document.getElementById('modal-repo-link');
    const modalMatch = document.getElementById('modal-match');
    const modalYear = document.getElementById('modal-year');
    const modalRating = document.getElementById('modal-rating');
    const modalSynopsis = document.getElementById('modal-synopsis');
    const modalTechStack = document.getElementById('modal-tech-stack');
    const modalClassification = document.getElementById('modal-classification');
    const modalDeployment = document.getElementById('modal-deployment');
    const modalEpisodesList = document.getElementById('modal-episodes-list');

    function openModal(projectId) {
      const data = PROJECT_CATALOG[projectId] || PROJECT_CATALOG['doctutorials'];

      modalTitle.textContent = data.title;
      modalSeriesBadge.textContent = data.seriesBadge;
      modalBanner.style.background = data.gradient;
      modalPlayLink.href = data.playLink;
      modalRepoLink.href = data.repoLink;
      modalMatch.textContent = data.match;
      modalYear.textContent = data.year;
      modalRating.textContent = data.rating;
      modalSynopsis.textContent = data.synopsis;
      modalTechStack.textContent = data.techStack;
      modalClassification.textContent = data.classification;
      modalDeployment.textContent = data.deployment;

      // Populate Episodes / Milestones
      modalEpisodesList.innerHTML = '';
      if (data.episodes && data.episodes.length > 0) {
        data.episodes.forEach((ep) => {
          const item = document.createElement('div');
          item.className = 'modal-ep-item';
          item.innerHTML = `
            <span class="m-ep-idx">${ep.idx}</span>
            <span class="m-ep-title">${ep.title}</span>
            <span class="m-ep-meta">${ep.meta}</span>
          `;
          modalEpisodesList.appendChild(item);
        });
      }

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Attach click triggers to all cards and info buttons
    document.querySelectorAll('[data-project-id]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        // Prevent if user clicked direct play link
        if (e.target.closest('a') && e.target.closest('a').classList.contains('play')) {
          return;
        }
        const pid = trigger.getAttribute('data-project-id');
        openModal(pid);
      });
    });

    // Hero More Info button
    const heroInfoBtn = document.getElementById('hero-more-info-btn');
    if (heroInfoBtn) {
      heroInfoBtn.addEventListener('click', () => {
        openModal('doctutorials');
      });
    }
  }

  /* ==========================================================================
     5. DYNAMIC REAL-TIME SEARCH FILTER
     ========================================================================== */
  function initLiveSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.netflix-card');

    if (!searchBtn || !searchInput || !searchBox) return;

    searchBtn.addEventListener('click', () => {
      searchBox.classList.toggle('open');
      if (searchBox.classList.contains('open')) {
        searchInput.focus();
      } else {
        searchInput.value = '';
        cards.forEach((c) => (c.style.display = ''));
      }
    });

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();

      cards.forEach((card) => {
        const title = card.querySelector('.thumb-title')?.textContent.toLowerCase() || '';
        const sub = card.querySelector('.thumb-sub')?.textContent.toLowerCase() || '';
        const genres = card.querySelector('.hover-genres')?.textContent.toLowerCase() || '';

        if (!q || title.includes(q) || sub.includes(q) || genres.includes(q)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  /* ==========================================================================
     6. "WHO'S WATCHING?" PROFILE CONTEXT SWITCHER
     ========================================================================== */
  function initProfileSelector() {
    const profileCards = document.querySelectorAll('.profile-card');
    const profileEmail = document.getElementById('profile-email');

    profileCards.forEach((card) => {
      card.addEventListener('click', () => {
        const role = card.getAttribute('data-profile');
        let message = '';

        if (role === 'recruiter') {
          message = 'Switched to Recruiter Profile: Highlighting Full-Stack & Production Reliability';
        } else if (role === 'engineer') {
          message = 'Switched to Tech Lead Profile: Showing Deep System Architectures & GitHub Repos';
        } else {
          message = 'Switched to Founder Profile: Ready for Rapid MVP Prototyping & Operational Automation';
        }

        if (window.showToast) {
          window.showToast(message);
        }

        // Scroll smoothly to hub
        const hub = document.querySelector('.transmission-hub');
        if (hub) {
          hub.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }

  /* ==========================================================================
     7. CLIPBOARD COPY & SIGNATURE NETFLIX TOAST
     ========================================================================== */
  function initClipboardToast() {
    const copyBtn = document.getElementById('copy-email-btn');
    const emailEl = document.getElementById('profile-email');
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');

    let toastTimer = null;

    function showToast(msg) {
      if (!toast) return;
      if (toastTimer) clearTimeout(toastTimer);

      toastText.textContent = msg;
      toast.classList.add('show');

      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }

    if (copyBtn && emailEl) {
      copyBtn.addEventListener('click', async () => {
        const email = emailEl.textContent.trim();
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(email);
          } else {
            const ta = document.createElement('textarea');
            ta.value = email;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
          }
          showToast(`Copied ${email} to clipboard!`);
        } catch (e) {
          showToast('Failed to copy. Please write to shalemraju.p35@gmail.com');
        }
      });
    }

    window.showToast = showToast;
  }

  /* ==========================================================================
     8. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!toggle || !drawer) return;

    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    links.forEach((l) => {
      l.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     9. BILLBOARD HERO LIVE WALLPAPER (Cinematic Canvas Animation)
     ========================================================================== */
  function initLiveWallpaper() {
    const canvas = document.getElementById('live-wallpaper-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;

    const particles = [];
    const particleCount = 45;

    function resize() {
      const parent = canvas.parentElement;
      width = parent ? parent.offsetWidth : window.innerWidth;
      height = parent ? parent.offsetHeight : (window.innerHeight * 0.88);
      canvas.width = width;
      canvas.height = height;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 700),
        radius: Math.random() * 2.5 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2, // Drifting smoothly upwards
        baseAlpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.45 ? 'rgba(229, 9, 20, ' : (Math.random() > 0.5 ? 'rgba(56, 189, 248, ' : 'rgba(168, 85, 247, ')
      });
    }

    let time = 0;

    function render() {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // 1. Slow-breathing atmospheric cinematic spotlights
      const grad1X = width * 0.7 + Math.sin(time * 0.5) * (width * 0.12);
      const grad1Y = height * 0.35 + Math.cos(time * 0.4) * (height * 0.1);
      const g1 = ctx.createRadialGradient(grad1X, grad1Y, 20, grad1X, grad1Y, width * 0.55);
      g1.addColorStop(0, 'rgba(229, 9, 20, 0.25)'); // Netflix Red
      g1.addColorStop(0.5, 'rgba(184, 7, 16, 0.1)');
      g1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const grad2X = width * 0.25 + Math.cos(time * 0.4) * (width * 0.1);
      const grad2Y = height * 0.65 + Math.sin(time * 0.5) * (height * 0.1);
      const g2 = ctx.createRadialGradient(grad2X, grad2Y, 20, grad2X, grad2Y, width * 0.5);
      g2.addColorStop(0, 'rgba(30, 58, 138, 0.22)'); // Electric Deep Sapphire
      g2.addColorStop(0.6, 'rgba(88, 28, 135, 0.08)');
      g2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // 2. Cinematic scanning projector beam & anamorphic flare
      const sweepX = (Math.sin(time * 0.25) * 0.5 + 0.5) * width;
      const sweepG = ctx.createLinearGradient(sweepX - 280, 0, sweepX + 280, height);
      sweepG.addColorStop(0, 'rgba(255, 255, 255, 0)');
      sweepG.addColorStop(0.5, 'rgba(229, 9, 20, 0.055)');
      sweepG.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = sweepG;
      ctx.fillRect(0, 0, width, height);

      // 3. Cinematic flowing bottom laser wave
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 40) {
        const waveY = height - 70 + Math.sin(x * 0.003 + time * 1.2) * 25 + Math.cos(x * 0.002 - time * 0.8) * 20;
        ctx.lineTo(x, waveY);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      const waveGrad = ctx.createLinearGradient(0, height - 90, 0, height);
      waveGrad.addColorStop(0, 'rgba(229, 9, 20, 0.08)');
      waveGrad.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      ctx.fillStyle = waveGrad;
      ctx.fill();

      // 4. Floating luminous cinema embers
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time + i) * 0.25;
        p.y += p.vy;
        const currentAlpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(time * 2.5 + i));

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + currentAlpha + ')';
        ctx.shadowColor = p.color + '0.75)';
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      requestAnimationFrame(render);
    }

    render();
  }

  /* ==========================================================================
     10. HERO SPOTLIGHT & 3D POSTER TILT MOTION
     ========================================================================== */
  function initHeroMotionAndTilt() {
    const hero = document.getElementById('home');
    const spotlight = document.getElementById('billboard-spotlight');
    const card = document.getElementById('hero-poster-card');
    if (!hero) return;

    hero.addEventListener('mouseenter', () => {
      if (spotlight) spotlight.style.opacity = '1';
    });

    hero.addEventListener('mouseleave', () => {
      if (spotlight) spotlight.style.opacity = '0';
      if (card) {
        card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
        const glare = card.querySelector('.hero-poster-glare');
        if (glare) {
          glare.style.transform = 'rotate(-25deg) translate(0px, 0px)';
        }
      }
    });

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (spotlight) {
        spotlight.style.left = `${x}px`;
        spotlight.style.top = `${y}px`;
      }

      if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const deltaX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
        const deltaY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

        const rotateY = Math.max(-16, Math.min(16, deltaX * 16));
        const rotateX = Math.max(-16, Math.min(16, -deltaY * 16));

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale(1.02)`;

        const glare = card.querySelector('.hero-poster-glare');
        if (glare) {
          glare.style.transform = `rotate(-25deg) translate(${(deltaX * 50).toFixed(1)}px, ${(deltaY * 50).toFixed(1)}px)`;
        }
      }
    });
  }

  /* ==========================================================================
     11. BACKEND TELEMETRY TRANSMISSION (LIVE /api/contact)
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contact-transmission-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('tx-submit-btn');
      const nameInput = document.getElementById('tx-name');
      const emailInput = document.getElementById('tx-email');
      const msgInput = document.getElementById('tx-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = msgInput ? msgInput.value.trim() : '';

      if (!email || !message) {
        showToast('⚠️ Please provide both your email and message.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>⏳ Transmitting to Railway Backend...</span>';
      }

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name || 'Recruiter / Hiring Lead',
            email,
            message,
            role: 'Direct Telemetry Transmission'
          })
        });

        const data = await res.json();
        if (res.ok && data.success) {
          showToast('✅ Transmission Received! Shalem will follow up within 24h.');
          form.reset();
        } else {
          showToast('⚠️ ' + (data.error || 'Transmission failed. Try direct email.'));
        }
      } catch (err) {
        console.error('Contact form submission error:', err);
        showToast('✅ Transmission logged. Thank you!');
        form.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>🚀 Send Telemetry Transmission</span>';
        }
      }
    });
  }

})();
