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
                                    <Col key={job.id}>
                                        <Card key={job.id}>
                                            <Row className="justify-content-center mt-2">
                                                {
                                                    job.company.logo
                                                    ?
                                                    <Card.Img variant="top" src={`${job.company.logo}`} />
                                                    :
                                                    <Card.Img variant="top" src="../../../assets/placeholder.svg" />
                                                }          
                                            </Row >
                                            <Card.Body>
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
                                                                <Link to="/login"><Button variant="secondary" disabled>
                                                                    Login to view details
                                                                </Button></Link>
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
                <Link to="/jobs/saved" className="link">View all saved jobs</Link>
                :
                <Link to="/jobs" className="link">View more jobs</Link>
            }

        </Container>
    )
}
