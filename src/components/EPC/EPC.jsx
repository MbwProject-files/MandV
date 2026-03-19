import React from 'react';
import { motion } from 'framer-motion';
import { PencilRuler, PackageSearch, Construction, ArrowRight } from 'lucide-react';

const epcSteps = [
  {
    id: "01",
    title: "Engineering",
    desc: "Rigorous planning and 3D modeling optimized for feasibility, cost-efficiency, and maximum safety.",
    icon: <PencilRuler size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Procurement",
    desc: "Strategic sourcing of high-grade raw materials and components from certified global vendors.",
    icon: <PackageSearch size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Construction",
    desc: "Expert on-site execution and integration by certified technicians strictly adhering to safety protocols.",
    icon: <Construction size={32} strokeWidth={1.5} />,
  }
];

const EPC = () => {
  return (
    <section id="epc" className="bg-[#f8f9fa] py-24 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Compact Elegant Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-brand-dark text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              Integrity in Execution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
              The <span className="text-brand-green">EPC</span> Advantage
            </h2>
          </motion.div>

          <motion.div
            className="md:w-1/2 md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-gray-500 text-lg font-light md:max-w-md ml-auto">
              Single-point responsibility for complex infrastructure. Cost-optimized, risk-free, and executed to absolute perfection.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Minimal Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {epcSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-green/20 transition-all duration-500 group relative overflow-hidden flex flex-col min-h-[320px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <span className="text-4xl font-black text-brand-green/20 group-hover:text-brand-green/40 transition-colors duration-500 font-heading">
                  {step.id}
                </span>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-brand-green mb-4">{step.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Arrow Indicator */}
              <div className="relative z-10 mt-6 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white cursor-pointer shadow-sm group-hover:-rotate-45 transition-transform duration-300">
                  <ArrowRight size={18} />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EPC;
