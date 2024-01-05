import { Outlet } from "react-router-dom";
import Navbar from "../Components/Homepage/Navbar";
import Footer from "../Components/Homepage/Footer";

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
