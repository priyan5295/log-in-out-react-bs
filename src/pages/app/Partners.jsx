import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import cardImg1 from '../../assets/about.png'
import cardImg2 from '../../assets/partn-4.webp'
import cardImg3 from '../../assets/partn-2.webp'
import cardImg4 from '../../assets/partn-3.webp'

const images = [
    { src: cardImg1, title: 'Planning', text: ''},
    { src: cardImg2, title: 'Team Together', text: '' },
    { src: cardImg3, title: 'Discussion', text: '' },
    { src: cardImg4, title: 'Success', text: '' },
];

const Partners = () => {

    // const [rowsImg, setRowsImg] = useState([])

    // useEffect(() => {
    //     const newRows = [];
    //     for(let i=0; i < images.length; i += imagesEachRow){
    //         newRows.push(images.slice(i, i + imagesEachRow));
    //     }
    //     setRowsImg(newRows)
    // }, [images, imagesEachRow]);

        return (
            <>
             {images.reduce((rows, image, idx) => {
                if (idx % 4 === 0) rows.push([]); // Create a new row every fourth image
                rows[rows.length - 1].push(image); // Push the current image into the last row
                return rows;
            }, []).map((row, rowIndex) => (
                        
                <Row key={rowIndex} xs={2} md={2} sm={12} className="g-4 m-0 bg-dark bg-gradient bg-opacity-100 overflow-hidden">
                    {row.map((image, colIndex) => (
                        <Col key={colIndex} className="mb-4">
                            <Card className="border-0 ">
                                <Card.Img variant="top" src={image.src} className="img-fluid" />
                                <Card.ImgOverlay>
                                <Card.Body className=" position-absolute bottom-0 bg-secondary w-100 opacity-75 start-50 translate-middle-x text-white">
                                    <Card.Title className="display-6 text-nowrap ">{image.title}</Card.Title>
                                    <Card.Text>{image.text}</Card.Text>
                                </Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
            {/* <Row xs={2} md={2} className="g-4">
            
                {images.map((images, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={images.src} fluid/>
                            <Card.Body>
                                <Card.Title>{images.title}</Card.Title>
                                <Card.Text>
                                {images.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> */}
            </>
        )
}

export default Partners