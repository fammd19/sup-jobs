import { Nav, Navbar, Button, Container } from 'react-bootstrap';


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
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/jobs">Jobs</Nav.Link>
                <Nav.Link href="#">Company Profiles</Nav.Link>
                <Nav.Link href="#">Account</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
                <Nav.Link href="/company-login"><Button className="btn-secondary">For Companies</Button></Nav.Link>
            </Nav>
            :
            company
              ?
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">Post Jobs</Nav.Link>
                <Nav.Link href="#">Account</Nav.Link>
                <Nav.Link href="/company-logout">Logout</Nav.Link>
                <Nav.Link href="/"><Button className="btn-secondary">For Candidates</Button></Nav.Link>
              </Nav>
              :
              <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/jobs">Jobs</Nav.Link>
                  <Nav.Link href="#">Company Profiles</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="#">Signup</Nav.Link>
                  <Nav.Link href="/company-login"><Button className="btn-secondary">For Companies</Button></Nav.Link>
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
