import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import CoUpdateForm from '../../CoUpdateForm';

export default function CoAccount ( {company, setCompany} ) {
        
    const navigate = useNavigate();


        const [companyDetails, setCompanyDetails] = useState({
            name: "",
            abn: "",
            size: "",
            industry:"",
            about:"",
            mission_statement:"",
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
                showBtn.classList.add("btn-tertiary")
            } else {
                formDiv.classList.add("hide")
                showBtn.textContent="Update details"   
                showBtn.classList.remove("btn-tertiary")
            }
        }

        return (
            <>
                <h1>Account</h1>

                <div className="account">
                    <p>Company name: {companyDetails.name} </p>
                    
                    {
                        companyDetails.logo
                        ?
                        <img className="co-logo" src={`${companyDetails.logo}`} />
                        :
                        <img className="co-logo" src="../../../assets/placeholder.svg" />
                    }
                    <p>Company size: {companyDetails.size}</p>
                    <p>Industry: {companyDetails.industry}</p>
                    <p>About: {companyDetails.about}</p>
                    {
                        companyDetails.mission_statement
                        ?
                        <p>Mission: {companyDetails.mission_statement}</p>
                        :
                        null
                    }                    
                    <p>Website: {companyDetails.website_link}</p>
                    {
                        companyDetails.linkedin_link
                        ?
                        <p>LinkedIn: {companyDetails.linkedin_link}</p>
                        :
                        null
                    }
                    {
                        companyDetails.facebook_link
                        ?
                        <p>Facebook: {companyDetails.facebook_link}</p>
                        :
                        null
                    }
                    {
                        companyDetails.instagram_link
                        ?
                        <p>Instagram: {companyDetails.instagram_link}</p>
                        :
                        null
                    }
                    <p>Email: {companyDetails.admin_email}</p>                    
                </div>

                <Link to={`/jobs/company/${companyDetails.id}`}><Button className="mx-1" variant="primary">View your jobs</Button></Link>
                <Link to={`/companies/${companyDetails.id}`}><Button className="mx-1" variant="primary">View your profile</Button></Link>
                <Button className="mx-1" id="update-account-btn" onClick={displayAccountUpdateForm}>Update account details</Button>

                <div id="account-update-form" className="hide">
                    <CoUpdateForm companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} displayAccountUpdateForm={displayAccountUpdateForm} />
                </div>

            </>
    )
}
