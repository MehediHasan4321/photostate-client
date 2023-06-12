import React, { useState } from 'react';
import { BsCameraFill } from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../Utlites/useAuth';
const NavBar = () => {
    const { user, logOut } = useAuth()
    const handlLogout = () => {
        logOut()
    }
    const [show,setShow] = useState(false)
    return (
        <>
            <div className='w-full bg-[#f2f2f2] h-20 fixed opacity-90 z-20'>
                <div className='container mx-auto flex justify-between items-center h-full text-neutral-800'>
                    <Link to={'/'} className=' uppercase flex items-center gap-2 cursor-pointer'>
                        <BsCameraFill size={'60'} />
                        <div>
                            <h1 className='text-2xl font-semibold'>Photostat</h1>
                            <p className='text-[12px] tracking-[4px]'>No one Click</p>
                        </div>
                    </Link>
                    <FaBars onClick={()=>setShow(!show)} className='text-2xl cursor-pointer md:hidden mr-4' />
                    <div className='hidden md:visible md:flex flex-row gap-5 font-semibold items-center'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/instractors'}>Instructors</NavLink>
                        <NavLink to={'/allCourses'}>Courses</NavLink>
                        <NavLink to={'/dashboard'}>Dashboard </NavLink>
                        {
                            user ? <div className='flex items-center gap-3'>
                                <button onClick={handlLogout}>Logout</button>
                                <img className='w-10 h-10 rounded-full object-cover' src={user?.photoURL} alt="" />

                            </div> : <NavLink to={'/login'}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-base-300 gap-5 font-semibold md:hidden w-48 pt-20 items-center fixed z-10 transition-all' style={{left:`${show ? '0px':"-192px"}`}}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink>Instructors</NavLink>
                <NavLink to={'/allCourses'}>Courses</NavLink>
                <NavLink to={'/dashboard'}>Dashboard </NavLink>
                {
                    user ? <div className='flex items-center gap-3'>
                        <button onClick={handlLogout}>Logout</button>
                        <img className='w-10 h-10 rounded-full object-cover' src={user?.photoURL} alt="" />

                    </div> : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </>
    );
};

export default NavBar;