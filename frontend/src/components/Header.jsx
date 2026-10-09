import { useLocation, useNavigate } from "react-router-dom";

const titles = {
  "/dashboard": ["Dashboard", "Your supply chain at a glance."],
  "/warehouses": ["Warehouses", "Manage warehouse locations and capacity."],
  "/inventory": ["Inventory", "Monitor stock across warehouses."],
  "/orders": ["Orders", "Track and prioritize customer orders."],
  "/optimization": ["Optimization", "Explore fulfillment and route recommendations."],
  "/ai-insights": ["AI Insights", "Review predictions and decision explanations."],
};

export default function Header({ onSignOut }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, subtitle] = titles[location.pathname] || titles["/dashboard"];

  return (
    <header className="app-header">
      <div>
        <h1>{title}</h1>
        <p className="mb-0">{subtitle}</p>
      </div>

      <div className="app-header-actions">
        <button
          className="btn btn-outline-secondary header-logout"
          type="button"
          onClick={() => {
            onSignOut();
            navigate("/login", { replace: true });
          }}
        >
          <i className="bi bi-box-arrow-right me-2" aria-hidden="true"></i>Sign out
        </button>
      </div>
    </header>
  );
}