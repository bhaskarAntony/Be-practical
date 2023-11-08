import React from 'react'
import '../styles/registerPage.css'
import BookDemoCard from './BookDemoCard'

function BookDemo() {
  return (
    <section className='register-page container py-1'>
      <div className="row container-xxl m-xxl-auto">
        <div className="col-md-6 offset-md-3">
          <BookDemoCard/>
        </div>
      </div>
    </section>
  )
}

export default BookDemo
