import axios from 'axios';
import React from 'react'
import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDemoCard from '../../components/BookDemoCard';

function BlogsView() {
    const { id } = useParams(); // Access the id parameter from the URL
    const [BlogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fancy-mittens-ray.cyclic.app/api/blogs/${id}`);
        setBlogData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once
  return (
    <section className='read-blog container-fluid container-xl'>
       <div className="bg-blur">
       <div className="p-lg-5 p-3 text-center">
        <h1 className="fs-1 text-900">{BlogData.title}</h1>
        </div>
        <div className="row">
            <div className="col-md-6 offset-md-3">
              
                <img src={BlogData.image} alt="" className="w-100" />
            </div>
        </div>
       </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-8">
                <div className="blog-container p-lg-5 p-3">
                  
                <div className='fs-5' dangerouslySetInnerHTML={{ __html: BlogData.content}} />
                </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
            <div className="blog-sticky-card p-lg-2 p-4">
                <BookDemoCard/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BlogsView
