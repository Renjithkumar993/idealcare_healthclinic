import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const treatments = [
  {
    category: "Mental Health",
    title: "Anxiety & Depression",
    desc: "Natural support for emotional well-being, stress, and mood disorders.",
    img: "https://images.unsplash.com/photo-1520962889616-a5b85d6342c7?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Dermatology",
    title: "Skin & Hair",
    desc: "Effective holistic treatment for Eczema, Psoriasis, Acne and Alopecia.",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Respiratory",
    title: "Allergies & Immunity",
    desc: "Building natural immunity against chronic cough, cold, and asthma.",
    img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Women's Health",
    title: "Hormonal Balance",
    desc: "Gentle care for PCOS, Thyroid, Menopause and Reproductive health.",
    img: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Chronic Pain",
    title: "Arthritis & Migraine",
    desc: "Managing pain naturally at the root cause without dependency.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db48e?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Gut Health",
    title: "Digestion & Nutrition",
    desc: "Holistic nutrition plans for IBS, bloating, and digestive harmony.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
  }
];

export const Treatments: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Treatments - Ideal Cure Homeopathy</title>
        <meta name="description" content="Comprehensive homeopathic care for acute and chronic conditions, including mental health, dermatology, respiratory, and more." />
      </Helmet>
      <div className="bg-sand-50 min-vh-100 pb-5">
        <Container className="py-4">
          <Breadcrumbs />
          
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '42rem' }}>
             <h1 className="display-5 font-heading fw-bold text-brand-900 mb-4">
               Our Expertise
             </h1>
             <p className="fs-5 text-secondary">
               Comprehensive care for acute and chronic conditions. We treat the individual, not just the symptoms.
             </p>
          </div>

          <Row className="gy-4">
             {treatments.map((t, i) => (
               <Col md={6} lg={4} key={i}>
                 <Link 
                   to="/contact" 
                   className="text-decoration-none"
                 >
                   <Card className="h-100 border border-brand-50 rounded-4 overflow-hidden shadow-sm d-flex flex-column" style={{ transition: 'box-shadow 0.3s' }} onMouseOver={e => e.currentTarget.classList.add('shadow-lg')} onMouseOut={e => e.currentTarget.classList.remove('shadow-lg')}>
                      <div className="overflow-hidden" style={{ height: '200px' }}>
                         <Card.Img variant="top" src={t.img} alt={t.title} className="w-100 h-100 object-fit-cover" style={{ transition: 'transform 0.7s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                      </div>
                      <Card.Body className="p-4 d-flex flex-column">
                         <span className="small fw-bold text-uppercase tracking-wider text-brand-500 mb-2 d-block">{t.category}</span>
                         <Card.Title className="h4 font-heading fw-bold text-brand-900 mb-3">{t.title}</Card.Title>
                         <Card.Text className="text-secondary flex-grow-1">{t.desc}</Card.Text>
                         <div className="d-flex align-items-center text-brand-600 fw-bold small mt-3">
                            Book Consultation <ArrowRight size={16} className="ms-2" />
                         </div>
                      </Card.Body>
                   </Card>
                 </Link>
               </Col>
             ))}
          </Row>
        </Container>
      </div>
    </>
  );
};