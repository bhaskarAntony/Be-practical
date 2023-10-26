import React from 'react'
import '../styles/eliteProgram.css'

const eliteProgram = [
    {
        title:"Refund",
        content:"If not placed 50% of course fee will be given back"
    },
    {
        title:"DSA & DSA (Exclusive Problems)",
        content:"Will be providing weekly twice"
    },
    {
        title:"Softskills",
        content:"Soft skill refer to the personal attributes and qualities that enable effective communication."
    },
    {
        title:"Internship",
        content:"Internship is a short-term work experience that provides practical training and exposure."
    },
    {
        title:"Placement Assistance",
        content:"Unlimited Interview's"
    },
    {
        title:"Add On's",
        content:"AWS Basics, DevOps tools, Jenkins, Git (Starting with Python)"
    },
]
function EliteProgram() {
  return (
    <div className='mt-5'>
         <h1 className="banner-heading">What is Elite Program?</h1>
         <section className='elite-progarm container py-5'>
       
       <div className="row">
         {
             eliteProgram.map((item, index)=>(
                 <div className="col-12 col-md-6 col-lg-4">
                     <div className="elite-program-card">
                         <h1 className="card-heading text-black  mb-3 text-900"><i class="bi bi-stars text-main-danger"></i> {item.title}</h1>
                         <p className="p-large1 text-secondary">{item.content}</p>
                     </div>
                  </div>
             ))
         }
       </div>
       <div className="p-4 d-flex justify-content-center py-2">
            <button className="btn-danger">Book Your Free Trail, Now <i class="bi bi-chevron-double-right"></i></button>
            </div>
     </section>
    
    </div>
  
  )
}

export default EliteProgram
