import React from 'react';
import { useAuth } from '../../Utlites/useAuth';

const AddCourse = () => {
    const courseCategory = ["Landscape Photography", "Wildlife Photography", "Street Photography", "Fashion Photography", "Sports Photography", "Travel Photography", "Fine Art Photography", "Wedding Photography"]
    const {user} = useAuth()
    const handleAddCourse = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.files[0]
        const description = form.description.value
        const course = {name,category,price,rating,image,description,enrolledStudents:[],email:user?.email}
        console.log(course)
    }
    return (
        <div className='flex justify-center mt-24'>
            <form onSubmit={handleAddCourse} className='w-2/3 border-2 p-10 space-y-4'>
                <div className='flex gap-3'>
                    <div className='w-1/2'>
                        <label htmlFor="name" className='text-md font-semibold'>Your Course Name</label>
                        <input required className='text-md font-semibold py-4 w-full rounded-lg border-[1px] pl-4 mt-2' type="text" name="name" id="name" placeholder='Enter Your Course Name' />
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="category" className='text-md font-semibold'>Your Course Name</label>
                        <select required className='text-md font-semibold py-4 w-full rounded-lg border-[1px] pl-4 mt-2' name='category' id='category'>
                            {
                                courseCategory.map((item, index) => <option key={index}>{item}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='w-1/3'>
                        <label htmlFor="price" className='text-md font-semibold'>Your Course Price</label>
                        <input required className='text-md font-semibold py-4 w-full rounded-lg border-[1px] pl-4 mt-2' type="number" name="price" id="price" placeholder='Enter Your Course Price' />
                    </div>
                    <div className='w-1/3'>
                        <label htmlFor="rating" className='text-md font-semibold'>Your Course Rating</label>
                        <input required className='text-md font-semibold py-4 w-full rounded-lg border-[1px] pl-4 mt-2' type="text" name="rating" id="rating" placeholder='Enter Your Course Rating' />
                    </div>
                    <div className='w-1/3'>
                        <label htmlFor="image" className='text-md font-semibold'>Your Course Image</label>
                        <div className='text-md font-semibold py-4 w-full rounded-lg border-[1px] pl-4 mt-2'>
                            <input required className='  ' type="file" name="image" id="image" />
                        </div>

                    </div>
                </div>
                <div>
                    <label htmlFor="description" className='text-md font-semibold'>Added Your Course Descriptions</label>
                    <textarea name="description" required id="description" className='w-full h-32 font-semibold text-md rounded-xl border-[1px] mt-2 pl-4' placeholder='Enter Your Course Descriptions'></textarea>
                </div>
                <input type="submit" required className='w-full py-4 bg-[#f2f2f2] rounded-xl text-md font-semibold' value="Upload Your Course" />
            </form>
        </div>
    );
};

export default AddCourse;