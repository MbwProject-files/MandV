import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import googleReviewsImg from '../../assets/google-reviews.png';

// Import all client logos
import client1 from '../../assets/client_logos/client1.jpg';
import client2 from '../../assets/client_logos/client2.jpg';
import client3 from '../../assets/client_logos/client3.jpg';
import client4 from '../../assets/client_logos/client4.jpg';
import client5 from '../../assets/client_logos/client5.jpg';
import client6 from '../../assets/client_logos/client6.jpg';
import client7 from '../../assets/client_logos/client7.jpg';
import client8 from '../../assets/client_logos/client8.jpg';
import client9 from '../../assets/client_logos/client9.jpg';
import client10 from '../../assets/client_logos/client10.jpg';
import client11 from '../../assets/client_logos/client11.jpg';
import client12 from '../../assets/client_logos/client12.jpg';
import client13 from '../../assets/client_logos/client13.jpg';
import client14 from '../../assets/client_logos/client14.jpg';
import client16 from '../../assets/client_logos/client16.jpg';
import client17 from '../../assets/client_logos/client17.jpg';
import client18 from '../../assets/client_logos/client18.jpg';
import client19 from '../../assets/client_logos/client19.jpg';
import client20 from '../../assets/client_logos/client20.jpg';

const clienteleLogos = [
  { name: "ACT", url: client1 },
  { name: "L & T", url: client2 },
  { name: "Srinathji", url: client3 },
  { name: "Jipmer", url: client4 },
  { name: "TCS", url: client5 },
  { name: "A. R. Enterprises", url: client6 },
  { name: "FirePro", url: client7 },
  { name: "Kidde", url: client8 },
  { name: "WIPRO", url: client9 },
  { name: "Arun Excello", url: client10 },
  { name: "CREW", url: client11 },
  { name: "Keld", url: client12 },
  { name: "SABASH", url: client13 },
  { name: "TAKRAF", url: client14 },
  { name: "TEJA", url: client16 },
  { name: "Shri Plasto Packers", url: client17 },
  { name: "SRF", url: client18 },
  { name: "Bhatia", url: client19 },
  { name: "Partner", url: client20 },
];

