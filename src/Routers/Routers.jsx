import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import Regeister from '../Pages/Regeister/Regeister';
import Login from '../Pages/Login/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AddCourse from '../DashboardCompo/AddCourse/AddCourse';
import InstractorAllCours from '../DashboardCompo/InstractorAllCours/InstractorAllCours';
import AllStudents from '../DashboardCompo/AllStudents/AllStudents';
import AllInstractors from '../DashboardCompo/AllInstractors/AllInstractors';
import AdminAllCourse from '../DashboardCompo/AdminAllCourse/AdminAllCourse';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import UpdateCourse from '../DashboardCompo/UpdateCourse/UpdateCourse';

const Routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/courseDetails/:id',
                element:<PrivetRoute><CourseDetails/></PrivetRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/courses/${params.id}`)
            },
            {
                path:'/regeister',
                element:<Regeister/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivetRoute><Dashboard/></PrivetRoute>,
        children:[
            {
                path:'/dashboard/addCourse',
                element:<AddCourse/>
            },
            {
                path:'/dashboard/myCourse',
                element:<InstractorAllCours/>
            },
            {
                path:'/dashboard/allStudents',
                element:<AllStudents/>
            },
            {
                path:'/dashboard/allInstractors',
                element:<AllInstractors/>
            },
            {
                path:"/dashboard/allCourses",
                element:<AdminAllCourse/>
            },
            {
                path:'/dashboard/updateCourse/:id',
                element:<UpdateCourse/>,
                loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/courses/${params.id}`)
            }
        ]
    }
])


export default Routers;
