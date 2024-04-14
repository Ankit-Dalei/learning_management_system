import React from 'react';
import HodTeacherMap from './HodTeacherMap';

const HodTeacherDetails = () => {
  const teacherdetails = [
    {
      img: 'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg',
      name: 'ANKIT DALEI',
      phone:'3989494049',
      email:'kwdkfkjdk@gmail.com',
      address:'csmnscncnn'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_640.jpg',
      name: 'name',
      phone:'3989494049',
      email:'kwdkfkjdk@gmail.com',
      address:'csmnscncnn'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2022/04/06/11/30/girl-7115394_640.jpg',
      name: 'name',
      phone:'3989494049',
      email:'kwdkfkjdk@gmail.com',
      address:'csmnscncnn'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_640.jpg',
        name: 'name',
        phone:'3989494049',
        email:'kwdkfkjdk@gmail.com',
        address:'csmnscncnn'
      },
      {
        img: 'https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_640.jpg',
        name: 'name',
        phone:'3989494049',
        email:'kwdkfkjdk@gmail.com',
        address:'csmnscncnn'
      }
  ];

  return (
    <div className='row row-cols-md-2 row-cols-1 bg-dark d-flex justify-content-evenly  p-1 m-1 container-fluid' style={{ height: '100vh', width: '100%' }}>
      {teacherdetails.map((detail, index) => (
        <div key={index} className='col container-fluid p-0 m-0 '>
          <HodTeacherMap img={detail.img} name={detail.name} email={detail.email} phone={detail.phone} address={detail.address} />
        </div>
      ))}
    </div>
  );
}

export default HodTeacherDetails;
