import React from 'react'
import '../styles/certificate.css'
import Aos from 'aos';
import { useEffect } from 'react';

function Certificate() {
    useEffect(() => {
        Aos.init(); // Initialize AOS
      }, []);
  return (
   <div className="container-fluid">
     <div className='container certificate' data-aos="fade-left">
        <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
                <img src="https://svg.template.creately.com/BVJzef5PKaw" alt="" className="fluid-img w-100 mb-3" />
            </div>
            <div className="col-12 col-md-8 col-lg-8 certificate-text">
                <h4 className="card-heading">Empowering the Next Generation of Tech Talent.</h4>
                <p className="p-light-small">Approved training partner of National Skill Development Corporation (NSDC), India</p>
            </div>

        </div>
    </div>
   </div>
  )
}

export default Certificate
