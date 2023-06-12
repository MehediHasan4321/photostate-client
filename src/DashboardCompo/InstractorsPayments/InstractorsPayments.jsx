import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Utlites/useAuth";
import useAxiosSecures from "../../Utlites/useAxiosSecures";


const InstractorsPayments = () => {
    const {user} = useAuth()
    const [axiosSerure] = useAxiosSecures()

    const {data,refetch} = useQuery({queryFn:async()=>{
            const res =await axiosSerure(`${import.meta.env.VITE_BASE_URL}/instractor/payments/${user?.email}`)
            return res.data
    },queryKey:'instractorPayments'})


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
                        <th>Student</th>
                        <th>Price</th>
                        <th>transtion Id</th>
                        <th>Payment Method</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                  
                    {
                        data?.map((item,index)=><tr key={item._id}>
                            <th>
                               {index + 1}
                            </th>
                            <td className="w-48">
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name.slice(0,20)}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">{item.studentEmail}</span>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.transactionId}</td>
                            <td>{item.paymentMehtod}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>)
                    }
                 
                </tbody>
                

            </table>
        </div>
    );
};

export default InstractorsPayments;