import React, { useState } from 'react';
import { useAuth } from '../../Utlites/useAuth';
import { getInstractorCourse } from '../../AllApi/getInstractorCourse';
import Rating from '../../Components/Rating/Rating';

const InstractorAllCours = () => {
    const [course, setCourse] = useState([])
    const { user } = useAuth()
    getInstractorCourse(user?.email).then(data => setCourse(data))
    return (
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
                        <th>Status</th>
                        <th>Updata</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        course.map((cours, index) => <tr key={cours._id}>
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
                            <td className='font-bold'>{cours.status}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs font-bold">Updata</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs font-bold">Delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default InstractorAllCours;