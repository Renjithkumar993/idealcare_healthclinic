import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Video, MapPin, Calendar, Activity, UserCheck } from 'lucide-react';

export const OnlineClinic: React.FC = () => {
  return (
    <div className="bg-sand-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumbs />
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-bold tracking-wider text-sm uppercase">Hybrid Clinic</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-900 mt-2 mb-6">
            Healing Without Borders
          </h1>
          <p className="text-xl text-gray-600">
            Whether you visit us in Fredericton or consult online, our standard of care remains personal, thorough, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 text-brand-600">
                 <MapPin className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-brand-900 mb-2">In-Person</h2>
              <p className="text-gray-500 mb-6">Fredericton, New Brunswick</p>
              <p className="text-gray-600 leading-relaxed">
                 Experience our calming clinic atmosphere. Perfect for comprehensive physical examinations and local residents.
              </p>
           </div>
           
           <div className="bg-brand-900 p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="w-16 h-16 bg-brand-800 rounded-2xl flex items-center justify-center mb-6 text-brand-300 relative z-10">
                 <Video className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2 relative z-10">Virtual Clinic</h2>
              <p className="text-brand-300 mb-6 relative z-10">Available Worldwide</p>
              <p className="text-brand-100/80 leading-relaxed relative z-10">
                 Connect from the comfort of your home via secure video call. We ship necessary remedies directly to you.
              </p>
           </div>
        </div>

        <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-brand-50">
           <h2 className="text-3xl font-heading font-bold text-brand-900 text-center mb-12">How It Works</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                 { icon: Calendar, title: "Book", desc: "Choose a time that works for you." },
                 { icon: UserCheck, title: "Consult", desc: "60-90 min detailed case history." },
                 { icon: Activity, title: "Analyze", desc: "Expert selection of your remedy." },
                 { icon: UserCheck, title: "Heal", desc: "Regular follow-ups & progress." }
              ].map((step, i) => (
                 <div key={i} className="text-center relative">
                    {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-100 -z-10"></div>}
                    <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-inner border-4 border-white">
                       {i + 1}
                    </div>
                    <h3 className="font-bold text-brand-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                 </div>
              ))}
           </div>

           <div className="text-center mt-12">
              <Link to="/contact">
                 <Button size="lg">Start Your Journey</Button>
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};