import { useState } from "react";
import "./App.css";

function App() {
    const [page, setPage] = useState("login");
    const [loggedIn, setLoggedIn] = useState(false);
    const [authMode, setAuthMode] = useState("login");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [products] = useState([
        { id: 1, name: "Laptop", category: "Electronics", stock: 120, status: "Available" },
        { id: 2, name: "Keyboard", category: "Accessories", stock: 45, status: "Low Stock" },
        { id: 3, name: "Mouse", category: "Accessories", stock: 90, status: "Available" },
        { id: 4, name: "Monitor", category: "Electronics", stock: 18, status: "Low Stock" },
    ]);

    const [orders] = useState([
        { id: "#ORD001", customer: "ABC Pvt Ltd", product: "Laptop", quantity: 20, status: "Processing" },
        { id: "#ORD002", customer: "XYZ Ltd", product: "Monitor", quantity: 10, status: "Shipped" },
        { id: "#ORD003", customer: "Tech World", product: "Mouse", quantity: 30, status: "Delivered" },
    ]);

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            setLoggedIn(true);
            setPage("dashboard");
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();

        if (name && email && password) {
            setLoggedIn(true);
            setPage("dashboard");
        }
    };

    const logout = () => {
        setLoggedIn(false);
        setEmail("");
        setPassword("");
        setPage("login");
    };

    // LOGIN / SIGNUP
    if (!loggedIn) {
        return (
            <div className="auth-container">
                <div className="auth-card">

                    <div className="auth-logo">
                        <div className="logo-box">AI</div>
                        <h1>Warehouse AI</h1>
                    </div>

                    <p className="auth-subtitle">
                        AI-Based Warehouse & Logistics Optimization
                    </p>

                    {authMode === "login" ? (
                        <>
                            <h2>Welcome Back</h2>
                            <p className="auth-text">Login to continue to your dashboard</p>

                            <form onSubmit={handleLogin}>

                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <button className="primary-btn">
                                    Login
                                </button>
                            </form>

                            <p className="switch-auth">
                                Don't have an account?
                                <button onClick={() => setAuthMode("signup")}>
                                    Sign Up
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <h2>Create Account</h2>
                            <p className="auth-text">Create your warehouse management account</p>

                            <form onSubmit={handleSignup}>

                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />

                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <button className="primary-btn">
                                    Create Account
                                </button>
                            </form>

                            <p className="switch-auth">
                                Already have an account?
                                <button onClick={() => setAuthMode("login")}>
                                    Login
                                </button>
                            </p>
                        </>
                    )}

                </div>
            </div>
        );
    }

    // MAIN APPLICATION
    return (
        <div className="app">

            {/* SIDEBAR */}
            <aside className="sidebar">

                <div className="brand">
                    <div className="logo-box">AI</div>
                    <div>
                        <h2>Warehouse AI</h2>
                        <span>Logistics System</span>
                    </div>
                </div>

                <nav>

                    <button
                        className={page === "dashboard" ? "nav-btn active" : "nav-btn"}
                        onClick={() => setPage("dashboard")}
                    >
                        🏠 Dashboard
                    </button>

                    <button
                        className={page === "warehouses" ? "nav-btn active" : "nav-btn"}
                        onClick={() => setPage("warehouses")}
                    >
                        🏭 Warehouses
                    </button>

                    <button
                        className={page === "inventory" ? "nav-btn active" : "nav-btn"}
                        onClick={() => setPage("inventory")}
                    >
                        📦 Inventory
                    </button>

                    <button
                        className={page === "orders" ? "nav-btn active" : "nav-btn"}
                        onClick={() => setPage("orders")}
                    >
                        🛒 Orders
                    </button>

                    <button
                        className={page === "optimization" ? "nav-btn active" : "nav-btn"}
                        onClick={() => setPage("optimization")}
                    >
                        ⚙️ Optimization
                    </button>

                    <button
                        className={page === "ai" ? "nav-btn active" : "nav-btn"}
                        onClick={() => setPage("ai")}
                    >
                        🤖 AI Insights
                    </button>

                </nav>

                <button className="logout-btn" onClick={logout}>
                    🚪 Logout
                </button>

            </aside>


            {/* MAIN AREA */}
            <main className="main">

                <header className="topbar">
                    <div>
                        <h1>
                            {page === "dashboard" && "Dashboard"}
                            {page === "warehouses" && "Warehouses"}
                            {page === "inventory" && "Inventory"}
                            {page === "orders" && "Orders"}
                            {page === "optimization" && "Optimization"}
                            {page === "ai" && "AI Insights"}
                        </h1>

                        <p>AI-Based Warehouse & Logistics Optimization System</p>
                    </div>

                    <div className="user-profile">
                        <div className="avatar">A</div>
                        <span>Admin</span>
                    </div>
                </header>


                {/* DASHBOARD */}
                {page === "dashboard" && (
                    <Dashboard
                        setPage={setPage}
                        products={products}
                        orders={orders}
                    />
                )}


                {/* WAREHOUSES */}
                {page === "warehouses" && (
                    <Warehouses />
                )}


                {/* INVENTORY */}
                {page === "inventory" && (
                    <Inventory products={products} />
                )}


                {/* ORDERS */}
                {page === "orders" && (
                    <Orders orders={orders} />
                )}


                {/* OPTIMIZATION */}
                {page === "optimization" && (
                    <Optimization setPage={setPage} />
                )}


                {/* AI INSIGHTS */}
                {page === "ai" && (
                    <AIInsights />
                )}

            </main>
        </div>
    );
}


