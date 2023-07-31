import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;