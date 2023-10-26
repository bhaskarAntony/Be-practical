import React, { useEffect } from 'react';
import '../styles/languages.css';
import AOS from 'aos';

function Languages({languages, course}) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='languages p-2 container-fluid bg-gray2'>
        <h3 className="fs-1 text-white" data-aos="fade-up">What <span className="text-main-danger">
          Programming Languages</span> <br /> You will Learn?</h3>
          <p className="fs-4 text-white">
          We are proud to present the success of our {course} Design Program
          </p>
      <div className="languages-items">
        <div className="row">
          {languages.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-4" key={index}>
              <div className="language-card bg-gray3 border-b" data-aos="zoom-in">
                <div className="language-card-header">
                  <img src={item.image} alt="" />
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
