import React, { useEffect, useState } from 'react';
import '../styles/homehero.css';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Highlight from './Highlight';
import HeroRegister from './HeroRegister';
import DialogModal from './DialogModel';
import { homeHeroApi } from '../Data/DataFetcher';

const home = [
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function HomeHero() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true)
  const [homeData, sethomeData] = useState([]);
  useEffect(() => {
    homeHeroApi
        .then((data) => {
          sethomeData(data)
          setLoading(false)
        })
        .catch((error) => console.error('Error fetching advantages:', error));
    }, []);
  const openModal = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleCarouselHover = () => {
    setPaused(true);
  };

  const handleCarouselLeave = () => {
    setPaused(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [paused]);

  const numberOfSlides = home.length;

  return (
    <section className='hero container-fluid bg-blur'>
      <div className="hero-1">
      <div className="custom-carousel">
      <div className="row align-items-center  container-xxl m-xxl-auto">
      <div className="col-12 col-sm-12 col-md-12 col-lg-7">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          id="vertical-carousel"
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          {home.map((item, index) => (
            <Carousel.Item key={index}>
                  <div className="hero-text p-lg-5 p-md-3 p-3">
                    <h1 className="card-heading text-main-2 text-start">100% Placement Programs</h1>
                    <h1 className="heading text-black text-900 text-start">{item.heading}</h1>
                    <p className="text-black heading-subtitle my-4 text-start">{item.subheading}</p>
                    <div className="carousel-footer w-100 d-flex flex-wrap">
                      <button className='btn-main-outline-dark  m-2 hero-btn py-3'>Join For Free <i class="bi bi-chevron-double-right"></i></button>
                      <button className='btn-danger m-2 hero-btn py-3' onClick={openModal}>Book Your Free Master Classes <i class="bi bi-chevron-double-right"></i></button>
                    </div>
                   
                  </div>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                  <div className="hero-image p-3 p-xxl-5">
                   <div className="w-100 hero-image">
                    <div className="hero-box border p-2 py-3">
                    <i class="bi bi-code-slash fs-3 text-danger"></i> <br />
                     <span className="fs-5 text-900"> 36+ languages</span>
                    </div>
                    <div className="hero-box1 border p-2 py-3">
                    <i class="bi bi-check2-circle fs-3 text-main-danger"></i> <br />
                     <span className="fs-5 text-900"> 12 Years <br />Succsessfull  Journy</span>
                    </div>
                    <div className="hero-box2 border p-2 py-3">
                    <i class="bi bi-building-fill-check fs-3 text-green"></i> <br />
                     <span className="fs-5 text-900"> 300+ Hiring Partners</span>
                    </div>
                     <div className="hero-box3 border p-2 py-3">
                     <span className="fs-5 text-900">
                     <i class="bi bi-star-fill fs-3 text-warning"></i> <br />
                      4.5 Google rating</span>
                    </div>
                    <div className="hero-box4 border p-2 py-3">
                    <i class="bi bi-people-fill fs-3 text-primary"></i> <br />
                     <span className="fs-5 text-900">
                      5000+ Learned <br />Students</span>
                    </div>
                   <img src="https://img.freepik.com/free-vector/shared-workspace-concept-illustration_114360-5428.jpg?t=st=1699016958~exp=1699017558~hmac=31bfdfff4d60b1b0816842caaa808266a6d4712f166410a07fae833b16fd7bb7" alt="" className="w-100" />
                   </div>
                  </div>
                </div>
                 </div>
        <div className="custom-indicators">
          {Array.from({ length: home.length }).map((_, i) => (
            <div
              key={i}
              className={`indicator ${index === i ? 'active' : ''}`}
              onClick={() => handleSelect(i)}
            ></div>
          ))}
        </div>
      </div>
      <Highlight data={homeData} />
      <HeroRegister />
      </div>

      <DialogModal
        show={showModal}
        onHide={handleClose}
      />

    </section>
  );
}

export default HomeHero;
