import React from 'react'
import { NavLink } from 'react-router-dom'
import Hodgraphandstats from './Hodgraphandstats'

const Hodbody = () => {
    return (
      <div className='text-white bg-dark  container-fluid'>
        <div className='row row-cols-lg-4 row-cols-1 d-flex justify-content-evenly p-4'>
          
        <div className="col-lg-2 card text-white bg-primary mb-3" style={{ maxWidth: '20rem',minWidth:'15rem',height:'10rem' }}>
          <div className="card-header rounded">STUDENT</div>
          <div className="card-body">
            <h5 className="card-title"> Review the student information and assess their academic progress.</h5>
            
            
          </div>
          
        </div>
        {/* <div className="card text-white bg-secondary mb-3 col" style={{ maxWidth: '20rem' }}>
          <div className="card-header rounded">TEACHERS</div>
          <div className="card-body">
            <h5 className="card-title">Coordinate Teachers</h5>
            <div className="card-text text-white">
                <ul className='navbar-nav'>
                    <li>Add Teachers</li>
                    <li>Delete Teacher</li>
                    <li>Teacher Report</li>
                </ul>
            </div>
            </div>
        </div> */}
        <div className="card text-white col bg-success mb-3" style={{ maxWidth: '20rem',minWidth:'15rem',height:'10rem' }}>
          <div className="card-header rounded">TEACHERS</div>
          <div className="card-body">
            <h5 className="card-title">Review the teachers' information and evaluate their assigned tasks.</h5>
          </div>
        </div>
        <div className="card text-white col bg-danger mb-3" style={{ maxWidth: '20rem',minWidth:'15rem',height:'10rem' }}>
          <div className="card-header rounded">BATCHES & COURSES</div>
          <div className="card-body">
            <h5 className="card-title">Verify the batch information and review the details of the courses offered.</h5>
          </div>
        </div>

        <div className="card text-white col bg-warning mb-3" style={{ maxWidth: '20rem',minWidth:'15rem',height:'10rem' }}>
          <div className="card-header rounded">QUIZ & ASSIGNMENTS</div>
          <div className="card-body">
            <h5 className="card-title">Review the quizzes and assignments.</h5>
          </div>
        </div>
        
       
   </div>
   <Hodgraphandstats/>
      </div>
    )
}

export default Hodbody
