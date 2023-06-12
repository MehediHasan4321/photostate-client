import React, { useEffect, useState } from 'react';
import InstractroAbout from '../../Components/InstractorAbout/InstractroAbout';
import InstractorGallary from '../../Components/InstractorGallary/InstractorGallary';
import InstractorCourse from '../../Components/InstractorCourse/InstractorCourse';
import { useLoaderData } from 'react-router-dom';
import { getInstractorCourse } from '../../AllApi/getInstractorCourse';

const Instractor = () => {
    const instractorInfo = useLoaderData()
    const [course, setCourses] = useState([])
    useEffect(() => {
        getInstractorCourse(instractorInfo.email)
            .then(data => setCourses(data))
    }, [instractorInfo])

    return (
        <div>
            <InstractroAbout about={instractorInfo} totalCourse = {course.length}/>
            <InstractorCourse email={instractorInfo.email}/>
            <InstractorGallary />
        </div>
    );
};

export default Instractor;