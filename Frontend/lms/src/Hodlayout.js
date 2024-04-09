import React from 'react'
import {Outlet} from 'react-router-dom'
import Hodnavbar from './Hodnavbar'
const Hodlayout = (props) => {
  return (
    <>
      <div id="hod" className='overflow-hidden m-0 p-0 container-fluid ' >


        <div className='row p-0 m-0 bg-dark' style={{height:'100vh',width:'100%'}}>
          <div className=' col-lg-2  border d-flex justify-content-center container-fluid bg-dark m-0 mb-3 p-0' >          

          
            <Hodnavbar/>
          </div>
          <div className=' col-lg-10 overflow-auto container-fluid p-lg-0' style={{ height: '100vh' }}>
            <div className='sticky-top text-warning text-center d-flex align-content-center fs-4 container-fluid d-none d-lg-block bg-dark' style={{ height: '8vh' }}>
              <div>  CENTURION UNIVERSITY OF TECHNOLGY AND MANAGEMENT </div>              
             
             
            </div>
            <div className='bg-dark  overflow-auto m-0 p-0' style={{ height: '92vh',width:'100%' }}>
              

              <Outlet/>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Hodlayout
