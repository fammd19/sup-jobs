import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function UpdateForm({ candidateDetails, setCandidateDetails, displayAccountUpdateForm }) {

    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            first_name: candidateDetails.first_name,
            last_name: candidateDetails.last_name,
            hashed_password: "",
            email: candidateDetails.email,
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            hashed_password: Yup.string().notRequired(),
        }),
        onSubmit: (values) => {
            const updatedValues = { ...values };
            console.log (`Password: ${updatedValues.hashed_password}`)
            if (!updatedValues.hashed_password) {
                delete updatedValues.hashed_password;
            }

            fetch("/api/candidate/account", {
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
                        setCandidateDetails(data);
                    }
                })
                .catch((error) => {
                    console.error("Error updating candidate details:", error);
                });
            displayAccountUpdateForm();
        }
    });

    useEffect(() => {
        fetch("/api/candidate/account")
            .then((response) => response.json())
            .then((json) => {
                formik.setValues({
                    first_name: json.first_name,
                    last_name: json.last_name,
                    hashed_password: json.hashed_password,
                    email: json.email,
                });
            });
    }, []);

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.first_name && formik.touched.first_name}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.first_name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.last_name && formik.touched.last_name}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.last_name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
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
        </Form>
    );
}