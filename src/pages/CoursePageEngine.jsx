import React, { useEffect, useState } from 'react'
import '../styles/coursepage.css'
import Companies from '../components/companies/Companies'
import Adwantages from '../components/advantages/Adwantages'
import YoutubeVideos from '../components/YoutubeVideos'
import Feedback from '../components/Feedback'
import LandDreamJob from '../components/LandDreamJob'
import {useParams } from 'react-router-dom'
import axios from 'axios'
import FaqSection from '../components/FaqSection'
import Module from '../components/Module'
import Languages from '../components/Languages'
import CourseCard from '../components/CourseCard'
import Loading from '../Modals/Loading'
import CourseCertificate from '../components/CourseCertificate'
import BookDemoCard from '../components/BookDemoCard'
import Start from '../components/Start'
import CourseOffering from '../components/Offering/CourseOffering'
import Benifits from '../components/Benifits/Benifits'
import { Helmet } from 'react-helmet'
import { Modal, Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import DownloadModal from '../components/Brocher/DownloadModal'
import { useCourseContext } from '../context/CourseContext'

function CoursePageEngine() {
  const {selectedSubCourseId, selectedCourseId} = useCourseContext()
  const courseId = localStorage.getItem('selectedCourseId');
  const SubCourseId = localStorage.getItem('selectedSubCourseId');
    const [courseData, setCourseData] = useState(null);
          // Another useState call
          const [showModal, setShowModal] = useState(false);
          const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            course: 'MERN', // Default course
          });
  // const { id, courseId } = useParams(); 
    useEffect(() => {
        // Define the API URL where you want to fetch the course data
        const apiUrl = `https://comfortable-boot-fly.cyclic.app/api/allcourses/${courseId}/subcourses/${SubCourseId}`; // Replace with your actual API endpoint
    
        axios
          .get(apiUrl)
          .then((response) => {
            // Handle the response data, which should contain your course information
            setCourseData(response.data);
            console.log(response.data)
          })
          .catch((error) => {
            // Handle any errors, such as a 404 if the course with the specified ID doesn't exist
            console.error(error);
          });
      }, [SubCourseId]);
      useEffect(() => {
        if (courseData) {
          // document.title = courseData.courseName;
        }
      }, [courseData]);
      if (courseData === null) {
        // You can display a loading message here while the data is being fetched
        return <Loading/>;
      }

      const messageContent = `
        *Hello!*
        _This message is from the software development training program._
        *${courseData.courseName}*
        *${courseData.courseDescription}*
        *New Batch Starting:* ${courseData.BatchStarting}
        
        [Click Here to Explore This Course](https://be-practical.com)
        
        *You may also like these courses:*
        - Mern Fullstack Development
        - Python Fullstack Development
        - Java Fullstack Development
        - Cloud Computing
        - Digital Marketing
        - Job Oriented Courses
        - ...and more
        
        [Explore More Courses](https://be-practical.com)
        
        _Thank You_
      `;
      const ToWhatsapp = () => {
      const encodedMessage = encodeURIComponent(messageContent);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
      }  
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    

      const openModal = () => setShowModal(true);
      const handleClose = () => setShowModal(false);
    

    
      const downloadBrochure = () => {
        setShowModal(true);
      };
    
    

  return (
    <section className='overflow-hidden'>
     <Helmet>
        <title>{courseData.seo?.title}</title>
        <meta name="description" content={courseData.seo?.description} />
      </Helmet>
    <div className="course-hero container-fluid p-0 py-3 bg-texture bg-gray2 border-b ">
        <div className="row align-items-center">
            <div className="col-12 col-md-7 col-lg-7">
                <div className="course-hero-left p-lg-5 p-3">
                    <p className="text-main-danger fs-5 text-900">100% Placement Course</p>
                    <h1 className="display-3 text-900 text-white">{courseData.courseName}</h1>
                    <p className="fs-5 text-secondary my-4">{courseData.heroSubtitle}</p>
                    <div className="course-ratings mt-3 d-flex align-items-center gap-2 flex-wrap">
                        <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">rating <i class="bi bi-star-half text-yellow"></i><b> 4.5</b></small></p>
                     
                        <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">Batch Start: <b>{courseData.details.admisionStart}</b></small></p>
                        <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">Mode: <b>Online & Offline</b></small></p>
                    </div>
                  <div className="course-points">
                  <div className='fs-6 text-white' dangerouslySetInnerHTML={{ __html: courseData.coursePoints}} />
                  </div>
                  <div className="row align-items-center mt-5">
                        <div className="col-12 col-md-7 mb-2">
                        <button className="btn-prm  py-3  hero-btn  align-items-center gap-2 justify-content-center w-100"><span className='fs-5 fw-bold' onClick={openModal}>Apply Now</span> <br /> <small className='btn-text'>Hurry! 200 People have already applied</small></button>
                        </div>
                        <div className="col-12 col-md-5 mb-2">
                        <button className="btn--sec-lg bg-white text-dark py-3 hero-btn  align-items-center gap-2 justify-content-center w-100" onClick={downloadBrochure}><span className='fs-5 fw-bold'>Download Syllubus</span><br /><small className='btn-text'>Free Matierial <i class="bi bi-file-earmark-arrow-down-fill"></i></small></button>

           
                     
                          </div>
                      </div>
                </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5">
                <div className="course-hero-right p-lg-5 p-3">
                    <BookDemoCard/>
                </div>
            </div>
        </div>
        {/* <div className="course-details container  p-lg-5 p-3">
            <h1 className="text-center text-white fs-3 mb-4">{courseData.courseName} Course Details</h1>
                <div className="row">
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-gray3 rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-calendar3 fs-1 text-green"></i>
                        <h1 className="fs-5 text-main-danger">
                             Next Batch Starting </h1>
                                                 
                        <h1 className="fs-4 text-white d-flex align-items-center  justify-content-center gap-2"><span className="online-dot"></span>{courseData.BatchStarting}</h1>
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
            </div> */}
       <div className="text-center">
       <span className="fs-4 text-white text-center w-100">Share Course On</span>
       </div>
            <div className="share-course d-flex gap-3 py-3 flex-wrap align-items-center justify-content-center">
              <button className="share-btn whatsapp-share" onClick={ToWhatsapp}><i className='bi bi-whatsapp'></i>Whatsapp</button>
             
            </div>
    </div>

    
      <Module modules={courseData.modules} name={courseData.courseName} description={courseData.courseDescription}/>
      {/* <section className='main-lan-container container-fluid bg-gray2 bg-texture rounded-0 py-5' id="languages">
            <div className="lan-inner-container container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <Languages languages={courseData.programmingLanguages} course={courseData.courseName}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center ">
                       
                    </div>
                </div>
            </div>
      </section> */}
        <Languages languages={courseData.programmingLanguages} course={courseData.courseName}/>
      <CourseCertificate data={courseData}/>
      <LandDreamJob/>

    <Companies/>
    <CourseOffering/>
    <Benifits data={courseData}/>
    <Adwantages/>
    <YoutubeVideos/>
    <FaqSection  faq={courseData.faqs}/>
    <Feedback/>
    <DownloadModal showModal={showModal} hideModal={handleClose} link={courseData.BrocherLink}/>
    </section>
  )
}

export default CoursePageEngine
