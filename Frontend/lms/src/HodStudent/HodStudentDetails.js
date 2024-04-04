import React, { useState } from 'react';
import HodStudentMap from './HodStudentMap';

const HodStudentDetails = () => {
 
    const studentdetails=[
        {
            
            img:'https://mdbootstrap.com/img/new/avatars/8.jpg',
            name:'John Doe',
            email:'210301120999@cutm.ac.in',
            id:1,
            phone:457475748957,
            batch:'2078-98',
            section:"A",
            address:"shdhdg"
        },
        {
            img:'https://mdbootstrap.com/img/new/avatars/6.jpg',
            name:'jhaskjhckj',
            email:'210301120989@cutm.ac.in',
            id:3,
            phone:457475748957,
            batch:'2078-98',
            section:"A",
            address:"shdhdg"
        },
        {
            img:'https://mdbootstrap.com/img/new/avatars/7.jpg',
            name:'jhaskjhckj',
            email:'210301120999@cutm.ac.in',
            id:2,
            phone:457475748957,
            section:"A",
            batch:'2078-98',
            address:"shdhdg"
        }
    ];
    const[name,setName]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const[img,setimage]=useState('');
    const[section,setsection]=useState('');
    const[batch,setbatch]=useState('');
    const[address,setaddress]=useState('');
    const [allvalue,setAllvalue]=useState('d-block');
    const [viewdetail,setViewDetail]=useState('d-none');
  

  return (
    <div className='p-lg-4 p-0 text-white bg-dark' style={{ height: '100vh' }}>
        <div className={allvalue}>
      <table className="table align-middle mb-0 bg-dark text-white" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>Contact No.</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentdetails.map((detail, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={detail.img}
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{detail.name}</p>
                    <p className="text-muted mb-0">{detail.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{detail.batch}</p>
                <p className="text-muted mb-0">Section : {detail.section}</p>
              </td>
              <td>
                <span className="badge badge-success rounded-pill d-inline">{detail.phone}</span>
              </td>
              <td>
                <p className="fw-normal mb-1">{detail.address}</p>
                
              </td>
              <td>
                <button type="button" className="btn mx-1 btn-sm btn-rounded btn-outline-warning" onClick={()=>{
                    setAllvalue('d-none');
                    setViewDetail('d-block');
                    setName(detail.name);
                    setbatch(detail.batch);
                    setaddress(detail.address);
                    setemail(detail.email);
                    setimage(detail.img);
                    setsection(detail.section);
                    setphone(detail.phone);
                }}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className={viewdetail} >
      <button className='btn' onClick={()=>{
        setAllvalue('d-block');
        setViewDetail('d-none');
      }}>
      <i className="fa-solid fa-arrow-left mb-3" style={{ color: 'red' }}></i>
    </button>
      <div className='overflow-auto text-dark d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
        
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center ">
                    <img src={img} alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h4>{name}</h4>
                      <div className='d-flex flex-row justify-items-center'>
                      <p className=" mb-1">Batch : </p><p>{batch} CSE-{section}</p>
                      </div>
                      <p className=" font-size-sm">Email : {email}</p>
                      <p className=" font-size-sm">Contact : {phone}</p>
                      <p className=" font-size-sm">Address : {address}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">SUBJECT PROGRESSION</i></h6>
                    <small>C</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Python</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Data Structure</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Java</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>React</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Spring Boot</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Android Development</small>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div className="progress-bar bg-dark" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
      </div>


    </div>
  );
}

export default HodStudentDetails;
