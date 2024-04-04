import React from 'react'

const Hodlayout = (props) => {
  return (
    <>
      <div style={{ height: '100vh' }} className='overflow-hidden'>


        <div className='row '>
          <div className=' col-lg-2  border justify-content-center container bg-dark m-0 p-0'>          

          
            {props.children[0]}
          </div>
          <div className=' col-lg-10 overflow-auto container-fluid p-lg-0' style={{ height: '100vh' }}>
            <div className='sticky-top text-warning text-center d-flex align-content-center fs-4 container-fluid d-none d-lg-block bg-dark' style={{ height: '7vh' }}>
              <div>  CENTURION UNIVERSITY OF TECHNOLGY AND MANAGEMENT </div>              
             
             
            </div>
            <div className='bg-dark  overflow-auto ' style={{ height: '93vh' }}>
              

              {props.children[1]}
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Hodlayout