/* ================= DASHBOARD ================= */

function Dashboard({ setPage, products, orders }) {

    return (
        <>

            <div className="stats">

                <div className="stat-card">
                    <span>🏭</span>
                    <div>
                        <p>Total Warehouses</p>
                        <h2>08</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <span>📦</span>
                    <div>
                        <p>Total Products</p>
                        <h2>{products.length * 100}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <span>🛒</span>
                    <div>
                        <p>Total Orders</p>
                        <h2>356</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <span>🚚</span>
                    <div>
                        <p>Pending Delivery</p>
                        <h2>42</h2>
                    </div>
                </div>

            </div>


            {/* WORKFLOW */}

            <div className="section-card">

                <h2>System Workflow</h2>

                <div className="workflow">

                    <div className="workflow-box">
                        📦
                        <strong>Products / Inventory</strong>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="workflow-box">
                        🛒
                        <strong>Orders</strong>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="workflow-box optimization-box">
                        ⚙️
                        <strong>Optimization</strong>
                    </div>

                    <div className="branch">

                        <div>
                            <div className="arrow">↙</div>
                            <div className="workflow-box small">
                                🏭
                                <strong>Warehouse Selection</strong>
                            </div>
                        </div>

                        <div>
                            <div className="arrow">↘</div>
                            <div className="workflow-box small">
                                🚚
                                <strong>Route Optimization</strong>
                            </div>
                        </div>

                    </div>

                    <div className="arrow">↓</div>

                    <div className="workflow-box ai-box">
                        🤖
                        <strong>AI Insights</strong>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="workflow-box">
                        📊
                        <strong>Dashboard</strong>
                    </div>

                </div>

            </div>


            {/* QUICK ACTIONS */}

            <div className="section-card">

                <h2>Quick Actions</h2>

                <div className="quick-actions">

                    <button onClick={() => setPage("inventory")}>
                        📦 Manage Inventory
                    </button>

                    <button onClick={() => setPage("orders")}>
                        🛒 View Orders
                    </button>

                    <button onClick={() => setPage("optimization")}>
                        ⚙️ Run Optimization
                    </button>

                    <button onClick={() => setPage("ai")}>
                        🤖 View AI Insights
                    </button>

                </div>

            </div>

        </>
    );
}


/* ================= WAREHOUSES ================= */

