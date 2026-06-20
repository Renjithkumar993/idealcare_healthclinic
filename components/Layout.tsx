import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col, Button as BootstrapButton } from 'react-bootstrap';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const NavigationBar: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Navbar expand="md" fixed="top" className="bg-white bg-opacity-75 shadow-sm border-bottom border-light" style={{ backdropFilter: 'blur(10px)' }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex flex-column lh-1">
          <span className="h4 mb-0 fw-bold text-brand-800 font-heading">Ideal Cure.</span>
          <span className="text-uppercase text-brand-500 font-sans" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Homeopathy</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none text-brand-800" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto bg-brand-50 rounded-pill px-4 py-1 border border-brand-100 d-none d-md-flex align-items-center gap-2">
            <Nav.Link as={NavLink} to="/" className="text-secondary-emphasis fw-medium px-3 rounded-pill" style={{ transition: 'color 0.3s' }}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-secondary-emphasis fw-medium px-3 rounded-pill" style={{ transition: 'color 0.3s' }}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/treatments" className="text-secondary-emphasis fw-medium px-3 rounded-pill" style={{ transition: 'color 0.3s' }}>Treatments</Nav.Link>
            <Nav.Link as={NavLink} to="/online-clinic" className="text-secondary-emphasis fw-medium px-3 rounded-pill" style={{ transition: 'color 0.3s' }}>Appointments</Nav.Link>
          </Nav>

          {/* Mobile links without background */}
          <Nav className="d-md-none mt-3">
             <Nav.Link as={NavLink} to="/" className="fs-3 fw-bold font-heading text-brand-900">Home</Nav.Link>
             <Nav.Link as={NavLink} to="/about" className="fs-3 fw-bold font-heading text-brand-900">About</Nav.Link>
             <Nav.Link as={NavLink} to="/treatments" className="fs-3 fw-bold font-heading text-brand-900">Treatments</Nav.Link>
             <Nav.Link as={NavLink} to="/online-clinic" className="fs-3 fw-bold font-heading text-brand-900">Appointments</Nav.Link>
          </Nav>

          <div className="d-flex mt-3 mt-md-0">
            <BootstrapButton as={NavLink} to="/contact" variant="primary" className="rounded-pill px-4 fw-bold shadow-sm w-100">
              Book Now
            </BootstrapButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white pt-5 pb-4 mt-5" style={{ borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem' }}>
      <Container className="pt-4">
        <Row className="gy-4 border-bottom border-brand-800 pb-5">
          <Col md={6} lg={3}>
            <h3 className="font-heading h4 fw-bold text-brand-100 mb-3">Ideal Cure.</h3>
            <p className="text-brand-200 small lh-lg">
              Empowering your health journey with natural, effective, and holistic homeopathic care.
            </p>
          </Col>
          
          <Col md={6} lg={3}>
            <h4 className="fw-bold mb-4 text-brand-300 fs-6">Contact</h4>
            <ul className="list-unstyled text-brand-100 small d-flex flex-column gap-3">
              <li className="d-flex align-items-start gap-2">
                <MapPin className="text-brand-400 flex-shrink-0" size={20} />
                <span>Unit 1 - 151 Main St,<br/> Fredericton, NB E3C 1A7</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Phone className="text-brand-400" size={20} />
                <span>(506)-461-7535</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Mail className="text-brand-400" size={20} />
                <span>contact@idealcurehomeopathy.com</span>
              </li>
            </ul>
          </Col>

          <Col md={6} lg={3}>
            <h4 className="fw-bold mb-4 text-brand-300 fs-6">Links</h4>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><NavLink to="/about" className="text-brand-100 text-decoration-none">About Madhu</NavLink></li>
              <li><NavLink to="/treatments" className="text-brand-100 text-decoration-none">Our Treatments</NavLink></li>
              <li><NavLink to="/online-clinic" className="text-brand-100 text-decoration-none">Online Clinic</NavLink></li>
              <li><NavLink to="/contact" className="text-brand-100 text-decoration-none">Book Appointment</NavLink></li>
            </ul>
          </Col>

          <Col md={6} lg={3}>
            <h4 className="fw-bold mb-4 text-brand-300 fs-6">Follow Us</h4>
            <a 
              href="https://www.instagram.com/idealcurehomeopathy/" 
              target="_blank" 
              rel="noreferrer"
              className="d-inline-flex align-items-center justify-content-center bg-brand-800 rounded-3 text-white text-decoration-none"
              style={{ width: '48px', height: '48px', transition: 'background-color 0.3s' }}
            >
              <Instagram size={24} />
            </a>
          </Col>
        </Row>
        <div className="pt-4 text-center small text-brand-400">
          © {new Date().getFullYear()} Ideal Cure Homeopathy. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export const Layout: React.FC = () => {
  return (
    <div className="min-vh-100 d-flex flex-column font-sans text-brand-900 bg-sand-50">
      <NavigationBar />
      <main className="flex-grow-1" style={{ paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};