import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.scss';

const FinancialSite = () => {
  return (
    <div className="financial-site">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SecureFinance | Modern Financial Solutions</title>
      </Helmet>
      <div className="financial-wrapper">
        <header>
          <div className="container">
            <a href="#" className="logo">
              Secure<span>Finance</span>
            </a>
            <nav>
              <ul className="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact" className="cta-button">Get Started</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="container">
            <h1>Secure Financial Solutions for the Digital Age</h1>
            <p>
              Experience the future of financial management with our cutting-edge platform.
              Secure, efficient, and designed for modern businesses.
            </p>
            <a href="#contact" className="hero-cta">Start Your Journey</a>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <h2>Why Choose SecureFinance</h2>
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
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>$10B+</h3>
                <p>Transactions Processed</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Global Clients</p>
              </div>
              <div className="stat-item">
                <h3>99.9%</h3>
                <p>Uptime Guarantee</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Expert Support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Transform Your Financial Operations?</h2>
            <p>
              Join thousands of businesses that trust SecureFinance for their financial needs.
            </p>
            <a href="#contact" className="cta-button">Get Started Today</a>
          </div>
        </section>

        <footer>
          <div className="container">
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
