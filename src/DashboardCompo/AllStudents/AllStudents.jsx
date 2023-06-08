import React, { useState } from 'react';
import { getUserByRole } from '../../AllApi/getusersByRole';

const AllStudents = () => {
    const [students,setStudents] = useState([])
    getUserByRole('student').then(data=>setStudents(data))
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-xl'>
                        <th>#</th>
                        <th>Details</th>
                        <th>Enrolled Course</th>
                        <th>Selected Course</th>
                        <th>Total Pay</th>
                        <th>Updata Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student,index) => <tr key={student._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={student.image} alt='Prifile Pic' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{student.name}</div>
                                        <div className="text-sm opacity-50">{student.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                00
                            </td>
                            <td>00</td>
                            <td>$00</td>
                            <td><button className="btn btn-ghost font-semibold">{student.role}</button></td>
                            <th>
                            <button className="btn btn-ghost font-semibold">delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>
                {/* foot */}

            </table>
        </div>
    );
};

export default AllStudents;