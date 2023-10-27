import React, { useEffect, useState } from 'react';
import '../styles/training.css';
import AOS from 'aos';
import { trainingModule } from '../Data/DataFetcher';
import ShimmerCard from '../shimmer effects/ShimmerCard';


function Training() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);

    const [loading, setLoading] = useState(true)
    const [trainingModuleData, setTrainingModuleData] = useState([]);
    useEffect(() => {
        trainingModule
          .then((data) => {
            setTrainingModuleData(data)
            setLoading(false)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);
    return (
        <div className='container-fluid p-3 py-1'>
            <p className="p-large1 text-main-danger text-center">Training</p>
            <h3 className="fs-1 text-900 text-center" data-aos="fade-up">Mode Of Training</h3>
            <div className="training-container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 p-0">
                        <div className="training-left">
                            <p className="p-large1 text-white">Membership</p>
                            <h1 className="heading text-white text-900 text-start justify-content-start">Start your Learning <br /> Journey Today!</h1>
                            <p className="text-white p-large1">with a free 7-day trial, then $14.99/month.</p>
                            <button className="btn-danger">Apply Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 p-0">
                        <div className="training-right d-flex align-items-center">
                        <div className="row">
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
                trainingModuleData.map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-6" key={index}>
                        <div className="training-card mb-3 text-center" data-aos="zoom-in-down">
                        <img src={item.image} alt="" />
                   
                   <h4 className='card-heading text-900'>{item.title}</h4>
                        </div>
                    </div>
                ))
            )
                }

                </div>
                        </div>
                        </div>
                </div>
            </div>
            
            <div className="p-4 d-flex justify-content-center py-2 mt-4">
            <button className="btn-danger">Book Your Free Trail, Now <i class="bi bi-chevron-double-right"></i></button>
            </div>
        </div>
    );
}

export default Training;
