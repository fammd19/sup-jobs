import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function CandidateNavBar () {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home" className="mx-5"><img src="../../../assets/sup-logo.svg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="mx-5"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Jobs</Nav.Link>
            <Nav.Link href="#">Company Profiles</Nav.Link>
            <Nav.Link href="#">Account</Nav.Link>
            <Nav.Link href="#">Login/ Logout</Nav.Link>
            <Nav.Link href="#">For Companies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
