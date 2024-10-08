import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CoSignup({ company, setCompany }) {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    if (company) {
        navigate("/");
    }

    const emailSchema = Yup.string()
        .email("Invalid email address")
        .matches(
            /^[A-Za-z0-9]+@[A-Za-z0-9.]+\.[A-Za-z]{2,7}$/,
            "Please enter a valid email address"
        )
        .required("Email is required");

    const formik = useFormik({
        initialValues: {
            name: "",
            abn: "",
            size: "",
            industry: "",
            about: "",
            mission_statement: "",
            website_link: "",
            facebook_link: "",
            instagram_link: "",
            linkedin_link: "",
            logo: "",
            admin_email: "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Company name is required"),
            abn: Yup.string().length(11, "ABN must be 11 digits").matches(/^\d+$/, "ABN must be numeric").required("Your 11 digit ABN is required"),
            size: Yup.number().min(1, "Size must be at least 1").max(200, "Size must be at most 200").required("Size is required"),
            about: Yup.string().required("About field is required"),
            industry: Yup.string().required("Industry is required"),
            website_link: Yup.string().url("Invalid URL").required("A website link is required"),
            linkedin_link: Yup.string().url("Invalid URL").notRequired(),
            facebook_link: Yup.string().url("Invalid URL").notRequired(),
            instagram_link: Yup.string().url("Invalid URL").notRequired(),
            admin_email: emailSchema,
            logo: Yup.string().url("Invalid URL").notRequired(),
            password: Yup.string().required("Password is required")
        }),
        onSubmit: (values) => {
            fetch("api/company/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                  } else {
                    return response.json().then(errorData => {
                      throw new Error(errorData.error);
                    });
                }
            })
            .then(json => {
                if (json.id) {
                    setCompany(json);
                    navigate("/");
                } else {
                    console.log("Signup unsuccessful: No ID in response");
                    setCompany(null);
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
                setCompany(null);
            });
        }
    });

    return (
        <>
            <h1 className="mt-5">Company Signup</h1>
            <Form className="mt-3 text-start" onSubmit={formik.handleSubmit}>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={7} style={{ width: '40%' }}>
                    <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Admin email*</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
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
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Password*</Form.Label>
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
                                    <Form.Label>Company name*</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.name && formik.errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.name}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>ABN*</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="abn"
                                        value={formik.values.abn}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.abn && formik.errors.abn}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.abn}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>

                        

                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Number of employees*</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="number"
                                        name="size"
                                        value={formik.values.size}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.size && formik.errors.size}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.size}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Industry*</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        as="select"
                                        name="industry"
                                        value={formik.values.industry}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.industry && formik.errors.industry}
                                    >
                                        <option value="">Select Industry</option>
                                        <option value="agriculture">Agriculture & Manufacturing</option>
                                        <option value="construction">Construction & Mining</option>
                                        <option value="cgs">Consumer Goods & Services</option>
                                        <option value="education">Education</option>
                                        <option value="health">Health</option>
                                        <option value="hospitality">Hospitality, Travel & Leisure</option>
                                        <option value="legal">Legal & Financial Services</option>
                                        <option value="media">Media & Telecomms</option>
                                        <option value="technology">Technology & Software</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.industry}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Website link*</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="website_link"
                                        value={formik.values.website_link}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.website_link && formik.errors.website_link}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.website_link}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Logo Link</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="logo"
                                        value={formik.values.logo}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.logo && formik.errors.logo}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.logo}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>

                        

                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>About*</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="about"
                                        value={formik.values.about}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.about && formik.errors.about}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.about}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Mission Statement</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        name="mission_statement"
                                        value={formik.values.mission_statement}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.mission_statement && formik.errors.mission_statement}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.mission_statement}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>LinkedIn</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="linkedin_link"
                                        value={formik.values.linkedin_link}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.linkedin_link && formik.errors.linkedin_link}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.linkedin_link}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Meta (Facebook)</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="facebook_link"
                                        value={formik.values.facebook_link}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.facebook_link && formik.errors.facebook_link}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.facebook_link}
                                        </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Row>
                                <Col>
                                    <Form.Label>Instagram</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="instagram_link"
                                        value={formik.values.instagram_link}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.instagram_link && formik.errors.instagram_link}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.instagram_link}
                                        </Form.Control.Feedback>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Button type="submit">Submit</Button>
                        {errorMessage && <div className="error">{errorMessage}</div>}

                    </Col>
                </Row>
            </Form>
        </>
    );
}

