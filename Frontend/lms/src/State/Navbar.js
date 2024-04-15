import React from 'react'
import { Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='container-fluid m-0 p-0' >
      <nav className='container-fluid navbar bg-dark 'style={{height:'80px'}}>
        <div className="text-white text-uppercase ms-5" >
        
              <h3>Centurion University </h3>

        </div>
        <div className="nav-item">
                
                  <button className="btn btn-danger me-md-2">Logout</button>
                
              </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar
