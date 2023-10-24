import React from 'react';
import '../styles/events.css';

const events = [
  {
    image: "https://be-practical.com/images/event/event1.png",
    title: "Connect With Industry Heads. MR. Satish SG",
    keyword: "Industry Talks",
    date: "30 SEP 2021",
    time: "10.00 AM - 11.30 AM",
    description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
    topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
  },
  {
    image: "https://be-practical.com/images/event/event1.png",
    title: "Connect With Industry Heads. MR. Satish SG",
    keyword: "Industry Talks",
    date: "30 SEP 2021",
    time: "10.00 AM - 11.30 AM",
    description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
    topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
  },
  // Add more events here if needed
];

function UpcomingEvents(props) {
  return (
    <div className='event'>
      <h3 className="banner-heading text-white">{props.heading}</h3>
      {props.events.map((event, index) => (
        <div className="event-card mb-5  p-lg-3 p-md-0 mb-3">
          <div className="event-blur">
          </div>
          <div className="row" key={index}>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="event-image p-2">
              <img src={event.image} alt={event.title} />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="event-text p-3">
              <h3 className="fw-bold text-white">{event.title}</h3>
              <h5 className='keyword'>{event.keyword}</h5>
              <h4 className="mt-3 text-success">What you will Learn</h4>
              <p className='text-light'>{event.description}</p>
              <p className="mt-lg-3 text-warning">{event.date}</p>
              <p className="mt-lg-3 text-warning">{event.time}</p>
              <div className="carousel-footer">
                {
                 event.bookticket? 
                 <>
                <button className="btn-main p-2 w-md-100">Book Free Ticket</button>
                 </> : null
                }
   <button className="btn-main-outline-light mx-2 p-2 w-md-100">Enquire</button>

               
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingEvents;
