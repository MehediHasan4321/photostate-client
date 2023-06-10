import React, { useEffect, useState } from 'react';
import { getAllPaymentsHistory } from '../../AllApi/getAllPaymentsHistory';
import Rating from '../../Components/Rating/Rating';

const StudentPaymentHistory = () => {
    const [paymetsHistory,setPaymentsHistory] = useState([])
    useEffect(()=>{
        getAllPaymentsHistory().then(res=>setPaymentsHistory(res))
    },[])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course</th>
                        <th>Instractor</th>
                        <th>Price</th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Payments Methods</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paymetsHistory.map((payment,index)=><tr key={payment._id}>
                            <th>
                               {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={payment.image} alt="Course Image" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{payment.name?.slice(0,20)}</div>
                                        <div className="text-purple-400"><Rating ratingNum={payment.rating}/></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={payment.instractor?.image} alt="Profile Pic" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{payment.instractor.name}</div>
                                        <div className="text-sm opacity-50">{payment?.instractor?.talent}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{payment.price}</td>

                            <th>
                                {payment.transactionId}
                            </th>
                            <th>{payment.data}</th>
                            <th>
                                card
                            </th>
                        </tr>)
                    }
                </tbody>
                
            </table>
        </div>
    );
};

export default StudentPaymentHistory;