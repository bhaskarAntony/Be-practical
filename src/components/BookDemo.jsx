import React from 'react'
import '../styles/registerPage.css'
import BookDemoCard from './BookDemoCard'

function BookDemo() {
  return (
    <section className='register-page container py-1'>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 offset-3">
          <BookDemoCard/>
        </div>
      </div>
    </section>
  )
}

export default BookDemo
