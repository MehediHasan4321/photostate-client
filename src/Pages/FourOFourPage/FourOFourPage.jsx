import React from 'react';
import img from '../../assets/404page.jpg'
import { Link } from 'react-router-dom';
const FourOFourPage = () => {
    return (
        <div className=' bg-white h-screen w-full'>
            <img src={img} alt="" />
            <div className='text-center mt-8'>
                <Link to={'/'}><button className='bg-black text-md font-semibold px-8 py-2 text-white'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default FourOFourPage;