import React, { useEffect } from 'react';
import '../styles/languages.css';
import AOS from 'aos';

function Languages({languages, course}) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='languages container-fluid p-3 p-md-5 m-0'>
        <h3 className="fs-1 text-dark text-900" data-aos="fade-up">Master <span className="text-main-danger">
         Thease Technologies</span></h3>
          <p className="fs-4 text-dark">
          We are proud to present the success of our {course} Course.
          </p>
      <div className="languages-items">
        <div className="row">
          {languages.map((item, index) => (
            <div className="col-6 col-md-2  m-0 p-1 mb-2" key={index}>
              <div className="language-card  h-100 d-flex flex-column justify-content-between" data-aos="zoom-in">
                <div className="language-card-header">
                  <img src={item.image} alt="technology" className='w-100' />
                </div>
                <div className="language-card-body">
                  <h4 className='text-dark text-900 fs-5'>{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
