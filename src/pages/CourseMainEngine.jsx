import React, { useEffect, useState } from 'react'
import '../styles/coursepage.css'
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
// import CourseCard from '../components/CourseCard'
import Loading from '../Modals/Loading'
import CourseCertificate from '../components/CourseCertificate'
import BookDemoCard from '../components/BookDemoCard'
import Start from '../components/Start'
import CourseOffering from '../components/Offering/CourseOffering'
import Benifits from '../components/Benifits/Benifits'
import CourseCard from '../components/Coursecard/Coursecard'
import { Helmet } from 'react-helmet'
import DownloadModal from '../components/Brocher/DownloadModal'

function CourseMainEngine() {
    const [courseData, setCourseData] = useState(null);
    const [showModal, setShowModal] = useState(false)
  const { id } = useParams(); // Access the id parameter from the URL
  const [activeIndex, setActiveIndex] = useState(null);

  // Move the toggleAccordion function outside the component or declare it with useCallback
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
    useEffect(() => {
        // Define the API URL where you want to fetch the course data
        const apiUrl = `http://localhost:3300/api/allcourses/${id}`; // Replace with your actual API endpoint
        const fetchData = async () => {
          try {
              const response = await axios.get(apiUrl);
              console.log(response.data);
              setCourseData(response.data)
              if (response.data) {
                  document.title = response.data.courseName;
                  // Set course data state here if needed
              }
          } catch (error) {
              console.error('Error fetching course data:', error);
          }
      };
      fetchData();
      }, []);
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
      const sendTelegramMessage = () => {
        const encodedMessage = encodeURIComponent(messageContent);
        window.open(`tg://resolve?text=${encodedMessage}`, '_blank');
      };
      const sendTwitterMessage = () => {
        const encodedMessage = encodeURIComponent(messageContent);
        window.open(`https://twitter.com/intent/tweet?text=${encodedMessage}`, '_blank');
      };
      const openModal = () => setShowModal(true);
      const handleClose = () => setShowModal(false);



     
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
                    <p className="text-main-danger fs-5 text-900">{courseData.tag}</p>
                    <h1 className="heading text-900 text-white">{courseData.courseName}</h1>
                    <p className="fs-5 text-secondary my-4">{courseData.heroSubtitle}</p>
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
                  <div className="course-points">
                  <div className='fs-6 text-white' dangerouslySetInnerHTML={{ __html: courseData.coursePoints}} />
                  </div>
                  <div className="row align-items-center">
                        <div className="col-12 col-md-7 mb-2">
                        <button className=" btn-danger px-5 py-3 rounded-4 hero-btn  align-items-center gap-2 justify-content-center w-100"><span className='fs-5'>Apply Now</span> <br /> <small>Hurry! 200 People have already applied</small></button>
                        </div>
                        <div className="col-12 col-md-5 mb-2">
                        <button className=" btn-danger bg-white text-dark py-3 rounded-4 hero-btn  align-items-center gap-2 justify-content-center w-100" onClick={openModal}><span className='fs-5' >Download Syllubus</span> <br /> <small>Free Matierial <i class="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>
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
        <div className="course-details container  p-lg-5 p-3">
            <h1 className="text-center text-white fs-3 mb-4">{courseData.courseName} Course Details</h1>
                <div className="row">
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-gray3 rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-calendar3 fs-1 text-green"></i>
                        <h1 className="fs-5 text-main-danger">
                             Next Batch Starting </h1>
                                                 
                        <h1 className="fs-4 text-white d-flex align-items-center  justify-content-center gap-2"><span className="online-dot"></span>{courseData.details.admisionStart}</h1>
                    </div>
                   </div>
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-gray3 rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-stopwatch-fill fs-1 text-yellow"></i>
                        <h1 className="fs-5 text-main-danger">Course Duration</h1>
                        <h1 className="fs-4 text-white">{courseData.details.Duration}</h1>
                    </div>
                   </div>
                   <div className="col-12 col-md-4 col-lg-4">
                   <div className="text-center bg-gray3 rounded-3 py-3 border-b mb-3">
                   <i class="bi bi-wallet-fill fs-1 text-main-danger"></i>
                        <h1 className="fs-5 text-main-danger">Job Min Salary</h1>
                        <h1 className="fs-4 text-white">7.5LPA</h1>
                    </div>
                   </div>
                </div>
            </div>
       <div className="text-center">
       <span className="fs-4 text-main-danger text-center w-100">Share Course On</span>
       </div>
            <div className="share-course d-flex gap-3 py-3 flex-wrap align-items-center justify-content-center">
              <button className="share-btn whatsapp-share" onClick={ToWhatsapp}><i className='bi bi-whatsapp'></i>Whatsapp</button>
             
            </div>
    </div>

    
      {/* <Module modules={courseData.modules} name={courseData.courseName} description={courseData.courseDescription}/> */}
      {
  courseData.subCourses?.map((item, index) => {
   return (
    item.modules?.map((module, moduleIndex) => {
      console.log('data', module.title)
      return (
        <div
        className={`faq-item ${activeIndex === moduleIndex ? 'active' : ''} rounded-4 mb-3 `}
        key={moduleIndex}
      >
        <div className="faq-question d-flex align-items-center" onClick={() => toggleAccordion(moduleIndex)}>
          <span className="count p-2 rounded-1 text-900 fs-4 text-green mx-3">{moduleIndex + 1}</span>
          <span className="faq-question-text text-black">
            <span className="fw-bold text-main-danger"> Module{moduleIndex + 1}:</span>
            <span className="text-white text-900">{module.title}</span>
          </span>
          <div className="faq-icon">
            {activeIndex === moduleIndex ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>}
          </div>
        </div>
        {activeIndex === moduleIndex && (
          <div className="faq-answer">
            <h5 className='mt-4 text-main-danger text-decoration-underline'>About</h5>
            <p className="fs-4 text-white">{module.title}</p>
            <h5 className='mt-4 text-main-danger text-decoration-underline'>Topics Covered</h5>
            <p className='fs-5 text-white'>{module.topics}</p>
          </div>
        )}
      </div>
      )
    })
   )
})
}
{/* <CourseCard data={courseData.courses}/> */}
      <section className='main-lan-container container-fluid bg-gray2 bg-texture rounded-0 py-5' id="languages">
            <div className="lan-inner-container container">
                {/* <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                       
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center ">
                       <CourseCard data={courseData} ></CourseCard>
                    </div>
                </div> */}
                <Languages languages={courseData.programmingLanguages} course={courseData.courseName}/>
            </div>
      </section>
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

export default CourseMainEngine
