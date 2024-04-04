import React from 'react'
import HodStudentDetails from './HodStudentDetails'

const Hodstudentbody = () => {
  return (
    <div className='container bg-dark text-white overflow-auto' style={{height:'100vh'}}>
      
      <div className='container row mt-3 d-flex justify-content-center' >
        <div className='col-8' >
        <input type="search" placeholder='Search'className=' form-control'/>
        </div>
        <div className='col-2'>
        <button className='btn btn-outline-primary '>Search</button>
        </div>
      </div>
      
      <div>
        <HodStudentDetails/>
      </div>
      
    </div>
  )
}

export default Hodstudentbody
