import React from 'react';
import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

const Rating = ({ ratingNum }) => {
    const num = parseFloat(ratingNum)
     if(num === 5)return <div className='flex gap-2'><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></div>
     if(num === 4.5)return <div className='flex gap-2'><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsStarHalf/></div>
     if(num === 4)return <div className='flex gap-2'><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsStar/></div>
     if(num === 3.5)return <div className='flex gap-2'><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsStarHalf/><BsStar/></div>
     if(num === 3)return <div className='flex gap-2'><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsStar/><BsStar/></div>
     if(num === 2.5)return <div className='flex gap-2'><BsFillStarFill/><BsFillStarFill/><BsStarHalf/><BsStar/><BsStar/></div>
     if(num === 2)return <div className='flex gap-2'><BsFillStarFill/><BsFillStarFill/><BsStar/><BsStar/><BsStar/></div>
     if(num === 1.5)return <div className='flex gap-2'><BsFillStarFill/><BsStarHalf/><BsStar/><BsStar/><BsStar/></div>
     if(num === 1){return <div className='flex gap-2'><BsFillStarFill/><BsStar/><BsStar/><BsStar/><BsStar/></div>}
     else return <div className='flex gap-2'><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></div> 
};

export default Rating;