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
    <div className="chat-with-us p-3">
    <div className="row">
        <div className="col-12 col-md-8 col-lg-8">
            <h1 className="fs-2">Have any further <br />questions?</h1>
            <button className='btn-main-outline-dark mt-5 mb-3'>Chat With Us <i class="bi bi-chevron-double-right"></i></button>
        </div>

        <div className="col-12 col-md-4 col-lg-4">
        <img src={callimage} alt="" className='img-fluid w-100' />
        </div>
      </div>
    </div>
    </section>
  )
}

export default ChatWithus
