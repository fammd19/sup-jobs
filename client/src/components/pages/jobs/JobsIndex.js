import React, { useState, useEffect } from 'react'
import { Row, Card, Col, Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

export default function JobsIndex ( { candidate, company }) {
    const [jobs, setJobs] = useState([])

    useEffect ( () => {
        fetch('/api/jobs/all')
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => console.log(error.message))
    },[])

    let numJobs
    if (!candidate) {
        numJobs = 10
    }

    return (

        <Container>
            {
                jobs.length>0
                ?
                <>
                    {
                        !candidate && !company
                        ?
                        <p>Please login to view all jobs</p>
                        :
                        null
                    }
                    <Col>
                        {
                            jobs.slice(0, numJobs).map((job)=> {
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
                                                <Card.Title>{`${job.title}`}</Card.Title>
                                                <Card.Subtitle>{`${job.company.name}`}</Card.Subtitle>
                                                <Card.Text>${`${job.salary}`}</Card.Text>
                                                <Card.Text>{`${job.location}`}</Card.Text>
                                            </Col>
                                            <Col className="col-5">
                                                <Card.Text>{`${job.job_type}`}</Card.Text>
                                                { job.closing_date
                                                ?
                                                <Card.Text>{`${job.closing_date}`}</Card.Text>
                                            :
                                            null}
                                                <Link to={`/jobs/${job.id}`}><Button variant="primary">More details</Button></Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                        )
                    })
                    }

                </Col>
                </>
                :
                <p>No jobs found</p>
            }
        </Container>
    )
}