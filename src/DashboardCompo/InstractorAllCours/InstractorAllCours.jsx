import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Utlites/useAuth';
import { deleteCourseById } from '../../AllApi/deleteCourseById';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxiosSecures from '../../Utlites/useAxiosSecures';
import { useQuery } from '@tanstack/react-query';

const InstractorAllCours = () => {
    const [axiosSerure] = useAxiosSecures()
    const { user } = useAuth()
    const [feadback,setFedback] = useState('')
    const { data, refetch } = useQuery({
        queryFn: async () => {
            const res = await axiosSerure(`/instractorCourse/${user?.email}`)
            return res.data
        }, queryKey: 'instractorCourse'
    })


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

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg font-semibold'>
                            <th>#</th>
                            <th>Course</th>
                            <th>Category</th>
                            <th>Enroled Student</th>
                            <th>Price</th>
                            <th>Seat</th>
                            <th>Status</th>
                            <th>Fedback</th>
                            <th>Updata</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((cours, index) => <>
                                <tr key={cours._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-24 h-24">
                                                    <img src={cours?.image} alt="course Image" />
                                                </div>
                                            </div>
                                            <div className='w-48'>
                                                <div className="text-sm font-bold">{cours?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-bold'>{cours.category}</td>
                                    <td className='font-bold'>{cours.enroledStudent.length}</td>
                                    <td className='font-bold'>Price: ${cours.price}</td>
                                    <td className='font-bold'>{cours?.quantity}</td>
                                    <td className='font-bold'>{cours.status}</td>
                                    <td>{cours.status === 'deny' ? <button onClick={() => {window.my_modal_1.showModal(), setFedback(cours?.fedback)}} className='btn btn-ghost btn-sm'>Feadback Found</button> : "No Fedback"}</td>
                                    <th>
                                        <Link to={`/dashboard/updateCourse/${cours._id}`} className="btn btn-ghost btn-xs font-bold">Updata</Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(cours._id)} className="btn btn-ghost btn-xs font-bold">Delete</button>
                                    </th>
                                </tr>

                            </>)
                        }
                    </tbody>

                </table>
            </div>
            {/* You can open the modal using ID.showModal() method */}
            {/* Open the modal using ID.showModal() method */}
            
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello! {user?.displayName} </h3>
                    <p className="py-4">{feadback}</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={()=>setFedback('')} className="btn">Close</button>
                    </div>
                </form>
            </dialog>

        </>
    );
};

export default InstractorAllCours;