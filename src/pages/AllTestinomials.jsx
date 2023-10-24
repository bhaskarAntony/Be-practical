import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/feedback.css'
import AOS from 'aos';
import { testinomials } from '../Data/DataFetcher';
import ReadMore from '../Extra/ReadMore';
import FeedbackShimmer from '../shimmer effects/FeedbackShimmer';

function AllTestimomials() {

  const [loading, setLoading] = useState(true)
    const [testinomialData, setTestinomialData] = useState([]);
    useEffect(() => {
        testinomials
          .then((data) => {
            setTestinomialData(data)
            setLoading(false)
            console.log("test", testinomialData)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);

  return (
  <>
  <h1 className="banner-heading">What Peoples Saying <br />About Institute and Courses?</h1>
  <div className="text-end">
  </div>
          <div className="d-flex flex-wrap feedback p-3 container overflow-hidden">
          <div className="row">
          {loading ? (
              Array(15)
                .fill(null)
                .map((_, index) => (
                  <div className="col-6 col-md-3 col-lg-2 rounded-2 p-3" key={index}>
                    <div>
                    <FeedbackShimmer />
                    </div>
                  </div>
                ))
            ):(
            testinomialData.map((item) => (
                <div className="col-12 col-md-6 col-lg-4">
              <div className="feedback-card" data-aos="fade-left"
                                            data-aos-anchor="#example-anchor"
                                            data-aos-offset="500"
                                            data-aos-duration="500">
              <div key={item.id} className="custom-carousel-item">
                <div className="feedback-header mb-2">
                    <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="" />
                        <div>
                        <h4 className='card-heading fw-bold'>{item.name}</h4>
                        <small className='fw-bold'>{item.role}</small>
                        </div>
                </div>
                <hr />
                <div className="rating-container d-flex">
                  {Array.from({ length: item.rating }, (_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                <p className='p-dark-small'>
                <ReadMore text={item.content} maxLength={100} />
                </p>
              </div>
              </div>
                </div>
            )))
                  }
              </div>
                  
          </div>
  </>
  );
}

export default AllTestimomials;
