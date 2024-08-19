import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import { Row, Card, Col, Container, Button } from 'react-bootstrap'


export default function JobPage ( {candidate} ) {

    const {id} = useParams();
    const [job, setJob] = useState (null)


    useEffect ( () => {
        fetch(`/api/jobs/${id}`)
        .then(res => res.json())
        .then(json => setJob(json))
    }, [id])


    function displayPrompt (id) {
        let prompt = document.getElementById(id);
        prompt.classList.remove("hide");
        setTimeout(() => prompt.classList.add("hide"), 5000);
      }
    
    function handleSave () {
        //Issue with proxy due to using index. See how can resolve
        fetch(`http://localhost:3000/api/jobs/${job.id}/save`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                jobId: job.id,
                candidateId: candidate.id
            })
        })
        .then(response=>response.json())
        //need to display a prompt here
    }
    

    return (
        <>
            {
                job
                ?
                <main className="mx-5">
                    <div  className="my-3" key={job.id}>
                        <Row>
                            <Col>
                                <Row className="justify-content-center mt-2">
                                    <img className="job-logo" src={`${job.company.logo}`} />
                                </Row >
                            </Col>
                            <Col className="job-title col-8">
                                <Row clsssName="mt-2">
                                    <h1>{`${job.title}`}</h1>
                                    <h2>{`${job.company.name}`}</h2>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-5">
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
                            </Col>
                        </Row>
                        <Row>
                                <Card.Text>{`${job.role_description}`}</Card.Text>
                                {
                                    job.experience
                                    ?
                                    <Card.Text>{`${job.experience}`}</Card.Text>
                                    :
                                    null
                                }
                                
                            </Row>
                            <div>
                            {
                            candidate
                            ?
                            <Button className="mx-1" onClick={handleSave}>Save job</Button>
                            :
                            null
                        }
                        </div>

                        </div>
                        

            
                </main>
                :
                <p>No job details found</p>
            }
        </>
    )
}


{/* <h1>{`${job.title}`}</h1>
<h2>{`${job.company.name}`}</h2>
<img src={`${job.company.logo}`} />
<p>${`${job.salary}`}</p>
<p>{`${job.location}`}</p>
<p>{`${job.job_type}`}</p>
<p>{`${job.date_posted}`}</p>
<p>{`${job.closing_date}`}</p>
<div> */}