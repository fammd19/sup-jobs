import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import UpdateForm from '../../UpdateForm';
import NavBar from '../../NavBar';
import SampleJobs from '../../SampleJobs';

export default function Account ( {candidate, setCandidate} ) {
        
        const navigate = useNavigate();

        // if ( !candidate ) {
        //     navigate("/")
        // }

        const [candidateDetails, setCandidateDetails] = useState({
            first_name: "",
            last_name: "",
            email:"",
            password:"",
            preferred_department:"",
            preferred_industry:"",
          })

        useEffect(()=> {
            fetch("/api/candidate/account")
            .then(response=>response.json())
            .then(json=>setCandidateDetails(json))
        },[])

        function displayAccountUpdateForm () {
            const formDiv = document.getElementById("account-update-form");
            const showBtn = document.getElementById("update-account-btn")
            if (formDiv.classList.contains("hide")) {
                formDiv.classList.remove("hide") 
                showBtn.textContent="Cancel update"
            } else {
                formDiv.classList.add("hide")
                showBtn.textContent="Update details"   
            }
        }

        return (
            <>
                {/* <NavBar candidate={candidate}/> */}
                <h1>Account</h1>

                <div>
                    <p>First name: {candidateDetails.first_name} </p>
                    <p>Last name: {candidateDetails.last_name}</p>
                    <p>Email: {candidateDetails.email}</p>
                    <p>Password: *******</p>
                    <p>Preferred industry: {candidateDetails.preferred_industry}</p>
                    <p>Preferred department: {candidateDetails.preferred_department}</p>
                </div>
                <h4 className="mt-3">Saved jobs</h4>
                <SampleJobs candidate={candidate} selection={"saved"}/>

                <Button className="mx-1" id="update-account-btn" onClick={displayAccountUpdateForm}>Update details</Button>
                <div id="account-update-form" className="hide">
                    <UpdateForm candidateDetails={candidateDetails} setCandidateDetails={setCandidateDetails} displayAccountUpdateForm={displayAccountUpdateForm} />
                </div>

            </>
    )
}
