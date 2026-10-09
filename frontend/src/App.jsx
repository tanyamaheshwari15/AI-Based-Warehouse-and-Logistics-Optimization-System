import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SessionProvider } from "./SessionContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from "./components/Layout.jsx";
import AIInsights from "./pages/AIInsights.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Optimization from "./pages/Optimization.jsx";
import Orders from "./pages/Orders.jsx";
import Signup from "./pages/Signup.jsx";
import Warehouses from "./pages/Warehouses.jsx";
import "./App.css";

export default function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute> }>
              
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/warehouses" element={<Warehouses />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/optimization" element={<Optimization />} />
            <Route path="/ai-insights" element={<AIInsights />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}
