import Footer from "./Footer.jsx";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Company", href: "#company", hasDropdown: true },
];

const heroActions = [
  { label: "Explore Our Platform", href: "#platform", variant: "primary" },
  { label: "View Products", href: "#products", variant: "secondary" },
];

const features = [
  {
    label: "Secure by Design",
    icon: "shield",
  },
  {
    label: "AI-Powered Intelligence",
    icon: "brain",
  },
  {
    label: "Connected Ecosystem",
    icon: "network",
  },
  {
    label: "Mission Focused",
    icon: "target",
  },
];

function Icon({ name }) {
  const commonProps = {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    shield: (
      <svg {...commonProps}>
        <path d="M12 3 5 6v5c0 4.8 3 8.4 7 10 4-1.6 7-5.2 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    brain: (
      <svg {...commonProps}>
        <path d="M9 4.5A3 3 0 0 0 6 7.5v9A3.5 3.5 0 0 0 9.5 20H10V4.5H9Z" />
        <path d="M15 4.5a3 3 0 0 1 3 3v9a3.5 3.5 0 0 1-3.5 3.5H14V4.5h1Z" />
        <path d="M10 8H8.5A2.5 2.5 0 0 0 6 10.5" />
        <path d="M14 8h1.5A2.5 2.5 0 0 1 18 10.5" />
        <path d="M10 14H8.5A2.5 2.5 0 0 1 6 11.5" />
        <path d="M14 14h1.5A2.5 2.5 0 0 0 18 11.5" />
      </svg>
    ),
    network: (
      <svg {...commonProps}>
        <circle cx="12" cy="5" r="2.2" />
        <circle cx="5" cy="18" r="2.2" />
        <circle cx="19" cy="18" r="2.2" />
        <path d="M11 7 6 16" />
        <path d="m13 7 5 9" />
        <path d="M7.5 18h9" />
      </svg>
    ),
    target: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.4" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="brand" href="/" aria-label="Operiq Systems home">
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

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Logo />
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} aria-haspopup={item.hasDropdown ? "menu" : undefined}>
                {item.label}
                {item.hasDropdown ? <span aria-hidden="true">⌄</span> : null}
              </a>
            </li>
          ))}
        </ul>
        <a className="demo-button" href="#demo">
          Request a Demo
          <ArrowIcon />
        </a>
      </nav>
    </header>
  );
}

function GlobeVisual() {
  const nodes = [
    "node-a",
    "node-b",
    "node-c",
    "node-d",
    "node-e",
    "node-f",
    "node-g",
    "node-h",
  ];

  return (
    <div className="visual-wrap" aria-label="Digital connected public sector workflow network">
      <div className="globe">
        <div className="globe-core" />
        <div className="globe-grid globe-grid-one" />
        <div className="globe-grid globe-grid-two" />
        <div className="globe-grid globe-grid-three" />
        <div className="continent continent-one" />
        <div className="continent continent-two" />
        <div className="continent continent-three" />
        {nodes.map((node) => (
          <span className={`network-node ${node}`} key={node} />
        ))}
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <span className="orbit orbit-three" />
      </div>
      <div className="civic-grid" aria-hidden="true">
        <span className="building building-one" />
        <span className="building building-two" />
        <span className="building building-three" />
        <span className="building building-four" />
      </div>
      <div className="network-floor" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="visual-caption" aria-hidden="true">
        <span>Mission Data</span>
        <span>Workflow AI</span>
        <span>Secure Ops</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <main className="hero">
      <Header />
      <section className="hero-shell" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">AI Public Sector Workflow Infrastructure</p>
          <h1 id="hero-title">
            Intelligent Workflows.
            <span>Stronger Missions.</span>
          </h1>
          <p className="hero-copy">
            Operiq Systems delivers AI-powered workflow infrastructure that helps
            government contractors and agencies work smarter, move faster, and achieve
            mission-critical outcomes.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            {heroActions.map((action) => (
              <a className={`cta cta-${action.variant}`} href={action.href} key={action.label}>
                {action.label}
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
        <GlobeVisual />
        <ul className="feature-row" aria-label="Operiq platform highlights">
          {features.map((feature) => (
            <li key={feature.label}>
              <Icon name={feature.icon} />
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}
