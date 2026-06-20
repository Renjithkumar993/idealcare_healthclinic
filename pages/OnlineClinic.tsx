import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Video, MapPin, Calendar, Activity, UserCheck } from 'lucide-react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const OnlineClinic: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Online Clinic - Ideal Cure Homeopathy</title>
        <meta name="description" content="Hybrid clinic offering both in-person consultations in Fredericton and virtual clinic options available worldwide." />
      </Helmet>
      <div className="bg-sand-50 min-vh-100 pb-5">
        <Container className="py-4">
          <Breadcrumbs />
          
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '48rem' }}>
            <span className="text-brand-500 fw-bold tracking-wider small text-uppercase d-block mb-2">Hybrid Clinic</span>
            <h1 className="display-4 font-heading fw-bold text-brand-900 mb-4">
              Healing Without Borders
            </h1>
            <p className="fs-5 text-secondary">
              Whether you visit us in Fredericton or consult online, our standard of care remains personal, thorough, and effective.
            </p>
          </div>

          <Row className="gy-4 mb-5">
             <Col md={6}>
                <Card className="h-100 bg-white p-4 p-md-5 rounded-4 shadow-sm border-brand-100 text-center">
                   <Card.Body className="d-flex flex-column align-items-center">
                      <div className="bg-brand-50 rounded-4 d-flex align-items-center justify-content-center mb-4 text-brand-600" style={{ width: '64px', height: '64px' }}>
                         <MapPin size={32} />
                      </div>
                      <h2 className="h3 fw-bold text-brand-900 mb-2">In-Person</h2>
                      <p className="text-secondary small mb-4">Fredericton, New Brunswick</p>
                      <p className="text-secondary lh-lg mb-0">
                         Experience our calming clinic atmosphere. Perfect for comprehensive physical examinations and local residents.
                      </p>
                   </Card.Body>
                </Card>
             </Col>
             
             <Col md={6}>
                <Card className="h-100 bg-brand-900 p-4 p-md-5 rounded-4 shadow-lg text-white text-center position-relative overflow-hidden border-0">
                   <div className="position-absolute bg-brand-800 rounded-circle opacity-50" style={{ width: '150px', height: '150px', top: 0, right: 0, transform: 'translate(30%, -30%)', filter: 'blur(30px)' }}></div>
                   <Card.Body className="d-flex flex-column align-items-center position-relative z-1">
                      <div className="bg-brand-800 rounded-4 d-flex align-items-center justify-content-center mb-4 text-brand-300" style={{ width: '64px', height: '64px' }}>
                         <Video size={32} />
                      </div>
                      <h2 className="h3 fw-bold text-white mb-2">Virtual Clinic</h2>
                      <p className="text-brand-300 small mb-4">Available Worldwide</p>
                      <p className="text-brand-100 lh-lg mb-0 text-opacity-75">
                         Connect from the comfort of your home via secure video call. We ship necessary remedies directly to you.
                      </p>
                   </Card.Body>
                </Card>
             </Col>
          </Row>

          <Card className="bg-white rounded-4 p-4 p-md-5 shadow-sm border-brand-50 mt-5">
             <h2 className="display-6 font-heading fw-bold text-brand-900 text-center mb-5">How It Works</h2>
             
             <Row className="gy-4 position-relative">
                {/* Connecting Line for desktop */}
                <div className="d-none d-md-block position-absolute bg-brand-100 z-0" style={{ top: '32px', left: '12.5%', right: '12.5%', height: '2px' }}></div>
                
                {[
                   { icon: Calendar, title: "Book", desc: "Choose a time that works for you." },
                   { icon: UserCheck, title: "Consult", desc: "60-90 min detailed case history." },
                   { icon: Activity, title: "Analyze", desc: "Expert selection of your remedy." },
                   { icon: UserCheck, title: "Heal", desc: "Regular follow-ups & progress." }
                ].map((step, i) => (
                   <Col md={3} key={i} className="text-center position-relative z-1">
                      <div className="bg-brand-100 text-brand-600 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 fw-bold fs-5 shadow-sm border border-4 border-white" style={{ width: '64px', height: '64px' }}>
                         {i + 1}
                      </div>
                      <h3 className="fw-bold text-brand-900 h5 mb-2">{step.title}</h3>
                      <p className="small text-secondary mb-0">{step.desc}</p>
                   </Col>
                ))}
             </Row>

             <div className="text-center mt-5 pt-3">
                <Link to="/contact" className="text-decoration-none">
                   <Button size="lg">Start Your Journey</Button>
                </Link>
             </div>
          </Card>
        </Container>
      </div>
    </>
  );
};