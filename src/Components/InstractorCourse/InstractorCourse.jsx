import React, { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import { getInstractorCourse } from '../../AllApi/getInstractorCourse';


const InstractorCourse = ({email}) => {
    const [course,setCourses] = useState([])
    getInstractorCourse(email)
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