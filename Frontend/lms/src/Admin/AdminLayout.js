import React from 'react'
import Navbar from './Navbar'
import AdminTopbar from './AdminTopbar'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
    <div className='overflow-hidden m-0 p-0 container-fluid bg-secondary ' style={{height:'auto',width:'100%',backgroundColor:'black'}}>
       <div className='m-0 p-0  d-flex align-items-center' style={{height:'10vh',width:'100%'}}>
            <AdminTopbar/>
       </div>
       <div className='container-fluid m-0 p-0 ' style={{width:'100%'}}>
            <Navbar/>
       </div>
       <div className='container-fluid  p-0 m-0 overflow-auto ' style={{height:'74vh',width:'100%'}}>
            <Outlet/>
       </div>
       <div className='container-fluid p-0 m-0 ' >
   
      <footer className="container-fluid p-0 m-0  fixed-bottom d-flex justify-content-center align-items-center text-light  text-center" style={{height:'8vh',width:'100%',backgroundColor:'#323a46'}}>
          &copy; 2024 Centurion University. All rights reserved.
        </footer>
    
       </div>
       
    </div>
  )
}

export default AdminLayout
