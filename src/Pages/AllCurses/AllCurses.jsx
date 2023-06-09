import React from 'react';
import CourseCard from '../../Components/CourseCard/CourseCard';
import { useLoaderData } from 'react-router-dom';

const AllCurses = () => {
    const courses = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-flow-col-4 gap-6 my-12 '>
            {
                courses.map(course=><CourseCard key={course.name} course={course}/>)
            }
        </div>
    );
};

export default AllCurses;