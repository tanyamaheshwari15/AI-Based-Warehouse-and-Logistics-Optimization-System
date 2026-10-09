import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";

const activities = [
  { id: "ORD-1042", text: "Order received", status: "Pending", color: "warning" },
  { id: "ORD-1041", text: "Fulfillment completed", status: "Completed", color: "success" },
  { id: "INV-203", text: "Low stock detected", status: "Attention", color: "danger" },
];

export default function Dashboard() {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
        <div>
          <h2 className="h5 fw-bold mb-1">Overview</h2>
          <p className="text-secondary mb-0">Your operations summary</p>
        </div>
        <Link to="/optimization" className="btn btn-primary">
          <i className="bi bi-stars me-2"></i>Open Optimization
        </Link>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-md-6 col-xl-3">
          <StatCard title="Warehouses" value="08" icon="bi-buildings" note="Across the network" color="primary" />
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <StatCard title="Products" value="1,248" icon="bi-box-seam" note="Tracked in inventory" color="info" />
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <StatCard title="Open Orders" value="36" icon="bi-receipt" note="Awaiting processing" color="warning" />
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <StatCard title="Low Stock Alerts" value="12" icon="bi-exclamation-triangle" note="Review required" color="danger" />
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-xl-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h2 className="h5 fw-bold">Operational Overview</h2>
              <p className="text-secondary small">Illustrative inventory distribution</p>

              {[
                ["Warehouse North", 82],
                ["Warehouse Central", 67],
                ["Warehouse South", 91],
                ["Warehouse East", 48],
              ].map(([name, value]) => (
                <div className="mb-3" key={name}>
                  <div className="d-flex justify-content-between mb-1">
                    <span>{name}</span>
                    <span className="text-secondary">{value}%</span>
                  </div>
                  <div className="progress" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: `${value}%` }}></div>
                  </div>
                </div>
              ))}

              <div className="alert alert-info mb-0 mt-4">
                <i className="bi bi-info-circle me-2"></i>
                Dashboard figures are sample data for this frontend demo.
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h2 className="h5 fw-bold mb-3">Quick Actions</h2>
              <div className="d-grid gap-2">
                <Link to="/warehouses" className="btn btn-outline-primary text-start">
                  <i className="bi bi-buildings me-2"></i>Manage Warehouses
                  <i className="bi bi-arrow-right float-end"></i>
                </Link>
                <Link to="/inventory" className="btn btn-outline-primary text-start">
                  <i className="bi bi-box-seam me-2"></i>Check Inventory
                  <i className="bi bi-arrow-right float-end"></i>
                </Link>
                <Link to="/orders" className="btn btn-outline-primary text-start">
                  <i className="bi bi-receipt me-2"></i>View Orders
                  <i className="bi bi-arrow-right float-end"></i>
                </Link>
                <Link to="/ai-insights" className="btn btn-outline-primary text-start">
                  <i className="bi bi-stars me-2"></i>View AI Insights
                  <i className="bi bi-arrow-right float-end"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h2 className="h5 fw-bold mb-3">Recent Activity</h2>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr><th>Reference</th><th>Activity</th><th>Status</th></tr>
              </thead>
              <tbody>
                {activities.map((item) => (
                  <tr key={item.id}>
                    <td className="fw-semibold">{item.id}</td>
                    <td>{item.text}</td>
                    <td><span className={`badge text-bg-${item.color}`}>{item.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}