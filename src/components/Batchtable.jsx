import React from 'react'
import '../styles/batchTable.css'

function Batchtable() {
  return (
    <section className='bacthTable'>
        <h1 className="banner-heading text-white">Choose your Batch</h1>
     <div className="container">
     <table class="table text-center">
  <thead>
    <tr className='table-head'>
      <th scope="col">Features</th>
      <th scope="col">Standard Batch</th>
      <th scope="col">Elite Batch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='bg-gold'>Placement Assistance</th>
      <td>5 + 2 months</td>
      <td>unlimited</td>
    </tr>
    <tr>
      <th scope="row" className='bg-gold'>DSA</th>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
    </tr>
    <tr>
    <th scope="row" className='bg-gold'>DSA (Exclusive Problems)</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
    </tr>
    <tr>
    <th scope="row" className='bg-gold'>Softskills</th>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
    </tr>
    <tr>
         <th scope="row" className='bg-gold'>Internship</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
    </tr>
    <tr>
    <th scope="row" className='bg-gold'>Placement ready Program</th>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
    </tr>
    <tr>
    <th scope="row" className='bg-gold'>Job Guaranteed</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill"></i></td>
    </tr>
    <tr>
    <th scope="row" className='bg-gold'>Refund</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill"></i></td>
      <td><small>if not placed (50% of course fees)</small></td>
    </tr>
    <tr>
    <th scope="row" className='bg-gold'>Add-On's</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill"></i></td>
      <td><small>(AWS, DevOps tools(Jenkins, Git) <br /> Starting with Python)</small></td>
    </tr>
  </tbody>
</table>
     </div>
    </section>
  )
}

export default Batchtable
