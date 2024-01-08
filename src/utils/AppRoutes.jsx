import React from 'react'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Add from '../components/Add'
import Edit from '../components/Edit'
import { Navigate } from 'react-router-dom'
const AppRoutes=[
    {
        path:"/",
        exact:true,
        element: <Home/>
    },
    {
        path:"/dashboard",
        exact:true,
        element:<Dashboard/>
    },
    {
        path:"/Add",
        exact:true,
        element:<Add/>
    },
    {
        path:"/edit/:id",
        exact:true,
        element:<Edit/>
    },
    {
        path:'*',
        exact:false,
        element:<Navigate to="/"/>
    }
]

export default AppRoutes