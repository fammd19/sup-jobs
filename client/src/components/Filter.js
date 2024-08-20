
import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

export default function Filter({ setUrl }) {
    const [department, setDepartment] = useState("");
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

        setUrl(url);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="filter">
                <Row className="justify-content-md-center">
                    <Col sm={5} md={4} lg={3} className="mb-2">
                    <Form.Group className="input-group">
                    <span className="input-prefix">Salary: $</span>
                            <Form.Control
                                className="salary-input"
                                type="number"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            />
                            
                        </Form.Group>
                    </Col>
                    <Col sm={5} md={4} lg={3} className="mb-2">
                        <Form.Select name="location-filter" onChange={(e) => setLocation(e.target.value)}>
                            <option value="">All locations</option>
                            <option value="remote">Remote</option>
                            <option value="act">ACT</option>
                            <option value="nsw-sydney">Sydney</option>
                            <option value="nsw-newcastle">Newcastle</option>                            <option value="nsw">All NSW</option>
                            <option value="nt-darwin">Darwin</option>
                            <option value="nt">All NT</option>
                            <option value="qld-brisbane">Brisbane</option>
                            <option value="qld">QLD Other</option>
                            <option value="sa-adelaide">Adelaide</option>
                            <option value="sa">All SA</option>
                            <option value="tas">Tasmania</option>
                            <option value="vic-melbourne">Melbourne</option>
                            <option value="vic">All Victoria</option>
                            <option value="wa-perth">Perth</option>
                            <option value="wa">All WA</option>
                        </Form.Select>
                    </Col>
                    <Col sm={5} md={4} lg={3} className="mb-2">
                        <Form.Select name="department-filter" onChange={(e) => setDepartment(e.target.value)}>
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
                        <Form.Select name="industry-filter" onChange={(e) => setIndustry(e.target.value)}>
                            <option value="">All industries</option>
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
                    </Col>
                </Row>
            </div>
            <Button type="submit">Filter</Button>
        </Form>
    );
}
