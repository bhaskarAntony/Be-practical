import React from 'react'
import { Modal } from 'react-bootstrap';

function VideosModal({ isOpen, videoSrc, onClose }) {
  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>YouTube Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <video src={videoSrc} controls width="100%" height="auto"></video>
      </Modal.Body>
    </Modal>
  )
}

export default VideosModal
