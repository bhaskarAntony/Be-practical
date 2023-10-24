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
     <div className="container modules bg-dark-v5-green p-lg-5 p-md-3 p-2">
     {props.modules.map((item, index) => (
        <div
          className={`faq-item ${activeIndex === index ? 'active' : ''} bg-dark-green`}
          key={index}
        >
          <div className="faq-question d-flex align-items-center" onClick={() => toggleAccordion(index)}>
            <span className="count p-2 px-3 rounded-5  text-white">
        {index+1}
            </span>
            <span className="faq-question-text text-white"><span className="fw-bold  mx-2 text-light-green"> Module{index + 1}:</span> {item.title}</span>
            <div className="faq-icon">
              {activeIndex === index ? <i class="bi bi-caret-up-fill"></i>:<i class="bi bi-caret-down-fill"></i>}
            </div>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
                <h5 className='mt-4 text-light-green'>About</h5>
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
  );
};

export default Module;
