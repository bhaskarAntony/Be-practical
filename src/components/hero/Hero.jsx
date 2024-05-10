import React, { useEffect, useState } from 'react'
import  './style.css'
import Aos from 'aos';
import HeroRegister from '../HeroRegister';
import heroVideo from '../../videos/heroVideos.mp4'
import heroVideo2 from '../../images/video1.mp4'
import heroVideo3 from '../../images/video3.mp4'
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
                  <div className="container-fluid main-hero rounded-md-5">
           <div className="row">
            <div className="col-12 col-md-6">
              <div className="hero-left text-dark p-md-3 py-5">
              <h1 className="display-3 fw-bold text-black" data-aos="fade-up">High Paid Salaries & Continuous Career <span className="">Growth</span>
          </h1>
          <p className="fs-5" data-aos="fade-up">With all your courses, workshops, and memberships in one place, you can sell faster, easier, and save up to 80% of your expenses.</p>
          {/* <ul className='hero-points d-flex flex-wrap gap-3 p-0 flex-column'>
            <li className='fs-6'>Industry expert trainers</li>
            <li className='fs-6'>Job oriented syllabus</li>
            <li className='fs-6'>Flexible timings</li>
            <li className='fs-6'>Corporate style teaching</li>
            <li className='fs-6'>Real-time Project</li>
            <li className='fs-6'>ndustry recognized certificate</li>
          </ul> */}
      
         <div className="weareon d-flex gap-3 mt-3 justsify-content-center align-items-center">
            <div className="google w-img" data-aos="zoom-in-up">
             <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/Deccan_Herald_logo.svg" alt="we are on deccan-herald" />
            </div>
            <div className="google w-img" data-aos="zoom-in-up">
              <img src="https://bepractical.s3.us-east-2.amazonaws.com/times-logo.png" alt="we are on hindustan times" />
            </div>
            <div className="google w-img" data-aos="zoom-in-up">
             <img src="https://bepractical.s3.us-east-2.amazonaws.com/mid-day-logo.png" alt="we are on mid-day" />
            </div>
          </div>
          <div className="d-flex gap-3 mt-4 flex-wrap">
       <button className='btn-danger hero-btn' onClick={openModal}>Download Broucher<i class="bi bi-chevron-double-right"></i></button>
          <button className='btn btn-outline-dark p-3 hero-btn' onClick={openModal}>Free Master Classes<i class="bi bi-chevron-double-right"></i></button>
       </div>
          {/* <div className="social-container mt-5 d-flex gap-2">
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
          </div> */}
        
              </div>
            </div>
            <div className="col-12 col-md-6 p-0">
              <div className="hero-right">
                {/* <img src={brand} alt="" className='w-100'/>
                <div className="image-text" data-aos="fade-up">
                  <h1 className="fs-5 fw-bold">HARISH</h1>
                  <p className="small">As a creator myself, I have faced this problem firsthand. Using 5+ platforms for a digital business is complicated. I have personally been using this and making 6 figure monthly revenue for the past year.
                  </p>
                </div> */}

                <div className="hero-grid p-2">
                  <div className="row">
                    <div className="col-6">
                    <div className="grid-left">
                    {/* <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241221.jpg?t=st=1710158771~exp=1710162371~hmac=492da64f760f0c10f296c90526d733fd0c1b90686e24202cffabe4e962e85f21&w=740" alt=""  className='w-100 rounded-3 hero-large-one'/> */}
                    <video src={heroVideo2}  autoPlay muted loop className='w-100 hero-large-one rounded-4'></video>  
                    <div className="hero-info d-flex align-items-center  rounded-4 p-2 py-4 my-3 gap-2">
                      <img src="https://cdn-icons-png.freepik.com/256/281/281764.png?ga=GA1.1.874872603.1694171926&" alt="" width={40} />
                      <div>
                        <h4 className="fs-4">Google</h4>
                        <div className='d-flex gap-1 text-warning'>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                        </div>
                      </div>
                    </div>
                    {/* <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241219.jpg?t=st=1710159510~exp=1710163110~hmac=1737a9d72ca76335d21c1d008915f79690d72ab5b59ed1df4d263d59cbb9c219&w=740" alt=""  className='w-100 rounded-3'/> */}
                    <video src={heroVideo3}  autoPlay muted loop className='w-100 hero-large-one rounded-4'></video>
                  </div>
                    </div>
                    <div className="col-6">
                <div className="grid-right">
                <div className="hero-info d-flex align-items-center rounded-3 p-2 py-4 my-3 gap-2">
                      <img src="https://cdn-icons-png.freepik.com/256/281/281764.png?ga=GA1.1.874872603.1694171926&" alt="" width={40} />
                      <div>
                        <h4 className="fs-4">Google</h4>
                        <div className='d-flex gap-1 text-warning'>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                        </div>
                      </div>
                    </div>
                    <video src={heroVideo}  autoPlay muted loop className='w-100 hero-large-one rounded-4'></video>
                    <div className="row my-3">
                      <div className="col-6 d-none d-md-block">
                      <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241221.jpg?t=st=1710158771~exp=1710162371~hmac=492da64f760f0c10f296c90526d733fd0c1b90686e24202cffabe4e962e85f21&w=740" alt=""  className='w-100 rounded-3'/>
                      </div>
                      <div className="col-6 d-none d-md-block">
                      <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241221.jpg?t=st=1710158771~exp=1710162371~hmac=492da64f760f0c10f296c90526d733fd0c1b90686e24202cffabe4e962e85f21&w=740" alt=""  className='w-100 rounded-3'/>
                      </div>
                      <div className="col-12">
                      <div className="hero-info d-flex align-items-center rounded-4 p-2 py-4 my-3 gap-2">
                      <img src="https://cdn-icons-png.freepik.com/256/4101/4101792.png?ga=GA1.1.874872603.1694171926&" alt="" width={40} />
                      <div>
                        <h4 className="fs-4">Scroll</h4>
                        <span className="fs-6">Find More courses</span>
                       
                      </div>
                    </div>
                      </div>
                    </div>
                </div>
                </div>
                  </div>
               
             
                </div>

              </div>
            </div>
           </div>
                  </div>
                  </div>
                  {/* <HeroRegister/> */}
                  <DownloadModal showModal={showModal} hideModal={handleClose} link={"d"}/>
         

  
    </div>
  )
}

export default Hero
