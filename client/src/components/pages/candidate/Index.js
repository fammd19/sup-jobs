import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet} from 'react-router-dom';


export default function Index ({candidate}) {

  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home" className="mx-5"><img src="../../../assets/sup-logo.svg" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="mx-5"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            {
                candidate
                ?
                <Nav className="me-auto">
                    <Nav.Link href="#">Jobs</Nav.Link>
                    <Nav.Link href="#">Company Profiles</Nav.Link>
                    <Nav.Link href="#">Account</Nav.Link>
                    <Nav.Link href="#">Logout</Nav.Link>
                    <Nav.Link href="#">For Companies</Nav.Link>
                </Nav>
                :
                <Nav className="me-auto">
                    <Nav.Link href="#">Jobs</Nav.Link>
                    <Nav.Link href="#">Company Profiles</Nav.Link>
                    <Nav.Link href="#">Login</Nav.Link>
                    <Nav.Link href="#">Signup</Nav.Link>
                    <Nav.Link href="#">For Companies</Nav.Link>
                </Nav>
            }
            </Navbar.Collapse>
        </Navbar>
        <Outlet />
    </>
  );
}