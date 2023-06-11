import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Utlites/useAuth';
import { findOrderByEmail } from '../../AllApi/findOrderByEmail';
import Rating from '../../Components/Rating/Rating';
import { Link } from 'react-router-dom';
import { deleteOrderById } from '../../AllApi/deleteOrderById';
import { Toaster, toast } from 'react-hot-toast';
import Swal from 'sweetalert2';


const StudentSelectedCourse = () => {
    const { user } = useAuth()
    const [selected, setSelected] = useState([])
    useEffect(()=>{
        findOrderByEmail(user.email,'selecet').then(data => {
            setSelected(data)
            
        })
    },[user])
     
     
    const handleCancelCourse = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteOrderById(id).then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Cancel!',
                            'Your file has been Canceled.',
                            'success'
                        )
                    }
                    else {
                        Swal.fire(
                            'Cancel!',
                            "Your file dosen't Canceled.",
                            'error'
                        )
                    }
                }).catch(err => {
    
                    toast.error(err.message)
                })
    
            }
        })
    }
    
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-lg'>
                        <th>#</th>
                        <th>Course</th>
                        <th>Instractor</th>
                        <th>Course Rating</th>
                        <th>Price</th>
                        <th>Cancel</th>
                        <th>pay</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        selected.map((order, index) => <tr key={order._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={order?.course?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className='w-60'>
                                        <div className="font-bold">{order?.course?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={order?.course?.instractor.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className='w-60'>
                                        <div className="font-bold">{order?.course?.instractor.name}</div>

                                    </div>
                                </div>
                            </td>
                            <td><Rating ratingNum={order?.course?.rating} /></td>
                            <td>Price : ${order?.course?.price}</td>

                            <th>
                                <button onClick={() => handleCancelCourse(order?._id)} className="btn btn-ghost btn-xs">{"Cancel Course"}</button>
                            </th>
                            <th>
                                <Link to={`/dashboard/payment/${order?._id}`} className="btn btn-ghost btn-xs">pay ${order?.course?.price}</Link>
                            </th>
                        </tr>)
                    }

                </tbody>
                <Toaster />
            </table>
        </div>
    );

}
export default StudentSelectedCourse;