import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Award, BookOpen, Heart } from 'lucide-react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import myLogo from '/1.png';

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Madhu Mohanan - Ideal Cure Homeopathy</title>
        <meta name="description" content="Meet Madhu Mohanan, BHMS, Registered Naturopath, and Holistic Nutritionist. Learn about her journey and holistic philosophy." />
      </Helmet>
      <div className="bg-sand-50 min-vh-100 pb-5">
        <Container className="py-4">
          <Breadcrumbs />
          
          <Row className="align-items-center gy-5 mb-5 mt-2">
            <Col lg={6} className="order-lg-1 order-2">
               <h1 className="display-4 font-heading fw-bold text-brand-900 mb-4">
                  Meet Madhu Mohanan
               </h1>
               <p className="fs-5 text-secondary mb-4 lh-lg">
                  "Healing is not just about removing symptoms, but restoring the harmony of your vital force."
               </p>
               <p className="text-secondary mb-4 lh-lg">
                  Madhu Mohanan's journey into homeopathy is rooted in her early experiences in Kerala, India. Growing up, Madhu witnessed firsthand the success of natural medicine, influenced strongly by her mother. 
               </p>
               <p className="text-secondary mb-4 lh-lg">
                  In 2017, she moved to New Brunswick, Canada, expanding her expertise to include Naturopathy. Recognized by most insurance plans, her practice is known for its empathetic approach and strong patient relationships.
               </p>
               
               <div className="d-flex flex-wrap gap-3 mb-5">
                  <span className="px-3 py-2 bg-brand-100 text-brand-700 rounded-pill fw-bold small d-inline-flex align-items-center gap-2">
                     <Award size={16} /> BHMS (India)
                  </span>
                  <span className="px-3 py-2 bg-brand-100 text-brand-700 rounded-pill fw-bold small d-inline-flex align-items-center gap-2">
                     <BookOpen size={16} /> Registered Naturopath (Canada)
                  </span>
                  <span className="px-3 py-2 bg-brand-100 text-brand-700 rounded-pill fw-bold small d-inline-flex align-items-center gap-2">
                     <Heart size={16} /> Holistic Nutritionist
                  </span>
               </div>

               <Link to="/contact" className="text-decoration-none">
                  <Button variant="primary">Schedule Consultation</Button>
               </Link>
            </Col>
            
            <Col lg={6} className="order-lg-2 order-1 position-relative">
               <div className="position-absolute bg-brand-200 blob-shape w-100 h-100 opacity-50" style={{ transform: 'rotate(6deg) scale(1.05)', inset: 0 }}></div>
               <img 
                 src={myLogo}
                 alt="Madhu Mohanan" 
                 className="position-relative z-1 w-100 shadow-lg"
                 style={{ borderRadius: '3rem', transform: 'rotate(2deg)', transition: 'transform 0.5s' }}
                 onMouseOver={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                 onMouseOut={e => e.currentTarget.style.transform = 'rotate(2deg)'}
               />
            </Col>
          </Row>

          <Card className="bg-white p-4 p-md-5 rounded-4 border-brand-50 shadow-sm mb-5">
             <h3 className="h2 font-heading fw-bold text-brand-900 mb-5">Professional Milestones</h3>
             <div className="position-relative ps-4 ps-md-5">
                {/* Vertical Line */}
                <div className="position-absolute bg-brand-100" style={{ left: '27px', top: '16px', bottom: '16px', width: '2px' }}></div>

                {[
                   { year: "Education", title: "BHMS Degree", desc: "Bachelor of Homeopathy Medicine and Surgery." },
                   { year: "Experience", title: "Clinical Practice", desc: "Infertility Centre (Chennai) & Aditya Hospital (Pune)." },
                   { year: "2017", title: "Moved to Canada", desc: "Established practice in New Brunswick." },
                   { year: "Current", title: "Ideal Care Health Clinic", desc: "Naturopathy, Homeopathy & Holistic Nutrition." }
                ].map((item, i) => (
                   <div key={i} className="position-relative d-flex align-items-start gap-4 mb-4">
                      <div className="rounded-circle bg-brand-500 border border-4 border-white shadow-sm flex-shrink-0 position-relative z-1 mt-1" style={{ width: '24px', height: '24px', marginLeft: '-11px' }}></div>
                      <div>
                         <span className="small fw-bold text-brand-500 text-uppercase tracking-wider">{item.year}</span>
                         <h4 className="h5 fw-bold text-brand-900 mb-1">{item.title}</h4>
                         <p className="text-secondary mb-0">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </Card>

          {/* Philosophy Section */}
          <section className="bg-brand-900 text-white p-4 p-md-5 rounded-4 position-relative overflow-hidden">
            <div className="position-absolute bg-brand-700 rounded-circle opacity-50" style={{ width: '250px', height: '250px', top: 0, right: 0, transform: 'translate(30%, -30%)', filter: 'blur(80px)' }}></div>
            
            <h2 className="display-6 font-heading fw-bold mb-4 position-relative z-1">Our Philosophy</h2>
            <blockquote className="fs-4 lh-base font-heading text-brand-100 fst-italic position-relative z-1 mb-5">
               "Healing should be natural, gentle and effective. We don't just treat the symptoms; we treat the person."
            </blockquote>
            
            <Row className="g-4 position-relative z-1">
               <Col md={6}>
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                     <Heart className="text-coral-500 mb-3" size={32} />
                     <h4 className="fw-bold h5 mb-2">Patient-Centered</h4>
                     <p className="text-brand-200 small mb-0">We value time, relationships, and listening to your story.</p>
                  </div>
               </Col>
               <Col md={6}>
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                     <BookOpen className="text-brand-300 mb-3" size={32} />
                     <h4 className="fw-bold h5 mb-2">Holistic Methods</h4>
                     <p className="text-brand-200 small mb-0">Combining Homeopathy, Herbs, and Nutrition for complete care.</p>
                  </div>
               </Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
};