import { useState, useEffect } from "react";
import { Form, Button, Col, Row, Dropdown } from "react-bootstrap";
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
      key_responsibility_1:"",
      key_responsibility_2:"",
      key_responsibility_3:"",
      key_responsibility_4:"",
      key_responsibility_5:"",
      essential_experience:"",
      optional_experience:"",
      postcode:"",
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
            <Form className="mt-3 text-start mx-3" onSubmit={handleSubmit}>
                 
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Title</Form.Label>
                        </Col>
                        </Row>
                        <Row>
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
                        </Row>
                        <Row>
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
                        <option value="design">Design</option>
                        <option value="finance">Finance</option>
                        <option value="human resources">Ops & HR</option>
                        <option value="marketing">Marketing</option>
                        <option value="technology">Tech & Data</option>
                    </Form.Select>
                </Col>
                <Col sm={6} md={5} lg={4}>
                    <Form.Select onChange={(e)=>setJob({...job, location: e.target.value})}>
                            <option value="">All locations</option>
                            <option value="remote">Remote</option>
                            <option value="act">ACT</option>
                            <option value="nsw">New South Wales</option>                    
                            <option value="nt">Northern Territory</option>
                            <option value="qld">Queensland</option>
                            <option value="sa">South Australia</option>
                            <option value="tas">Tasmania</option>
                            <option value="vic">Victoria</option>
                            <option value="wa">Western Australia</option>
                        </Form.Select>
                </Col>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Postcode</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.postcode} onChange={(e)=>setJob({...job, postcode: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>    
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Description</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.description} onChange={(e)=>setJob({...job, description: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Form.Label>Key responsibilities</Form.Label>
                        <Row>
                        <Col sm={6} md={5} lg={4}><Form.Control placeholder="1" type="text" value={job.key_responsibility_1} onChange={(e)=>setJob({...job, key_responsibility_1: e.target.value})} /></Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={5} lg={4}><Form.Control placeholder="2" type="text" value={job.key_responsibility_2} onChange={(e)=>setJob({...job, key_responsibility_2: e.target.value})} /></Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={5} lg={4}><Form.Control placeholder="3" type="text" value={job.key_responsibility_3} onChange={(e)=>setJob({...job, key_responsibility_3: e.target.value})} /></Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={5} lg={4}><Form.Control placeholder="4" type="text" value={job.key_responsibility_4} onChange={(e)=>setJob({...job, key_responsibility_4: e.target.value})} /></Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={5} lg={4}><Form.Control placeholder="5" type="text" value={job.key_responsibility_5} onChange={(e)=>setJob({...job, key_responsibility_5: e.target.value})} /></Col>
                        </Row>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Required experience</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.essential_experience} onChange={(e)=>setJob({...job, essential_experience: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Optional experience</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={job.optional_experience} onChange={(e)=>setJob({...job, optional_experience: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Application link</Form.Label>
                        </Col>
                        </Row>
                        <Row>
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
                        </Row>
                        <Row>
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