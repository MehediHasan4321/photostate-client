import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Utlites/useAuth';
import { findOrderByEmail } from '../../AllApi/findOrderByEmail';
import Rating from '../../Components/Rating/Rating';

const StudentEnrolledCourse = () => {
    const [enrolledCourse,setEnrolledCourse] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
       findOrderByEmail(user?.email,'enrolled')
       .then(res=>setEnrolledCourse(res))
    },[user])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                           #
                        </th>
                        <th>Course</th>
                        <th>Instractor</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Payments?</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolledCourse.map((enroll,index)=><tr key={enroll._id}>
                            <th>
                               {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={enroll?.course?.image} alt="Course image" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50"><Rating ratingNum={enroll?.course?.rating}/></div>
                                    </div>
                                </div>
                            </td>
                            <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={enroll?.course?.instractor?.image} alt="Profiel pic" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{enroll?.course?.instractor?.name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            <td>${enroll?.course?.price}</td>
                            <th>{enroll?.orderStatus}</th>
                            <th>True</th>
                            <th>
                                <button className='btn btn-ghost btn-sm'>Review</button>
                            </th>
                        </tr>)
                    }
                    
                </tbody>
                
            </table>
        </div>
    );
};

export default StudentEnrolledCourse;