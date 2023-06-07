import React, { useEffect, useState } from 'react';
import SectionTitle from '../../ShareComponents/SectionTitle/SectionTitle';
import InstractorCard from '../InstractorCard/InstractorCard';

const PopularInstractors = () => {
    const [instractors,setInstractors] = useState([])
    useEffect(()=>{
        fetch('instractor.json')
        .then(res=>res.json())
        .then(data=>setInstractors(data))
    },[])
    return (
        <>
        <SectionTitle title={'Out Favorite Instrator'}/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                instractors.map(intractor=><InstractorCard instractor={intractor}/>)
            }
        </div>
        </>
    );
};

export default PopularInstractors;