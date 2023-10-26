import React, { useEffect, useState } from 'react'
import '../styles/youtubevideo.css'
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import ReadMore from '../Extra/ReadMore'
import { youtubeVideos } from '../Data/DataFetcher';
import ShimmerCard from '../shimmer effects/ShimmerCard';
import BookDemoBtn from '../Extra/BookDemoBtn';
import Insights from './Insights';

function StudentsPlaced() {
  const [loading, setLoading] = useState(true)
    const [youtubeVideosData, setYoutubeVideosData] = useState([]);
    useEffect(() => {
        youtubeVideos
          .then((data) => {
            setYoutubeVideosData(data)
            setLoading(false)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);

  const extractVideoId = (link) => {
    const regex = /(?:\?v=|\/embed\/|\.be\/|\/v\/|\/e\/|watch\?v=|\/watch\?v=|\/watch\?feature=player_embedded&v=|%2Fvideos%2F|embed\/|youtu.be\/|v=|u\/\w\/|embed\?src=|video\/|embed\?video_id=)([^#\&\?]*).*/;
    const match = link.match(regex);
    return match && match[1];
  };

  const getThumbnailUrl = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;
    
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);
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
          setItemsPerSlide(4);
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
  

  const carouselItems = youtubeVideosData.reduce((accumulator, current, index) => {
    if (index % itemsPerSlide === 0) {
      accumulator.push([]);
    }
    accumulator[accumulator.length - 1].push(current);
    return accumulator;
  }, []);
  return (
    <section className=' p-2 py-5 youtube-container bg-gray2' id="placed">
        <h3 className="fs-1 text-900 text-center text-white" data-aos="fade-up">What our students says about institute</h3>
        <p className=" text-center p-large1 text-main-danger " data-aos="fade-up">We don’t just give certification but outcomes!</p>
      <div className="students-placed">
      <Carousel
       interval={carouselInterval}
       onMouseEnter={handleCarouselHover}
       onMouseLeave={handleCarouselLeave}
       >
      {carouselItems.map((slideItems, index) => (
        <Carousel.Item key={index} 
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          <div className="p-2 p-lg-5 container-fluid  rounded-5">
          <div className="row w-100">
          {loading ? (
              Array(9)
                .fill(null)
                .map((_, index) => (
                  <div className="col-6 col-md-3 col-lg-3 rounded-2 p-3" key={index}>
                    <div>
                    <ShimmerCard />
                    </div>
                  </div>
                ))
            ):(
            slideItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-3">
            <div className="youtube-card bg-gray3 border-b">
            <div className="youtube-header mb-3">
                          <a
                          
                            target="_blank"
                            rel="noopener noreferrer"  
                          >
                            <img
                              src={getThumbnailUrl(
                                extractVideoId(item.url)
                              )}
                              alt={`Thumbnail ${index}`}
                              className="w-100 h-100"/>
                          </a>
                          <div className="youtube-play-btn">
                         <div>
                         <a className="play-icon">
                               <div className='d-flex'>
                              <i class="bi bi-play-fill fs-1"></i>
                              </div>
                             </a>
                         </div>
                          </div>
                           
                              
                        </div>
                        <div className="youtube-body">
                        <a href="" className='text-main-danger fs-5 text-900 mt-2 text-decoration-none'>{item.title}</a>
                            <p className='fs-6 text-white mt-3'><ReadMore text={item.description} maxLength={15} /></p>
                          </div>
                          <div className="youtube-footer">

                          </div>
            </div>
                </div>
            )))}
              </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
      </div>
    </section>
  )
}

export default StudentsPlaced
