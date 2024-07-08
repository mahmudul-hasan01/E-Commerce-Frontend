import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet />
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;