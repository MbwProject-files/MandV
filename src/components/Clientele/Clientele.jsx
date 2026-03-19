import React from 'react';
import { motion } from 'framer-motion';

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

const logos = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9, client10,
  client11, client12, client13, client14, client16,
  client17, client18, client19, client20
];

const Clientele = () => {
  return (
    <section id="clientele" className="bg-white overflow-hidden py-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green font-bold text-sm tracking-widest uppercase rounded-full mb-6">
              Empowering Industry Leaders
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-dark">
              Our <span className="text-brand-green">Partners</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We take pride in our association with some of the most prestigious names in the industrial and engineering sectors.
            </p>
          </motion.div>
        </div>

        {/* Multi-row Logo Grid with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-full aspect-[3/2] flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="max-w-full max-h-full object-contain filter group-hover:drop-shadow-sm"
              />
            </motion.div>
          ))}
        </div>

        {/* Animated Marquee style for extra premium feel (optional, but let's stick to grid for clarity first, or add a subtle one below) */}
        <div className="mt-20 border-t border-gray-100 pt-20">
          <div className="relative flex overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap gap-12">
              {logos.map((logo, index) => (
                <div key={`m1-${index}`} className="w-32 h-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all flex items-center justify-center">
                  <img src={logo} className="h-12 object-contain" alt="" />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`m2-${index}`} className="w-32 h-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all flex items-center justify-center">
                  <img src={logo} className="h-12 object-contain" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;
