import Banner from "./Banner/Banner";
import CategoryShowCase from "./CategoryShowCase/CategoryShowCase";
import HomeCategory from "./HomeCategory/HomeCategory";

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeCategory />
            <CategoryShowCase />
        </div>
    );
};

export default Home;