/* eslint-disable react/prop-types */
// import productData from '../../../public/products.json'

const ShopCategory = ({ filterItem, setItems, menuItems, setProducts, seletedCategory }) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold ml-2 mb-5">All Categorys</h1>
            <div>
                <button className={`m-2 ${seletedCategory === "All" ? 'bg-[#F7CE26]' : 'bg-slate-200'} px-4 py-2 `}>All</button>
                {
                    menuItems.map((val, i) => {
                        return (
                            <button className={`m-2 ${seletedCategory === val ? 'bg-[#F7CE26]' : 'bg-slate-200'} px-4 py-2 `} onClick={() => filterItem(val)} key={i}>
                                {val}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ShopCategory;