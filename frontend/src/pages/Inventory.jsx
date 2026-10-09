import { useMemo, useState } from "react";

const initialInventory = [
  { id: "PR-101", product: "Rice 5kg", category: "Groceries", warehouse: "North Distribution Center", stock: 24, reorder: 40, price: 320 },
  { id: "PR-102", product: "Cooking Oil 1L", category: "Groceries", warehouse: "Central Fulfillment Hub", stock: 120, reorder: 30, price: 145 },
  { id: "PR-103", product: "Milk 1L", category: "Dairy", warehouse: "Central Fulfillment Hub", stock: 18, reorder: 35, price: 65 },
  { id: "PR-104", product: "Wheat Flour 5kg", category: "Groceries", warehouse: "South Storage Center", stock: 75, reorder: 25, price: 260 },
  { id: "PR-105", product: "Biscuits Pack", category: "Snacks", warehouse: "East Logistics Hub", stock: 12, reorder: 20, price: 40 },
];

export default function Inventory() {
  const [inventory, setInventory] = useState(initialInventory);
  const [search, setSearch] = useState("");
  const [warehouseFilter, setWarehouseFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");

  const warehouses = [...new Set(inventory.map((item) => item.warehouse))];

  const filtered = useMemo(() => inventory.filter((item) => {
    const matchesSearch = `${item.product} ${item.id} ${item.category}`
      .toLowerCase().includes(search.toLowerCase());
    const matchesWarehouse = warehouseFilter === "All" || item.warehouse === warehouseFilter;
    const matchesStock =
      stockFilter === "All" ||
      (stockFilter === "Low" && item.stock <= item.reorder) ||
      (stockFilter === "Healthy" && item.stock > item.reorder);
    return matchesSearch && matchesWarehouse && matchesStock;
  }), [inventory, search, warehouseFilter, stockFilter]);

  function updateStock(id, amount) {
    setInventory((current) => current.map((item) =>
      item.id === id ? { ...item, stock: Math.max(0, item.stock + amount) } : item
    ));
  }

  const lowStockCount = inventory.filter((item) => item.stock <= item.reorder).length;

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <div>
          <h2 className="h5 fw-bold mb-1">Inventory Management</h2>
          <p className="text-secondary mb-0">Track product quantities across warehouse locations.</p>
        </div>
        <span className="badge text-bg-danger fs-6">{lowStockCount} low-stock items</span>
      </div>

      <div className="alert alert-warning">
        <i className="bi bi-exclamation-triangle me-2"></i>
        {lowStockCount} sample inventory items are at or below their reorder level.
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="row g-3 mb-4">
            <div className="col-12 col-lg-5">
              <input className="form-control" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <select className="form-select" value={warehouseFilter} onChange={(e) => setWarehouseFilter(e.target.value)}>
                <option value="All">All warehouses</option>
                {warehouses.map((warehouse) => <option key={warehouse}>{warehouse}</option>)}
              </select>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <select className="form-select" value={stockFilter} onChange={(e) => setStockFilter(e.target.value)}>
                <option value="All">All stock levels</option>
                <option value="Low">Low stock</option>
                <option value="Healthy">Healthy stock</option>
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr><th>Product</th><th>Category</th><th>Warehouse</th><th>Stock</th><th>Reorder at</th><th>Status</th><th>Demo adjustment</th></tr>
              </thead>
              <tbody>
                {filtered.map((item) => {
                  const low = item.stock <= item.reorder;
                  return (
                    <tr key={item.id}>
                      <td><div className="fw-semibold">{item.product}</div><div className="small text-secondary">{item.id}</div></td>
                      <td>{item.category}</td>
                      <td>{item.warehouse}</td>
                      <td className="fw-semibold">{item.stock}</td>
                      <td>{item.reorder}</td>
                      <td><span className={`badge text-bg-${low ? "danger" : "success"}`}>{low ? "Low stock" : "Healthy"}</span></td>
                      <td>
                        <div className="btn-group btn-group-sm">
                          <button className="btn btn-outline-secondary" onClick={() => updateStock(item.id, -1)} aria-label="Decrease stock">−</button>
                          <button className="btn btn-outline-secondary" onClick={() => updateStock(item.id, 1)} aria-label="Increase stock">+</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && <tr><td colSpan="7" className="text-center text-secondary py-4">No inventory items found.</td></tr>}
              </tbody>
            </table>
          </div>
          <p className="small text-secondary mb-0">Stock adjustments are temporary browser state; they are not saved to MongoDB.</p>
        </div>
      </div>
    </>
  );
}