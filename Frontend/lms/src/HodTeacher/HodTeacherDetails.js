import React from 'react';
import HodTeacherMap from './HodTeacherMap';

const HodTeacherDetails = () => {
  const teacherdetails = [
    {
      img: 'https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp',
      name: 'name',
      descp: 'anvmnkdnvknkdsnvkndvk',
    },
    {
      img: 'https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp',
      name: 'name',
      descp: 'anvmnkdnvknkdsnvkndvk',
    },
    {
      img: 'https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp',
      name: 'name',
      descp: 'anvmnkdnvknkdsnvkndvk',
    },
    {
        img: 'https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp',
        name: 'name',
        descp: 'anvmnkdnvknkdsnvkndvk',
      },
      {
        img: 'https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp',
        name: 'name',
        descp: 'anvmnkdnvknkdsnvkndvk',
      }
  ];

  return (
    <div className='row row-cols-md-2 row-cols-1 bg-dark d-flex justify-content-evenly p-4 overflow-auto' style={{ height: '100vh', width: '100%' }}>
      {teacherdetails.map((detail, index) => (
        <div key={index} className='col'>
          <HodTeacherMap img={detail.img} name={detail.name} descp={detail.descp} />
        </div>
      ))}
    </div>
  );
}

export default HodTeacherDetails;
