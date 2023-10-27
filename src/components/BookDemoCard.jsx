import React from 'react'

function BookDemoCard() {
  return (
    <div>
        <div className="r-card p-4 p-lg-5 bg-white rounded-3">
                <h1 className="card-heading">Book Your free Master Classes Now</h1>
                <form>
                    <div className="form-group mt-3">
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Enter your name"/>
                    <label for="floatingInput">Student Name</label>
                    </div>
                    </div>
                    <div className="form-group mt-3">
                    <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                    </div>
                    <div className="form-group mt-3">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="+91 000-0000-000"/>
                        <label for="floatingInput">Phone number</label>
                        </div>
                    </div>
                    <div className="form-group form-group-last mt-3">
                    <select className='form-control p-3'>
                        <option value="mern">MERN</option>
                        <option value="mern">Python Fullstack</option>
                        <option value="mern">Java Fullstack</option>
                        <option value="mern">Data Science</option>
                        <option value="mern">Cloud Computing</option>
                    </select>
                    </div>
                    <div className="form-group mt-3">
                       <button className="btn-danger w-100">Register</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default BookDemoCard
