import React, { useEffect } from 'react';
import './styles.scss';
// 🕵️‍♂️ Welcome to Cyber Practice Mode
// First hint: open the browser console.

// Log hidden console messages
console.log("%c🧠 Cyber Hint #1: Not all elements are added in HTML...", "color: green; font-weight: bold;");
console.log("%c🔍 Look for DOM elements added dynamically in the script.", "color: purple;");

// Add hidden element to DOM
const hiddenDiv = document.createElement("div");
hiddenDiv.textContent = "🎯 Cyber Clue #2: This was added by JS!";
hiddenDiv.style.display = "none";
hiddenDiv.className = "cyber-hidden";
document.body.appendChild(hiddenDiv);

// Add a base64-encoded comment to confuse/teach
/* Clue: Q29uZ3JhdHMsIHlvdSBmb3VuZCB0aGUgYmFzZTY0IGNvZGUhIFRoZSBmbGFnIGlzOiB7ZmxhZ19pbl9jc3N9 */

// Final console message
console.warn("🚨 Cyber Hint #3: The flag may be styled to disappear. Use DevTools to reveal it.");

const FinancialSite = () => {
  // Add animation class after component mounts
  useEffect(() => {
    document.querySelector('.financial-container').style.opacity = '1';
  }, []);

  return (
    <div className="page">
      <div className="financial-container container">
        <header className="financial-header">
          <div className="header-content">
            <a href="/" className="logo">
              Secure<span>Finance</span>
            </a>
            <nav>
              <ul className="nav-links">
                <li><a href="#features">FEATURES</a></li>
                <li><a href="#solutions">SOLUTIONS</a></li>
                <li><a href="#pricing">PRICING</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact" className="cta-button">GET STARTED</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="text-zone hero-content">
            <h1 className="text-animate-hover">Secure Financial Solutions for the Digital Age</h1>
            <p className="text-animate-hover">
              Experience the future of financial management with our cutting-edge platform.
              Secure, efficient, and designed for modern businesses.
            </p>
            <a href="#contact" className="hero-cta">Start Your Journey</a>
          </div>
        </section>

        <section className="features" id="features">
          <div className="features-content">
            <h2 className="text-animate-hover">Why Choose SecureFinance</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Advanced Security</h3>
                <p>
                  State-of-the-art encryption and security protocols to protect your financial data and transactions.
                </p>
              </div>
              <div className="feature-card">
                <h3>Real-time Analytics</h3>
                <p>
                  Comprehensive financial analytics and reporting tools for informed decision-making.
                </p>
              </div>
              <div className="feature-card">
                <h3>Global Compliance</h3>
                <p>
                  Stay compliant with international financial regulations and standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stats-content">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>$10B+</h3>
                <p>TRANSACTIONS PROCESSED</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>GLOBAL CLIENTS</p>
              </div>
              <div className="stat-item">
                <h3>99.9%</h3>
                <p>UPTIME GUARANTEE</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>EXPERT SUPPORT</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2 className="text-animate-hover">Ready to Transform Your Financial Operations?</h2>
            <p className="text-animate-hover">
              Join thousands of businesses that trust SecureFinance for their financial needs.
            </p>
            <a href="#contact" className="cta-button">GET STARTED TODAY</a>
          </div>
        </section>

        <footer className="financial-footer">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-section">
                <h3>Company</h3>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#press">Press</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Solutions</h3>
                <ul>
                  <li><a href="#payments">Payments</a></li>
                  <li><a href="#analytics">Analytics</a></li>
                  <li><a href="#security">Security</a></li>
                  <li><a href="#compliance">Compliance</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                  <li><a href="#documentation">Documentation</a></li>
                  <li><a href="#support">Support</a></li>
                  <li><a href="#api">API Reference</a></li>
                  <li><a href="#status">System Status</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="#security">Security</a></li>
                  <li><a href="#compliance">Compliance</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} SecureFinance. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FinancialSite;