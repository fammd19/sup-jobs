import { Outlet } from "react-router-dom"
import { Col, Row } from 'react-bootstrap';
import NavBar from '../../NavBar'

export default function AllCos ( {candidate, company} ) {
    return (
        <>
        <NavBar candidate={candidate} company={company}/> 
            <Row  className="my-3 justify-content-center">
                <Col sm={10} md={8} lg={6}>
                    <Outlet/>
                </Col>
            </Row>
        </>
    )
}
