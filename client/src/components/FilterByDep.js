// import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function FilterByDep () {

    const navigate = useNavigate();

    //need to handle what happens if there are no jobs

    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
            <Col xs="auto" onClick={() => navigate('/jobs?dep=co-found')}>
                <Row className="justify-content-center">Co-Found</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/co-found.svg"/></Row>
            </Col>
            <Col xs="auto" onClick={() => navigate('/jobs?dep=technology')}>
                <Row className="justify-content-center">Tech</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/dev.svg"/></Row>
            </Col>
            <Col xs="auto" onClick={() => navigate('/jobs?dep=design')}>
                <Row className="justify-content-center">Design</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/design.svg"/></Row>
            </Col>
            <Col xs="auto" onClick={() => navigate('/jobs?dep=marketing')}>
                <Row className="justify-content-center">Marketing</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/marketing.svg"/></Row>
            </Col>
            <Col xs="auto" onClick={() => navigate('/jobs?dep=operations')}>
                <Row className="justify-content-center">Ops & Hr</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/people.svg"/></Row>
            </Col>
            <Col xs="auto" onClick={() => navigate('/jobs?dep=finance')}>
                <Row className="justify-content-center">Finance</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/finance.svg"/></Row>
            </Col>
            </Row>
        </Container>
    )

}

