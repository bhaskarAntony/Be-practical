import React from 'react'
import ApplyNow from '../Extra/ApplyNow'
import happy_student from '../images/happy-student.avif'

function LandDreamJob() {
  return (
   <div className='px-lg-5  p-3 py-5 container-fluid bg-gray2'>
    <div className="row  container-xxl m-auto">
      <div className="col-12 col-md-5 col-lg-4">
        <img src={happy_student} alt="happy-student" className="w-100 rounded-5 mb-3" />
      </div>
      <div className="col-12 col-md-5 col-lg-8">
      <div className=' h-100  d-flex flex-column justify-content-center'>
      <div>
      <h1 className="fs-1 text-white w-100 text-900">
      Land your dream job with a proven personalized plan!
      </h1>
      <ApplyNow text={"Register & Download Browcher"}/>
      </div>
    </div>
        </div>
    </div>
    
   </div>
  )
}

export default LandDreamJob
