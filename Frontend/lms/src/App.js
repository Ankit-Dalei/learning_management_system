import React, { useEffect, useState } from "react";
import Header from "./Management/components/header/Header";
import House from "./Management/components/house/House";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import School from "./Management/components/Pages/School/School";
import Brancee from "./Management/components/Pages/Brance/Brancee";
import Course from "./Management/components/Pages/Course/Course";
import Teacher from "./Management/components/Pages/Teacher/Teacher";
import AddSchool from "./Management/Add/AddSchool/AddSchool";
import Student from "./Management/components/Pages/Student/Student";
import AddBrance from "./Management/Add/AddBrance/AddBrance";
import AddTech from "./Management/Add/AddTech/AddTech";
import AddCampus from "./Management/Add/AddCampus/AddCampus";
import AddCourse from "./Management/Add/AddCourse/AddCourse";
import AddStudent from "./Management/Add/AddStudent/AddStudent";
import AddSection from "./Management/Add/AddSection/AddSection";
import AddCSB from "./Management/Add/AddCSB/AddCSB";
import AddCSBC from "./Management/Add/AddCSBC/AddCSBC";
import Campus from "./Management/components/Pages/Campus/Campus";
import Dashboard from "./Teacher/Dashboard";
import State from "./State/State";
import Form from "./State/Form";
import Navbar from "./State/Navbar";
import Login from "./Login";
import Signup from "./Login/Signup";
import Head from "./Management/components/head/Head";
import StudentDash from "./Student/StudentDash";
import HeadNavStudent from "./Student/HeadNavStudent";
import Hod from "./Hod";

import Out from "./Out";
import TopNavbar from "./Teacher/TopNavbar";
import TestForm from "./Teacher/TestForm";
import QuestionForm from "./Teacher/QuestionForm";
import EditTest from "./Teacher/EditTest";
import ViewTest from "./Teacher/ViewTest";


import Hodbody from "./Hodbody";
import HodTeacherbody from "./HodTeacher/HodTeacherbody";
import Hodstudentbody from "./HodStudent/Hodstudentbody";
import HodProfile from "./HodProfile/HodProfile";
import HodTeacherInfo from "./HodTeacher/HodTeacherInfo";
import HodTeacherDetails from "./HodTeacher/HodTeacherDetails";
import HodStudentDetails from "./HodStudent/HodStudentDetails";
import HodStudentInfo from "./HodStudent/HodStudentInfo";
import HodOutlet from "./HodOutlet";

function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"));
  };
  const [dark, setMode] = useState(getMode());
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);
  return (
    <div className={dark ? "app" : "light"}>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Out/>}>
            <Route index element={<Login/>}/>
            <Route path="/forgotpass" element={<Signup />}></Route>

          <Route path="/stdash" element={<HeadNavStudent />}></Route>
          {/* <Route path="/" element={<StudentDash />}></Route> */}
          
          <Route path="/management" element={<Header dark={dark} setMode={setMode} />}>
            <Route index element={<House />} />
            <Route path="brancee" element={<Brancee />}></Route>
            <Route path="course" element={<Course />}></Route>
            <Route path="school" element={<School />}></Route>
            <Route path="teacher" element={<Teacher />}></Route>
            <Route path="student" element={<Student />}></Route>
            <Route path="campus" element={<Campus />}></Route>
          {/* add form */}
            <Route path="addschool" element={<AddSchool />}></Route>
            <Route path="addbrance" element={<AddBrance />}></Route>
            <Route path="addschool" element={<AddSchool />}></Route>
            <Route path="addteacher" element={<AddTech />}></Route>
            <Route path="addcampus" element={<AddCampus />}></Route>
            <Route path="addcourse" element={<AddCourse />}></Route>
            <Route path="addstudent" element={<AddStudent />}></Route>
            <Route path="addsection" element={<AddSection />}></Route>
            <Route path="addcsb" element={<AddCSB />}></Route>
            <Route path="addcsbc" element={<AddCSBC />}></Route>
          </Route>


          <Route path="/TeacherDashBoard" element={<TopNavbar />}>
            <Route index element={<Dashboard />} />
            <Route path="testform" element={<TestForm />}></Route>
            <Route path="questionform" element={<QuestionForm />} />
            <Route path="edittest" element={<EditTest />} />
            <Route path="viewtest" element={<ViewTest />} />
          </Route>
          <Route path="/admin" element={<State />} />
          <Route path='/management_Assign' element={<Form/>}/>
     {/*  <Route path='/Navbar' element={<Navbar/>}/> */}
     <Route path="/Hod" element={<Hod/>}>
      <Route index element={<HodOutlet/>}/>
      <Route path="Home" element={<Hodbody/>}/>
      <Route path="Teacher" element={<HodTeacherbody/>}>
        <Route index element={<HodTeacherDetails/>}/>
        <Route path="TeacherDetails" element={<HodTeacherInfo/>}/>
      </Route>
      <Route path="Student" element={<Hodstudentbody/>}>
        <Route index element={<HodStudentDetails/>}/>
        <Route path="StudentDetails" element={<HodStudentInfo/>}/>
      </Route>
      <Route path="Profile" element={<HodProfile/>}/>
     </Route>
          {/* <Route path="/Hod" element={<Hod />} />
          <Route path="/HodTeacher" element={<HodTeacher />} />
          <Route path="/Hodstudent" element={<HodStudent />} />

          <Route path="/HodProfile" element={<HodProfileTemplate />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
