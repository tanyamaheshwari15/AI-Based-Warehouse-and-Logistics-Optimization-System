import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: "bi-grid-1x2" },
  { to: "/warehouses", label: "Warehouses", icon: "bi-buildings" },
  { to: "/inventory", label: "Inventory", icon: "bi-box-seam" },
  { to: "/orders", label: "Orders", icon: "bi-receipt" },
  { to: "/optimization", label: "Optimization", icon: "bi-diagram-3" },
  { to: "/ai-insights", label: "AI Insights", icon: "bi-stars" },
];

export default function Sidebar({ user }) {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-brand-mark"><i className="bi bi-boxes"></i></span>
        SupplyChainIQ
      </div>
      <div className="sidebar-caption">Warehouse &amp; Logistics</div>

      <div className="sidebar-section-label">Workspace</div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/dashboard"}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className={`bi ${link.icon}`} aria-hidden="true"></i>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-account">
        <div className="sidebar-avatar">
          <i className="bi bi-person-fill" aria-hidden="true"></i>
        </div>
        <div className="sidebar-account-details">
          <div className="sidebar-account-name">{user?.name}</div>
          <div className="sidebar-account-caption">{user?.email}</div>
        </div>
      </div>
    </aside>
  );
}