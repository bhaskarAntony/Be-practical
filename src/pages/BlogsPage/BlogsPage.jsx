import React from 'react'
import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import BookDemoCard from '../../components/BookDemoCard';
import { BlogsApi } from '../../Data/DataFetcher';
import ReadMore from '../../Extra/ReadMore';
import { Shimmer } from 'react-shimmer';

function BlogsPage() {
    
    const [loading, setLoading] = useState(true)
    const [BlogsData, setBlogsData] = useState([]);
    useEffect(() => {
        BlogsApi
          .then((data) => {
            setBlogsData(data)
            setLoading(false)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);

    const settings = {
        dots: false,
        infinite: true, 
        // speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className='bg-light overflow-hidden'>
            <div className="blogs-hero container-fluid">
               <div className="container p-3 card mb-3 shadow border-0">
               <Slider {...settings}>
                   {
                    loading?(
                       
                        Array(5).fill(null).map((_, index) => (
                            <div key={index} className="slider-item">
                               <Shimmer width="100%" height={300} className='rounded-3 mb-3'/>
                               <Shimmer width="60%" height={20} className='mb-2'/>
                               <Shimmer width="80%" height={10} className='mb-2'/>
                               <Shimmer width="70%" height={10} className='mb-2'/>
                               <Shimmer width="60%" height={10} className='mb-2'/>
                            </div>
                        ))
                    ):(
                        BlogsData.map((item, index) => (
                            <div key={index} className="slider-item">
                               <img src={item.image} alt="" className="w-100 top-blog-image" />
                               <h1 className="fs-5 fw-bold mt-3">{item.title}</h1>
                               <i className="fs-6">{item.subtitle}</i>
                            </div>
                        ))
                    )
                   }
                </Slider>
               </div>
            </div>
            <div className="all-blogs p-2">
                <div className="container">
                <div className="row">
                            {
                               loading?(
                                Array(6).fill(null).map((_, index)=>(
                                    <div className="col-md-6">
                                    <div className="card shadow border rounded-2 p-2 bg-white mb-3 border-0">
                                      <Shimmer width="100%" height={300} className='mb-3 rounded-3'/>
                                      <Shimmer width="100px" height={15} className='mb-2'/>
                                      <Shimmer width="70%" height={20} className='mb-2'/>
                                      <Shimmer width="80%" height={10} className='mb-2'/>
                                               
                                               <div className="d-flex flex-wrap gap-2 mb-4">
                                           <Shimmer width="100%" height={10}/>
                                           <Shimmer width="100%" height={10} />
                                           </div>
                                          <div className="text-end">
                                        
                                          <Shimmer width="30%" height={20} className='mb-3 rounded-3'/>

                                          </div>
                                   </div>
                                  </div>
                                 ))
                               ):(
                                BlogsData.map((item, index)=>(
                                
                                    <div className="col-md-6">
                                      <div className="card border shadow rounded-2 p-0 bg-white mb-3 overflow-hidden border-0">
                                      <div className="card-header p-0">
                                      <img src={item.image} alt="" className="w-100" />
                                      </div>
                                               <div className="card-body">
                                               <p className="fs-5 text-main-danger">{item.tag}</p>
                                                 <h1 className="fs-4 fw-bold">{item.title}</h1>
                                                 <p className="fs-6 text-secondary"><ReadMore text={item.subtitle} maxLength={100}/></p>
                                                 <div className="d-flex flex-wrap gap-2">
                                             <p className="fs-6 text-secondary"><i class="bi bi-calendar3 text-yellow mx-2"></i>  {new Date(item.Date).toDateString()}</p>
                                                 <p className="fs-6 text-secondary"><i class="bi bi-alarm text-green mx-2"></i> {new Date(item.Date).toLocaleTimeString()}</p>
                                             </div>
                                            <div>
                                            <Link to={`/Blog/read/${item._id}`} className='btn btn-outline-dark fs-5 border px-5 rounded-pill'>Read Blog</Link>
                                            </div>
                                               </div>
                                     </div>
                                    </div>
                                 ))
                               )
                            }
                        </div>
                </div>
            </div>
        </section>
    );
}

export default BlogsPage
