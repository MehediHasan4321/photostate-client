import React, { useState } from 'react';
import { getUserByRole } from '../../AllApi/getusersByRole';

const AllInstractors = () => {
    const [instractors, setInstractors] = useState([])
    getUserByRole('instractor').then(data => setInstractors(data))
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-xl'>
                        <th>#</th>
                        <th>Details</th>
                        <th>Aprove Course</th>
                        <th>Painding Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instractors.map((instractor,index) => <tr key={instractor._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={instractor.image} alt='Prifile Pic' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{instractor.name}</div>
                                        <div className="text-sm opacity-50">{instractor.email}</div>
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

export default AllInstractors;