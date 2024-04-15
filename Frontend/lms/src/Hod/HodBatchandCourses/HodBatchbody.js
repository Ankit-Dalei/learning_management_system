import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const HodBatchbody = () => {
  const location = useLocation();

  return (
    <div className='text-danger d-flex flex-column justify-content-center p-0 px-md-4 px-1 m-0 '>
      <div className=' d-flex flex-row justify-content-center align-items-center p-0 m-0 sticky-top bg-dark p-0 m-0'>
        <Link
          to='/Hod/Batch'
          className={`nav-link col-6 d-flex justify-content-center text-light align-items-center ${
            location.pathname === '/Hod/Batch' ? 'active-link' : ''
          }`}
        >
          BATCHES
        </Link>

        <Link
          to='/Hod/Batch/Courses'
          className={`nav-link col-6 d-flex justify-content-center text-light align-items-center ${
            location.pathname === '/Hod/Batch/Courses' ? 'active-link' : ''
          }`}
        >
          COURSES
        </Link>
      </div>
      <div className='p-0 m-0 mt-lg-4 mt-2'>
        <Outlet />
      </div>
    </div>
  );
};

export default HodBatchbody;
