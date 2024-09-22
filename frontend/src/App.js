// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
// Import other components like Home, Jobs, Profile, etc.
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Login from './pages/Login';
import JobDetails from './pages/JobsDetails';
import SignUp from './pages/Signup';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {isAuthenticated && <Route path="/profile" element={<Profile />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
