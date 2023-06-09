import React from 'react';
import Rating from '../Rating/Rating';

const InstractroAbout = ({about}) => {
    const {name,image,rating,enrolledStudent,onGoingCourse,talent} = about || {}
    return (
        <div className='flex gap-5 mt-12'>
            <div className='w-96 h-96 rounded-md'>
                <img src={image} alt="Instractor Images" />
            </div>
            <div className='space-y-3'>
                <h1 className='text-3xl font-semibold'>{name?name : 'name Not found'}</h1>
                <h1>Specilized At {talent? talent : 'Not Found'}</h1>
                <Rating ratingNum={rating}/>
            </div>
        </div>
    );
};

export default InstractroAbout;