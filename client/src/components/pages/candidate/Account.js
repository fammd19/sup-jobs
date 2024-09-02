import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Row } from 'react-bootstrap';
import UpdateForm from '../../UpdateForm';

export default function Account ( {candidate, setCandidate} ) {
        
        const [savedJobs, setSavedJobs] = useState(0);

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

        useEffect ( () => {
            fetch(`/api/jobs/saved`)
            .then(res => res.json())
            .then(json => {
                setSavedJobs(json.length)
            })
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
                <h1>Account</h1>

                <div className="account">
                    <p>First name: {candidateDetails.first_name} </p>
                    <p>Last name: {candidateDetails.last_name}</p>
                    <p>Email: {candidateDetails.email}</p>
                    {
                        candidateDetails.preferred_industry
                        ?
                        <p>Preferred industry: {candidateDetails.preferred_industry}</p>
                        :
                        null
                    }
                    {
                        candidateDetails.preferred_department
                        ?
                        <p>Preferred department: {candidateDetails.preferred_department}</p>
                        :
                        null
                    }
                    
                </div>


                <Button className="mx-1" id="update-account-btn" onClick={displayAccountUpdateForm}>Update details</Button>
                <div id="account-update-form" className="hide">
                    <UpdateForm candidateDetails={candidateDetails} setCandidateDetails={setCandidateDetails} displayAccountUpdateForm={displayAccountUpdateForm} />
                </div>
                <Row className="my-5">
                    {
                        savedJobs === 1
                        ?
                        <p>You have {savedJobs} saved job. View it <a className="link" href="/jobs/saved">here</a></p>
                        :
                        savedJobs
                            ?
                            <p>You have {savedJobs} saved jobs. View them <a className="link" href="/jobs/saved">here</a></p>
                            :
                            <p>You have no saved jobs</p>
                    }
                </Row>

            </>
    )
}
