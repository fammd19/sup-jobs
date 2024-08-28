import React, { useState, useEffect } from 'react'
import { Row, Card, Col, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"

export default function SavedJobs ( { candidate }) {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()

    useEffect ( () => {
        fetch(`/api/jobs/saved`)
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => console.log(error.message))
    },[])

     if (!candidate) {
        navigate("/jobs")
     }

    return (
        <>
        <Container>
            <h1>Saved jobs</h1>
            {
                jobs.length>0
                ?
                <>                    
                    <Col>
                        {
                            jobs.map((job)=> {
                                return(
                                <Card  className="my-3" key={job.id}>
                                    <Card.Body>
                                        {
                                            job.archived_job===true
                                            ?
                                            <h2>This job is no longer available</h2>
                                            :
                                            null
                                        }
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
                                                <Link to={`/jobs/${job.id}`}><Button variant="primary">More details</Button></Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                        )
                    })
                    }

                </Col>
                <Button onClick={()=>navigate("/jobs")}>Save more jobs</Button>
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