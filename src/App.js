
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Appointment from './components/Appointment';
import Visitor from './components/Visitor';
import Counsellor from './components/Counsellor';
import Signin from './components/Signin';
import React from 'react';
import FetchRegistrations from './components/FetchRegistrations';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path = '/' element={<Home/>} exact/>
        <Route path = '/signup' element={<Signup/>} exact/>
        <Route path = '/signin' element={<Signin/>} exact/>
        <Route path = '/counsellor' element={<Counsellor/>} exact/>
        <Route path = '/visitor' element={<Visitor/>} exact/>
        <Route path = '/appointment' element={<Appointment/>} exact/>
        <Route path = '/fetchregistrations' element={<FetchRegistrations/>} exact/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
