import React, { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import { getAllCourser } from '../../AllApi/getAlCourses';

const InstractorCourse = ({}) => {
    const [course,setCourses] = useState([])
    getAllCourser()
    .then(data=>setCourses(data))
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                course.slice(0,3).map(item=><CourseCard key={item._id} course={item}/>)
            }
        </div>
    );
};

export default InstractorCourse;