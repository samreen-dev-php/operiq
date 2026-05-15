const productLinks = [
  "OPERIQ BID™",
  "OPERIQ CAPTURE™",
  "OPERIQ VAULT™",
  "OPERIQ CONNECT™",
  "OPERIQ INTEL™",
];

const resourceLinks = [
  "Documentation",
  "API Reference",
  "Mission Partners",
  "Security & Compliance",
  "Contact Sales",
];

function SocialIcon({ name }) {
  const icons = {
    linkedin: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6.5 9.5V19M6.5 6v.1M11 19v-9.5M11 13.5c0-2.2 1.4-4 3.8-4 2.3 0 3.7 1.5 3.7 4.3V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    twitter: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m4 4 12.5 16H20L7.5 4H4Zm1 16L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    github: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 19c-4 1.3-4-2-5.5-2.5M15 22v-3.4c.1-1-.3-1.7-.8-2.2 2.8-.3 5.8-1.4 5.8-6.1 0-1.3-.5-2.4-1.2-3.3.1-.3.5-1.7-.1-3.3 0 0-1-.3-3.4 1.2a11.7 11.7 0 0 0-6.2 0C6.7 3.4 5.7 3.7 5.7 3.7c-.6 1.6-.2 3-.1 3.3A4.8 4.8 0 0 0 4.4 10.3c0 4.7 2.9 5.8 5.7 6.1-.4.4-.8 1-.8 2.1V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}

function FooterLogo() {
  return (
    <a className="brand footer-logo" href="#" aria-label="Operiq Systems home">
      <span className="brand-mark" aria-hidden="true">
        <span />
      </span>
      <span className="brand-text">
        <strong>OPERIQ</strong>
        <span>SYSTEMS</span>
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" id="company">
      <div className="footer-grid">
        <section className="footer-brand" aria-label="Operiq Systems footer brand">
          <FooterLogo />
          <p>
            Delivering AI-powered workflow infrastructure for modern contractors
            and public sector agencies.
          </p>
          <div className="social-links" aria-label="Social links">
            {["linkedin", "twitter", "github"].map((item) => (
              <a href="#" aria-label={item} key={item}>
                <SocialIcon name={item} />
              </a>
            ))}
          </div>
        </section>

        <nav className="footer-column" aria-label="Platform and products">
          <h2>Platform & Products</h2>
          {productLinks.map((link) => (
            <a href="#products" key={link}>{link}</a>
          ))}
        </nav>

        <nav className="footer-column" aria-label="Resources and company">
          <h2>Resources & Company</h2>
          {resourceLinks.map((link) => (
            <a href="#resources" key={link}>{link}</a>
          ))}
        </nav>

        <section className="footer-newsletter" aria-labelledby="newsletter-title">
          <h2 id="newsletter-title">Stay Mission Ready</h2>
          <p>Get product updates, security notes, and public sector workflow insights.</p>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" placeholder="Enter your email" autoComplete="email" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>

      <div className="footer-legal">
        <p>&copy; 2026 Operiq Systems, Inc. All rights reserved.</p>
        <nav aria-label="Legal links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#sla">SLA</a>
        </nav>
      </div>
    </footer>
  );
}
