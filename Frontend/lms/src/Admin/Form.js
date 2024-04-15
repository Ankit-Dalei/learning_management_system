// import React, { useState } from 'react'
// import {useNavigate} from 'react-router-dom';
// import './Form.css'
// import { Link } from 'react-router-dom';
// import user_icon from './person.png'
// import email_icon from './email.png'
// import password_icon from './password.png'

// const Form = () => {
//   const navigate=useNavigate();
//   const [data,setdata]=useState({
//     name: '',
//     phone: '',
//     role: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) =>{
//     const{name,value}=e.target;
//     setdata({...data,[name]:value});
//   }

//   const handleSubmit = async (e) => {
//     console.log("object")
//     e.preventDefault();
//     const dr={...data}
//     const name=dr.name
//     const phone=dr.phone
//     const role=dr.role
//     const email=dr.email
//     const password=dr.password
//     const Data={name,phone,role,email,password}
//     console.log(Data)
//   };
    
 
//   return (
    
//     <div  >
//     <div className="admin_container my-0 " >
//      <div className='admin_header '>
//         <div className="admin_text">Add Management</div>
//         <div className="admin_underline"></div>
//       </div>
//       <div className="admin_inputs">
//         <div className="admin_input">
//           <img src={user_icon} alt=""/>
//           <input type="text" placeholder="Name" value={data.name} name="name" onChange={handleChange} />
//         </div>
//         <div className="admin_input">
//           <img src={user_icon} alt=""/>
//           <input type="number" placeholder="Phone Number"  value={data.phone} name="phone" onChange={handleChange} />
//         </div>
//         <div className="admin_input">
//           <img src={user_icon} alt=""/>
//           <input type="text" placeholder="Role" name="role"  value={data.role} onChange={handleChange} />
//         </div>
//         <div className="admin_input">
//           <img src={email_icon} alt=""/>
//           <input type="email" placeholder="Email " name="email"  value={data.email} onChange={handleChange}  />
//         </div>
//         <div className="admin_input">
//           <img src={password_icon} alt=""/>
//           <input type="password" placeholder="Password" name="password"  value={data.password} onChange={handleChange}/>
//         </div>
//       </div>
//       <button className='' onClick={handleSubmit}>
//       <div className="admin_submit-container d-flex justify-content-center">
//       <div className="admin_submit">Submit</div>
//       </div>
//       </button>      
//     </div>
//     </div>
    
//   )
// }

// export default Form