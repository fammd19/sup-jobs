import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login ( {candidate, setCandidate} ) {
    
        const [email, setEmail] = ""
        const [password, setPassword] = ""

        function handleSubmit(e) {
            e.preventDefault()
            fetch('/api/candidate/login')
            .then(response=>response.json)
            .then(json=> {
                setCandidate(json)
            })
        }

        if (candidate) {
            return < Navigate to="/" />
        }

        return (
            <>
                <h1>Login Page</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group> 
                    <Button type="submit">Login</Button>            
                </Form>
            </>
    )
}