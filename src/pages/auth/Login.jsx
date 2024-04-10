import React, { useEffect, useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [logindata, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [loginError, setLoginError] = useState({})

    const [issubmit, SetIsSubmit] = useState(false)

    const [isChecked, SetIsChecked] = useState(false)

    const dashboards = useNavigate();


    //onchangefuntion - changing the input values 
    function handleChangeLogin(event) {
        const { name, value } = event.target;
        setLoginData((previousValues) => ({
            ...previousValues,
            [name]: value
        }))
    }




    //error-validation
    const validation = (value) => {
        const error = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!value.email) {
            error.email = 'Email field is required'
        } else if(!regex.test(value.email)){
            error.email = 'This is not Valid email format'
        }

        if(!value.password){
            error.password = 'Password field is required'
        } else if(value.password.length < 3){
            error.password = 'Password cannot exceed more than 3 characters'
        } else if(value.password.length > 6) {
            error.password = 'Password cannot exceed more than 6 characters'
        }

        if(!isChecked) {
            error.checks = 'Please check the box before submitting'
        }
        return error
    }

    //valiidation process page runs
    useEffect(() => {
        if(Object.keys(loginError).length === 0 && issubmit && isChecked) {
            console.log('show the login values', logindata, 'Checkbox Checked:', isChecked ? 'Yes' : 'No');
            localStorage.setItem('loginData', JSON.stringify(logindata))
        }
    }, [loginError])
    
    //register field get values
    const registeredData = JSON.parse(localStorage.getItem('registerdata'));
    console.log('getvalue in register', registeredData)

    //formsubmit 
    function handleLoginSubmit(response) {
        response.preventDefault()
        console.log('loginvalues', logindata, 'Checkbox Checked:', isChecked ? 'Yes' : 'No')
        // setLoginError(validation(logindata))
        // setLoginError({})

        const errors = validation(logindata)
        setLoginError(errors)
        
        if(Object.keys(errors).length > 0) {
            
            return;
        }

        SetIsSubmit(true)

        if (registeredData) {
            // Check for email mismatch and provide specific error message
            if (logindata.email !== registeredData.email) {
              setLoginError({ email: 'Invalid email' });
              return; // Halt execution if email doesn't match
            }
        
            // Check for password mismatch and provide specific error message
            if (logindata.password !== registeredData.password) {
              setLoginError({ password: 'Invalid password' });
              return; // Halt execution if password doesn't match
            }
        
            // Successful login, redirect to dashboard
            dashboards('/dashboard/services');
          } 
    

        // if (registeredData) {
        //     if (registeredData.email === logindata.email) {
        //         if (registeredData.password === logindata.password) {
                   
        //             dashboards('/dashboard');
        //         } else {
        //             setLoginError({ general: 'Invalid email or password' });
        //             console.log('error shown invalid')
        //         }
        //     } else {
        //         setLoginError({ general: 'No registered data found' });
        //     } 
        // } 
        

        // if(registeredData) {
        //     if(logindata.email === registeredData.email && logindata.password === registeredData.password) {
        //         dashboards('/dashboard')
        //     } else {
        //         setLoginError({ general: 'Invalid email or password' })
        //     } 
        // } else {
        //     setLoginError({ general: 'No registered data found' })
        // }

    }

    function handleToggleCheck(event){
            // console.log(event);
            SetIsChecked(event.target.checked)
    }

    return (
        <Form className='card p-5' onSubmit={handleLoginSubmit}>
            <h3 className='text-center mb-3 fw-bold text-primary'>Login</h3>

            {Object.keys(loginError).length === 0 && issubmit && isChecked && (
            <div style={{ border: '1px solid green', backgroundColor: 'lightgreen', color: 'green', padding: '5px', marginBottom: '5px' }}>Logined successfully</div>
            )}

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control

                    type="email"

                    name='email'

                    value={logindata.email}

                    placeholder="Enter email"

                    onChange={handleChangeLogin}
                />

                <p style={{ color: 'red'}}>{loginError.email}</p>

            </Form.Group>

            

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control

                    type="password"

                    name='password'

                    value={logindata.password}

                    placeholder="Password"

                    onChange={handleChangeLogin}

                />
                <p style={{ color: 'red'}}>{loginError.password}</p>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Check me out"  checked={isChecked} name="checks" onChange={handleToggleCheck}/>
                <p style={{ color: 'red'}}>{loginError.checks}</p>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="mt-4 text-center">
                Don't have an account? <br/>
                <Link to='/register' className='text-decoration-none btn btn-outline-primary display-6 mt-4'>Register</Link>
            </Form.Text>
        </Form>
    )
}

export default Login