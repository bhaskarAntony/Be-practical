// Import necessary libraries and components
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlaneDeparture, faVanShuttle, faCarSide, faBuilding, faGraduationCap, faStar, faSmoking, faCode, faNewspaper, faSubway, faCalendar } from '@fortawesome/free-solid-svg-icons';

// Functional component for the bottom navigation bar
const BottomNavigation = () => {
  return (
    <Navbar fixed="bottom" bg="light" variant="light" className='d-lg-none text-center p-0 m-0 overflow-scroll dark-shadow'>
      <Nav className="m-0 p-0 d-flex justify-content-between flex-row text-black w-100">
        <Nav.Item>
          <Nav.Link href="#search">
            <FontAwesomeIcon icon={faGraduationCap} className='text-black'/>
            <small className="d-block fs-6 text-black">Courses</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#add">
            <FontAwesomeIcon icon={faStar} className='text-black' />
            <small className="d-block fs-6 text-black">Elite</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#favorites">
            <FontAwesomeIcon icon={faCalendar} className='text-black'/>
            <small className="d-block fs-6 text-black">Events</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='k'>
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faCode} className='text-black' />
            <small className="d-block fs-6 text-black">Quiz</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#profile">
            <FontAwesomeIcon icon={faNewspaper} className='text-black'/>
            <small className="d-block fs-6 text-black">Blogs</small>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default BottomNavigation;
