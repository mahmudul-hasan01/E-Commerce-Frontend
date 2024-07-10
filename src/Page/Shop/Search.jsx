/* eslint-disable react/prop-types */

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Search = ({ products, GridList }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const filteredProduct = products.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

    return (
        <div className="">
            <form className='relative shadow-2xl'>
                <input type="text" name='search' placeholder='Search....' id='search' defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='bg-transparent px-4 py-3 ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text' />
                <button type='submit' className='absolute right-5 top-3 text-2xl'>
                    <IoSearch />
                </button>
            </form>
            <ul className='flex flex-wrap gap-4 mt-7'>
                {
                    searchTerm && filteredProduct.map((product, i) => <li key={i} className='  flex items-center gap-2'>
                        <img src={product.img} className="w-12 h-12 rounded-sm" alt="" />
                        <div>
                            <Link to={`/shop/${product.id}`}>{product?.name}</Link>
                             <p className="font-bold">${product.price}</p>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Search;