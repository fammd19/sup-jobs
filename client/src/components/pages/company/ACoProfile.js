import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function ACoProfile () {
    

    const {id} = useParams();

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
            fetch("/api/company/"+id)
            .then(response=>response.json())
            .then(json=>setCompanyDetails(json))
        },[])


        return (
            <>
                <h1>{companyDetails.name}</h1>

                <div>
                    <p>Logo: {companyDetails.logo}</p>
                    <p>Size: {companyDetails.size}</p>
                    <p>Industry: {companyDetails.industry}</p>
                    <p>About: {companyDetails.about}</p>
                    <p>Website: {companyDetails.website_link}</p>
                    <p>LinkedIn: {companyDetails.linkedin_link}</p>
                    <p>Facebook: {companyDetails.facebook_link}</p>
                    <p>Instagram: {companyDetails.instagram_link}</p>                   
                </div>

                {/* <Button className="mx-1">View jobs</Button> */}

            </>
    )
}
