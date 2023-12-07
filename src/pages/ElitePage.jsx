import React from 'react'
import '../styles/elite-page.css'
import Elite from '../components/Elite'
import Batchtable from '../components/Batchtable'
import EliteProgram from '../components/EliteProgram'
import { useState } from 'react'
import { useEffect } from 'react'
import { CoursePage } from '../Data/DataFetcher'
import Aos from 'aos'
import { Link } from 'react-router-dom'
import EliteCarousel from '../components/EliteCarousel/EliteCarousel'
import ReadMore from '../Extra/ReadMore'
import BookDemoCard from '../components/BookDemoCard'

const eliteCourses =[
    {
        title:"MERN FullStack",
        description:""
    },
     {
        title:"MERN FullStack",
        description:""
    }
]
function ElitePage() {
  const [loading, setLoading] = useState(true)
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
<>

   <div className="elite-main-page overflow-hidden">
     <div className='elite-page container-fluid p-0'>
     <div className="elite-hero py-5 p-3 bg-texture">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-10">
        <div className="elite-text">
          <span className="fs-3 elite-yellow">100% Placement Program</span>
          <h1 className="elite-heading elite-g-text text-900 p-0 m-0 my-4">Make Your Success<br />Journy with Our Elite Program</h1>
          <h1 className="fs-1 text-white">Get 50% Refund if not Placed</h1>
          <p className="fs-5  text-secondary">Be Practical Conducting Elite Batch for Freshers and working Professionals to make you job ready. where we Guarantee Our Placements.</p>
          <button className="btn border-0 fs-4 p-3 rounded-5 text-900 bg-gold">Join to Elite Program</button>
      </div>
        </div>
        <div className="col-12 col-sm-12 col-md-2">
          <img src="" alt="" />
        </div>
      </div>
     </div>
    </div>
    <div className="d-flex justify-content-center">
  <div className="elite-devider"></div>
  </div>

    {/* elite  */}
   <div className="elite-page-features text-center container">
    <h4 className="fs-3 elite-yellow">Featurs</h4>
    <h1 className="heading text-900 elite-g-text">FEATURES OF ELITE</h1>
   <div className="row mt-5">
          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-page-card elite-c1">
            <i class="bi bi-cash-stack fs-1 elite-g-text"></i>
              <h4 className='elite-page-card-text-main'>Refund</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-page-card elite-c2">
            <i class="bi bi-code-slash fs-1 elite-g-text"></i>
              <h4 className='fs-4'>DSA</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-page-card  elite-c3">
            <i class="bi bi-stars fs-1 elite-g-text"></i>
              <h4 >Softskills</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-page-card  elite-c4">
            <i class="bi bi-person-check-fill fs-1 elite-g-text"></i>
              <h4>Internship</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-page-card  elite-c5">
            <i class="bi bi-building-fill-up fs-1 elite-g-text"></i>
              <h4>Placemnet Assistant</h4>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2">
            <div className="elite-page-card  elite-c6">
            <i class="bi bi-building-fill-up fs-1 elite-g-text"></i>
              <h4>Add-On's</h4>
            </div>
          </div>
        </div>
   </div>
   {/* <EliteCarousel/> */}
  <div className="d-flex justify-content-center">
  <div className="elite-devider"></div>
  </div>
    <div className="elite-course container rounded-5 p-lg-5 p-2 py-5 bg-dark">
      <h1 className="fs-1 text-center text-900 text-white mb-4">Our Elite <span className="text-main-danger">Courses</span></h1>
        <div className="row overflow-hidden justify-conent-center">
            {
                CourseData.map((item, index)=>(
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="highlight-card">
                    <div className="course-card p-4 text-start border-b text-center">
                      <p className="fs-3  text-900  elite-g-text"> <i class="bi bi-star fs-4"></i>  {item.courseName}</p>
                      <p className="fs-6 text-white">{item.heroSubtitle}</p>
                      {/* <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 border">
                        <small className='text-black text-900'>Duration</small>
                          <p className="fs-6 text-900  text-white">{item.courseDuration}</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 border">
                        <small className='text-black text-900'>Training Mode</small>
                          <p className="fs-6 text-900  text-white">{item.modeOfTraining}</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 border">
                          <small className='text-black text-900'>Enrolled</small>
                          <p className="fs-6 text-900  text-white">{item.enrolledStudents}</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 border mb-sm-2 mb-md-0 mb-lg-0">
                        <small className='text-black text-900'>Adwantages</small>
                          <p className="fs-6 text-900  text-white">HR Sessions</p>
                        </div>
                      </div> */}
                      <Link to={`/course/${item.courseName}/${item._id}`} className=" text-decoration-none"> <button className="btn-danger  elite-course-btn rounded-5 mt-3 w-100">Know More</button></Link>
                    </div>
                    </div>
                   
                  </div>
                ))
            }
        </div>
    </div> 
    <div className="container elite-devider"></div>
    <div className="elite-highlights container p-3  text-center mt-2">
    <h4 className="fs-3 elite-yellow">Featurs</h4>
    <h1 className="heading elite-g-text text-900">ELITE PROGRAM HIGHLIGHTS </h1>
        <div className="row mt-5">
            <div className="col-12 col-md-4 col-lg-4">
               <div className="highlight-card">
               <div className="highlight-card-item">
                <div className="highlight-header">
                <i class="bi bi-check-circle-fill elite-g-text"></i>
                </div>
                   <div className="highlight-body">
                   <h4 className='text-900 elite-g-text fs-3'>100% Job Placement</h4>
                    <p className='fs-6 mt-3'>Looking for a training institute that offers job placement Guarantee? Look no further! Because be practical Started Elite Program where every student get 100% Job placement. Our institute offers comprehensive training programs that equip you with the skills you need to succeed in your career.</p>
                   </div>
                </div>
               </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="highlight-card">
                   <div className="highlight-card-item">
                   <div className="highlight-header">
                    <i class="bi bi-cash elite-g-text"></i>
                    </div>
                   <div className="highlight-body">
                   <h4 className='text-900 elite-g-text fs-3'>50% refund If not Placed</h4>
                    <p className='fs-6 mt-3'>Our Elite Program takes you to various Learning Paths to make you perfect for Industry Ready, If we fail to get you the job, 50% of the paid amount will be refunded.</p>
                   </div>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="highlight-card">
               <div className="highlight-card-item">
               <div className="highlight-header">
                <i class="bi bi-building-fill-check elite-g-text"></i>
                </div>
                  <div className="highlight-body">
                  <h4 className='text-900 elite-g-text fs-3'>Batch Monitored by Company Experts.</h4>
                    <p className='fs-6 mt-3'>This Feature of the program makes you perfect for Job ready because you will be directly monitored by Company experts, where you will get a chance to know what our partnered clients are expecting from freshers so that it will help you restructure your learning skills and make you crack your dream job.</p>
                  </div>
               </div>
                </div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center">
  <div className="elite-devider"></div>
  </div>
 <div className="py-5">
 <Batchtable/>
 <div className="container-fluid py-5">
    <span className="d-block fs-4 elite-yellow text-center">A Mordern and unique style</span>
  <h1 className="heading elite-g-text">Why is it Best</h1>
  
  <div className="row">
    <div className="col-12 col-sm-12 col-md-8">
      <ul className='elite-best'>
        <li className='fs-6 text-white mb-4'>
        <span className="text-main-danger text-900">100% Job Placement:</span> Our Elite Program offers a 100% job Placement, which means that we are committed to getting you placed in a job that matches your skills and expertise.
        </li>
        <li className='fs-6 text-white mb-4'>
        <span className="text-main-danger text-900">100% Job Placement:</span> Our Elite Program offers a 100% job Placement, which means that we are committed to getting you placed in a job that matches your skills and expertise.
        </li>
        <li className='fs-6 text-white mb-4'>
        <span className="text-main-danger text-900"> Comprehensive Training Programs:</span> Our training programs are comprehensive and cover all the skills and knowledge that you need to succeed in your career. We equip you with the latest industry-relevant skills that are in demand in the market.
        </li>
        <li className='fs-6 text-white mb-4'>
        <span className="text-main-danger text-900">Industry Expert Trainers:</span> Our trainers are industry experts who have several years of experience working in their respective fields. They have hands-on experience in working on real-time projects, and they share their knowledge and expertise to help you excel in your career.
        </li>
        <li className='fs-6 text-white mb-4'>
        <span className="text-main-danger text-900">Personalized Attention:</span> We provide personalized attention to each student and ensure that they receive the necessary guidance and support throughout the program. Our batch sizes are limited, which enables us to focus on individual learning needs.
        </li>
        <li className='fs-6 text-white mb-4'>
        <span className="text-main-danger text-900">Partnering with Leading Companies:</span> We have partnered with leading companies in the industry, which gives us access to the latest trends, tools, and technologies. We ensure that our programs are aligned with the requirements of our partners, which increases your chances of getting placed in a job.
        </li>
        <li className='fs-6 text-white mb-4'>
        <span className="text-main-danger text-900">Competitive Pricing:</span> We offer competitive pricing for our Elite Program, which makes it accessible to students from all backgrounds. We believe that quality education should be affordable and accessible to everyone.
        </li>
      </ul>
    </div>
    <div className="col-12 col-sm-12 col-md-4">
      <BookDemoCard/>
    </div>
  </div>
  <p className="fs-5 text-center text-white">
  Overall, Be Practical's Elite Program is the perfect choice for anyone who wants to build a successful career in the IT industry. Our commitment to quality education, personalized attention, and job placement guarantees makes us stand out from the crowd.
  </p>
 </div>
 </div>
   </div>
</>
  )
}

export default ElitePage
