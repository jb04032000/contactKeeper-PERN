import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const isAuthenticated = false;
const loading = false;
const PrivateRoute = () => {
  return !isAuthenticated && !loading ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
