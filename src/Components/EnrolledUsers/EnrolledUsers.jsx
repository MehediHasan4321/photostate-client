import { useState } from "react";
import { useEffect } from "react";

const EnrolledUsers = ({ enrolledUser }) => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/users/student?emails=${enrolledUser}`).then(res=>res.json()).then(data=>setUsers(data))
    },[enrolledUser])
    
    return (
        <div className="col-span-2 px-4">
            <h1 className='text-xl md:text-2xl font-semibold mt-2 text-neutral-600'>Who Has Already Enrolled This Course</h1>
            <div className='w-auto flex gap-2 flex-wrap mt-4 border-[1px] py-4'>
            {
                users?.map(user => <img key={user._id} title={user?.name} className='w-16 h-16 rounded-full border-[1px]' src={user?.image} alt="enroll user" />)
            }
        </div>
        </div>
    );
};

export default EnrolledUsers;