import React, { useState } from 'react';

const Admintable = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 35 }
  ]);

  // Filter data based on search term
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to handle delete operation
  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="container-fluid text-white p-0 m-0" style={{ height: '100%', width: '100%', backgroundColor: '#A7BEAE' }}>
      <div className="row d-flex p-0 m-0 justify-content-center" style={{  width: '100%' }}>
        <div className="col-lg-5">
          <input
            type="text"
            className="form-control "
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ marginBottom: '50px',marginTop:'20px' }} 
          />
        </div>
      </div>
      <div className="row d-flex p-0 m-0 justify-content-center " style={{width:'100%'}}>
        <div className="col-lg-8 " style={{backgroundColor:'#E7E8C9'}}>
          <table className="table table-striped ">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
                <th>Action1</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index)=> (
                <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#A1BE95' : '#D3C5E5' }}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className="btn btn-primary rounded-pill mr-lg-2">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger rounded-pill"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admintable;
