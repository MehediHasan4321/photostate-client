import React from 'react';
import { BsCameraFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='w-full bg-[#f2f2f2] h-20 fixed opacity-90 z-10'>
            <div className='container mx-auto flex justify-between items-center h-full text-neutral-800'>
                <Link to={'/'} className=' uppercase flex items-center gap-2 cursor-pointer'>
                    <BsCameraFill size={'60'} />
                    <div>
                        <h1 className='text-2xl font-semibold'>Photostat</h1>
                        <p className='text-[12px] tracking-[4px]'>No one Click</p>
                    </div>
                </Link>
                <div className='flex flex-row gap-5 font-semibold'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink>Instructors</NavLink>
                    <NavLink>Classes</NavLink>
                    <NavLink>Dashboard </NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;