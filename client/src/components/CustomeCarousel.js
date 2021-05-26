import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../css/CustomeCarousel.css'

const CustomeCarousel = (props) => {
    
    const { slideHeight } = props;

    const renderSlides = () => {
        return props.slides.map(slide =>
            <Carousel.Item>
                <img  class="slide" src={slide} style={slideHeight}/>
            </Carousel.Item>)
    }

    return (
        <Carousel className="Carousel">
            { props.slides ? renderSlides() : null }
        </Carousel>
    )
}

export default CustomeCarousel