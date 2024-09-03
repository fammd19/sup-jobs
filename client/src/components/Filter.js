
import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button, Dropdown, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Filter({ setUrl, company_id, defaultDepartment, url }) {

    const navigate = useNavigate();

    const [department, setDepartment] = useState(defaultDepartment || "");
    const [salary, setSalary] = useState("");
    const [industry, setIndustry] = useState("");
    const [location, setLocation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        let url = "/api/jobs/filter?";

        if (salary) {  
            url = `${url}salary=${salary}`;
        } else {
            url = `${url}salary=0`;
        }

        if (department) {  
            url = `${url}&department=${department}`;
        }

        if (industry) {  
            url = `${url}&industry=${industry}`;
        }

        if (location) {  
            url = `${url}&location=${location}`;
        }

        setUrl(url);

    }

    useEffect(() => {
        if (defaultDepartment) {
            let url = "/api/jobs/filter?";
            url = `${url}&department=${department}`;
            setUrl(url)
        }
    }, [defaultDepartment]);

    function clearFilter () {
        setDepartment("");
        setSalary("");
        setIndustry("");
        setLocation("");
        setUrl("/api/jobs/live")
        navigate('/jobs', { replace: true });
    }

    return (
        <Form onSubmit={handleSubmit} className="mb-3">
            <div className="filter">
                <Row className="justify-content-md-center">
                    <Col sm={5} md={4} lg={3} className="mb-2">
                    <Form.Group className="input-group">
                        <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control
                                className="salary-input"
                                type="number"
                                placeholder="Min. salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            />
                            
                        </Form.Group>
                    </Col>
                    <Col sm={5} md={2} lg={3} className="mb-2">
                        <Form.Select value={location} name="location-filter" onChange={(e) => setLocation(e.target.value)}>
                            <option value="">All locations</option>
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
                    </Col>
                    <Col sm={5} md={4} lg={3} className="mb-2">
                        <Form.Select value={department} name="department-filter" onChange={(e) => setDepartment(e.target.value)}>
                            <option value="">All departments</option>
                            <option value="co-founder">Co-Founder</option>
                            <option value="design">Design</option>
                            <option value="finance">Finance</option>
                            <option value="operations">Ops & HR</option>
                            <option value="marketing">Marketing</option>
                            <option value="technology">Tech & Data</option>
                        </Form.Select>
                    </Col>
                    <Col sm={5} md={4} lg={3} className="mb-2">
                        <Form.Select value={industry} name="industry-filter" onChange={(e) => setIndustry(e.target.value)}>
                            <option value="">All industries</option>
                            <option value="agriculture">Agriculture & Manufacturing</option>
                            <option value="construction">Construction & Mining</option>
                            <option value="cgs">Consumer Goods & Services</option>
                            <option value="education">Education</option>
                            <option value="health">Health</option>
                            <option value="hospitality">Hospitality, Travel & Leisure</option>
                            <option value="legal">Legal & Financial Services</option>
                            <option value="media">Media & Telecomms</option>
                            <option value="technology">Technology & Software</option>
                        </Form.Select>
                    </Col>
                </Row>
            </div>
            {
                url.includes("filter")
                ?
                <>
                    <Button className="mx-2" type="submit">Filter</Button>
                    <Button className="mx-2" onClick={clearFilter}>Clear filter</Button>
                </>
                :
                <>
                    <Button className="mx-2" type="submit">Filter</Button>
                    <Button className="mx-2 disabled" onClick={clearFilter}>Clear filter</Button>
                </>
            }
        </Form>
    );
}
