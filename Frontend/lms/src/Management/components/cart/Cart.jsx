import React from 'react'
import ReactApexChart from "react-apexcharts"
import { useNavigate } from 'react-router-dom';
import "./cart.css"

import Common from "../../common/Common"

function Cart() {

    const data = {
        series: [58],
        options: {
            chart: {
                height: 150,
                type: "radialBar",
                foreColor: "grey",
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "58%",
                    },
                    dataLabels: {
                        value: {
                            show: false,
                        },
                    },
                },
            },
            labels: ["58"],
            colors: ["#ff5b5b"],
        },
    }










    const navigate = useNavigate();
    const change = (e) => {
        if (e === '/demo')
            console.log(e)
        navigate('/brancee')
        if (e === '/brancee')
            navigate('/brancee')
        if (e === '/school')
            navigate('/school')
        if (e === '/course')
            navigate('/course')
        if (e === '/teacher')
            navigate('/teacher')
        if (e === '/student')
            navigate('/student')
            if (e === '/campus')
            navigate('/campus')
    }

    return (
        <>
            <section className='cards grid' >

                <div className='cardBox' onClick={(e) => { change('/school') }} style={{ 'cursor': 'pointer' }}>
                    <Common title='Total School' />
                    <div className='circle'>
                        <div className='row'>
                            <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
                        </div>
                        <div className='title row' >
                            <h1>256</h1>
                            <p>School</p>
                        </div>
                    </div>
                </div>
                <div className='cardBox' onClick={(e) => { change('/brancee') }} style={{ 'cursor': 'pointer' }}>
                    <Common title='Total Branch' />
                    <div className='circle'>
                        <div className='row'>
                        <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
                        </div>
                        <div className='title row'>
                            <h1>256</h1>
                            <p>Branch</p>
                        </div>
                    </div>
                </div>
                <div className='cardBox' onClick={(e) => { change('/teacher') }} style={{ 'cursor': 'pointer' }}>
                    <Common title='Total Teacher' />
                    <div className='circle'>
                        <div className='row'>
                        <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
                        </div>
                        <div className='title row'>
                            <h1>256</h1>
                            <p>Student</p>
                        </div>
                    </div>
                </div>
                <div className='cardBox' onClick={(e) => { change('/student') }} style={{ 'cursor': 'pointer' }}>
                    <Common title='Total Students' />
                    <div className='circle'>
                        <div className='row'>
                        <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
                        </div>
                        <div className='title row'>
                            <h1>256</h1>
                            <p>Student</p>
                        </div>
                    </div>
                </div>
                <div className='cardBox'>
                    <Common title='Total Course' />
                    <div className='circle' onClick={(e) => { change('/course') }} style={{ 'cursor': 'pointer' }}>
                        <div className='row'>
                        <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
                        </div>
                        <div className='title row'>
                            <h1>256</h1>
                            <p>Course</p>
                        </div>
                    </div>
                </div>
                <div className='cardBox'>
                    <Common title='Total Campus' />
                    <div className='circle' onClick={(e) => { change('/campus') }} style={{ 'cursor': 'pointer' }}>
                        <div className='row'>
                        <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
                        </div>
                        <div className='title row'>
                            <h1>256</h1>
                            <p>Campus</p>
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}

export default Cart