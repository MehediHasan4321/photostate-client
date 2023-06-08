import React, { useState } from 'react';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { BsEye } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Utlites/useAuth';
import { Toaster, toast } from 'react-hot-toast';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { saveUserToDB } from '../../AllApi/saveUserToDB';

const Regeister = () => {
    const [type, setType] = useState(true)
    const [confiremPass, setConfirmPass] = useState(true)
    const handlPassType = () => setType(!type)
    const handlConfirmPassType = () => setConfirmPass(!confiremPass)
    const { singupWihtEmailPass } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const auth = getAuth(app)
    const handlSingUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value
        const confiremPass = form.confirmPassword.value

        if (password !== confiremPass) {
            return toast.error('Your Password and ConfirmPassword are Not Same')
        }
        // console.log(name,email,url,password,confiremPass)
        singupWihtEmailPass(email, confiremPass)
            .then((result) => {
                updateProfile(auth.currentUser, { displayName: name, photoURL: url })
                    .then(() => {
                        saveUserToDB(result.user).then(data => {
                            if (data.upsertedId || data.modifiedCount > 0) {
                                toast.success('Your Account Create Successfully')
                                form.reset()
                                navigate(from, { replace: true })
                            }
                        })

                    })
                    .catch(err => toast.error(err.message))
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div className=' w-full min-h-screen flex justify-center items-center'>

            <div className='w-[450px] shadow-2xl p-6 rounded-xl'>
                <h1 className='text-4xl font-bold text-center my-12'>Create Your Account</h1>
                <form onSubmit={handlSingUp} className='space-y-4'>
                    <input required className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type="name" name="name" id="name" placeholder='Enter Your Name' />
                    <input required className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type="email" name="email" id="email" placeholder='Enter Your Email' />
                    <input className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type="url" name="url" id="url" placeholder='Your Photo URL' />
                    <div className='relative'>
                        <input required className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type={type ? 'password' : 'text'} name="password" id="password" placeholder='Password' />
                        <BsEye onClick={handlPassType} className=' absolute right-5 top-5 cursor-pointer' />
                    </div>
                    <div className='relative'>
                        <input required className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type={confiremPass ? 'password' : 'text'} name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                        <BsEye onClick={handlConfirmPassType} className=' absolute right-5 top-5 cursor-pointer' />
                    </div>
                    <input className='w-full px-4 py-4 bg-[#27B397] text-white rounded-2xl text-lg font-semibold cursor-pointer' type="submit" value="Submit" />


                </form>
                <SocialLogin />
                <div className='mt-4 text-sm font-semibold'>
                    <p>Already Have An Account?<Link to={'/login'}>Login</Link></p>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Regeister;