import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/feedback.css'
import AOS from 'aos';
import { testinomials } from '../Data/DataFetcher';
import ReadMore from '../Extra/ReadMore';

const items = [
  {
    id: 1,
    name: 'Adarsh',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
    role:"student"
  },
  {
    id: 1,
    name: 'Sachin',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
    role:"student"
  },
  {
    id: 1,
    name: 'Vishwas',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
    role:"student"
  },
  {
    id: 1,
    name: 'Antony',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
    role:"student"
  },
  {
    id: 1,
    name: 'babu',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
    role:"student"
  },
  {
    id: 1,
    name: 'Bhaskar',
    rating: 5,
    feedback:
      "Be-practical is one of the best platforms for all non-technical and technical background students. I did MBA in 2017, and I'm learning lots of things at the institute. I like the faculty, and I feel that I had the very best platform for my career. I learned many new things from my teachers who were very helpful in every way they could. Teachers' and students' interaction was good, and they are very friendly, which helped me clarify many of my doubts in the course. I appreciate the faculty for their quick response and great support, and very special thanks to HR Kavitha Mam; she is very kind, and I am always thankful for her support and guidance. Thank you.",
    profile: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
    role:"student"
  }
  // Add more items as needed
];

function Feedback() {

  const [loading, setLoading] = useState(true)
    const [testinomialData, setTestinomialData] = useState([]);
    useEffect(() => {
        testinomials
          .then((data) => {
            setTestinomialData(data)
            setLoading(false)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [carouselInterval, setCarouselInterval] = useState(3000);
    const [carouselPaused, setCarouselPaused] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        // Adjust the number of items per slide based on the screen width
        if (window.innerWidth < 800) {
          setItemsPerSlide(1);
          setCarouselInterval(2000);
        }
        else if(window.innerWidth < 1260) {
            setItemsPerSlide(2);
            setCarouselInterval(2000);
          } else {
          setItemsPerSlide(3);
          setCarouselInterval(3000);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleCarouselHover = () => {
      // Pause the Carousel when the user hovers over it
      setCarouselPaused(true);
    };
  
    const handleCarouselLeave = () => {
      // Resume the Carousel when the user stops hovering
      setCarouselPaused(false);
    };
  

  const carouselItems = testinomialData.reduce((accumulator, current, index) => {
    if (index % itemsPerSlide === 0) {
      accumulator.push([]);
    }
    accumulator[accumulator.length - 1].push(current);
    return accumulator;
  }, []);

  return (
  <div className='feedback-container'>
  <h1 className="banner-heading text-white">What Peoples Saying <br />About Institute and Courses?</h1>
    <Carousel
     interval={carouselInterval} 
     >
      {carouselItems.map((slideItems, index) => (
        <Carousel.Item key={index} 
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          <div className="d-flex flex-wrap feedback p-3">
          <div className="row">

            {slideItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-4">
              <div className="feedback-card" data-aos="fade-left"
                                            data-aos-anchor="#example-anchor"
                                            data-aos-offset="500"
                                            data-aos-duration="500">
              <div key={item.id} className="custom-carousel-item">
                <div className="feedback-header mb-2">
                    <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="" />
                        <div>
                        <h4 className='card-heading fw-bold'>{item.name}</h4>
                        <small className='fw-bold'>{item.role}</small>
                        </div>
                </div>
                <hr />
                <div className="rating-container d-flex">
                  <small>{item.rating} Rating</small>
                  {Array.from({ length: item.rating }, (_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                <p className='p-dark-small'>
                <ReadMore text={item.content} maxLength={100} />
                </p>
              </div>
              </div>
                </div>
            ))}
              </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="text-center p-3">
    <a href="/all-testinomials" className='card-heading  text-white p-2'>Read More<i class="bi bi-chevron-double-right"></i></a>
  </div>
  </div>
  );
}

export default Feedback;
