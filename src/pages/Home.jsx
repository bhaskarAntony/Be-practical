import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import Training from '../components/Training'
import DialogModel from '../components/DialogModel'
import Webinar from '../components/Webinar';
import ChatWithus from '../components/ChatWithus';
import Companies from '../components/companies/Companies';
import YoutubeVideos from '../components/YoutubeVideos'
import Certificate from '../components/Certificate';
import Feedback from '../components/Feedback';
import Adwantages from '../components/advantages/Adwantages';
import Skills from '../components/Skills';
import QuizModal from '../components/QuizModal';
import EliteProgram from '../components/EliteProgram';
import Elite from '../components/Elite';
import Funfact from '../components/Funfact';
import OurCourses from '../components/ourCourses/OurCourses';
import Course from '../components/courses/Course';
// import Prefer from '../components/ourCourses/Prefer/Prefer';
import Hero from '../components/hero/Hero';
import AllCourses from '../components/allCourses/AllCourses';
import MenteesSection from '../components/menteesSection/MenteesSection';

function Home() {
      // Model open logic
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowModal(true);
  //   }, 1 * 60 * 1000); // 5 minutes

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <section className='home p-0 overflow-hidden'>
         <DialogModel show={showModal} onHide={handleCloseModal} />
        {/* <HomeHero/> */}
        <Hero/>
        {/* <Prefer/> */}
        <Companies/>
       <div className="spacer mt-5">
        {/* <COu/> */}
        <AllCourses/>
       </div>
       <Skills/>
       <Elite/>
       <EliteProgram/>
        <Training/>
        {/* <Companies/> */}
        <Webinar/>
        <QuizModal/>
        <Adwantages/>
        <MenteesSection/>
        <YoutubeVideos/>
        <ChatWithus/>
        <Funfact/>
        <Feedback/>
    </section>
  )
}

export default Home
