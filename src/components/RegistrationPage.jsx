import React from 'react'
import '../styles/registerPage.css'

function RegistrationPage() {
  return (
    <section className='register-page container py-3'>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 offset-3">
            <div className="r-card p-2 p-lg-5">
                <h1 className="card-heading">Register</h1>
                <form>
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control p-3" name='name' placeholder='Enter your name' />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control p-3" name='name' placeholder='Enter Email' />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="text" className="form-control p-3" name='phone' placeholder='Enter your Number' />
                    </div>
                    <div className="form-group mt-3">
                       <button className="btn-main w-100">Register</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationPage
