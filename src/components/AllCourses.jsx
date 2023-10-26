import React, { useEffect } from 'react';
import '../styles/allcourses.css'
import AOS from 'aos';
import { CoursePage } from '../Data/DataFetcher';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShimmerCard from '../shimmer effects/ShimmerCard';

// var courses = [
//     {
//         id:1,
//         name: "Complete Fullstack",
//         tag:"Trending",
//         duration: "4.5 Months",
//         trainer: "...",
//         languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
//         ratedStudents: "465",
//         rating:"4.5",
//         icon: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
//         image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         path: "/course-fullstack"
//     },
//     {
//         id:2,
//         name: "MERN  Fullstack",
//         tag:"Trending",
//         duration: "4.5 Months",
//         trainer: "...",
//         languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
//         ratedStudents: "465",
//         rating:"4.5",
//         icon: "https://cdn-icons-png.flaticon.com/128/1183/1183669.png",
//         image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         path:"/course-mern"
//     },
//     {
//         id:4,
//         name: "Cloud Oops",
//         duration: "4.5 Months",
//         trainer: "...",
//         languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
//         ratedStudents: "465",
//         rating:"4.5",
//         icon: "https://cdn-icons-png.flaticon.com/128/3305/3305673.png",
//         image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         path:"/course-cloud-computing"

//     },
//     {
//         id:5,
//         name: "Data Science",
//         duration: "4.5 Months",
//         trainer: "...",
//         languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
//         ratedStudents: "465",
//         rating:"4.5",
//         icon: "https://cdn-icons-png.flaticon.com/128/2756/2756778.png",
//         image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         path:"/course-data-science"

//     }
// ]

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
      <>
      <p className="banner-sub-text text-main-danger w-100 text-center mt-4">Featured Courses</p>
      <h1 className="banner-heading">Pick a Course to Get Started</h1>
      <div className='container-fluid all-courses p-3 py-5'>
      <div className="course-card-container container">
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
                  <div className="go">
                  <i class="bi bi-play-fill fs-4"></i>
                    </div>
                    <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-100 rounded-2" />
                    
                  </div>
               <div className="course-card-body p-2">
                <div className="course-top d-flex justify-content-between align-items-center">
                  <p className="p-large1"><i class="bi bi-bar-chart-fill text-main-danger"></i> Beginers</p>
                  <p className="p-large1"><i class="bi bi-stopwatch text-main-danger"></i> {item.courseDuration}</p>
                </div>
               <h4 className='card-heading text-900 text-black'>{item.courseName}</h4>
               <div className="instructor d-flex gap-2 align-items-center mt-3">
                <img src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/learn-press-profile/14/f96ef85a8c1584c493287f8a3497742e.png" alt="" />
                <p className="p-large1 mt-3">Ganesh</p>
               </div>
                <hr />
                  <div className="course-footer p-2 m-0">
                
                  <div className="mt-4 text-end">
                  <Link to={`/course/${item.courseName}/${item._id}`} className="text-main-danger fs-5 text-end w-100">Learn More</Link>

                
                </div>
                
               </div>
                </div>
                </div>
            </div>
          ))
            )}
      </div>
      </div>
  </div>
  <div className="text-center">
    <button className="btn-danger">View All courses <i class="bi bi-arrow-right"></i></button>
  </div>
      </>
    )
}

export default AllCourses;
