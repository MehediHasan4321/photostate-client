import React from 'react';
import InstractroAbout from '../../Components/InstractorAbout/InstractroAbout';
import InstractorGallary from '../../Components/InstractorGallary/InstractorGallary';
import InstractorCourse from '../../Components/InstractorCourse/InstractorCourse';

const Instractor = ({instracroInfo}) => {
    const {aboutInstractor,gallary,course} = instracroInfo || {}
    
    return (
        <div>
            <InstractroAbout about={aboutInstractor}/>
            <InstractorCourse course={course}/>
            <InstractorGallary gallary={gallary}/>
        </div>
    );
};

export default Instractor;