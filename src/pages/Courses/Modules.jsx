import React, { useState } from 'react'
import Module from '../../components/Module';

function Modules({courseData}) {
    const [activeSubCourseIndex, setActiveSubCourseIndex] = useState(null);
    const [activeModuleIndex, setActiveModuleIndex] = useState(null);
    const toggleSubCourseAccordion = (index) => {
        setActiveSubCourseIndex(index === activeSubCourseIndex ? null : index);
    };

    const toggleModuleAccordion = (index) => {
        setActiveModuleIndex(index === activeModuleIndex ? null : index);
    };
  return (
    <div>
          <div className="modules p-lg-5 p-md-3 p-2">
            <h3 className="fs-1 text-900">{courseData.courseName} <span className="text-main-danger">Program Curriculum</span></h3>
        
            <p className="fs-md-5 fs-6 text-secondary" dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>
            <div className="container mt-4">
              {courseData.subCourses?.length > 0 ? (
                courseData.subCourses.map((subCourse, subCourseIndex) => (
                  <div className="card p-3 mt-3" key={subCourseIndex}>
                    <div className="faq-question d-flex align-items-center" onClick={() => toggleSubCourseAccordion(subCourseIndex)}>
                      <span className="faq-question-text text-black">
                        <span className="fw-bold text-main-danger">{subCourse.courseName}</span>
                      </span>
                      <div className="faq-icon ms-auto">
                        {activeSubCourseIndex === subCourseIndex ? (
                          <i className="bi bi-caret-up-fill"></i>
                        ) : (
                          <i className="bi bi-caret-down-fill"></i>
                        )}
                      </div>
                    </div>
                    {activeSubCourseIndex === subCourseIndex && (
                      <div className="mt-3">
                        {subCourse.modules?.map((item, index) => (
                          <div className={`faq-item ${activeModuleIndex === index ? 'active' : ''} rounded-4 mb-3`} key={index}>
                            <div className="faq-question d-flex align-items-center" onClick={() => toggleModuleAccordion(index)}>
                              <span className="count p-2 text-900 fs-5 text-dark mx-3">{index + 1}</span>
                              <span className="faq-question-text text-black">
                                <span className="fw-bold text-main-danger">Module {index + 1}:</span> 
                                <span className="text-dark text-900">{item.title}</span>
                              </span>
                              <div className="faq-icon">
                                {activeModuleIndex === index ? (
                                  <i className="bi bi-caret-up-fill"></i>
                                ) : (
                                  <i className="bi bi-caret-down-fill"></i>
                                )}
                              </div>
                            </div>
                            {activeModuleIndex === index && (
                              <div className="faq-answer">
                                <h5 className="mt-4 text-main-danger text-decoration-underline">About</h5>
                                <p className="fs-5 text-dark">{item.title}</p>
                                <h5 className="mt-4 text-main-danger text-decoration-underline">Topics Covered</h5>
                                <p className="fs-6 text-dark">{item.description}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
               <Module modules={courseData.modules}/>
              )}
            </div>
          </div>
    </div>
  )
}

export default Modules