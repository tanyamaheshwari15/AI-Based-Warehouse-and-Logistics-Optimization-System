import { Link } from "react-router-dom";

const features = [
  {
    icon: "bi-buildings",
    title: "Connected operations",
    detail: "Bring warehouse capacity, inventory, and orders into one workspace.",
  },
  {
    icon: "bi-diagram-3",
    title: "Smarter fulfillment",
    detail: "Compare warehouse options and explore route recommendations.",
  },
  {
    icon: "bi-stars",
    title: "Actionable insights",
    detail: "Review operational alerts with clear, explainable reasoning.",
  },
];

export default function Landing() {
  return (
    <main className="landing-page">
      <nav className="landing-nav" aria-label="Main navigation">
        <Link className="landing-brand" to="/">
          <span className="landing-brand-mark"><i className="bi bi-boxes" aria-hidden="true"></i></span>
          SupplyChainIQ
        </Link>
        <div className="landing-nav-actions">
          <Link className="landing-login-link" to="/login">Log in</Link>
          <Link className="btn btn-primary" to="/signup">Create account</Link>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-hero-copy">
          <div className="landing-eyebrow">
            <span className="landing-status-dot"></span>
            WAREHOUSE &amp; LOGISTICS INTELLIGENCE
          </div>
          <h1>Move your supply chain <span>forward.</span></h1>
          <p>
            One clear view of your warehouses, inventory, and orders—built to help
            teams make better fulfillment decisions.
          </p>
          <div className="landing-hero-actions">
            <Link className="btn btn-primary btn-lg" to="/signup">
              Get started <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
            </Link>
            <Link className="landing-secondary-action" to="/login">I already have an account</Link>
          </div>
          <div className="landing-trust-note">
            <i className="bi bi-shield-check me-2" aria-hidden="true"></i>
            Secure sign-in · Your workspace in one place
          </div>
        </div>

        <div className="landing-visual" aria-label="Supply chain network illustration">
          <div className="landing-visual-grid"></div>
          <div className="network-line network-line-one"></div>
          <div className="network-line network-line-two"></div>
          <div className="network-line network-line-three"></div>
          <div className="network-node network-node-center">
            <i className="bi bi-boxes" aria-hidden="true"></i>
            <span>NETWORK</span>
          </div>
          <div className="network-node network-node-north">
            <i className="bi bi-buildings" aria-hidden="true"></i>
            <span>WAREHOUSE</span>
          </div>
          <div className="network-node network-node-east">
            <i className="bi bi-box-seam" aria-hidden="true"></i>
            <span>INVENTORY</span>
          </div>
          <div className="network-node network-node-west">
            <i className="bi bi-truck" aria-hidden="true"></i>
            <span>FULFILLMENT</span>
          </div>
          <div className="landing-visual-label">
            <span className="landing-status-dot"></span>
            OPERATIONS OVERVIEW
            <span className="landing-visual-label-value">LIVE VIEW</span>
          </div>
        </div>
      </section>

      <section className="landing-features" aria-label="Platform features">
        {features.map((feature, index) => (
          <article className="landing-feature" key={feature.title}>
            <div className="landing-feature-icon">
              <i className={`bi ${feature.icon}`} aria-hidden="true"></i>
            </div>
            <div>
              <span className="landing-feature-index">0{index + 1} / PLATFORM</span>
              <h2>{feature.title}</h2>
              <p>{feature.detail}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="landing-footer">
        <span>SUPPLYCHAINIQ</span>
        <span>Warehouse &amp; Logistics Optimization</span>
      </footer>
    </main>
  );
}
