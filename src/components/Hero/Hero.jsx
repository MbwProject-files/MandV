import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronRight, ShieldCheck, Settings, Award, ArrowLeft, ArrowRight } from 'lucide-react';

// Hero Images
import slide1 from '../../assets/hero/slide1.png';
import slide2 from '../../assets/hero/slide2.png';
import slide3 from '../../assets/hero/slide3.png';
import slide4 from '../../assets/hero/slide4.png';

const slides = [
  {
    image: slide1,
    tag: "Est. 2007 | Industrial Excellence",
    title: "Precision <span className='text-brand-yellow'>Engineering</span>",
    description: "Pioneering engineering and precision fabrication solutions for the modern industrial landscape.",
    buttonPrimary: "View Products",
    buttonSecondary: "Contact Us"
  },
  {
    image: slide2,
    tag: "Safety First | 100% Compliance",
    title: "Advanced <span className='text-brand-yellow'>Safety</span> Solutions",
    description: "Industry-leading personal protective equipment and site safety systems to ensure workforce protection.",
    buttonPrimary: "Explore Safety",
    buttonSecondary: "Ask for Audit"
  },
  {
    image: slide3,
    tag: "Efficiency | Modern Automation",
    title: "Performance <span className='text-brand-yellow'>Fabrication</span>",
    description: "State-of-the-art material handling systems and industrial fabrication with unmatched durability.",
    buttonPrimary: "Industrial Kits",
    buttonSecondary: "Case Studies"
  },
  {
    image: slide4,
    tag: "Expertise | Large Scale EPC",
    title: "Global <span className='text-brand-yellow'>Projects</span> Strategy",
    description: "End-to-end engineering, procurement and construction expertise for complex industrial infrastructures.",
    buttonPrimary: "EPC Solutions",
    buttonSecondary: "Get a Quote"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] w-full flex items-center overflow-hidden bg-brand-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src={slides[current].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent"></div>
          {/* Subtle overlay texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        </motion.div>
      </AnimatePresence>

      <div className="section-padding relative z-10 w-full">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-brand-yellow text-sm md:text-lg font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brand-yellow hidden md:block"></span>
                {slides[current].tag}
              </h2>
              <h1 
                className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8"
                dangerouslySetInnerHTML={{ __html: slides[current].title }}
              />
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl font-light">
                {slides[current].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="products" smooth={true} duration={500}>
                  <button className="bg-brand-yellow text-brand-dark font-black px-10 py-5 rounded-2xl flex items-center gap-3 group hover:bg-white transition-all shadow-2xl hover:shadow-brand-yellow/30 transform hover:-translate-y-1">
                    {slides[current].buttonPrimary} <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                  <button className="bg-transparent border-2 border-white/30 backdrop-blur-md text-white font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-brand-dark transition-all transform hover:-translate-y-1">
                    {slides[current].buttonSecondary}
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-20 hidden md:grid grid-cols-3 gap-8">
            {[
              { icon: <Settings className="text-brand-yellow" />, text: "Precision Engineering" },
              { icon: <ShieldCheck className="text-brand-yellow" />, text: "Safety Standards" },
              { icon: <Award className="text-brand-yellow" />, text: "EPC Experts" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + idx * 0.1 }}
                className="flex items-center gap-4 text-white p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-brand-dark/50 rounded-xl group-hover:bg-brand-yellow/20 transition-colors">
                  {item.icon}
                </div>
                <span className="font-bold text-xs uppercase tracking-widest">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all backdrop-blur-md"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all backdrop-blur-md"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute left-10 bottom-10 flex flex-col gap-4 z-20">
         {slides.map((_, idx) => (
           <div 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-1 h-12 rounded-full cursor-pointer transition-all duration-500 ${current === idx ? 'bg-brand-yellow h-20' : 'bg-white/20'}`}
           />
         ))}
      </div>
    </section>
  );
};

export default Hero;
