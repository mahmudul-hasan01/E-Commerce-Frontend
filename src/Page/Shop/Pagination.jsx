/* eslint-disable react/prop-types */

const Pagination = ({ productPerPage, totalProduct, paginate, activePage }) => {

    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <ul className="flex justify-center gap-5 my-10">
            {
                pageNumber.map((number) => (

                    <li className={`w-10 h-10  ${number === activePage ? 'bg-orange-600' : ''}  rounded-full flex justify-center items-center duration-500`} key={number}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>

                ))
            }
        </ul>
    );
};

export default Pagination;