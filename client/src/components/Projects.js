import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Container, Col, Row, Modal, Button } from 'react-bootstrap'
import CustomeCarousel from './CustomeCarousel'
import ContactForm from './ContactForm'
import Logo from './../images/logo.png'
import properties from './../properties/older-properties'
import './../css/Projects.css'
import './CustomeCarousel'

const Projects = (props) => {

    const [show, setShow] = useState(false);
    const [address, setAddress] = useState('');
    const [slides, setSlides] = useState([]);

    // useEffect(() => {
    //     document.getElementById('vid').play();
    // });

    const handleClose = () => setShow(false);

    const handleShow = (address, slides) => {
        setAddress(address);
        setSlides(slides);
        setShow(true);
    }

    const Item = (props) => {
        return (
            <div onClick={ () => handleShow(props.address, props.slides) } class='property'>
                <img src={ props.image } />
            </div>
        )
    }

    const RenderProperties = () => {
        return properties.map(property => <Item onClick={ handleShow } address={ property.address } slides={ property.images } image={ property.images[0] } />)
    }

    return (
        <>
            <Modal size="lg" dialogClassName='myModal' show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    {/* <Modal.Title>{ address }</Modal.Title> */}
                </Modal.Header>
                <Modal.Body><CustomeCarousel address={address} slides={slides}/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Container className='Container card'>
                <img class="logo" src={ Logo } />
                <div class='mobile-show'>
                    {/* <div class='video-container'>
                        <video id='vid' width="100%" height="100%" controls autoplay loop muted>
                            <source src="https://dl.dropboxusercontent.com/s/uw71zoayd4bffh6/A2%20Roofing%20Inc%20-%2009.04.2021.mp4?dl=0%22/%3E"/>
                        </video>
                    </div> */}
                    <CustomeCarousel slideHeight={{height: '600px'}} slides={[
                        properties[1].images[0],
                        properties[6].images[1],
                        properties[4].images[2],
                        properties[2].images[0],
                        properties[0].images[1]]} />
                </div>
                <NavBar />
                <Row className="Row padding-50">
                    <Col className='Col projects' md={ 7 }>
                        <h1>Projects</h1>
                        <hr />
                        <RenderProperties />
                    </Col>
                    <Col className='Col' md={ 5 }>
                        <h1>Contact Us</h1>
                        <hr/>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Projects