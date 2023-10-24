import React from 'react'
import '../styles/elite.css'

function Elite() {
  return (
    <section>
              <h2 className="text-center text-black text-900">Join our <span className="main-text">Elite</span> Program, Get 50% Refund if not Placed</h2>
      <div className="container elite text-black">
        <div className="elite-card-container container elite rounded-5">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-card elite-c1" data-aos="zoom-out-up">
            <i class="bi bi-cash-stack"></i>
              <h4 className='elite-card-text-main'>Refund</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-card elite-c2" data-aos="zoom-out-up">
            <i class="bi bi-code-slash"></i>
              <h4 className='elite-card-text-main'>DSA</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-card  elite-c3" data-aos="zoom-out-up">
            <i class="bi bi-stars"></i>
              <h4 className='elite-card-text-main'>Softskills</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-card  elite-c4" data-aos="zoom-out-up">
            <i class="bi bi-person-check-fill"></i>
              <h4 className='elite-card-text-main'>Internship</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-card  elite-c5" data-aos="zoom-out-up">
            <i class="bi bi-building-fill-up"></i>
              <h4 className='elite-card-text-main'>Placemnet Assistant</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-card  elite-c6" data-aos="zoom-out-up">
            <i class="bi bi-building-fill-up"></i>
              <h4 className='elite-card-text-main'>Add-On's</h4>
            </div>
          </div>
        </div>
        </div>
        <div className="p-4 d-flex justify-content-center py-2">
            <button className="hero-btn-main-2">Join Now <i class="bi bi-chevron-double-right"></i></button>
            </div>
      </div>
    </section>
  )
}

export default Elite
