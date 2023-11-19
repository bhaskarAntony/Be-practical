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
{/* <div className="elite-video">
    <video src={elitevideo} autoPlay muted></video>
  </div> */}
   <div className="elite-main-page overflow-hidden">
     <div className='elite-page container-fluid p-0'>
     <div className="elite-hero py-5 p-3 bg-texsture">
      <div className="elite-text text-center ">
          <h4 className="fs-3 elite-yellow">100% Placement Program</h4>
          <h1 className="heading elite-g-text text-900">MAKE SUCCESS YOUR <br /> JOURNEY WITH OUR ELITE PROGRAM</h1>
          <h1 className="fs-1 text-white">Get 50% Refund if not Placed</h1>
          <p className="fs-3 text-secondary">Be Practical Conducting Elite Batch for Freshers and working Professionals to make you job ready. where we Guarantee Our Placements.</p>
          <button className="elite-btn text-900">Join to ELITE PROGRAM</button>
      </div>
     </div>
    </div>
    <div className="d-flex justify-content-center">
  <div className="elite-devider"></div>
  </div>

    {/* elite  */}
   <div className="elite-page-features text-center container d-sm-block d-md-none">
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
   <EliteCarousel/>
  <div className="d-flex justify-content-center">
  <div className="elite-devider"></div>
  </div>
    {/* <div className="elite-course container py-5">
      <h1 className="fs-1 text-center text-900 text-white mb-4">Our Elite <span className="text-main-danger">Courses</span></h1>
        <div className="row overflow-hidden">
            {
                CourseData.map((item, index)=>(
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="elite-card p-4 text-start border-b">
                      <p className="fs-2 text-black text-900"> <i class="bi bi-stars"></i>  {item.courseName}</p>
                      <p className="fs-5 text-black">{item.heroSubtitle}</p>
                      <div className="row">
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
                      </div>
                      <Link to={`/course/${item.courseName}/${item._id}`} className=" text-decoration-none"> <button className="btn-danger bg-black mt-3 w-100">Know More</button></Link>
                    </div>
                  </div>
                ))
            }
        </div>
    </div> */}
    {/* <div className="container elite-devider"></div> */}
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
 </div>
   </div>
</>
  )
}

export default ElitePage
