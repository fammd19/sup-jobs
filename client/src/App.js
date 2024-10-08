import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';

import Jobs from './components/pages/jobs/Jobs';
import JobsIndex from './components/pages/jobs/JobsIndex';
import JobPage from './components/pages/jobs/JobPage';
import PostJob from './components/pages/jobs/PostJob';
import CoJobs from './components/pages/jobs/CoJobs';

import Login from './components/pages/candidate/Login';
import Logout from './components/pages/candidate/Logout';
import Signup from './components/pages/candidate/Signup';
import Account from './components/pages/candidate/Account';

import CoLogin from './components/pages/company/CoLogin';
import CoLogout from './components/pages/company/CoLogout';
import CoSignup from './components/pages/company/CoSignup';
import CoAccount from './components/pages/company/CoAccount';
import AllCos from './components/pages/company/AllCos';
import AllCosIndex from './components/pages/company/AllCosIndex';
import ACoProfile from './components/pages/company/ACoProfile';
import SavedJobs from './components/pages/jobs/SavedJobs';

import NavBar from './components/NavBar';

export default function App() {

  const [candidate, setCandidate] = useState(null)
  const [company, setCompany] = useState(null)

  
  useEffect(() => {
    if (!company) {
      fetch('/api/candidate/account')
        .then(response=> response.json())
        .then(json=> {
          if (json.id) {
            setCandidate(json)
            } 
          })}}
      ,[])

  useEffect(() => {
    if (!candidate) {
    fetch('/api/company/account')
      .then(response=> response.json())
      .then(json=> {
        if (json.id) {
          setCompany(json)
          } 
        })}}
    ,[])


  return (
    <Router>
      <NavBar candidate={candidate} company={company}/>
      <Routes>
        <Route path="/" element={<Home candidate={candidate} company={company}/>} />
        <Route path='/login' element={<Login candidate={candidate} setCandidate={setCandidate} company={company} />}/>
        <Route path='/logout' element={<Logout candidate={candidate} setCandidate={setCandidate}/>}/>
        <Route path='/signup' element={<Signup candidate={candidate} setCandidate={setCandidate}/>}/>
        <Route path='/account'element={<Account candidate={candidate} setCandidate={setCandidate} />}/>

        
        <Route path='/jobs' element={<Jobs candidate={candidate} company={company}/>}>
          <Route index element={<JobsIndex candidate={candidate} company={company} />}/>
          <Route path=':id' element={<JobPage candidate={candidate} company={company}/> }/>
        </Route>

        <Route path='/jobs/company/:id' element={<CoJobs candidate={candidate} company={company}/>}/>
        <Route path='/jobs/saved' element={<SavedJobs candidate={candidate} company={company}/>}/>


        <Route path='/companies' element={<AllCos candidate={candidate} company={company}/>}>
          <Route index element={<AllCosIndex candidate={candidate} company={company} />}/>
          <Route path=':id' element={<ACoProfile candidate={candidate} company={company}/> }/>
        </Route>
        
        <Route path='/post-job' element={<PostJob company={company} />} />
        <Route path='/company-login' element={<CoLogin candidate={candidate} company={company} setCompany={setCompany}/>}/>
        <Route path='/company-logout' element={<CoLogout company={company} setCompany={setCompany}/>}/>
        <Route path='/company-signup' element={<CoSignup company={company} setCompany={setCompany}/>}/>
        <Route path='/company-account' element={<CoAccount company={company} setCompany={setCompany}/>}/>
        
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}