import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CloudRain, ArrowUpRight, Layout, Sun, Footprints, ExternalLink } from 'lucide-react';

// Product Images
import ppeImg from '../../assets/products/ppe.png';
import environmentImg from '../../assets/products/environment.png';
import ladderImg from '../../assets/products/ladder.png';
import staircaseImg from '../../assets/products/staircase.png';
import skylightImg from '../../assets/products/skylight.png';
import walkwayImg from '../../assets/products/walkway.png';

const productCategories = [
  {
    title: "Personal Protective Equipment",
    icon: <Shield size={32} />,
    desc: "Comprehensive range of industrial PPE designed for maximum operator safety and comfort.",
    image: ppeImg,
    category: "Safety Gear"
  },
  {
    title: "Environment Safety",
    icon: <CloudRain size={32} />,
    desc: "Solutions to protect and monitor the industrial environment against spills and hazards.",
    image: environmentImg,
    category: "Monitoring"
  },
  {
    title: "Ladder Systems",
    icon: <Layout size={32} />,
    desc: "Heavy-duty industrial ladders engineered for stability, durability, and safety at height.",
    image: ladderImg,
    category: "Access"
  },
  {
    title: "Industrial Staircase",
    icon: <ArrowUpRight size={32} />,
    desc: "Custom-fabricated staircases for commercial and industrial plants with anti-slip features.",
    image: staircaseImg,
    category: "Structural"
  },
  {
    title: "Sky Light Guard",
    icon: <Sun size={32} />,
    desc: "Specialized protection systems for rooftop skylights to prevent accidental falls.",
    image: skylightImg,
    category: "Fall Protection"
  },
  {
    title: "Roof Walk Way",
    icon: <Footprints size={32} />,
    desc: "Safety walkway systems for roof access, ensuring stable paths on fragile or slippery surfaces.",
    image: walkwayImg,
    category: "Rooftop Safety"
  }
];

const Products = () => {
  return (
    <section id="products" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-green font-bold text-sm tracking-[0.3em] uppercase mb-4">Our Product Catalog</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                Cutting-Edge <span className="text-brand-green">Industrial</span> Solutions
              </h3>
            </motion.div>
          </div>
          <motion.p 
            className="text-gray-500 text-lg max-w-md md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            A diverse range of high-quality products categorized into specific industrial safety and fabrication departments.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productCategories.map((product, idx) => (
            <motion.div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-green text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                  <div className="bg-brand-yellow p-3 rounded-2xl text-brand-dark shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                    {product.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-green transition-colors">
                  {product.title}
                </h4>
                <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                  {product.desc}
                </p>
                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <button className="flex items-center gap-3 text-brand-green font-bold text-sm tracking-widest group-hover:gap-4 transition-all uppercase">
                    View Details <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
