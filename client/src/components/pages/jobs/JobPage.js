import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';

export default function JobPage ( {candidate} ) {
    const {id} = useParams();
    const [job, setJob] = useState (null)


    useEffect ( () => {
        fetch(`/api/jobs/${id}`)
        .then(res => res.json())
        .then(json => setJob(json))
    }, [id])


    // function displayPrompt (id) {
    //     let prompt = document.getElementById(id);
    //     prompt.classList.remove("hide");
    //     setTimeout(() => prompt.classList.add("hide"), 5000);
    //   }
    
    function handleSave () {
        fetch(`api/jobs/${job.id}/save`, {
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
                    <h1>Listing details</h1>
                    <div className="listing" value={job.id}>
                        <h2>{`${job.title}`}</h2>

                        {
                            candidate
                            ?
                            <Button className="mx-1" onClick={handleSave}>Save job</Button>
                            :
                            null
                        }
                
                    </div>
                </main>
                :
                <p>No job details found</p>
            }
        </>
    )
}