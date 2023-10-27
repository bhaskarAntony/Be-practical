import React from 'react'
import ContactForm from './ContactForm'
import Benifits from './Benifits'
import '../styles/contact-page.css'
import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <div>
        <section className="contact-home bg-blur py-5">
        <h1 className='fs-1 text-black text-900'>Hire Trained graduates at <br /> <span className="text-main-danger"> Be practical</span></h1>
         <p className='fs-4 mt-4 text-black p-2'>Build your Data & Engineering Team with industry ready top <br /> skilled tech talent.</p>
         <Link to="#contact" className="btn-danger px-5 fs-3 text-decoration-none">Hire Now</Link>
        </section> 
      <ContactForm/>
        <Benifits/>
    </div>
  )
}

export default ContactPage
