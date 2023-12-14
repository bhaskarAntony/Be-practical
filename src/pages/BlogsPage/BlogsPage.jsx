import React from 'react'
import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import BookDemoCard from '../../components/BookDemoCard';
import { BlogsApi } from '../../Data/DataFetcher';
import ReadMore from '../../Extra/ReadMore';

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
        dots: true,
        infinite: true,
        // speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className='overflow-hidden'>
            <div className="blogs-hero container-fluid">
                <Slider {...settings}>
                    {BlogsData.map((item, index) => (
                        <div key={index} className="slider-item">
                            <div className="row  align-items-center">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="blogs-left p-lg-5 p-3">
                                        
                                            <p className="fs-5 tag p-2 text-white rounded-2"> #{item.tag}</p>
                                        <h1 className="heading text-900">{item.title}</h1>
                                        <p className="subtitle"><ReadMore text={item.subtitle} maxLength={100}/></p>
                                            <div className="d-flex flex-wrap gap-2">
                                            <p className="fs-5"> <i className="bi bi-calendar3 text-yellow mx-2"></i> {new Date(item.Date).toLocaleTimeString()}</p>
                                    <p className="fs-5"><i className="bi bi-alarm text-green mx-2"></i>{new Date(item.Date).toDateString()}</p>

                                            </div>
                                        {/* Add other content for the left side */}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="blogs-right p-lg-5 p-3">
                                        <img src={item.image} alt={item.title} className='w-100 rounded-5 border-a p-2' />
                                        {/* Add other content for the right side */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="all-blogs p-lg-5 py-1 p-2">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="blogs-all-left">
                            {
                                BlogsData.map((item, index)=>(
                                    <div className="big-blog-card border rounded-5 p-3 bg-white mb-3">
                                        <div className="row">
                                            <div className="col-12 col-md-4 col-lg-5 d-flex align-items-center">
                                                <img src={item.image} alt="blog" className="w-100 rounded-3" />
                                            </div>
                                            <div className="col-12 col-md-8 col-lg-7">
                                                <p className="fs-5 text-main-danger">{item.tag}</p>
                                                <h1 className="fs-2 text-900">{item.title}</h1>
                                                <p className="subtitle"><ReadMore text={item.subtitle} maxLength={100}/></p>
                                                <div className="d-flex flex-wrap gap-2">
                                            <p className="fs-5"><i class="bi bi-calendar3 text-yellow mx-2"></i>  {new Date(item.Date).toDateString()}</p>
                                                <p className="fs-5"><i class="bi bi-alarm text-green mx-2"></i> {new Date(item.Date).toLocaleTimeString()}</p>
                                            </div>
                                           <div className="text-end">
                                           <Link to={`/Blog/read/${item._id}`} className='text-main-danger fs-4'>Read Blog</Link>
                                           </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                    <div className="blog-sticky-card p-lg-2 p-4">
                    <BookDemoCard/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogsPage
