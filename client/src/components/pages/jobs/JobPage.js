import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link, useNavigate } from 'react-router-dom';
import { Row, Card, Col, Container, Button } from 'react-bootstrap'


export default function JobPage ( {candidate, company} ) {

    const {id} = useParams();
    console.log(id)
    const navigate = useNavigate();
    const [job, setJob] = useState (null)
    const [saved, setSaved] = useState (false)

    

    
    useEffect(() => {
            fetch(`/api/jobs/saved`)
                .then(res => res.json())
                .then(json => {
                    for (const saved_job of json) {
                        console.log(saved_job.id)
                        if (saved_job.id === parseInt(id)) {
                            setSaved(true)
                            console.log(saved)
                            return saved
                        }
                    }
                })
    }, []);

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
        //Issue with proxy due to using index. See how can resolve - using full url works
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
    
    function handleDelete () {
        fetch(`/api/jobs/${id}`, {
            method: "DELETE"
            })
            .then(response => {
                if (response.okay) {
                    setJob(null)
                    navigate('/jobs')
                }
                else {
                    console.log(response.error)
                }
        })
    }

    return (
        <>  
            <p id="prompt" className="hide">Job successfully saved</p>
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
                                    <h1 className="mb-0">{`${job.title}`}</h1>
                                    <h2 className="mb-2">{`${job.company.name}`}</h2>
                                    <p className="mb-0">${`${job.salary}`}</p>
                                <p className="mb-0">{`${job.location}`}</p>
                                <p className="mb-0">{`${job.job_type}`}</p>
                                    { job.closing_date
                                    ?
                                    <p className="mb-0">{`${job.closing_date}`}</p>
                                    :
                                    null}
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-3 text-start">

                                <div>
                                    <p><b>About us</b>: {`${job.company.about}`}</p>
                                    <p><b>The role</b>: {`${job.role_description}`}</p>
                                </div>

                                <ul>
                                    {
                                        job.key_responsibility_1
                                        ?
                                        <li>{`${job.key_responsibility_1}`}
                                        </li>
                                        :
                                        null
                                    }
                                
                                </ul>
                                <ul>
                                    {
                                        job.key_responsibility_2
                                        ?
                                        <li>{`${job.key_responsibility_2}`}
                                        </li>
                                        :
                                        null
                                    }
                                </ul>
                                <ul>
                                    {
                                        job.key_responsibility_3
                                        ?
                                        <li>{`${job.key_responsibility_3}`}
                                        </li>
                                        :
                                        null
                                    }
                                
                                </ul>
                                <ul>
                                    {
                                        job.key_responsibility_4
                                        ?
                                        <li>{`${job.key_responsibility_4}`}
                                        </li>
                                        :
                                        null
                                    }
                                </ul>
                                <ul>
                                    {
                                        job.key_responsibility_5
                                        ?
                                        <li>{`${job.key_responsibility_5}`}
                                        </li>
                                        :
                                        null
                                    }
                                </ul>

                                {
                                    job.essential_experience
                                    ?
                                    <div>
                                        <h4>Essential</h4>
                                        <p>{`${job.essential_experience}`}</p>
                                    </div>
                                    :
                                    null
                                }
                                {
                                    job.optional_experience
                                    ?
                                    <div>
                                        <h4>Nice to haves</h4>
                                        <p>{`${job.optional_experience}`}</p>
                                    </div>
                                    :
                                    null
                                }
                                <h4>Apply</h4>
                                <p><a href="">{`${job.application_link}`}</a></p>
                                
                            </Row>
                            <div>
                                {
                                    saved === true
                                    ?
                                    <Button className="mx-1" onClick={handleSave}>Remove job</Button>
                                    :
                                    <div>
                                        {
                                        candidate
                                        ?
                                        <Button className="mx-1" onClick={handleSave}>
                                            {
                                                console.log(saved)
                                            }
                                            {
                                                saved
                                                ?
                                                "Remove job"
                                                :
                                                "Save job"
                                            }
                                        </Button>
                                        :
                                        company && job.company.id === company.id
                                            ?
                                            <Row>
                                                <Col><Button className="mx-1">Update job</Button></Col>
                                                <Col><Button className="mx-1" onClick={handleDelete}>Delete job</Button></Col>
                                            </Row>
                                            :
                                            null
                                        }
                                </div>

                                }

                            </div>

                        </div>
                        

            
                </main>
                :
                <p>No job details found</p>
            }
            <Link to="/jobs"><Button>Back to jobs</Button></Link>
        </>

    )
}
