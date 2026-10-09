import { useMemo, useState } from "react";

const initialOrders = [
  { id: "ORD-1042", customer: "Customer A", items: 4, location: "Agra", priority: "High", status: "Pending" },
  { id: "ORD-1043", customer: "Customer B", items: 2, location: "Delhi", priority: "Normal", status: "Processing" },
  { id: "ORD-1044", customer: "Customer C", items: 7, location: "Agra", priority: "Urgent", status: "Pending" },
  { id: "ORD-1045", customer: "Customer D", items: 3, location: "Jaipur", priority: "Normal", status: "Completed" },
  { id: "ORD-1046", customer: "Customer E", items: 5, location: "Delhi", priority: "High", status: "Processing" },
];

const priorityRank = { Urgent: 0, High: 1, Normal: 2 };

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState("All");

  const filteredOrders = useMemo(() => orders
    .filter((order) => filter === "All" || order.status === filter)
    .slice()
    .sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]), [orders, filter]);

  function updateStatus(id, status) {
    setOrders((current) => current.map((order) =>
      order.id === id ? { ...order, status } : order
    ));
  }

  function priorityColor(priority) {
    if (priority === "Urgent") return "danger";
    if (priority === "High") return "warning";
    return "secondary";
  }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <div>
          <h2 className="h5 fw-bold mb-1">Customer Orders</h2>
          <p className="text-secondary mb-0">Review orders and prioritize urgent fulfillment.</p>
        </div>
        <span className="badge text-bg-primary fs-6">{orders.filter((o) => o.status !== "Completed").length} open orders</span>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
            <div className="btn-group flex-wrap">
              {["All", "Pending", "Processing", "Completed"].map((status) => (
                <button key={status} className={`btn btn-sm ${filter === status ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setFilter(status)}>
                  {status}
                </button>
              ))}
            </div>
            <span className="small text-secondary">Urgent → High → Normal</span>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Delivery location</th><th>Priority</th><th>Status</th><th>Update status</th></tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="fw-semibold">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.items}</td>
                    <td>{order.location}</td>
                    <td><span className={`badge text-bg-${priorityColor(order.priority)}`}>{order.priority}</span></td>
                    <td>{order.status}</td>
                    <td>
                      <select className="form-select form-select-sm" value={order.status} onChange={(e) => updateStatus(order.id, e.target.value)} aria-label={`Update ${order.id} status`}>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
                {filteredOrders.length === 0 && <tr><td colSpan="7" className="text-center text-secondary py-4">No matching orders.</td></tr>}
              </tbody>
            </table>
          </div>
          <p className="small text-secondary mb-0">Demo only: order changes are not saved.</p>
        </div>
      </div>
    </>
  );
}