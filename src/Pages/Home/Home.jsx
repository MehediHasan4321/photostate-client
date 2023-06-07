import React from 'react';
import Banner from '../../Components/Banner/Banner';
import PopulerCourses from '../../Components/PopulerCourses/PopulerCourses';
import PopularInstractors from '../../Components/PopularInstractors/PopularInstractors';

const Home = () => {
    return (
        <>
        <Banner/>
        <PopulerCourses/>
        <PopularInstractors/>
        </>
    );
};

export default Home;