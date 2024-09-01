import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap';

export default function ACoProfile () {
    

    const {id} = useParams();

    const navigate = useNavigate();

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
                    <img className="co-logo mb-4" src={`${companyDetails.logo}`} />
                    <p><b>Size:</b> {companyDetails.size}</p>
                    <p><b>Industry:</b> {companyDetails.industry}</p>
                    {
                        companyDetails.mission_statement
                        ?
                        <p><b>Mission:</b> {companyDetails.mission_statement}</p>
                        :
                        null
                    }
                    <p><b>About:</b> {companyDetails.about}</p>
                    <Row className="mb-4">
                        <a href={`${companyDetails.website_link}`}>{companyDetails.website_link}</a>
                    </Row>
                    <Row className="mx-5">
                        <Col>
                        {
                            companyDetails.linkedin_link
                            ?
                            <a href={`${companyDetails.linkedin_link}`}><img className="small-icon clickable" src="../../../assets/linkedin.svg"/></a>
                            :
                            null
                        }
                        </Col>
                        <Col>
                        {
                            companyDetails.facebook_link
                            ?
                            <a href={`${companyDetails.facebook_link}`}><img className="small-icon clickable" src="../../../assets/facebook.svg"/></a>
                            :
                            null
                        }
                        </Col>
                        <Col>
                        {
                            companyDetails.instagram_link
                            ?
                            <a href={`${companyDetails.instagram_link}`}><img className="small-icon clickable" src="../../../assets/instagram.svg"/></a>
                            :
                            null
                        }  
                        </Col>
                    </Row>
                        <Link to={`/jobs/company/${companyDetails.id}`}><Button className="mx-1 my-4" variant="primary">View live jobs</Button></Link>

                    <Row>

                    </Row>               
                </div>

            </>
    )
}
