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
const maincourses = [
  {
    id:"A1",
    courseName:"Fullstack",
    duration:6,
    courses:[
      {
        id:"AA1",
        coursename:"Mern",
        duration:6
      },
      {
        id:"AA2",
        coursename:"mean",
        duration:6
      },
      {
        id:"AA3",
        coursename:"python",
        duration:6
      },
      {
        id:"AA4",
        coursename:"java",
        duration:6
      }
    ]
  },
  {
    id:"B1",
    courseName:"Data Science",
    duration:4,
    courses:[
      {
        id:"BB1",
        coursename:"Course1",
        duration:6
      },
      {
        id:"BB2",
        coursename:"Course2",
        duration:6
      },
    ]
  }
] 
function Webinar() {
  const [slidesToShow, setSlidesToShow] = useState(4); // Default to showing 3 slides
  useEffect(() => {
    // Check the screen width and update the number of slides to show
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // On smaller screens, show only 1 slide

      } else if(window.innerWidth<=900) {
        setSlidesToShow(2); // On wider screens, show 3 slides
      }
     
      else{
          setSlidesToShow(4); // On wider screens, show 3 slides
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
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: true,
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
    <section className='p-2 container-fluid' id="webinar">

    {
      webinar.map((item, index)=>(
        <div className="webinar-card bg-white">
        <div className="webinar-card-header p-2">
                <img src={item.image} alt="events" className='w-100 rounded-2' />
        </div>
        <div className="webinar-card-body p-2">
            <h3 className="fs-4 text-black fw-bold">{item.company}</h3>
            <small className='mt-2 fs-5'><ReadMore text={item.description} maxLength={50} /></small>
        </div>
      </div>
      ))
    }
    </section>
    <div className="text-center mt-5">
      <a href="/" className="btn--sec-lg text-decoration-none">View Upcoming Events</a>
    </div>
  </div>
  )
}

export default Webinar
