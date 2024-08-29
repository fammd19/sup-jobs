import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link, useNavigate } from 'react-router-dom';
import { Row, Card, Col, Container, Button } from 'react-bootstrap'
import JobUpdateForm from "./JobUpdateForm";


export default function JobPage ( {candidate, company} ) {

    const {id} = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState (null)
    const [saved, setSaved] = useState (false)


    useEffect (()=> {
        if (candidate) {
            fetch('/api/jobs/saved') 
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(json => {
              setSaved(json); 
              let jobFound = false;
              for (const saved_job of json) {
                if (saved_job.id === parseInt(id)) {
                  jobFound = true;
                  break; 
                }
              }
      
              setSaved(jobFound);
            })
            .catch(error => {
              setSaved(false); 
            });
        }}, [id])
    

    useEffect ( () => {
            fetch(`/api/jobs/${id}`)
            .then(res => res.json())
            .then(json => setJob(json))
        }, [id, saved]
    )


    function displayPrompt (id) {
        let prompt = document.getElementById(id);
        prompt.classList.remove("hide");
        setTimeout(() => prompt.classList.add("hide"), 5000);
      }

    function displayJobUpdateForm () {
        const formDiv = document.getElementById("job-update-form");
        const showBtn = document.getElementById("update-job-btn")
        if (formDiv.classList.contains("hide")) {
            formDiv.classList.remove("hide") 
            showBtn.textContent="Cancel update"
        } else {
            formDiv.classList.add("hide")
            showBtn.textContent="Update details"   
        }
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
        .then(response=>{
            response.json()
            setSaved(true)
    })
        //need to display a prompt here
    }
    

    function handleRemove () {
        fetch(`/api/saved-jobs/${job.id}`, {
            method: "DELETE",
            })
            .then(response => {
                setSaved(false)
                if (response.okay) {
                }
                else {
                    console.log(response.error)
                }
            })
    }

    function handleArchive () {

        fetch(`/api/jobs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({archived_job:true}),
        })
            .then(response => {
                if (response.ok) {
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
                    {
                        job.archived_job
                        ?
                        <h2 className="my-4 archived-banner">This job is no longer available</h2>
                        :
                        null
                    }
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
                                    <p className="mb-0">{`${job.closing_date.split(' ')[0]}`}</p>
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
                                <p><b>Key responsibilities</b></p>
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
                                {/* Need to fix link */}
                                <p><a href={job.application_link}>{`${job.application_link}`}</a></p>
                                
                            </Row>
                            <div>
                                {
                                    candidate && saved===true
                                    ?
                                    <Button className="mx-1" onClick={handleRemove}>Remove job</Button>
                                    :
                                    <div>
                                        {
                                        candidate
                                        ?
                                        <Button className="mx-1" onClick={handleSave}>Save job</Button>
                                        :
                                        null
                                        }
                                        {
                                        company && job.company.id === company.id
                                            ?
                                            <Row>
                                                <Col><Button className="mx-1" id="update-job-btn" onClick={displayJobUpdateForm}>Update job</Button></Col>
                                                <div id="job-update-form" className="hide">
                                                    <JobUpdateForm job={job} setJob={setJob} displayJobUpdateForm={displayJobUpdateForm} />
                                                </div>
                                                <Col><Button className="mx-1" onClick={handleArchive}>Archive job</Button></Col>
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
