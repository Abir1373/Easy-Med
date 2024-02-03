import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const Location = useLocation()
    if (loading) {
        <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to={`/login`} state={{ from: Location }} replace></Navigate>

    }
}

export default PrivateRoute