import { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar";

export default function PostJob ( {company} ) {

    const navigate = useNavigate();

    if (!company) {
        navigate("/")
    }

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

    
    function handleSubmit (e) {
        e.preventDefault();
        fetch("api/jobs/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(job),
          })
          .then(response => response.json())
          .then(json => navigate(`/jobs/${json.id}`))
          .catch(error => console.log(error.message))
    }

    return (
        <>
            <NavBar company={company}/>
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
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Salary</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.salary} onChange={(e)=>setJob({...job, salary: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Col sm={6} md={5} lg={4}>
                    <Form.Select onChange={(e)=>setJob({...job, job_type: e.target.value})}>      
                        <option>Type</option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        <option value="contract">Contract</option>
                        <option value="freelance">Freelance</option>
                        <option value="intern">Intern</option>
                        <option value="co-founder">Co-Founder</option>
                    </Form.Select>
                </Col>
                <Col sm={6} md={5} lg={4}>
                    <Form.Select onChange={(e)=>setJob({...job, department: e.target.value})}>    
                        <option>Department</option>
                        <option value="co-founder">Co-Founder</option>
                        <option value="customer services">Customer Services</option>
                        <option value="data & analytics">Data & Analytics</option>
                        <option value="design">Design</option>
                        <option value="finance">Finance</option>
                        <option value="human resources">Human Resources</option>
                        <option value="legal">Legal</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                        <option value="technology">Technology</option>
                    </Form.Select>
                </Col>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Location</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.location} onChange={(e)=>setJob({...job, location: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Description</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.description} onChange={(e)=>setJob({...job, description: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Experience</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.experience} onChange={(e)=>setJob({...job, experience: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Application link</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.application_link} onChange={(e)=>setJob({...job, application_link: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Closing date</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="date" value={job.closing_date} onChange={(e)=>setJob({...job, closing_date: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>




                <Button type="submit">Submit</Button>
            </Form>
        </>
                  )
}