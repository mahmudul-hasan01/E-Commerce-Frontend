import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import logo from '../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);


    return (
        <nav className="flex items-center justify-between px-4 py-2 container">
            <Link to={'/'} className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold hover:cursor-pointer">
                <img src={logo} alt="" />
            </Link>
            <ul className="hidden items-center font-semibold justify-between gap-10 lg:flex">
                <Link to={'/'}>
                    <li className="group flex  cursor-pointer flex-col">
                        Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to={'/shop'}>
                    <li className="group flex  cursor-pointer flex-col">
                        Shop<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to={'/blog'}>
                    <li className="group flex  cursor-pointer flex-col">
                        Blog<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to={'/about'}>
                    <li className="group flex  cursor-pointer flex-col">
                        About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to={'/contact'}>
                    <li className="group flex  cursor-pointer flex-col">
                        Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to={'/carate-account'}>
                    <li className="group flex  cursor-pointer flex-col py-2 px-4 rounded-md bg-[#F7CE26]">
                        Create Account<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to={'/login'}>
                    <li className="group flex  cursor-pointer flex-col">
                        Login<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform lg:hidden">
                {
                    !dropDownState ?
                        <FaAlignJustify className='text-2xl' />
                        :
                        <IoClose className='text-3xl' />
                }
                {dropDownState && (
                    <ul className="z-20 font-semibold gap-2 text-center p-16 bg-yellow-300 h-screen absolute -right-4 top-11 flex w-screen flex-col rounded-lg  text-base ">
                        <Link to={'/'}>
                            <li className="group flex  cursor-pointer flex-col">
                                Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to={'/shop'}>
                            <li className="group flex  cursor-pointer flex-col">
                                Shop<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to={'/blog'}>
                            <li className="group flex cursor-pointer flex-col">
                                Blog<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to={'/about'}>
                            <li className="group flex  cursor-pointer flex-col">
                                About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to={'/contact'}>
                            <li className="group flex  cursor-pointer flex-col">
                                Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to={'/carate-account'}>
                            <li className="group flex  cursor-pointer flex-col ">
                                Create Account<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to={'/login'}>
                            <li className="group flex  cursor-pointer flex-col">
                                Login<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#F7CE26] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;