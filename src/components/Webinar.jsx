import React, { useState, useEffect } from 'react';
import '../styles/webinar.css';
import eventsdata from '../Data/events';
// import TinderCard from 'react-tinder-card';

function Webinar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(eventsdata.length - 1);

  const swiped = (direction, index) => {
    setCurrentIndex(index - 1);
  };

  const outOfFrame = (index) => {
    if (currentIndex >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-blue-light py-5 p-3 p-md-5">
      <h3 className="fs-1 text-900 text-center">Pre Career Guidance Program <br /> From <span className="text-main-danger">Top MNC's</span></h3>
      <section className="p-2 container-fluid" id="webinar">
      <div className="row">
            {eventsdata.map((event, eventIndex) => (
              <div className="col-12 col-md-3 mb-4" key={eventIndex}>
                <div className="bootcamp-card h-100">
                  <img src={event.image} alt="" className="w-100" />
                  <div className="event-info">
                    <h3 className="fs-4 fw-bold">{event.title}</h3>
                    <small className="small">{event.startdate} - {event.enddate}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>
      <div className="text-center mt-5">
        <a href="/" className="btn--sec-lg text-decoration-none">View Upcoming Events</a>
      </div>
    </div>
  );
}

export default Webinar;
