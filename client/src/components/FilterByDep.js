import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FilterByDep () {

    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
            <Col xs="2" mx-2>
                <Row className="justify-content-center">Co-Found</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/co-found.svg"/></Row>
            </Col>
            <Col xs="2">
                <Row className="justify-content-center">Dev</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/dev.svg"/></Row>
            </Col>
            <Col xs="2">
                <Row className="justify-content-center">Design</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/design.svg"/></Row>
            </Col>
            <Col xs="2">
                <Row className="justify-content-center">Marketing</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/marketing.svg"/></Row>
            </Col>
            <Col xs="2">
                <Row className="justify-content-center">Ops & Hr</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/people.svg"/></Row>
            </Col>
            <Col xs="2">
                <Row className="justify-content-center">Finance</Row>
                <Row className="justify-content-center"><img className="icon" src="../../../assets/finance.svg"/></Row>
            </Col>
            </Row>
        </Container>
    )

}

