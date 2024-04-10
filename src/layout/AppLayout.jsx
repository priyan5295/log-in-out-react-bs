import React from 'react'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (

            <>
            <Headers />
            <Outlet/>
            <Footer/>
            </>     
        
 
    )
}

export default AppLayout
