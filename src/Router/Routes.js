import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Pages/Home';
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

        ]
    }
])

export default routes;