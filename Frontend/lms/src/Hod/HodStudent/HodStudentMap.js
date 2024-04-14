import React from 'react'
import { useNavigate } from 'react-router-dom'

const HodStudentMap = (props) => {
  const navigate=useNavigate();
  const data=[];
  data.push(props.name);
  data.push(props.img);
  data.push(props.email);
  data.push(props.phone);
  data.push(props.address);
  data.push(props.batch);
  data.push(props.section);
  data.push(props.id);
  return (
 
     
     <tr >
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={props.img}
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{props.name}</p>
                    <p className="text-muted mb-0">{props.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{props.batch}</p>
                <p className="text-muted mb-0">Section : {props.section}</p>
              </td>
              <td>
                <span className="badge badge-success rounded-pill d-inline">{props.phone}</span>
              </td>
              <td>
                <p className="fw-normal mb-1">{props.address}</p>
                
              </td>
              <td>
                <button type="button" className="btn mx-1 btn-sm btn-rounded btn-outline-warning" onClick={()=>{navigate('/Hod/Student/StudentDetails',{state: {data: data}})}}>
                  View
                </button>
              </td>
            </tr>
     
  
  )
}

export default HodStudentMap
