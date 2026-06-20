import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Ideal Cure Homeopathy</title>
        <meta name="description" content="Get in touch with Ideal Cure Homeopathy. Call, email, or visit our clinic in Fredericton, NB." />
      </Helmet>
      <div className="bg-sand-50 min-vh-100 pb-5">
        <Container className="py-4">
          <Breadcrumbs />
          
          <Row className="gy-5 mb-5 mt-2">
             <Col lg={6}>
                <div className="mb-5">
                   <h1 className="display-4 font-heading fw-bold text-brand-900 mb-4">
                      Get in Touch
                   </h1>
                   <p className="fs-5 text-secondary lh-lg">
                      We are here to answer your questions and help you start your journey to better health.
                   </p>
                </div>

                <Card className="bg-white p-4 p-md-5 rounded-4 shadow-sm border-brand-50 mb-5">
                   <Card.Body className="d-flex flex-column gap-4 p-0">
                     <div className="d-flex align-items-start gap-3">
                        <div className="bg-brand-50 p-3 rounded-3 text-brand-600 flex-shrink-0">
                           <Phone size={24} />
                        </div>
                        <div>
                           <h3 className="h6 fw-bold text-brand-900 mb-1">Phone</h3>
                           <p className="text-secondary mb-0">(506)-461-7535</p>
                        </div>
                     </div>

                     <div className="d-flex align-items-start gap-3">
                        <div className="bg-brand-50 p-3 rounded-3 text-brand-600 flex-shrink-0">
                           <Mail size={24} />
                        </div>
                        <div>
                           <h3 className="h6 fw-bold text-brand-900 mb-1">Email</h3>
                           <a href="mailto:contact@idealcurehomeopathy.com" className="text-brand-500 text-decoration-none fw-medium">contact@idealcurehomeopathy.com</a>
                        </div>
                     </div>

                     <div className="d-flex align-items-start gap-3">
                        <div className="bg-brand-50 p-3 rounded-3 text-brand-600 flex-shrink-0">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <h3 className="h6 fw-bold text-brand-900 mb-1">Visit Us</h3>
                           <p className="text-secondary mb-0">Unit 1 - 151 Main Street,<br/>Fredericton, NB E3C 1A7</p>
                        </div>
                     </div>
                   </Card.Body>
                </Card>

                <Card className="bg-brand-900 text-white p-4 p-md-5 rounded-4 shadow-lg position-relative overflow-hidden border-0">
                   <div className="position-absolute bg-brand-700 rounded-circle opacity-50" style={{ width: '150px', height: '150px', top: 0, right: 0, transform: 'translate(30%, -30%)', filter: 'blur(30px)' }}></div>
                   <Card.Body className="position-relative z-1 p-0">
                     <h3 className="h5 fw-bold mb-4 d-flex align-items-center gap-2">
                        <Clock size={20} /> Opening Hours
                     </h3>
                     <ul className="list-unstyled mb-0 text-brand-100 d-flex flex-column gap-2">
                        <li className="d-flex justify-content-between"><span>Mon - Fri</span> <span>9:00 AM - 5:00 PM</span></li>
                        <li className="d-flex justify-content-between"><span>Saturday</span> <span>10:00 AM - 2:00 PM</span></li>
                        <li className="d-flex justify-content-between"><span>Sunday</span> <span>Closed</span></li>
                     </ul>
                   </Card.Body>
                </Card>
             </Col>

             <Col lg={6}>
                <div className="w-100 bg-light rounded-4 overflow-hidden shadow-lg border border-4 border-white h-100" style={{ minHeight: '400px' }}>
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.620021665476!2d-66.66986502351239!3d45.96803877108671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4226f95f4e555%3A0x6b4c194098935634!2s151%20Main%20St%20%231%2C%20Fredericton%2C%20NB%20E3A%201C6!5e0!3m2!1sen!2sca!4v1709400000000!5m2!1sen!2sca" 
                     width="100%" 
                     height="100%" 
                     style={{ border: 0, minHeight: '400px' }} 
                     allowFullScreen={true} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Clinic Map"
                   ></iframe>
                </div>
             </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};