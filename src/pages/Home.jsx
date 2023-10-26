import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import Training from '../components/Training'
import DialogModel from '../components/DialogModel'
import Webinar from '../components/Webinar';
import ChatWithus from '../components/ChatWithus';
import Companies from '../components/Companies';
import YoutubeVideos from '../components/YoutubeVideos'
import Certificate from '../components/Certificate';
import Feedback from '../components/Feedback';
import Adwantages from '../components/Adwantages';
import Skills from '../components/Skills';
import StudentsPlaced from '../components/StudentsPlaced';
import Courses from '../components/Courses';
import QuizModal from '../components/QuizModal';
import EliteProgram from '../components/EliteProgram';
import Elite from '../components/Elite';
import AllCourses from '../components/AllCourses';
import Funfact from '../components/Funfact';

function Home() {
      // Model open logic
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowModal(true);
    }, 1 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='home p-0 overflow-hidden'>
         <DialogModel show={showModal} onHide={handleCloseModal} />
        <HomeHero/>
        {/* <Stories/> */}
       <div className="spacer mt-5">
        <AllCourses/>
       </div>
       <Skills/>
       <Elite/>
       <EliteProgram/>
        <Training/>
        <Companies/>
        <Webinar/>
        <QuizModal/>
        <Adwantages/>
        <YoutubeVideos/>
        <Certificate/>
        <ChatWithus/>
        {/* <StudentsPlaced/> */}
        <Funfact/>
        <Feedback/>
    </section>
  )
}

export default Home
