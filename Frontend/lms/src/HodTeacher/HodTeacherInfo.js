import React from 'react'
import { useLocation } from 'react-router-dom'

const HodTeacherInfo = () => {
    const location=useLocation();
    const data=location.state?.data || 'No data Received';
    const[name,img,email,phone,address]=data;
  return (
    <div className='text-white'>
      {name}
    </div>
  )
}

export default HodTeacherInfo
