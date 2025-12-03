import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Award, BookOpen, Heart } from 'lucide-react';

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
               src="../images/1.png"
               alt="Madhu Mohanan" 
               className="relative z-10 w-full rounded-[3rem] shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
             />
          </div>
        </div>

        <div className="bg-brand-900 rounded-[3rem] p-12 text-white text-center">
           <h2 className="text-3xl font-heading font-bold mb-6">Our Philosophy</h2>
           <p className="text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
              "Healing should be natural, gentle and effective. Using a combination of homeopathic remedies, herbal medicine, and natural holistic health practices, our aim is to bring you closer to your healthiest self."
           </p>
        </div>
      </div>
    </div>
  );
};