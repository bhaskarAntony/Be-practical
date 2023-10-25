import React, { useState } from 'react';
import '../styles/faq.css'
import ApplyNow from '../Extra/ApplyNow';

const FaqSection = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the active FAQ item
    } else {
      setActiveIndex(index); // Expand the clicked FAQ item
    }
  };

  return (
    <div className="container-fluid bg-light-1 py-2">
      <h2 className='banner-heading'>Frequently Asked Questions</h2>
      <div className="accordion container" id="faqAccordion">
        {props.faq.map((faq, index) => (
          <div className="card border-0 course-faq" key={index}>
            <div className="course-faq-question" id={`heading${index}`}>
              <h4 className="mb-0">
                <div
                  className={`d-flex w-100 align-items-center ${activeIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleAccordionClick(index)}
                >
                  <i className={`bi ${activeIndex === index ? 'bi-dash fs-2' : 'bi-plus fs-2'}`}></i>
                  {faq.question}
                </div>
              </h4>
            </div>

            <div
              id={`collapse${index}`}
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <ApplyNow text={"Ask More Questions?"}/>
      </div>
    </div>
  );
};

export default FaqSection;
