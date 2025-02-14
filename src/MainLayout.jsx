import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;