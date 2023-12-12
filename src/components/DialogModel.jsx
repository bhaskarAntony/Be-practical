import React from 'react';
import { Modal, Button, Form, Col, Row, Image } from 'react-bootstrap';
import '../styles/dialogmodel.css'
import BookDemoCard from './BookDemoCard';
import BookDemo from './BookDemo';

function DialogModel({ show, onHide }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // You can access form data using state variables or refs
    // Example: const formData = { name, email, password };
    // Send formData to your API or perform registration logic
    // Close the modal after successful registration
    // handleClose();
  };

  return (
    <Modal show={show} onHide={onHide}
    aria-labelledby="contained-modal-title-vcenter"
    centered className='modal' size='md'>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
    <BookDemoCard/>
    {/* <BookDemo/> */}
    </Modal>
  );
}

export default DialogModel;
