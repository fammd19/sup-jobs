import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CoUpdateForm({ companyDetails, setCompanyDetails, displayAccountUpdateForm }) {

    const formik = useFormik({
        initialValues: {
            name: companyDetails.name,
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
            name: Yup.string().required("Name is required"),
            size: Yup.string().required("Size is required"),
            about: Yup.string().required("About section is required"),
            website_link: Yup.string().url("Invalid URL").required("Website link is required"),
            logo: Yup.string().required("Logo link is required"),
            admin_email: Yup.string().email("Invalid email address").required("Admin email is required"),
            hashed_password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            fetch("/api/company/account", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((response) => {
                    if (!response.ok) {
                        console.log("Update unsuccessful");
                        return null;
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data) {
                        setCompanyDetails(data);
                    }
                })
                .catch((error) => {
                    console.error("Error updating company details:", error);
                });
            displayAccountUpdateForm();
        },
    });

    useEffect(() => {
        fetch("/api/company/account")
            .then((response) => response.json())
            .then((json) => {
                formik.setValues({
                    name: json.name,
                    size: json.size,
                    about: json.about,
                    mission_statement: json.mission_statement,
                    website_link: json.website_link,
                    facebook_link: json.facebook_link,
                    instagram_link: json.instagram_link,
                    linkedin_link: json.linkedin_link,
                    logo: json.logo,
                    admin_email: json.admin_email,
                    hashed_password: "",
                });
            });
    }, []);

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.name && formik.touched.name}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Size</Form.Label>
                <Form.Control
                    type="text"
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
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                    type="text"
                    name="facebook_link"
                    value={formik.values.facebook_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                    type="text"
                    name="instagram_link"
                    value={formik.values.instagram_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
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
                <Form.Label>Password</Form.Label>
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
        </Form>
    );
}



