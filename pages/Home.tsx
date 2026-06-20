import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/Button';
import { Star, Leaf, Heart, ShieldCheck, Instagram, Users, Baby, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import myLogo from '/1.png';

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden pt-5 pb-5 mt-5">
      <Container className="position-relative z-1">
        <Row className="align-items-center gy-5">
          <Col lg={6} className="space-y-4">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-100 rounded-pill text-brand-600 small fw-bold mb-4">
              <span className="rounded-circle bg-brand-500 animate-pulse" style={{ width: '8px', height: '8px' }}></span>
              Now Accepting New Patients
            </div>
            
            <h1 className="display-3 fw-bold text-brand-900 font-heading mb-4 lh-sm">
              Gentle Healing, <br/>
              <span className="text-brand-500">Naturally.</span>
            </h1>
            
            <p className="fs-5 text-secondary mb-4">
              Experience the power of homeopathy with <span className="fw-bold text-brand-700">Madhu Mohanan</span>. 
              A holistic approach to cure the root cause, tailored just for you.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <Link to="/contact">
                <Button size="lg" variant="primary">Book Appointment</Button>
              </Link>
              <Link to="/treatments">
                <Button variant="secondary" size="lg">Explore Treatments</Button>
              </Link>
            </div>

            <div className="d-flex align-items-center gap-5 pt-4 border-top border-brand-100">
               <div>
                  <p className="fs-2 font-heading fw-bold text-brand-900 mb-0">10+</p>
                  <p className="small text-secondary fw-medium mb-0">Years Experience</p>
               </div>
               <div>
                  <p className="fs-2 font-heading fw-bold text-brand-900 mb-0">100%</p>
                  <p className="small text-secondary fw-medium mb-0">Natural Remedies</p>
               </div>
            </div>
          </Col>

          <Col lg={6} className="d-flex justify-content-center position-relative">
            <div className="position-relative" style={{ width: '100%', maxWidth: '400px', aspectRatio: '4/5' }}>
              <div className="position-absolute bg-brand-200 blob-shape w-100 h-100" style={{ transform: 'rotate(3deg) scale(1.05)' }}></div>
              <div className="position-absolute bg-sand-300 blob-shape w-100 h-100 opacity-50" style={{ transform: 'rotate(-3deg)' }}></div>
              
              <img 
                 src={myLogo}
                 alt="Madhu Mohanan" 
                 className="position-relative z-1 w-100 h-100 object-fit-cover blob-shape shadow"
              />

              <div className="position-absolute bottom-0 start-0 translate-middle-y ms-n3 z-2 bg-white p-3 rounded-4 shadow-lg d-flex align-items-center gap-3 animate-float">
                 <div className="bg-brand-100 p-2 rounded-3">
                    <Leaf className="text-brand-600" size={24} />
                 </div>
                 <div>
                    <p className="fw-bold text-brand-900 mb-0">Holistic Nutritionist</p>
                    <p className="text-brand-500 mb-0" style={{ fontSize: '0.7rem' }}>Certified Expert</p>
                 </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Features = () => (
  <section className="py-5 bg-white">
    <Container className="py-5">
      <div className="text-center max-w-2xl mx-auto mb-5">
        <h2 className="display-5 font-heading fw-bold text-brand-900 mb-3">Why Choose Ideal Cure?</h2>
        <p className="text-secondary fs-5">We believe in treating the person, not just the disease. Our methods are safe, effective, and free from side effects.</p>
      </div>

      <Row className="gy-4">
        {[
          { icon: Leaf, title: "100% Natural", desc: "Remedies derived from natural sources, safe for infants and pregnant women." },
          { icon: ShieldCheck, title: "No Side Effects", desc: "Gentle healing that works with your body's vital force without harmful reactions." },
          { icon: Heart, title: "Root Cause", desc: "We dig deep to find the underlying cause of your ailments for lasting cure." }
        ].map((feature, i) => (
          <Col md={4} key={i}>
            <Card className="h-100 border-0 bg-brand-50 rounded-4 p-4 text-center text-decoration-none" style={{ transition: 'background-color 0.3s' }}>
              <Card.Body>
                <div className="bg-white rounded-4 shadow-sm d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                  <feature.icon className="text-brand-500" size={32} />
                </div>
                <Card.Title className="fw-bold text-brand-900 h4 mb-3">{feature.title}</Card.Title>
                <Card.Text className="text-secondary">{feature.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

const WhoCanBenefit = () => (
   <section className="py-5 bg-brand-900 text-white position-relative overflow-hidden">
     <Container className="py-5 position-relative z-1">
       <Row className="align-items-end mb-5 gy-4">
         <Col lg={8}>
           <span className="text-brand-300 fw-bold text-uppercase tracking-wider small d-block mb-2">Inclusive Care</span>
           <h2 className="display-4 font-heading fw-bold text-white mb-4">
             Who Can Benefit?
           </h2>
           <p className="text-brand-100 fs-5 mb-0" style={{ maxWidth: '600px' }}>
             Our holistic approach is designed for everyone. Whether you are dealing with a sudden illness or a long-standing condition, natural medicine offers a gentle path to recovery.
           </p>
         </Col>
         <Col lg={4} className="text-lg-end">
           <Link to="/contact">
             <Button variant="secondary" className="bg-brand-100 text-brand-900 border-0">
               Get Started Today
             </Button>
           </Link>
         </Col>
       </Row>
 
       <Row className="gy-4">
         {[
           {
             icon: Baby,
             title: "Children & Infants",
             desc: "Gentle relief for colic, teething, allergies, and recurrent colds without harsh chemicals.",
             bgClass: "bg-coral-500"
           },
           {
             icon: Users,
             title: "Adults",
             desc: "Stress management, hormonal balance, digestive health, and chronic pain solutions.",
             bgClass: "bg-brand-500"
           },
           {
             icon: Heart,
             title: "Seniors",
             desc: "Support for arthritis, mobility, sleep issues, and maintaining vitality in later years.",
             bgClass: "bg-brand-600"
           },
           {
             icon: Activity,
             title: "Chronic & Acute",
             desc: "From sudden flus to long-term autoimmune conditions, we address the full spectrum.",
             bgClass: "bg-brand-700"
           }
         ].map((item, i) => (
           <Col md={6} lg={3} key={i}>
             <Card className="h-100 border border-white border-opacity-10 rounded-4 p-4 text-white" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
               <Card.Body className="p-0">
                  <div className={`rounded-4 d-inline-flex align-items-center justify-content-center mb-4 text-white shadow ${item.bgClass}`} style={{ width: '56px', height: '56px' }}>
                     <item.icon size={28} />
                  </div>
                  <Card.Title className="fw-bold h5 mb-3">{item.title}</Card.Title>
                  <Card.Text className="text-white-50 small">
                     {item.desc}
                  </Card.Text>
               </Card.Body>
             </Card>
           </Col>
         ))}
       </Row>
     </Container>
   </section>
 );
 
const Reviews = () => (
  <section className="py-5 bg-sand-50">
     <Container className="py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
           <div>
              <span className="text-brand-500 fw-bold text-uppercase small">Testimonials</span>
              <h2 className="display-6 font-heading fw-bold text-brand-900 mt-2 mb-0">Stories of Healing</h2>
           </div>
           <div className="d-flex gap-1 mt-3 mt-md-0 text-warning">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
           </div>
        </div>

        <Row className="gy-4">
           {[
              {
                 name: "Patricia Subash",
                 text: "I approached homeopathy with a 'nothing to lose' mindset and I have been absolutely blown away at how much it has helped me! 10/10 recommend!!",
                 tag: "Chronic Pain"
              },
              {
                 name: "Divya Sailesh",
                 text: "Madhu, you are very gentle, and understanding person. Thank you for your care, compassion, kindness, and professionalism.",
                 tag: "Anxiety"
              },
              {
                 name: "Steph Peters",
                 text: "She’s professional, kind, and knows her stuff! I highly recommend her and will definitely use her in the future!",
                 tag: "Family Care"
              }
           ].map((review, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 border border-brand-50 rounded-4 p-4 shadow-sm">
                  <Card.Body className="p-0 d-flex flex-column">
                     <div className="mb-4 text-warning d-flex">
                        <Star size={16} fill="currentColor" className="me-1" />
                        <Star size={16} fill="currentColor" className="me-1" />
                        <Star size={16} fill="currentColor" className="me-1" />
                        <Star size={16} fill="currentColor" className="me-1" />
                        <Star size={16} fill="currentColor" />
                     </div>
                     <p className="text-secondary fst-italic mb-4 flex-grow-1">"{review.text}"</p>
                     <div className="d-flex align-items-center gap-3">
                        <div className="bg-brand-100 rounded-circle d-flex align-items-center justify-content-center fw-bold text-brand-700" style={{ width: '40px', height: '40px' }}>
                           {review.name[0]}
                        </div>
                        <div>
                           <p className="fw-bold text-brand-900 mb-0 small">{review.name}</p>
                           <p className="text-brand-400 mb-0" style={{ fontSize: '0.75rem' }}>{review.tag}</p>
                        </div>
                     </div>
                  </Card.Body>
                </Card>
              </Col>
           ))}
        </Row>
     </Container>
  </section>
);

const InstagramFeed = () => (
   <section className="py-5 bg-white">
      <Container className="py-5 text-center">
         <h2 className="display-6 font-heading fw-bold text-brand-900 mb-5 d-flex align-items-center justify-content-center gap-3">
            <Instagram className="text-brand-500" size={32} /> Follow Our Journey
         </h2>
         <Row className="g-3 mb-5">
            {[
               "https://images.unsplash.com/photo-1544367563-12123d8966cd?q=80&w=600&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"
            ].map((src, i) => (
               <Col xs={6} md={3} key={i}>
                  <a href="https://www.instagram.com/idealcurehomeopathy/" target="_blank" rel="noreferrer" className="d-block overflow-hidden rounded-4 position-relative" style={{ aspectRatio: '1/1' }}>
                     <img src={src} alt="Instagram" className="w-100 h-100 object-fit-cover transition-transform" style={{ transition: 'transform 0.7s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </a>
               </Col>
            ))}
         </Row>
         <a href="https://www.instagram.com/idealcurehomeopathy/" target="_blank" rel="noreferrer">
            <Button variant="outline">View on Instagram</Button>
         </a>
      </Container>
   </section>
);

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ideal Cure Homeopathy - Gentle Healing, Naturally</title>
        <meta name="description" content="Experience the power of homeopathy with Madhu Mohanan. A holistic approach to cure the root cause, tailored just for you." />
      </Helmet>
      <Hero />
      <Features />
      <WhoCanBenefit />
      <Reviews />
      <InstagramFeed />
    </>
  );
};