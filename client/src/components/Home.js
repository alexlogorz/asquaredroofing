import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Container, Col, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Logo from '../images/logo.png'
import '../css/Home.css'
import { ImLocation } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Home = (props) => {

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
                        <div class='about'>
                            <h2>About Us</h2>
                            <hr/>
                            <p>A Squared Roofing, Inc. is a recognized leader in the roofing industry. Our reputation is built upon our dedication to our clients, including listening to their needs, ideas and constraints, then delivering the agreed upon result.</p>
                        </div>
                        <div class='mission'>
                            <h2>Mission Statement</h2>
                            <hr/>
                            <p>Our vision is to become our client’s roofing contractor of choice by providing a positive and satisfying roofing experience that exceeds their expectations.</p>
                        </div>
                    </Col>
                    <Col className='Col' md={5}>
                        <h2>Contact Us</h2>
                        <hr/>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>

            <Container className='Container creds card'>
                <div class='overlay' align='center'>
                    <Row className='Row'>
                        <Col className='Col' md={6}><h2>OUR <span style={{color: 'red'}}>CREDENTIALS</span></h2><p>With over 15 years in the business, we have partnered with various industry leaders</p></Col>
                        <Col className='Col' md={6}>
                            <ul>
                                <li>Energy Star</li>
                                <li>Spirit of Enterprise</li>
                                <li>National Roofing</li>
                                <li>Varitile</li>
                                <li>Atlas</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container className='Container card'>
                <Row className='Row padding-50'>
                <Col className='Col' md={6}>
                    <h3>Locations <ImLocation/></h3>
                    <hr/>
                    <a href='https://www.google.com/search?q=4813+N+Manhattan+Ave%2C+Tampa%2C+Fl+33614&rlz=1C1UEAD_enUS951US951&oq=4813+N+Manhattan+Ave%2C+Tampa%2C+Fl+33614&aqs=chrome..69i57j33i299.1139j0j7&sourceid=chrome&ie=UTF-8'  target='new'>Tampa office</a>
                    <br/>
                    <a href='https://www.google.com/search?q=8144+W+26th+Ave%2C+Hialeah%2C+Fl+33016&rlz=1C1UEAD_enUS951US951&oq=8144+W+26th+Ave%2C+Hialeah%2C+Fl+33016&aqs=chrome..69i57j33i299.469j0j4&sourceid=chrome&ie=UTF-8' target='new'>Miami office</a>
                </Col>
                <Col className='Col' md={6}>
                    <h3>Contact <BsFillTelephoneFill/></h3>
                    <hr/>
                    <a href="tel:8135591252">813-559-1252</a>
                    <br/>
                    <a href="tel:3052317111">305-231-7111</a>
                </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home