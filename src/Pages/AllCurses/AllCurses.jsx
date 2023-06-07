import React from 'react';
import CourseCard from '../../Components/CourseCard/CourseCard';

const AllCurses = ({courses}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-flow-col-3 gap-6'>
            {
                courses.map(course=><CourseCard key={course.name} course={course}/>)
            }
        </div>
    );
};

export default AllCurses;