import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rating from '../../Components/Rating/Rating';
import EnrolledUsers from '../../Components/EnrolledUsers/EnrolledUsers';
import InstractorCourse from '../../Components/InstractorCourse/InstractorCourse';

const CourseDetails = () => {
    const courseInfo = useLoaderData()
    const { name, price, rating, instractor, image, description, enrolledUser,email } = courseInfo || {}
    return (
        <div>
            <div className='flex gap-5'>
                <div className='w-96 h-96 rounded-md'>
                    <img className='w-full h-full object-cover rounded-md' src={image} alt="course images" />
                </div>
                <div>
                    <div className='space-y-3 border-2 relative p-4'>
                        <h1 className='text-3xl font-semibold'>{name ? name : 'course name'}</h1>
                        <p className='text-xl font-semibold'>price: ${price ? price : 'course price'}</p>
                        <p>Total Enrolled Students: 10</p>
                        <p><Rating ratingNum={rating} /></p>

                        <div className='flex gap-5 items-center pt-12'>
                            <button className='px-8 py-2 bg-black text-white font-semibold'>Enroll Now</button>
                            <button className='px-8 py-2 bg-black text-white font-semibold'>Select</button>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-16 h-16 rounded-full' src={instractor.image} alt="instracor img" />
                        <div>
                            <h1> {instractor?.name}</h1>
                            <p><Rating ratingNum={instractor.rating} /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 mt-4 gap-4'>
                <div className=' md:col-span-3'>
                    <p className=' text-neutral-500 text-justify'>{description}</p>
                </div>
                <EnrolledUsers />
            </div>
            <div className='mt-12'>
                <h1 className='text-xl md:text-3xl font-semibold text-neutral-600'>This Instrators Anothre Coures</h1>
                <div className='mt-10'>
                    <InstractorCourse email={email}/>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;