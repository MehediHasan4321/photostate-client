import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Rating from '../../Components/Rating/Rating';
import EnrolledUsers from '../../Components/EnrolledUsers/EnrolledUsers';
import InstractorCourse from '../../Components/InstractorCourse/InstractorCourse';
import { useAuth } from '../../Utlites/useAuth';
import { saveOrder } from '../../AllApi/saveOrder';
import { Toaster, toast } from 'react-hot-toast';
import { updateCourseById } from '../../AllApi/updateCourseById';

const CourseDetails = () => {
    const courseInfo = useLoaderData()
    const [status, setStatus] = useState(false)
    const { user } = useAuth()
    const { name, price, rating, instractor, image, description, enroledStudent, email, _id } = courseInfo || {}
    const handlSelectCourse = (id, user,course) => {
        const update = {
            enroledStudent: [...enroledStudent,user?.email]
        }
        setStatus(true)
        saveOrder(id, user,course).then(data => {
            if (data.insertedId) {
                
                updateCourseById(update, id)
                .then(isUpdate => {
                    if (isUpdate.modifiedCount > 0) {
                        setStatus(false)
                        toast.success('This Course Has Been Successfully Selected')
                    } else { setStatus(false) }

                })
                    .catch(err => {
                        setStatus(false)
                        toast.error(err.message)
                    })


            }
            else {
                setStatus(false)
            }
        })
            .catch(err => {
                toast.error(err.message)
                setStatus(false)
            })
    }
   
    return (
        <div>
            <div className='flex gap-5'>
                <div className='w-96 h-96 rounded-md'>
                    <img className='w-full h-full object-cover rounded-md' src={image} alt="course images" />
                </div>
                <div>
                    <div className='space-y-3 relative p-4'>
                        <h1 className='text-3xl font-semibold'>{name ? name : 'course name'}</h1>
                        <p className='text-xl font-semibold'>price: ${price ? price : 'course price'}</p>
                        <p>Total Enrolled Students: {enroledStudent?.length}</p>
                        <p><Rating ratingNum={rating} /></p>

                        <div className='flex gap-5 items-center pt-12'>
                            <button className='px-8 py-2 bg-black text-white font-semibold'>Enroll Now</button>
                            <button onClick={() => handlSelectCourse(_id, user,courseInfo)} className='px-8 py-2 bg-black text-white font-semibold'>{status ? "Processing" : "Select"}</button>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mt-5'>
                        <img className='w-20 h-20 rounded-full' src={instractor.image} alt="instracor img" />
                        <div className='flex flex-col gap-2'>
                            <h1> {instractor?.name}</h1>
                            <p><Rating ratingNum={instractor.rating} /></p>
                            <Link to={`/instractor/${email}`} className='px-4 py-1 text-neutral-600 font-semibold rounded-xl text-center border-[1px] hover:bg-[#f2f2f2]'>About</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 mt-4 gap-4'>
                <div className=' md:col-span-3'>
                    <p className=' text-neutral-500 text-justify'>{description}</p>
                </div>
                <EnrolledUsers enrolledUser={enroledStudent} />
            </div>
            <div className='mt-12'>
                <h1 className='text-xl md:text-3xl font-semibold text-neutral-600'>This Instrators Anothre Coures</h1>
                <div className='mt-10'>
                    <InstractorCourse email={email} />
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default CourseDetails;