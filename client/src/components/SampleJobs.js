import { useState, useEffect } from 'react';
import { Container, Col, Card, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function SampleJobs ( {number} ) {

    const [jobs, setJobs] = useState([])


    useEffect ( () => {
        fetch('/api/jobs/all')
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => console.log(error.message))
    },[])
    return (
    <Container>
            {
                jobs.length>0
                ?
                <Row>
                        {
                            jobs.slice(0, number).map((job)=> {
                                return(
                                    <Col>
                                <Card className="my-3" key={job.id}>
                                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                    <Card.Body>
                                            <Card.Title>{`${job.title}`}</Card.Title>
                                            <Card.Subtitle>{`${job.company.name}`}</Card.Subtitle>
                                            <Card.Text>${`${job.salary}`}</Card.Text>
                                            <Card.Text>{`${job.location}`}</Card.Text>
                                            <Card.Text>{`${job.job_type}`}</Card.Text>
                                            { job.closing_date
                                            ?
                                            <Card.Text>{`${job.closing_date}`}</Card.Text>
                                        :
                                        null}
                                            <Link to={`/jobs/${job.id}`}><Button variant="primary">More details</Button></Link>
                                    </Card.Body>
                                </Card>
                                </Col>
                        )
                    })
                    }

                </Row>
                :
                <p>No jobs found</p>
            }
        </Container>
    )
}
//     return (
//         <Container className="mt-4">
//             <h3>Latest jobs</h3>
//             <Row>
//                 <Col>
//                     <Card>
//                         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Body>
//                             <Card.Link href="#">Card Link</Card.Link>
//                             <Card.Link href="#">Another Link</Card.Link>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col>
//                     <Card>
//                         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Body>
//                             <Card.Link href="#">Card Link</Card.Link>
//                             <Card.Link href="#">Another Link</Card.Link>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col>
//                     <Card>
//                         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Body>
//                             <Card.Link href="#">Card Link</Card.Link>
//                             <Card.Link href="#">Another Link</Card.Link>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

