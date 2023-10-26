import React from 'react'
import brand from '../images/brand-logo.jpg'
import '../styles/header.css'
import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { CoursePage } from '../Data/DataFetcher';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false)
  const [CourseData, setCourseData] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
     try {
       const data = await CoursePage;
       setLoading(false)
       setCourseData(data);
       console.log("data", data)
     } catch (error) {
      setLoading(true)
       console.error('Error fetching CoursePage:', error);
     }
   };

   fetchData();
 }, []);
  return (
    <header>
      {/* <div className="nav-top">
        <p className="p-dark-small m-0 text-white">Join Our Elite program <b>Explore <i class="bi bi-arrow-right"></i></b></p>
      </div> */}
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <a class="navbar-brand" href="/"> <img src={brand} alt="" /></a>

 <button variant="primary" onClick={handleShow} className='btn-danger d-lg-none'>
    <i class="bi bi-list text-white"></i>
    </button>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <a class="navbar-brand" href="/"> <img src={brand} alt="" /></a></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='p-0 m-0 list-group'>
            <li className='mobile-list-item list-group-item p-2'>
              <Link to="/" className='nav-link fs-4'>Home</Link>
            </li>
            <p className="p-large1 text-900 bg-danger text-white p-2 mt-3">Our Courses</p>
           {
            CourseData.map((item, index)=>(
              <li className='mobile-list-item list-group-item p-2' key={index}>
              
              <Link  to={`/course/${item.courseName}/${item._id}`} className='nav-link fs-4'>{item.courseName}</Link>
            </li>
            ))
           }
             <li className='mobile-list-item list-group-item p-2'>
              <Link to="/" className='nav-link fs-4'>Gallery</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2'>
              <Link to="/" className='nav-link fs-4'>Events</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2'>
              <Link to="/" className='nav-link fs-4'>Blogs</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2'>
              <Link to="/" className='nav-link fs-4'>About Us</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2'>
              <Link to="/" className='nav-link fs-4'>Contact Us</Link>
            </li>
          </ul>
          <p className="p-large1 text-900 bg-danger text-white p-2 mt-3">For Companies</p>
          <ul className="for-companies p-0 m-0 list-group">
            <li className="company-list-item list-group-item p-2">
            <Link to="/" className='nav-link fs-4'>Corporate Training</Link>
            </li>
            <li className="company-list-item list-group-item p-2">
            <Link to="/" className='nav-link fs-4'>Services</Link>
            </li>
            <li className="company-list-item list-group-item p-2">
            <Link to="/" className='nav-link fs-4'>Hire Trained Graduates</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-group  d-flex justify-content-center w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses <i class="bi bi-chevron-down mx-1"></i>
          </a>
          <ul class="dropdown-menu">
          <li class="nav-item dropend list-group-item">
              <a class="nav-link dropdown-toggle dropdown-item" href="/course-fullstack" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                FullStack Devolopment
              </a>
              <ul class="dropdown-menu list-group">
                <li className='list-group-item'><a class="dropdown-item" href="/course-mern">MERN Fullstack Devolopment</a></li>
                <li className='list-group-item'><a class="dropdown-item" href="/course-python">Python Fullstack Devolopment</a></li>
                <li className='list-group-item'><a class="dropdown-item" href="/course-java">Java Fullstack Devolopment</a></li>
              </ul>
            </li>
            <li className='list-group-item'><a class="dropdown-item" href="/course-data-science">Data Science</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="/course-cloud-computing">Cloud Computing</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="/course-digital-marketing">Digital Marketing</a></li>   
            <li className='list-group-item'><a class="dropdown-item" href="#">Job Oriented Courses</a></li>   
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events<i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'><a class="dropdown-item" href="/gallery">Gallery</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="/blogs">Blogs</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="/events">Events</a></li>   
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link  elite-link" href='/elite' > <i class="bi bi-stars"></i> Elite</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu list-group">
            <li className='list-group-item'><a class="dropdown-item" href="/about">Why Be Practical?</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="/contacts">Contact Us</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Companies <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'><a class="dropdown-item" href="#">Corporate Training</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="#">HR Services</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="/contacts">Hire Trained Graduates</a></li>   
          </ul>
        </li>
      </ul>
     <a href="/register" className='text-decoration-none'>
     <button class="btn-main-outline-dark bg-white text-black mx-1 hero-btn" type="button">Sign Up<i class="bi bi-chevron-double-right"></i></button>
     </a>
      <a href="/book-demo" className='text-decoration-none'>
      <button class="btn-danger" type="button">Book Demo Classes <i class="bi bi-chevron-double-right"></i></button>
      </a>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
