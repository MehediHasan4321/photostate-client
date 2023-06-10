import React, { useState } from 'react';
import { getAllCourser } from '../../AllApi/getAlCourses';
import Rating from '../../Components/Rating/Rating';
import Swal from 'sweetalert2';
import { deleteCourseById } from '../../AllApi/deleteCourseById';

const AdminAllCourse = () => {
    const [courses, setCourses] = useState([])
    getAllCourser().then(data => setCourses(data))

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
                        <tr className='text-lg'>
                            <th>#</th>
                            <th>Course Details</th>
                            <th>Instractor</th>
                            <th>Category</th>
                            <th>Total Seat</th>
                            <th>Total Enrolled</th>
                            <th>Total Seleceted</th>
                            <th>Course Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            courses.map((course, index) => <>
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
                                <td>00</td>
                                <td>00</td>
                                <td><button className="btn btn-ghost btn-xs">{course.status}</button></td>
                                <th>
                                    <button onClick={() => handleDelete(course._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminAllCourse;