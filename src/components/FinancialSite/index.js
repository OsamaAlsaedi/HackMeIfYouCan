import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles.scss';

const FinancialSite = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const dummyAccountData = {
    checking: 5234.67,
    savings: 12750.89,
    investments: 45670.23,
    recentTransactions: [
      { id: 1, type: 'debit', amount: 42.50, description: 'Coffee Shop', date: '2024-03-14' },
      { id: 2, type: 'credit', amount: 2500.00, description: 'Salary Deposit', date: '2024-03-13' },
      { id: 3, type: 'debit', amount: 156.78, description: 'Grocery Store', date: '2024-03-12' },
    ]
  };

  const renderDashboard = () => (
    <section className="dashboard">
      <div className="container">
        <div className="welcome-bar">
          <h2>Welcome back, John</h2>
          <p>Last login: March 14, 2024 10:30 AM</p>
        </div>
        
        <div className="accounts-overview">
          <h3>Accounts Overview</h3>
          <div className="accounts-grid">
            <div className="account-card">
              <h4>Checking Account</h4>
              <p className="balance">${dummyAccountData.checking.toLocaleString()}</p>
              <button className="action-button">Transfer</button>
            </div>
            <div className="account-card">
              <h4>Savings Account</h4>
              <p className="balance">${dummyAccountData.savings.toLocaleString()}</p>
              <button className="action-button">Manage</button>
            </div>
            <div className="account-card">
              <h4>Investment Portfolio</h4>
              <p className="balance">${dummyAccountData.investments.toLocaleString()}</p>
              <button className="action-button">View Details</button>
            </div>
          </div>
        </div>

        <div className="recent-transactions">
          <h3>Recent Transactions</h3>
          <div className="transactions-list">
            {dummyAccountData.recentTransactions.map(transaction => (
              <div key={transaction.id} className={`transaction-item ${transaction.type}`}>
                <div className="transaction-info">
                  <p className="description">{transaction.description}</p>
                  <p className="date">{transaction.date}</p>
                </div>
                <p className="amount">
                  {transaction.type === 'debit' ? '-' : '+'}${transaction.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <button className="view-all">View All Transactions</button>
        </div>

        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="quick-action-btn">
              <span className="icon">↗</span>
              Send Money
            </button>
            <button className="quick-action-btn">
              <span className="icon">↙</span>
              Request Money
            </button>
            <button className="quick-action-btn">
              <span className="icon">📄</span>
              Pay Bills
            </button>
            <button className="quick-action-btn">
              <span className="icon">📊</span>
              Investments
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="financial-site">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SecureFinance | Modern Banking Solutions</title>
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
                <li><a href="#login" className="cta-button">Login</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {isLoggedIn ? (
          renderDashboard()
        ) : (
          <>
            <section className="hero">
              <div className="container">
                <h1>Secure Banking for the Digital Age</h1>
                <p>
                  Experience modern banking with advanced security, real-time transactions,
                  and intelligent financial management tools.
                </p>
                <a href="#contact" className="hero-cta">Open an Account</a>
              </div>
            </section>

            <section className="features" id="features">
              <div className="container">
                <h2>Why Choose SecureFinance</h2>
                <div className="features-grid">
                  <div className="feature-card">
                    <h3>Advanced Security</h3>
                    <p>Multi-factor authentication and end-to-end encryption for your financial data.</p>
                  </div>
                  <div className="feature-card">
                    <h3>Smart Banking</h3>
                    <p>AI-powered insights and automated financial management tools.</p>
                  </div>
                  <div className="feature-card">
                    <h3>Global Access</h3>
                    <p>24/7 access to your accounts with real-time transaction tracking.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pricing" id="pricing">
              <div className="container">
                <h2>Choose Your Plan</h2>
                <p className="pricing-subtitle">Select the perfect plan for your banking needs</p>
                <div className="pricing-grid">
                  <div className="pricing-card basic">
                    <div className="pricing-header">
                      <h3>Basic</h3>
                      <div className="price">
                        <span className="currency">$</span>
                        <span className="amount">0</span>
                        <span className="period">/month</span>
                      </div>
                      <p>Perfect for personal banking</p>
                    </div>
                    <ul className="pricing-features">
                      <li>✓ Free checking account</li>
                      <li>✓ Basic online banking</li>
                      <li>✓ Mobile app access</li>
                      <li>✓ Standard support</li>
                      <li>✗ Investment tools</li>
                      <li>✗ Premium cards</li>
                    </ul>
                    <a href="#signup" className="pricing-cta">Get Started</a>
                  </div>

                  <div className="pricing-card premium">
                    <div className="popular-tag">Most Popular</div>
                    <div className="pricing-header">
                      <h3>Premium</h3>
                      <div className="price">
                        <span className="currency">$</span>
                        <span className="amount">9.99</span>
                        <span className="period">/month</span>
                      </div>
                      <p>Enhanced features for active users</p>
                    </div>
                    <ul className="pricing-features">
                      <li>✓ All Basic features</li>
                      <li>✓ Investment portfolio</li>
                      <li>✓ Premium debit card</li>
                      <li>✓ Priority support</li>
                      <li>✓ Financial advisory</li>
                      <li>✓ Budgeting tools</li>
                    </ul>
                    <a href="#signup" className="pricing-cta">Get Premium</a>
                  </div>

                  <div className="pricing-card business">
                    <div className="pricing-header">
                      <h3>Business</h3>
                      <div className="price">
                        <span className="currency">$</span>
                        <span className="amount">29.99</span>
                        <span className="period">/month</span>
                      </div>
                      <p>Complete solution for businesses</p>
                    </div>
                    <ul className="pricing-features">
                      <li>✓ All Premium features</li>
                      <li>✓ Multiple user accounts</li>
                      <li>✓ Business credit cards</li>
                      <li>✓ 24/7 dedicated support</li>
                      <li>✓ Payroll management</li>
                      <li>✓ API access</li>
                    </ul>
                    <a href="#signup" className="pricing-cta">Contact Sales</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="stats">
              <div className="container">
                <div className="stats-grid">
                  <div className="stat-item">
                    <h3>$50B+</h3>
                    <p>Assets Managed</p>
                  </div>
                  <div className="stat-item">
                    <h3>2M+</h3>
                    <p>Active Users</p>
                  </div>
                  <div className="stat-item">
                    <h3>99.99%</h3>
                    <p>Uptime</p>
                  </div>
                  <div className="stat-item">
                    <h3>24/7</h3>
                    <p>Support</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="security-features">
              <div className="container">
                <h2>Bank-Grade Security</h2>
                <div className="security-grid">
                  <div className="security-item">
                    <h3>Multi-Factor Authentication</h3>
                    <p>Enhanced account security with multiple verification layers.</p>
                  </div>
                  <div className="security-item">
                    <h3>Biometric Login</h3>
                    <p>Secure access using fingerprint or face recognition.</p>
                  </div>
                  <div className="security-item">
                    <h3>Real-time Monitoring</h3>
                    <p>Advanced fraud detection and transaction monitoring.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="cta-section">
              <div className="container">
                <h2>Ready to Experience Modern Bankng?</h2>
                <p>Join millions of users who trust SecureFinance for their banking needs.</p>
                <a href="#signup" className="cta-button">Open Account Now</a>
              </div>
            </section>
          </>
        )}

        <footer>
          <div className="container">
            <div className="footer-grid">
              <div className="footer-section">
                <h3>Banking</h3>
                <ul>
                  <li><a href="#checking">Checking</a></li>
                  <li><a href="#savings">Savings</a></li>
                  <li><a href="#credit-cards">Credit Cards</a></li>
                  <li><a href="#loans">Loans</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Company</h3>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#press">Press</a></li>
                  <li><a href="#security">Security</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                  <li><a href="#help">Help Center</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#locations">ATM Locations</a></li>
                  <li><a href="#mobile">Mobile App</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="#compliance">Compliance</a></li>
                  <li><a href="#cookies">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} SecureFinance. All rights reserved. FDIC Insured.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
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

export default FinancialSite;
/* hi */