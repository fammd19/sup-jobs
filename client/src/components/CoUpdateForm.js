import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CoUpdateForm({ companyDetails, setCompanyDetails, displayAccountUpdateForm }) {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const emailSchema = Yup.string()
        .email("Invalid email address")
        .matches(
            /^[A-Za-z0-9]+@[A-Za-z0-9.]+\.[A-Za-z]{2,7}$/,
            "Please enter a valid email address"
        )
        .required("Email is required");

    const formik = useFormik({
        initialValues: {
            size: companyDetails.size,
            about: companyDetails.about,
            mission_statement: companyDetails.mission_statement,
            website_link: companyDetails.website_link,
            facebook_link: companyDetails.facebook_link,
            instagram_link: companyDetails.instagram_link,
            linkedin_link: companyDetails.linkedin_link,
            logo: companyDetails.logo,
            admin_email: companyDetails.admin_email,
            hashed_password: "",
        },
        validationSchema: Yup.object({
            size: Yup.number().min(1, "Size must be at least 1").max(200, "Size must be at most 200").required("Size is required"),
            about: Yup.string().required("About section is required"),
            website_link: Yup.string().url("Invalid URL").required("Website link is required"),
            linkedin_link: Yup.string().url("Invalid URL").notRequired(),
            facebook_link: Yup.string().url("Invalid URL").notRequired(),
            instagram_link: Yup.string().url("Invalid URL").notRequired(),
            logo: Yup.string().url("Invalid URL").required("Please enter a valid logo link"),
            // admin_email: Yup.string().email("Invalid email address").required("Admin email is required"),
            admin_email: emailSchema,
            hashed_password: Yup.string().notRequired(),
        }),
        onSubmit: (values) => {
            const updatedValues = { ...values };
            if (!updatedValues.hashed_password) {
                delete updatedValues.hashed_password;
            }

            fetch("/api/company/account", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                      } else {
                        return response.json().then(errorData => {
                          throw new Error(errorData.error || "An unknown error occurred");
                        });
                    }
                })
                .then((data) => {
                    if (data) {
                        setCompanyDetails(data);
                    }
                    displayAccountUpdateForm();
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }
    });

    useEffect(() => {
        fetch("/api/company/account")
            .then((response) => response.json())
            .then((json) => {
                formik.setValues({
                    size: json.size,
                    about: json.about,
                    mission_statement: json.mission_statement,
                    website_link: json.website_link,
                    facebook_link: json.facebook_link,
                    instagram_link: json.instagram_link,
                    linkedin_link: json.linkedin_link,
                    logo: json.logo,
                    admin_email: json.admin_email,
                    hashed_password: json.hashed_password,
                });
            });
    }, []);

    return (
        <Form className="my-3 update-form" onSubmit={formik.handleSubmit}>
            <h3>Update company details</h3>
            <Form.Group>
                <Form.Label>Size</Form.Label>
                <Form.Control
                    type="number"
                    name="size"
                    value={formik.values.size}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.size && formik.touched.size}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.size}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>About</Form.Label>
                <Form.Control
                    type="text"
                    name="about"
                    value={formik.values.about}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.about && formik.touched.about}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.about}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Mission statement</Form.Label>
                <Form.Control
                    type="text"
                    name="mission_statement"
                    value={formik.values.mission_statement}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Website</Form.Label>
                <Form.Control
                    type="text"
                    name="website_link"
                    value={formik.values.website_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.website_link && formik.touched.website_link}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.website_link}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                    type="text"
                    name="linkedin_link"
                    value={formik.values.linkedin_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.touched.linkedin_link && formik.errors.linkedin_link}
                    />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.linkedin_link}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                    type="text"
                    name="facebook_link"
                    value={formik.values.facebook_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.touched.facebook_link && formik.errors.facebook_link}
                    />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.facebook_link}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                    type="text"
                    name="instagram_link"
                    value={formik.values.instagram_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.touched.instagram_link && formik.errors.instagram_link}
                    />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.instagram_link}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Logo link</Form.Label>
                <Form.Control
                    type="text"
                    name="logo"
                    value={formik.values.logo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.logo && formik.touched.logo}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.logo}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Admin email</Form.Label>
                <Form.Control
                    type="text"
                    name="admin_email"
                    value={formik.values.admin_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.admin_email && formik.touched.admin_email}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.admin_email}
                </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>New password</Form.Label>
                <p>Please add a passsword if you'd like to update your existing password</p>
                <Form.Control
                    type="password"
                    name="hashed_password"
                    value={formik.values.hashed_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.hashed_password && formik.touched.hashed_password}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.hashed_password}
                </Form.Control.Feedback>
            </Form.Group> 
            <Button type="submit">Submit update</Button>
            {errorMessage && <div className="error">{errorMessage}</div>}

        </Form>
    );
}



