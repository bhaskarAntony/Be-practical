import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Gallery from './pages/Gallery'
import Events from './components/Events'
import ContactPage from './components/ContactPage'
import ElitePage from './pages/ElitePage'
import RegistrationPage from './components/RegistrationPage'
import BookDemo from './components/BookDemo'
import ScrollToTopButton from './components/ScrollToTopButton'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react'
import ScrollProgressBar from './Extra/ScrollProgressbar'
import Progressbar from './Extra/Progressbar'
import AllTestimomials from './pages/AllTestinomials'
import PageLoader from './Modals/PageLoader'
import CoursePageEngine from './pages/CoursePageEngine'
import AllCourses from './components/allCourses/AllCourses'
import BlogsPage from './pages/BlogsPage/BlogsPage'
import PageScrollToTop from './Extra/PageScrollToTop'
import AboutPage from './pages/About/AboutPage'
import Discount from '../src/Extra/Discount/Discount'
import QuizModal from './components/QuizModal'
import BlogsView from './pages/BlogsPage/BlogsView'
import BottomNavigation from './components/bottom nav/BottomNavigation '
import CustomCursor from './Extra/cursor/CustomCursor'
import CourseMainEngine from './pages/CourseMainEngine'
import GoogleSignIn from './js/GoogleSignIn'
import TawkToWidget from './chat/TawkToWidget'
import ZohoChat from './chat/ZohoChat'
import { ToastContainer } from 'react-bootstrap'
import Whatsapp from './chat/Whatsapp'
import C1 from './components/C1'
import axios from 'axios'
// https://be-practical.com/?utm_source=facebook&utm_medium=social&utm_campaign=summer_promo




function App() {
  const [allCourses, setAllCourses] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); 
   


  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const openRegistrationModal = () => {
    setShowRegistrationModal(true);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  useEffect(() => {
    // Function to open the registration modal
    const openModal = () => {
      openRegistrationModal();
    };

    // Open the modal every 2 minutes
    const intervalId = setInterval(openModal, 120000); // 120,000 milliseconds = 2 minutes

    return () => clearInterval(intervalId);

  
  }, []);
  useEffect(()=>{
    const fetchAllCourses = async()=>{
      const response = await axios.get('http://localhost:3300/api/allcourses')
      setAllCourses(response.data.courses)
      console.log(response.data.courses)
    }
    fetchAllCourses()
  },[])





  return (
    <div>
       {
       loading ? (
        // <PageLoader/>
        null
      ) : (
          <>
     <TawkToWidget/>
     {/* <ZohoChat/> */}
     {/* <Whatsapp/> */}
     <ToastContainer />
    
        {/* <CustomCursor/> */}
      <ScrollProgressBar/>
      <Progressbar/>
        <BrowserRouter>
       
        <PageScrollToTop/>
        <Header/>
        
        {/* <BottomNavigation/> */}
        {/* <Discount/> */}
        <Routes>

          
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/blogs' element={<BlogsPage/>}/>
        <Route path='/contact-us' element={<ContactPage/>}/>
        <Route path='/about-us-2' element={<AboutPage/>}/>
        <Route path='/landingpage' element={<ElitePage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/book-demo' element={<BookDemo/>}/>
        <Route path='/all-testinomials' element={<AllTestimomials/>}/>
        <Route path='/course/:course/:id' element={<CoursePageEngine/>}/>
        {
          allCourses.map((item, index)=>(
            <Route path={`/${item.seo.canonical_url}/:id`} element={<CourseMainEngine/>}/>
          ))
        }
        <Route path='/all-courses' element={<AllCourses/>}/>
        <Route path='/discount/quiz' element={<QuizModal/>}/>
        <Route path='/Blog/read/:id' element={<BlogsView/>}/>
        <Route path='/chat' element={<TawkToWidget/>}/>
        </Routes>
      <Footer/>
        </BrowserRouter>
        <ScrollToTopButton/>
          </>
      )}
    </div>
  )
}

export default App
