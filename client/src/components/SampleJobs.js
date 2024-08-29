import { useState, useEffect } from 'react';
import { Container, Col, Card, Row, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function SampleJobs ( {number, candidate, company, selection} ) {

    const [jobs, setJobs] = useState([])

    useEffect ( () => {
        fetch("/api/jobs/"+selection)
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => console.log(error.message))
    },[])
    return (
    <Container className="mb-5">
            {
                jobs.length>0
                ?
                <Row className="mb-2">
                        {
                            jobs.slice(0, number).map((job)=> {
                                return(
                                    <Col>
                                <Card key={job.id}>
                                    <Row className="justify-content-center mt-2">
                                        <Card.Img variant="top" src={`${job.company.logo}`} />
                                    </Row >
                                    <Card.Body>
                                        {
                                            job.archived_job
                                            ?
                                            <Card.Text className="archived-banner">This job is no longer available</Card.Text>
                                            :
                                            null
                                        }
                                            <Card.Title>{`${job.title}`}</Card.Title>
                                            <Card.Subtitle>{`${job.company.name}`}</Card.Subtitle>
                                            <Card.Text>${`${job.salary}`}</Card.Text>
                                            <Card.Text>{`${job.location}`}</Card.Text>
                                            <Card.Text>{`${job.job_type}`}</Card.Text>
                                            { 
                                                job.closing_date
                                                ?
                                                <Card.Text>{`${job.closing_date.split(' ')[0]}`}</Card.Text>
                                                :
                                                null
                                            }
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
                                                        Signup to view details
                                                      </Button>
                                                    </span>
                                                  </OverlayTrigger>
                                                    
                                                }
                                    </Card.Body>
                                </Card>
                                </Col>
                                
                        )
                    })
                    }

                </Row>
                :
                null
            }
            {
                selection ==="saved"
                ?
                <Link to="/jobs/saved"><Button>View all saved jobs</Button></Link>
                :
                <Link to="/jobs"><Button>View more jobs</Button></Link>
            }

        </Container>
    )
}