const testimonials = [
  {
    text: "MANDV's height safety systems are the best we've ever used. The quality of fabrication and the professionalism of their team is unmatched in the industry.",
    author: "Sanjeev Kumar",
    role: "Safety Head, L&T Projects",
    color: "border-brand-green"
  },
  {
    text: "Their EPC turnaround time is impressive. They handled our entire warehouse project from engineering to final construction without a single hiccup.",
    author: "Rajesh Sharma",
    role: "Project Director, TCS Infrastructure",
    color: "border-brand-yellow"
  },
  {
    text: "Working with MANDV on our structural fabrication needs was a seamless experience. Their attention to detail and commitment to safety standards is truly commendable.",
    author: "Amit Patel",
    role: "Operations Manager, Reliance Industry",
    color: "border-brand-green"
  }
];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="feedback" className="bg-white">
      {/* Clientele Section */}
      <div className="pt-20 pb-10 overflow-hidden relative border-b border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold text-sm tracking-[0.3em] uppercase mb-4">Our Partners</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Trusted by Industry Leaders</h3>
        </div>

        {/* Infinite Looping Slider Container */}
        <div className="relative w-full flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-16 md:before:w-48 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-16 md:after:w-48 after:bg-gradient-to-l after:from-white after:to-transparent">

          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...clienteleLogos, ...clienteleLogos].map((client, idx) => (
              <div
                key={idx}
                className="w-48 h-24 bg-white border border-gray-100 rounded-xl flex items-center justify-center p-4 grayscale hover:grayscale-0 hover:shadow-lg transition-all duration-300 shrink-0"
              >
                <img src={client.url} alt={client.name} className="max-w-full max-h-full object-contain pointer-events-none" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
      {/* Testimonials & Google Rating Section */}
      <div className="py-24 bg-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-brand-green font-bold text-sm tracking-[0.3em] uppercase mb-4">Client Feedback</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-dark">Testimonials</h3>
            </div>

            {/* Prev/Next Buttons - Top Right */}
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Google Rating Column */}
            <div className="lg:w-1/3 w-full">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center justify-center group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent z-0"></div>
                <img
                  src={googleReviewsImg}
                  alt="Google Reviews"
                  className="w-full max-w-[280px] h-auto relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-8 text-center relative z-10">
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Overall Rating</p>
                  <div className="text-3xl font-black text-brand-dark">4.9 / 5.0</div>
                </div>
              </div>
            </div>

            {/* Testimonials Slider */}
            <div className="lg:w-2/3 w-full overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border-b-4 border-brand-green relative group max-w-2xl mx-auto"
              >
                <div className="absolute top-8 right-8 text-gray-100 group-hover:text-brand-green/10 transition-colors pointer-events-none">
                  <Quote size={60} />
                </div>

                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="#FFD700" className="text-[#FFD700]" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-gray-600 italic mb-10 relative z-10 leading-relaxed font-medium">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-black text-lg">
                    {testimonials[currentIndex].author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark text-lg">{testimonials[currentIndex].author}</h5>
                    <p className="text-[11px] text-brand-green font-bold uppercase tracking-widest leading-tight">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-brand-green' : 'w-2 bg-gray-300'}`}
                  ></div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section-padding pt-20">
        <div className="bg-brand-dark rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-brand-green p-12 text-white relative">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-10 text-brand-yellow">Get in Touch</h3>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="bg-white/10 p-4 rounded-xl shrink-0 h-fit">
                    <MapPin className="text-brand-yellow" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Office Address</h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      #49/20, 1st street, Annamalai Nagar,<br />
                      West mambalam, Chennai - 600 033.
                    </p>
                    <h5 className="font-bold text-lg mt-4 mb-2">Factory Address</h5>
                    <p className="text-white/80 text-sm leading-relaxed">
                      259 A, Rettambadu road, Thervazhi post,<br />
                      Athuppakkam, Gummidipoondi – 601 201.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-white/10 p-4 rounded-xl shrink-0 h-fit">
                    <Phone className="text-brand-yellow" size={24} />
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-lg mb-2">Call Us</h5>
                    <p className="text-sm">
                      <span className="font-bold text-brand-yellow">P. MANOHAR:</span> +91 9840 90 9796
                    </p>
                    {/* <p className="text-sm">
                      <span className="font-bold text-brand-yellow">M. JANAKIRAMAN:</span> +91 9688 98 8455
                    </p> */}
                    <p className="text-sm opacity-70">Support: +91 044 27929984</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-white/10 p-4 rounded-xl shrink-0 h-fit">
                    <Mail className="text-brand-yellow" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Email Address</h5>
                    <p className="text-sm hover:text-brand-yellow transition-colors cursor-pointer">info@mandvprojects.com</p>
                    <p className="text-sm hover:text-brand-yellow transition-colors cursor-pointer">mandvprojectsin@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10 flex items-center gap-6">
                <div className="p-3 bg-brand-yellow rounded-full text-brand-dark">
                  <Clock size={20} />
                </div>
                <div>
                  <h6 className="font-bold text-sm">Working Hours</h6>
                  <p className="text-xs text-white/60 uppercase">Mon - Sat | 09:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -mr-32"></div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 bg-white">
            <h4 className="text-brand-dark text-2xl font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="text-brand-green" /> Send a Message
            </h4>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">Email ID</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">Phone Number</label>
                <input type="tel" placeholder="+91 XXXX XXX XXX" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tighter">Your Message</label>
                <textarea rows="5" placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-green text-white font-bold py-5 rounded-xl shadow-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 group">
                SUBMIT ENQUIRY <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            {/* <div className="mt-12 rounded-2xl overflow-hidden h-48 border border-gray-100 shadow-inner">
               <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold italic">
                 [ Google Maps Placeholder - West Mambalam, Chennai ]
               </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
