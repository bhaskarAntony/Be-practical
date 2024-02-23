import React, { useEffect, useState } from 'react';
import '../styles/training.css';
import { trainingModule } from '../Data/DataFetcher';
import ShimmerCard from '../shimmer effects/ShimmerCard';
import ApplyNow from '../Extra/ApplyNow';

const traningData = [
    {
        title:"Classroom training",
        image:"https://cdn-icons-png.flaticon.com/128/1436/1436664.png",
    },
    {
        title:"Online Training",
        image:"https://cdn-icons-png.flaticon.com/128/9167/9167026.png",
    },
    {
        title:"Corporate Training",
        image:"https://cdn-icons-png.flaticon.com/128/3048/3048654.png",
    },
    {
        title:"Campus Training",
        image:"https://cdn-icons-png.flaticon.com/128/7533/7533677.png",
    }
]

function Training() {
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
                            <h1 className="display-3 fw-bold text-black">Start your Learning <br /> <span className="text-white">Journey Today!</span></h1>
                            <p className="text-white p-large1">with a free Master Classes</p>
                          <a href="/book-demo">
                          <button className='btn-prm'>START YOUR CAREER</button>
                          </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 p-0">
                        <div className="training-right d-flex align-items-center p-lg-5 p-4">
                        <div className="row align-items-center">
                {
                     traningData.map((item, index) => (
                        <div className="col-6 col-md-6 col-lg-6" key={index}>
                            <div className="training-card  mb-2 text-center">
                            <img src={item.image} alt="traning" />
                       
                                 <h4 className='card-heading text-900'>{item.title}</h4>
                            </div>
                        </div>
                    ))
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
