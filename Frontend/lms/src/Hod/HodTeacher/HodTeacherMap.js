import React from 'react';
import { useNavigate } from 'react-router-dom';

const HodTeacherMap = (props) => {
  const navigate=useNavigate();
  const data=[];
  data.push(props.name);
  data.push(props.img);
  data.push(props.email);
  data.push(props.phone);
  data.push(props.address);
  return (
    <div className='row border rounded-4 border-light  container-fluid p-2 m-0 my-4 text-light ' style={{ width: '100%', maxWidth: '32rem' }}>
      <div className='col-12 col-md-5 mb-3 py-4 mb-md-0 d-flex align-items-center justify-content-center'>
        <img src={props.img} alt="" className='img-fluid img-thumbnail rounded-4' style={{ width: '10rem', height: '10rem', objectFit: 'cover' }} />
      </div>
      <div className='col-12 col-md-7 d-flex flex-column justify-content-center'>
        <h4 className='text-center mb-3'>{props.name}</h4>
        <div>CONTACT DETAILS</div>
        <hr />
        <div className='mb-2'>EMAIL: {props.email}</div>
        <div className='mb-2'>Contact: {props.phone}</div>
        <div className='mb-2'>Address: {props.address}</div>
        <div className='d-flex justify-content-center mt-3'>
          <button className='btn btn-sm btn-outline-warning' onClick={()=>{navigate('/Hod/Teacher/TeacherDetails',{state: {data: data}})}}>View</button>
          <button className='btn btn-sm btn-outline-danger ml-2'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default HodTeacherMap;
