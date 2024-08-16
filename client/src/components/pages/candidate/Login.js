import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Form, Col, Row } from 'react-bootstrap';
import NavBar from '../../NavBar';

export default function Login ( { candidate, setCandidate } ) {
    
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const navigate = useNavigate();

        if (candidate) {
            navigate("/")
        }

        function handleSubmit(e) {
            e.preventDefault();
    
            fetch('/api/candidate/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => {
                if (!response.ok) {
                    console.log("Login unsuccessful");
                }
                return response.json();
            })
            .then(json => {
                if (json.id) {
                    setCandidate(json);
                    navigate("/");
                } else {
                    console.log("Login unsuccessful: No ID in response");
                    setCandidate(null);
                }
            })
            .catch(err => {
                console.log("Login failed:", err.message);
                setCandidate(null);
            });
        }



        return (
            <>
            <NavBar />
                <h1>Candidate login</h1>
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center">
                        <Col xs={12} md={7} style={{ width: '60%' }}>
                            <Form.Group className="my-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group> 
                            <Button type="submit">Login</Button>
                        </Col>           
                    </Row>
                </Form>
                <Link to="/company-login">Company login</Link>
            </>
    )
}