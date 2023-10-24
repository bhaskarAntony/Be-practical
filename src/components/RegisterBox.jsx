import React, { useState } from 'react'
import '../styles/register_card.css'

function RegisterBox() {
    const [isopen, setIsopen] = useState(true)
 
  return (
    <div className='register-card p-2  py-4 rounded-4'>
      <p className="banner-heading text-white">Schedule a demo call with our placement team</p>
      <form>
      <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Enter Name</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Enter Email</label>
    </div>
    <div class="form-floating mb-3">
      <input type="tel" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Mobile Number</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Company Name</label>
    </div>
   <div className="carousel-footer">
   <button type="submit" className="btn-main w-100">Submit</button>
   </div>
      </form>
    </div>
  )
}

export default RegisterBox
