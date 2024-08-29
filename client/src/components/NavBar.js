import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function NavBar ({ candidate, company } ) {

  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };


  return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect expanded={expanded}>
      <Navbar.Brand href="#home" className="mx-5"><img src="../../../assets/sup-logo.svg" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="mx-5" onClick={() => setExpanded(expanded ? false : true)} />
      <Container>
      <Navbar.Collapse id="responsive-navbar-nav">
        {
            candidate
            ?
            <Nav className="ms-auto">
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/">Home</Link>
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/jobs">Jobs</Link>
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/companies">Company Profiles</Link>
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/account">Account</Link>
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/logout">Logout</Link>
            </Nav>
            :
            company
              ?
              <Nav className="ms-auto">
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/">Home</Link>
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/jobs">Jobs</Link>
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/post-job">Post Jobs</Link>
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/company-account">Account</Link>
                <Link className="nav-item nav-link" onClick={handleLinkClick} to="/company-logout">Logout</Link>
              </Nav>
              :
              <Nav className="ms-auto">
                  <Link className="nav-item nav-link" onClick={handleLinkClick} to="/">Home</Link>
                  <Link className="nav-item nav-link" onClick={handleLinkClick} to="/jobs">Jobs</Link>
                  <Link className="nav-item nav-link" onClick={handleLinkClick} to="/companies">Company Profiles</Link>
                  <Link className="nav-item nav-link" onClick={handleLinkClick} to="/login">Login/ Signup</Link>
                  <Link to="/company-login" onClick={handleLinkClick}><Button className="btn-secondary">For Companies</Button></Link>
              </Nav>
        }
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}