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
import StudentSelectedCourse from '../DashboardCompo/StudentSelectedCourse/StudentSelectedCourse';
import StudentEnrolledCourse from '../DashboardCompo/StudentEnrolledCourse/StudentEnrolledCourse';
import StudentPaymentHistory from '../DashboardCompo/StudentPaymentHistory/StudentPaymentHistory';
import AllCurses from '../Pages/AllCurses/AllCurses';
import Payment from '../DashboardCompo/Payment/Payment';
import Instractor from '../Pages/Instractor/Instractor';
import ManageCourseRequest from '../DashboardCompo/ManageCourseRequest/ManageCourseRequest';
import { getCoursesByStatus } from '../AllApi/getCoursesByStatus';
import { getCourseOrderById } from '../AllApi/getCourseOrderById';
import PopularInstractors from '../Components/PopularInstractors/PopularInstractors';
import FourOFourPage from '../Pages/FourOFourPage/FourOFourPage';

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
            },
            {
                path:'/allCourses',
                element:<AllCurses/>,
                loader:()=>getCoursesByStatus('aprove')
            },
            {
                path:'/instractor/:email',
                element:<PrivetRoute><Instractor/></PrivetRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/instractor/${params.email}`)
            },
            {
                path:'/instractors',
                element:<PopularInstractors/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivetRoute><Dashboard/></PrivetRoute>,
        children:[
            {
                path:'/dashboard/addCourse',
                element:<PrivetRoute><AddCourse/></PrivetRoute>
            },
            {
                path:'/dashboard/myCourse',
                element:<PrivetRoute><InstractorAllCours/></PrivetRoute>
            },
            {
                path:'/dashboard/allStudents',
                element:<PrivetRoute><AllStudents/></PrivetRoute>
            },
            {
                path:'/dashboard/allInstractors',
                element:<PrivetRoute><AllInstractors/></PrivetRoute>
            },
            {
                path:"/dashboard/allCourses",
                element:<PrivetRoute><AdminAllCourse/></PrivetRoute>
            },
            {
                path:'/dashboard/updateCourse/:id',
                element:<PrivetRoute><UpdateCourse/></PrivetRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/courses/${params.id}`)
            },
            {
                path:'/dashboard/selectedClass',
                element:<PrivetRoute><StudentSelectedCourse/></PrivetRoute>
            },
            {
                path:'/dashboard/enrolledClass',
                element:<PrivetRoute><StudentEnrolledCourse/></PrivetRoute>
            },
            {
                path:'/dashboard/paymentHistory',
                element:<PrivetRoute><StudentPaymentHistory/></PrivetRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<PrivetRoute><Payment/></PrivetRoute>,
                loader:({params})=>getCourseOrderById(params.id)
            },
            {
                path:'/dashboard/manageCourseRequest',
                element:<PrivetRoute><ManageCourseRequest/></PrivetRoute>
            }
        ]
    },
    {
        path:'*',
        element:<FourOFourPage/>
    }
])


export default Routers;
