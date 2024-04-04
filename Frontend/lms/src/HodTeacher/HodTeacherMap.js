import React from 'react';

const HodTeacherMap = (props) => {
  return (
    <div className='card mb-4 text-light bg-dark border border-primary border-2'>
      <div className='row g-0'>
        <div className='col-md-5'>
          <img
            src={props.img}
            alt='Trendy Pants and Shoes'
            className='img-fluid rounded-start'
          />
        </div>
        <div className='col-md-7'>
          <div className='card-body'>
            <h5 className='card-title'>{props.name}</h5>
            <p className='card-text'>{props.descp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HodTeacherMap;
