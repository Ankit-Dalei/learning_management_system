import React from 'react'
import { useLocation } from 'react-router-dom'

const HodTeacherInfo = () => {
    const location=useLocation();
    const data=location.state?.data || 'No data Received';
    const[name,img,email,phone,address]=data;
  return (
    <div className='text-white bg-warning'>
        <div className="container text-white">
            <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body text-dark">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Phone: {phone}</p>
                    <p className="card-text">Address: {address}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HodTeacherInfo
