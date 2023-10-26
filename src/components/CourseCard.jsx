import React, { useEffect } from 'react';
import '../styles/coursecard.css';
import AOS from 'aos';


function CourseCard(props) {
useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
        <div className='course-single-card bg-white'  data-aos="flip-right">
          <div className="course-single-card-header">
           <img src="" alt="" />
           {/* <div className="course-single-card-header-curve">
            <button className="register-btn">Register Now</button>
           </div> */}
          </div>
          <ul className="list-group">
            <li className="list-group-item border-0">
                <h4 className='text-blue-1'>{props.course}</h4>
            </li>
            <li className="list-group-item border-0 bg-main-green text-black">
                <p><strong className='card-single-heading text-blue-1'>Instructor: </strong>{props.instructor.name}</p>
            </li>
            <li className="list-group-item border-0 text-black">
                <p><strong className='card-single-heading text-blue-1'>Duration: </strong>{props.duration}</p>
            </li>
            <li className="list-group-item border-0 text-black">
                <p><strong className='card-single-heading text-blue-1'>Enrolled: </strong>{props.instructor.enrolled}</p>
            </li>
            <li className="list-group-item border-0 text-black">
                <p><strong className='card-single-heading text-blue-1'>Mode Of training: </strong></p>
            </li>
              <button className="btn-danger w-100 mt-2">Join Free Demo Classes <i class="bi bi-chevron-double-right"></i></button>
          </ul>
        </div>
    </>
  );
}

export default CourseCard;
