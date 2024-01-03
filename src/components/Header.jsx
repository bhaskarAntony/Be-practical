import React from 'react'
import brand from '../images/brand-logo.jpg'
import '../styles/header.css'
import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { CoursePage } from '../Data/DataFetcher';
import { Shimmer } from 'react-shimmer';

function Header() {
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);
  const [loading, setLoading] = useState(true)
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
 const handleLinkClick = () => {
  // Hide the Offcanvas when a link is clicked
  setShow(false);
};
  return (
    <header>
      {/* <div className="nav-top">
        <p className="p-dark-small m-0 text-white">Join Our Elite program <b>Explore <i class="bi bi-arrow-right"></i></b></p>
      </div> */}
      <nav class="navbar navbar-expand-xl">
  <div class="container-fluid">
  <a class="navbar-brand" href="/"> <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="logo" className='rounded-2' /></a>

<div>
<button variant="primary" onClick={handleShow} className='btn-danger d-xl-none'>
    <i class="bi bi-list text-white"></i>
    </button>
    <button variant="primary" onClick={handleShowContact} className='btn bg-gray2 mx-2 p-2 rounded-2 d-xl-none'>
      <i class="bi bi-person-lines-fill fs-4 text-white"></i>
    </button>
</div>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <a class="navbar-brand" href="/"> <img src={brand} alt="logo" /></a></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='p-0 m-0 list-group'>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/" className='nav-link fs-4'>Home</Link>
            </li>
            <p className="p-large1 text-900 bg-danger-2 text-white p-2 mt-3">Our Courses</p>
            {loading ? (
              Array(5)
                .fill(null)
                .map((_, index) => (
               <div className="list-group-item p-2">
                  <Shimmer width="100%" height={20}/>
               </div>
                ))
            ):(
           
            CourseData.map((item, index)=>(
              <li className='mobile-list-item list-group-item p-2' key={index} onClick={handleLinkClick}>
              
              <Link  to={`/course/${item.courseName}/${item._id}`} className='nav-link fs-4' >{item.courseName}</Link>
            </li>
            )))
           }
             <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/gallery" className='nav-link fs-4'>Gallery</Link>
            </li>
            <li className='mobile-list-item list-group-item p-0' onClick={handleLinkClick}>
              <Link to="/elite" className='nav-link fs-4 bg-gold text-black p-2'> <i class="bi bi-stars"></i>  Elite</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/events" className='nav-link fs-4'>Events</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/blogs" className='nav-link fs-4'>Blogs</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/about-us-2" className='nav-link fs-4'>About Us</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/contact-us" className='nav-link fs-4'>Contact Us</Link>
            </li>
          </ul>
          <p className="p-large1 text-900 bg-danger-2 text-white p-2 mt-3">For Companies</p>
          <ul className="for-companies p-0 m-0 list-group">
            <li className="company-list-item list-group-item p-2" onClick={handleLinkClick}>
            <Link to="/" className='nav-link fs-4'>Corporate Training</Link>
            </li>
            <li className="company-list-item list-group-item p-2" onClick={handleLinkClick}>
            <Link to="/" className='nav-link fs-4'>Services</Link>
            </li>
            <li className="company-list-item list-group-item p-2" onClick={handleLinkClick}>
            <Link to="/" className='nav-link fs-4'>Hire Trained Graduates</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-group  d-flex align-items-center justify-content-center w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses <i class="bi bi-chevron-down mx-1"></i>
          </a>
          <ul class="dropdown-menu p-0">
          {loading ? (
              Array(5)
                .fill(null)
                .map((_, index) => (
                <div className="list-group-item p-2">
                   <Shimmer width="100%" height={20}/>
                </div>
                ))
            ):(
          
            CourseData.map((item, index)=>(
              
              <list className='list-group-item' >
                <Link to={`/course/${item.courseName}/${item._id}`}  className='nav-link'>{item.courseName}</Link>
              </list>
            )))
          }
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events<i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'>
            <Link to='/gallery' className='nav-link'>Gallery</Link>
             </li>
            <li className='list-group-item'>
            <Link to='/blogs' className='nav-link'>Blogs</Link>
             </li>     
            <li className='list-group-item'>
            <Link to='/events' className='nav-link'>Events</Link>
              </li>   
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link  elite-link " href='/elite' > <i class="bi bi-stars"></i> Elite</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu list-group">
            <li className='list-group-item'> <Link to='/about-us-2' className='nav-link'>About Us</Link></li>
            <li className='list-group-item'> <Link to='/contact-us' className='nav-link'>Contact Us</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Companies <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'> <Link to='https://www.be-practicalhr.com/corporate-training-in-bangalore/' className='nav-link'>Corporate Training</Link></li>
            <li className='list-group-item'> <Link to='https://www.be-practicalhr.com/' className='nav-link'>HR Services</Link></li>     
            <li className='list-group-item'> <Link to='/contacts' className='nav-link'>Hire Trained Graduates</Link></li>   
          </ul>
        </li>
      </ul>
     {/* <a href="/register" className='text-decoration-none'>
     <button class="btn-main-outline-dark bg-white text-black mx-1 hero-btn" type="button">Sign Up<i class="bi bi-chevron-double-right"></i></button>
     </a> */}
      <a href="/book-demo" className='text-decoration-none'>
      <button class="btn-danger shimmer-btn" type="button">Book Free Master Classes <i class="bi bi-chevron-double-right"></i></button>
      </a>
      <button variant="primary" onClick={handleShowContact} className='btn bg-gray2 mx-2 p-2 rounded-2'>
      <i class="bi bi-person-lines-fill fs-4 text-white"></i>
    </button>
    <Offcanvas show={showContact} onHide={handleCloseContact}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <a class="navbar-brand" href="/"> <img src={brand} alt="" /></a></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group">
            <li className="list-group-item p-2">
            <p className="fs-5"><i class="bi bi-telephone-fill text-green mx-2"></i> +91-9242079779</p>
            </li>
            <li className="list-group-item p-2">
            <p className="fs-5"><i class="bi bi-envelope-fill text-yellow mx-2"></i>info@be-practicle.com</p>
            </li>
            <li className="list-group-item p-2">
            <p className="fs-5"><address> <i class="bi bi-building text-main-danger mx-2"></i>  #737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</address></p>
            </li>
          </ul>
          <Link to="tel:+919242079779"><button className="btn bg-success-2 w-100 text-white">Call Now</button></Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
