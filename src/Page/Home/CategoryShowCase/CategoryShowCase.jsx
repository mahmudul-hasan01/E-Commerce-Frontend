import { useState } from "react";
import img1 from '../../../assets/images/shape-img/icon/01.png'
import img2 from '../../../assets/images/shape-img/icon/02.png'
import img3 from '../../../assets/images/shape-img/icon/03.png'
import bgImage from '../../../assets/images/shape-img/01.jpg'
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CategoryShowCase = () => {

    const title = "Our Products";

    const ProductData = [
        {
            imgUrl: 'src/assets/images/categoryTab/01.jpg',
            cate: 'Shoes',
            title: 'Nike Premier X',
            author: 'assets/images/course/author/01.jpg',
            brand: 'Nike',
            price: '$199.00',
            id: 1,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/02.jpg',
            cate: 'Bags',
            title: 'Asthetic Bags',
            author: 'assets/images/course/author/02.jpg',
            brand: 'D&J Bags',
            price: '$199.00',
            id: 2,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/03.jpg',
            cate: 'Phones',
            title: 'iPhone 12',
            author: 'src/assets/images/categoryTab/brand/apple.png',
            brand: 'Apple',
            price: '$199.00',
            id: 3,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/04.jpg',
            cate: 'Bags',
            title: 'Hiking Bag 15 Nh100',
            author: 'assets/images/course/author/04.jpg',
            brand: 'Gucci',
            price: '$199.00',
            id: 4,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/05.jpg',
            cate: 'Shoes',
            title: 'Outdoor Sports Shoes',
            author: 'assets/images/course/author/05.jpg',
            brand: 'Nike',
            price: '$199.00',
            id: 5,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/06.jpg',
            cate: 'Beauty',
            title: 'COSRX Snail Mucin',
            author: 'assets/images/course/author/06.jpg',
            brand: 'Zaara',
            price: '$199.00',
            id: 6,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/07.jpg',
            cate: 'Bags',
            title: 'Look Less Chanel Bag ',
            author: 'assets/images/course/author/01.jpg',
            brand: 'Gucci',
            price: '$199.00',
            id: 7,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/08.jpg',
            cate: 'Shoes',
            title: 'Casual Sneakers',
            author: 'assets/images/course/author/02.jpg',
            brand: 'Bata',
            price: '$199.00',
            id: 8,
        },
    ]
    const [items, setItems] = useState(ProductData)

    const filterItem = (categoryItem) => {
        const updateItem = ProductData.filter(item => {
            return item.cate === categoryItem
        })
        setItems(updateItem)
    }

    return (
        <div className="w-screen py-20 bg-fixed bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* <div className="flex justify-between">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
            </div> */}
            <div className="w-[1000px] flex justify-between font-semibold shadow-2xl mx-auto py-4 rounded-md px-5 bg-white">
                <h1 className="">{title}</h1>
                <div>
                    <ul className="flex gap-4">
                        <li className=" hover:px-2 duration-500  hover:rounded-md hover:bg-[#F7CE26]" onClick={() => setItems(ProductData)}>All</li>
                        <li className=" hover:px-2 duration-500  hover:rounded-md hover:bg-[#F7CE26]" onClick={() => filterItem('Shoes')}>Shoes</li>
                        <li className=" hover:px-2 duration-500  hover:rounded-md hover:bg-[#F7CE26]" onClick={() => filterItem('Bags')}>Bags</li>
                        <li className=" hover:px-2 duration-500  hover:rounded-md hover:bg-[#F7CE26]" onClick={() => filterItem('Phones')}>Phones</li>
                        <li className=" hover:px-2 duration-500  hover:rounded-md hover:bg-[#F7CE26]" onClick={() => filterItem('Beauty')}>Beauty</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-10 container mx-auto">
                {
                    items.map((item, i) => <div key={i} className="shadow-2xl font-semibold">
                        <div className="mb-4">
                            <img src={item.imgUrl} className="w-full" alt="" />
                            <div className="flex justify-between bg-[#F7CE26] py-2 px-4">
                                <Link >{item.cate}</Link>
                                <div className="flex ">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <Link className="font-semibold px-4" to={`/shop/${item.id}`}>{item.title}</Link>
                            <div className="flex justify-between px-4 mt-3">
                                <Link to={'/'}>{item.brand}</Link>
                                <div className="text-[#F7CE26]">{item.price}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryShowCase;