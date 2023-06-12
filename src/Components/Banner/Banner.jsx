import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import CarusalBanner from '../CarusalBanner/CarusalBanner';


const Banner = () => {
    const [slider, setSlider] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/allBanner`).then(res => res.json()).then(data => setSlider(data))
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <div className="container mx-auto w-full">
            <Slider {...settings}>
                {
                    slider.map((item) => <CarusalBanner key={item._id} info={item} />)
                }
            </Slider>
        </div>
    );
};

export default Banner;