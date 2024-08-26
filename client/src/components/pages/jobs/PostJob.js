import React from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NavBar from "../../NavBar";

export default function PostJob({ company }) {
    const navigate = useNavigate();

    if (!company) {
        navigate("/");
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            salary: "",
            salary_comments:"",
            department: "",
            location: "",
            job_type: "",
            role_description: "",
            key_responsibility_1: "",
            key_responsibility_2: "",
            key_responsibility_3: "",
            key_responsibility_4: "",
            key_responsibility_5: "",
            essential_experience: "",
            optional_experience: "",
            postcode: "",
            application_link: "",
            closing_date: ""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            salary: Yup.string().required("Salary is required"),
            department: Yup.string().required("Department is required"),
            location: Yup.string().required("Location is required"),
            job_type: Yup.string().required("Job type is required"),
            role_description: Yup.string().required("Role description is required"),
            key_responsibility_1: Yup.string().required("At least 3 key responsibilities are required"),
            key_responsibility_2: Yup.string().required("At least 3 key responsibilities are required"),
            key_responsibility_3: Yup.string().required("At least 3 key responsibilities are required"),
            application_link: Yup.string().required("Application link is required"),
        }),
        onSubmit: (values) => {
            fetch("api/jobs/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            .then(response => response.json())
            .then(json => navigate(`/jobs/${json.id}`))
            .catch(error => console.log(error.message));
        }
    });

    return (
        <>
            <NavBar company={company} />
            <Form className="mt-3 text-start mx-3" onSubmit={formik.handleSubmit}>
                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Title</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.title && formik.errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.title}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Salary</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                type="text"
                                name="salary"
                                value={formik.values.salary}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.salary && formik.errors.salary}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.salary}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Salary notes</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                type="text"
                                name="salary_comment"
                                value={formik.values.salary_comments}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Job type</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Select
                                name="job_type"
                                value={formik.values.job_type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.job_type && formik.errors.job_type}
                            >
                                <option value="">Select Job Type</option>
                                <option value="full-time">Full-Time</option>
                                <option value="part-time">Part-Time</option>
                                <option value="contract">Contract</option>
                                <option value="freelance">Freelance</option>
                                <option value="intern">Intern</option>
                                <option value="co-founder">Co-Founder</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.job_type}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Department</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Select
                                name="department"
                                value={formik.values.department}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.department && formik.errors.department}
                            >
                                <option value="">Select Department</option>
                                <option value="co-founder">Co-Founder</option>
                                <option value="design">Design</option>
                                <option value="finance">Finance</option>
                                <option value="operations">Ops & HR</option>
                                <option value="marketing">Marketing</option>
                                <option value="technology">Tech & Data</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.department}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Location</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Select
                                name="location"
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.location && formik.errors.location}
                            >
                                <option value="">Select Location</option>
                                <option value="remote">Remote</option>
                                <option value="act">ACT</option>
                                <option value="nsw">New South Wales</option>
                                <option value="nt">Northern Territory</option>
                                <option value="qld">Queensland</option>
                                <option value="sa">South Australia</option>
                                <option value="tas">Tasmania</option>
                                <option value="vic">Victoria</option>
                                <option value="wa">Western Australia</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.location}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Postcode</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                type="text"
                                name="postcode"
                                value={formik.values.postcode}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.postcode && formik.errors.postcode}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.postcode}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Role description</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="role_description"
                                value={formik.values.role_description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.role_description && formik.errors.role_description}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.role_description}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Form.Label>Key responsibilities</Form.Label>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                placeholder="1"
                                as="textarea"
                                rows={2}
                                name="key_responsibility_1"
                                value={formik.values.key_responsibility_1}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.key_responsibility_1 && formik.errors.key_responsibility_1}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.key_responsibility_1}
                            </Form.Control.Feedback>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                placeholder="2"
                                as="textarea"
                                rows={2}
                                name="key_responsibility_2"
                                value={formik.values.key_responsibility_2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.key_responsibility_2 && formik.errors.key_responsibility_2}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.key_responsibility_2}
                            </Form.Control.Feedback>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                placeholder="3"
                                as="textarea"
                                rows={2}
                                name="key_responsibility_3"
                                value={formik.values.key_responsibility_3}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.key_responsibility_3 && formik.errors.key_responsibility_3}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.key_responsibility_3}
                            </Form.Control.Feedback>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                placeholder="4"
                                as="textarea"
                                rows={2}
                                name="key_responsibility_4"
                                value={formik.values.key_responsibility_4}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                placeholder="5"
                                as="textarea"
                                rows={2}
                                name="key_responsibility_5"
                                value={formik.values.key_responsibility_5}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Essential experience</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="essential_experience"
                                value={formik.values.essential_experience}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Additional experience</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="optional_experience"
                                value={formik.values.optional_experience}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Application link</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                type="text"
                                name="application_link"
                                value={formik.values.application_link}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.application_link && formik.errors.application_link}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.application_link}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="my-3">
                    <Row>
                        <Col sm={2} md={2} lg={2}>
                            <Form.Label>Closing date</Form.Label>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Form.Control
                                type="date"
                                name="closing_date"
                                value={formik.values.closing_date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
        </>
    );
}





// import { useState, useEffect } from "react";
// import { Form, Button, Col, Row, Dropdown } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../../NavBar";

// export default function PostJob ( {company} ) {

//     const navigate = useNavigate();

//     if (!company) {
//         navigate("/")
//     }

