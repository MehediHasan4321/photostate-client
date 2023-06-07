import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';

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
                element:<CourseDetails/>
            }
        ]
    }
])


export default Routers;
