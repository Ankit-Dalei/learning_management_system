import React from 'react';

const HodTeacherMap = (props) => {
  return (
    
    <div className=' row border rounded-4 border-light m-2 text-light' style={{height:'20rem',width:'32rem'}}>
      
        <img src={props.img} alt="" className='col-5 img-fluid img-thumbnail rounded-4' />
     
      <div className='col-7 mx-2 text-light d-flex justify-content-center  container-fluid row p-4 d-flex flex-column'>
        <h4 className='text-center '>{props.name}</h4>
        <div>CONTACT DETAILS</div>
        <hr />
        <div className='col text-break'>EMAIL : {props.email}</div>
        <div className='col text-break'>Contact : {props.phone}</div>
        <div className='col text-break'>Address : {props.address}</div>
        <div className='row d-flex flex-row container-fluid mx-3' style={{width:'100%'}}>
          <div className='col-5'><button className=' btn btn-sm btn-outline-warning '>view</button></div>
          <div className='col-5'><button className=' btn btn-sm btn-outline-danger'>delete</button></div>
          
        </div>
      </div>
    </div>
  );
}

export default HodTeacherMap;
