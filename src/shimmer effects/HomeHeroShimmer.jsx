import React from 'react'
import { Shimmer } from 'react-shimmer'

function HomeHeroShimmer() {
  return (
    <div className="hero-text p-lg-5 p-md-3 p-3">
      <h1 className="card-heading text-main-2 text-start">
        <Shimmer width={200} height={30} />
      </h1>
      <h1 className="heading text-black text-900 text-start">
        <Shimmer width={200} height={30} />
      </h1>
      <p className="text-black heading-subtitle my-4 text-start">
        <Shimmer width={300} height={20} />
      </p>
      <div className="carousel-footer w-100 d-flex flex-wrap">
        <button className='btn-main-outline-dark m-2 hero-btn py-3'>
          <Shimmer width={150} height={40} />
        </button>
        <button className='btn-danger m-2 hero-btn py-3'>
          <Shimmer width={250} height={40} />
        </button>
      </div>
    </div>
  )
}

export default HomeHeroShimmer
