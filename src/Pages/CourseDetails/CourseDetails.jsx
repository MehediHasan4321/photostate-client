import React from 'react';

const CourseDetails = ({courseInfo}) => {

    const {name,price,rating,instractro,image,description,enrolledUser} = courseInfo || {}
    return (
        <div>
            <div className='flex gap-5'>
                <div className='w-96 h-96 rounded-md'>
                    <img className='w-full h-full object-cover rounded-md' src={image} alt="course images" />
                </div>
                <div>
                    <div>
                        <h1>{name?name:'course name'}</h1>
                        <p>{price?price:'course price'}</p>
                        <p>{rating}</p>
                        <div className='flex items-center gap-5'>
                            <img className='w-16 h-16 rounded-full' src="" alt="instracor img" />
                            <div>
                                <h1>{instractro?.name}</h1>
                                <p>{instractro?.rating}</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <button className='px-8 py-2 bg-black text-white font-semibold'>Enroll Now</button>
                            <button className='px-8 py-2 bg-black text-white font-semibold'>Select</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className=' md:col-span-3'>
                    <p>{description}</p>
                </div>
                <div className=' col-span-2 grid grid-cols-4'>
                    {
                        enrolledUser?.map(user=><img title={user?.name} className='w-16 h-16 rounded-full' src={user?.image} alt="enroll user" />)
                    }
                </div>
            </div>
            <div>
                <h1>This Instractor another onGoing Course</h1>
            </div>
        </div>
    );
};

export default CourseDetails;