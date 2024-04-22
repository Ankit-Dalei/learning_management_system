import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    phone: '',
    university_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, university_name, email, password } = data;
    const formData = { name, phone, university_name, email, password };
    console.log(formData); // You can do something with the form data, like sending it to an API
  };

  return (
    <div className=" p-0 m-0 d-flex justify-content-center" style={{height:'90%',width:'100%'}}>
      <div className="row d-flex justify-content-center ">
        
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add Management</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">University name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="university_name"
                    name="university_name"
                    value={data.university_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Form;
