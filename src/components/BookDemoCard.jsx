import React from 'react'

function BookDemoCard() {
  return (
    <div>
        <div className="r-card p-3 p-md-4  bg-white rounded-1">
                <form className='form'>
                    <div className="form-group mt-3">
                    <label for="floatingInput">Student Name</label>
                    <input type="text" class="form-control" id="floatingInput" />
                    </div>
                    <div className="form-group mt-3">
                    <label for="floatingInput">Email address</label>
                <input type="email" class="form-control" id="floatingInput" />
                
                    </div>
                    <div className="form-group mt-3">
                    <label for="floatingInput">Phone number</label>
                        <input type="number" class="form-control" id="floatingInput" />
                        
                    </div>
                    <div className="form-group form-group-last mt-3">
                        <label htmlFor="">Choose Course</label>
                    <select className='form-control p-3'>
                        <option value="" selected disabled></option>
                        <option value="MERN Fullstack">MERN Fullstack</option>
                        <option value="Python Fullstack">Python Fullstack</option>
                        <option value="Java Fullstack">Java Fullstack</option>
                        <option value="Data Science">Data Science</option>
                        <option value='digital marketing'>Digital Marketing</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                    </select>
                    </div>
                    <div className="form-group mt-3">
                       <button className=" p-3 text-white btn-danger w-100" type='button'>Book Free Master Classes</button>
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
