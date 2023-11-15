import React, { useEffect, useState } from 'react'
import '../styles/webinar.css'
import Slider from 'react-slick';

const webinar = [
  {
    company:"POLARIS INC",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"TCS",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"SPERIDIAN technology",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"digisprint",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"netserve technology",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"smart foods safe",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  }
]
function Webinar() {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to showing 3 slides
  useEffect(() => {
    // Check the screen width and update the number of slides to show
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1); // On smaller screens, show only 1 slide

      }
      else if(window.innerWidth<=800) {
        setSlidesToShow(2); // On wider screens, show 3 slides
      } else if(window.innerWidth<=900) {
        setSlidesToShow(2); // On wider screens, show 3 slides
      }
     
      else{
          setSlidesToShow(3); // On wider screens, show 3 slides
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


  function ReadMore({ text, maxLength }) {
    const [isTruncated, setIsTruncated] = useState(true);
  
    const toggleTruncate = () => {
      setIsTruncated(!isTruncated);
    };
  
    return (
      <div>
        {isTruncated ? (
          <div>
            {text.slice(0, maxLength)}
            {text.length > maxLength && (
              <p onClick={toggleTruncate} className="read-more-button text-main-danger">
                Read More
              </p>
            )}
          </div>
        ) : (
          <div>
            {text}
            <p onClick={toggleTruncate} className="read-less-button text-main-danger">
              Read Less
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
  <div className='bg-blue-light py-5'>
          <h3 className="fs-1 text-900 text-center">Pre Career Guidence program <br /> From  <span className="text-main-danger" >Top MNC's</span></h3>
    <section className='p-2 container-fluid py-5' id="webinar">

      <div className="students-placed container">
      <Slider {...settings}>
      {webinar.map((item) => (
                <div className="col-12 col-md-6 col-lg-3 p-3 d-flex justify-content-center">
              <div className="webinar-card ">
                <div className="webinar-card-header p-2">
                        <img src={item.image} alt="" />
                </div>
                <div className="webinar-card-body p-2">
                  <p className="mt-2 p-light-small text-main-danger">Conducted by</p>
                    <h3 className="heading-small text-black">{item.company}</h3>
                    <p className='mt-2 fs-5 text-black'><ReadMore text={item.description} maxLength={50} /></p>
                </div>
              </div>
                </div>
            ))}
              </Slider>
    <div className="custom-indicators">
        </div>
      </div>
    </section>
  </div>
  )
}

export default Webinar
