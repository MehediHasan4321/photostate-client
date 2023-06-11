import React, { useState } from 'react';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { BsEye } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Utlites/useAuth';
import { Toaster, toast } from 'react-hot-toast';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { saveUserToDB } from '../../AllApi/saveUserToDB';
import { useForm } from 'react-hook-form'
const Regeister = () => {
    const [type, setType] = useState(true)
    const [confiremPass, setConfirmPass] = useState(true)
    const handlPassType = () => setType(!type)
    const handlConfirmPassType = () => setConfirmPass(!confiremPass)
    const { singupWihtEmailPass } = useAuth()
    const location = useLocation()
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const auth = getAuth(app)
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const password = watch('password', '');
    const confirmPassword = watch('confirmPassword', '')
    setTimeout(() => {
        setPasswordError('')
    }, 7000);

    const handlSingUp = data => {
        
        singupWihtEmailPass(data.email, confirmPassword)
            .then((result) => {
                updateProfile(auth.currentUser, { displayName: data.name, photoURL: data.url })
                    .then(() => {
                        saveUserToDB(result.user).then(res => {
                            if (res.upsertedId || res.modifiedCount > 0) {
                                toast.success('Your Account Create Successfully')
                                navigate(from, { replace: true })
                            }
                        })

                    })
                    .catch(err => setPasswordError(err.message))
            })
            .catch(err => {
                setPasswordError(err.message)
            })
    }
    return (
        <div className=' w-full min-h-screen flex justify-center items-center'>

            <div className='w-[450px] shadow-2xl p-6 rounded-xl'>
                <h1 className='text-4xl font-bold text-center my-12'>Create Your Account</h1>
                <form onSubmit={handleSubmit(handlSingUp)} className='space-y-4'>
                    <input className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type="name" {...register("name", { required: 'Name Is Required' })} id="name" placeholder='Enter Your Name' />
                    {errors.name && (
                        <span style={{ color: 'red' }}>{errors.name.message}</span>
                    )}
                    <input className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type="email" {...register("email", { required: 'Email is requird' })} id="email" placeholder='Enter Your Email' />
                    {errors.email && (
                        <span style={{ color: 'red' }}>{errors.email.message}</span>
                    )}
                    <input {...register("url", { required: 'URL is Required' })} className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type="url" id="url" placeholder='Your Photo URL' />
                    {errors.url && (
                        <span style={{ color: 'red' }}>{errors.url.message}</span>
                    )}
                    <div className='relative'>
                        <input className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold'
                            placeholder='Enter A Strong Password'
                            type={type ? 'password' : 'text'}
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must contain at least 6 characters',
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{6,}$/,
                                    message:
                                        'Password must contain at least 6 characters, including one uppercase letter and one special character',
                                },
                            })}
                        />
                        <BsEye onClick={handlPassType} className=' absolute right-5 top-5 cursor-pointer' />
                    </div>

                    {errors.password && (
                        <span style={{ color: 'red' }}>{errors.password.message}</span>
                    )}
                    <div className='relative'>
                        <input className='w-full px-4 py-4 bg-[#f2f2f2] rounded-2xl placeholder:text-lg placeholder:font-semibold' type={confiremPass ? 'password' : 'text'} {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: (value) =>
                                value === password || 'Passwords do not match',
                        })} id="confirmPassword" placeholder='Confirm Password' />
                        <BsEye onClick={handlConfirmPassType} className=' absolute right-5 top-5 cursor-pointer' />
                    </div>
                    {errors.confirmPassword && (
                        <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>
                    )}
                    <input className='w-full px-4 py-4 bg-[#27B397] text-white rounded-2xl text-lg font-semibold cursor-pointer' type="submit" value="Submit" />

                    {
                        passwordError && <span style={{ color: 'red' }}>{passwordError}</span>
                    }
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