import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Factory, Shield, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Factory size={32} />, title: "Industrial Fabrication", desc: "State-of-the-art facilities for high-precision metal and structural fabrication." },
    { icon: <Shield size={32} />, title: "Safety Solutions", desc: "Comprehensive life safety and fall protection systems for industrial height safety." },
    { icon: <Cpu size={32} />, title: "EPC Capabilities", desc: "End-to-end Engineering, Procurement, and Construction services for industrial projects." },
  ];

  return (
    <section id="about" className="bg-gray-50 overflow-hidden">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green font-bold text-sm tracking-widest uppercase rounded-full mb-6">
            Our Legacy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-dark">
            Established in <span className="text-brand-green">2007</span>,
            Committed to Industrial Safety & Excellence.
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            MANDV Web Projects has been a cornerstone in the engineering and fabrication industry for over 15 years.
            We specialize in providing turnkey solutions that integrate advanced engineering expertise with robust industrial fabrication.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Engineering expertise in complex structural designs",
              "Advanced industrial fabrication for multiple sectors",
              "Highest standards in Industrial Safety solutions",
              "Seamless EPC project execution"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-yellow shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8 border-t border-gray-200 pt-8">
            <div>
              <div className="text-4xl font-bold text-brand-green">15+</div>
              <div className="text-sm font-semibold text-gray-500 uppercase">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green">500+</div>
              <div className="text-sm font-semibold text-gray-500 uppercase">Projects Completed</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            {highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-brand-yellow">
                <div className="text-brand-green mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 sm:mt-12">
            <div className="bg-brand-green p-8 rounded-2xl shadow-xl text-white">
              <div className="text-brand-yellow mb-4"><Cpu size={32} /></div>
              <h3 className="text-xl font-bold mb-3">EPC Capabilities</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Complete engineering lifecycle from initial design to procurement and final site construction.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Engineering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
