import React, { useEffect, useState } from 'react';
import '../styles/quiz.css'
import {Modal, Form, FloatingLabel } from 'react-bootstrap';
import { Quiz } from '../Data/DataFetcher';
import brandImage from '../images/view_plans.png'

var quizData = []

function QuizModal() {
  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(false)
  const [QuizData, setQuizData] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
     try {
       const data = await Quiz;
       setLoading(false)
       setQuizData(data);
       quizData = data;
       console.log("quissz data = ", quizData[currentQuestion]?.question)
       
     } catch (error) {
      setLoading(true)
       console.error('Error fetching CoursePage:', error);
     }
   };

   fetchData();
 }, []);

  const openModal = () => {
    setShowModal(true);
    setCurrentQuestion(0); // Reset the quiz when opening the modal
    setUserAnswers(Array(quizData.length).fill(''));
    setScore(0);
    setIsQuizCompleted(false);
  };

  const closeModal = () => setShowModal(false);

  const handleAnswerSelection = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate the score
      let totalScore = 0;
      for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].correctAnswer) {
          totalScore++;
        }
      }
      setScore(totalScore);
      setIsQuizCompleted(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to a server or generate a certificate)
  };

  return (
    <div className='container-fluid  p-3 mt-4'>
        <h1 className="banner-heading">Get 10% <span className="text-main-danger">Discount</span></h1>
        <div className="quiz-container bg-blue-3 p-3 mt-3 rounded-5">
            <div className="row container-xxl m-xxl-auto">
                <div className="col-12 col-md-6 col-lg-6">
                 <img src={brandImage} alt="quiz-brand-image" className="w-100" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 p-1 p-lg-5">
                  <p className="p-large1 text-main-danger">Get Started</p>
                  <h1 className="card-big-text text-900">Not Sure Where to Begin? <br /> Take Our Quiz.</h1>
                  <p className="text-secondary p-large1">
                      Get started now with hundreds of courses and thousands of labs — with new additions published every week</p>
                    <button className="btn-danger" onClick={openModal}>Start Quiz <i class="bi bi-chevron-double-right"></i></button>
                </div>
            </div>
        </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Get 10% discount in your course fees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isQuizCompleted ? (
            <div>
              <p className='fs-4 text-main-danger'> {currentQuestion + 1}) {quizData[currentQuestion]?.question}</p>
              <Form>
                {quizData[currentQuestion]?.answers.map((option, index) => (
                 <div className="q-option">
                   <Form.Check
                   className='text-900 fs-5'
                    type="radio"
                    name="quizOption"
                    key={index}
                    label={option}
                    onChange={() => handleAnswerSelection(option)}
                    checked={userAnswers[currentQuestion] === option}
                  />
                 </div>
                ))}
              </Form>
              <div className="text-center mt-3">
              <button className='btn-gray' onClick={handleNextQuestion}>
                Next <i className="bi bi-chevron-double-right"></i>
              </button>
              </div>
            </div>
          ) : (
            <div>
              <p className='text-main-danger fs-3 text-center'>Your Score: {score} out of {quizData.length}</p>
              <Form onSubmit={handleFormSubmit}>
              <Form.Group className='mt-2'>
       <FloatingLabel controlId="floatingInputGrid" label="Student name">
          <Form.Control type="text" placeholder="name@example.com" required />
        </FloatingLabel>
       </Form.Group>
       <Form.Group className='mt-2'>
       <FloatingLabel controlId="floatingInputGrid" label="Mobile number">
          <Form.Control type="text" placeholder="+91-000-0000-000"  required/>
        </FloatingLabel>
       </Form.Group>
       <Form.Group className='mt-2'>
       <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com"  required/>
        </FloatingLabel>
       </Form.Group>
               <button className='btn-gray w-100 mb-2 mt-3' type="submit">
                  Download Certificate <i class="bi bi-download"></i>
                </button>
                <button  className="btn-gray-outline mb-2 p-3" variant="secondary" onClick={openModal}>
                Retake Quiz
              </button>
              </Form>
              
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
    
  );
}

export default QuizModal;
