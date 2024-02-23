import React, { useEffect, useState } from 'react'
import './ourCourses.css'
import Aos from 'aos';
import { Link } from 'react-router-dom';
import CourseShimmer from './CourseShimmer';
import {allCourseApi, ourCoursesApi } from '../../Data/DataFetcher';

function OurCourses() {
  const [loading, setLoading] = useState(true)
  const [CourseData, setCourseData] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
     try {
       const data = await allCourseApi;
       setLoading(false)
       console.log(data)
       setCourseData(data.courses);
       console.log("data", data)
     } catch (error) {
      setLoading(true)
       console.error('Error fetching CoursePage:', error);
     }
   };

   fetchData();
 }, []);
    useEffect(() => {
        Aos.init(); // Initialize AOS
      }, []);
      // const displayedCourses = CourseData.slice(0, 3);
  return (
    <div className='container-fluid our-courses p-lg-5 p-3'>
        <h1 className="heading" data-aos="fade-up"><i class="bi bi-star-fill fs-3 text-main-danger mx-2" ></i>Our Courses<i class="bi bi-star-fill fs-3 text-main-danger mx-2"></i></h1>
        <p className="banner-sub-text text-800 text-center" data-aos="fade-up">Acquire real-world skills that guarantee the growth you deserve</p>
        <div className="all-our-courses mt-5">
        {loading ? (
              Array(3)
                .fill(null)
                .map((_, index) => (
                 <CourseShimmer/>
                ))
            ):(
              CourseData.map((item, index)=>(
                <div className="our-course-card-wrapper" key={index}>
                    <div className="container our-course-card p-lg-5 p-md-3 p-sm-4" data-aos="fade-right">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                        <div className="course-left">
                        <div className="mb-2 d-flex gap-2 flex-wrap align-items-center">
                        <div class="dot">
                             <span class="glow"></span>
                             </div>
                             <span className='fs-5 text-900 shake-card'>{item.details.admisionStart}</span>
                        </div>
                              <span className=" text-white rounded-2 p-1 tag d-inline-block my-3">
                              <i class="bi bi-star-fill text-white mx-2"></i> Job Ready Program <i class="bi bi-star-fill text-white mx-2"></i>
                              </span>
                              {/* <div className="seats rounded-4 p-2 d-flex gap-2 flex-wrap bg-gray2 text-white align-items-center mb-3">
                              <i class="bi bi-bookmark-check"></i><span className="fs-6 text-900">500 Seats  are available</span>
                              </div> */}
                              <h1 className="fs-3 text-900">{item.courseName}</h1>
                              <p className="fs-6">{item.heroSubtitle}</p>
                              <div className="course-info rounded-4 row mb-2 p-1 px-3  m-auto">
                              <div className="col-12 col-md-6 col-lg-6">
                              <div className="d-flex align-items-center gap-2 w-100 mb-2">
                                 <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                <i class="bi bi-calendar3 text-yellow fs-5"></i>
                               </div>
                               <div>
                                <span>
                                <span className="text-secondary d-block">Duration</span>
                                <span className='text-900'>{item.details.Duration}</span>
                                </span>
                               </div>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-6">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                 <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                <i class="bi bi-calendar3 text-green fs-5"></i>
                               </div>
                               <div>
                                <span>
                                <span className="text-secondary d-block">Highest Salary</span>
                                <span className='text-900'>{item.HighestCtc}</span>
                                </span>
                               </div>
                                </div>
                              </div>
                              </div>
                              <div className="course-info rounded-4 row mb-2 p-1 px-3  m-auto">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                 <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                <i class="bi bi-camera-video-fill text-yellow fs-6"></i>
                               </div>
                               <div>
                                <span>
                                <span className="text-secondary d-block">Mode Of Training</span>
                                <span className='text-900 '>Online & Offline</span>
                                </span>
                               </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                 <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                <i class="bi  bi-person-check-fill text-green fs-6"></i>
                               </div>
                               <div>
                                <span>
                                <span className="text-secondary d-block">Advantages</span>
                                <span className='text-900'>Placement Activities</span>
                                </span>
                               </div>
                                </div>
                              </div>
                              </div>
                            
                              <div className="course-btns row mt-3">
                                <div className="col-12 col-md-6 col-lg-6">
                                <Link to={`/${item.seo.canonical_url}/${item._id}`} className=" text-decoration-none"> <button className="btn-gray  hero-btn">Know More <i class="bi bi-arrow-up-right mb-2"></i></button></Link>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                <button className="btn-gray-outline  hero-btn">Talk to an Expert</button>
                                  </div>
                               
                               
                              </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-5 d-none d-sm-none d-lg-block">
                        <div className="course-right">
                            <img src={item.courseImage} alt={item.courseName} className="w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))
            )
              }
        </div>
        <div className="text-center">
        <Link to="/all-courses" className=" text-decoration-none"> <button className="btn-prm">Browse All Courses</button></Link>
        </div>
    </div>
  )
}

export default OurCourses
