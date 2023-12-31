import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import SectionTitle from '../../ShareComponents/SectionTitle/SectionTitle';
import { getCoursesByStatus } from '../../AllApi/getCoursesByStatus';

const PopulerCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        getCoursesByStatus('aprove')
            .then(data => {
                setCourses(data)
            })
    }, [])

    return (
        <>
            <SectionTitle title={'Our Populer Courses'} subTitle={'Explore A New Expricence With Our Best Courses'} />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    courses.length>6 ? courses.slice(0,6).map(course => <CourseCard key={course._id} course={course} />) : courses.map(course => <CourseCard key={course._id} course={course} />)
                }
            </div>
        </>
    );
};

export default PopulerCourses;