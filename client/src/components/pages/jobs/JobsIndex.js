import React, { useState, useEffect } from 'react'
import { Row, Card, Col, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom"
import Filter from '../../Filter'

export default function JobsIndex ( { candidate, company }) {
    const [jobs, setJobs] = useState([])
    const [url, setUrl] = useState("/api/jobs/all")

    const location = useLocation();



    useEffect(() => {
        // Parse query parameters from the URL
        const queryParams = new URLSearchParams(location.search);
        const dep = queryParams.get('dep');

        if (dep) {
            setUrl(`/api/jobs/filter?department=${dep}`)
        }
})
    // useEffect ( () => {
    //     fetch('/api/jobs/all')
    //     .then(res => res.json())
    //     .then(json => setJobs(json))
    //     .catch(error => console.log(error.message))
    // },[])

    useEffect ( () => {
        fetch(url)
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => console.log(error.message))
    },[url])

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
                    <Filter setUrl={setUrl}/>
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
                                                <Card.Title className="mt-2"><b>{`${job.title}`}</b></Card.Title>
                                                <Card.Subtitle><b>{`${job.company.name}`}</b></Card.Subtitle>
                                                <Card.Text className="mt-4">${`${job.salary}`}</Card.Text>
                                                
                                            </Col>
                                            <Col className="col-5">
                                                <Card.Text className="mt-2">{`${job.job_type}`}</Card.Text>
                                                <Card.Text>{`${job.location}`}</Card.Text>
                                                {
                                                    candidate
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
                </>
                :
                <p>No jobs found</p>
            }
        </Container>
    )
}