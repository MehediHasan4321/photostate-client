import React from 'react';
import Banner from '../../Components/Banner/Banner';
import PopulerCourses from '../../Components/PopulerCourses/PopulerCourses';
import PopularInstractors from '../../Components/PopularInstractors/PopularInstractors';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <>
            <Banner />
            <PopulerCourses />
            <PopularInstractors num={6} />
            <NewsLetter />
        </>
    );
};

export default Home;