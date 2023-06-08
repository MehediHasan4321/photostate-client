import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
    return (
        <div className='mt-5 px-4 flex flex-col gap-4'>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>My Enrolled Class</button></Link>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>My Select Class</button></Link>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>My Payments History</button></Link>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>My Courses</button></Link>
            <Link to={'/dashboard/addCourse'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>Add A Course</button></Link>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>Added To Gallary</button></Link>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>All Courses</button></Link>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>Courses Request</button></Link>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>All Students</button></Link>
            <Link><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>All Instractors</button></Link>
        </div>
    );
};

export default DashboardNavbar;