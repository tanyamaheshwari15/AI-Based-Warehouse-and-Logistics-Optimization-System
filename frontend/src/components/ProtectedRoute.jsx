import { Navigate } from "react-router-dom";
import useSession from "../useSession.js";

export default function ProtectedRoute({ children }) {
  const { user } = useSession();
  return user ? children : <Navigate to="/login" replace />;
}
