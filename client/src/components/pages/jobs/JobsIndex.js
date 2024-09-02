import React, { useState, useEffect } from 'react'
import { Row, Card, Col, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import Filter from '../../Filter'

export default function JobsIndex ( { candidate, company }) {
    const [jobs, setJobs] = useState([])
    const [url, setUrl] = useState("/api/jobs/live")

    const location = useLocation();
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();

    const departmentFromURL = searchParams.get('department') || '';

    useEffect ( () => {

        fetch(url)
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => console.log(error.message))
    },[url])

    const clearFilters = () => {
        navigate('/jobs', { replace: true });
        setUrl("/api/jobs/live")
    };


    // //Condition to limit number of jobs to 10 if candidate not logged in
    let numJobs
    // if (!candidate && !company) {
    //     numJobs = 10
    // }

    return (

        <Container>
            <h1>Startup & small company jobs</h1>
            {
                jobs.length>0
                ?
                <>
                    {
                        !candidate && !company
                        ?
                        <p>Please <Link to="/login">login</Link> to view job details</p>
                        :
                        null
                    }

                    <Filter setUrl={setUrl} defaultDepartment={departmentFromURL}/>

                    {
                        company
                        ?
                        <Link to={`/jobs/company/${company.id}`}><p className="my-2" variant="primary"><b>View your jobs</b></p></Link>
                        :
                        null
                    }

                    {   
                        candidate
                        ?
                        <Link to={`/jobs/saved`}><p className="my-2" variant="primary"><b>View your saved jobs</b></p></Link>
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
                                                        overlay={<Tooltip id="button-tooltip">You must be logged in to view job details</Tooltip>}>
                                                        <span className="d-inline-block">
                                                            <Link to="/login">
                                                                <Button variant="secondary" disabled>
                                                                    Login to view details
                                                                </Button>
                                                            </Link>
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
                {/* <Button onClick={()=>setUrl("/api/jobs/live")}>Clear filters</Button> */}
                <Button onClick={clearFilters}>Clear filters</Button>
                </>
                :
                <>
                    <p>No jobs found</p>
                    {/* <Button onClick={()=>setUrl("/api/jobs/live")}>Search again</Button> */}
                    <Button onClick={clearFilters}>Clear filters</Button>
                </>
            }
        </Container>
    )
}