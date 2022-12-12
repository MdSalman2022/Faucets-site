import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import FAQ from '../components/Pages/FAQ/FAQ';
import Home from '../components/Pages/Home';
import Login from '../components/Pages/Login/Login';
import Signup from '../components/Pages/Signup/Signup';
import Main from '../Layout/Main';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },

        ]
    }
])

export default routes;