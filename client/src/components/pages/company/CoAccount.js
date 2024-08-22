import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import UpdateForm from '../../UpdateForm';
import NavBar from '../../NavBar';

export default function CoAccount ( {company, setCompany} ) {
        
    const navigate = useNavigate();

    // if ( !company ) {
    //     navigate("/")
    // }

        const [companyDetails, setCompanyDetails] = useState({
            name: "",
            abn: 0,
            size: 0,
            industry:"",
            about:"",
            website_link:"",
            facebook_link:"",
            instagram_link:"",
            linkedin_link:"",
            logo:"",
            admin_email:"",
            password:""
          })

        useEffect(()=> {
            fetch("/api/company/account")
            .then(response=>response.json())
            .then(json=>setCompanyDetails(json))
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
                <NavBar company={company}/>
                <h1>Account</h1>

                <div>
                    <p>Company name: {companyDetails.name} </p>
                    <p>Logo: {companyDetails.logo}</p>
                    <p>Size: {companyDetails.size}</p>
                    <p>Industry: {companyDetails.industry}</p>
                    <p>About: {companyDetails.about}</p>
                    <p>Website: {companyDetails.website_link}</p>
                    <p>LinkedIn: {companyDetails.linkedin_link}</p>
                    <p>Facebook: {companyDetails.facebook_link}</p>
                    <p>Instagram: {companyDetails.instagram_link}</p>
                    <p>Email: {companyDetails.admin_email}</p>
                    <p>Password: *******</p>
                    
                </div>

                <Button className="mx-1" id="update-account-btn" variant="warning" onClick={displayAccountUpdateForm}>Update details</Button>
                <div id="account-update-form" className="hide">
                    {/* <UpdateForm candidateDetails={candidateDetails} setCandidateDetails={setCandidateDetails} displayAccountUpdateForm={displayAccountUpdateForm} /> */}
                </div>

            </>
    )
}
