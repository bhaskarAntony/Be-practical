import React from 'react'
import ApplyNow from '../Extra/ApplyNow'
import happy_student from '../images/happy-student.avif'

function LandDreamJob() {
  return (
   <div className='px-lg-5  p-3 py-5 container-fluid  bg-texture text-center' style={{backgroundColor:"#0c0c0c"}}>
    
    <div>
      <h1 className="fs-1 text-main-danger w-100 text-900 mb-4 mt-5">
      <span className="text-white">Land your dream job with proven</span>   personalized plan!
      </h1>
    <div className="mb-5">
    <ApplyNow text={"Register & Download Browcher"}/>
    </div>
      </div>
    
   </div>
  )
}

export default LandDreamJob
