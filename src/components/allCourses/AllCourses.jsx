import React, { useEffect, useState } from 'react'
import '../../components/ourCourses/ourCourses.css'
import { CoursePage } from '../../Data/DataFetcher';
import Aos from 'aos';
import { Link } from 'react-router-dom';

function AllCourses() {
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
                <div className="container our-course-card p-lg-5 p-md-3 p-3 py-5">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="course-left">
                          <p className=" text-white rounded-2 p-1 tag">
                          <i class="bi bi-star-fill text-white mx-2"></i> Job Ready Program <i class="bi bi-star-fill text-white mx-2"></i>
                          </p>
                          <div className="seats rounded-4 p-2 d-flex gap-2 flex-wrap bg-gray2 text-white align-items-center mb-3">
                              <i class="bi bi-bookmark-check"></i><span className="fs-6 text-900">500 Seats  are available</span>
                              </div>
                          <h1 className="fs-3 text-900">{item.courseName}</h1>
                          <p className="p-large1">{item.heroSubtitle}</p>
                          <div className="course-info rounded-4 row mb-2 p-2 px-3">
                          <div className="col-12 col-md-6 col-lg-6">
                          <div className="d-flex align-items-center gap-2 w-100 mb-2">
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
                          </div>
                          <div className="col-12 col-md-6 col-lg-6">
                          <div className="d-flex align-items-center gap-2 mb-2">
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
                          </div>
                          <div className="course-info rounded-4 row mb-2 p-2 px-3">
                          <div className="col-12 col-md-6 col-lg-6">
                          <div className="d-flex align-items-center gap-2 w-100 mb-2">
                             <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                            <i class="bi bi-camera-video-fill text-yellow fs-4"></i>
                           </div>
                           <div>
                            <p>
                            <p className="text-secondary">Mode Of Training</p>
                            <p className='text-900'>{item.courseDuration}</p>
                            </p>
                           </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6">
                          <div className="d-flex align-items-center gap-2 mb-2">
                             <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                            <i class="bi  bi-person-check-fill text-green fs-4"></i>
                           </div>
                           <div>
                            <p>
                            <p className="text-secondary">Advantages</p>
                            <p className='text-900'>HR Activities</p>
                            </p>
                           </div>
                            </div>
                          </div>
                          </div>
                          <div className="course-btns row mt-3">
                            <div className="col-12 col-md-6 col-lg-6">
                            <Link to={`/course/${item.courseName}/${item._id}`} className=" text-decoration-none mb-1"> <button className="btn-gray  hero-btn">Know More</button></Link>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                            <button className="btn-gray-outline  hero-btn">Talk to an Expert</button>
                              </div>
                           
                           
                          </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg d-none d-lg-block">
                    <div className="course-right">
                        <img src={item.courseImage} alt={item.courseName} className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))
          }
        </div>
        <div className="text-center">
        <Link to="/" className=" text-decoration-none"> <button className="btn-danger  hero-btn">Browse All Courses</button></Link>
        </div>
    </div>
  )
}

export default AllCourses
