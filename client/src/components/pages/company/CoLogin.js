import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Col, Row, Navbar } from 'react-bootstrap';
import NavBar from '../../NavBar';

export default function CoLogin ( { company, setCompany } ) {
    
        const [admin_email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const navigate = useNavigate();

        if (company) {
            navigate("/")
        }

        function handleSubmit(e) {
            e.preventDefault()

            fetch('/api/company/login',{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({admin_email,password})
            })
            .then(response => {
                if (!response.ok) {
                    console.log("Login unsuccessful");
                }
                return response.json();
            })
            .then(json => {
                if (json.id) {
                    setCompany(json);
                    navigate("/");
                } else {
                    console.log("Login unsuccessful: No ID in response");
                    setCompany(null);
                }
            })
            .catch(err => {
                console.log("Login failed:", err.message);
                setCompany(null);
            });
        }


        return (
            <>
                <NavBar />
                <h1>Company login</h1>
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center">
                        <Col xs={12} md={7} style={{ width: '60%' }}>
                            <Form.Group className="my-3">
                                <Form.Label>Admin email</Form.Label>
                                <Form.Control type="admin_email" value={admin_email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group> 
                            <Button type="submit">Login</Button> 
                        </Col>           
                    </Row>
                </Form>
            </>
    )
}