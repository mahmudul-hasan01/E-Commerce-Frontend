import Banner from "./Banner/Banner";
import CategoryShowCase from "./CategoryShowCase/CategoryShowCase";
import HomeCategory from "./HomeCategory/HomeCategory";
import Location from "./Location/Location";
import Marchant from "./Marchant/Marchant";
import Register from "./Register/Register";

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeCategory />
            <CategoryShowCase />
            <Register />
            <Location />
            <Marchant />
        </div>
    );
};

export default Home;