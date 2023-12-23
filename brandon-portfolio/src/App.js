import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Education from './Pages/Education';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skill" element={<Skills/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </Router>
  );
}

export default App;