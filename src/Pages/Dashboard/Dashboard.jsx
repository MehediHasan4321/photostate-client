import React from 'react';
import NavBar from '../../ShareComponents/NavBar/NavBar';
import Footer from '../../ShareComponents/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../Utlites/useAuth';
import Avater from '../../DashboardCompo/Avater/Avater';
import DashboardNavbar from '../../DashboardCompo/DashboardNavbar/DashboardNavbar';

const Dashboard = () => {
    const { user,userRole } = useAuth()
    return (
        <>
            <NavBar />
            <div className='md:grid grid-cols-12 pt-20'>
                <div className=' col-span-2 bg-[#f2f2f2] min-h-screen sticky'>
                    {user && <Avater user={user} role={userRole} />}
                    <DashboardNavbar />
                </div>
                <div className=' col-span-10'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;