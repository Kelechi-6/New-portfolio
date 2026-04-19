export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Timothy - Frontend Developer</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-primary: #06060f;
    --bg-secondary: #0c0c1d;
    --bg-card: rgba(15, 15, 35, 0.6);
    --accent: #7c5cfc;
    --accent-light: #a78bfa;
    --accent-glow: rgba(124, 92, 252, 0.3);
    --gold: #f0c56d;
    --text-primary: #f0eef6;
    --text-secondary: #9490b0;
    --text-muted: #5e5a78;
    --glass-bg: rgba(15, 15, 40, 0.45);
    --glass-border: rgba(124, 92, 252, 0.12);
    --gradient-hero: linear-gradient(135deg, #7c5cfc 0%, #e879a8 50%, #f0c56d 100%);
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    --transition: cubic-bezier(0.16, 1, 0.3, 1);
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: var(--font-body);
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ---- LOADER ---- */
  .loader {
    position: fixed;
    inset: 0;
    z-index: 10000;
    background: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    transition: opacity 0.6s ease, visibility 0.6s ease;
  }

  .loader.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .loader-ring {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 3px solid rgba(124, 92, 252, 0.1);
    border-top-color: var(--accent);
    animation: spin 0.9s linear infinite;
  }

  .loader-text {
    font-family: var(--font-heading);
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--text-secondary);
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ---- CUSTOM CURSOR ---- */
  .cursor-dot {
    position: fixed;
    width: 8px;
    height: 8px;
    background: var(--accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease, opacity 0.3s ease;
    mix-blend-mode: screen;
  }

  .cursor-ring {
    position: fixed;
    width: 36px;
    height: 36px;
    border: 1.5px solid rgba(124, 92, 252, 0.4);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: width 0.3s var(--transition), height 0.3s var(--transition), border-color 0.3s ease;
  }

  .cursor-ring.hover {
    width: 56px;
    height: 56px;
    border-color: var(--accent);
  }

  @media (pointer: coarse) {
    .cursor-dot, .cursor-ring { display: none; }
  }

  /* ---- NAVBAR ---- */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 0 48px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease;
  }

  .navbar.scrolled {
    background: rgba(6, 6, 15, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 var(--glass-border);
  }

  .nav-logo {
    font-family: var(--font-heading);
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.5px;
  }

  .nav-logo span {
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 36px;
    list-style: none;
  }

  .nav-links a {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
    letter-spacing: 0.2px;
  }

  .nav-links a:hover {
    color: var(--text-primary);
  }

  .nav-cta {
    padding: 10px 24px;
    background: var(--accent);
    color: #fff !important;
    border-radius: 10px;
    font-weight: 600 !important;
    font-size: 13px !important;
    transition: background 0.3s ease, transform 0.3s var(--transition), box-shadow 0.3s ease !important;
  }

  .nav-cta:hover {
    background: #6a48e8;
    transform: translateY(-1px);
    box-shadow: 0 6px 24px var(--accent-glow);
  }

  .nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .nav-toggle span {
    width: 22px;
    height: 2px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .theme-toggle {
    background: none;
    border: 1.5px solid var(--glass-border);
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 16px;
    transition: all 0.3s ease;
  }

  .theme-toggle:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  /* ---- HERO ---- */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 48px 80px;
    overflow: hidden;
  }

  #hero-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .hero-gradient {
    position: absolute;
    bottom: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 600px;
    background: radial-gradient(ellipse, rgba(124, 92, 252, 0.12) 0%, rgba(232, 121, 168, 0.06) 40%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 32px;
    backdrop-filter: blur(10px);
  }

  .hero-badge-dot {
    width: 7px;
    height: 7px;
    background: #4ade80;
    border-radius: 50%;
    animation: pulse-dot 2s ease infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -2px;
    margin-bottom: 24px;
    color: var(--text-primary);
  }

  .hero-title .highlight {
    background: var(--gradient-hero);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: clamp(16px, 2vw, 19px);
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 540px;
    margin: 0 auto 44px;
    font-weight: 400;
  }

  .hero-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    border-radius: 12px;
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: all 0.35s var(--transition);
  }

  .btn-primary {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 4px 20px var(--accent-glow);
  }

  .btn-primary:hover {
    background: #6a48e8;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(124, 92, 252, 0.4);
  }

  .btn-secondary {
    background: var(--glass-bg);
    color: var(--text-primary);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
  }

  .btn-secondary:hover {
    border-color: var(--accent);
    background: rgba(124, 92, 252, 0.08);
    transform: translateY(-2px);
  }

  .hero-scroll {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: float 3s ease infinite;
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--accent), transparent);
  }

  @keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }

  /* ---- SECTIONS ---- */
  .section {
    padding: 120px 48px;
    position: relative;
  }

  .section-header {
    text-align: center;
    margin-bottom: 72px;
  }

  .section-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
    display: block;
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700;
    letter-spacing: -1px;
    color: var(--text-primary);
    margin-bottom: 16px;
  }

  .section-desc {
    font-size: 16px;
    color: var(--text-secondary);
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* ---- ABOUT ---- */
  .about-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: center;
  }

  .about-text h3 {
    font-family: var(--font-heading);
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
  }

  .about-text p {
    font-size: 15px;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .skill-card {
    padding: 20px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 14px;
    backdrop-filter: blur(10px);
    transition: all 0.4s var(--transition);
    cursor: default;
  }

  .skill-card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(124, 92, 252, 0.1);
  }

  .skill-card-name {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 10px;
    color: var(--text-primary);
  }

  .skill-bar {
    height: 4px;
    background: rgba(124, 92, 252, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }

  .skill-bar-fill {
    height: 100%;
    background: var(--gradient-hero);
    border-radius: 4px;
    width: 0;
    transition: width 1.2s var(--transition);
  }

  .about-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-card-3d {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 4/5;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    backdrop-filter: blur(20px);
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.5s var(--transition);
  }

  .about-card-3d::before {
    content: '';
    position: absolute;
    top: -60%;
    left: -60%;
    width: 220%;
    height: 220%;
    background: conic-gradient(from 180deg, transparent 0%, var(--accent) 10%, transparent 20%);
    animation: card-rotate 8s linear infinite;
    opacity: 0.06;
  }

  @keyframes card-rotate {
    to { transform: rotate(360deg); }
  }

  .about-card-emoji {
    font-size: 64px;
    margin-bottom: 24px;
  }

  .about-card-name {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .about-card-role {
    font-size: 14px;
    color: var(--accent-light);
    font-weight: 500;
    margin-bottom: 20px;
  }

  .about-card-stats {
    display: flex;
    gap: 24px;
  }

  .about-stat {
    text-align: center;
  }

  .about-stat-num {
    font-family: var(--font-heading);
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .about-stat-label {
    font-size: 11px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* ---- PROJECTS ---- */
  .projects-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 28px;
  }

  .project-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    transition: all 0.5s var(--transition);
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .project-card:hover {
    transform: translateY(-8px);
    border-color: rgba(124, 92, 252, 0.25);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px var(--accent-glow);
  }

  .project-img {
    width: 100%;
    aspect-ratio: 16/10;
    background: var(--bg-secondary);
    position: relative;
    overflow: hidden;
  }

  .project-img-inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    transition: transform 0.5s var(--transition);
  }

  .project-card:hover .project-img-inner {
    transform: scale(1.05);
  }

  .project-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, rgba(6, 6, 15, 0.8));
  }

  .project-body {
    padding: 28px;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .project-tag {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 5px 12px;
    background: rgba(124, 92, 252, 0.08);
    color: var(--accent-light);
    border-radius: 6px;
  }

  .project-title {
    font-family: var(--font-heading);
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: -0.3px;
  }

  .project-desc {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .project-links {
    display: flex;
    gap: 12px;
  }

  .project-link {
    font-size: 13px;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.3s var(--transition);
  }

  .project-link-primary {
    background: var(--accent);
    color: #fff;
  }

  .project-link-primary:hover {
    background: #6a48e8;
    box-shadow: 0 4px 16px var(--accent-glow);
  }

  .project-link-secondary {
    background: rgba(124, 92, 252, 0.08);
    color: var(--accent-light);
    border: 1px solid var(--glass-border);
  }

  .project-link-secondary:hover {
    border-color: var(--accent);
  }

  /* ---- SERVICES ---- */
  .services-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .service-card {
    padding: 40px 32px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    transition: all 0.5s var(--transition);
    position: relative;
    overflow: hidden;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-hero);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s var(--transition);
  }

  .service-card:hover::before {
    transform: scaleX(1);
  }

  .service-card:hover {
    transform: translateY(-6px);
    border-color: rgba(124, 92, 252, 0.2);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  }

  .service-icon {
    width: 56px;
    height: 56px;
    background: rgba(124, 92, 252, 0.08);
    border: 1px solid rgba(124, 92, 252, 0.15);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 24px;
    transition: all 0.4s var(--transition);
  }

  .service-card:hover .service-icon {
    background: rgba(124, 92, 252, 0.15);
    transform: scale(1.05);
  }

  .service-title {
    font-family: var(--font-heading);
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: -0.3px;
  }

  .service-desc {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  /* ---- CONTACT ---- */
  .contact-wrapper {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }

  .contact-info {
    padding: 40px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    backdrop-filter: blur(10px);
  }

  .contact-info h3 {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .contact-info p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 32px;
  }

  .contact-detail {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .contact-detail-icon {
    width: 44px;
    height: 44px;
    background: rgba(124, 92, 252, 0.08);
    border: 1px solid rgba(124, 92, 252, 0.12);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }

  .contact-detail-text {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .contact-detail-text strong {
    display: block;
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 2px;
  }

  .social-links {
    display: flex;
    gap: 12px;
    margin-top: 32px;
  }

  .social-link {
    width: 44px;
    height: 44px;
    background: rgba(124, 92, 252, 0.06);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 18px;
    transition: all 0.3s var(--transition);
  }

  .social-link:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px var(--accent-glow);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    position: relative;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 16px 20px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 14px;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .form-group textarea {
    min-height: 140px;
    resize: vertical;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(124, 92, 252, 0.1);
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--text-muted);
  }

  .form-submit {
    padding: 16px 32px;
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 14px;
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.35s var(--transition);
  }

  .form-submit:hover {
    background: #6a48e8;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px var(--accent-glow);
  }

  /* ---- FOOTER ---- */
  .footer {
    padding: 40px 48px;
    border-top: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: var(--text-muted);
  }

  .footer a {
    color: var(--accent-light);
    text-decoration: none;
  }

  /* ---- REVEAL ANIMATIONS ---- */
  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.8s var(--transition), transform 0.8s var(--transition);
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  /* ---- MOBILE NAV OVERLAY ---- */
  .mobile-nav {
    position: fixed;
    inset: 0;
    z-index: 999;
    background: rgba(6, 6, 15, 0.95);
    backdrop-filter: blur(24px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease;
  }

  .mobile-nav.open {
    opacity: 1;
    visibility: visible;
  }

  .mobile-nav a {
    font-family: var(--font-heading);
    font-size: 28px;
    font-weight: 600;
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .mobile-nav a:hover {
    color: var(--accent);
  }

  /* ---- RESPONSIVE ---- */
  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .section {
      padding: 80px 24px;
    }

    .hero {
      padding: 100px 24px 60px;
    }

    .navbar {
      padding: 0 24px;
    }

    .nav-links {
      display: none;
    }

    .nav-toggle {
      display: flex;
    }

    .about-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .about-visual {
      order: -1;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .contact-wrapper {
      grid-template-columns: 1fr;
    }

    .footer {
      flex-direction: column;
      gap: 12px;
      text-align: center;
      padding: 32px 24px;
    }

    .hero-title {
      letter-spacing: -1px;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .hero-buttons {
      flex-direction: column;
      width: 100%;
    }

    .btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
</head>
<body>

<!-- LOADER -->
<div class="loader" id="loader">
  <div class="loader-ring"></div>
  <div class="loader-text">Loading</div>
</div>

<!-- CURSOR -->
<div class="cursor-dot" id="cursorDot"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- NAVBAR -->
<nav class="navbar" id="navbar">
  <a href="#" class="nav-logo">Timothy<span>.</span></a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact" class="nav-cta">Get in Touch</a></li>
  </ul>
  <button class="theme-toggle" id="themeToggle" title="Toggle theme">☀</button>
  <button class="nav-toggle" id="navToggle">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav">
  <a href="#about" onclick="closeMobile()">About</a>
  <a href="#projects" onclick="closeMobile()">Projects</a>
  <a href="#services" onclick="closeMobile()">Services</a>
  <a href="#contact" onclick="closeMobile()">Contact</a>
</div>

<!-- HERO -->
<section class="hero" id="hero">
  <canvas id="hero-canvas"></canvas>
  <div class="hero-gradient"></div>
  <div class="hero-content">
    <div class="hero-badge reveal">
      <span class="hero-badge-dot"></span>
      Available for freelance work
    </div>
    <h1 class="hero-title reveal reveal-delay-1">
      Hi, I'm <span class="highlight">Timothy</span><br>Frontend Developer
    </h1>
    <p class="hero-subtitle reveal reveal-delay-2">
      I craft modern, responsive, and interactive web experiences that bring ideas to life with clean code and purposeful design.
    </p>
    <div class="hero-buttons reveal reveal-delay-3">
      <a href="#projects" class="btn btn-primary">View Projects ↓</a>
      <a href="#contact" class="btn btn-secondary">Contact Me</a>
    </div>
  </div>
  <div class="hero-scroll">
    Scroll
    <div class="scroll-line"></div>
  </div>
</section>

<!-- ABOUT -->
<section class="section" id="about">
  <div class="about-grid">
    <div class="about-text reveal">
      <span class="section-label">About Me</span>
      <h3>Designing the future,<br>one pixel at a time.</h3>
      <p>
        I'm a frontend developer with 5+ years of experience creating performant, accessible, and visually compelling web applications. I thrive at the intersection of design and engineering-turning complex ideas into elegant digital products.
      </p>
      <div class="skills-grid">
        <div class="skill-card reveal reveal-delay-1">
          <div class="skill-card-name">HTML & CSS</div>
          <div class="skill-bar"><div class="skill-bar-fill" data-width="95"></div></div>
        </div>
        <div class="skill-card reveal reveal-delay-2">
          <div class="skill-card-name">JavaScript</div>
          <div class="skill-bar"><div class="skill-bar-fill" data-width="92"></div></div>
        </div>
        <div class="skill-card reveal reveal-delay-3">
          <div class="skill-card-name">React / Next.js</div>
          <div class="skill-bar"><div class="skill-bar-fill" data-width="90"></div></div>
        </div>
        <div class="skill-card reveal reveal-delay-4">
          <div class="skill-card-name">Supabase</div>
          <div class="skill-bar"><div class="skill-bar-fill" data-width="82"></div></div>
        </div>
      </div>
    </div>
    <div class="about-visual reveal reveal-delay-2">
      <div class="about-card-3d" id="aboutCard">
        <div class="about-card-emoji">👨‍💻</</div>
        <div class="about-card-name">Timothy</div>
        <div class="about-card-role">Senior Frontend Developer</div>
        <div class="about-card-stats">
          <div class="about-stat">
            <div class="about-stat-num">2+</div>
            <div class="about-stat-label">Years</div>
          </div>
          <div class="about-stat">
            <div class="about-stat-num">3+</div>
            <div class="about-stat-label">Projects</div>
          </div>
          <div class="about-stat">
            <div class="about-stat-num">5+</div>
            <div class="about-stat-label">Clients</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section class="section" id="projects">
  <div class="section-header">
    <span class="section-label reveal">Selected Work</span>
    <h2 class="section-title reveal reveal-delay-1">Featured Projects</h2>
    <p class="section-desc reveal reveal-delay-2">A curated collection of recent work spanning web apps, design systems, and interactive experiences.</p>
  </div>
  <div class="projects-grid">

    <div class="project-card reveal">
      <div class="project-img">
        <div class="project-img-inner" style="background: linear-gradient(135deg, #1a1040, #3d1f6d, #7c5cfc); display:flex; align-items:center; justify-content:center;">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="10" y="16" width="60" height="48" rx="6" stroke="#a78bfa" stroke-width="2"/><circle cx="40" cy="40" r="12" stroke="#f0c56d" stroke-width="2"/><line x1="40" y1="28" x2="40" y2="52" stroke="#f0c56d" stroke-width="1.5" opacity="0.4"/><line x1="28" y1="40" x2="52" y2="40" stroke="#f0c56d" stroke-width="1.5" opacity="0.4"/></svg>
        </div>
        <div class="project-img-overlay"></div>
      </div>
      <div class="project-body">
        <div class="project-tags">
          <span class="project-tag">Next.js</span>
          <span class="project-tag">Supabase</span>
          <span class="project-tag"></span>
        </div>
        <h3 class="project-title">Multi-vendor Marketplace</h3>
        <p class="project-desc">Full-featured e-commerce platform with vendor management.</p>
        <div class="project-links">
          <a href="https://multi-vendor-marketplace-sand.vercel.app/" class="project-link project-link-primary">Live Demo</a>
          <a href="https://github.com/Kelechi-6/Multi-Vendor-Marketplace.git" class="project-link project-link-secondary">GitHub</a>
        </div>
      </div>
    </div>

    <div class="project-card reveal reveal-delay-1">
      <div class="project-img">
        <div class="project-img-inner" style="background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); display:flex; align-items:center; justify-content:center;">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="12" y="12" width="56" height="56" rx="12" stroke="#4ade80" stroke-width="2"/><path d="M28 50 L40 30 L52 50" stroke="#4ade80" stroke-width="2" fill="none"/><circle cx="40" cy="46" r="3" fill="#4ade80" opacity="0.6"/></svg>
        </div>
        <div class="project-img-overlay"></div>
      </div>
      <div class="project-body">
        <div class="project-tags">
          <span class="project-tag">Next.js</span>
          <span class="project-tag"></span>
          <span class="project-tag"></span>
        </div>
        <h3 class="project-title">Furniture E-commerce</h3>
        <p class="project-desc">Modern furniture website with shopping cart and payment integration.</p>
        <div class="project-links">
          <a href="https://responsive-furniture-website1.vercel.app/" class="project-link project-link-primary">Live Demo</a>
          <a href="https://github.com/Kelechi-6/Furniture.git" class="project-link project-link-secondary">GitHub</a>
        </div>
      </div>
    </div>

    

  </div>
</section>

<!-- SERVICES -->
<section class="section" id="services">
  <div class="section-header">
    <span class="section-label reveal">What I Do</span>
    <h2 class="section-title reveal reveal-delay-1">Services & Expertise</h2>
    <p class="section-desc reveal reveal-delay-2">Specialized skills to help you launch, scale, and elevate your digital product.</p>
  </div>
  <div class="services-grid">
    <div class="service-card reveal">
      <div class="service-icon">⚡</div>
      <h3 class="service-title">Web Development</h3>
      <p class="service-desc">Custom-built websites and web applications using modern frameworks like React, Next.js, and TypeScript - optimized for speed and scalability.</p>
    </div>
    <div class="service-card reveal reveal-delay-1">
      <div class="service-icon">🎨</div>
      <h3 class="service-title">UI / UX Design</h3>
      <p class="service-desc">User-centered interfaces that balance aesthetics with usability. From wireframes to polished prototypes in Figma and code.</p>
    </div>
    <div class="service-card reveal reveal-delay-2">
      <div class="service-icon">🚀</div>
      <h3 class="service-title">Performance Optimization</h3>
      <p class="service-desc">Audit, refactor, and fine-tune your web app for Core Web Vitals, lighthouse scores, and overall user experience.</p>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="section" id="contact">
  <div class="section-header">
    <span class="section-label reveal">Get in Touch</span>
    <h2 class="section-title reveal reveal-delay-1">Let's Build Something</h2>
    <p class="section-desc reveal reveal-delay-2">Have a project in mind or just want to say hello? Drop a message below.</p>
  </div>
  <div class="contact-wrapper">
    <div class="contact-info reveal">
      <h3>Contact Info</h3>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.</p>
      <div class="contact-detail">
        <div class="contact-detail-icon">📧</div>
        <div class="contact-detail-text">
          <strong>Email</strong>
          kcboytimo@gmail.com
        </div>
      </div>
      <div class="contact-detail">
        <div class="contact-detail-icon">📍</div>
        <div class="contact-detail-text">
          <strong>Location</strong>
          Yenagoa, Bayelsa State, Nigeria.
        </div>
      </div>
      <div class="contact-detail">
        <div class="contact-detail-icon">🕐</div>
        <div class="contact-detail-text">
          <strong>Availability</strong>
          Mon - Fri, 9am - 6p
        </div>
      </div>
      <div class="social-links">
        <a href="https://github.com/Kelechi-6" class="social-link" title="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://wa.me/2349033282350" class="social-link" title="Whatsapp">
          <svg  width="24" height="24" fill="currentColor" viewBox="0 0 24 24" ><path fill-rule="evenodd" d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.4 7.4 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263" clip-rule="evenodd"></path></svg>
        </a>
        <a href="https://www.tiktok.com/@timodevhub?_r=1&_t=ZS-95fRRVIhhLT" class="social-link" title="TikTok">
          <svg  width="24" height="24"fill="currentColor" viewBox="0 0 24 24" ><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 3 3 0 0 1 .88.13V9.4a7 7 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5 5 0 0 1-1-.1z"></path></svg>
        </a>
      </div>
    </div>
    <form class="contact-form reveal reveal-delay-1" onsubmit="handleSubmit(event)">
      <div class="form-group">
        <input type="text" name="name" placeholder="Your Name" required>
      </div>
      <div class="form-group">
        <input type="email" name="email" placeholder="Your Email" required>
      </div>
      <div class="form-group">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" class="form-submit btn">Send Message →</button>
    </form>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <span> 2026 Timothy. Built with passion & clean code.</span>
  <span>Crafted in <a href="#">Bayelsa</a></span>
</footer>

<!-- THREE.JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
(function() {
  /* ---- LOADER ---- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 800);
  });

  /* ---- CUSTOM CURSOR ---- */
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .project-card, .service-card, .skill-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });

  /* ---- NAVBAR SCROLL ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ---- MOBILE NAV ---- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });

  window.closeMobile = function() {
    navToggle.classList.remove('active');
    mobileNav.classList.remove('open');
  };

  /* ---- THEME TOGGLE ---- */
  const themeBtn = document.getElementById('themeToggle');
  let isDark = true;

  themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    themeBtn.textContent = isDark ? '☀' : '🌙';
    document.documentElement.style.setProperty('--bg-primary', isDark ? '#06060f' : '#f5f4fa');
    document.documentElement.style.setProperty('--bg-secondary', isDark ? '#0c0c1d' : '#eae8f2');
    document.documentElement.style.setProperty('--bg-card', isDark ? 'rgba(15,15,35,0.6)' : 'rgba(255,255,255,0.7)');
    document.documentElement.style.setProperty('--glass-bg', isDark ? 'rgba(15,15,40,0.45)' : 'rgba(255,255,255,0.55)');
    document.documentElement.style.setProperty('--glass-border', isDark ? 'rgba(124,92,252,0.12)' : 'rgba(124,92,252,0.18)');
    document.documentElement.style.setProperty('--text-primary', isDark ? '#f0eef6' : '#1a1a2e');
    document.documentElement.style.setProperty('--text-secondary', isDark ? '#9490b0' : '#5a577a');
    document.documentElement.style.setProperty('--text-muted', isDark ? '#5e5a78' : '#8e8aa8');
  });

  /* ---- SCROLL REVEAL ---- */
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => observer.observe(el));

  /* ---- SKILL BAR ANIMATION ---- */
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + '%';
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-bar-fill').forEach(bar => skillObserver.observe(bar));

  /* ---- 3D TILT ON ABOUT CARD ---- */
  const aboutCard = document.getElementById('aboutCard');
  if (aboutCard) {
    aboutCard.addEventListener('mousemove', e => {
      const rect = aboutCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      aboutCard.style.transform = \`rotateY(\${x * 12}deg) rotateX(\${-y * 12}deg)\`;
    });
    aboutCard.addEventListener('mouseleave', () => {
      aboutCard.style.transform = 'rotateY(0) rotateX(0)';
    });
  }

  /* ---- 3D TILT ON PROJECT CARDS ---- */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = \`perspective(800px) rotateY(\${x * 6}deg) rotateX(\${-y * 6}deg) translateY(-8px)\`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)';
    });
  });

  /* ---- CONTACT FORM ---- */
  window.handleSubmit = async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const btn = form.querySelector('.form-submit');
    const formData = new FormData(form);
    
    // Get form data
    const name = formData.get('name') || form.querySelector('input[type="text"]').value;
    const email = formData.get('email') || form.querySelector('input[type="email"]').value;
    const message = formData.get('message') || form.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Show loading state
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        btn.textContent = 'Sent! ?';
        btn.style.background = '#4ade80';
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
          form.reset();
        }, 2500);
      } else {
        // Error
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert(error.message || 'Failed to send message. Please try again.');
      
      // Reset button state
      btn.textContent = originalText;
      btn.disabled = false;
    }
  };

  /* ---- THREE.JS HERO ---- */
  const canvas = document.getElementById('hero-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  /* Lights */
  const ambientLight = new THREE.AmbientLight(0x7c5cfc, 0.15);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x7c5cfc, 1.6, 20);
  pointLight1.position.set(3, 3, 4);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xe879a8, 1.2, 20);
  pointLight2.position.set(-3, -2, 3);
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight(0xf0c56d, 0.6, 20);
  pointLight3.position.set(0, 4, 2);
  scene.add(pointLight3);

  /* Floating objects */
  const objects = [];

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x7c5cfc,
    metalness: 0.1,
    roughness: 0.15,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
  });

  const goldMat = new THREE.MeshPhysicalMaterial({
    color: 0xf0c56d,
    metalness: 0.6,
    roughness: 0.2,
    transparent: true,
    opacity: 0.5,
  });

  const pinkMat = new THREE.MeshPhysicalMaterial({
    color: 0xe879a8,
    metalness: 0.15,
    roughness: 0.2,
    transparent: true,
    opacity: 0.4,
  });

  /* Main torus */
  const torusGeo = new THREE.TorusGeometry(1.2, 0.35, 32, 100);
  const torus = new THREE.Mesh(torusGeo, glassMat);
  torus.position.set(0, 0, 0);
  scene.add(torus);
  objects.push({ mesh: torus, rotSpeed: { x: 0.003, y: 0.005, z: 0.002 }, floatAmp: 0.3, floatSpeed: 0.8, baseY: 0 });

  /* Icosahedron */
  const icoGeo = new THREE.IcosahedronGeometry(0.55, 0);
  const ico = new THREE.Mesh(icoGeo, goldMat);
  ico.position.set(2.5, 1.2, -1);
  scene.add(ico);
  objects.push({ mesh: ico, rotSpeed: { x: 0.008, y: 0.006, z: 0.004 }, floatAmp: 0.4, floatSpeed: 1.1, baseY: 1.2 });

  /* Octahedron */
  const octGeo = new THREE.OctahedronGeometry(0.45, 0);
  const oct = new THREE.Mesh(octGeo, pinkMat);
  oct.position.set(-2.8, -0.8, -0.5);
  scene.add(oct);
  objects.push({ mesh: oct, rotSpeed: { x: 0.005, y: 0.009, z: 0.003 }, floatAmp: 0.35, floatSpeed: 0.9, baseY: -0.8 });

  /* Small sphere cluster */
  const sphereGeo = new THREE.SphereGeometry(0.18, 16, 16);
  const positions = [
    { x: -1.8, y: 2, z: -2 },
    { x: 3, y: -1.5, z: -1.5 },
    { x: -3.2, y: 1.5, z: -2.5 },
    { x: 1.5, y: -2, z: -1 },
    { x: 0.8, y: 2.5, z: -2 },
  ];

  positions.forEach((pos, i) => {
    const mat = [glassMat, goldMat, pinkMat][i % 3].clone();
    mat.opacity = 0.25 + Math.random() * 0.2;
    const sphere = new THREE.Mesh(sphereGeo, mat);
    sphere.position.set(pos.x, pos.y, pos.z);
    sphere.scale.setScalar(0.6 + Math.random() * 1.2);
    scene.add(sphere);
    objects.push({
      mesh: sphere,
      rotSpeed: { x: 0.002 + Math.random() * 0.005, y: 0.003 + Math.random() * 0.005, z: 0.001 },
      floatAmp: 0.2 + Math.random() * 0.3,
      floatSpeed: 0.5 + Math.random() * 0.7,
      baseY: pos.y
    });
  });

  /* Ring wireframe */
  const ringGeo = new THREE.TorusGeometry(2, 0.02, 8, 80);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x7c5cfc, transparent: true, opacity: 0.12 });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI * 0.45;
  scene.add(ring1);
  objects.push({ mesh: ring1, rotSpeed: { x: 0, y: 0.002, z: 0.001 }, floatAmp: 0, floatSpeed: 0, baseY: 0 });

  const ring2 = new THREE.Mesh(ringGeo, ringMat.clone());
  ring2.material.opacity = 0.08;
  ring2.rotation.x = Math.PI * 0.65;
  ring2.rotation.z = Math.PI * 0.3;
  ring2.scale.setScalar(1.4);
  scene.add(ring2);
  objects.push({ mesh: ring2, rotSpeed: { x: 0.001, y: -0.0015, z: 0 }, floatAmp: 0, floatSpeed: 0, baseY: 0 });

  /* Particles */
  const particleCount = 200;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 16;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x7c5cfc,
    size: 0.02,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  /* Mouse interaction */
  let targetRotX = 0, targetRotY = 0;

  document.addEventListener('mousemove', e => {
    targetRotX = (e.clientY / window.innerHeight - 0.5) * 0.4;
    targetRotY = (e.clientX / window.innerWidth - 0.5) * 0.4;
  });

  /* Animation */
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    objects.forEach(obj => {
      obj.mesh.rotation.x += obj.rotSpeed.x;
      obj.mesh.rotation.y += obj.rotSpeed.y;
      obj.mesh.rotation.z += obj.rotSpeed.z;
      if (obj.floatAmp) {
        obj.mesh.position.y = obj.baseY + Math.sin(t * obj.floatSpeed) * obj.floatAmp;
      }
    });

    particles.rotation.y += 0.0003;
    particles.rotation.x += 0.0001;

    /* Smooth camera follow */
    camera.rotation.x += (targetRotX * 0.15 - camera.rotation.x) * 0.05;
    camera.rotation.y += (targetRotY * 0.15 - camera.rotation.y) * 0.05;

    renderer.render(scene, camera);
  }
  animate();

  /* Resize */
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
</script>
</body>
</html>
        `
      }} />
    </>
  );
}
