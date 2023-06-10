import React, { useEffect, useState } from 'react';
import { getUserByRole } from '../../AllApi/getusersByRole';
import Swal from 'sweetalert2';
import { saveUserToDB } from '../../AllApi/saveUserToDB';


const AllStudents = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        getUserByRole('student').then(data => setStudents(data))
    }, [])

    const handleBecameAdmin = user =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You want To Do Admin Him/Her",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Do it!'
          }).then((result) => {
            if (result.isConfirmed) {
                saveUserToDB(user,'Admin')
                .then(res=>{
                    if(res.modifiedCount>0){
                        Swal.fire(
                            'Admin',
                            'He is Now Admin.',
                            'success'
                          )
                    }
                })
              
            }
          })
    }

    const handleBecameInstractor = user =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You want To Do Instractor Him/Her",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Do it!'
          }).then((result) => {
            if (result.isConfirmed) {
                saveUserToDB(user,'instractor')
                .then(res=>{
                    if(res.modifiedCount>0){
                        Swal.fire(
                            'Istractor!',
                            'He/She is now Instractor',
                            'success'
                          )
                    }
                })
              
            }
          })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-xl'>
                        <th>#</th>
                        <th>Details</th>
                        <th>Current Role</th>
                        <th>Updata To Admin</th>
                        <th>Updata To Instractor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => <tr key={student._id}>
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
                            <td><button className="btn btn-ghost font-semibold">{student.role}</button></td>
                            <th>
                                <button onClick={()=>handleBecameAdmin(student)} className="btn btn-ghost font-semibold">Admin</button>
                            </th>
                            <th>
                                <button onClick={()=>handleBecameInstractor(student)} className="btn btn-ghost font-semibold">Instractor</button>
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