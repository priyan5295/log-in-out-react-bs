import React, { useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {

    const [registerdata, setRegisterData] = useState({
        username: '',
        email:'',
        phone:'',
        password: ''
    })

    const [registererror, setRegisterError] = useState({})

    const [isChecks, SetisChecks] = useState(false)

    const [regsubmit, RegSubmit] = useState(false)

    const [showModal, setShowModal] = useState(true)

    const handleClose = (e) => {
        // e.preventDefault();
        setShowModal(false)
    };




    //handleonchange functionalities
    function handleChangeRegister(event) {
        const {name, value} = event.target;
        setRegisterData((oldValue) => ({
            ...oldValue,
            [name] : value
        }))
    }

    //register-validation
    const validate = (val) => {
        const regerror = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const numbers = /^\d{10}$/;
        if(!val.username){
            regerror.username = 'Your name is invalid'
        }
        if(!val.email){
            regerror.email = " Email field is required"
        } else if(!regex.test(val.email)){
            regerror.email = 'this is not valid email format'
        }
        if(!val.phone){
            regerror.phone = 'phoneno field is required'
        } else if(!numbers.test(val.phone)){
            regerror.phone = 'please enter a valid 10-digit number'  
        } 
        if(!val.password){
            regerror.password = 'Password field is required'
        } else if(val.password.length < 3) {
            regerror.password = 'Password cannot exceed more than 3 characters'
        } else if(val.password.length > 6){
            regerror.password = 'Password cannot exceed more than 6 characters'
        }
        return regerror
    }

    //validation-inprocess
    useEffect(() => {
        if(Object.keys(registererror).length === 0 & regsubmit){
            console.log('Register list', registerdata)
            localStorage.setItem('registerdata', JSON.stringify(registerdata))
        }
    }, [registererror])

    //formsubmit
    function handleRegisterSubmit(res) {
        res.preventDefault();
        console.log('Registervalues', registerdata);
        setRegisterError(validate(registerdata))
        RegSubmit(true);
    }

    function handleCheckBoxRegister(eve) {
        SetisChecks(eve.target.checked)
    }

    return (
        <>
        <Form className='card px-5 py-3' onSubmit={handleRegisterSubmit}>
            <h3 className='text-center mb-3 fw-bold text-primary'>Register</h3>

            {Object.keys(registererror).length === 0 && regsubmit && (
                <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="align-items-center d-flex fs-3 fw-bold justify-content-center" >
                              Registered successfully then you go to login
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            <Form.Group className="mb-1" >
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                name="username"
                placeholder="Enter your Name" 
                value={registerdata.username}
                onChange={handleChangeRegister}

                />
                {registererror.username && <p style={{ color: 'red', marginBottom: '.25rem' }}>{registererror.username}</p>}
            </Form.Group>

            <Form.Group className="mb-1" >
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email" 
                name="email"
                placeholder="Enter email" 
                value={registerdata.email}
                onChange={handleChangeRegister}
                />
                {registererror.email && <p style={{ color: 'red', marginBottom: '.25rem'}}>{registererror.email}</p>}
            </Form.Group>

            <Form.Group className="mb-1" >
                <Form.Label>Phone number</Form.Label>
                <Form.Control 
                type="number" 
                name="phone"
                placeholder="Enter phone number" 
                value={registerdata.phone}
                onChange={handleChangeRegister}
                maxLength={10}
                />
                {registererror.phone && <p style={{ color: 'red', marginBottom: '.25rem'}}>{registererror.phone}</p>}
            </Form.Group>

            <Form.Group className="mb-2" >
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                name="password"
                placeholder="Password" 
                value={registerdata.password}
                onChange={handleChangeRegister}
                />
                {registererror.password && <p style={{ color: 'red', marginBottom: '.25rem'}}>{registererror.password}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to the Terms and conditions" 
                onChange={handleCheckBoxRegister}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!isChecks}>
                Register
            </Button>
            <Form.Text className="mt-4 text-center">
                Already have an account? <br/>
                <Link to='/' className='text-decoration-none btn btn-outline-primary display-6 mt-2'>Login</Link>
            </Form.Text>
        </Form>
        </>
    )
}

export default Register