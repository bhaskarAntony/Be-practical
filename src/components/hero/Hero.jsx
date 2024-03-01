import React, { useEffect, useState } from 'react'
import  './style.css'
import Aos from 'aos';
import HeroRegister from '../HeroRegister';
import brand from '../../images/brand.png'
import DownloadModal from '../Brocher/DownloadModal';

function Hero() {
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // You can use Axios to make a POST request to your backend server
    // Example:
    // axios.post('your-backend-url', formData)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  const openModal = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className='main-scroller-hero'>
      {/* <div className="marquee-container">
        <marquee behavior="" direction="left" scrollamount="10">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="right" scrollamount="15">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="left" scrollamount="20">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="right" scrollamount="25">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="left" scrollamount="15">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="right" scrollamount="7">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
      </div> */}
        
      <div className="main-hero-parent" >  
                  <div className="container-fluid main-hero rounded-md-5 bg-texture">
           <div className="row">
            <div className="col-12 col-md-6">
              <div className="hero-left text-white p-0 p-md-5 py-5">
              <h1 className="display-2 fw-bold text-black" data-aos="fade-up">High Paid Salaries & Continuous Career <span className="text-white">Growth</span>
          </h1>
          <p className="fs-4" data-aos="fade-up">With all your courses, workshops, and memberships in one place, you can sell faster, easier, and save up to 80% of your expenses.</p>
          <button className='btn-prm' onClick={openModal}>Download Broucher<i class="bi bi-chevron-double-right"></i></button>
          <div className="social-container mt-5 d-flex gap-2">
            <div className="google px-3 w-100 p-2" data-aos="zoom-in-right">
           <span className="fw-bold">Google</span>
              <span className='small mx-1'>rating 4.6</span>
              <div className='d-flex gap-1 text-warning'>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
              </div>
            </div>
            <div className="google px-3 w-100 p-2" data-aos="zoom-in-left">
              <span className="fw-bold">Justdial</span>
              <span className='small mx-1 text-secondary'>rating 4.6</span>
              <div className='d-flex gap-1 text-warning'>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
              </div>
            </div>
          </div>
          <div className="weareon d-flex gap-3 mt-3 justsify-content-center">
            <div className="google" data-aos="zoom-in-up">
             <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/Deccan_Herald_logo.svg" alt="we are on deccan-herald" />
            </div>
            <div className="google" data-aos="zoom-in-up">
              <img src="https://bepractical.s3.us-east-2.amazonaws.com/times-logo.png" alt="we are on hindustan times" />
            </div>
            <div className="google" data-aos="zoom-in-up">
             <img src="https://bepractical.s3.us-east-2.amazonaws.com/mid-day-logo.png" alt="we are on mid-day" />
            </div>
          </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0">
              <div className="hero-right">
                <img src={brand} alt="" className='w-100'/>
                <div className="image-text" data-aos="fade-up">
                  <h1 className="fs-5 fw-bold">HARISH</h1>
                  <p className="small">As a creator myself, I have faced this problem firsthand. Using 5+ platforms for a digital business is complicated. I have personally been using this and making 6 figure monthly revenue for the past year.
                  </p>
                </div>
              </div>
            </div>
           </div>
                  </div>
                  </div>
                  <HeroRegister/>
                  <DownloadModal showModal={showModal} hideModal={handleClose} link={"d"}/>
         

  
    </div>
  )
}

export default Hero
