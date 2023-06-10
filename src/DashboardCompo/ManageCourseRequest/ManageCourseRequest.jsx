import { useEffect, useState } from 'react';
import Rating from '../../Components/Rating/Rating';
import Swal from 'sweetalert2';
import { deleteCourseById } from '../../AllApi/deleteCourseById'
import { updateCourseById } from '../../AllApi/updateCourseById';
import { getAllCourser } from '../../AllApi/getAlCourses';
import { Toaster, toast } from 'react-hot-toast';

const ManageCourseRequest = () => {
    const [aproveCourse, setAproveCourse] = useState([])
    const [fedbackId,setFedbackId] = useState('')
    useEffect(() => {
        getAllCourser().then(course => setAproveCourse(course))
    }, [])

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                deleteCourseById(id).then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    } else {
                        Swal.fire(
                            'Failed To Delete!',
                            "Your file dosen't  deleted.",
                            'error'
                        )
                    }
                })


            }
        })
    }
    const handleAprove = id => {
        const updateStatus = {
            status: "aprove"
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Aprove This Course",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Aprove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id)
                updateCourseById(updateStatus, id).then(res => {
                    if (res.modifiedCount > 0) {
                        Swal.fire(
                            'Aproved!',
                            'Your file has been Aproved.',
                            'success'
                        )
                    }
                })
                    .catch(err => {
                        console.log(err.message)
                    })

            }
            else {
                Swal.fire(
                    'Aproved!',
                    "Your file Dosen't Aproved.",
                    'error'
                )
            }
        })

    }

    const handleFedback = id => setFedbackId(id)
    const fedbackSubmit = (event)=>{
       const sendFedback = {
        fedback : event.target.fedback.value,
        status:'deny'
       }
        updateCourseById(sendFedback,fedbackId).then(res=>{
            if(res.modifiedCount>0){
                toast.success('Fedback Send To Instractor')
                setFedbackId('')
            }
            else{
                toast.error("Fedback can't Send To Instractor")
                setFedbackId('')
            }
        })
        setFedbackId('')
    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg'>
                            <th>#</th>
                            <th>Course Details</th>
                            <th>Instractor</th>
                            <th>Category</th>
                            <th>Total Seat</th>
                            <th>Deny Course</th>
                            <th>Aprove Course</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            aproveCourse.map((course, index) => <>
                                <tr key={course._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3 w-60">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={course.image} alt="image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm">{course.name.slice(0, 50)}</div>
                                                <div className="text-sm opacity-50"><Rating ratingNum={course.rating} /></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3 w-48">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={course?.instractor?.image} alt="image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm">{course?.instractor?.name.slice(0, 50)}</div>
                                                <div className="badge badge-ghost badge-sm">{course?.email}</div>
                                            </div>
                                        </div>

                                    </td>
                                    <td>{course.category}</td>
                                    <td>{course.quantity}</td>
                                    <td><button disabled={course.status === 'aprove' ||course.status === 'deny'} onClick={() => handleAprove(course._id)} className="btn btn-ghost btn-xs">Aprove</button></td>
                                    <td onClick={()=>handleFedback(course._id)}><button disabled={course.status === 'aprove' ||course.status === 'deny'} className="btn btn-ghost btn-xs" onClick={() => window.my_modal_2.showModal()}>Deny</button></td>
                                    <th>
                                        <button onClick={() => handleDelete(course._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>

                            </>)
                        }
                    </tbody>
                </table>
                <dialog id="my_modal_2" className="modal">
                <form onSubmit={fedbackSubmit} method="dialog" className="modal-box">
                        <textarea name="fedback" id="fedback" className='w-full h-32 text-neutral-600 text-md font-semibold p-2 border-[1px] rounded-lg' placeholder='Enter Fedback Whay You Want To Deny This Course'></textarea>
                        <input className='px-6 py-2 bg-black text-white font-semibold rounded-lg' type="submit" value="Send Fedback" />
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <Toaster/>
        </>
    );
}



export default ManageCourseRequest;