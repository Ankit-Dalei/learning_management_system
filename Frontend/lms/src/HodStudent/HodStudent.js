import React from 'react'
import Hodlayout from '../Hodlayout'
import Hodnavbar from '../Hodnavbar'
import Hodstudentbody from './Hodstudentbody'
import HodStudentDetails from './HodStudentDetails'
import HodStudentView from './HodStudentView'

const HodStudent = () => {
  return (
    <div>
      <Hodlayout>
        <Hodnavbar/>
        <Hodstudentbody/>
        {/* <HodStudentView/>  */}
        {/* <HodStudentDetails/> */}
      </Hodlayout>
    </div>
  )
}

export default HodStudent
