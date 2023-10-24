import React, { useEffect } from 'react';
import '../styles/coursecard.css';
import AOS from 'aos';


function CourseCard(props) {
useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
        <div className='course-single-card bg-dark-green'  data-aos="flip-right">
          <div className="course-single-card-header">
           <img src="" alt="" />
           {/* <div className="course-single-card-header-curve">
            <button className="register-btn">Register Now</button>
           </div> */}
          </div>
          <ul className="list-group">
            <li className="list-group-item border-0">
                <h4 className='text-light-green'>{props.course}</h4>
            </li>
            <li className="list-group-item border-0 bg-main-green text-white">
                <p><strong className='card-single-heading text-light-green'>Instructor: </strong>{props.instructor}</p>
            </li>
            <li className="list-group-item border-0 text-white">
                <p><strong className='card-single-heading text-light-green'>Duration: </strong>{props.duration}</p>
            </li>
            <li className="list-group-item border-0 text-white">
                <p><strong className='card-single-heading text-light-green'>Enrolled: </strong>{props.enrolled}</p>
            </li>
            <li className="list-group-item border-0 text-white">
                <p><strong className='card-single-heading text-light-green'>Mode Of training: </strong>{props.mode}</p>
            </li>
            <button className="btn-main-outline-light w-100 mt-2">Enroll Now <i class="bi bi-chevron-double-right"></i></button>
              <button className="btn-main w-100 mt-2">Join Free Demo Classes <i class="bi bi-chevron-double-right"></i></button>
          </ul>
        </div>
    </>
  );
}

export default CourseCard;
