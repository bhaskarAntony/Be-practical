import React from 'react'
import Slider from 'react-slick';

const imagesData = [
  "https://img.freepik.com/free-photo/diverse-team-adult-students-working-together_74855-1814.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
  "https://img.freepik.com/free-photo/line-coworkers-using-laptops-training-room-class_74855-3568.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
  "https://img.freepik.com/free-photo/pretty-girl-group-young-people-casual-clothes-working-modern-office_146671-16507.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
  'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241234.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais'
]
function CourseCertificate({data}) {
  const Imagesettings = {
    dots: true,
    infinite: true,
    speed:50,
    slidesToShow: 1,
    slidesToScroll: 1,
    // cssEase:'linear',
    // fade:true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <section className='course-cartificate  py-5 ' id='c-certificate'>
        <h1 className="fs-1 text-900 text-center">Get Industry-Recognised <span className="text-main-danger">Certifications</span></h1>
        <p className="fs-3 text-center">Showcase your expertise with our prestigious certification.</p>
        <div className="certificate-img container p-lg-5 bg-dark">
            <div className="row align-items-center">
                <div className="col-md-12 col-12 col-lg-6">
                <Slider {...Imagesettings}>
   {
    imagesData.map((item, index)=>(
   <div className="hero-image d-flex align-items-center justify-content-center h-100">

    <img src={item} alt="hero image" key={index}  className='w-100'/>
   </div>

    ))

   }

   </Slider>
                </div>
                <div className="col-md-12 col-12 col-lg-6">
                  <div className="">
                      <div className="course-certification mb-3">
                        <h3 className="fs-3 mb-2 text-main-danger text-900">Course Certification</h3>
                        <div className='fs-6 text-secondary' dangerouslySetInnerHTML={{ __html: data.certification}} />
                      </div>
                      <div className="course-for mb-3">
                        {/* <h3 className="fs-3 mb-2 text-main-danger text-900">Who This Course For</h3>
                        <div className='fs-6 text-secondary' dangerouslySetInnerHTML={{ __html: data.courseFor}} /> */}
                      </div>
                  </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default CourseCertificate
