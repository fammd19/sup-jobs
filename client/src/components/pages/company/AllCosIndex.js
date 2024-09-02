import React, { useState, useEffect } from 'react'
import { Row, Card, Col, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from "react-router-dom"

export default function AllCosIndex ( { candidate, company }) {
    const [companies, setCompanies] = useState([])

    useEffect ( () => {
        fetch("api/companies/all")
        .then(res => res.json())
        .then(json => setCompanies(json))
        .catch(error => console.log(error.message))
    },[])


    return (

        <Container>
            <h1>All companies</h1>
            {
                companies.length>0
                ?
                <>  
                    <Col>
                        {
                            companies.map((co)=> {
                                return(
                                <Card  className="my-3" key={co.id}>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Row className="justify-content-center mt-2">
                                                    <Card.Img src={`${co.logo}`} />
                                                </Row >
                                            </Col>
                                            <Col className="col-5">
                                                <Card.Title className="mt-3"><b>{`${co.name}`}</b></Card.Title>
                                                <Card.Subtitle><b>{`${co.industry}`}</b></Card.Subtitle>                                                
                                            </Col>
                                            <Col className="col-5">
                                                {
                                                    candidate || company
                                                    ?
                                                    <Link to={`/companies/${co.id}`}><Button className="mt-4" variant="primary">View company profile</Button></Link>
                                                    :
                                                    <OverlayTrigger
                                                    placement="bottom"
                                                    overlay={<Tooltip id="button-tooltip">You must be logged in to view company profiles</Tooltip>}
                                                  >
                                                    <span className="d-inline-block mt-4">
                                                        <Link to="/login">
                                                            <Button variant="secondary" disabled>
                                                                Login to view company
                                                            </Button>
                                                        </Link>
                                                    </span>
                                                  </OverlayTrigger>
                                                    
                                                }
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                        )
                    })
                    }

                </Col>
                </>
                :
                <>
                    <p>No companies found</p>
                    <Link to="/"><Button>Home</Button></Link>
                </>
            }
        </Container>
    )
}