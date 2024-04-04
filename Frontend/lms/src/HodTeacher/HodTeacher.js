import React from 'react'
import Hodlayout from '../Hodlayout'
import Hodnavbar from '../Hodnavbar'
import HodTeacherbody from './HodTeacherbody'
import HodTeacherMap from './HodTeacherMap'
import HodTeacherDetails from './HodTeacherDetails'

const HodTeacher = () => {
  return (
    <div>
      <Hodlayout>
        <Hodnavbar/>
        {/* <HodTeacherbody/> */}
        {/* <HodTeacherMap/> */}
        <HodTeacherDetails/>
      </Hodlayout>
    </div>
  )
}

export default HodTeacher
