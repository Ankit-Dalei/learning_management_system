import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const HodOutlet = () => {
  const navigate=useNavigate();
  useEffect(() => {
  const redirect=setTimeout(()=>{
    navigate('/Hod/Home');
  },1);
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default HodOutlet
