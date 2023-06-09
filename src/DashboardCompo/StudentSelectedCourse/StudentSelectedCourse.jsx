import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Utlites/useAuth';
import { findOrderByEmail } from '../../AllApi/findOrderByEmail';
import Rating from '../../Components/Rating/Rating';
import { Link } from 'react-router-dom';
import { deleteOrderById } from '../../AllApi/deleteOrderById';
import { Toaster, toast } from 'react-hot-toast';
import Loader from '../../ShareComponents/Loader/Loader';


const StudentSelectedCourse = () => {
    const { user } = useAuth()
    const [selected, setSelected] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(false)
    findOrderByEmail(user.email).then(data => {
        setSelected(data)
    })
    const handleCancelCourse = id => {
        setDeleteStatus(true)
        deleteOrderById(id).then(data => {
            if (data.deletedCount > 0) {
                setDeleteStatus(false)
                toast.success('Course Has beent Canceled')
            }
            else {
                setDeleteStatus(false)
                toast.error('Cancel Oparation Failed')
            }
        }).catch(err=>{
            setDeleteStatus(false)
            toast.error(err.message)
        })
    }

    if (deleteStatus) {
        return <Loader isLoading={deleteStatus} />
    } else {
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
                                    <button onClick={() => handleCancelCourse(order?._id)} className="btn btn-ghost btn-xs">{deleteStatus ? "Canceling..." : "Cancel Course"}</button>
                                </th>
                                <th>
                                    <Link to={'/dashboard/payment'} className="btn btn-ghost btn-xs">pay ${order?.course?.price}</Link>
                                </th>
                            </tr>)
                        }

                    </tbody>
                    <Toaster />
                </table>
            </div>
        );
    };

}
export default StudentSelectedCourse;