import { Outlet } from "react-router-dom"
import { Col, Row } from 'react-bootstrap';
import NavBar from '../../NavBar'

export default function Jobs ( {candidate, company, setCompany} ) {

    return (
        <>
            <Row  className="my-3 justify-content-center">
                <Col sm={10} md={8} lg={6}>
                    <Outlet/>
                </Col>
            </Row>
        </>
    )
}
