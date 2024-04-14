import React from 'react'
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
const Hodgraphandstats = () => {
    const bdata=[
        {
            id: 2021,
            year: '2021-25',
            student: 190,
            csestudents: 90
        },
        {
            id: 2022,
            student: 20,
            year: '2022-26',
            csestudents: 93
        },
        {
            id: 2023,
            student: 140,
            year: '2023-27',
            csestudents: 190
        },
        {
            id: 2024,
            student: 10,
            year: '2024-28',
            csestudents: 170
        }
    ]
    return (
        <div className='container-fluid d-flex justify-content-center p-0 m-0 ' style={{height:'100vh',width:'100vw'}}> 

            <div className='d-lg-block d-none '></div>


            <div className='d-flex flex-column my-2 '>
                <div className=' row border border-lg-none border-primary  container-fluid rounded  my-4 my-lg-3' style={{ maxHeight: '25rem', minHeight: '22rem',width:'100%' }}>

                    <div className='col-lg-8 d-flex justify-content-center h-md-50px' style={{minWidth:'80px',maxWidth:'100%',minHeight:'90%'}}>
                        <ResponsiveContainer className='rounded ' >
                            <LineChart data={bdata} >
                                <XAxis dataKey="year" interval={'preserveStartEnd'}/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Line dataKey="csestudents" stroke='red' activeDot={{r:6}}/>
                                <Line dataKey="student" stroke='green' activeDot={{r:6}}/>
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                    <div className='col-lg-4'>
                        <div className='container-fluid'>
                            <h3 className='text-center'>BATCHES</h3>
                            <hr className='bg-primary' style={{ height: '1.5px' }} />
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut harum ipsa nemo ut similique laboriosam minima autem esse praesentium!</div>
                        </div>
                    </div>
                </div>

                <div className='d-lg-block d-none' style={{ marginTop: '10%' }}></div>


                <div className=' row border border-lg-none border-success   rounded mx-3 my-4 my-lg-3 p-3' style={{ maxHeight: '25rem', minHeight: '22rem',width:'100%' }}>


                    <div className='col-lg-8'>
                        <div className='container-fluid'>
                            <h3 className='text-center'>TEACHERS</h3>
                            <hr className='bg-success' style={{ height: '1.5px' }} />
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut harum ipsa nemo ut similique laboriosam minima autem esse praesentium!</div>
                        </div>
                    </div>
                    <div className='col-lg-4 d-flex justify-content-center'>
                        <img src="download1.jpg" alt="" className=' rounded img-thumbnail ' />

                    </div>
                </div>

                <div className='d-lg-block d-none' style={{ marginTop: '10%' }}></div>



                <div className=' row border border-lg-none border-danger   rounded mx-3 my-4 my-lg-3 p-3' style={{ maxHeight: '25rem', minHeight: '22rem',width:'100%' }}>

                    <div className='col-lg-4 d-flex justify-content-center'>
                        <img src="download1.jpg" alt="" className=' rounded img-thumbnail ' />

                    </div>
                    <div className='col-lg-8'>
                        <div className='container-fluid'>
                            <h3 className='text-center'>BATCHES</h3>
                            <hr className='bg-danger' style={{ height: '1.5px' }} />
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut harum ipsa nemo ut similique laboriosam minima autem esse praesentium!</div>
                        </div>
                    </div>
                </div>

                <div className='d-lg-block d-none' style={{ marginTop: '10%' }}></div>



                <div className=' row border border-lg-none border-warning  mb-4 pb-4 rounded mx-3 my-4 my-lg-3 p-3' style={{ maxHeight: '25rem', minHeight: '22rem',width:'100%' }}>


                    <div className='col-lg-8'>
                        <div className='container-fluid'>
                            <h3 className='text-center'>TEACHERS</h3>
                            <hr className='bg-warning' style={{ height: '1.5px' }} />
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut harum ipsa nemo ut similique laboriosam minima autem esse praesentium!</div>
                        </div>
                    </div>
                    <div className='col-lg-4 d-flex justify-content-center'>
                        <img src="download1.jpg" alt="" className=' rounded img-thumbnail ' />

                    </div>
                </div>




            </div></div>

    )
}

export default Hodgraphandstats
