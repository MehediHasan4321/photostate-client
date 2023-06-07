import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import SectionTitle from '../../ShareComponents/SectionTitle/SectionTitle';

const PopulerCourses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <>
        <SectionTitle title={'Our Populer Courses'}/>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                courses.slice(0,6).map(course=><CourseCard course={course}/>)
            }
        </div>
        </>
    );
};

export default PopulerCourses;