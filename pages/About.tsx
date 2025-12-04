import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Award, BookOpen, Heart } from 'lucide-react';
import myLogo from '/1.png'

export const About: React.FC = () => {
  return (
    <div className="bg-sand-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumbs />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
             <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-900 mb-6">
                Meet Madhu Mohanan
             </h1>
             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                "Healing is not just about removing symptoms, but restoring the harmony of your vital force."
             </p>
             <p className="text-gray-600 mb-8 leading-relaxed">
                Madhu Mohanan's journey into homeopathy is rooted in her early experiences in Kerala, India. Growing up, Madhu witnessed firsthand the success of natural medicine, influenced strongly by her mother. 
             </p>
             <p className="text-gray-600 mb-8 leading-relaxed">
                In 2017, she moved to New Brunswick, Canada, expanding her expertise to include Naturopathy. Recognized by most insurance plans, her practice is known for its empathetic approach and strong patient relationships.
             </p>
             
             <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full font-bold text-sm flex items-center gap-2">
                   <Award className="w-4 h-4" /> BHMS (India)
                </span>
                <span className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full font-bold text-sm flex items-center gap-2">
                   <BookOpen className="w-4 h-4" /> Registered Naturopath (Canada)
                </span>
                <span className="px-4 py-2 bg-brand-100 text-brand-700 rounded-full font-bold text-sm flex items-center gap-2">
                   <Heart className="w-4 h-4" /> Holistic Nutritionist
                </span>
             </div>

             <Link to="/contact">
                <Button>Schedule Consultation</Button>
             </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-brand-200 blob-shape rotate-6 scale-105 opacity-50"></div>
             <img 
               src={myLogo}
               alt="Madhu Mohanan" 
               className="relative z-10 w-full rounded-[3rem] shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
             />
          </div>
        </div>

        <section className="bg-white p-8 rounded-[2rem] border border-brand-50 shadow-sm">
                   <h3 className="text-2xl font-heading font-bold text-brand-900 mb-8">Professional Milestones</h3>
                   <div className="space-y-8 relative pl-4">
                      {/* Vertical Line */}
                      <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-brand-100"></div>

                      {[
                         { year: "Education", title: "BHMS Degree", desc: "Bachelor of Homeopathy Medicine and Surgery." },
                         { year: "Experience", title: "Clinical Practice", desc: "Infertility Centre (Chennai) & Aditya Hospital (Pune)." },
                         { year: "2017", title: "Moved to Canada", desc: "Established practice in New Brunswick." },
                         { year: "Current", title: "Ideal Care Health Clinic", desc: "Naturopathy, Homeopathy & Holistic Nutrition." }
                      ].map((item, i) => (
                         <div key={i} className="relative flex items-start gap-6">
                            <div className="w-6 h-6 rounded-full bg-brand-500 border-4 border-white shadow-sm flex-shrink-0 relative z-10 mt-1"></div>
                            <div>
                               <span className="text-sm font-bold text-brand-500 uppercase tracking-wider">{item.year}</span>
                               <h4 className="text-lg font-bold text-brand-900">{item.title}</h4>
                               <p className="text-gray-500">{item.desc}</p>
                            </div>
                         </div>
                      ))}
                   </div>
               </section>

               {/* Philosophy Section */}
               <section className="bg-brand-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700 rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/3"></div>
                  
                  <h2 className="text-3xl font-heading font-bold mb-6 relative z-10">Our Philosophy</h2>
                  <blockquote className="text-xl md:text-2xl leading-relaxed font-heading text-brand-100 italic relative z-10 mb-8">
                     "Healing should be natural, gentle and effective. We don't just treat the symptoms; we treat the person."
                  </blockquote>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                     <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <Heart className="w-8 h-8 text-coral-500 mb-4" />
                        <h4 className="font-bold text-lg mb-2">Patient-Centered</h4>
                        <p className="text-brand-200 text-sm">We value time, relationships, and listening to your story.</p>
                     </div>
                     <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <BookOpen className="w-8 h-8 text-brand-300 mb-4" />
                        <h4 className="font-bold text-lg mb-2">Holistic Methods</h4>
                        <p className="text-brand-200 text-sm">Combining Homeopathy, Herbs, and Nutrition for complete care.</p>
                     </div>
                  </div>
               </section>
   
      </div>
    </div>
  );
};