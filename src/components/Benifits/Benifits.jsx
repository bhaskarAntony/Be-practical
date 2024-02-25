import React from 'react'
import './style.css'

function Benifits(props) {
  return (
    <section className='py-5 container'>
        <h1 className="text-center fs-1 mb-2 text-900" data-aos="fade-up">Benifits Of <span className="text-main-danger">Technology</span></h1>
        <div className='fs-6 mb-4 text-center' dangerouslySetInnerHTML={{ __html: props.data.courseDescription}} />
        <div className="row">
            <div className="col-12 col-sm-12 col-md-4 p-0 m-0 bg-blue-light">
                <div className="designation w-100 p-0">
                <div className="benifits-heading w-100 bg-danger-2 text-center p-2">
                        <span className="fs-4 text-white">Designation</span>
                    </div>
              <div className="benifits-card-body p-2 h-100">
              <div className='fs-5' dangerouslySetInnerHTML={{ __html: props.data.Designation}} />
              </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 m-0 m-0 bg-blue-light">
                <div className="salary w-100 p-0">
                    <div className="benifits-heading w-100 bg-danger-2 p-2 text-center">
                        <span className="fs-4 text-white">Annual Salary</span>
                    </div>
               <div className="benifits-card-body p-2">
               <div className='fs-5' dangerouslySetInnerHTML={{ __html: props.data.AnnualSalary}} />
               </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 p-0 m-0 bg-blue-light">
                <div className="enifits-companies w-100">
                <div className="benifits-heading w-100 bg-danger-2 p-2 text-center">
                        <span className="fs-4 text-white">Companies</span>
                    </div>
                 <div className="benifits-card-body p-2">
                 <img src="https://be-practical.com/images/icon/company2.png" alt="companies" className="w-100" />
                 </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benifits
