// src/FAQ.js

import React, { useState } from 'react';
import '../styles/module.css'; // Import your CSS file
import { useEffect } from 'react';
import Aos from 'aos';
import ApplyNow from '../Extra/ApplyNow';


const Module = (props) => {
  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <div className="container-fluid faq" id="faq">
    <h3 className="fs-1 text-center text-900">Program Curriculum</h3>
    <p className="p-light-small text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
     <div className="container">
      <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
      <div className="container modules  p-lg-5 p-md-3 p-2">
     {props.modules.map((item, index) => (
         <div
          className={`faq-item ${activeIndex === index ? 'active' : ''} `}
          key={index}
        >
          <div className="faq-question d-flex align-items-center" onClick={() => toggleAccordion(index)}>
            <span className="count p-2 rounded-1 text-900 fs-4 text-green">{index+1}
            </span>
            <span className="faq-question-text text-black"><span className="fw-bold  mx-2 text-main-danger"> Module{index + 1}:</span> <span className="text-black">{item.title}</span></span>
            <div className="faq-icon">
              {activeIndex === index ? <i class="bi bi-caret-up-fill"></i>:<i class="bi bi-caret-down-fill"></i>}
            </div>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
                <h5 className='mt-4 text-main-danger'>About</h5>
              <p className="p-large1">{item.title}</p>
                <h5 className='mt-4 text-main-danger'>Topics Covered</h5>
                <p className='p-large1'>{item.topics}</p>
            </div>
          )}
        </div>
      ))}
      </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <img src="" alt="" className="w-100" />
      </div>
     </div>
        <div className="text-center mt-2">
       <ApplyNow text={"Enquire Now"}/>
    </div>
    </div>
     

   </div>
  );
};

export default Module;
