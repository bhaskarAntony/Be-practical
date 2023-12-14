import React from 'react'

function CourseCertificate({data}) {
  return (
    <section className='course-cartificate  py-5' id='c-certificate'>
        <h1 className="fs-1 text-900 text-center">Get Industry-Recognised <span className="text-main-danger">Certifications</span></h1>
        <p className="fs-3 text-center">Showcase your expertise with our prestigious certification.</p>
        <div className="certificate-img container-fluid p-lg-5">
            <div className="row align-items-center">
                <div className="col-md-12 col-12 col-lg-6">
                    <div className="c-img">
                    <img src="https://webinar.be-practical.com/static/media/certificate-webinar.b26f3764dc9013762c5c.png" alt="certificate" className="w-100 border-a p-2" />
                    </div>
                </div>
                <div className="col-md-12 col-12 col-lg-6">
                  <div className="">
                      <div className="course-certification mb-3">
                        <h3 className="fs-3 mb-2 text-main-danger text-900">Course Certification</h3>
                        <div className='fs-6 text-secondary' dangerouslySetInnerHTML={{ __html: data.certification}} />
                      </div>
                      <div className="course-for mb-3">
                        <h3 className="fs-3 mb-2 text-main-danger text-900">Who This Course For</h3>
                        <div className='fs-6 text-secondary' dangerouslySetInnerHTML={{ __html: data.courseFor}} />
                      </div>
                  </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default CourseCertificate
