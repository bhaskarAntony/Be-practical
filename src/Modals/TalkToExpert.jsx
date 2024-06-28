import axios from 'axios';
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import SuccessDialog from './SuccessDialog';
import Loading from './Loading';
// import { event } from 'react-ga';

function TalkToExpert(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("")
    const [isSend, setIsSend] = useState(false)
    const handleClose = () => setShowModal(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        downloadLink:props.link,
        course: 'MERN', // Default course
      });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
    
        try {
          const response = await axios.post('https://api.be-practical.com/course/register', formData);
    
          if (response.status === 200) {
            // Handle successful form submission
            setIsLoading(false)
            setShowModal(true)
            setIsSend(true)
            // toast.success("registration successful, browcher has been sent to registered email.")
            props.hideModal()
            setMessage("registration successful, browcher has been sent to registered email.")
          } else {
            // Handle error
            setIsLoading(false)
            setShowModal(true)
            setIsSend(false)
            setMessage("Brochure registration failed")
            alert('Brochure registration failed');
            // toast.error("registration failed")
          }
        } catch (error) {
          alert(error)
          console.error('Error during brochure registration', error);
        }
      };
      if(isLoading){
        return <Loading/>
      }
  return (
    <div>
         <Modal show={props.showModal} onHide={props.hideModal}>
              <Modal.Header closeButton className='border-0'>
                {/* <Modal.Title className='fs-5 fw-bold'>Download free Browcher</Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
              <h1 className="fs-2">Need help? Our Counselors are <span className="text-danger">LIVE</span> right now!</h1>
            <h6 className="fs-5">Connect with our expert counselors for guidance on program curriculum, application process, and placement assistance.</h6>

                <Form>  
                <div className="r-card  bg-white rounded-3">
      <form className='form mt-3' onSubmit={()=>handleSubmit(event)}>
        <div className="form-group">
        <label htmlFor="nameInput">Student Name <span className="text-danger">*</span></label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              // placeholder="Enter your name"
              onChange={handleChange}
              required
            />
           
        </div>
        <div className="form-group mt-3">
          <label htmlFor="emailInput">Email address<span className="text-danger">*</span></label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              // placeholder="name@example.com"
              onChange={handleChange}
              required
            />
          
        </div>
        <div className="form-group mt-3">
          <label htmlFor="phoneInput">Phone number<span className="text-danger">*</span></label>
            <input
              type="number"
              className="form-control"
              id="phoneInput"
              name="phone"
              // placeholder="+91 000-0000-000"
              onChange={handleChange}
              required
            />
           
        </div>
        <div className="form-group form-group-last mt-3">
        <label htmlFor="phoneInput">What are you currently doing?<span className="text-danger">*</span></label>
          <select className="form-control p-3" name="course" onChange={handleChange}>
            <option value="" selected disabled></option>
          <option value="MERN Fullstack">Working IT Domine</option>
                        <option value="Python Fullstack">Working in Other Domine</option>
                        <option value="Java Fullstack">Post Graduate Student</option>
                        <option value="Data Science">UderGrad Student (Still Studying)</option>
                        <option value='digital marketing'>Fresher with Zero Experience</option>
                        <option value="Cloud Computing">Looking for Jobs</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn-danger w-100">
           Apply Now
          </button>
        </div>
      </form>
    </div>
                </Form>
              </Modal.Body>
            </Modal>
            <SuccessDialog show={showModal} onHide={() => setShowModal(false)} msg={message} register={isSend} />
    </div>
  )
}

export default TalkToExpert
