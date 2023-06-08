import React, { useState } from 'react';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Regeister = () => {
    const [type, setType] = useState(true)
    const handltype = () => setType(!type)
    return (
        <div className=' w-full min-h-screen flex justify-center items-center'>

            <div className='w-[450px] shadow-2xl p-6 rounded-xl'>
                <h1 className='text-4xl font-bold text-center my-12'>Create Your Account</h1>
                <form className='space-y-4'>
                    <input className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type="email" name="email" id="email" placeholder='Email' />
                    <div className='relative'>
                        <input className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type={type ? 'password' : 'text'} name="password" id="password" placeholder='Password' />
                        <BsEye onClick={handltype} className=' absolute right-5 top-5 cursor-pointer' />
                    </div>
                    <input className='w-full px-4 py-4 bg-[#27B397] text-white rounded-2xl text-lg font-semibold cursor-pointer' type="submit" value="Login" />
                </form>
                <SocialLogin/>
                <div className='mt-4 text-sm font-semibold'>
                    <p>Already Have An Account?<Link to={'/login'}>Login</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default Regeister;