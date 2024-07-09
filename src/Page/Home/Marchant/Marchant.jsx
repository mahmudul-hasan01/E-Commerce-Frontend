import bgImg from '../../../assets/images/bg-img/15.jpg'
import img from '../../../assets/images/instructor/01.png'
import CountUp from 'react-countup';
import { HiUsers } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GrCertificate } from "react-icons/gr";

const Marchant = () => {

    const subTitle = "Why Choose Us";
    const title = "Become a Marchant";
    const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
    const btnText = "Apply Now";

    const countList = [
        {
            iconName: HiUsers,
            color: '#F46028',
            count: '12600',
            text: 'Marchant Enrolled',
        },
        {
            iconName: GrCertificate,
            color: '#25C677',
            count: '30',
            text: 'Certified Courses',
        },
        {
            iconName: FaBell,
            color: '#D9BE38',
            count: '100',
            text: 'Rewards and GitCards',
        },
    ]

    return (
        <div className=' bg-cover flex justify-evenly items-center py-10' style={{ backgroundImage: `url(${bgImg})` }}>
            <div>
                {
                    countList.map((item, i) => (
                        <div key={i}>
                            <div className='flex items-center gap-3 space-y-5'>
                                <item.iconName className={'text-3xl text-[#FC5700]'} />
                                <div className='font-semibold text-xl text-white'>
                                    <span>
                                        <CountUp end={item.count} />+
                                    </span>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='w-1/3 space-y-4'>
                <h1 className='text-xl'>{subTitle}</h1>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p>{desc}</p>
                <Link to={'/'}>
                  <button  className='py-2 px-4 mt-3 bg-white hover:text-yellow-400 duration-500 rounded-md font-semibold'>{btnText}</button>
                </Link>
            </div>
        </div>
    );
};

export default Marchant;