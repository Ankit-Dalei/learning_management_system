import React from 'react'
import './Student.css'
import StudentDash from './StudentDash'

const HeadNavStudent = () => {
  return (
    <>
    <div className="hns_header">
        <div className="hns_h_inner">
            <div className="hnsh_name">
                CENTURION UNIVERSITY
            </div>
            <div className="hnsh_extra"></div>
        </div>
    </div>
    <StudentDash/>
    </>
  )
}

export default HeadNavStudent