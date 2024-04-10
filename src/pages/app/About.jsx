import React from "react";
import AboutImg from '../../assets/aboutus.webp'
import Card from 'react-bootstrap/Card'

const About = () => {
    return (
        <>
        <Card className="bg-dark border card p-lg-5 mb-lg-3 mx-lg-3">
        <Card.Img src={AboutImg} className="opacity-75 shadow" />
        <Card.ImgOverlay>
        <Card.Body>
            <Card.Text className="fw-normal mt-lg-5 display-6 display-sm-6 text-white ms-lg-4">
                Welcome to Our <br/>About Page its Shown
            </Card.Text>
            <Card.Text className="fs-5 text-white ms-4">
                This Sites Natural Lead-in additional content.
            </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>
        </Card>
        </>
    )
}

export default About