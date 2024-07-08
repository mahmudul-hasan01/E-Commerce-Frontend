import bgImage from '../../../assets/images/bg-img/06.jpg'
import product from '../../../../public/products.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import SelectedCategory from '../../../Components/SelectedCategory/SelectedCategory';
// import '../../../assets/css/style.min.css'

const Banner = () => {


    const [searchInput, setSearchInput] = useState('')
    const [fiterdProduct, setFiterdProduct] = useState(product)
    console.log(fiterdProduct);

    const bannerList = [
        {
            iconName: "icofont-users-alt-4",
            text: "1.5 Million Customers",
        },
        {
            iconName: "icofont-notification",
            text: "More then 2000 Marchent",
        },
        {
            iconName: "icofont-globe",
            text: "Buy Anything Online",
        },
    ];

    const handleSearch = (e) => {
        const searchTerm = e.target.value
        setSearchInput(searchTerm)
        const filtered = fiterdProduct.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setFiterdProduct(filtered)
    }


    return (
        <div className=' h-screen w-screen bg-cover' style={{ backgroundImage: `url(${bgImage})`}}>
            <div className='flex flex-col justify-center items-center h-full gap-10'>
                <h1 className='text-5xl text-center'>Search Your One From <span className='text-[#F7CE26]'>Thousand</span> <br /> Of Products</h1>
                <form className='relative shadow-2xl'>
                    <SelectedCategory />
                    <input type="text" name='search' placeholder='Search your product' id='search' value={searchInput} onChange={handleSearch} className='rounded-r-full border border-l-0 w-[500px] bg-transparent px-4 py-3  ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text'/>
                    <button type='submit' className='absolute right-5 top-3 text-2xl'>
                        <IoSearch/> 
                    </button>
                </form>
                <ul className='flex flex-wrap gap-4 w-[800px]'>
                    {
                        searchInput && fiterdProduct.map((product, i) => <li key={i} className='px-4 py-2 rounded-full border'>
                            <Link to={`/shop/${product.id}`}>{product?.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Banner;