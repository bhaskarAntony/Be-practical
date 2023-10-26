import React from 'react'
import '../styles/elite-page.css'
import Elite from '../components/Elite'
import Batchtable from '../components/Batchtable'
import EliteProgram from '../components/EliteProgram'
import { useState } from 'react'
import { useEffect } from 'react'

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
    const [particles, setParticles] = useState([]);

    // Function to create particles
    const createParticle = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 30 + 3; // Adjust the size range as needed
      const opacity = Math.random() * 0.7 + 0.3; // Adjust the opacity range as needed
      const particle = {
        id: Date.now(),
        x,
        y,
        size,
        opacity,
        speedX: (Math.random() - 0.5) * 20,
        speedY: (Math.random() - 0.5) * 20,
      };
      setParticles((prevState) => [...prevState, particle]);
    };
  
    // Function to update particles' positions
    const updateParticles = () => {
      setParticles((prevState) =>
        prevState.map((particle) => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
        }))
      );
    };
  
    // Create particles continuously
    useEffect(() => {
      const interval = setInterval(() => {
        createParticle();
      }, 100); // Adjust the interval as needed
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    // Update particles' positions
    useEffect(() => {
      const animationFrame = requestAnimationFrame(updateParticles);
  
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, [particles]);
  return (
<>
{/* <div className="elite-video">
    <video src={elitevideo} autoPlay muted></video>
  </div> */}
   <div className="elite-main-page overflow-hidden">
     <div className='elite-page container-fluid p-0'>
     <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
            <div className="elite-left py-5">
                <h1>100% Placement Program</h1>
                <h2>Get 50% Refund if not Placed</h2>
                <p className="mt-2 text-white">Be Practical Conducting Elite Batch for Freshers and working Professionals to make you job ready. where we Guarantee Our Placements.
                </p>
               <div className='text-start'>
               <button className="elite-btn btn p-3 px-4 fs-4">Join Now</button>
               </div>
                <div className="elite-banner">
                    <h3>Elite</h3>
                </div>
            </div>
            
        </div>
        {/* <div className="col-12 col-md-6 col-lg-6">
            <div className="elite-right">
                <div className="elite-gold-circle">

                </div>
            </div>
        </div> */}
     </div>
     {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            top: `${particle.y}px`,
            left: `${particle.x}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `rgba(159, 121, 40, ${particle.opacity})`,
          }}
        ></div>
      ))}
    </div>
    <div className="container elite-devider"></div>
    <Elite/>
    <div className="container elite-devider"></div>
    <div className="elite-highlights container p-3">
        <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
                <div className="highlight-card">
                <div className="highlight-header">
                <i class="bi bi-check-circle-fill"></i>
                </div>
                   <div className="highlight-body">
                   <h4 className='fw-bold'>100% Job Placement</h4>
                    <small>Looking for a training institute that offers job placement Guarantee? Look no further! Because be practical Started Elite Program where every student get 100% Job placement. Our institute offers comprehensive training programs that equip you with the skills you need to succeed in your career.</small>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="highlight-card">
                    <div className="highlight-header">
                    <i class="bi bi-cash"></i>
                    </div>
                   <div className="highlight-body">
                   <h4 className='fw-bold'>50% refund If not Placed</h4>
                    <small>Our Elite Program takes you to various Learning Paths to make you perfect for Industry Ready, If we fail to get you the job, 50% of the paid amount will be refunded.</small>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="highlight-card">
                <div className="highlight-header">
                <i class="bi bi-building-fill-check"></i>
                </div>
                  <div className="highlight-body">
                  <h4 className='fw-bold'>Batch Monitored by Company Experts.</h4>
                    <small>This Feature of the program makes you perfect for Job ready because you will be directly monitored by Company experts, where you will get a chance to know what our partnered clients are expecting from freshers so that it will help you restructure your learning skills and make you crack your dream job.</small>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container elite-devider"></div>
    <Batchtable/>
    <div className="container elite-devider"></div>
    <EliteProgram/>
    <div className="elite-course container-fluid">
        <div className="roW">
            {
                eliteCourses.map((item, index)=>{

                })
            }
        </div>
    </div>
   </div>
</>
  )
}

export default ElitePage
