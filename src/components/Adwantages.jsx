import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/adwantage.css'
import { advantages } from '../Data/DataFetcher';
import ShimmerComponent from './ShimmerComponent';
import ShimmerCard from '../shimmer effects/ShimmerCard';
import ApplyNow from '../Extra/ApplyNow';
import BookDemoBtn from '../Extra/BookDemoBtn';
function Adwantages() {
  const [loading, setLoading] = useState(true)
    console.log(advantages)
    const [advantagesData, setAdvantagesData] = useState([]);
    useEffect(() => {
        advantages
          .then((data) => {
            setAdvantagesData(data)
            setLoading(false)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);

  return (
    <section id="adwantages" className='overflow-hidden'>
      <div className="adwantages-container container p-lg-5 text-center rounded-4">
        <h3 className="banner-heading" data-aos="fade-up">Advantages At Be Practical</h3>
        <p className="p-light-small text-center" data-aos="fade-up">
          Mentoring for our full-stack course starts long before a teacher gives an individual training session and continues long after the training session is over. Assessment, motivation, design, delivery, and evaluation are all connected stages or activities in this job guaranteed courses in Bangalore.
        </p>
        <div className="row d-flex justify-content-center overflow-hidden">
        {loading ? (
              Array(6)
                .fill(null)
                .map((_, index) => (
                  <div className="col-6 col-md-3 col-lg-2 rounded-2 p-3" key={index}>
                    <div>
                    <ShimmerCard />
                    </div>
                  </div>
                ))
            ):(
              advantagesData.map((item, index) => (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                  <div className="adwantage-card mb-3 p-3" data-aos="zoom-in-down">
                    <div className="adwantage-header">
                      <div className="icon">
                        <img src={item.image} alt={item.title} className='w-100' />
                      </div>
                    </div>
                    <div className="adwantage-card-body">
                      <h5 className='card-heading text-900'>{item.title}</h5>
                      <p className="p-dark-small text-black">{item.content}</p>
                    </div>
                    <div className="adwantage-card-footer"></div>
                  </div>
                </div>
              ))
            )}
        </div>
        <div className="py-5 d-flex flex-wrap justify-content-center">
          <ApplyNow text={"Join Now"}/>
         <BookDemoBtn text={"Book Your Master Classes"}/>
        </div>
      </div>
    </section>
  );
}

export default Adwantages;
