import Banner from "./Banner/Banner";
import CategoryShowCase from "./CategoryShowCase/CategoryShowCase";
import HomeCategory from "./HomeCategory/HomeCategory";
import Register from "./Register/Register";

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeCategory />
            <CategoryShowCase />
            <Register />
        </div>
    );
};

export default Home;