import client from '../../../assets/images/clients/bg.png'
import img from '../../../assets/images/clients/avater.jpg'
import { Link } from 'react-router-dom'

const Location = () => {

    const title = " More Then 60,000 Customers";

    const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

    const clientsList = [
        {
            imgUrl: '/src/assets/images/clients/avater.jpg',
            imgAlt: 'education thumb rajibraj91 rajibraj',
            text: 'Join with Us',
        },
        {
            imgUrl: '/src/assets/images/clients/avater.jpg',
            imgAlt: 'education thumb rajibraj91 rajibraj',
            text: 'Join with Us',
        },
        {
            imgUrl: '/src/assets/images/clients/avater.jpg',
            imgAlt: 'education thumb rajibraj91 rajibraj',
            text: 'Join with Us',
        },
        {
            imgUrl: '/src/assets/images/clients/avater.jpg',
            imgAlt: 'education thumb rajibraj91 rajibraj',
            text: 'Join with Us',
        },
        {
            imgUrl: '/src/assets/images/clients/avater.jpg',
            imgAlt: 'education thumb rajibraj91 rajibraj',
            text: 'Join with Us',
        },
        {
            imgUrl: '/src/assets/images/clients/avater.jpg',
            imgAlt: 'education thumb rajibraj91 rajibraj',
            text: 'Join with Us',
        },
        {
            imgUrl: '/src/assets/images/clients/avater.jpg',
            imgAlt: 'education thumb rajibraj91 rajibraj',
            text: 'Join with Us',
        },
    ]

    return (
        <div className="container py-10 mx-auto space-y-8">
            <div className="text-center w-2/5 mx-auto space-y-2">
                <h1 className="font-semibold text-3xl">{title}</h1>
                <p>{desc}</p>
            </div>
            <div className='h-[400px] w-[70%] mx-auto relative' style={{ backgroundImage: `url(${client})` }}>
                {/* 11111 */}
                <div className='absolute top-16 left-28'>
                    <div className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
                        {/* Hover button */}
                        {/* <img src={img} className="bg-red-500 w-5 h-5 rounded-full" alt="" /> */}
                        <button className="bg-red-500 w-5 h-5 rounded-full"></button>
                        {/* Hover Text */}
                        <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                            <p className="h-fit rounded-md bg-white px-3 py-2 shadow-[0px_0px_10px_0px_#F7CE26]"> Join with Us</p>
                        </div>
                    </div>
                </div>
                {/* 2222 */}
                <div className='absolute top-5 right-48'>
                    <div className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
                        {/* Hover button */}
                        {/* <img src={img} className="bg-red-500 w-5 h-5 rounded-full" alt="" /> */}
                        <button className="bg-yellow-400 w-5 h-5 rounded-full"></button>
                        {/* Hover Text */}
                        <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                            <p className="h-fit rounded-md bg-white px-3 py-2 shadow-[0px_0px_10px_0px_#F7CE26]"> Join with Us</p>
                        </div>
                    </div>
                </div>
                {/* 3333 */}
                <div className='absolute top-72 right-[50%]'>
                    <div className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
                        {/* Hover button */}
                        {/* <img src={img} className="bg-red-500 w-5 h-5 rounded-full" alt="" /> */}
                        <button className="bg-blue-500 w-5 h-5 rounded-full"></button>
                        {/* Hover Text */}
                        <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                            <p className="h-fit rounded-md bg-white px-3 py-2 shadow-[0px_0px_10px_0px_#F7CE26]"> Join with Us</p>
                        </div>
                    </div>
                </div>
                {/* 4444 */}
                <div className='absolute top-28 right-[40%]'>
                    <div className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
                        {/* Hover button */}
                        {/* <img src={img} className="bg-red-500 w-5 h-5 rounded-full" alt="" /> */}
                        <button className="bg-lime-500 w-5 h-5 rounded-full"></button>
                        {/* Hover Text */}
                        <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                            <p className="h-fit rounded-md bg-white px-3 py-2 shadow-[0px_0px_10px_0px_#F7CE26]"> Join with Us</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='section-wrpper'>
                <div className='clients'>
                    {
                        clientsList.map((val, i) => (
                            <div key={i} className='client-list'>
                                <Link to={'/sign-up'} className={'client-content'}>
                                    <span>{val.text}</span>
                                </Link>
                                <div className='client-thumb'>
                                    <img src={val.imgUrl} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div> */}
        </div>
    );
};

export default Location;