import React, { useEffect, useState } from 'react';
import '../styles/training.css';
import { trainingModule } from '../Data/DataFetcher';
import ShimmerCard from '../shimmer effects/ShimmerCard';
import ApplyNow from '../Extra/ApplyNow';


function Training() {

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
        <div className='container-fluid p-0 py-1'>
           <div className="text-center py-4">
           <p className="p-large1 text-main-danger">Training</p>
            <h3 className="fs-1 text-900">Mode Of Training</h3>
           </div>
            <div className="training-container overflow-hidden">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 p-0">
                        <div className="training-left">
                            <p className="p-large1 text-white">Master classes</p>
                            <h1 className="heading text-black f-pt text-900 text-start justify-content-start">Start your Learning <br /> Journey Today!</h1>
                            <p className="text-white p-large1">with a free Master Classes</p>
                           <button className='btn-danger bg-dark'>START YOUR CAREER</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 p-0">
                        <div className="training-right d-flex align-items-center p-lg-5 p-4">
                        <div className="row align-items-center">
                {loading ? (
              Array(4)
                .fill(null)
                .map((_, index) => (
                  <div className="col-6 col-md-6 col-lg-6 rounded-2 p-3" key={index}>
                    <div>
                    <ShimmerCard />
                    </div>
                  </div>
                ))
            ):(
                trainingModuleData.map((item, index) => (
                    <div className="col-6 col-md-6 col-lg-6" key={index}>
                        <div className="training-card mb-2 text-center">
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
        </div>
    );
}

export default Training;
