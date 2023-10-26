// src/FAQ.js

import React, { useState } from 'react';
import '../styles/module.css'; // Import your CSS file
import { useEffect } from 'react';
import Aos from 'aos';


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
    <h3 className="banner-heading">Training Module</h3>
    <p className="p-light-small text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <div className="row">
      <div className="col-12 col-md-12 col-lg-6">
      <div className="container modules  p-lg-5 p-md-3 p-2">
     {props.modules.map((item, index) => (
        <div
          className={`faq-item ${activeIndex === index ? 'active' : ''} `}
          key={index}
        >
          <div className="faq-question d-flex align-items-center" onClick={() => toggleAccordion(index)}>
            <span className="count p-2 px-3 rounded-5  text-white">
        {index+1}
            </span>
            <span className="faq-question-text text-black"><span className="fw-bold  mx-2"> Module{index + 1}:</span> {item.title}</span>
            <div className="faq-icon">
              {activeIndex === index ? <i class="bi bi-caret-up-fill"></i>:<i class="bi bi-caret-down-fill"></i>}
            </div>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
                <h5 className='mt-4 text-black'>About</h5>
                {item.title}
                <h5 className='mt-4 text-light-green'>Topics Covered</h5>
                <p>{item.topics}</p>
            </div>
          )}
        </div>
      ))}
        <div className="text-center py-5">
        <button className="btn-main-outline-light mx-2 mb-2">Enquire Now <i class="bi bi-chevron-double-right"></i></button>
        <button className="btn-main mx-2 mb-2">Download Module PDF <i class="bi bi-chevron-double-right"></i></button>
    </div>
    </div>
      </div>
      <div className="col-12 col-md-12 col-lg-6">
        <div className="module-right">
          <img src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/service-1.jpg" alt="module-image" className="w-100" />
         <div className="module-desc p-3 rounded-2">
          <h1 className="fs-2">{props.name}</h1>
          <p className="p-large1">Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before convergence before real-time .</p>
         </div>
        </div>
      </div>
    </div>

   </div>
  );
};

export default Module;
