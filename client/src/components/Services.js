import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Container, Col, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Logo from '../images/logo.png'
import '../css/Services.css'

const Services = (props) => {

    useEffect(() => {
        document.getElementById('vid').play();
    });

    return (
        <>
            <Container className='Container card'>
                <img class="logo" src={ Logo } />
                <div class='mobile-show'>
                    <div class='video-container'>
                        <video id='vid' width="100%" height="100%" controls autoplay loop muted>
                            <source src="https://dl.dropboxusercontent.com/s/uw71zoayd4bffh6/A2%20Roofing%20Inc%20-%2009.04.2021.mp4?dl=0%22/%3E"/>
                        </video>
                    </div>
                </div>
                <NavBar/>
                <Row className="Row padding-50">
                    <Col className='Col' md={7}>
                        <h2>Services</h2>
                        <hr/>
                        <p>
                            We offer solutions for both residential and commercial needs, including, new construction, roof repairs and replacement.
                            With professional, honest and consistent communication, we are able to deliver superior workmanship using cutting edge tools.
                        </p>
                        <p>Additonally, we are <b>certified</b> to <b>install</b> the following:</p>
                        <ul>
                            <li>Shingle</li>
                            <li>Tile</li>
                            <li>modified bitumen</li>
                            <li>TPO</li>
                            <li>Stone coated metal</li>
                            <li>Standing seam</li>
                            <li>Other metals</li>
                        </ul>
                        <p>Not what you're looking for? <b>Contact</b> us to see how we can help your roofing needs.</p>    
                        
                    </Col>
                    <Col className='Col' md={5}>
                        <h2>Contact Us</h2>
                        <hr/>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Services