const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Middlewares
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  try {
    fs.mkdirSync(dataDir, { recursive: true });
  } catch (err) {
    console.error('Data directory initialization error:', err);
  }
}

// Disable caching for HTML, CSS, JS in development/inspection
app.use((req, res, next) => {
  if (req.path.endsWith('.html') || req.path.endsWith('.css') || req.path.endsWith('.js')) {
    res.set({
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
  } else if (req.path.startsWith('/assets/')) {
    res.set('Cache-Control', 'public, max-age=86400'); // Cache images for 24h
  }
  next();
});

// Serve static assets from project root
app.use(express.static(__dirname));

/* ==========================================================================
   REST API ENDPOINTS
   ========================================================================== */

// 1. System Health Check Endpoint (Required by Railway & Uptime Monitors)
app.get(['/health', '/api/health'], (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'shalem-raju-portfolio',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: `${process.uptime().toFixed(1)}s`,
    environment: process.env.NODE_ENV || 'production',
    author: 'Pobbathi Shalem Raju'
  });
});

// 2. Profile Telemetry Endpoint
app.get('/api/profile', (req, res) => {
  res.status(200).json({
    name: 'Pobbathi Shalem Raju',
    headline: 'Technical Operations Specialist ➔ Full-Stack & AI Systems Builder',
    email: 'shalemraju.p35@gmail.com',
    phone: '+91-9550915931',
    github: 'https://github.com/shalemraju35',
    linkedin: 'https://www.linkedin.com/in/shalemraju-pobbathi-83a090151',
    location: 'Hyderabad, Telangana, India',
    education: {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Santhiram Engineering College',
      graduated: '2021 (68%)'
    },
    metrics: {
      liveDeployments: 6,
      aiWorkflows: 3,
      awards: 'National Viswakarma Award'
    }
  });
});

// 3. Project Catalog Endpoint
app.get('/api/projects', (req, res) => {
  res.status(200).json({
    flagshipProduction: [
      {
        id: 'doctutorials',
        title: 'DocTutorials: Quiz Analytics Platform',
        role: 'Full-Stack Lead & Operations Architect',
        status: 'Production Live',
        url: 'https://doctutorials-quiz-dashboard-production.up.railway.app/'
      },
      {
        id: 'b2b-dashboard',
        title: 'DocTutorials B2B Partner Studio Dashboard',
        role: 'Full-Stack Architecture',
        status: 'Production Live',
        url: 'https://studio-dashboard-production-ec48.up.railway.app/'
      },
      {
        id: 'talent-scout',
        title: 'Autonomous Talent Scouting Agent',
        role: 'AI Agent Developer (Deccan AI Catalyst)',
        status: 'Production Live',
        url: 'https://talent-scout-ai-production.up.railway.app/'
      },
      {
        id: 'smart-farming',
        title: 'Smart Value Farming Platform',
        role: 'National Viswakarma Award Winner',
        status: 'Production Live',
        url: 'https://smart-value-farming-production.up.railway.app/'
      },
      {
        id: 'regional-ecommerce',
        title: 'Regional Connect Hyperlocal E-Commerce',
        role: 'National Viswakarma Award Winner',
        status: 'Production Live',
        url: 'https://regional-connect-ecommerce-production.up.railway.app/'
      },
      {
        id: 'ai-benchmarking',
        title: 'AI Model Benchmarking Platform',
        role: 'AI Evaluation & ML Performance',
        status: 'Production Live',
        url: 'https://platform.deccanexperts.ai/'
      }
    ],
    aiWorkflows: [
      {
        id: 'prompt-engineering',
        title: 'AI Prompt Engineering',
        organization: 'Deccan Experts',
        url: 'https://platform.deccanexperts.ai/'
      },
      {
        id: 'ai-annotation',
        title: 'AI Annotation & RLHF Quality',
        organization: 'Deccan Experts',
        url: 'https://platform.deccanexperts.ai/'
      },
      {
        id: 'project-matrix',
        title: 'Project Matrix: Structured AI Operations',
        organization: 'Deccan Experts',
        url: 'https://platform.deccanexperts.ai/'
      }
    ],
    webPlatforms: [
      {
        id: 'frameaxis',
        title: 'FrameAxis Platform (WordPress Web Development)',
        url: 'https://frameaxis.com/'
      },
      {
        id: 'graphic-design',
        title: 'Graphic Design & Creative Direction Portfolio',
        url: 'https://drive.google.com/drive/folders/1pRh-EDxS40hb_Mn34JvD1dzj44JoXskN?usp=sharing'
      }
    ]
  });
});

// 4. Contact & Transmission Telemetry Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, role, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide both email and message.'
    });
  }

  const submission = {
    id: `tx_${Date.now()}`,
    name: name || 'Anonymous Recruiter',
    email,
    role: role || 'Hiring Team / Engineering Lead',
    message,
    timestamp: new Date().toISOString()
  };

  console.log(`📩 New Telemetry Transmission received from ${email} (${role || 'Unspecified'}):`, message);

  // Append to local JSON file
  const contactsFile = path.join(dataDir, 'contacts.json');
  let contacts = [];
  try {
    if (fs.existsSync(contactsFile)) {
      const existing = fs.readFileSync(contactsFile, 'utf8');
      contacts = JSON.parse(existing || '[]');
    }
    contacts.push(submission);
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to append transmission to storage:', err);
  }

  return res.status(200).json({
    success: true,
    message: 'Transmission successfully logged. Shalem Raju will review and establish contact within 24 hours.',
    transmissionId: submission.id
  });
});

// SPA Fallback: Serve index.html for any client navigation
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
const server = app.listen(PORT, HOST, () => {
  console.log(`🚀 Shalem Raju Production Portfolio running on http://${HOST}:${PORT}`);
  console.log(`📡 Healthcheck available at: http://${HOST}:${PORT}/health`);
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

module.exports = app;
