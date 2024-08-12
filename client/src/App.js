import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./components/pages/Home";



function App() {
  return (
    <>
      {/* <p style={{ fontFamily: 'Jura, sans-serif' }}>Testing</p> */}
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
