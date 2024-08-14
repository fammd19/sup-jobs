import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Account ( {candidate, setCandidate} ) {
        

        if (!candidate) {
            return < Navigate to="/login" />
        }

        function displayAccountUpdateForm () {
            const formDiv = document.getElementById("account-update-form");
            const showBtn = document.getElementById("update-account-btn")
            if (formDiv.classList.contains("hide")) {
                formDiv.classList.remove("hide") 
                showBtn.textContent="Cancel update"
            } else {
                formDiv.classList.add("hide")
                showBtn.textContent="Update listing"   
            }
        }

        return (
            <>
                <h1>Account</h1>
                <p>{candidate.first_name}</p>

                <div>
                    <p>Name: {candidate.first_name} {candidate.last_name}</p>
                    <p>Email: {candidate.email}</p>
                    <p>Password: {candidate.password}</p>
                    <p>Preferred industry: {candidate.preferred_industry}</p>
                    <p>Preferred department: {candidate.preferred_department}</p>
                </div>

                <Button className="mx-1" id="update-account-btn" variant="warning" onClick={displayAccountUpdateForm}>Update details</Button>
                
                <div id="account-upate-form" className="hide">
                    <Form>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={first_name} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={last_name} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
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
                </div>
            </>
    )
}