import React, { useState, useEffect } from 'react'
import { Row, Card, Col, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from "react-router-dom"

export default function CoJobs ( { candidate, company }) {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const company_id = queryParams.get('company_id');

    useEffect ( () => {
        fetch(`/api/jobs/company/${company_id}`)
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => console.log(error.message))
    },[])

     if (!company) {
        navigate("/jobs")
     }

    return (
        <>
        <Container>
            <h1>{company.name} jobs</h1>
            {
                jobs.length>0
                ?
                <>
                <Button onClick={()=>navigate("/jobs")}>Jobs from all companies</Button>
                    
                    <Col>
                        {
                            jobs.map((job)=> {
                                return(
                                <Card  className="my-3" key={job.id}>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Row className="justify-content-center mt-2">
                                                    <Card.Img src={`${job.company.logo}`} />
                                                </Row >
                                            </Col>
                                            <Col className="col-5">
                                                <Card.Title className="mt-2"><b>{`${job.title}`}</b></Card.Title>
                                                <Card.Subtitle><b>{`${job.company.name}`}</b></Card.Subtitle>
                                                <Card.Text className="mt-4">${`${job.salary}`}</Card.Text>
                                                
                                            </Col>
                                            <Col className="col-5">
                                                <Card.Text className="mt-2">{`${job.job_type}`}</Card.Text>
                                                <Card.Text>{`${job.location}`}</Card.Text>
                                                {
                                                    candidate || company
                                                    ?
                                                    <Link to={`/jobs/${job.id}`}><Button variant="primary">More details</Button></Link>
                                                    :
                                                    <OverlayTrigger
                                                    placement="bottom"
                                                    overlay={<Tooltip id="button-tooltip">You must be logged in to view job details</Tooltip>}
                                                  >
                                                    <span className="d-inline-block">
                                                      <Button variant="primary  disabled" disabled style={{ pointerEvents: 'none' }}>
                                                        More details
                                                      </Button>
                                                    </span>
                                                  </OverlayTrigger>
                                                    
                                                }
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                        )
                    })
                    }

                </Col>
                <Button onClick={()=>navigate("/jobs")}>All jobs</Button>
                </>
                :
                <>
                    <p>No jobs found</p>
                    <Button onClick={()=>navigate("/jobs")}>Search again</Button>
                </>
            }
        </Container>
        </>
    )
}