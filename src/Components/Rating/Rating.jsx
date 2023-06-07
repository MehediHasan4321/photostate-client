import React from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs';

const Rating = ({ ratingNum }) => {
     if(ratingNum === 5)return <div className='flex gap-2'><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></div>
    else if(ratingNum === 4.5)return <div><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></div>

};

export default Rating;