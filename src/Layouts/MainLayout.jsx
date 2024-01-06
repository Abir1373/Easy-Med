import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Homepage/Navbar";
import Footer from "../Components/Homepage/Footer";

export default function MainLayout() {
    const location = useLocation()
    const noheader = location?.pathname.includes("login") || location?.pathname.includes("registration")
    return (
        <div>
            {noheader || <Navbar />}
            <Outlet />
            {noheader || <Footer />}
        </div>
    )
}
