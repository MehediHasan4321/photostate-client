import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Utlites/useAuth';
import { findOrderByEmail } from '../../AllApi/findOrderByEmail';


const StudentSelectedCourse = () => {
    const { user } = useAuth()
    const [selected, setSelected] = useState([])

    findOrderByEmail(user.email).then(data => {
        setSelected(data)
    })
    console.log(selected)
    
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course</th>
                        <th>Price</th>
                        <th>Staatus</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        selected.map((order,index) => <tr key={order._id}>
                        <th>
                            {index + 1}
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{order.name}</div>
                                    <div className="text-sm opacity-50"></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default StudentSelectedCourse;