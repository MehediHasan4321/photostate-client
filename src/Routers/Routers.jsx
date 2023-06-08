import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import Regeister from '../Pages/Regeister/Regeister';
import Login from '../Pages/Login/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';

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
                element:<CourseDetails/>,
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
        element:<Dashboard/>
    }
])


export default Routers;
