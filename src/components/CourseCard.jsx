import React, { useEffect } from 'react';
import '../styles/coursecard.css';
import AOS from 'aos';


function CourseCard(props) {
useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
        <div className='course-single-card bg-gray3'  data-aos="flip-right">
          <div className="course-single-card-header py-4">
            <h1 className="fs-3 text-white">Apply for the <span className="text-main-danger">{props.course}</span>  Program</h1>
           {/* <img src="" alt="" /> */}
           {/* <div className="course-single-card-header-curve">
            <button className="register-btn">Register Now</button>
           </div> */}
          </div>
          <ul className="list-group">
            <li className="list-group-item border-0">
                <h4 className='text-main-danger'>{props.course}</h4>
            </li>
            <li className="list-group-item border-0 bg-gray2">
                <p><strong className='card-single-heading text-white'>Instructor: </strong>{props.instructor.name}</p>
            </li>
            <li className="list-group-item border-0 bg-gray2">
                <p><strong className='card-single-heading text-white'>Duration: </strong>{props.duration}</p>
            </li>
            <li className="list-group-item border-0 bg-gray2">
                <p><strong className='card-single-heading text-white'>Enrolled: </strong>{props.instructor.enrolled}</p>
            </li>
            <li className="list-group-item border-0 bg-gray2">
                <p><strong className='card-single-heading text-white'>Mode Of training: </strong></p>
            </li>
              <button className="btn-danger w-100 mt-2 p-4 rounded-3">Join Free Demo Classes <i class="bi bi-chevron-double-right"></i></button>
          </ul>
        </div>
    </>
  );
}

export default CourseCard;
