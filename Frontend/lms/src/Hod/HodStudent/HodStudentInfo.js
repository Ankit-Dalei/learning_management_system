import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LineChart, Line, BarChart, Cell, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HodStudentInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.data || 'No data Received';
    const [name, img, email, phone, address, batch, section] = data;

    //stats
    const weeklyData = [
        { week: 'Week 1', quizzes: 5, tests: 3 },
        { week: 'Week 2', quizzes: 6, tests: 4 },
        { week: 'Week 3', quizzes: 8, tests: 5 },
        { week: 'Week 4', quizzes: 7, tests: 6 },
        { week: 'Week 5', quizzes: 9, tests: 7 },
    ];

    const totalQuizzes = weeklyData.reduce((sum, item) => sum + item.quizzes, 0);
    const totalTests = weeklyData.reduce((sum, item) => sum + item.tests, 0);

    // Data for Bar Chart
    const subjectData = [
        { subject: 'C', performance: 80 },
        { subject: 'Java', performance: 75 },
        { subject: 'Python', performance: 85 },
        { subject: 'Data Structures', performance: 90 },
        { subject: 'React.js', performance: 70 },
    ];

    const averagePerformance = subjectData.reduce((sum, item) => sum + item.performance, 0) / subjectData.length;




    return (
        <div className='container-fluid py-2 m-0 my-4'>
            <button className='btn ps-lg-4' onClick={() => navigate('/Hod/Student')}>
                <i className="fa-solid fa-arrow-left mb-3" style={{ color: 'red' }}></i>
            </button>
            <div className='row row-cols-lg-2 row-cols-1 d-flex justify-content-evenly container-fluid m-0 p-0' style={{ width: '100%' }}>
                <div className='col-lg-6 col-md-6 col-sm-12  p-0 m-0 mx-md-4 d-flex justify-content-evenly' style={{ maxWidth: '20rem', maxHeight: '30rem', minHeight: '10rem' }}>
                    <div className='text-white ' style={{ width: '100%', height: '100%' }}>
                        <div className="card " style={{ width: '100%', height: '100%' }}>
                            <img src={img} className="card-img-top" alt={name} style={{ width: '100%', minHeight: '150px', maxHeight: '250px' }} />
                            <div className="card-body text-white bg-dark" style={{ width: '100%', height: '50%' }}>
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">BATCH: {batch} <span>Section: {section}</span></p>
                                <p className="card-text">Email: {email}</p>
                                <p className="card-text">Phone: {phone}</p>
                                <p className="card-text">Address: {address}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 mt-4 mt-md-0 col-sm-12 card bg-dark text-white border border-light rounded-4' style={{ maxWidth: '20rem', maxHeight: '30rem', minHeight: '10rem' }}>
                    <h4 className='text-info pt-4 text-center'>Language Progression</h4>

                    <span>Java</span>
                    <div className="progress my-1 mb-4 py-0">
                        <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-white" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>C</span>
                    <div className="progress my-1 mb-4 py-0">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-white" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>Data Structure</span>
                    <div className="progress my-1 mb-4 py-0">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-white" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>Python</span>
                    <div className="progress my-1 mb-4 py-0">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-white" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>Android</span>
                    <div className="progress my-1 mb-4 py-0">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-white" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>React js</span>
                    <div className="progress my-1 mb-4 py-0">
                        <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-white" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <span>Spring Boot</span>
                    <div className="progress my-1 mb-4 py-0">
                        <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        <div className="progress-bar bg-white" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>

                {/* graphs */}
                <div className='col-lg-12 col-md-12 col-sm-12  text-light mt-4 p-0 m-0' style={{}}>
                    <div className="container-fluid  m-0 p-0">
                        

                        {/* Weekly Quizzes and Tests Line Chart */}
                        <div className="mb-5 container-fluid m-0 p-0 d-flex flex-column justify-content-center p-lg-4">
                            <h2 className="text-center  mb-3">Weekly Quizzes and Tests</h2>
                            <ResponsiveContainer width="100%" height={400} className='container-fluid p-0 m-0'>
                                <LineChart
                                className=' p-0 m-0 container-fluid'
                                    data={weeklyData}
                                    margin={{ top: 20, right: 3, left: 2, bottom: 10 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="week" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="quizzes" name="Quizzes" stroke="yellow" />
                                    <Line type="monotone" dataKey="tests" name="Tests" stroke="red" />
                                </LineChart>
                            </ResponsiveContainer>

                            <div className="text-center mt-3">
                                <h4>Total Quizzes: {totalQuizzes}</h4>
                                <h4>Total Tests: {totalTests}</h4>
                            </div>
                        </div>

                        {/* Subject Performance Bar Chart */}
                        <div className="mb-5 p-lg-4">
                            <h2 className="text-center mb-3">Subject Performance</h2>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart
                                    data={subjectData}
                                    margin={{ top: 20, bottom: 10 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="subject" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="performance" fill="orange" />
                                </BarChart>
                            </ResponsiveContainer>

                            <div className="text-center mt-3">
                                <h4>Average Performance: {averagePerformance.toFixed(2)}%</h4>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HodStudentInfo;
