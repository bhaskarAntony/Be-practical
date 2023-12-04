import React, { useEffect, useState } from 'react';
import '../styles/homehero.css';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Highlight from './Highlight';
import HeroRegister from './HeroRegister';
import DialogModal from './DialogModel';
import { homeHeroApi } from '../Data/DataFetcher';
import heroImage from '../images/hero-image.svg'
import home_video from '../images/home-video.mp4'
import Slider from 'react-slick';

const home = [
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "Be practical's Job Oriented Training",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "Be practical's Job Oriented Training",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const imagesData = [
  "https://api.bepracticals.com/uploads/cp4_69ef0b7978.jpg",
  "https://api.bepracticals.com/uploads/cp14_b7bc56b4ff.jpeg",
  "https://api.bepracticals.com/uploads/cp10_c86328ff12.png",
  'https://api.bepracticals.com/uploads/cp13_f0b5d4f67a.jpeg'
]

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


  const settings = {
    dots: false,
    infinite: true,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const Imagesettings = {
    dots: false,
    infinite: true,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase:'linear',
    fade:true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className='hero container-fluid'>
      <div className="hero-1">
      <div className="custom-carousel container-fluid">
      <div className="row align-items-center">
      <div className="col-12 col-sm-12 col-md-8">
     <Slider {...settings}>
     {home.map((item, index) => (
            <Carousel.Item key={index}>
                  <div className="hero-text p-lg-2 p-md-2 p-1 py-3 ">
                    <h1 className="display-3 text-bold text-start">{item.heading}</h1>
                    <p className="fs-4 my-4 text-start">{item.subheading}</p>
                    <div className="carousel-footer w-100 d-flex flex-wrap gap-2">
                      <button className='btn-main-outline-dark border-0  hero-btn bg-gray2 text-white' onClick={openModal}>Apply Now <i class="bi bi-chevron-double-right"></i></button>
                      <button className='btn-danger  hero-btn'>Download Browcher<i class="bi bi-chevron-double-right"></i></button>
                    </div>
                  </div>
            </Carousel.Item>
          ))}
     </Slider>
        </div>
        <div className="col-12 col-sm-12 col-md-4 ">
   {/* <video src={home_video} className='w-100 border-0 bg-transparent' autoPlay muted loop></video> */}
   <Slider {...Imagesettings}>
   {
    imagesData.map((item, index)=>(
   <div className="hero-image d-flex align-items-center justify-content-center h-100">

    <img src={item} alt="" key={index}  className='w-100'/>
   </div>

    ))

   }

   </Slider>
                </div>
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
