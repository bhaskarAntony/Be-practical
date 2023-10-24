import React, { useEffect } from 'react';
import '../styles/allcourses.css'
// import AOS from 'aos';
import coder from '../images/coder.svg'

var courses = [
  {
      id:1,
      name: "Complete Fullstack",
      tag:"Trending",
      duration: "4.5 Months",
      trainer: "...",
      languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
      ratedStudents: "465",
      rating:"4.5",
      icon: coder,
      image: coder,
      path:"/course-fullstack"

  },
  {
      id:2,
      name: "MERN  Fullstack",
      tag:"Trending",
      duration: "4.5 Months",
      trainer: "...",
      languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
      ratedStudents: "465",
      rating:"4.5",
      icon: coder,
      image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path:"/course-mern"

  },
  {
      id:4,
      name: "Cloud Oops",
      duration: "4.5 Months",
      trainer: "...",
      languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
      ratedStudents: "465",
      rating:"4.5",
      icon: coder,
      image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path:"/course-cloud-computing"

  },
  {
      id:5,
      name: "Data Science",
      duration: "4.5 Months",
      trainer: "...",
      languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
      ratedStudents: "465",
      rating:"4.5",
      icon: coder,
      image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path:"/course-data-science"

  }
]

function TrendingCourses() {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS
  // }, []);
    return (
      <div className='container p-0'>
      <div className="row flex-wrap d-flex justify-content-center align-items-center">
          {courses.map((item, index) => (
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 mb-3 d-flex justify-content-center">
                <div className="card course-card" data-aos="zoom-in">
                  <div className="row">
                      <div className="col-12 cl-md-12 col-lg-4">
                      <div className={`course-card-header p-2 d-flex align-items-end justify-content-between course-card-header${item.id}`}>
                      <div className="icon">
                  <img src={item.icon} alt="" className='w-100 img-fluid' />
                </div>
                </div>

                      </div>
                      <div className="col-12 col-md-12 col-lg-8">
               <div className="course-card-body p-2">
                  <h4 className='card-heading text-900'>{item.name}</h4>
                  <hr />
                  <div className="row">
                  <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-clock  mx-2 fs-4"></i>
                      <p>{item.duration}</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-camera-video  mx-2 fs-4"></i>
                      <p>Online and offline classes</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-mortarboard  mx-2 fs-4"></i>
                      <p>Job Assurance</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-person-lines-fill mx-2 fs-4"></i>
                      <p>HR activities</p>
                      </div>
                  </div>
                  
                  {/* <p><small>{item.trainer}</small></p> */}
                  <div className="course-footer p-2 m-0">
                
                <div className="mt-4">
                <a href={item.path}  className="btn-main-outline-dark w-100 text-decoration-none">Learn More</a>
                 <a href="" className="btn-main w-100 text-decoration-none mx-2">enroll Now</a>
                </div>
                
               </div>
                </div>

               </div>
                  </div>
               
              
                {/* <div className="thumb-layout">
                  <img src={item.icon} alt="" />
                  <h4>Enroll Now This {item.name}</h4>
                  <p>Build Your Careere With {item.name}</p>

                <div className="thumb-btns">
                  <button className="enroll-btn">Enroll</button>
                  <button className="enquire-btn">Enquire</button>
                </div>
                </div> */}
                </div>
            </div>
          ))}
        
      </div>
  </div>
    )
}

export default TrendingCourses;
