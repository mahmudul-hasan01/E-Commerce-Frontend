/* eslint-disable react/prop-types */
import { MdRemoveRedEye } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";

const ProductCart = ({ GridList, products }) => {

    return (
        <div className={`grid ${GridList ? 'grid-cols-3' : 'grid-cols-1'} gap-3`}>
            {
                products.map((product, i) => (
                    <div key={i}>
                        {
                            GridList ?
                                <div key={i} className="relative group shadow-lg h-[470px]">
                                    <div>
                                        <img src={product.img} className="" alt="" />
                                    </div>
                                    <div className="absolute top-0 group-hover:bg-white/50 duration-500 w-full h-full">
                                        <div className="absolute top-1/3 left-1/4 hidden group-hover:flex text-4xl text-[#F15F28] duration-500 gap-3">
                                            <FaCartShopping />
                                            <FaHeart />
                                            <Link to={`/shop/${product.id}`} > <MdRemoveRedEye /></Link>
                                        </div>
                                    </div>
                                    <div className="text-center space-y-3 my-5 font-semibold">
                                        <h1>{product.name}</h1>
                                        <div className="flex justify-center">
                                            <Rating
                                                style={{ maxWidth: 140 }}
                                                value={product.ratings}
                                                readOnly
                                            />
                                        </div>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                                :
                                <div key={i} className="relative group flex items-center gap-8 ">
                                    <div>
                                        <img src={product.img} className="w-[250px]" alt="" />
                                    </div>
                                    <div className="absolute top-0 group-hover:bg-white/50 duration-500 w-full h-full">
                                        <div className="absolute top-1/3 left-[50px] hidden group-hover:flex text-4xl text-[#F15F28] duration-500 gap-3">
                                            <FaCartShopping />
                                            <FaHeart />
                                            <MdRemoveRedEye />
                                        </div>
                                    </div>
                                    <div className="text-center space-y-3 my-5 font-semibold">
                                        <h1>{product.name}</h1>
                                        <div className="flex justify-center">
                                            <Rating
                                                style={{ maxWidth: 140 }}
                                                value={product.ratings}
                                                readOnly
                                            />
                                        </div>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default ProductCart;