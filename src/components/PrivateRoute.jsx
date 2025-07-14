import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function PrivateRoute() {
   const { user } = useContext(AuthContext);
   return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;