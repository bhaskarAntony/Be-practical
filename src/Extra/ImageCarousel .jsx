// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/homehero.css';

const images = ['https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040430.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=sph', 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040430.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=sph', 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040430.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=sph', /* Add more images as needed */];

const settings1 = {
  dots: false,
  infinite: true,
  speed: 800, // Speed of the transition
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 0, // Interval between slides
  pauseOnHover: true,
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 1500, // Different speed for the second set of sliders
  slidesToShow: 2,
  slidesToScroll: 1,
  cssEase: 'linear',
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 0, // Interval between slides
  pauseOnHover: true,
};

const settings3 = {
  dots: false,
  infinite: true,
  speed: 1000, // Different speed for the third set of sliders
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 0, // Interval between slides
  pauseOnHover: true,
};

const ImageCarousel = () => {
  return (
    <div className="slick-container">
      <Slider {...settings1}>
        {images.map((image, index) => (
          <div key={index} className="scroll-image scroll-image1">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <Slider {...settings2}>
        {images.map((image, index) => (
          <div key={index} className="scroll-image scroll-image2">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <Slider {...settings3}>
        {images.map((image, index) => (
          <div key={index} className="scroll-image scroll-image3">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
