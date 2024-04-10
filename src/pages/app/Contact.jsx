import React, { useState } from "react";
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import contactImg from '../../assets/contact.webp'
import { Button, Form} from 'react-bootstrap'

const Contact = () => {

    const [contactemail, setContactEmail] = useState({
        email: '',
        message: ''
    });

    function handleContactSubmit(event) {
        const {name, value} = event.target
        setContactEmail((oldEmailvalues) => ({
            ...oldEmailvalues,
            [name]: value
        }))
    }

    function handleSubmit(res) {
        res.preventDefault();
        console.log('outputs', contactemail)
    }

    return (
        <>
        <Row className="mt-5 m-0 mb-5">
            <Col md={6}>
                <img src={contactImg} alt="contact" className="img-fluid rounded-5"/>
            </Col>
            <Col md={6}>
                <h1>Contact Us!</h1>
                <p>Do something you fillout the form & Get in touch with Us..</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                        <Form.Control 
                            type='email'
                            name='email'
                            placeholder='Enter You Email'
                            value={contactemail.email}
                            onChange={handleContactSubmit}
                            
                            required
                        />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Control
                            as='textarea'
                            name='message'
                            rows={3}
                            placeholder='Enter your message'
                            value={contactemail.message}
                            onChange={handleContactSubmit}
                            required
                        />
                    </Form.Group>
                    <Button variant="secondary" className="w-100 fs-4" type='submit'>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        </>
    )
}

export default Contact