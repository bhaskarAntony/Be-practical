import React from 'react'
import '../styles/highlight.css'

function Highlight({data}) {
  return (
    <div className="p-2">
      <div className='container highlight bg-dark-gray mb-4'>
      <div className="blur-highlight">

      </div>
      <div className="row align-items-center">
        <div className="col-6 col-md-4 col-lg-3 mb-3">
            <div className="highlight-card-hero">
                <h1 className='fs-1 text-900 text-white'>{data[0]?.rating?data[0]?.rating:"4.7"} <i class="bi bi-star-fill text-yellow"></i></h1>
                <span className='p-dark-small text-white'><small>Google Rating </small></span>
            </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3 mb-3">
            <div className="highlight-card-hero ">
            <h1 className='fs-1 text-900 text-white'>{data[0]?.partners? data[0]?.partners:"300"} +</h1>
                <span className='p-dark-small text-white'><small>Hiring Partners</small></span>
            </div>
        </div>
        <div className=" col-6 col-md-4 col-lg-3 mb-3">
            <div className="highlight-card-hero">
            <h1 className='fs-1 text-900 text-white'>{data[0]?.minSalary? data[0]?.minSalary:"7.8"} LPA</h1>
                <span className='p-dark-small text-white'><small>average dream job CTC</small></span>
            </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3 mb-3">
            <div className="highlight-card-hero">
            <h1 className='fs-1 text-900 text-white'>2011</h1>
                <span className='p-dark-small text-white'><small>Since</small></span>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Highlight
