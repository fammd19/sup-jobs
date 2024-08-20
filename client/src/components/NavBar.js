import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function NavBar ({ candidate, company } ) {

  return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home" className="mx-5"><img src="../../../assets/sup-logo.svg" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="mx-5"/>
      <Container>
      <Navbar.Collapse id="responsive-navbar-nav">
        {
            candidate
            ?
            <Nav className="ms-auto">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/jobs">Jobs</Link>
                <Link className="nav-item nav-link" to="#">Company Profiles</Link>
                <Link className="nav-item nav-link" to="/account">Account</Link>
                <Link className="nav-item nav-link" to="/logout">Logout</Link>
            </Nav>
            :
            company
              ?
              <Nav className="ms-auto">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/jobs">Jobs</Link>
                <Link className="nav-item nav-link" to="/post-job">Post Jobs</Link>
                <Link className="nav-item nav-link" to="#">Account</Link>
                <Link className="nav-item nav-link" to="/company-logout">Logout</Link>
              </Nav>
              :
              <Nav className="ms-auto">
                  <Link className="nav-item nav-link" to="/">Home</Link>
                  <Link className="nav-item nav-link" to="/jobs">Jobs</Link>
                  <Link className="nav-item nav-link" to="/login">Login/ Signup</Link>
                  <Link to="/company-login"><Button className="btn-secondary">For Companies</Button></Link>
              </Nav>
        }
      </Navbar.Collapse>
      </Container>
    </Navbar>

{/* <p>Logged in as: {candidate.first_name}</p> */}
</>
  );
}
  
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//         <Navbar.Brand href="#home" className="mx-5"><img src="../../../assets/sup-logo.svg" /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="mx-5"/>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           if candidate {
//             <Nav className="me-auto">
//               <Nav.Link href="#">Jobs</Nav.Link>
//               <Nav.Link href="#">Company Profiles</Nav.Link>
//               <Nav.Link href="#">Account</Nav.Link>
//               <Nav.Link href="#">Logout</Nav.Link>
//               <Nav.Link href="#">For Companies</Nav.Link>
//             </Nav>
//           } else if company {
//             <Nav className="me-auto">
//               <Nav.Link href="#">Jobs</Nav.Link>
//               <Nav.Link href="#">Company Profiles</Nav.Link>
//               <Nav.Link href="#">Account</Nav.Link>
//               <Nav.Link href="#">Logout</Nav.Link>
//               <Nav.Link href="#">For Candidates</Nav.Link>
//             </Nav>
//           } else {
//             <Nav className="me-auto">
//               <Nav.Link href="#">Jobs</Nav.Link>
//               <Nav.Link href="#">Company Profiles</Nav.Link>
//               <Nav.Link href="#">Login</Nav.Link>
//               <Nav.Link href="#">Signup</Nav.Link>
//               <Nav.Link href="#">For Companies</Nav.Link>
//             </Nav>
//           }
//           {/* { */}
//           {/* //   candidate
//           //   ?
//           //   <Nav className="me-auto">
//           //     <Nav.Link href="#">Jobs</Nav.Link>
//           //     <Nav.Link href="#">Company Profiles</Nav.Link>
//           //     <Nav.Link href="#">Account</Nav.Link>
//           //     <Nav.Link href="#">Logout</Nav.Link>
//           //     <Nav.Link href="#">For Companies</Nav.Link>
//           //   </Nav>
//           //   :
//           //   <Nav className="me-auto">
//           //     <Nav.Link href="#">Jobs</Nav.Link>
//           //     <Nav.Link href="#">Company Profiles</Nav.Link>
//           //     <Nav.Link href="#">Login</Nav.Link>
//           //     <Nav.Link href="#">Signup</Nav.Link>
//           //     <Nav.Link href="#">For Companies</Nav.Link>
//           //   </Nav>
//           // } */}
//         </Navbar.Collapse>
//     </Navbar>
//   );
// }
