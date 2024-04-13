import React from 'react'
import HodStudentDetails from './HodStudentDetails'
import { Outlet } from 'react-router-dom'

const Hodstudentbody = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center text-light'>
      <div className='row d-flex flex-row justify-content-center'>
        <div className='col-8 container-fluid m-0 p-0 me-2'>
          <input type="search" className='form-control container-fluid' />
        </div>
        <div className='col-2 container-fluid m-0 p-0'>
        <button className='btn btn-outline-primary '>Search</button>
           </div>
      </div>
      
    </div>
    <Outlet/>
    </>
  )
}

export default Hodstudentbody
