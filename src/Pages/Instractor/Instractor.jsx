import React, { useEffect, useState } from 'react';
import InstractroAbout from '../../Components/InstractorAbout/InstractroAbout';
import InstractorGallary from '../../Components/InstractorGallary/InstractorGallary';
import InstractorCourse from '../../Components/InstractorCourse/InstractorCourse';
import { data } from 'autoprefixer';
import { useLoaderData } from 'react-router-dom';

const Instractor = ({email}) => {
    const instractorInfo = useLoaderData()
    const {aboutInstractor,gallary,course} = instractorInfo || {}
    console.log(instractorInfo)
    return (
        <div>
            <InstractroAbout about={instractorInfo}/>
            <InstractorCourse email={instractorInfo?.email}/>
            <InstractorGallary gallary={gallary}/>
        </div>
    );
};

export default Instractor;