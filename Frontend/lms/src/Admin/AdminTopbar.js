import React from 'react'

const AdminTopbar = () => {
  return (
    <div className='row row-cols-2 px-4  p-0 m-0 text-light d-flex justify-content-between align-items-center' style={{height:'10vh',width:'100%',backgroundColor:'black'}}>
        <div className='col'><h4 className='text-warning'>CENTURION UNIVERSITY</h4></div>
        <div className='col d-flex justify-content-end '><button className='btn rounded-pill bg-danger'>Logout</button></div>
    </div>
  )
}

export default AdminTopbar
