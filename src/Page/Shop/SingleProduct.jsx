import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHeader from '../../Components/PageHeader/PageHeader'
import { Rating } from '@smastrom/react-rating'
import Reviews from "./Reviews";


const SingleProduct = () => {

    const [products, setProducts] = useState([])
    const [number, setNumber] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        fetch('../../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const result = products.filter(product => product.id === id)

    const handleDecrease = () => {
        if (number > 1) {
            setNumber(number - 1)
        }
    }

    const handleIncrease = () => {
        setNumber(number + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <PageHeader name={'Single'} cutPage={'shop'} />

            <div className="container mx-auto grid grid-cols-12 py-20">
                <div className="col-span-8">
                    <div>
                        <div className="flex gap-5">
                            <div>
                                {
                                    result.map((item, i) => (
                                        <div key={i} className="w-[300px]">
                                            <img src={item.img} className="w-full" alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    result.map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <h1 className="text-2xl font-semibold">{item.name}</h1>
                                            <div className="flex gap-2 items-center">
                                                <Rating
                                                    style={{ maxWidth: 140 }}
                                                    value={item.ratings}
                                                    readOnly
                                                />
                                                <p>Review: {item.ratingsCount}</p>
                                            </div>
                                            <p className="text-xl font-semibold">${item.price}</p>
                                            <p className="font-semibold">{item.seller}</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam minus et possimus veniam dignissimos nisi dicta error est fugiat sapiente harum iste doloremque sed ipsum, asperiores, consequuntur molestias voluptate?</p>
                                        </div>
                                    ))
                                }
                                <div className="mt-7">
                                    <form onSubmit={handleSubmit} className=" space-y-5">
                                        <div className="flex gap-3">
                                            {/* size */}
                                            <select defaultValue={'Select Size'} className="px-4 py-2 border w-full rounded-md">
                                                <option value="Select Size" disabled>Select Size</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="X">X</option>
                                                <option value="XL">XL</option>
                                                <option value="2XL">2XL</option>
                                                <option value="3XL">3XL</option>
                                            </select>
                                            {/* color */}
                                            <select defaultValue={'Select Color'} className="px-4 py-2 border w-full rounded-md">
                                                <option value="Select Color" disabled>Select Color</option>
                                                <option value="Pink">Pink</option>
                                                <option value="Ash">Ash</option>
                                                <option value="Red">Red</option>
                                                <option value="White">White</option>
                                                <option value="Blue">Blue</option>
                                                <option value="Green">Green</option>
                                                <option value="Black">Black</option>
                                            </select>
                                        </div>

                                        <div className="flex gap-10">

                                            <div className="flex items-center gap-2">
                                                <div className="border flex items-center justify-center h-[50px] w-[40px] text-2xl hover:bg-orange-500 duration-500 rounded-md hover:text-white cursor-pointer" onClick={handleDecrease}>-</div>
                                                <input className="py-2 px-2 text-center w-12 font-semibold" type="text" value={number} />
                                                <div className="border flex items-center justify-center h-[50px] w-[40px] text-2xl hover:bg-orange-500 duration-500 rounded-md hover:text-white cursor-pointer" onClick={handleIncrease}>+</div>
                                            </div>

                                            <div className="w-full">
                                                <input type="text" className="px-4 h-[50px] w-full border rounded-md" placeholder="Enter Discount Code" />
                                            </div>

                                        </div>

                                        <div className="flex justify-between">
                                            <button className="px-7 h-[50px] border rounded-md bg-orange-500 text-white">Add To Cart</button>

                                            <Link className="flex justify-center items-center px-7 h-[50px] border rounded-md bg-blue-500 text-white" to={'/'}>Check Out</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Reviews />
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    2
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;