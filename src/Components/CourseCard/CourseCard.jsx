import React from 'react';
import Rating from '../Rating/Rating';

const CourseCard = (course) => {
    const { name, image, rating, price, instractor } = course || {}
    return (
        <div className='w-[450px] h-[550px] border-[1px] border-neutral-100 rounded-md hover:shadow-xl relative'>
            <img className='w-full h-[300px] ' src={image} alt="class images" />
            <div className='mt-10 px-5'>
                <h1 className='text-2xl font-semibold'>{name ? name : 'class Name'}</h1>
                <div className='flex justify-between  items-center'>
                    <p>{price}</p>
                    <Rating ratingNum={rating} />
                </div>
            </div>
            <div>
                <button className='w-full h-20 bg-black text-white font-semibold'>Select</button>
            </div>
        </div>
    );
};

export default CourseCard;