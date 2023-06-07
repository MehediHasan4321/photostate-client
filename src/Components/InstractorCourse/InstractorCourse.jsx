import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

const InstractorCourse = ({course}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                course.map(item=><CourseCard key={item.name} classinfo={item}/>)
            }
        </div>
    );
};

export default InstractorCourse;