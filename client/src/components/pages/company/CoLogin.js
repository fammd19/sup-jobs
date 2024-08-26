import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Col, Row, Alert } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NavBar from '../../NavBar';

export default function Login({ company, setCompany, candidate }) {
    const navigate = useNavigate();

    if (candidate || company) {
        navigate("/");
    }

    const formik = useFormik({
        initialValues: {
            admin_email: "",
            password: ""
        },
        validationSchema: Yup.object({
            admin_email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
        }),
        onSubmit: (values, { setErrors, setStatus }) => {
            fetch('/api/company/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then((error) => {
                        setStatus({ general: "Login unsuccessful. Please check your username & password then try again. For candidates, please head to the candidate login page." });
                    
                })
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
                    setStatus({ general: "Login unsuccessful. Please check your username & password then try again. For candidates, please head to the candidate login page." });

                }
            })
            .catch(err => {
                console.log("Login failed:", err.message);
                setCompany(null);
                setStatus({ general: "Login unsuccessful. Please check your username & password then try again. For candidates, please head to the candidate login page." });

            });
        }
    });

    return (
        <>
            <NavBar />
            <h1>Company login</h1>
            <h5><a href="/company-signup">Company signup</a></h5>

            <Form onSubmit={formik.handleSubmit}>
                <Row className="justify-content-center">
                    <Col xs={12} md={7} style={{ width: '60%' }}>
                        <Form.Group className="my-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="admin_email"
                                value={formik.values.admin_email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.admin_email && formik.errors.admin_email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.admin_email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.password && formik.errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Login</Button>
                        {formik.status?.general && (
                            <Alert variant="danger">
                                {formik.status.general}
                            </Alert>
                        )}
                    </Col>
                </Row>
            </Form>

            <div className="my-4">
                <a href="/login">Candidate login</a>
            </div>
        </>
    );
}

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Button, Form, Col, Row } from 'react-bootstrap';
// import NavBar from '../../NavBar';

// export default function CoLogin ( { candidate, company, setCompany } ) {
    
//         const [admin_email, setEmail] = useState("")
//         const [password, setPassword] = useState("")

//         const navigate = useNavigate();

//         if (company || candidate) {
//             navigate("/")
//         }

//         function handleSubmit(e) {
//             e.preventDefault()

//             fetch('/api/company/login',{
//                 method: "POST",
//                 headers: {
//                     "Content-Type":"application/json"
//                 },
//                 body: JSON.stringify({admin_email,password})
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     console.log("Login unsuccessful");
//                 }
//                 return response.json();
//             })
//             .then(json => {
//                 if (json.id) {
//                     setCompany(json);
//                     navigate("/");
//                 } else {
//                     console.log("Login unsuccessful: No ID in response");
//                     setCompany(null);
//                 }
//             })
//             .catch(err => {
//                 console.log("Login failed:", err.message);
//                 setCompany(null);
//             });
//         }


//         return (
//             <>
//                 <NavBar />
//                 <h1>Company login</h1>
//                 <h5><a href="/company-signup">Company Signup</a></h5>
//                 <Form onSubmit={handleSubmit}>
//                     <Row className="justify-content-center">
//                         <Col xs={12} md={7} style={{ width: '60%' }}>
//                             <Form.Group className="my-3">
//                                 <Form.Label>Admin email</Form.Label>
//                                 <Form.Control type="admin_email" value={admin_email} onChange={(e) => setEmail(e.target.value)} />
//                             </Form.Group>
//                             <Form.Group className="my-3">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//                             </Form.Group> 
//                             <Button type="submit">Login</Button> 
//                         </Col>           
//                     </Row>
//                 </Form>
//             </>
//     )
// }