

const CarusalBanner = ({info}) => {
    return (
        <div className=' h-[60vh] flex items-center' style={{backgroundImage:`linear-gradient(80deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${info.image})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",objectFit:'cover'}}>
            <div className= ' text-center md:text-left md:w-1/3 md:ml-20'>
                <button className=' bg-orange-600 text-white px-10 text-center'>Beautiful</button>
                <h1 className='text-5xl font-bold text-white uppercase my-5'>{info.title}</h1>
                <p className='text-white'>{info.description}</p>
            </div>
        </div>
    );
};

export default CarusalBanner;