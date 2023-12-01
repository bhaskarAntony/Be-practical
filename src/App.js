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

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds (adjust the duration as needed)
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

  const tawkMessengerRef = useRef();

const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
};
const onLoad = () => {
  console.log('onLoad works!');
};



  return (
    <div className='container-fluid m-auto container-xxl p-0'>
       {
       loading ? (
        // <PageLoader/>
        null
      ) : (
          <>
       <TawkMessengerReact
                propertyId="https://tawk.to/chat/6524d9286fcfe87d54b8416a/1hcbv0iqn"
                widgetId="default"
                onLoad={onLoad}
                />
    
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
        <Route path='/contacts' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/elite' element={<ElitePage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/book-demo' element={<BookDemo/>}/>
        <Route path='/all-testinomials' element={<AllTestimomials/>}/>
        <Route path='/course/:course/:id' element={<CoursePageEngine/>}/>
        <Route path='/ourCourses/:ourCourse/:id' element={<CourseMainEngine/>}/>
        <Route path='/all-courses' element={<AllCourses/>}/>
        <Route path='/discount/quiz' element={<QuizModal/>}/>
        <Route path='/Blog/read/:id' element={<BlogsView/>}/>
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
