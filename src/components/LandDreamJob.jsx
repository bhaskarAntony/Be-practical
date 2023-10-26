import React from 'react'
import ApplyNow from '../Extra/ApplyNow'

function LandDreamJob() {
  return (
   <div className='px-lg-5  p-3 py-5 container-fluid bg-gray2'>
    <div className="row">
      <div className="col-12 col-md-5 col-lg-4">
        <img src="https://img.freepik.com/free-vector/happy-student-concept-illustration_114360-8328.jpg?w=740&t=st=1698344725~exp=1698345325~hmac=0328824fcd9352b88ff034f9043ed3549cc69346f01236da9df0249d5cb5db97" alt="" className="w-100 rounded-5 mb-3" />
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
