import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Utlites/useAuth';

const DashboardNavbar = () => {
    const { userRole } = useAuth()
    return (
        <div className='mt-5 px-4 flex flex-col gap-4'>
            {
                userRole === 'student' && <>
                    <Link to={'/dashboard/enrolledClass'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>My Enrolled Class</button></Link>
                    <Link to={'/dashboard/selectedClass'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>My Select Class</button></Link>
                    <Link to={'/dashboard/paymentHistory'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>My Payments History</button></Link>
                </>
            }
            {
                userRole === 'instractor' && <>
                    <Link to={'/dashboard/myCourse'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>My Courses</button></Link>
                    <Link to={'/dashboard/addCourse'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>Add A Course</button></Link>
                    <Link to={'/dashboard/gotPayments'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'> Payments</button></Link>
                </>
            }
            {
                userRole === 'admin' && <>
                    <Link to={'/dashboard/allCourses'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>Manage Courses</button></Link>
                    <Link to={'/dashboard/manageCourseRequest'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>Manage Courses Request</button></Link>
                    <Link to={'/dashboard/allStudents'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>Manage Students</button></Link>
                    <Link to={'/dashboard/allInstractors'}><button className='border-[1px] hover:bg-white text-md font-semibold py-2 rounded-lg w-full'>Manage Instractors</button></Link>
                </>
            }
        </div>
    );
};

export default DashboardNavbar;