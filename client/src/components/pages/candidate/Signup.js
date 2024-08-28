import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import NavBar from "../../NavBar";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Signup({ candidate, setCandidate }) {
    const navigate = useNavigate();

    if (candidate) {
        navigate("/");
    }

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            preferred_department: "",
            preferred_industry: ""
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
            preferred_department: Yup.string().required("Preferred department is required"),
            preferred_industry: Yup.string().required("Preferred industry is required")
        }),
        onSubmit: (values) => {
            fetch("api/candidate/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(response => response.json())
                .then(json => {
                    if (json.id) {
                        setCandidate(json)
                        navigate("/");
                    } else {
                        console.log("Signup unsuccessful: No ID in response");
                        setCandidate(null)
                    }
                })
                .catch(err => {
                    console.log("Signup failed:", err.message);
                    setCandidate(null)
                });
        }
    });

    return (
        <>
            <NavBar />
            <h1 className="mt-5">Candidate signup</h1>
            <Form className="mt-3 text-start" onSubmit={formik.handleSubmit}>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={7} style={{ width: '40%' }}>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="first_name"
                                        value={formik.values.first_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.first_name && formik.errors.first_name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.first_name}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="last_name"
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.last_name && formik.errors.last_name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.last_name}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Email</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.email && formik.errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.email}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Password</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
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
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Preferred Industry</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Select
                                        name="preferred_industry"
                                        value={formik.values.preferred_industry}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.preferred_industry && formik.errors.preferred_industry}
                                    >
                                        <option value="">Preferred industry</option>
                                        <option value="agriculture">Agriculture, Forestry & Fishing</option>
                                        <option value="construction">Construction</option>
                                        <option value="cgs">Consumer Goods & Services</option>
                                        <option value="education">Education</option>
                                        <option value="health">Health</option>
                                        <option value="hospitality">Hospitality, Travel & Leisure</option>
                                        <option value="legal">Legal & Financial Services</option>
                                        <option value="media">Media & Telecomms</option>
                                        <option value="manufacturing">Manufacturing</option>
                                        <option value="mining">Mining</option>
                                        <option value="technology">Technology & Software</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.preferred_industry}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Preferred Department</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Select
                                        name="preferred_department"
                                        value={formik.values.preferred_department}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.preferred_department && formik.errors.preferred_department}
                                    >
                                        <option value="">Preferred department</option>
                                        <option value="co-founder">Co-Founder</option>
                                        <option value="design">Design</option>
                                        <option value="finance">Finance</option>
                                        <option value="operations">Ops & HR</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="technology">Tech & Data</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.preferred_department}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}



// import { useState, useEffect } from "react";
// import { Form, Button, Col, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../../NavBar";

// export default function Signup ( { candidate } ) {

//     const navigate = useNavigate();

//     if ( candidate ) {
//         navigate("/")
//     }
    
//     const [newCandidate, setNewCandidate] = useState({
//       first_name: "",
//       last_name: "",
//       email:"",
//       password:"",
//       preferred_department:"",
//       preferred_industry:"",
//     })

    
//     function handleSubmit (e) {
//         e.preventDefault();
//         fetch("api/candidate/signup", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newCandidate),
//           })
//         .then(response => {
//         if (!response.ok) {
//             console.log("Signup unsuccessful");
//         }
//         return response.json();
//         })
//         .then(json => {
//             if (json.id) {
//                 setNewCandidate(json);
//                 navigate("/");
//             } else {
//                 console.log("Signup unsuccessful: No ID in response");
//                 setNewCandidate(null);
//             }
//         })
//         .catch(err => {
//             console.log("Signup failed:", err.message);
//             setNewCandidate(null);
//         });
//     }

//     return (
//         <>
//             <NavBar />
//             <h1 className="mt-5">Candidate signup</h1>
//             <Form className="mt-3 text-start" onSubmit={handleSubmit}>
//             <Row className="justify-content-center">
//             <Col xs={12} sm={10} md={7} style={{ width: '40%' }}>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col>
//                             <Form.Label>First Name</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col>
//                             <Form.Control type="text" value={newCandidate.first_name} onChange={(e)=>setNewCandidate({...newCandidate, first_name: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col>
//                             <Form.Label>Last Name</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col>
//                             <Form.Control type="text" value={newCandidate.last_name} onChange={(e)=>setNewCandidate({...newCandidate, last_name: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
                
//                 <Form.Group className="my-3">
//                     <Row>
//                     <Col>
//                             <Form.Label>Email</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col>
//                             <Form.Control type="email" value={newCandidate.email} onChange={(e)=>setNewCandidate({...newCandidate, email: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col>
//                             <Form.Label>Password</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col>
//                             <Form.Control type="password" value={newCandidate.password} onChange={(e)=>setNewCandidate({...newCandidate, password: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Col className="my-3">
//                     <Form.Select onChange={(e)=>setNewCandidate({...newCandidate, preferred_industry: e.target.value})}>      
//                     <option value="">Preferred industry</option>
//                             <option value="agriculture">Agriculture, Forestry & Fishing</option>
//                             <option value="construction">Construction</option>
//                             <option value="cgs">Consumer Goods & Services</option>
//                             <option value="education">Education</option>
//                             <option value="health">Health</option>
//                             <option value="hospitality">Hospitality, Travel & Leisure</option>
//                             <option value="legal">Legal & Financial Services</option>
//                             <option value="media">Media & Telecomms</option>
//                             <option value="manufacturing">Manufacturing</option>
//                             <option value="mining">Mining</option>
//                             <option value="technology">Technology & Software</option>
//                     </Form.Select>
//                 </Col>
//                 <Col className="my-3">
//                     <Form.Select onChange={(e)=>setNewCandidate({...newCandidate, preferred_department: e.target.value})}>    
//                         <option>Preferrd department</option>
//                         <option value="co-founder">Co-Founder</option>
//                         <option value="design">Design</option>
//                         <option value="finance">Finance</option>
//                         <option value="human resources">Ops & HR</option>
//                         <option value="marketing">Marketing</option>
//                         <option value="technology">Tech & Data</option>
//                     </Form.Select>
//                 </Col>
//                 <Button type="submit">Submit</Button>

//                 </Col>
//                 </Row>
//             </Form>
//         </>
//                   )
// }