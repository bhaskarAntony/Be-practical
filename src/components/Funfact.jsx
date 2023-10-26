import React from 'react'

function Funfact() {
  return (
    <div className='container py-5 bg-blur'>
        <p className="p-larg1 text-center text-main-danger text-900">Funfact</p>
        <h1 className="banner-heading mb-5">Strength in Numbers</h1>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <div className="text-center c-card card">
               <h1 className="card-big-text text-900"> 100+</h1>
               <p className="p-large1 text-secondary">Learners & counting</p>
            </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
        <div className="text-center card">
               <h1 className="card-big-text text-900">10+</h1>
               <p className="p-large1 text-secondary">Flexible Courses</p>
            </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
        <div className="text-center card">
               <h1 className="card-big-text text-900">36+</h1>
               <p className="p-large1 text-secondary">languages</p>
            </div>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
        <div className="text-center card">
               <h1 className="card-big-text text-900">89%</h1>
               <p className="p-large1 text-secondary">Successful students</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Funfact
