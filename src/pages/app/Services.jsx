import React from "react";
import { Carousel } from "react-bootstrap";
import Slides1 from '../../assets/p-0.png'
import Slides2 from '../../assets/p-1.png'
import Slides3 from '../../assets/p-2.png'

const Services = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="w-100" src={Slides1} alt="first-slides" fluid/>
                    <Carousel.Caption>
                        <h3>Be Calm</h3>
                        <p>The only way to do great work is to love what you do.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img className="w-100 " src={Slides2} alt="second-slides" fluid/>
                    <Carousel.Caption>
                        <h3>Be Focus</h3>
                        <p>It’s not a bug. It’s an undocumented feature!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                <img className="w-100 " src={Slides3} alt="third-slides" fluid/>
                    <Carousel.Caption>
                        <h3>Go On!!!</h3>
                        <p>Talk is cheap. Show me the code.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Services