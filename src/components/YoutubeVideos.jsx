import React, { useEffect, useState } from 'react'
import '../styles/youtubevideo.css'
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import ReadMore from '../Extra/ReadMore'
import { youtubeVideos } from '../Data/DataFetcher';
import ShimmerCard from '../shimmer effects/ShimmerCard';
import BookDemoBtn from '../Extra/BookDemoBtn';
import Insights from './Insights';

  const youtubevideos = [
    {
      youtubevedUrl: "https://youtu.be/m1Kp6IxFFVQ?si=-GCv-eUyUdsgiWAL",
      title: "Video 1",
      description: "Description for Video 1",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=3RfIzBsGHaQ",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=g3HbigGM1Lo",
      title: "Video 1",
      description: "Description for Video 1",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=o3TkssvkRlM",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=o3TkssvkRlM",
      title: "Video 1",
      description: "Description for Video 1",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=CNlSV74WTBk",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=CNlSV74WTBk",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=-5iEM0hzR-o",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=NiIo_jnB9Es",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=UHGDOe7hgoA",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=YgbHE8P09Qc",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=Zy1NqCysma4",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=UOLINVjfEZM",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      youtubevedUrl: "https://www.youtube.com/watch?v=LghwI-TbWhE",
      title: "Video 2",
      description: "Description for Video 2",
    },
    
    // Add more video objects as needed
  ];
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
  

  const carouselItems = youtubeVideosData.reduce((accumulator, current, index) => {
    if (index % itemsPerSlide === 0) {
      accumulator.push([]);
    }
    accumulator[accumulator.length - 1].push(current);
    return accumulator;
  }, []);
  return (
    <section className=' p-2 py-5 youtube-container' id="placed">
        <h3 className="banner-heading" data-aos="fade-up">What our students says <br /> about institute</h3>
        <p className=" text-center p-light-small " data-aos="fade-up">We don’t just give certification but outcomes!</p>
      <div className="students-placed">
        <Insights/>
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
          <div className="d-flex flex-wrap  p-3 container">
          <div className="row w-100">
          {loading ? (
              Array(9)
                .fill(null)
                .map((_, index) => (
                  <div className="col-6 col-md-3 col-lg-2 rounded-2 p-3" key={index}>
                    <div>
                    <ShimmerCard />
                    </div>
                  </div>
                ))
            ):(
            slideItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-4">
            <div className="youtube-card">
            <div className="youtube-header">
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
                             <a >
                               <div className="play-icon">
                              <i class="bi bi-play-fill fs-4"></i>
                              </div>
                             </a>
                              </div>
                        </div>
                        <div className="youtube-body">
                        <h4 className='light-green-text heading-small mt-2'>{item.title}</h4>
                            <p className='text-light'><ReadMore text={item.description} maxLength={50} /></p>
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
