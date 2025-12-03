import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-sand-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumbs />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
           <div className="space-y-8">
              <div>
                 <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-900 mb-6">
                    Get in Touch
                 </h1>
                 <p className="text-xl text-gray-600 leading-relaxed">
                    We are here to answer your questions and help you start your journey to better health.
                 </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-50 space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600">
                       <Phone className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="font-bold text-brand-900">Phone</h3>
                       <p className="text-gray-600">(506)-461-7535</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600">
                       <Mail className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="font-bold text-brand-900">Email</h3>
                       <a href="mailto:contact@idealcurehomeopathy.com" className="text-brand-500 hover:text-brand-700 font-medium">contact@idealcurehomeopathy.com</a>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600">
                       <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="font-bold text-brand-900">Visit Us</h3>
                       <p className="text-gray-600">Unit 1 - 151 Main Street,<br/>Fredericton, NB E3C 1A7</p>
                    </div>
                 </div>
              </div>

              <div className="bg-brand-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-700 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                 <h3 className="text-xl font-bold mb-4 relative z-10 flex items-center gap-2">
                    <Clock className="w-5 h-5" /> Opening Hours
                 </h3>
                 <ul className="space-y-2 relative z-10 text-brand-100">
                    <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 5:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 2:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                 </ul>
              </div>
           </div>

           {/* Map */}
           <div className="h-[500px] lg:h-auto w-full bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.620021665476!2d-66.66986502351239!3d45.96803877108671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4226f95f4e555%3A0x6b4c194098935634!2s151%20Main%20St%20%231%2C%20Fredericton%2C%20NB%20E3A%201C6!5e0!3m2!1sen!2sca!4v1709400000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Map"
              ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};