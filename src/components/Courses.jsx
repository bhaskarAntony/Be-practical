import React, { useEffect, useState } from 'react'
import '../styles/courses.css'
import AllCourses from './AllCourses';
import TrendingCourses from './TrendingCourses';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AOS from 'aos';

function Courses() {
    const numberOfSlides = 3; // Replace with the actual number of slides
    useEffect(() => {
      AOS.init(); // Initialize AOS
    }, []);
  return (
    <section className='bg-light'>
        <h3 className="banner-heading" data-aos="fade-up">Your Choice, Our Course</h3>
        <div className="container-md container-lg p-1">
      <Tabs className="courses-container py-3 p-lg-3 p-1 p-md-2">
    <TabList className="custom-tabs">
      <Tab className="custom-tab">Trending Courses</Tab>
      <Tab className="custom-tab">Our Courses</Tab>
    </TabList>

    <TabPanel className=" py-3">
    <TrendingCourses/>
    </TabPanel>
    <TabPanel className="py-3">
      <AllCourses/>
    </TabPanel>
  </Tabs>
    </div>
    </section>
  )
}

export default Courses
