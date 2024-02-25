import React from 'react'
import '../styles/eliteProgram.css'
import ApplyNow from '../Extra/ApplyNow'
import dsa from '../images/browser.gif'
import refund from '../images/cashback.gif'
import skills from '../images/analytical-skill.gif'
import internship from '../images/hiring.gif'
import assistance from '../images/call-service.gif'
import addOnce from '../images/html (1).gif'



const eliteProgram = [
    {
        title:"Refund",
        content:"If not placed 50% of course fee will be given back",
        icon: "person" ,
    },
    {
        title:"DSA & DSA (Exclusive Problems)",
        content:"Will be providing weekly twice",
        icon: "person" ,
    },
    {
        title:"Softskills",
        content:"Soft skill refer to the personal attributes and qualities that enable effective communication.",
        icon: "person" ,

    },
    {
        title:"Internship",
        content:"Internship is a short-term work experience that provides practical training and exposure.",
        icon: "person" ,

    },
    {
        title:"Placement Assistance",
        content:"Unlimited Interview's",
        icon: "person" ,

    },
    {
        title:"Add On's",
        content:"AWS Basics, DevOps tools, Jenkins, Git (Starting with Python)",
        icon: "person" ,

    },
]
function EliteProgram() {
  return (
    <div className='mt-5 bg-antique py-5'>
         <h1 className="fs-1 text-900 text-center">What is Elite Program?</h1>
         <section className='elite-progarm container py-5'>
       
       <div className="row">
         {
             eliteProgram.map((item, index)=>(
                 <div className="col-6 col-md-4 mb-3">
                     <div className="elite-program-card h-100">
                        {/* <img src={item.icon} alt="icon" /> */}
                        <i className={`fs-1 bi bi-${item.icon}`}></i>
                         <h1 className="fs-4  text-black  mb-3 fw-bold">{item.title}</h1>
                         <p className="fs-5">{item.content}</p>
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
