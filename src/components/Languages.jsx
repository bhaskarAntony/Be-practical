import React, { useEffect } from 'react';
import '../styles/languages.css';
import AOS from 'aos';

function Languages({languages, course}) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='languages container-fluid bg-gray2 p-0 m-0'>
        <h3 className="fs-1 text-white text-900" data-aos="fade-up">Master <span className="text-main-danger">
         Thease Technologies</span></h3>
          <p className="fs-4 text-white">
          We are proud to present the success of our {course} Course.
          </p>
      <div className="languages-items">
        <div className="row">
          {languages.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-4 m-0 p-1" key={index}>
              <div className="language-card bg-gray3 border-b" data-aos="zoom-in">
                <div className="language-card-header">
                  <img src={item.image} alt="technology" />
                </div>
                <div className="language-card-body">
                  <h4 className='text-white text-900'>{item.name}</h4>
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
