// import { Nav, Navbar, Button, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';


// export default function Footer ({  } ) {

//   return(
//     <>
//         <Navbar fixed="bottom" className="footer bg-body-tertiary justify-content-center">
//             <div className="nav-item nav-link mx-5"><a className="footer-link" href="mailto:hi@supjobs.com.au">Contact</a></div>
//             <a href="https://linkedin.com/sup-jobs"><img className="mx-5 small-icon clickable" src="../../../assets/linkedin.svg"/></a>
//             <a href="https://instagram.com/sup-jobs"><img className="mx-5 small-icon clickable" src="../../../assets/instagram.svg"/></a>
//             <a href="https://facebook.com/sup-jobs"><img className="mx-5 small-icon clickable" src="../../../assets/facebook.svg"/></a>
//         </Navbar>
//     </>
//   );
// }

// import { useEffect, useState } from 'react';
// import { Navbar, Row, Col } from 'react-bootstrap';

// export default function Footer() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Check if the user has scrolled to the bottom
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight;
//       const clientHeight = document.documentElement.clientHeight;
      
//       if (scrollTop + clientHeight >= scrollHeight - 10) {
//         setIsVisible(true); // Add some margin for better UX
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     // Clean up event listener on component unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <Navbar className={`footer bg-body-tertiary justify-content-center ${isVisible ? 'visible' : ''}`}>
//         <Row>
//             <Col>
//       <div className="nav-item nav-link mx-5">
//         <a className="footer-link" href="mailto:hi@supjobs.com.au">Contact</a>
//       </div>
//       </Col><Col>
//       <a href="https://linkedin.com/sup-jobs">
//         <img className="mx-5 small-icon clickable" src="../../../assets/linkedin.svg" alt="LinkedIn"/>
//       </a>
//       </Col><Col>
//       <a href="https://instagram.com/sup-jobs">
//         <img className="mx-5 small-icon clickable" src="../../../assets/instagram.svg" alt="Instagram"/>
//       </a>
//       </Col><Col>
//       <a href="https://facebook.com/sup-jobs">
//         <img className="mx-5 small-icon clickable" src="../../../assets/facebook.svg" alt="Facebook"/>
//       </a>
//       </Col>
//       </Row>
//     </Navbar>
//   );
// }

import { useEffect, useState } from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollHeight > clientHeight) {
        if (scrollTop + clientHeight >= scrollHeight - 10) {
          setIsVisible(true); 
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="footer-wrapper">
      <Navbar className={`footer bg-body-tertiary justify-content-center ${isVisible ? 'visible' : ''}`}>
        <Row>
            <Col>
                <div className="nav-item nav-link mx-5">
                    <a className="footer-link" href="mailto:hi@supjobs.com.au">Contact</a>
                </div> 
            </Col>
            <Col>
                <a href="https://linkedin.com/sup-jobs">
                    <img className="mx-5 small-icon clickable" src="../../../assets/linkedin.svg" alt="LinkedIn"/>
                </a>
            </Col>
            <Col>
                <a href="https://instagram.com/sup-jobs">
                    <img className="mx-5 small-icon clickable" src="../../../assets/instagram.svg" alt="Instagram"/>
                </a>
            </Col>
            <Col>
              <a href="https://facebook.com/sup-jobs">
                <img className="mx-5 small-icon clickable" src="../../../assets/facebook.svg" alt="Facebook"/>
               </a>
            </Col>
       </Row>
      </Navbar>
    </div>
  );
}
