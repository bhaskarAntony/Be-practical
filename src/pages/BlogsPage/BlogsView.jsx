import axios from 'axios';
import React from 'react'
import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDemoCard from '../../components/BookDemoCard';
import { BlogsApi } from '../../Data/DataFetcher';
import ReadMore from '../../Extra/ReadMore';

function BlogsView() {
    const { id } = useParams(); // Access the id parameter from the URL
    const [BlogData, setBlogData] = useState([]);
    const [MoreBlogData, setMoreBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3300/api/blogs/${id}`);
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
  useEffect(()=>{
    BlogsApi
    .then((data) => {
      setMoreBlogData(data)
    })
    .catch((error) => console.error('Error fetching advantages:', error));
  },[])
  return (
    <section className='read-blog container-fluid container-xl'>
  
      
      <div className="container">
    <div className="border p-3 mb-3">
    <img src={BlogData.image} alt="blog" className="w-100" />
      <h1 className="fs-1 fw-bold mt-2">{BlogData.title}</h1>
      <h1 className="fs-6">{BlogData.subtitle}</h1>
    </div>
      <div className='fs-5 main-blog' dangerouslySetInnerHTML={{ __html: BlogData.content}} />
    
      </div>
      <hr />
      <h1 className="fs-1 fw-bold mt-5 mb-3">Related Blogs</h1>
      <div className="moreblogs-container py-5">
        {
          MoreBlogData.map((item, index)=>(
            <div className="card shadow overflow-hidden">
            <div className="card-header p-0">
              <img src={item.image} alt={item.title} className="w-100" />
            </div>
            <div className="card-body">
              <h1 className="fs-5 fw-bold">{item.title}</h1>
              <ReadMore text={item.subtitle} maxLength={200} />
            </div>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default BlogsView
