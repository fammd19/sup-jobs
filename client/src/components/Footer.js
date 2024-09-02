import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Footer ({  } ) {

  return(
    <>
        <Navbar fixed="bottom" className="footer bg-body-tertiary justify-content-center">
            <div className="nav-item nav-link mx-5"><a className="footer-link" href="mailto:hi@supjobs.com.au">Contact</a></div>
            <a href="https://linkedin.com/sup-jobs"><img className="mx-5 small-icon clickable" src="../../../assets/linkedin.svg"/></a>
            <a href="https://instagram.com/sup-jobs"><img className="mx-5 small-icon clickable" src="../../../assets/instagram.svg"/></a>
            <a href="https://facebook.com/sup-jobs"><img className="mx-5 small-icon clickable" src="../../../assets/facebook.svg"/></a>
        </Navbar>
    </>
  );
}