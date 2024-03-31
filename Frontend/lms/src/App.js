import React, { useEffect, useState } from 'react';
import Header from './Management/components/header/Header';
import House from './Management/components/house/House'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import School from './Management/components/Pages/School/School';
import Brancee from './Management/components/Pages/Brance/Brancee';
import Course from './Management/components/Pages/Course/Course';
import Teacher from './Management/components/Pages/Teacher/Teacher';
import AddSchool from './Management/Add/AddSchool/AddSchool';
import Student from './Management/components/Pages/Student/Student';
import AddBrance from './Management/Add/AddBrance/AddBrance';
import AddTech from './Management/Add/AddTech/AddTech';
import AddCampus from './Management/Add/AddCampus/AddCampus';
import AddCourse from './Management/Add/AddCourse/AddCourse';
import AddStudent from './Management/Add/AddStudent/AddStudent';
import AddSection from './Management/Add/AddSection/AddSection';
import AddCSB from './Management/Add/AddCSB/AddCSB';
import AddCSBC from './Management/Add/AddCSBC/AddCSBC';
import Campus from './Management/components/Pages/Campus/Campus';
import Dashboard from './Teacher/Dashboard';
import State from './State/State'
import Form from './State/Form'
import Navbar from './State/Navbar'

function App() {

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"))
  }
  const [dark, setMode] = useState(getMode())
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])
  return (
    <div className={dark ? "app" : "light"}>


      <BrowserRouter>
        <Header dark={dark} setMode={setMode} />
        <Routes>


          <Route path="/brancee" element={<Brancee />}></Route>
          <Route path="/" element={<House />}></Route>
          <Route path="/course" element={<Course />}></Route>
          <Route path="/addschool" element={<AddSchool />}></Route>

          <Route path="/school" element={<School />}></Route>
          <Route path="/teacher" element={<Teacher />}></Route>
          <Route path="/student" element={<Student />}></Route>
          <Route path="/campus" element={<Campus />}></Route>


          {/* add form */}
          <Route path="/addbrance" element={<AddBrance />} ></Route>
          <Route path="/addschool" element={<AddSchool />} ></Route>
          <Route path="/addteacher" element={<AddTech />} ></Route>
          <Route path="/addcampus" element={<AddCampus />} ></Route>
          <Route path="/addcourse" element={<AddCourse />} ></Route>
          <Route path="/addstudent" element={<AddStudent />} ></Route>
          <Route path='/addsection' element={<AddSection />} ></Route>
          <Route path="/addcsb" element={<AddCSB />} ></Route>
          <Route path='/addcsbc' element={<AddCSBC />} ></Route>
          <Route path='/Dashboard' element={<Dashboard />} ></Route>
          <Route path='/state' element={<State/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
