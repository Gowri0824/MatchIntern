import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container animate-fade-in">
      {/* Header */}
      <nav className="home-nav glass-panel-nav">
        <div className="logo">
          <span className="logo-icon">🍊</span> MatchIntern
        </div>
        <div className="nav-links">
          {/* <button className="nav-link">For Students</button> */}
          {/* Removed For Companies as per request */}
        </div>
        <button onClick={() => navigate('/login')} className="btn btn-secondary nav-login-btn">
          Login
        </button>
      </nav>

      <main className="home-content">
        <div className="hero-section">
          <div className="hero-text-side">
            <div className="badge-pill">🚀 #1 Internship Platform</div>
            <h1 className="home-title">
              Launch Your Career <br />
              <span className="highlight-text">Without Limits.</span>
            </h1>
            <p className="home-subtitle">
              Connect with top startups and companies.
              We match you based on **skills**, not just your college tag.
            </p>

            <div className="cta-group">
              <button onClick={() => navigate('/login')} className="btn btn-primary cta-btn">
                Get Hired Now →
              </button>
              <div className="trust-text">
                <span className="avatars">🧑‍🎓👩‍💻👨‍🚀</span> 10k+ Students Joined
              </div>
            </div>
          </div>

          {/* Visual Side - Floating Cards */}
          <div className="hero-visual-side">
            <div className="floating-card card-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="icon">🦄</div>
              <div className="info">
                <strong>Product Designer</strong>
                <span>Remote • ₹25k/mo</span>
              </div>
            </div>
            <div className="floating-card card-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="icon">⚛️</div>
              <div className="info">
                <strong>React Developer</strong>
                <span>Bangalore • ₹30k/mo</span>
              </div>
            </div>
            <div className="floating-card card-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="icon">🚀</div>
              <div className="info">
                <strong>Growth Intern</strong>
                <span>Delhi • ₹15k/mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="stats-strip glass-panel">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Partner Companies</p>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <h3>10k+</h3>
            <p>Active Students</p>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Match Rate</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </main>

      <footer className="home-footer">
        <p>© 2026 MatchIntern. Built with ❤️ for Students.</p>
      </footer>
    </div>
  );
}
