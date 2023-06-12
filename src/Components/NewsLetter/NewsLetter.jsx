
import 'aos/dist/aos.css'
const NewsLetter = () => {
    return (
        <div className='bg-[#F7CAB3] h-96 mt-12' data-aos="fade-up"data-aos-duration="1000">
            <div className=' px-4 md:p-20 space-y-4 w-full md:w-2/3'>
                <h1 className='text-xl md:text-4xl font-semibold'>Subcribet To Our New Letter</h1>
                <p className='text-sm text-neutral-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio necessitatibus itaque dolores, ullam temporibus voluptatum voluptates, illo earum ab, nisi nostrum similique ipsum? Vel tenetur consectetur eveniet. Officia doloribus placeat dignissimos consectetur, dicta sapiente nihil, voluptates minima similique libero ratione sed vel voluptatibus quia voluptate laboriosam possimus. Quae, labore.</p>
                <dir className='flex 1/2'>
                    <input placeholder='Enter Your Email' type="email" name="" id="" className=' py-2 w-full px-2 outline-none' />
                    <button className='bg-black text-white font-semibold px-6 py-2'>Subscribe</button>
                </dir>
            </div>
        </div>
    );
};

export default NewsLetter;