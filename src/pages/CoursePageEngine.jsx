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

function CoursePageEngine() {
    const [courseData, setCourseData] = useState(null);
          // Another useState call
          const [showModal, setShowModal] = useState(false);
          const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            course: 'MERN', // Default course
          });
  const { id } = useParams(); 
    useEffect(() => {
        // Define the API URL where you want to fetch the course data
        const apiUrl = `https://backend-bp-bpdeveloperscommunity.onrender.com/api/course/${id}`; // Replace with your actual API endpoint
    
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
      }, [id]);
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
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('https://backend-bp-bpdeveloperscommunity.onrender.com/course/register', formData);
    
          if (response.status === 200) {
            // Handle successful form submission
            return <Loading/>;
            alert('Brouchere registration successful'); 
            toast.success("registration successful, browcher has been sent to registered email.")
          } else {
            // Handle error
            alert('Brochure registration failed');
            toast.error("registration failed")
          }
        } catch (error) {
          alert(error)
          console.error('Error during brochure registration', error);
        }
      };
    

    
      const downloadBrochure = () => {
        setShowModal(true);
      };
    
    

  return (
    <section className='overflow-hidden'>
     <Helmet>
        <title>{courseData.SEO?.title}</title>
        <meta name="description" content={courseData.SEO?.description} />
      </Helmet>
    <div className="course-hero container-fluid p-0 py-3 bg-texture bg-gray2 border-b ">
        <div className="row align-items-center">
            <div className="col-12 col-md-7 col-lg-7">
                <div className="course-hero-left p-lg-5 p-3">
                    <p className="text-main-danger fs-5 text-900">100% Placement Course</p>
                    <h1 className="display-3 text-900 text-white">{courseData.heroTitle}</h1>
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
                  <div className='fs-6 text-white' dangerouslySetInnerHTML={{ __html: courseData.courseHeroPoints}} />
                  </div>
                  <div className="row align-items-center">
                        <div className="col-12 col-md-7 mb-2">
                        <button className=" btn-danger px-5 py-3 rounded-4 hero-btn  align-items-center gap-2 justify-content-center w-100"><span className='fs-5'>Apply Now</span> <br /> <small>Hurry! 200 People have already applied</small></button>
                        </div>
                        <div className="col-12 col-md-5 mb-2">
                        <button className=" btn-danger bg-white text-dark py-3 rounded-4 hero-btn  align-items-center gap-2 justify-content-center w-100" onClick={downloadBrochure}><span className='fs-5'>Download Syllubus</span> <br /> <small>Free Matierial <i class="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>

                        <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Download free Browcher</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                <div className="r-card p-4 p-lg-5 bg-white rounded-3">
      <form>
        <div className="form-group mt-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
            <label htmlFor="nameInput">Student Name</label>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              required
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="phoneInput"
              name="phone"
              placeholder="+91 000-0000-000"
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneInput">Phone number</label>
          </div>
        </div>
        <div className="form-group form-group-last mt-3">
          <select className="form-control p-3" name="course" onChange={handleChange}>
            <option value="MERN">MERN</option>
            <option value="Python Fullstack">Python Fullstack</option>
            <option value="Java Fullstack">Java Fullstack</option>
            <option value="Data Science">Data Science</option>
            <option value="Cloud Computing">Cloud Computing</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <button type="button" className="btn-danger bg-dark w-100" onClick={handleSubmit}>
            Register for Brochure
          </button>
        </div>
      </form>
    </div>
                </Form>
              </Modal.Body>
            </Modal>
                     
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
            </div>
       <div className="text-center">
       <span className="fs-4 text-main-danger text-center w-100">Share Course On</span>
       </div>
            <div className="share-course d-flex gap-3 py-3 flex-wrap align-items-center justify-content-center">
              <button className="share-btn whatsapp-share" onClick={ToWhatsapp}><i className='bi bi-whatsapp'></i>Whatsapp</button>
             
            </div>
    </div>

    
      <Module modules={courseData.modules} name={courseData.courseName} description={courseData.courseDescription}/>
      <section className='main-lan-container container-fluid bg-gray2 bg-texture rounded-0 py-5' id="languages">
            <div className="lan-inner-container container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <Languages languages={courseData.programmingLanguages} course={courseData.courseName}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center ">
                        <CourseCard data={courseData} ></CourseCard>
                    </div>
                </div>
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
    </section>
  )
}

export default CoursePageEngine
