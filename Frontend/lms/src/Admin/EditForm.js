import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    password: '',
    phone: '',
    university: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to backend
    console.log(formData);
  };

  return (
    <div className="container-fluid p-0 m-0 d-flex justify-content-center align-items-center" style={{ height: '74vh', width: '100%', backgroundColor: '#A7BEAE' }}>
      <div className="row d-flex p-0 m-0 justify-content-center " style={{backgroundColor:'#A7BEAE'}} >
        <div className="col-lg-6 " style={{backgroundColor:'#A1BE95', border: '5px solid #D3C5E5', borderRadius: '10px'}}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter new password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter new phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="university" className="form-label">University Name</label>
              <input
                type="text"
                className="form-control"
                id="university"
                placeholder="Enter new university name"
                name="university"
                value={formData.university}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-center mb-2">
              <button type="submit" className="btn btn-primary rounded-pill" style={{fontSize: '1.2rem',width: '200px'}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
