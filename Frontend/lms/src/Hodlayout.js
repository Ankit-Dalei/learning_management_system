import React from 'react'

const Hodlayout = (props) => {
  return (
    <>
      <div id="hod" className='overflow-hidden m-0 p-0 container-fluid' >


        <div className='row ' style={{height:'100vh',width:'100%'}}>
          <div className=' col-lg-2  border d-flex justify-content-center container bg-dark m-0 p-0'>          

          
            {props.children[0]}
          </div>
          <div className=' col-lg-10 overflow-auto container-fluid p-lg-0' style={{ height: '100vh' }}>
            <div className='sticky-top text-warning text-center d-flex align-content-center fs-4 container-fluid d-none d-lg-block bg-dark' style={{ height: '7vh' }}>
              <div>  CENTURION UNIVERSITY OF TECHNOLGY AND MANAGEMENT </div>              
             
             
            </div>
            <div className='bg-dark  overflow-auto ' style={{ height: '93vh',width:'100%' }}>
              

              {props.children[1]}
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Hodlayout
