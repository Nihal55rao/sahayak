import React, { useEffect,useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// import { SignupForm } from './routes/signupForm';
// import { LoginForm } from './routes/loginForm';
import DoctorDetails from './routes/DoctorDetails';
import Home from './routes/Home';
import HospitalTimings from './routes/HospitalTimings';
import PatientAppointments from './routes/PatientAppointments';
import PatientData from './routes/PatientData';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Protected from './Protected';
import DocSchedules from './components/DocSchedules/DocSchedules'


function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/schedule/:id" element={<DocSchedules/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/doctordetails" element={<DoctorDetails/>}/>
        <Route path="/hospitaltimings" element={<HospitalTimings/>}/>
        <Route path="/patientappointments" element={<PatientAppointments/>}/>
        <Route path="/patientdata" element={<PatientData/>}/>
        <Route path="/logout" element={<Login/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
