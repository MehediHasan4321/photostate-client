import React from 'react';
import NavBar from '../../ShareComponents/NavBar/NavBar';
import Footer from '../../ShareComponents/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <div className='container mx-auto py-20'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;