import React from 'react'
import '../styles/eliteProgram.css'
import ApplyNow from '../Extra/ApplyNow'
import dsa from '../images/browser.gif'
import refund from '../images/cashback.gif'
import skills from '../images/analytical-skill.gif'
import internship from '../images/hiring.gif'
import assistance from '../images/call-service.gif'
import addOnce from '../images/html (1).gif'
import { icon } from '@fortawesome/fontawesome-svg-core'



const eliteProgram = [
    {
        title:"Refund",
        content:"If not placed 50% of course fee will be given back",
        icon: refund ,
    },
    {
        title:"DSA & DSA (Exclusive Problems)",
        content:"Will be providing weekly twice",
        icon: dsa ,
    },
    {
        title:"Softskills",
        content:"Soft skill refer to the personal attributes and qualities that enable effective communication.",
        icon: skills ,

    },
    {
        title:"Internship",
        content:"Internship is a short-term work experience that provides practical training and exposure.",
        icon: internship ,

    },
    {
        title:"Placement Assistance",
        content:"Unlimited Interview's",
        icon: assistance ,

    },
    {
        title:"Add On's",
        content:"AWS Basics, DevOps tools, Jenkins, Git (Starting with Python)",
        icon: addOnce ,

    },
]
function EliteProgram() {
  return (
    <div className='mt-5 bg-blue-light'>
         <h1 className="fs-1 text-900 text-center">What is Elite Program?</h1>
         <section className='elite-progarm container py-5'>
       
       <div className="row">
         {
             eliteProgram.map((item, index)=>(
                 <div className="col-12 col-md-6 col-lg-4">
                     <div className="elite-program-card">
                        <img src={item.icon} alt="icon" />
                         <h1 className="card-heading text-black  mb-3 text-900">{item.title}</h1>
                         <p className="p-large1 text-secondary">{item.content}</p>
                     </div>
                  </div>
             ))
         }
       </div>
       <div className="p-4 d-flex justify-content-center py-2">
       <ApplyNow text="Book Your Free Trail, Now "/>
            </div>
     </section>
    
    </div>
  
  )
}

export default EliteProgram
