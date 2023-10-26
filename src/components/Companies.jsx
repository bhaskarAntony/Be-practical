import React, { useEffect, useState } from 'react'
import '../styles/companies.css'
import AOS from 'aos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Highlight from './Highlight';
import { companies } from '../Data/DataFetcher';
import ShimmerComponent from '../components/ShimmerComponent'

function Companies() {
    const [slidesToShow, setSlidesToShow] = useState(6); // Default to showing 3 slides
    const [companiesData, setCompaniesData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      companies
        .then((data) => {
          setCompaniesData(data);
          setLoading(false); // Set loading to false when data is available
        })
        .catch((error) => {
          console.error('Error fetching companies:', error);
          setLoading(true); // Set loading to false on error
        });
    }, []);
    const data = companiesData? companiesData:Offlinecompanies

    useEffect(() => {
      // Check the screen width and update the number of slides to show
      const handleResize = () => {
        if (window.innerWidth <= 600) {
          setSlidesToShow(2); // On smaller screens, show only 1 slide
        } else if(window.innerWidth<=900) {
          setSlidesToShow(3); // On wider screens, show 3 slides
        }
        else{
            setSlidesToShow(6); // On wider screens, show 3 slides
        }
      };
    
      // Call the handleResize function initially and add a resize event listener
      handleResize();
      window.addEventListener('resize', handleResize);
    
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000, // Change delay as needed
            prevArrow: <button className="slick-prev">Previous</button>, // Add previous arrow
            nextArrow: <button className="slick-next">Next</button>, // Add next arrow
          };
    // useEffect(() => {
    //     AOS.init(); // Initialize AOS
    //   }, []);
  return (

    <section className="container-fluid main-company-container text-center">
      <h3 className="fs-1 text-900 text-center" data-aos="fade-up">Boost Your Career With Our Hiring Partners</h3>
      <p className="fs-4 text-secondary" data-aos="fade-up">
        Get closer to your dream company <br />
        Our graduates are working with leading tech brands
      </p>

      <div className="companies container-fluid text-center">
        <div className="companies-brands-container container-fluid p-2">
          <div className="row">
            {loading ? (
             <Slider {...settings}>
              {
                 Array(20)
                 .fill(null)
                 .map((_, index) => (
                   <div className="col-6 col-md-3 col-lg-2 p-2" key={index}>
                    <div className="overflow-hidden">
                    <ShimmerComponent />
                    </div>
                   </div>
                 ))
              }
             </Slider>
            ) : (
              <Slider {...settings}>
                {data.map((item, index) => (
                  <div className="col-6 col-md-3 col-lg-2 p-2" key={index}>
                    <div className="all-company-card" data-aos="flip-up">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