//     const [job, setJob] = useState({
//       title: "",
//       company_id: "",
//       salary:"",
//       department:"",
//       location:"",
//       job_type:"",
//       role_description:"",
//       key_responsibility_1:"",
//       key_responsibility_2:"",
//       key_responsibility_3:"",
//       key_responsibility_4:"",
//       key_responsibility_5:"",
//       essential_experience:"",
//       optional_experience:"",
//       postcode:"",
//       application_link:"",
//       closing_date:""
//     })

    
//     function handleSubmit (e) {
//         e.preventDefault();
//         fetch("api/jobs/create", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(job),
//           })
//           .then(response => response.json())
//           .then(json => navigate(`/jobs/${json.id}`))
//           .catch(error => console.log(error.message))
//     }

//     return (
//         <>
//             <NavBar company={company}/>
//             <Form className="mt-3 text-start mx-3" onSubmit={handleSubmit}>
                 
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col sm={2} md={2} lg={2}>
//                             <Form.Label>Title</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}>
//                             <Form.Control type="text" value={job.title} onChange={(e)=>setJob({...job, title: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col sm={2} md={2} lg={2}>
//                             <Form.Label>Salary</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}>
//                             <Form.Control type="text" value={job.salary} onChange={(e)=>setJob({...job, salary: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Col sm={6} md={5} lg={4}>
//                     <Form.Select onChange={(e)=>setJob({...job, job_type: e.target.value})}>      
//                         <option>Type</option>
//                         <option value="full-time">Full-Time</option>
//                         <option value="part-time">Part-Time</option>
//                         <option value="contract">Contract</option>
//                         <option value="freelance">Freelance</option>
//                         <option value="intern">Intern</option>
//                         <option value="co-founder">Co-Founder</option>
//                     </Form.Select>
//                 </Col>
//                 <Col sm={6} md={5} lg={4}>
//                     <Form.Select onChange={(e)=>setJob({...job, department: e.target.value})}>    
//                         <option>Department</option>
//                         <option value="co-founder">Co-Founder</option>
//                         <option value="design">Design</option>
//                         <option value="finance">Finance</option>
//                         <option value="operations">Ops & HR</option>
//                         <option value="marketing">Marketing</option>
//                         <option value="technology">Tech & Data</option>
//                     </Form.Select>
//                 </Col>
//                 <Col sm={6} md={5} lg={4}>
//                     <Form.Select onChange={(e)=>setJob({...job, location: e.target.value})}>
//                             <option value="">All locations</option>
//                             <option value="remote">Remote</option>
//                             <option value="act">ACT</option>
//                             <option value="nsw">New South Wales</option>                    
//                             <option value="nt">Northern Territory</option>
//                             <option value="qld">Queensland</option>
//                             <option value="sa">South Australia</option>
//                             <option value="tas">Tasmania</option>
//                             <option value="vic">Victoria</option>
//                             <option value="wa">Western Australia</option>
//                         </Form.Select>
//                 </Col>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col sm={2} md={2} lg={2}>
//                             <Form.Label>Postcode</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}>
//                             <Form.Control type="text" value={job.postcode} onChange={(e)=>setJob({...job, postcode: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>    
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col sm={2} md={2} lg={2}>
//                             <Form.Label>Description</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}>
//                             <Form.Control type="text" value={job.description} onChange={(e)=>setJob({...job, description: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Form.Label>Key responsibilities</Form.Label>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}><Form.Control placeholder="1" type="text" value={job.key_responsibility_1} onChange={(e)=>setJob({...job, key_responsibility_1: e.target.value})} /></Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}><Form.Control placeholder="2" type="text" value={job.key_responsibility_2} onChange={(e)=>setJob({...job, key_responsibility_2: e.target.value})} /></Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}><Form.Control placeholder="3" type="text" value={job.key_responsibility_3} onChange={(e)=>setJob({...job, key_responsibility_3: e.target.value})} /></Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}><Form.Control placeholder="4" type="text" value={job.key_responsibility_4} onChange={(e)=>setJob({...job, key_responsibility_4: e.target.value})} /></Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}><Form.Control placeholder="5" type="text" value={job.key_responsibility_5} onChange={(e)=>setJob({...job, key_responsibility_5: e.target.value})} /></Col>
//                         </Row>
//                     </Row>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col sm={2} md={2} lg={2}>
//                             <Form.Label>Required experience</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}>
//                             <Form.Control type="text" value={job.essential_experience} onChange={(e)=>setJob({...job, essential_experience: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col sm={2} md={2} lg={2}>
//                             <Form.Label>Optional experience</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}>
//                             <Form.Control type="text" value={job.optional_experience} onChange={(e)=>setJob({...job, optional_experience: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col sm={2} md={2} lg={2}>
//                             <Form.Label>Application link</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}>
//                             <Form.Control type="text" value={job.application_link} onChange={(e)=>setJob({...job, application_link: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                     <Row>
//                         <Col sm={2} md={2} lg={2}>
//                             <Form.Label>Closing date</Form.Label>
//                         </Col>
//                         </Row>
//                         <Row>
//                         <Col sm={6} md={5} lg={4}>
//                             <Form.Control type="date" value={job.closing_date} onChange={(e)=>setJob({...job, closing_date: e.target.value})} />
//                         </Col>
//                     </Row>
//                 </Form.Group>




//                 <Button type="submit">Submit</Button>
//             </Form>
//         </>
//                   )
// }