import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, json} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/pages/Home';
// import Index from "./components/pages/candidate/Index";
import Login from './components/pages/candidate/Login';
import Jobs from './components/pages/jobs/Jobs';
import JobsIndex from './components/pages/jobs/JobsIndex';
import JobPage from './components/pages/jobs/JobPage';
import Logout from './components/pages/candidate/Logout';

export default function App() {

  const [candidate, setCandidate] = useState({})
  const [company, setCompany] = useState({})


  useEffect(() => {
    fetch('/api/candidate/account')
      .then(response=> response.json())
      .then(json=> {
        if (json.id) {
          setCandidate(json)
          } else {
          console.log("No Candidate")
          }
        })}
    ,[])
      // fetch(()=> {'/api/company/account'
      //   .then(response=> {
      //     if (response.okay) {
      //       setCompany(response.json)
      //     } else {
      //       setCompany(null)
      //     }
      //   })
      // },[]) 

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Index candidate={candidate} company={company} />} /> */}
        <Route path="/" element={<Home candidate={candidate} />} />
        <Route path='login' element={<Login candidate={candidate} setCandidate={setCandidate}/>}/>
        <Route path='logout'elemt={<Logout candidate={candidate} setCandidate={setCandidate}/>}/>
        <Route path='/jobs' element={<Jobs candidate={candidate} />}>
          <Route index element={<JobsIndex/>}/>
          <Route path=":id" element={<JobPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}