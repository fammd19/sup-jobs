import { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar";

export default function CoSignup ( { company, candidate, setCompany } ) {

    const navigate = useNavigate();

    if ( company ) {
        navigate("/")
    }
    
    const [newCompany, setNewCompany] = useState({
      name: "",
      abn: 0,
      size: 0,
      industry:"",
      about:"",
      mission_statement:"",
      website_link:"",
      facebook_link:"",
      instagram_link:"",
      linkedin_link:"",
      logo:"",
      admin_email:"",
      password:""
    })

    
    function handleSubmit (e) {
        e.preventDefault();
        fetch("api/company/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCompany),
          })
        .then(response => {
        if (!response.ok) {
            console.log("Signup unsuccessful");
        }
        return response.json();
        })
        .then(json => {
            if (json.id) {
                setNewCompany(json);
                navigate("/");
            } else {
                console.log("Signup unsuccessful: No ID in response");
                setNewCompany(null);
            }
        })
        .catch(err => {
            console.log("Signup failed:", err.message);
            setNewCompany(null);
        });
    }

    return (
        <>
            <NavBar />
            <h1 className="mt-5">Company signup</h1>
            <Form className="mt-3 text-start" onSubmit={handleSubmit}>
            <Row className="justify-content-center">

            <Col xs={12} sm={10} md={7} style={{ width: '40%' }}>
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                        <Form.Label>Name</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Form.Control type="text" value={newCompany.name} onChange={(e)=>setNewCompany({...newCompany, name: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                            <Form.Label>Admin email</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Form.Control type="email" value={newCompany.admin_email} onChange={(e)=>setNewCompany({...newCompany, admin_email: e.target.value})} />
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
                            <Form.Control type="password" value={newCompany.password} onChange={(e)=>setNewCompany({...newCompany, password: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                            <Form.Label>ABN</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Form.Control type="text" value={newCompany.abn} onChange={(e)=>setNewCompany({...newCompany, abn: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                            <Form.Label>Logo link</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Form.Control type="text" value={newCompany.logo} onChange={(e)=>setNewCompany({...newCompany, logo: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                            <Form.Label>Number of employees</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Form.Control type="number" value={newCompany.size} 
                              onChange={(e) => {
                                const intValue = parseInt(e.target.value, 10); // Convert the value to an integer
                                setNewCompany({ ...newCompany, size: isNaN(intValue) ? '' : intValue });
                              }}
                                 />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                            <Form.Label>Website link</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Form.Control type="text" value={newCompany.website_link} onChange={(e)=>setNewCompany({...newCompany, website_link: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Col >
                    <Form.Select onChange={(e)=>setNewCompany({...newCompany, industry: e.target.value})}>      
                    <option value="">Industry</option>
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
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                            <Form.Label>About</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Form.Control as="textarea" rows={4} value={newCompany.about} onChange={(e)=>setNewCompany({...newCompany, about: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                            <Form.Label>Mission statement</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Form.Control as="textarea" rows={2} value={newCompany.mission_statement} onChange={(e)=>setNewCompany({...newCompany, mission_statement: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                <p><b>Social links</b></p>
                <Form.Group className="my-3">
                    <Row>
                        <Col>
                            <Form.Label>LinkedIn</Form.Label>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                            <Form.Control type="text" value={newCompany.linkedin_link} onChange={(e)=>setNewCompany({...newCompany, linkedin_link: e.target.value})} />
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
                        <Col >
                            <Form.Control type="text" value={newCompany.facebook_link} onChange={(e)=>setNewCompany({...newCompany, facebook_link: e.target.value})} />
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
                        <Col >
                            <Form.Control type="text" value={newCompany.instagram_link} onChange={(e)=>setNewCompany({...newCompany, instagram_link: e.target.value})} />
                        </Col>
                    </Row>
                </Form.Group>
                


                <Button type="submit">Submit</Button>
                </Col>
                </Row>
            </Form>
        </>
    )
}