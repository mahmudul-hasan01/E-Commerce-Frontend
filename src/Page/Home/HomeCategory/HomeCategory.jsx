import { Link } from "react-router-dom";
import { FaWindows } from "react-icons/fa6";

const HomeCategory = () => {

    const subTitle = "Choose Any Products";
    const title = "Buy Everything with Us";
    const btnText = "Get Started Now";

    const categoryList = [
        {
            imgUrl: 'src/assets/images/category/01.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            iconName: 'icofont-brand-windows',
            title: 'DSLR Camera',
        },
        {
            imgUrl: 'src/assets/images/category/02.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            iconName: 'icofont-brand-windows',
            title: 'Shoes',
        },
        {
            imgUrl: 'src/assets/images/category/03.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            iconName: 'icofont-brand-windows',
            title: 'Photography',
        },
        {
            imgUrl: 'src/assets/images/category/04.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            iconName: 'icofont-brand-windows',
            title: 'Formal Dress',
        },
        {
            imgUrl: 'src/assets/images/category/05.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            iconName: 'icofont-brand-windows',
            title: 'Colorful Bags',
        },
        {
            imgUrl: 'src/assets/images/category/06.jpg',
            imgAlt: 'category rajibraj91 rajibraj',
            iconName: 'icofont-brand-windows',
            title: 'Home Decor',
        },
    ]

    return (
        <div className="py-20 container mx-auto">
            <div>
                <h1 className="text-[#FFE040] text-2xl text-center"> {subTitle}</h1>
                <h1 className="text-center font-semibold text-3xl py-5">{title}</h1>
            </div>
            <div className="grid grid-cols-3 gap-7 mb-10">
                {
                    categoryList.map((item, i) => <div key={i} className="hover:scale-105 hover:text-[#FFE040] duration-500 relative">
                        <Link to={'/shop'}>
                            <div>
                                <img className="rounded-sm" src={item.imgUrl} alt="" />
                            </div>
                            <div className="flex gap-4 items-center absolute bottom-2 left-3">
                                <FaWindows className="text-4xl px-2 py-2 rounded-full bg-[#FFE040]" />
                                <h1 className="font-semibold">{item.title}</h1>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={'/shop'} className="px-4 py-2 rounded-lg border-2 border-[#FFE040] hover:bg-[#FFE040] duration-500 hover:text-white font-semibold">{btnText}</Link>
            </div>
        </div>
    );
};

export default HomeCategory;