import React, { useEffect, useState } from 'react'
import '../styles/ourCourses.css'
import { CoursePage } from '../Data/DataFetcher';
import Aos from 'aos';

function OurCourses() {
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
    useEffect(() => {
        Aos.init(); // Initialize AOS
      }, []);
  return (
    <div className='container-fluid our-courses p-lg-5 p-3'>
        <h1 className="heading"><i class="bi bi-star-fill fs-3 text-main-danger mx-2"></i>Our Courses<i class="bi bi-star-fill fs-3 text-main-danger mx-2"></i></h1>
        <p className="banner-sub-text text-800 text-center">Acquire real-world skills that guarantee the growth you deserve</p>
        <div className="all-our-courses mt-5">
          {
            CourseData.map((item, index)=>(
            <div className="our-course-card-wrapper">
                <div className="container our-course-card p-5">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="course-left">
                          <p className=" text-white rounded-2 p-1 tag">
                          <i class="bi bi-star-fill text-white mx-2"></i> Job Ready Program <i class="bi bi-star-fill text-white mx-2"></i>
                          </p>
                          <h1 className="fs-3 text-900">{item.courseName}</h1>
                          <p className="p-large1">{item.heroSubtitle}</p>
                          <div className="course-info rounded-4 d-flex mb-2 align-items-center justify-content-between p-2 px-3">
                          <div className="d-flex align-items-center gap-2">
                             <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                            <i class="bi bi-calendar3 text-yellow fs-4"></i>
                           </div>
                           <div>
                            <p>
                            <p className="text-secondary">Duration</p>
                            <p className='text-900'>{item.courseDuration}</p>
                            </p>
                           </div>
                            </div>
                           <div className="d-flex align-items-center gap-2">
                             <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                            <i class="bi bi-calendar3 text-green fs-4"></i>
                           </div>
                           <div>
                            <p>
                            <p className="text-secondary">Highest Salary</p>
                            <p className='text-900'>{item.HighestSalary}</p>
                            </p>
                           </div>
                            </div>
                          </div>
                          <div className="course-info rounded-4 d-flex mb-2 align-items-center justify-content-between p-2 px-3">
                          <div className="d-flex align-items-center gap-2">
                             <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                            <i class="bi bi-camera-video-fill text-yellow fs-4"></i>
                           </div>
                           <div>
                            <p>
                            <p className="text-secondary">Mode Of Training</p>
                            <p className='text-900'>{item.modeOfTraining}</p>
                            </p>
                           </div>
                            </div>
                           <div className="d-flex align-items-center gap-2">
                             <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                            <i class="bi bi-person-check-fill text-green fs-4"></i>
                           </div>
                           <div>
                            <p>
                            <p className="text-secondary">Advantages</p>
                            <p className='text-900'>HR Activities</p>
                            </p>
                           </div>
                            </div>
                          </div>
                          <div className="course-btns d-flex gap-2 mt-3">
                            <button className="btn-gray  hero-btn flex-1">Know More</button>
                            <button className="btn-gray-outline  hero-btn flex-1">Know More</button>
                          </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg">
                    <div className="course-right">
                        <img src={item.courseImage} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default OurCourses
