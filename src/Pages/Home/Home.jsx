import React from 'react';
import PopulerCourses from '../../Components/PopulerCourses/PopulerCourses';
import PopularInstractors from '../../Components/PopularInstractors/PopularInstractors';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner/>
            <PopulerCourses />
            <PopularInstractors num={6} />
            <NewsLetter />
        </>
    );
};

export default Home;