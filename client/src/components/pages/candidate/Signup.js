import { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar";

export default function Signup ( { candidate } ) {

    const navigate = useNavigate();

    if ( candidate ) {
        navigate("/")
    }
    
    const [newCandidate, setNewCandidate] = useState({
      first_name: "",
      last_name: "",
      email:"",
      password:"",
      preferred_department:"",
      preferred_industry:"",
    })

    
    function handleSubmit (e) {
        e.preventDefault();
        fetch("api/candidate/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCandidate),
          })
        .then(response => {
        if (!response.ok) {
            console.log("Signup unsuccessful");
        }
        return response.json();
        })
        .then(json => {
            if (json.id) {
                setNewCandidate(json);
                navigate("/");
            } else {
                console.log("Signup unsuccessful: No ID in response");
                setNewCandidate(null);
            }
        })
        .catch(err => {
            console.log("Signup failed:", err.message);
            setNewCandidate(null);
        });
    }

    return (
        <>
            <NavBar />
            <Form className="mt-3" onSubmit={handleSubmit}>
                 
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>First Name</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={newCandidate.first_name} onChange={(e)=>setNewCandidate({...newCandidate, first_name: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Last Name</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="text" value={newCandidate.last_name} onChange={(e)=>setNewCandidate({...newCandidate, last_name: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Email</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="email" value={newCandidate.email} onChange={(e)=>setNewCandidate({...newCandidate, email: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Password</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control type="password" value={newCandidate.password} onChange={(e)=>setNewCandidate({...newCandidate, password: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Col sm={6} md={5} lg={4}>
                    <Form.Select onChange={(e)=>setNewCandidate({...newCandidate, preferred_industry: e.target.value})}>      
                        <option>Industry</option>
                        <option value="agriculture, forestry & fishing">Agriculture, Forestry & Fishing</option>
                        <option value="construction">Construction</option>
                        <option value="consumer goods & services">Consumer Goods & Services</option>
                        <option value="education">Education</option>
                        <option value="health">Health</option>
                        <option value="hospitality, travel & lesiure">Hospitality, Travel & Leisure</option>
                        <option value="legal & financial services">Legal & Financial Servicer</option>
                        <option value="media & telecommunications">Media & Telecomms</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="mining">Mining</option>
                        <option value="technology & software">Technology & Software</option>
                    </Form.Select>
                </Col>
                <Col sm={6} md={5} lg={4}>
                    <Form.Select onChange={(e)=>setNewCandidate({...newCandidate, preferred_department: e.target.value})}>    
                        <option>Department</option>
                        <option value="co-founder">Co-Founder</option>
                        <option value="customer services">Customer Services</option>
                        <option value="data & analytics">Data & Analytics</option>
                        <option value="design">Design</option>
                        <option value="finance">Finance</option>
                        <option value="human resources">Human Resources</option>
                        <option value="legal">Legal</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                        <option value="technology">Technology</option>
                    </Form.Select>
                </Col>

                <Button type="submit">Submit</Button>
            </Form>
        </>
                  )
}