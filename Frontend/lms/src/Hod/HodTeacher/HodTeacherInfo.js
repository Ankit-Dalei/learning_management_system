import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HodTeacherInfo = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const data = location.state?.data || 'No data Received';
    const [name, img, email, phone, address] = data;

    // Sample data for weekly tests and assignments
    const weeklyData = [
        { week: 'Week 1', tests: 5, assignments: 3 },
        { week: 'Week 2', tests: 6, assignments: 4 },
        { week: 'Week 3', tests: 8, assignments: 5 },
        { week: 'Week 4', tests: 7, assignments: 6 },
        { week: 'Week 5', tests: 9, assignments: 7 },
    ];

    // Sample data for assignment details
    const assignmentData = [
        { subject: 'Math', completed: 15, pending: 5 },
        { subject: 'Science', completed: 12, pending: 8 },
        { subject: 'History', completed: 10, pending: 10 },
        { subject: 'English', completed: 18, pending: 2 },
    ];

    return (
        <div className='container-fluid m-0 p-0' style={{ height: '100%', width: '100%' }}>
            <button className='btn ps-lg-4' onClick={() => navigate('/Hod/Teacher')}>
                <i className="fa-solid fa-arrow-left mb-3" style={{ color: 'red' }}></i>
            </button>
            <div className='container-fluid text-white d-flex p-0 m-0 mt-4 pt-4 flex-lg-row  flex-column row d-flex align-items-center' style={{ height: '100%', width: '100%' }}>
                <div className='col-lg-4 d-flex align-items-center justify-content-center border-right border-light'>
                    <img
                        src={img}
                        title=""
                        className='rounded-circle img-fluid'
                        alt=""
                        style={{ minHeight: '100px', maxHeight: '120px', minWidth: '90px', maxWidth: '110px' }}
                    />
                </div>
                <div className='col-lg-8 p-0 px-4 m-0 container-fluid d-flex flex-column align-items-center justify-content-center  '>
                    <h4>{name}</h4>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Address: {address}</p>
                </div>
            </div>
            <div className=' m-0 p-0 my-4 py-4'>
                <div className='m-0 p-0'>
                    <h4 className='text-info text-center'>QUIZ DETAILS</h4>
                    <div>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={weeklyData}>
                                <XAxis dataKey="week" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="tests" name="Tests" stroke="#FF4500" />
                                <Line type="monotone" dataKey="assignments" name="Assignments" stroke="#008B8B" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className=' m-0 p-0 my-4 py-4'>
                    <h4 className='text-info text-center'>ASSIGNMENT DETAILS</h4>
                    <div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={weeklyData}>
                                <XAxis dataKey="week" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="assignments" name="Assignments" fill="#800080" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HodTeacherInfo;
