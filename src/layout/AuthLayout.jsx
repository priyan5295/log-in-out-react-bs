import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import LoginImg from '../assets/login.webp'
import RegisterImg from '../assets/register.webp'

const AuthLayout = () => {

    const location = useLocation()

    console.log('loct',location);



    return (
        <div>
            <Container fluid={true} className="p-0">
            <Row className='p-0 m-0 bg-dark bg-gradient'>
                <Col lg={{ span: 6, order: location.pathname === '/register' ? 2 : 1 }} className="text-center mb-4 mb-lg-0">
                    <img src={location.pathname === '/register' ? RegisterImg : LoginImg} className='img-fluid' style={{ height: '100vh'}}/>
                </Col>
                <Col lg={{ span: 6, order: 1}} className='d-lg-flex justify-content-center align-items-center'>
                    <Outlet/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default AuthLayout
