import React from 'react';

const InstractorCard = ({instractor}) => {
    const {name,image,talent,onGoingCourse,} = instractor || {}
    return (
        <div className='w-[450px] h-[550px] border-[1px] border-neutral-100 rounded-md hover:shadow-xl relative'>
            <img className='w-full h-[300px] ' src={image} alt="instractor images" />
            <div className='mt-10 px-5'>
                <h1 className='text-2xl font-semibold'>{name ? name : 'instractor Name'}</h1>
                <div className='flex justify-between  items-center'>
                    <p>{talent}</p>
                    <p>Course {onGoingCourse.length}</p>
                </div>
            </div>
            <div>
                <button className='w-full h-20 bg-black text-white font-semibold'>Explore More</button>
            </div>
        </div>
    );
};

export default InstractorCard;