import axios from 'axios';
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import Loading from '../../Modals/Loading';
import SuccessDialog from '../../Modals/SuccessDialog';

function DownloadModal(props) {
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
          const response = await axios.post('https://comfortable-boot-fly.cyclic.app/course/register', formData);
    
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
              <Modal.Header closeButton>
                <Modal.Title className='fs-5 fw-bold'>Download free Browcher</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                <div className="r-card  bg-white rounded-3">
      <form>
        <div className="form-group">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
            <label htmlFor="nameInput">Student Name</label>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              required
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="phoneInput"
              name="phone"
              placeholder="+91 000-0000-000"
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneInput">Phone number</label>
          </div>
        </div>
        <div className="form-group form-group-last mt-3">
          <select className="form-control p-3" name="course" onChange={handleChange}>
            <option value="MERN">MERN</option>
            <option value="Python Fullstack">Python Fullstack</option>
            <option value="Java Fullstack">Java Fullstack</option>
            <option value="Data Science">Data Science</option>
            <option value="Cloud Computing">Cloud Computing</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <button type="button" className="btn-danger bg-dark w-100" onClick={handleSubmit}>
            Register for Brochure
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

export default DownloadModal
