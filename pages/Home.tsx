import React from 'react';
import { Button } from '../components/Button';
import { Star, Leaf, Heart, ShieldCheck, ArrowRight, Instagram,  Users, Baby, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import myLogo from '/1.png'

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Soft Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100 rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sand-200 rounded-full blur-[80px] opacity-60 -translate-x-1/3 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full text-brand-600 text-sm font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Now Accepting New Patients
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-900 leading-[1.1]">
            Gentle Healing, <br/>
            <span className="text-brand-500">Naturally.</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Experience the power of homeopathy with <span className="font-bold text-brand-700">Madhu Mohanan</span>. 
            A holistic approach to cure the root cause, tailored just for you.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="shadow-brand-500/25">Book Appointment</Button>
            </Link>
            <Link to="/treatments">
              <Button variant="secondary" size="lg">Explore Treatments</Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-brand-100/50">
             <div>
                <p className="text-3xl font-heading font-bold text-brand-900">10+</p>
                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
             </div>
             <div>
                <p className="text-3xl font-heading font-bold text-brand-900">100%</p>
                <p className="text-sm text-gray-500 font-medium">Natural Remedies</p>
             </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/5]">
            {/* Organic Shape Container */}
            <div className="absolute inset-0 bg-brand-200 blob-shape rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-sand-300 blob-shape -rotate-3 scale-100 opacity-50"></div>
            
            {/* Profile Image */}
            <img 
               src= {myLogo}
               alt="Madhu Mohanan" 
               className="relative z-10 w-full h-full object-cover blob-shape shadow-2xl transition-transform hover:scale-[1.02] duration-500"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-12 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
               <div className="bg-brand-100 p-3 rounded-xl">
                  <Leaf className="w-6 h-6 text-brand-600" />
               </div>
               <div>
                  <p className="font-bold text-brand-900">Holistic Nutritionist</p>
                  <p className="text-xs text-brand-500">Certified Expert</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-900 mb-4">Why Choose Ideal Cure?</h2>
        <p className="text-gray-600">We believe in treating the person, not just the disease. Our methods are safe, effective, and free from side effects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Leaf, title: "100% Natural", desc: "Remedies derived from natural sources, safe for infants and pregnant women." },
          { icon: ShieldCheck, title: "No Side Effects", desc: "Gentle healing that works with your body's vital force without harmful reactions." },
          { icon: Heart, title: "Root Cause", desc: "We dig deep to find the underlying cause of your ailments for lasting cure." }
        ].map((feature, i) => (
          <div key={i} className="bg-brand-50 rounded-3xl p-8 hover:bg-brand-100 transition-colors duration-300 text-center group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <feature.icon className="w-8 h-8 text-brand-500" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoCanBenefit = () => (
   <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
     {/* Decorative BG */}
     <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
       <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
       <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-400 rounded-full blur-[120px]"></div>
     </div>
 
     <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
         <div className="max-w-xl">
           <span className="text-brand-300 font-bold uppercase tracking-wider text-sm mb-2 block">Inclusive Care</span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
             Who Can Benefit?
           </h2>
           <p className="text-brand-100 text-lg leading-relaxed">
             Our holistic approach is designed for everyone. Whether you are dealing with a sudden illness or a long-standing condition, natural medicine offers a gentle path to recovery.
           </p>
         </div>
         <Link to="/contact">
           <Button variant="secondary" className="bg-brand-100 text-brand-900 hover:bg-white border-none">
             Get Started Today
           </Button>
         </Link>
       </div>
 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           {
             icon: Baby,
             title: "Children & Infants",
             desc: "Gentle relief for colic, teething, allergies, and recurrent colds without harsh chemicals.",
             color: "bg-coral-500"
           },
           {
             icon: Users,
             title: "Adults",
             desc: "Stress management, hormonal balance, digestive health, and chronic pain solutions.",
             color: "bg-brand-500"
           },
           {
             icon: Heart,
             title: "Seniors",
             desc: "Support for arthritis, mobility, sleep issues, and maintaining vitality in later years.",
             color: "bg-brand-600"
           },
           {
             icon: Activity,
             title: "Chronic & Acute",
             desc: "From sudden flus to long-term autoimmune conditions, we address the full spectrum.",
             color: "bg-brand-700"
           }
         ].map((item, i) => (
           <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300 group">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                 <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-brand-100/80 leading-relaxed text-sm">
                 {item.desc}
              </p>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
 
const Reviews = () => (
  <section className="py-24 bg-sand-50 overflow-hidden">
     <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <span className="text-brand-500 font-bold uppercase tracking-wider text-sm">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-900 mt-2">Stories of Healing</h2>
           </div>
           <div className="flex gap-1 mt-4 md:mt-0">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-50 hover:shadow-md transition-shadow">
                 <div className="mb-6 text-brand-500">
                    <Star className="w-4 h-4 fill-current inline-block mr-1" />
                    <Star className="w-4 h-4 fill-current inline-block mr-1" />
                    <Star className="w-4 h-4 fill-current inline-block mr-1" />
                    <Star className="w-4 h-4 fill-current inline-block mr-1" />
                    <Star className="w-4 h-4 fill-current inline-block mr-1" />
                 </div>
                 <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-700">
                       {review.name[0]}
                    </div>
                    <div>
                       <p className="font-bold text-brand-900 text-sm">{review.name}</p>
                       <p className="text-xs text-brand-400">{review.tag}</p>
                    </div>
                 </div>
              </div>
           ))}
        </div>
     </div>
  </section>
);

const InstagramFeed = () => (
   <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
         <h2 className="text-3xl font-heading font-bold text-brand-900 mb-8 flex items-center justify-center gap-3">
            <Instagram className="w-8 h-8 text-brand-500" /> Follow Our Journey
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
               "https://images.unsplash.com/photo-1544367563-12123d8966cd?q=80&w=600&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"
            ].map((src, i) => (
               <a href="https://www.instagram.com/idealcurehomeopathy/" target="_blank" rel="noreferrer" key={i} className="group overflow-hidden rounded-2xl relative aspect-square">
                  <img src={src} alt="Instagram" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                     @idealcure
                  </div>
               </a>
            ))}
         </div>
         <a href="https://www.instagram.com/idealcurehomeopathy/" target="_blank" rel="noreferrer">
            <Button variant="outline">View on Instagram</Button>
         </a>
      </div>
   </section>
);

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhoCanBenefit />
      <Reviews />
      <InstagramFeed />
    </>
  );
};