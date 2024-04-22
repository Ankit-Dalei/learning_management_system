import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admintable = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8181/cutm/mangement');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // console.log(data)
// Filter data based on search term
const filteredData = data.filter(item =>
  item.mtName && item.mtName.toLowerCase().includes(search.toLowerCase())
  // console.log(item)
);


const handleDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:8181/cutm/mangement/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete item');
    }
    // If deletion is successful, update the state to reflect the changes
    setData(data.filter(item => item.mtId !== id));
  } catch (error) {
    console.error('Error deleting item:', error);
  }
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
                <th>Email</th>
                <th>Name</th> 
                <th>University name</th>
                <th>Action</th>
                <th>Action1</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index)=> (
                // console.log(item)
                <tr key={item.mtId} style={{ backgroundColor: index % 2 === 0 ? '#A1BE95' : '#D3C5E5' }}>
                  <td>{item.mtId}</td>
                  <td>{item.mtEmail}</td>
                  <td>{item.mtName}</td>
                  <td>{item.universityName}</td>
                  <td>
                  <Link to={`/admin/edit_form/${item.mtId}`}>
                    <button className="btn btn-primary rounded-pill mr-lg-2">Edit</button>
                  </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger rounded-pill"
                      onClick={() => handleDelete(item.mtId)}
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
