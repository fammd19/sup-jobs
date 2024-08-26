import { Form, Button } from "react-bootstrap"
import { useEffect, useState } from "react"

export default function CoUpdateForm ( {companyDetails, setCompanyDetails, displayAccountUpdateForm } ) {

    const [updatedCompanyDetails, setUpdatedCompanyDetails] = useState({
        name: "",
        abn: "",
        size: "",
        industry: "",
        about: "",
        mission_statement: "",
        website_link: "",
        facebook_link: "",
        instagram_link: "",
        linkedin_link: "",
        logo: "",
        admin_email: "",
        hashed_password: ""
    })

    useEffect(()=>  {
        fetch("/api/company/account")
        .then(response=>response.json())
        .then(json=>{
            setUpdatedCompanyDetails(json);
        }
        )
    },[])

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("api/company/account", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCompanyDetails),
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
                setCompanyDetails(data);
            }
        })
        .catch(error => {
            console.error("Error updating company details:", error);
        });
        displayAccountUpdateForm()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.name} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, name: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Admin email</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.admin_email} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, admin_email: e.target.value})}/>
            </Form.Group> 
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={updatedCompanyDetails.hashed_password} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, hashed_password: e.target.value})}/>
            </Form.Group> 
            <Form.Group>
                <Form.Label>Logo link</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.logo} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, logo: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Size</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.size} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, size: parseInt(e.target.value)})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>About</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.about} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, about: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mission statement</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.mission_statement} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, mission_statement: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.website_link} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, website_link: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.linkedin_link} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, linkedin_link: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Facebook</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.facebook_link} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, facebook_link: e.target.value})} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Instagram</Form.Label>
                <Form.Control type="text" value={updatedCompanyDetails.instagram_link} onChange={(e)=>setUpdatedCompanyDetails({...updatedCompanyDetails, instagram_link: e.target.value})} />
            </Form.Group>
            <Button type="submit">Submit update</Button>  
        </Form>
    )
}

