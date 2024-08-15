import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Button, Form, Col, Row } from 'react-bootstrap';

export default function CoLogin ( {company, setCompany} ) {
    
        const [admin_email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        function handleSubmit(e) {
            e.preventDefault()

            fetch('/api/company/login',{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({admin_email,password})
            })
            .then(response=>response.json())
            .then(json=> {
                setCompany(json)
            })
        }

        if (company) {
            return < Navigate to="/" />
        }

        return (
            <>
                <h1>Login Page</h1>
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