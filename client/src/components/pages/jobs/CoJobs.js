import React, { useState, useEffect } from 'react'
import { Row, Card, Col, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link, useNavigate, useParams } from "react-router-dom"

export default function CoJobs ( { candidate, company }) {

    const navigate = useNavigate()

    const { id } = useParams(); 
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (id) {
            fetch(`/api/jobs/company/${id}`)
                .then(res => res.json())
                .then(json => setJobs(json))
                .catch(error => console.log(error.message));
        } 
    }, [id]);

    return (
        <>
        <Container>
            {company
            ?
            <h1>{company.name} jobs</h1>
            :
            null
            }
            {
                jobs.length>0
                ?
                <>                    
                    <Col>
                        {
                            jobs.map((job)=> {
                                return(
                                <Card  className="my-3" key={job.id}>
                                    {
                                        job.archived_job===true
                                        ?
                                        <p className="archived-banner">This job has been archived</p>
                                        :
                                        null
                                    }
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
                                                <Card.Text className="mt-2">{`${job.job_type.toUpperCase()}`}</Card.Text>
                                                <Card.Text>{`${job.location.toUpperCase()}`}</Card.Text>
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
                <Row className="justify-content-center">
                    <Col className="col-2">
                        <Link className="link" to="/jobs">Jobs from all co's</Link>
                    </Col>
                    <Col className="col-2">
                        <Link className="link" to="/company-account">Your account</Link>
                    </Col>
                </Row>
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