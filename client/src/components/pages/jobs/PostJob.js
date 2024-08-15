import { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export default function PostJob ( {company} ) {



    const [job, setJob] = useState({
      title: "",
      company_id: "",
      salary:"",
      department:"",
      location:"",
      job_type:"",
      role_description:"",
      experience:"",
      application_link:"",
      closing_date:""
    })

    if (!company) {
        return < Navigate to="/account" />
        //need to include a prompt here
    } else {
        setJob({...job, company_id: company.id})
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        fetch("/jobs/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(job),
          })
          .then(response => response.json())
          .then(json => Navigate(`/jobs/${json.id}`))
          .catch(error => console.log(error.message))
    }

    return (
        <>
            <Form className="mt-3" onSubmit={handleSubmit}>
                 
                        <Form.Group className="my-3">
                            <Row>
                                <Col sm={2} md={2} lg={2}>
                                    <Form.Label>Title</Form.Label>
                                </Col>
                                <Col sm={6} md={5} lg={4}>
                                    <Form.Control type="text" value={job.title} onChange={(e)=>setJob({...job, title: e.target.value})} />
                                </Col>
                            </Row>
                        </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </>
                  )
}