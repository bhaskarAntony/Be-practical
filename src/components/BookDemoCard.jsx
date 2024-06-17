import React from 'react'

function BookDemoCard() {
  return (
    <div>
        <div className="r-card p-2  bg-white rounded-1">
                <form>
                    <div className="form-group mt-3">
                    <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter your name"/>
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
                        <input type="number" class="form-control" id="floatingInput" placeholder="+91 000-0000-000"/>
                        <label for="floatingInput">Phone number</label>
                    </div>
                    </div>
                    <div className="form-group form-group-last mt-3">
                    <select className='form-control p-3'>
                        <option value="MERN Fullstack">MERN Fullstack</option>
                        <option value="Python Fullstack">Python Fullstack</option>
                        <option value="Java Fullstack">Java Fullstack</option>
                        <option value="Data Science">Data Science</option>
                        <option value='digital marketing'>Digital Marketing</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                    </select>
                    </div>
                    <div className="form-group mt-3">
                       <button className="btn p-3 text-white bg-dark w-100" type='button'>Book Master Classes</button>
                    </div>
                    <div className="text-center mt-2">
                        {/* <p className="fs-6 text-secondary">or</p> */}
                    </div>
                    <div className="form-group mt-3">
                    </div>
                </form>
            </div>
    </div>
  )
}

export default BookDemoCard
