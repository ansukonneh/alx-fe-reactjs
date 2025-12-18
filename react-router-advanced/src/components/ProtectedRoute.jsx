import { Navigate } from "react-router-dom";

// Fake auth check
const isAuthenticated = () => {
  // replace with real auth logic
  return localStorage.getItem("auth") === "true";
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
