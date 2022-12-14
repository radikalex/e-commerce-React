import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext/UserState";

const AdminRoutes = () => {
    const { user } = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to="/profile" />;
};

export default AdminRoutes;
