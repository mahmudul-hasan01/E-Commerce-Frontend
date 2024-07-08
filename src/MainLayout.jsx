import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="xl:max-w-screen-xl max-w-screen-2xl mx-auto">
            <Navbar />
            <Outlet />
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;