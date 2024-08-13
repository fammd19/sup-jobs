import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Index from "./components/pages/candidate/Index";
import Login from './components/pages/candidate/Login';


export default function App() {

  const [candidate, setCandidate] = useState({})

    useEffect(() => {
      fetch(()=> {'/api/candidate/account'
        //.then(response=>response.json())
        .then(response=> {
          if (response.okay) {
            setCandidate(response.json)
          } else {
            setCandidate(null)
          }
        })
        // .then(json=>setCandidate(json))
      },[])
    })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index candidate={candidate} />} />
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

