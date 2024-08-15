import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button, Col, Row } from 'react-bootstrap';

export default function Jobs () {
    return (
        <>
            <Row  className="my-3">
                <Col sm={10} md={8} lg={6}>
                    <Outlet/>
                </Col>
            </Row>
        </>
    )
}
