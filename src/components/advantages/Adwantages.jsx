import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './adwantage.css'
import { advantages } from '../../Data/DataFetcher';
import ShimmerCard from '../../shimmer effects/ShimmerCard';
import ApplyNow from '../../Extra/ApplyNow';
import { Shimmer } from 'react-shimmer';
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
        <h3 className="fs-1 text-900 text-center">Advantages At <span className="text-main-danger"> Be Practical</span></h3>
        <p className="fs-6 text-secondary">
          Mentoring for our full-stack course starts long before a teacher gives an individual training session and continues long after the training session is over. Assessment, motivation, design, delivery, and evaluation are all connected stages or activities in this job guaranteed courses in Bangalore.
        </p>
        <div className="row d-flex justify-content-center overflow-hidden">
        {loading ? (
              Array(6)
                .fill(null)
                .map((_, index) => (
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 rounded-2 p-3" key={index}>
                   <div className="adwantage-card mb-3 p-3  border-0">
                    <div className="adwantage-header">
                      <div className=" rounded-5 overflow-hidden">
                       
                        <Shimmer width={80} height={80} className='rounded-5'/>
                      </div>
                    </div>
                    <div className="adwantage-card-body">
                      <Shimmer width="80%" height={25} className='mb-2'/>
                      <Shimmer width="70%" height={15} className='mb-2'/>
                      <Shimmer width="100%" height={15} className='mb-2'/>
                      <Shimmer width="80%" height={15} className='mb-2'/>
                      <Shimmer width="90%" height={15} className='mb-2'/>
                    </div>
                  </div>
                  </div>
                ))
            ):(
              advantagesData.map((item, index) => (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                  <div className="adwantage-card mb-3 p-3">
                    <div className="adwantage-header">
                      <div className="icon">
                        <img src={item.image} alt={item.title} className='w-100' />
                      </div>
                    </div>
                    <div className="adwantage-card-body">
                      <h5 className='fs-5 text-900'>{item.title}</h5>
                      <p className="fs-6 text-secondary">{item.content}</p>
                    </div>
                    <div className="adwantage-card-footer"></div>
                  </div>
                </div>
              ))
            )}
        </div>
        <div className="py-5 d-flex flex-wrap justify-content-center">
          <ApplyNow text={"Book Your Master Classes"}/>
        </div>
      </div>
    </section>
  );
}

export default Adwantages;
