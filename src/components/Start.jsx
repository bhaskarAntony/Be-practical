import React from 'react'
import startImage from '../images/start-learning.jpg'
import ApplyNow from '../Extra/ApplyNow'

function Start() {
  return (
    <section className='start-learning container'>
    <div className="row  container-xxl m-xxl-auto align-items-center">
        <div className="col-12 col-md-6 col-lg-6">
            <div className="start-text">
                <h1 className="text-900 fs-1">You Are Still Here?</h1>
                <p className="fs-3 text-secondary">Ready to start? Book your free Master Classes Now..</p>
                <ApplyNow text={"Apply Now"}/>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
            <div className="start-image">
                <img src={startImage} alt="start-learning" className="w-100" />
            </div>
            </div>
    </div>
    </section>
  )
}

export default Start
