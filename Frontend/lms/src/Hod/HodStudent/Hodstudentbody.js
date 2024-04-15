import React from 'react'
import HodStudentDetails from './HodStudentDetails'
import { Outlet } from 'react-router-dom'

const Hodstudentbody = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center text-light sticky-top'>
      <div className='row d-flex flex-row justify-content-center '>
        <div className='col-lg-8 col-11 container-fluid m-0 p-0 me-lg-2'>
          <input type="search" className='form-control container-fluid' />
        </div>
        <div className='col-lg-2 col-1 container-fluid m-0 p-0'>
        <button className='btn btn-outline-primary '>Search</button>
           </div>
      </div>
      
    </div>
    <div className='container-fluid p-0 m-0 '>
    <Outlet/>
    </div>
    </>
  )
}

export default Hodstudentbody
