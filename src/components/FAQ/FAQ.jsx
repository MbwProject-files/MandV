import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

const faqData = [
  {
    question: "What types of industrial safety gear do you provide?",
    answer: "We provide a comprehensive range of personal protective equipment (PPE) including safety harnesses, helmets, protective clothing, and specialized gear for height safety and industrial work environments."
  },
  {
    question: "Do you offer custom metal fabrication services?",
    answer: "Yes, we specialize in custom industrial fabrication. Our services include structural steelwork, industrial staircases, walkways, and complex metal components tailored to specific project requirements."
  },
  {
    question: "What is included in your EPC project services?",
    answer: "Our EPC (Engineering, Procurement, and Construction) services cover the entire project lifecycle, from initial engineering design and material procurement to final on-site construction and commissioning."
  },
  {
    question: "How do your height safety systems ensure operator safety?",
    answer: "Our height safety systems, including skylight guards and roof walkways, are engineered to meet stringent safety standards. They provide stable access and fall protection on fragile or slippery industrial surfaces."
  },
  {
    question: "Which industries do you typically serve?",
    answer: "We serve a wide variety of sectors including manufacturing, construction, energy, and infrastructure. Our solutions are designed to enhance safety and efficiency in any heavy industrial landscape."
  },
  {
    question: "Can you provide turnkey solutions for large-scale projects?",
    answer: "Absolutely. With over 15 years of experience and 500+ completed projects, we have the expertise to manage large-scale turnkey solutions that integrate engineering, fabrication, and safety systems seamlessly."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-green font-bold text-sm tracking-[0.3em] uppercase mb-4">Support Center</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Frequently Asked <span className="text-brand-green">Questions</span></h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Find quick answers to common queries about our services, products, and industrial expertise.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl transition-all duration-300 ${
                activeIndex === index 
                ? 'border-brand-green bg-brand-green/5 shadow-lg' 
                : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${
                    activeIndex === index ? 'bg-brand-green text-white' : 'bg-white text-brand-green shadow-sm'
                  }`}>
                    {activeIndex === index ? <MessageSquare size={20} /> : <HelpCircle size={20} />}
                  </div>
                  <span className={`font-bold text-lg md:text-xl transition-colors ${
                    activeIndex === index ? 'text-brand-dark' : 'text-gray-700'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-brand-green' : ''
                  }`} 
                  size={24} 
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 ml-14">
                      <div className="h-0.5 w-12 bg-brand-yellow mb-4 rounded-full"></div>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#0a192f] rounded-3xl p-8 text-center relative overflow-hidden group shadow-2xl border border-white/10"
        >
          {/* Animated Background Gradient - Matching Footer Line */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-40 bg-gradient-to-r from-brand-yellow via-brand-green to-brand-yellow"
            style={{ width: '300%' }}
            animate={{ x: ['-66.6%', '0%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          ></motion.div>

          <p className="text-white text-lg mb-8 relative z-10 font-bold tracking-wide">
            Still have questions? We're here to help you.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-4 rounded-xl font-black hover:bg-brand-yellow hover:text-brand-dark transition-all shadow-xl relative z-10 uppercase tracking-[0.2em] text-xs border border-white/20"
          >
            Contact Our Team <MessageSquare size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
