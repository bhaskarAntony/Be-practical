import React from 'react'
import '../styles/chatwithus.css'
import callimage from '../images/call-bg2.svg'
import Aos from 'aos';
import { useEffect } from 'react';

function ChatWithus() {
  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);
  
  return (
    <section className='container my-5 p-2 p-md-3 p-lg-5 ' data-aos="fade-right">
    <div className="chat-with-us px-0">
    <div className="row">
        <div className="col-12 col-md-8 col-lg-8 d-flex flex-column justify-content-between">
          <div className="bar">
            <span className="fs-5">STILL</span>
          </div>
          <div className="bar">
          <span className="fs-5">ARE YOU THINKING</span>
          </div>
          <div className="bar">
          <span className="fs-5">ABOUT YOUR</span>
          </div>
          <div className="bar">
          <span className="fs-5">CAREER?</span>
          </div>
         
        </div>

        <div className="col-12 col-md-4 col-lg-4">
        <img src={callimage} alt="" className='img-fluid w-100'/>
        </div>
      </div>
    </div>
    <div className="text-center chat-btn">
          <button className='btn-danger mt-5 mb-3'>Chat With Us <i class="bi bi-chevron-double-right"></i></button>
          </div>
    </section>
  )
}

export default ChatWithus
