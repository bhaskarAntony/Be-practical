import React, { useEffect } from 'react';
import '../styles/allcourses.css'
import AOS from 'aos';
import { CoursePage } from '../Data/DataFetcher';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShimmerCard from '../shimmer effects/ShimmerCard';

var courses = [
    {
        id:1,
        name: "Complete Fullstack",
        tag:"Trending",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        ratedStudents: "465",
        rating:"4.5",
        icon: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
        image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        path: "/course-fullstack"
    },
    {
        id:2,
        name: "MERN  Fullstack",
        tag:"Trending",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        ratedStudents: "465",
        rating:"4.5",
        icon: "https://cdn-icons-png.flaticon.com/128/1183/1183669.png",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        path:"/course-mern"
    },
    {
        id:4,
        name: "Cloud Oops",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        ratedStudents: "465",
        rating:"4.5",
        icon: "https://cdn-icons-png.flaticon.com/128/3305/3305673.png",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        path:"/course-cloud-computing"

    },
    {
        id:5,
        name: "Data Science",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        ratedStudents: "465",
        rating:"4.5",
        icon: "https://cdn-icons-png.flaticon.com/128/2756/2756778.png",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        path:"/course-data-science"

    }
]

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
        AOS.init(); // Initialize AOS
      }, []);
    return (
      <div className='container all-courses'>
        <h1 className="banner-heading">Courses We Offering</h1>
      <div className="row flex-wrap d-flex justify-content-center align-items-center">
      {loading ? (
              Array(4)
                .fill(null)
                .map((_, index) => (
                  <div className="col-6 col-md-3 col-lg-3 rounded-2 p-3" key={index}>
                    <div>
                    <ShimmerCard />
                    </div>
                  </div>
                ))
            ):(
              CourseData.map((item, index) => (
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 d-flex justify-content-center">
                <div className="card course-card" data-aos="zoom-in">
                  <div className="course-header">
                    <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-100 rounded-2" />
                  </div>
               <div className="course-card-body p-2">
               <h4 className='card-heading text-900 text-black'>{item.courseName}</h4>
                  <hr />
                  <div className="row">
                  <div className="col-6 p-2 text-center d-flex align-items-center ">
                      <i class="bi bi-clock  mx-2 fs-4"></i>
                      <p>{item.courseDuration}</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-camera-video  mx-2 fs-4"></i>
                      <p>{item.modeOfTraining}</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-mortarboard  mx-2 fs-4"></i>
                      <p>Job Assurance</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-person-lines-fill mx-2 fs-4"></i>
                      <p>HR activities</p>
                      </div>
                  </div>
                  
                  {/* <p><small>{item.trainer}</small></p> */}
                  <div className="course-footer p-2 m-0">
                
                  <div className="mt-4">
                  <Link to={`/course/${item.courseName}/${item._id}`} className="hero-btn-main w-100 text-decoration-none">Learn More</Link>

                
                </div>
                
               </div>
                </div>
                </div>
            </div>
          ))
            )}
      </div>
  </div>
    )
}

export default AllCourses;
