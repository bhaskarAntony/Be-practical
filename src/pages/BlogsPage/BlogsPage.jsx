import React from 'react'
import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import BookDemoCard from '../../components/BookDemoCard';

const Blogsdata = [
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    },
    {
        title:"Autumn is a second spring when every leaf is a flower",
        subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despised",
        blog:"",
        image:"https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600",
        tag:"Fullstack",
        time:"May 2, 2023",
        ReadTime:"2 Min"
    }
]

function BlogsPage() {

    const settings = {
        dots: true,
        infinite: true,
        // speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <section className='bg-blur overflow-hidden'>
            <div className="blogs-hero bg-blur container-fluid">
                <Slider {...settings}>
                    {Blogsdata.map((item, index) => (
                        <div key={index} className="slider-item">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="blogs-left p-lg-5 p-3">
                                        
                                            <p className="fs-5 tag p-2 text-white rounded-2"> #{item.tag}</p>
                                        <h1 className="heading text-900">{item.title}</h1>
                                        <p className="subtitle">{item.subtitle}</p>
                                            <div className="d-flex flex-wrap gap-2">
                                            <p className="fs-5"><i class="bi bi-calendar3 text-yellow mx-2"></i> {item.time}</p>
                                                <p className="fs-5"><i class="bi bi-alarm text-green mx-2"></i>{item.time}</p>
                                            </div>
                                        {/* Add other content for the left side */}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="blogs-right p-lg-5 p-3">
                                        <img src={item.image} alt={item.title} className='rounded-5 border-a p-2' />
                                        {/* Add other content for the right side */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="all-blogs p-lg-5 p-2">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="blogs-all-left">
                            {
                                Blogsdata.map((item, index)=>(
                                    <div className="big-blog-card border rounded-5 p-3 bg-white mb-3 py-4">
                                        <div className="row">
                                            <div className="col-12 col-md-4 col-lg-5 d-flex align-items-center">
                                                <img src={item.image} alt="" className="w-100 rounded-3" />
                                            </div>
                                            <div className="col-12 col-md-8 col-lg-7">
                                                <p className="fs-5 text-main-danger">{item.tag}</p>
                                                <h1 className="fs-2 text-900">{item.title}</h1>
                                                <p className="fs-5 text-secondary">{item.subtitle}</p>
                                                <div className="d-flex flex-wrap gap-2">
                                            <p className="fs-5"><i class="bi bi-calendar3 text-yellow mx-2"></i> {item.time}</p>
                                                <p className="fs-5"><i class="bi bi-alarm text-green mx-2"></i>{item.time}</p>
                                            </div>
                                           <div className="text-end">
                                           <Link to="/" className='text-main-danger fs-4'>Read Blog</Link>
                                           </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="all-blogs-right">                               
                                  {
                                    Blogsdata.map((item, index)=>(
                                       <div className="blogs-right-card p-3 bg-white mb-3 border-b rounded-4">
                                         <div className="row">
                                        <div className="col-lg-4 col-sm-4 col-4 col-md-12 d-flex align-items-center" key={index}>
                                        <img src={item.image} alt={item.title} className="w-100 rounded-3 mb-2" />
                                    </div>
                                    <div className="col-lg-8 col-sm-8 col-8 col-md-12">
                                        <p className="fs-6 text-main-danger">{item.tag}</p>
                                        <p className="fs-5">{item.title}</p>
                                        <div className="d-flex flex-wrap gap-2">
                                            <p><i class="bi bi-calendar3 text-yellow mx-1"></i> <small>{item.time}</small></p>
                                                <p><i class="bi bi-alarm text-green mx-1"></i><small>{item.time}</small></p>
                                            </div>
                                    </div>
                                    </div>
                                       </div>
                                    ))
                                  }
                                  <BookDemoCard/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogsPage
