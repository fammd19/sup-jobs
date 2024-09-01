import React, { useState } from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function PostJob({ company }) {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    if (!company) {
        navigate("/");
    }

    const applicationLinkSchema = Yup.string()
        .test(
            "is-url-or-email",
            "Please enter a valid email address or URL",
            (value) => {
                const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,4}\/?.*$/i;
                const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9.]+\.[A-Za-z]{2,7}$/;
                return urlRegex.test(value) || emailRegex.test(value);
            }
        )
        .required("Application link or email is required");

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
            salary: Yup.number().min(0, "Salary cannot be negative"),
            department: Yup.string().required("Department is required"),
            location: Yup.string().required("Location is required"),
            job_type: Yup.string().required("Job type is required"),
            role_description: Yup.string().required("Role description is required"),
            key_responsibility_1: Yup.string().required("At least 3 key responsibilities are required"),
            key_responsibility_2: Yup.string().required("At least 3 key responsibilities are required"),
            key_responsibility_3: Yup.string().required("At least 3 key responsibilities are required"),
            application_link: applicationLinkSchema,
            closing_date: Yup.string().required("Please add a closing date"),
        }),
        onSubmit: (values) => {
            fetch("api/jobs/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            // .then(response => response.json())
            // new
            .then(response => {
                if (response.ok) {
                    return response.json();
                  } else {
                    return response.json().then(errorData => {
                      throw new Error(errorData.error);
                    });
                }
            })
            .then(json => navigate(`/jobs/${json.id}`))
            .catch(error => setErrorMessage(error.message));
        }
    });

    return (
        <>
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
                                type="number"
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
                                name="salary_comments"
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
                        <Col className="mb-2" sm={6} md={5} lg={4}>
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
                        <Col className="mb-2" sm={6} md={5} lg={4}>
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
                        <Col className="mb-2" sm={6} md={5} lg={4}>
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
                        <Col className="mb-2" sm={6} md={5} lg={4}>
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
                        <Col className="mb-2" sm={6} md={5} lg={4}>
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
                            <Form.Label>Application link or email</Form.Label>
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
                                min={new Date().toISOString().split('T')[0]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={formik.touched.closing_date && formik.errors.closing_date}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Button type="submit">Submit</Button>
                {errorMessage && <div className="error">{errorMessage}</div>}

            </Form>
        </>
    );
}
