import React, { useEffect, useState } from 'react'
import '../styles/coursepage.css'
import HeroRegister from '../components/HeroRegister'
import Companies from '../components/companies/Companies'
import Adwantages from '../components/advantages/Adwantages'
import YoutubeVideos from '../components/YoutubeVideos'
import Feedback from '../components/Feedback'
import LandDreamJob from '../components/LandDreamJob'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import FaqSection from '../components/FaqSection'
import Module from '../components/Module'
import Languages from '../components/Languages'
import CourseCard from '../components/CourseCard'
import Loading from '../Modals/Loading'
import CourseCertificate from '../components/CourseCertificate'

function CoursePageEngine() {
    const [courseData, setCourseData] = useState(null);
  const { id } = useParams(); // Access the id parameter from the URL
    useEffect(() => {
        // Define the API URL where you want to fetch the course data
        const apiUrl = `https://fancy-mittens-ray.cyclic.app/api/course/${id}`; // Replace with your actual API endpoint
    
        axios
          .get(apiUrl)
          .then((response) => {
            // Handle the response data, which should contain your course information
            setCourseData(response.data);
          })
          .catch((error) => {
            // Handle any errors, such as a 404 if the course with the specified ID doesn't exist
            console.error(error);
          });
      }, [id]);

      if (courseData === null) {
        // You can display a loading message here while the data is being fetched
        return <Loading/>;
      }
  return (
    <section className='overflow-hidden'>
    <div className="course-hero container-fluid p-0 py-3">
        {/* <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
                <div className="course-hero-text p-lg-5 p-md-2 p-2">
                    <h1 className="course-heading text-white mb-4">{courseData.heroTitle}</h1>
                    <p className="heading-subtitle text-white">Learn with Real Work-Ex. Join the best product-based <br /> companies with <span className='text-green fw-bold'>guaranteed placement.</span></p>
                    <div className="batch  d-flex align-items-center"> 
                        <i class="bi bi-calendar3 fs-4 text-blue-1"></i>
                            <p className='p-dark-small text-black text-900 mx-2 mt-2'>New Batch Starts At {courseData.BatchStarting} </p>
                        </div>
                        <div className="course-btn mt-5 d-flex flex-wrap gap-2">
                            <button className="hero-btn-main p-4 hero-btn ">Enroll This Course <i class="bi bi-chevron-double-right"></i></button>
                            <button className="hero-btn-outline p-3 hero-btn">Book Free Demo Classes <i class="bi bi-chevron-double-right"></i></button>
                        </div>
                        <div className="course-highlight mt-5">
                            <div className="row">
                                <div className="col-12 col-md-8 col-lg-8">
                                    <div className="course-highlight-left bg-light-green rounded-4 text-center p-2 mb-2">
                                        <h3 className="heading-small py-3">
                                        Placement Guarantee
                                        </h3>
                                        <div className="devider"></div>
                                        <div className="row">
                                            <div className="col-6">
                                                <small>MIN DREAM SALARY</small>
                                                <h4 class="heading-small">{courseData.minSalary}</h4>
                                            </div>
                                            <div className="col-6">
                                                <small>HIGHEST SALARY</small>
                                                <h4 className="heading-small">{courseData.HighestSalary}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="course-highlight-right bg-light-green rounded-4 p-2 text-center mb-2">
                                    <small>COURSE DURATION</small>
                                                <p className="heading-small"></p>
                                                <h4 className="heading-small">{courseData.courseDuration}</h4>
                                                <div className="devider"></div>
                                                <small>DEMO CLASSES</small>
                                                <h4 className="heading-small">FREE</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <div className="course-hero-video">

                <div className="video-container">
                        <img src="" alt="" />
                        <div className="play-icon">
                        <i class="bi bi-play-fill fs-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="course-hero p-lg-5 p-3 d-flex flex-column align-items-center justify-content-center bg-blur">
            <h1 className="heading text-center text-900">{courseData.heroTitle}</h1>
            <p className="p-large1 text-900 text-main-danger">{courseData.heroSubtitle}</p>
            <div className="course-details container  p-lg-5 p-3">
                <div className="row">
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-white rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-calendar3 fs-1 text-green"></i>
                        <h1 className="fs-5 text-main-danger">Next Batch</h1>
                        <h1 className="fs-4">{courseData.BatchStarting}</h1>
                    </div>
                   </div>
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-white rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-stopwatch-fill fs-1 text-yellow"></i>
                        <h1 className="fs-5 text-main-danger">Duration</h1>
                        <h1 className="fs-4">{courseData.courseDuration}</h1>
                    </div>
                   </div>
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-white rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-stopwatch-fill fs-1 text-main-danger"></i>
                        <h1 className="fs-5 text-main-danger">Next Batch</h1>
                        <h1 className="fs-4">{courseData.BatchStarting}</h1>
                    </div>
                   </div>
                </div>
            </div>
           
        </div>
        <div className="row">
                <div className="col-md-6 offset-3">
                    <img src={courseData.courseImage} alt={courseData.courseName} className="w-100" />
                </div>
            </div>
        <HeroRegister/>
    </div>
      <section className='main-lan-container container-fluid bg-gray2 rounded-0 py-2' id="languages">
            <div className="lan-inner-container container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <Languages languages={courseData.programmingLanguages} course={courseData.courseName}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center ">
                        <CourseCard instructor={courseData.instructors} duration={courseData.courseDuration} course={courseData.courseName} ></CourseCard>
                    </div>
                </div>
            </div>
      </section>
      <Module modules={courseData.modules} name={courseData.courseName}/>
      <LandDreamJob/>
      <CourseCertificate/>
    <Companies/>

    <Adwantages/>
    <YoutubeVideos/>
    <FaqSection  faq={courseData.faqs}/>
    <Feedback/>
    </section>
  )
}

export default CoursePageEngine
