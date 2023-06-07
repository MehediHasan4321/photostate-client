import React from 'react';
import Rating from '../Rating/Rating';

const CourseCard = ({course}) => {
    const { name, image, rating, price, instractor ,enroledStudent } = course || {}
    return (
        <div className='w-[450px] h-[550px] border-[1px] border-neutral-100 rounded-md hover:shadow-xl relative'>
            <img className='w-full h-[300px] rounded-md ' src={image} alt="class images" />
            <div className='mt-10 px-5'>
                <h1 className='text-2xl font-semibold'>{name ? name : 'class Name'}</h1>
                <div className='flex justify-between  items-center mt-4'>
                    <p className='text-lg font-semibold'>Price ${price}</p>
                    <Rating ratingNum={rating} />
                </div>
                <div className='flex justify-between  items-center mt-4'>
                    <p className='text-lg font-semibold'>Enrolled Students {enroledStudent.length}</p>
                    
                </div>
            </div>
            <div className=' absolute bottom-0 w-full'>
                <button className='w-full h-20 bg-black text-white font-semibold'>Select</button>
            </div>
        </div>
    );
};

export default CourseCard;