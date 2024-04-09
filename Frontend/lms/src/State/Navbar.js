import React from 'react'

const Navbar = () => {
  return (
    <div className='container-fluid m-0 p-0' >
      <nav className='container-fluid navbar bg-dark ' >
        <div className="text-white " >
        
              <h3>Centurion University</h3>

        </div>
        <div className="nav-item">
                
                  <button className="btn btn-danger me-md-2">Logout</button>
                
              </div>
      </nav>
    </div>
  )
}

export default Navbar
