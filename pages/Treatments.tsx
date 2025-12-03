import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="bg-sand-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumbs />
        
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-900 mb-6">
             Our Expertise
           </h1>
           <p className="text-lg text-gray-600">
             Comprehensive care for acute and chronic conditions. We treat the individual, not just the symptoms.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {treatments.map((t, i) => (
             <Link 
               to="/contact" 
               key={i}
               className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-50 flex flex-col"
             >
                <div className="h-48 overflow-hidden">
                   <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <span className="text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">{t.category}</span>
                   <h3 className="text-2xl font-heading font-bold text-brand-900 mb-3">{t.title}</h3>
                   <p className="text-gray-600 mb-6 flex-grow">{t.desc}</p>
                   <div className="flex items-center text-brand-600 font-bold text-sm gap-2 group-hover:gap-4 transition-all">
                      Book Consultation <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>
           ))}
        </div>
      </div>
    </div>
  );
};