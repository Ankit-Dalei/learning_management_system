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
import State from "./Admin/State";
import Form from "./Admin/Form";
import Navbar from "./Admin/Navbar";
import Login from "./Login";
import Signup from "./Login/Signup";
import Head from "./Management/components/head/Head";


import Out from "./Out";
import TopNavbar from "./Teacher/TopNavbar";
import TestForm from "./Teacher/TestForm";
import QuestionForm from "./Teacher/QuestionForm";
import EditTest from "./Teacher/EditTest";
import ViewTest from "./Teacher/ViewTest";
import AssignTest from "./Teacher/AssignTest";
import AssignPage from "./Teacher/AssignPage";

import Hodbody from "./Hod/Hodbody";
import HodTeacherbody from "./Hod/HodTeacher/HodTeacherbody";
import Hodstudentbody from "./Hod/HodStudent/Hodstudentbody";
import HodProfile from "./Hod/HodProfile/HodProfile";
import HodTeacherInfo from "./Hod/HodTeacher/HodTeacherInfo";
import HodTeacherDetails from "./Hod/HodTeacher/HodTeacherDetails";
import HodStudentDetails from "./Hod/HodStudent/HodStudentDetails";
import HodStudentInfo from "./Hod/HodStudent/HodStudentInfo";
import HodOutlet from "./Hod/HodOutlet";


import HeadNavStudent from "./Student/HeadNavStudent";
import StudentCard from "./Student/StudentCard";
import Classroom from "./Student/Classroom";
import Assignment from "./Student/Assignment";
import Test from "./Student/Test";
import Group from "./Student/Group";
import Compiler from "./Student/Compiler";
import Mcq from "./Student/test/Mcq";
import Coding from "./Student/test/Coding";
import Testp from "./Student/test/Testp";
import Upt from "./Student/test/Upt";
import Hodlayout from "./Hod/Hodlayout";
import HodBatchbody from "./Hod/HodBatchandCourses/HodBatchbody";
import HodBatchDetails from "./Hod/HodBatchandCourses/HodBatchDetails";
import HodCourseDetails from "./Hod/HodBatchandCourses/HodCourseDetails";
import HodAssignmentbody from "./Hod/HodAssignment/HodAssignmentbody";


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

            <Route path="/stdash" element={<HeadNavStudent />}>
              <Route index element={<StudentCard />} />
              <Route path="Classroom" element={<Classroom />}></Route>
              <Route path="Assignment" element={<Assignment />}></Route>
              <Route path="Test" element={<Test />}>
                  <Route index element={<Mcq />} />
                  <Route path="Coding" element={<Coding />}></Route>
                  <Route path="PassedTest" element={<Testp />}></Route>
                  <Route path="UpcomingTest" element={<Upt />}></Route>
              </Route>
              <Route path="Group" element={<Group />}></Route>
              <Route path="Compiler" element={<Compiler />}></Route>
            </Route>
          
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
            <Route path="assigntest" element={<AssignTest />} />
            <Route path="/TeacherDashBoard/assignpage" element={<AssignPage />} />
          </Route>
          <Route path="/admin" element={<Navbar />} >
              <Route index element={<State />} />
          </Route>
     {/*  <Route path='/Navbar' element={<Navbar/>}/> */}
     <Route path="/Hod" element={<Hodlayout/>}>
      <Route index element={<Hodbody/>}/>
      
      <Route path="Teacher" element={<HodTeacherbody/>}>
        <Route index element={<HodTeacherDetails/>}/>
        <Route path="TeacherDetails" element={<HodTeacherInfo/>}/>
      </Route>
      <Route path="Student" element={<Hodstudentbody/>}>
        <Route index element={<HodStudentDetails/>}/>
        <Route path="StudentDetails" element={<HodStudentInfo/>}/>
      </Route>
      <Route path="Batch" element={<HodBatchbody/>}>
        <Route index element={<HodBatchDetails/>}/>
        <Route path="Courses" element={<HodCourseDetails/>}/>
      </Route>
      <Route path="Assignment" element={<HodAssignmentbody/>}/>
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
