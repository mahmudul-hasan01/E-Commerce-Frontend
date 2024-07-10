import { useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { FaAlignJustify, FaAlignCenter } from "react-icons/fa";
import productData from '../../../public/products.json'
import ProductCart from "./ProductCart";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";

const Shop = () => {

    const [GridList, setGridList] = useState(true)
    const [products, setProducts] = useState(productData)

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const productPerPage = 12

    const indexOfLestProduct = currentPage * productPerPage
    const indexOfFirstProduct = indexOfLestProduct - productPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLestProduct)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // 
    const [seletedCategory, setSeletedCategory] = useState('All')
    const menuItems = [...new Set(productData.map(val => val.category))]

    const filterItem = (current) => {
        const newItem = productData.filter((newVal) => {
            return newVal.category === current
        })
        setSeletedCategory(current)
        setProducts(newItem)
    }



    const showResults = 'Showing 01 - 12 of 139 Results'

    return (
        <div>
            <PageHeader name={'Shop'} cutPage={'shop'} />
            <div className="container mx-auto grid grid-cols-12 py-10 gap-5">

                <div className="col-span-8 first-letter:">
                    <div className="flex justify-between mb-10">
                        <h1 className="text-xl font-semibold">{showResults}</h1>
                        <div className={`flex gap-4 text-xl pr-8`}>
                            <FaAlignJustify className={`${GridList && 'text-[#F15F28]'} cursor-pointer`} onClick={() => setGridList(!GridList)} />
                            <FaAlignCenter className={`${GridList || 'text-[#F15F28]'} cursor-pointer`} onClick={() => setGridList(!GridList)} />
                        </div>
                    </div>
                    <div>
                        <ProductCart GridList={GridList} products={currentProducts} />
                    </div>
                    <Pagination productPerPage={productPerPage} totalProduct={products.length} paginate={paginate} activePage={currentPage} />
                </div>

                <div className="col-span-4">
                    <Search products={products} GridList={GridList} />
                    <ShopCategory filterItem={filterItem} setItems={setProducts} menuItems={menuItems} setProducts={setProducts} seletedCategory={seletedCategory} />
                </div>

            </div>
        </div>
    );
};

export default Shop;