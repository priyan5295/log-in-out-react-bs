import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {

    const getdatavalues = localStorage.getItem('registerdata')

    return (
        getdatavalues ? <Outlet /> : <Navigate to='/' replace/>
    )
}

export default ProtectedRoute