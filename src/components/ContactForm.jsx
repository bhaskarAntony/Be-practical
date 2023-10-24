import React from 'react'
import '../styles/contactform.css'
import RegisterBox from './RegisterBox'

function ContactForm() {
  return (
    <section className='container p-lg-5 p-md-2' id="contact">
     <div className="contact-form">
     <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <div className="contact-form-left">
                    <div className="row">
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                           <h3 className='p-light-small text-white'> Quality Training</h3>
                        </div>
                       
                        </div>
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                        <h3 className='p-light-small text-white'> Practical Experience</h3>
                        </div>
                       
                        </div>
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                        <h3 className='p-light-small text-white'>Adaptability</h3>
                        </div>
                      
                        </div>
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                        <h3 className='p-light-small text-white'> Team Collaboration</h3>
                        </div>
                        
                        </div>
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                        <h3 className='p-light-small text-white'>Problem Solving</h3>
                        </div>
                        
                        </div>
                        <div className="col-6">
                       <div className="benifits-card">
                       <i class="bi bi-check-circle-fill"></i>
                       <h3 className='p-light-small text-white'> Continuous Learning</h3>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <RegisterBox/>
            </div>
        </div>
     </div>
    </section>
  )
}

export default ContactForm
