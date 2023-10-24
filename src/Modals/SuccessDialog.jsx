import React from 'react';
import { Modal } from 'react-bootstrap';

function SuccessDialog({ show, onHide , msg, register}) {
  return (
    <Modal show={show} onHide={onHide} centered className="rounded-5">
      <Modal.Header closeButton>
        <Modal.Title>Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
        {
            register?  <i class="bi bi-x-circle-fill text-danger fs-1"></i> : <i className="bi bi-check-circle text-success fs-1"></i>
        }
        </div>
        <p className="text-center mt-3">{msg}</p>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessDialog;
