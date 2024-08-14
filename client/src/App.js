import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, json} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Index from "./components/pages/candidate/Index";
import Login from './components/pages/candidate/Login';


export default function App() {

  const [candidate, setCandidate] = useState({})
  const [company, setCompany] = useState({})

    // useEffect(() => {
    //   fetch(()=> {'/api/candidate/account'
    //     .then(response=> {
    //       if (response.okay) {
    //         setCandidate(response.json)
    //       } else {
    //         setCandidate(null)
    //       }
    //     })
    //   },[])})
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
        <Route path="/" element={<Index candidate={candidate} company={company} />} />
        <Route path='login' element={<Login candidate={candidate} setCandidate={setCandidate}/>}/>
      </Routes>
    </Router>
  );
}



//   return (
//       <Router>
//         <Routes>
//           <Route path='/' exact element={<Index candidate={candidate}/>}/>
//             <Route index />
//             <Route path='signup' />
//             <Route path='login' element={<Login candidate={candidate} setCandidate={setCandidate}/>}/>
//             <Route path='logout' />
//             <Route path='account' />
//             <Route path='jobs' />
//             {/* <Route path='companies' />
//             <Route path='company-signup' />
//             <Route path='company-login' />
//             <Route path='company-logout' />
//             <Route path='company-account' />
//             <Route path='post-job' />
//             <Route path='edit-job' /> */}
//         </Routes>
//       </Router>
//   );
// }

