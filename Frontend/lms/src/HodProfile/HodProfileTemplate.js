import React from 'react'
import Hodlayout from '../Hodlayout'
import Hodnavbar from '../Hodnavbar'
import HodProfile from './HodProfile'

const HodProfileTemplate = () => {
  return (
    <div>
      <Hodlayout>
        <Hodnavbar/>
        <HodProfile/>
      </Hodlayout>
    </div>
  )
}

export default HodProfileTemplate
