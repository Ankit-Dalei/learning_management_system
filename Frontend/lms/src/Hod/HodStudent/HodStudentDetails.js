import React, { useState } from 'react';
import HodStudentMap from './HodStudentMap';
import HodStudentPhone from './HodStudentPhone';

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
  

    return (
        <div>
        <div className='p-lg-4 p-0 text-white bg-dark d-lg-block d-none' style={{ height: '100vh' }}>
           
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
            <div className='d-block d-lg-none'>
            {studentdetails.map((detail, index) => (
                            <HodStudentPhone key={index} batch={detail.batch} section={detail.section} name={detail.name} img={detail.img} email={detail.email} phone={detail.phone} address={detail.address} />
                        ))}
            </div>
            
            
        </div>
    );
}

export default HodStudentDetails;
