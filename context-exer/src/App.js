import './App.css';
import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/about" element={<About/>}>
          {/* <About /> */}
        </Route>

        <Route path="/profile" element={<Profile/>}>
          {/* <Profile /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
