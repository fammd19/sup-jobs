import React, { useState, useEffect } from 'react'
import { Row, Card, Col, Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import NavBar from '../../NavBar'

export default function JobsIndex ( { candidate }) {
    const [jobs, setJobs] = useState([])

    useEffect ( () => {
        fetch('/api/jobs/all')
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => console.log(error.message))
    },[])

    return (

        <Container>
            {/* <NavBar candidate={candidate}/> 
            Issue with passing candidate*/}
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
                                        <Row>
                                        <Col>
                                            <Card.Title>{`${job.title}`}</Card.Title>
                                            <Card.Subtitle>{`${job.company.name}`}</Card.Subtitle>
                                            <Card.Text>${`${job.salary}`}</Card.Text>
                                            <Card.Text>{`${job.location}`}</Card.Text>
                                        </Col>
                                        <Col>
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