import React, { useState } from 'react';
import HodStudentMap from './HodStudentMap';

const HodStudentDetails = () => {
    const studentdetails = [
        {
            img: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
            name: 'John Doe',
            email: '210301120999@cutm.ac.in',
            id: 1,
            phone: 457475748957,
            batch: '2078-98',
            section: "A",
            address: "shdhdg"
        },
        {
            img: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
            name: 'jhaskjhckj',
            email: '210301120989@cutm.ac.in',
            id: 3,
            phone: 457475748957,
            batch: '2078-98',
            section: "A",
            address: "shdhdg"
        },
        {
            img: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
            name: 'jhaskjhckj',
            email: '210301120999@cutm.ac.in',
            id: 2,
            phone: 457475748957,
            section: "A",
            batch: '2078-98',
            address: "shdhdg"
        }
    ];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [img, setImage] = useState('');
    const [section, setSection] = useState('');
    const [batch, setBatch] = useState('');
    const [address, setAddress] = useState('');
    const [allValue, setAllValue] = useState('d-block');
    const [viewDetail, setViewDetail] = useState('d-none');

    return (
        <div className='p-lg-4 p-0 text-white bg-dark' style={{ height: '100vh' }}>
            <div className={allValue}>
                <table className="table align-middle mb-0 bg-dark text-white" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Batch</th>
                            <th>Contact No.</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentdetails.map((detail, index) => (
                            <HodStudentMap key={index} batch={detail.batch} section={detail.section} name={detail.name} img={detail.img} email={detail.email} phone={detail.phone} address={detail.address} />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={viewDetail} style={{}}>
                <button className='btn' onClick={() => {
                    setAllValue('d-block');
                    setViewDetail('d-none');
                }}>
                    <i className="fa-solid fa-arrow-left mb-3" style={{ color: 'red' }}></i>
                </button>
                <div className='overflow-auto text-dark d-flex justify-content-center align-items-center' style={{ height: '100%' }}>

                    <div className="container">
                        <div className="main-body container-fluid">
                            <div className="container-fluid row" style={{ height: '100%', width: '100%' }}>
                                <div className="col-md-4 mb-3" style={{ height: '25rem', width: '20rem' }}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center ">
                                                <img src={img} alt="Admin" className="rounded-circle" width="150" />
                                                <div className="mt-3">
                                                    <h4>{name}</h4>
                                                    <div className='d-flex flex-row justify-items-center'>
                                                        <p className=" mb-1">Batch : </p><p>{batch} CSE-{section}</p>
                                                    </div>
                                                    <p className=" font-size-sm">Email : {email}</p>
                                                    <p className=" font-size-sm">Contact : {phone}</p>
                                                    <p className=" font-size-sm">Address : {address}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8" style={{ height: '24rem', width: '20rem' }}>

                                    <div className="col-sm-6 mb-3 container-fluid" style={{ height: '24rem', width: '20rem' }}>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h6 className="d-flex align-items-center mb-1"><i className="material-icons text-info mr-2">SUBJECT PROGRESSION</i></h6>
                                                <small>C</small>
                                                <div className="progress mb-1" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Python</small>
                                                <div className="progress 1" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Data Structure</small>
                                                <div className="progress 1" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Java</small>
                                                <div className="progress 1" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HodStudentDetails;
