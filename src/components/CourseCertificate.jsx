import React from 'react'

function CourseCertificate() {
  return (
    <section className='course-cartificate bg-blur py-5' id='c-certificate'>
        <h1 className="fs-1 text-900 text-center">Get Industry-Recognised <span className="text-main-danger">Certifications</span></h1>
        <p className="fs-3 text-center my-5">Showcase your expertise with our prestigious certification.</p>
        <div className="certificate-img container p-lg-5">
            <div className="row  container-xxl m-auto">
                <div className="col-md-6 offset-md-3">
                    <div className="c-img">
                    <img src="https://webinar.be-practical.com/static/media/certificate-webinar.b26f3764dc9013762c5c.png" alt="" className="w-100 border-a p-2" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CourseCertificate
