import React from 'react'
import '../styles/gallery.css'
import ImageGallery from '../components/GalleryImages';
import StudentsPlaced from '../components/StudentsPlaced';
import YoutubeVideos from '../components/YoutubeVideos'
import galleryimage from '../images/gallery.svg'
import Feedback from '../components/Feedback';

const imagesData = [
    {
      url: "https://api.bepracticals.com/uploads/cp1_b21ad6ea0d.jpg",
      title:"Image 1",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
    },
    {
      url: "https://api.bepracticals.com/uploads/cp2_0268a5ba66.jpg",
      title:"Image 1",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
    },
    {
        url: "https://api.bepracticals.com/uploads/cp2_0268a5ba66.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp4_69ef0b7978.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp4_69ef0b7978.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp5_255a6f39a2.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "  
      },
      {
        url: "https://api.bepracticals.com/uploads/cp6_5dfc2c55ab.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp7_cd890a684f.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp7_cd890a684f.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp9_35ed0d3a0c.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp10_c86328ff12.png",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp11_e6b31fcc0b.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp11_e6b31fcc0b.jpg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp13_f0b5d4f67a.jpeg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
      {
        url: "https://api.bepracticals.com/uploads/cp14_b7bc56b4ff.jpeg",
        title:"Image 1",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
      },
  ];

function Gallery() {
  return (
    <div>
      <div className="gallery-hero bg-blur py-5">
        <h1 className='heading text-center text-900 '>Gallery</h1>
        <p className="fs-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Minima, exercitationem.</p>
      </div>
      <ImageGallery images={imagesData}/>
      <YoutubeVideos/>
      <Feedback/>
    </div>
  )
}

export default Gallery
