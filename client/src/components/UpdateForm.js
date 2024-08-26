import { Form, Button } from "react-bootstrap"
import { useEffect, useState } from "react"

export default function UpdateForm ( {candidateDetails, setCandidateDetails, displayAccountUpdateForm } ) {

    const [updatedCandidateDetails, setUpdatedCandidateDetails] = useState({
        first_name: "",
        last_name: "",
        hashed_password: "",
        email:""
    })

    useEffect(()=>  {
        fetch("/api/candidate/account")
        .then(response=>response.json())
        .then(json=>{
            setUpdatedCandidateDetails(json);
        }
        )
    },[])

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("api/candidate/account", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCandidateDetails),
        })
        .then(response => {
            if (!response.ok) {
                console.log("Update unsuccessful");
                return null;
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                setCandidateDetails(data);
            }
        })
        .catch(error => {
            console.error("Error updating candidate details:", error);
        });
        displayAccountUpdateForm()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" value={updatedCandidateDetails.first_name} onChange={(e)=>setUpdatedCandidateDetails({...updatedCandidateDetails, first_name: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" value={updatedCandidateDetails.last_name} onChange={(e)=>setUpdatedCandidateDetails({...updatedCandidateDetails, last_name: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={updatedCandidateDetails.email} onChange={(e)=>setUpdatedCandidateDetails({...updatedCandidateDetails, email: e.target.value})}/>
            </Form.Group> 
            {/* <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={updatedCandidateDetails.hashed_password} onChange={(e)=>setUpdatedCandidateDetails({...updatedCandidateDetails, hashed_password: e.target.value})}/>
            </Form.Group>  */}
            <Button type="submit">Submit update</Button>  
        </Form>
    )
}

