import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';
import useAxiosSecures from '../../Utlites/useAxiosSecures';
import { Link } from 'react-router-dom';

const InstractorCard = ({instractor}) => {
    const [axiosSerure] = useAxiosSecures()
    const {name,image,talent='Photographer',rating,role,email} = instractor || {}
    const [instractorCourse,setInstractorCourse] = useState([])
    useEffect(()=>{
        axiosSerure(`/instractorCourse/${email}`).then(res=>setInstractorCourse(res.data))
    },[email])
    return (
        <div className='w-[450px] h-[550px] border-[1px] border-neutral-100 rounded-md hover:shadow-xl relative'>
            <img className='w-full h-[300px] object-cover rounded-md ' src={image} alt="instractor images" />
            <div className='mt-10 px-5'>
                <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>{name ? name : 'instractor Name'}</h1>
                <Rating ratingNum={rating}/>
                </div>
                <div className='flex justify-between  items-center mt-4 text-lg font-semibold'>
                    <p>{talent}</p>
                    <p>On Going Course {instractorCourse.length}</p>
                </div>
                
            </div>
            <div className=' absolute w-full bottom-0'>
                <Link to={`/instractor/${email}`}><button className='w-full h-20 bg-black text-white font-semibold rounded-b-md'>Explore More</button></Link>
            </div>
        </div>
    );
};

export default InstractorCard;
