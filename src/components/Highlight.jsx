import React from 'react'
import '../styles/highlight.css'

function Highlight({data}) {
  return (
    <div className="p-2">
      <div className='container highlight bg-dark-gray mb-4 py-4'>
      <div className="blur-highlight">

      </div>
      <div className="row">
        <div className="col-4">
            <div className="highlight-card">
                <h1 className='fs-1 text-900 text-white'>{data[0]?.rating?data[0]?.rating:"4.7"} <i class="bi bi-star-fill text-yellow"></i></h1>
                <p className='p-dark-small text-white'><small>Google Rating </small></p>
            </div>
        </div>
        <div className="col-4">
            <div className="highlight-card ">
            <h1 className='fs-1 text-900 text-white'>{data[0]?.partners? data[0]?.partners:"300"} +</h1>
                <p className='p-dark-small text-white'><small>Hiring Partners</small></p>
            </div>
        </div>
        <div className="col-4">
            <div className="highlight-card">
            <h1 className='fs-1 text-900 text-white'>{data[0]?.minSalary? data[0]?.minSalary:"7.8"} LPA</h1>
                <p className='p-dark-small text-white'><small>average dream job CTC</small></p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Highlight
