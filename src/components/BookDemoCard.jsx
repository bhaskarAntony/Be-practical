import React from 'react'

function BookDemoCard() {
  return (
    <div>
        <div className="r-card p-2  bg-white rounded-1">
            {/* <div className="master-class-band p-1 text-white text-center bg-danger my-3 ">
                <small className="fs-6"> free Master class</small>
            </div> */}
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
                        <option value="mern">MERN</option>
                        <option value="mern">Python Fullstack</option>
                        <option value="mern">Java Fullstack</option>
                        <option value="mern">Data Science</option>
                        <option value="mern">Cloud Computing</option>
                    </select>
                    </div>
                    <div className="form-group mt-3">
                       <button className="btn p-3 text-white bg-dark w-100">Book Master Classes</button>
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
