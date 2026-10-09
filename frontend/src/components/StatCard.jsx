export default function StatCard({ title, value, icon, note, color = "primary" }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <p className="text-secondary mb-2">{title}</p>
            <h3 className="fw-bold mb-2">{value}</h3>
            <p className="small text-secondary mb-0">{note}</p>
          </div>
          <div className={`rounded-3 p-3 bg-${color}-subtle text-${color}`}>
            <i className={`bi ${icon} fs-4`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}