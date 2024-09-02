import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function FilterByDep () {
    const navigate = useNavigate();

    function handleFilter(department) {
        navigate(`/jobs?department=${department}`);
    }

    return (
        <Container className="mb-5">
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs="auto" onClick={() => handleFilter('co-founder')}>
                    <Row className="justify-content-center">Co-Found</Row>
                    <Row className="justify-content-center"><img className="icon clickable" src="../../../assets/co-found.svg"/></Row>
                </Col>
                <Col xs="auto" onClick={() => handleFilter('technology')}>
                    <Row className="justify-content-center">Tech</Row>
                    <Row className="justify-content-center"><img className="icon clickable" src="../../../assets/dev.svg"/></Row>
                </Col>
                <Col xs="auto" onClick={() => handleFilter('design')}>
                    <Row className="justify-content-center">Design</Row>
                    <Row className="justify-content-center"><img className="icon clickable" src="../../../assets/design.svg"/></Row>
                </Col>
                <Col xs="auto" onClick={() => handleFilter('marketing')}>
                    <Row className="justify-content-center">Marketing</Row>
                    <Row className="justify-content-center"><img className="icon clickable" src="../../../assets/marketing.svg"/></Row>
                </Col>
                <Col xs="auto" onClick={() => handleFilter('operations')}>
                    <Row className="justify-content-center">Ops & Hr</Row>
                    <Row className="justify-content-center"><img className="icon clickable" src="../../../assets/people.svg"/></Row>
                </Col>
                <Col xs="auto" onClick={() => handleFilter('finance')}>
                    <Row className="justify-content-center">Finance</Row>
                    <Row className="justify-content-center"><img className="icon clickable" src="../../../assets/finance.svg"/></Row>
                </Col>
            </Row>
            <br/>
        </Container>
    );
}
