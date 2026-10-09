import { useState } from "react";

const options = [
  { id: "WH-001", name: "North Distribution Center", location: "Delhi", distance: 12, availability: 96, capacity: 74 },
  { id: "WH-002", name: "Central Fulfillment Hub", location: "Agra", distance: 4, availability: 88, capacity: 70 },
  { id: "WH-003", name: "South Storage Center", location: "Hyderabad", distance: 28, availability: 100, capacity: 97 },
];

export default function Optimization() {
  const [destination, setDestination] = useState("Agra");
  const [selectedWarehouse, setSelectedWarehouse] = useState("WH-002");
  const [showResult, setShowResult] = useState(false);

  const selected = options.find((item) => item.id === selectedWarehouse);

  function recommend() {
    const best = options
      .filter((item) => item.capacity < 90 && item.availability >= 80)
      .sort((a, b) => a.distance - b.distance)[0];

    if (best) setSelectedWarehouse(best.id);
    setShowResult(true);
  }

  return (
    <>
      <div className="mb-4">
        <h2 className="h5 fw-bold mb-1">Warehouse & Route Optimization</h2>
        <p className="text-secondary mb-0">Explore candidate warehouses for an order destination.</p>
      </div>

      <div className="alert alert-info">
        <i className="bi bi-info-circle me-2"></i>
        Demo recommendation: selection currently uses simple sample rules. Real Dijkstra routing and optimization logic will be added separately.
      </div>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h3 className="h6 fw-bold mb-3">Optimization Request</h3>
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-5">
              <label className="form-label">Order destination</label>
              <select className="form-select" value={destination} onChange={(e) => { setDestination(e.target.value); setShowResult(false); }}>
                <option>Agra</option>
                <option>Delhi</option>
                <option>Jaipur</option>
                <option>Hyderabad</option>
              </select>
            </div>
            <div className="col-12 col-md-5">
              <label className="form-label">Candidate warehouse</label>
              <select className="form-select" value={selectedWarehouse} onChange={(e) => { setSelectedWarehouse(e.target.value); setShowResult(false); }}>
                {options.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
              </select>
            </div>
            <div className="col-12 col-md-2 d-grid">
              <button className="btn btn-primary" onClick={recommend}>
                <i className="bi bi-cpu me-2"></i>Recommend
              </button>
            </div>
          </div>
        </div>
      </div>

      {showResult && selected && (
        <div className="card border-primary shadow-sm mb-4">
          <div className="card-body">
            <span className="badge text-bg-primary mb-2">Demo recommendation</span>
            <h3 className="h5 fw-bold">{selected.name}</h3>
            <p className="text-secondary">Candidate location: {selected.location} · Order destination: {destination}</p>

            <div className="row g-3 mb-3">
              <div className="col-6 col-lg-4">
                <div className="border rounded p-3 h-100">
                  <div className="text-secondary small">Sample distance</div>
                  <div className="fs-4 fw-bold">{selected.distance} km</div>
                </div>
              </div>
              <div className="col-6 col-lg-4">
                <div className="border rounded p-3 h-100">
                  <div className="text-secondary small">Basket availability</div>
                  <div className="fs-4 fw-bold">{selected.availability}%</div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="border rounded p-3 h-100">
                  <div className="text-secondary small">Capacity used</div>
                  <div className="fs-4 fw-bold">{selected.capacity}%</div>
                </div>
              </div>
            </div>

            <h4 className="h6 fw-bold">Why this candidate?</h4>
            <ul className="mb-0">
              <li>It meets the demo stock-availability threshold.</li>
              <li>Its sample capacity usage is below the demo cutoff.</li>
              <li>It is the nearest qualifying candidate in the sample dataset.</li>
            </ul>
          </div>
        </div>
      )}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h3 className="h6 fw-bold mb-3">Warehouse Comparison</h3>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr><th>Warehouse</th><th>Distance</th><th>Basket availability</th><th>Capacity used</th><th>Eligibility</th></tr>
              </thead>
              <tbody>
                {options.map((option) => {
                  const eligible = option.capacity < 90 && option.availability >= 80;
                  return (
                    <tr key={option.id}>
                      <td className="fw-semibold">{option.name}</td>
                      <td>{option.distance} km</td>
                      <td>{option.availability}%</td>
                      <td>{option.capacity}%</td>
                      <td><span className={`badge text-bg-${eligible ? "success" : "secondary"}`}>{eligible ? "Qualifies in demo" : "Filtered in demo"}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}