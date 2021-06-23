import React from 'react';
import Carousel from "react-multi-carousel";
import { slideImg } from './../../../constants/slide';
import './Slide.scss';

function Slide(props) {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1
        }
    }
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className="carousel__sale"
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {slideImg.map((img, index) => (
                <img key={index} src={img} alt={`link ${img} error`} />
            ))}
        </Carousel>
    );
}

export default Slide;