import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, json} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/pages/Home';
import Jobs from './components/pages/jobs/Jobs';
import JobsIndex from './components/pages/jobs/JobsIndex';
import JobPage from './components/pages/jobs/JobPage';
import PostJob from './components/pages/jobs/PostJob';

import Login from './components/pages/candidate/Login';
import Logout from './components/pages/candidate/Logout';
import Signup from './components/pages/candidate/Signup';
import Account from './components/pages/candidate/Account';

import CoLogin from './components/pages/company/CoLogin';
import CoLogout from './components/pages/company/CoLogout';
import CoSignup from './components/pages/company/CoSignup';

export default function App() {

  const [candidate, setCandidate] = useState(null)
  const [company, setCompany] = useState(null)


  useEffect(() => {
    fetch('/api/candidate/account')
      .then(response=> response.json())
      .then(json=> {
        if (json.id) {
          setCandidate(json)
          } 
        })}
    ,[])

  useEffect(() => {
    fetch('/api/company/account')
      .then(response=> response.json())
      .then(json=> {
        if (json.id) {
          setCompany(json)
          } 
        })}
    ,[])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home candidate={candidate} company={company}/>} />
        <Route path='/login' element={<Login candidate={candidate} setCandidate={setCandidate} company={company} />}/>
        <Route path='/logout' element={<Logout candidate={candidate} setCandidate={setCandidate}/>}/>
        <Route path='/signup' element={<Signup candidate={candidate} />}/>
        <Route path='/account'element={<Account candidate={candidate} setCandidate={setCandidate} />}/>

        
        <Route path='/jobs' element={<Jobs candidate={candidate} company={company}/>}>
          <Route index element={<JobsIndex candidate={candidate} company={company}/>}/>
          <Route path=":id" element={<JobPage candidate={candidate} /> }/>
        </Route>

        <Route path="/post-job" element={<PostJob company={company} />} />
        <Route path='/company-login' element={<CoLogin candidate={candidate} company={company} setCompany={setCompany}/>}/>
        <Route path='/company-logout' element={<CoLogout company={company} setCompany={setCompany}/>}/>
        <Route path='/company-signup' element={<CoSignup company={company} setCompany={setCompany}/>}/>

      </Routes>
    </Router>
  );
}