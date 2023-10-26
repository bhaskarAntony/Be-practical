import React from 'react'
import '../styles/highlight.css'

function Highlight() {
  return (
    <div className='container highlight bg-dark-gray mb-4'>
      <div className="blur-highlight">

      </div>
      <div className="row">
        <div className="col-4">
            <div className="highlight-card">
                <h1 className='heading-small text-900 text-white'>11 LPA</h1>
                <p className='p-dark-small text-white'><small>average dream job CTC</small></p>
            </div>
        </div>
        <div className="col-4">
            <div className="highlight-card ">
            <h1 className='heading-small text-900 text-white'>11 LPA</h1>
                <p className='p-dark-small text-white'><small>average dream job CTC</small></p>
            </div>
        </div>
        <div className="col-4">
            <div className="highlight-card">
            <h1 className='heading-small text-900 text-white'>11 LPA</h1>
                <p className='p-dark-small text-white'><small>average dream job CTC</small></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Highlight
