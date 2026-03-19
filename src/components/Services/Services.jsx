import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, 
  Warehouse, 
  Factory, 
  Settings2, 
  Building2, 
  ShieldAlert, 
  Anchor,
  ArrowRight
} from 'lucide-react';

const fabricationServices = [
  { id: '01', title: "Material Handling Systems", desc: "Automated and manual systems designed to streamline industrial logistics and heavy part movement.", icon: <Truck size={32} /> },
  { id: '02', title: "Industrial Fabrication", desc: "Heavy-duty structural fabrication adhering to the highest global engineering standards and tolerances.", icon: <Factory size={32} /> },
  { id: '03', title: "Commercial Fabrication", desc: "Architectural and functional metalwork tailored for modern commercial infrastructure.", icon: <Building2 size={32} /> },
  { id: '04', title: "Press Components", desc: "Precision-engineered press components manufactured for high-stress industrial applications.", icon: <Settings2 size={32} /> },
  { id: '05', title: "Industrial Sheds", desc: "Turnkey design and erection of robust industrial and commercial sheds built to last.", icon: <Warehouse size={32} /> },
];

const salesServices = [
  { title: "Industrial Safety Geer", icon: <ShieldAlert size={24} /> },
  { title: "Lifeline Systems", icon: <Anchor size={24} /> },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % fabricationServices.length);
    }, 4000); // Changes every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="relative text-white overflow-hidden py-24">
      {/* Background Image with Deep Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-100"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>
      <div className="absolute inset-0 bg-brand-dark/75 z-0"></div>

      {/* Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-brand-yellow/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-yellow text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse"></span>
              Service Excellence
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-green">Excellence</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light">
              We deliver comprehensive fabrication and strategic safety solutions, acting as the backbone for modern industrial infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Elegant Interactive Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 min-h-[600px]">
          
          {/* Left Side - Interactive List */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-green rounded-full"></span>
              Fabrication Capabilities
            </h3>
            
            {fabricationServices.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden ${
                  activeService === index 
                    ? 'bg-gradient-to-r from-brand-green/20 to-transparent border border-brand-green/30' 
                    : 'bg-white/5 border border-white/5 hover:bg-white/10'
                }`}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Active Indicator Line */}
                {activeService === index && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-green"
                  />
                )}
                
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`text-2xl font-bold font-heading transition-colors duration-300 ${activeService === index ? 'text-brand-green' : 'text-gray-500'}`}>
                    {service.id}
                  </div>
                  <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${activeService === index ? 'text-white' : 'text-gray-400'}`}>
                    {service.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Dynamic Display & Sales Banner */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Dynamic Content Card */}
            <div className="flex-1 bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md shadow-2xl min-h-[350px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 h-full flex flex-col justify-center"
                >
                  <div className="w-16 h-16 bg-brand-dark border-2 border-brand-green/30 rounded-2xl flex items-center justify-center text-brand-yellow mb-8 shadow-[0_0_30px_rgba(0,130,56,0.3)]">
                    {fabricationServices[activeService].icon}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
                    {fabricationServices[activeService].title}
                  </h3>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-10 max-w-xl">
                    {fabricationServices[activeService].desc}
                  </p>
                  
                  <button className="flex items-center gap-3 text-brand-yellow font-bold group w-fit cursor-pointer">
                    Explore Capability 
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Premium Sales & Safety Banner */}
            <div id="sales" className="bg-gradient-to-r from-brand-green to-[#006028] rounded-3xl p-8 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]" style={{ backgroundSize: '20px 20px' }}></div>
               
               <div className="relative z-10 w-full md:w-auto">
                 <h4 className="text-brand-yellow font-bold text-sm tracking-widest uppercase mb-2">Strategic Sales division</h4>
                 <h5 className="text-2xl font-bold text-white mb-2">Industrial Safety Solutions</h5>
                 <p className="text-white/80 text-sm max-w-sm">Global standards of physical safety systems procured and installed by experts.</p>
               </div>
               
               <div className="relative z-10 flex gap-4 w-full md:w-auto">
                 {salesServices.map((service, idx) => (
                   <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 w-32 md:w-40 hover:bg-white/20 transition-colors cursor-pointer">
                     <div className="text-brand-yellow">{service.icon}</div>
                     <span className="text-xs font-bold text-center">{service.title}</span>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
