import axios from "axios";
const backendPort = process.env.REACT_APP_BACKEND_PORT;
const BASE_URL = `http://localhost:${backendPort}/cutm/management`;

//For Branch
const AddBranch = (branch) => axios.post(`${BASE_URL}/addBranch`, branch);
const GetBranch = () => axios.get(`${BASE_URL}/getBranch`);

//For school
const AddSchool = (school) => axios.post(`${BASE_URL}/addSchool`,school);
const GetSchool = () => axios.get(`${BASE_URL}/getSchool`);

//For Teacher
const AddTeacher = (teacher) => axios.post(`${BASE_URL}/addTeacher`,teacher);
const GetTeacher = () => axios.get(`${BASE_URL}/getTeacher`);

//For Course
const AddCourse = (course) => axios.post(`${BASE_URL}/addCourse`,course);
const GetCourse = () => axios.get(`${BASE_URL}/getCourse`);

//For Student
const AddStudent = (student) => axios.post(`${BASE_URL}/addStudent`,student);
const GetStudent = () => axios.get(`${BASE_URL}/getStudent`);

//For Campus
const AddCampus = (campus) =>  axios.post(`${BASE_URL}/addCampus`,campus);
const GetCampus = () => axios.get(`${BASE_URL}/getCampus`);
 
// For section
const AddSection = (section) => axios.post(`${BASE_URL}/addSection`,section);
const GetSection = () => axios.get(`${BASE_URL}/getSection`);

// Add CSB
const AddCSB = (csb) => axios.post(`${BASE_URL}/addCSB`,csb);
const GETCSB = () => axios.get(`BASE_URL}/getCSB`);