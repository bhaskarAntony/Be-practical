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
import BookDemoCard from '../components/BookDemoCard'

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
    <div className="course-hero container-fluid p-0 py-3 bg-gray2 border-b ">

        {/* <div className="course-hero p-lg-5 p-3 d-flex flex-column align-items-center justify-content-center bg-blur">
            <h1 className="heading text-center text-900">{courseData.heroTitle}</h1>
            <p className="p-large1 text-900 text-main-danger">{courseData.heroSubtitle}</p>
            <div className="course-details container  p-lg-5 p-3">
                <div className="row">
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-white rounded-3 py-3 border-b mb-3 shake-card">
                   <i class="bi bi-calendar3 fs-1 text-green"></i>
                        <h1 className="fs-5 text-main-danger">
                             Next Batch Starting </h1>
                                                 
                        <h1 className="fs-4">{courseData.BatchStarting}</h1>
                    </div>
                   </div>
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-white rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-stopwatch-fill fs-1 text-yellow"></i>
                        <h1 className="fs-5 text-main-danger">Course Duration</h1>
                        <h1 className="fs-4">{courseData.courseDuration}</h1>
                    </div>
                   </div>
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-white rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-wallet-fill fs-1 text-main-danger"></i>
                        <h1 className="fs-5 text-main-danger">Job Min Salary</h1>
                        <h1 className="fs-4">{courseData.minSalary}</h1>
                    </div>
                   </div>
                </div>
            </div>
            <div className="btns">
                <button className="btn-danger px-5">Download Syllubus</button>
            </div>
           
        </div> */}
        <div className="row">
            <div className="col-12 col-md-7 col-lg-7">
                <div className="course-hero-left p-lg-5 p-3">
                    <p className="text-main-danger fs-5 text-900">100% Placement Course</p>
                    <h1 className="heading text-900 text-white">{courseData.heroTitle}</h1>
                    <p className="fs-5 text-secondary">{courseData.heroSubtitle}</p>
                    <div className="course-ratings mt-3 d-flex align-items-center gap-2">
                        <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">rating <i class="bi bi-star-half text-yellow"></i><b> 4.5</b></small></p>
                        <div className="d-flex gap-2">
                        <i class="bi bi-star-fill text-yellow fs-4"></i>
                        <i class="bi bi-star-fill text-yellow fs-4"></i>
                        <i class="bi bi-star-fill text-yellow fs-4"></i>
                        <i class="bi bi-star-fill text-yellow fs-4"></i>
                        <i class="bi bi-star-half text-yellow fs-4"></i>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-12 col-lg-6">
                        <div className="course-tags p-2 py-3 bg-gray4 text-white rounded-3 mb-2 d-flex gap-2 align-items-center border-l">
                        <i class="bi bi-check-circle-fill fs-3 text-green"></i><span className="fs-5">100% Placement Support</span>
                        </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                        <div className="course-tags p-2 py-3 bg-gray4 text-white rounded-3 mb-2 d-flex gap-2 align-items-center border-l">
                        <i class="bi bi-check-circle-fill fs-3 text-green"></i><span className="fs-5">Industry Led Curriculum</span>
                        </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                        <div className="course-tags p-2 py-3 bg-gray4 text-white rounded-3 mb-2 d-flex gap-2 align-items-center border-l">
                        <i class="bi bi-check-circle-fill fs-3 text-green"></i><span className="fs-5">Real Time Projects</span>
                        </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                        <div className="course-tags p-2 py-3 bg-gray4 text-white rounded-3 mb-2 d-flex gap-2 align-items-center border-l">
                        <i class="bi bi-check-circle-fill fs-3 text-green"></i> <span className="fs-5">Flexible Timings</span>
                        </div>
                        </div>
                    </div>
                    <div className="btns mt-3 d-flex flex-wrap gap-2">
                    <button className="btn-main-outline-light px-5 py-4 bero-btn">Apply Now</button>
                <button className="btn-danger px-5 py-4">Download Syllubus</button>
               
            </div>
                    
                </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5">
                <div className="course-hero-right p-lg-5 p-3">
                    <BookDemoCard/>
                </div>
            </div>
        </div>
        <div className="course-details container  p-lg-5 p-3">
            <h1 className="text-center text-white fs-3 mb-4">{courseData.courseName} Course Details</h1>
                <div className="row">
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-gray3 rounded-3 py-3 border-b mb-3 shake-card">
                   <i class="bi bi-calendar3 fs-1 text-green"></i>
                        <h1 className="fs-5 text-main-danger">
                             Next Batch Starting </h1>
                                                 
                        <h1 className="fs-4 text-white">{courseData.BatchStarting}</h1>
                    </div>
                   </div>
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-gray3 rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-stopwatch-fill fs-1 text-yellow"></i>
                        <h1 className="fs-5 text-main-danger">Course Duration</h1>
                        <h1 className="fs-4 text-white">{courseData.courseDuration}</h1>
                    </div>
                   </div>
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-gray3 rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-wallet-fill fs-1 text-main-danger"></i>
                        <h1 className="fs-5 text-main-danger">Job Min Salary</h1>
                        <h1 className="fs-4 text-white">{courseData.minSalary}</h1>
                    </div>
                   </div>
                </div>
            </div>
        {/* <div className="row">
                <div className="col-md-6 offset-3">
                    <img src={courseData.courseImage} alt={courseData.courseName} className="w-100" />
                </div>
            </div> */}
        {/* <HeroRegister/> */}
    </div>

    
      <Module modules={courseData.modules} name={courseData.courseName}/>
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
      <CourseCertificate/>
      <LandDreamJob/>

    <Companies/>

    <Adwantages/>
    <YoutubeVideos/>
    <FaqSection  faq={courseData.faqs}/>
    <Feedback/>
    </section>
  )
}

export default CoursePageEngine
