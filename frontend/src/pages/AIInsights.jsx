import { useState } from "react";

const insights = [
  {
    id: 1,
    type: "Inventory",
    title: "Milk 1L may need replenishment",
    detail: "Sample stock is below its configured reorder level at the Central Fulfillment Hub.",
    priority: "High",
    icon: "bi-box-seam",
    color: "warning",
    explanation: "The displayed stock quantity is lower than the sample reorder threshold. This is a rule-based alert, not a trained AI prediction.",
  },
  {
    id: 2,
    type: "Warehouse",
    title: "South Storage Center is nearly full",
    detail: "The sample capacity usage is 97%. Review additional incoming stock before allocating more inventory.",
    priority: "High",
    icon: "bi-buildings",
    color: "danger",
    explanation: "The capacity figure exceeds the demo threshold of 90%, so the page flags the warehouse for review.",
  },
  {
    id: 3,
    type: "Orders",
    title: "Review urgent order ORD-1044",
    detail: "This sample order has urgent priority and should be reviewed before normal-priority orders.",
    priority: "Medium",
    icon: "bi-receipt",
    color: "info",
    explanation: "The order's stored priority is Urgent. A real implementation would use the Priority Queue to determine processing order.",
  },
];

export default function AIInsights() {
  const [selected, setSelected] = useState(null);
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = insights.filter((insight) =>
    typeFilter === "All" || insight.type === typeFilter
  );

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <div>
          <h2 className="h5 fw-bold mb-1">AI Insights & Decision Support</h2>
          <p className="text-secondary mb-0">Review operational alerts and understand their reasoning.</p>
        </div>
        <span className="badge text-bg-warning fs-6">Demo insights</span>
      </div>

      <div className="alert alert-info">
        <i className="bi bi-info-circle me-2"></i>
        These are rule-based sample insights, not responses from Gemini.
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm"><div className="card-body">
            <div className="text-secondary small">Sample insights</div>
            <div className="fs-3 fw-bold">{insights.length}</div>
          </div></div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm"><div className="card-body">
            <div className="text-secondary small">High priority</div>
            <div className="fs-3 fw-bold">{insights.filter((item) => item.priority === "High").length}</div>
          </div></div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm"><div className="card-body">
            <div className="text-secondary small">Decision explanations</div>
            <div className="fs-3 fw-bold">Available</div>
          </div></div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="insightFilter">Filter by category</label>
        <select id="insightFilter" className="form-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option>All</option>
          <option>Inventory</option>
          <option>Warehouse</option>
          <option>Orders</option>
        </select>
      </div>

      <div className="row g-3">
        {filtered.map((insight) => (
          <div className="col-12 col-xl-6" key={insight.id}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                  <div className={`rounded-3 p-3 bg-${insight.color}-subtle text-${insight.color}`}>
                    <i className={`bi ${insight.icon} fs-4`}></i>
                  </div>
                  <span className={`badge text-bg-${insight.color}`}>{insight.priority}</span>
                </div>
                <div className="small text-secondary mb-1">{insight.type}</div>
                <h3 className="h6 fw-bold">{insight.title}</h3>
                <p className="text-secondary">{insight.detail}</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => setSelected(selected === insight.id ? null : insight.id)}>
                  <i className="bi bi-lightbulb me-2"></i>
                  {selected === insight.id ? "Hide explanation" : "Why this insight?"}
                </button>
                {selected === insight.id && (
                  <div className="alert alert-light border mt-3 mb-0">
                    <strong>Reasoning:</strong> {insight.explanation}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}