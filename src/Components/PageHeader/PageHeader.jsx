/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/bg-img/02.jpg'

const PageHeader = ({ name, cutPage }) => {
    return (
        <div className=' h-[500px] w-screen bg-cover' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='flex flex-col justify-center items-center h-full gap-8'>
                <h1 className='text-5xl text-center font-semibold'>{name} Page</h1>
                <div className='flex gap-3 text-xl'>
                    <Link to={'/'}>Home</Link>
                    /
                    <Link to={`/${cutPage}`} className='capitalize'>{cutPage}</Link>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;