function Warehouses() {

    const warehouses = [
        ["WH-001", "Agra Central", "Agra", "82%", "Active"],
        ["WH-002", "Delhi North", "Delhi", "67%", "Active"],
        ["WH-003", "Noida Hub", "Noida", "91%", "Near Capacity"],
        ["WH-004", "Jaipur Hub", "Jaipur", "54%", "Active"],
    ];

    return (
        <div className="section-card">

            <div className="section-header">
                <h2>Warehouse Management</h2>
                <button className="primary-small">+ Add Warehouse</button>
            </div>

            <div className="table-container">

                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Warehouse</th>
                            <th>Location</th>
                            <th>Capacity</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {warehouses.map((warehouse) => (
                            <tr key={warehouse[0]}>
                                <td>{warehouse[0]}</td>
                                <td>{warehouse[1]}</td>
                                <td>{warehouse[2]}</td>
                                <td>{warehouse[3]}</td>
                                <td>
                                    <span className="status">
                                        {warehouse[4]}
                                    </span>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}


/* ================= INVENTORY ================= */

function Inventory({ products }) {

    return (
        <div className="section-card">

            <div className="section-header">
                <h2>Products / Inventory</h2>
                <button className="primary-small">+ Add Product</button>
            </div>

            <div className="table-container">

                <table>

                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Stock</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <span
                                        className={
                                            product.status === "Available"
                                                ? "status"
                                                : "status warning"
                                        }
                                    >
                                        {product.status}
                                    </span>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}


/* ================= ORDERS ================= */

function Orders({ orders }) {

    return (
        <div className="section-card">

            <div className="section-header">
                <h2>Orders</h2>
                <button className="primary-small">+ New Order</button>
            </div>

            <div className="table-container">

                <table>

                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    <span className="status">
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}


/* ================= OPTIMIZATION ================= */

function Optimization({ setPage }) {

    return (
        <>

            <div className="optimization-grid">

                <div className="optimization-card">

                    <div className="big-icon">🏭</div>

                    <h2>Warehouse Selection</h2>

                    <p>
                        AI selects the most suitable warehouse based on
                        inventory availability, distance and warehouse capacity.
                    </p>

                    <button
                        className="primary-btn"
                        onClick={() => setPage("ai")}
                    >
                        Run Warehouse Optimization
                    </button>

                </div>


                <div className="optimization-card">

                    <div className="big-icon">🚚</div>

                    <h2>Route Optimization</h2>

                    <p>
                        Find the optimal delivery route using distance,
                        traffic and delivery priority.
                    </p>

                    <button
                        className="primary-btn"
                        onClick={() => setPage("ai")}
                    >
                        Optimize Delivery Route
                    </button>

                </div>

            </div>


            <div className="section-card">

                <h2>Optimization Process</h2>

                <div className="process">

                    <div>1️⃣ Order Received</div>
                    <div>↓</div>
                    <div>2️⃣ Check Inventory</div>
                    <div>↓</div>
                    <div>3️⃣ Select Best Warehouse</div>
                    <div>↓</div>
                    <div>4️⃣ Calculate Best Route</div>
                    <div>↓</div>
                    <div>5️⃣ Generate AI Recommendation</div>

                </div>

            </div>

        </>
    );
}


/* ================= AI INSIGHTS ================= */

function AIInsights() {

    return (
        <>

            <div className="ai-summary">

                <div className="ai-score">
                    <span>AI Optimization Score</span>
                    <strong>87%</strong>
                </div>

                <div className="ai-score">
                    <span>Estimated Cost Saving</span>
                    <strong>18%</strong>
                </div>

                <div className="ai-score">
                    <span>Delivery Efficiency</span>
                    <strong>92%</strong>
                </div>

            </div>


            <div className="section-card">

                <h2>AI Recommendations</h2>

                <div className="recommendation">
                    <strong>📦 Inventory Recommendation</strong>
                    <p>
                        Increase stock of Monitor and Keyboard because
                        demand is predicted to increase.
                    </p>
                </div>

                <div className="recommendation">
                    <strong>🏭 Warehouse Recommendation</strong>
                    <p>
                        Delhi North warehouse is recommended for the
                        next high-priority order.
                    </p>
                </div>

                <div className="recommendation">
                    <strong>🚚 Route Recommendation</strong>
                    <p>
                        Route B can reduce estimated delivery distance
                        by approximately 14%.
                    </p>
                </div>

                <div className="recommendation">
                    <strong>⚠ Demand Prediction</strong>
                    <p>
                        High demand is expected for Electronics category
                        in the upcoming period.
                    </p>
                </div>

            </div>

        </>
    );
}

export default App;