import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecures from "../../Utlites/useAxiosSecures";

const EnrolledUsers = ({ enrolledUser }) => {
    const [users,setUsers] = useState([])
    const [axiosSerure] = useAxiosSecures()
    useEffect(()=>{
        axiosSerure(`enrolledStudent?emails=${enrolledUser}`).then(res=>setUsers(res.data))
        
    },[enrolledUser])
  
    return (
        <div className="col-span-2 px-4">
            <h1 className='text-xl md:text-2xl font-semibold mt-2 text-neutral-600'>Who Has Already Enrolled This Course</h1>
            <div className='w-auto flex gap-2 flex-wrap mt-4 border-[1px] py-4 px-2'>
            {
                users?.map(user => <img key={user._id} title={user?.name} className='w-16 h-16 rounded-full border-[1px]' src={user?.image} alt="enroll user" />)
            }
        </div>
        </div>
    );
};

export default EnrolledUsers;