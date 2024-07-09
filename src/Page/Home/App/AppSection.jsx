import { Link } from "react-router-dom";
import img1 from '../../../assets/images/app/01.jpg'
import img2 from '../../../assets/images/app/02.jpg'

const AppSection = () => {

    const btnText = 'Sign up for free'
    const title = 'Shop Anytime, Anywhre'
    const dase = 'Take shop on your any device with our app & learn all time what you want. just download & instoll & start to learn'

    return (
        <div className="py-20">
            <div className="flex justify-center">
                <Link to={'/shop'} className="px-4 py-2 rounded-lg border-2 border-[#FFE040] hover:bg-[#FFE040] duration-500 hover:text-white font-semibold">{btnText}</Link>
            </div>
            <div className="w-2/5 mx-auto text-center space-y-3 mt-5">
                <h1 className="text-4xl font-semibold">{title}</h1>
                <p>{dase}</p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
        </div>
    );
};

export default AppSection;