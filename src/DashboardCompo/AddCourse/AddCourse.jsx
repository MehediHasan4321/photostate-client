import React, { useState } from 'react';
import { useAuth } from '../../Utlites/useAuth';
import { uploadImage } from '../../AllApi/uploadImage';
import { addCouse } from '../../AllApi/addCourse';
import { Toaster, toast } from 'react-hot-toast';

const AddCourse = () => {
    const [uploadLoading, setUploadLoading] = useState(false)
    const courseCategory = ["Landscape Photography", "Wildlife Photography", "Street Photography", "Fashion Photography", "Sports Photography", "Travel Photography", "Fine Art Photography", "Wedding Photography"]
    const { user } = useAuth()
    const handleAddCourse = event => {
        event.preventDefault()
        setUploadLoading(true)
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.files[0]
        const description = form.description.value


        uploadImage(image).then(data => {
            
            const imgUrl = data.data.display_url
            const course = { name, category, price, rating, image: imgUrl, description, enroledStudent : [], email: user?.email, instractor: { name: user.displayName, image: user.photoURL },status:'painding' }
            addCouse(course)
                .then(data => {
                    if(data.insertedId){
                        toast.success('Your Course added It weating for Admin Aprove')
                        setUploadLoading(false)
                        form.reset()
                    }
                    
                })
                .catch(err => {
                    console.log(err.message)
                    setUploadLoading(false)
                })
        })
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
                <input type="submit" required className='w-full py-4 bg-[#f2f2f2] rounded-xl text-md font-semibold' value={uploadLoading ? 'Course Uploading...' : "Upload Your Course"} />
            </form>
            <Toaster/>
        </div>
    );
};

export default AddCourse;