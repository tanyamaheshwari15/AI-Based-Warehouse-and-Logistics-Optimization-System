import { useState } from "react";

const initialWarehouses = [
  { id: "WH-001", name: "North Distribution Center", location: "Delhi", capacity: 5000, used: 4100, status: "Active" },
  { id: "WH-002", name: "Central Fulfillment Hub", location: "Agra", capacity: 3500, used: 2450, status: "Active" },
  { id: "WH-003", name: "South Storage Center", location: "Hyderabad", capacity: 4000, used: 3900, status: "Near capacity" },
  { id: "WH-004", name: "East Logistics Hub", location: "Kolkata", capacity: 3000, used: 1500, status: "Active" },
];

export default function Warehouses() {
  const [warehouses, setWarehouses] = useState(initialWarehouses);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");

  function addWarehouse(event) {
    event.preventDefault();
    if (!name.trim() || !location.trim() || Number(capacity) <= 0) return;

    setWarehouses((current) => [
      ...current,
      {
        id: `WH-${String(current.length + 1).padStart(3, "0")}`,
        name: name.trim(),
        location: location.trim(),
        capacity: Number(capacity),
        used: 0,
        status: "Active",
      },
    ]);
    setName("");
    setLocation("");
    setCapacity("");
    setShowForm(false);
  }

  const filtered = warehouses.filter((warehouse) =>
    `${warehouse.name} ${warehouse.location} ${warehouse.id}`
      .toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <div>
          <h2 className="h5 fw-bold mb-1">Warehouse Network</h2>
          <p className="text-secondary mb-0">Manage warehouse locations and storage capacity.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          <i className="bi bi-plus-lg me-2"></i>Add Warehouse
        </button>
      </div>

      {showForm && (
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <h3 className="h6 fw-bold">New Warehouse</h3>
            <form onSubmit={addWarehouse}>
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <label className="form-label">Warehouse name</label>
                  <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label">Location</label>
                  <input className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label">Capacity (units)</label>
                  <input type="number" min="1" className="form-control" value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
                </div>
              </div>
              <button className="btn btn-success mt-3" type="submit">Save Warehouse</button>
              <button className="btn btn-light border mt-3 ms-2" type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="row g-3 mb-3">
            <div className="col-12 col-md-6">
              <input className="form-control" placeholder="Search by warehouse or location..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="col-12 col-md-6 text-md-end text-secondary small align-self-center">
              {filtered.length} warehouses shown · demo data
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr><th>ID</th><th>Warehouse</th><th>Location</th><th>Capacity used</th><th>Status</th></tr>
              </thead>
              <tbody>
                {filtered.map((warehouse) => {
                  const percentage = Math.round((warehouse.used / warehouse.capacity) * 100);
                  return (
                    <tr key={warehouse.id}>
                      <td>{warehouse.id}</td>
                      <td className="fw-semibold">{warehouse.name}</td>
                      <td>{warehouse.location}</td>
                      <td>
                        <div className="small mb-1">{warehouse.used.toLocaleString()} / {warehouse.capacity.toLocaleString()} units ({percentage}%)</div>
                        <div className="progress">
                          <div className={`progress-bar ${percentage >= 90 ? "bg-warning" : ""}`} style={{ width: `${percentage}%` }}></div>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${percentage >= 90 ? "text-bg-warning" : "text-bg-success"}`}>
                          {percentage >= 90 ? "Near capacity" : warehouse.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && <tr><td colSpan="5" className="text-center text-secondary py-4">No warehouses found.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}