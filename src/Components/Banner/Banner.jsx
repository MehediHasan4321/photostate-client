import React from 'react';

const Banner = () => {
    return (
        <div className='w-full h-[60vh] flex items-center' style={{backgroundImage:`linear-gradient(80deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${'https://c8.alamy.com/comp/KC2B51/professional-wildlife-photographer-outdoor-KC2B51.jpg'})`,backgroundPosition:'center',objectFit:'cover'}}>
            <div className= 'w-full text-center md:text-left md:w-1/3 md:ml-20'>
                <button className=' bg-orange-600 text-white px-10 text-center'>Beautiful</button>
                <h1 className='text-5xl font-bold text-white uppercase my-5'>photography</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci modi qui quaerat consequatur ullam maxime voluptas dolorum aliquam nisi!</p>
            </div>
        </div>
    );
};

export default Banner;