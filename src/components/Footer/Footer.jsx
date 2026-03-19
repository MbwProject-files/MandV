import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import footerIndustrial from '../../assets/footer-industrial.png';

const Footer = () => {
  return (
    <footer className="relative text-white pt-24 overflow-hidden bg-brand-dark">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerIndustrial}
          alt="Industrial Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-black z-0"></div>
      </div>

      {/* Dynamic Vibrant Mesh Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        {/* Large Moving Orbs with high visibility */}
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.2, 1]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-brand-green/30 rounded-full blur-[100px]"
        ></motion.div>

        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-brand-yellow/20 rounded-full blur-[120px]"
        ></motion.div>

        <motion.div
          animate={{
            x: [-50, 50, -50],
            y: [100, -100, 100],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-[50%] h-[50%] bg-[#00f2fe]/20 rounded-full blur-[110px]"
        ></motion.div>
      </div>

      {/* Glassmorphism/Noise Overlay for Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#051124]/40 via-transparent to-[#051124]/90 z-0 pointer-events-none"></div>

      {/* Top Gradient Accent Line with Moving Animation */}
      <motion.div
        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-brand-yellow via-brand-green to-brand-yellow z-20"
        style={{ width: '200%' }}
        animate={{ x: ['-50%', '0%'] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8 pb-20 relative z-10">

        {/* Brand & About Column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-4 mb-8 cursor-pointer group w-fit" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-white/5 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg group-hover:border-brand-green/50 transition-all">
              <img src={logo} alt="MANDV Logo" className="h-10 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white">MANDV</span>
              <span className="text-[9px] uppercase font-bold text-brand-yellow tracking-[0.3em]">Project Services</span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Pioneers in Engineering and Fabrication since 2007. We are committed to providing state-of-the-art safety and structural solutions for industrial landscapes.
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-500 hover:text-white" },
              { icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-500 hover:text-white" },
              { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-700 hover:text-white" },
              { icon: Instagram, href: "https://instagram.com", color: "hover:bg-pink-500 hover:text-white" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-1">
          <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            Quick Links shalini
          </h4>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Products', 'Services', 'EPC', 'Clientele', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase().replace(' ', '')}
                  smooth={true}
                  className="group flex items-center gap-2 text-gray-400 hover:text-brand-yellow text-sm font-medium cursor-pointer transition-all duration-300 w-fit"
                >
                  <span className="w-0 h-0.5 bg-brand-yellow group-hover:w-3 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Expertise Column */}
        <div className="lg:col-span-1">
          <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            Our Expertise
          </h4>
          <ul className="space-y-3">
            {[
              'Industrial Safety Gear',
              'Metal Fabrication',
              'Material Handling',
              'Steel Structures',
              'Fall Protection Systems',
              'EPC Project Planning'
            ].map((skill, idx) => (
              <li
                key={idx}
                className="group flex items-center gap-2 text-gray-400 hover:text-brand-green text-sm font-medium cursor-pointer transition-all duration-300 w-fit"
              >
                <span className="w-0 h-0.5 bg-brand-green group-hover:w-3 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-1">
          <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            Contact Us
          </h4>
          <div className="space-y-5 text-gray-300 text-sm">
            <div className="flex items-start gap-4">
              <div className="mt-1"><MapPin size={18} className="text-brand-yellow" /></div>
              <div className="flex flex-col gap-3">
                <div>
                  <span className="block font-bold text-white mb-1">Office</span>
                  <p className="text-sm leading-relaxed text-gray-400">#49/20, 1st Street, West Mambalam,<br />Chennai – 600 033</p>
                </div>
                <div>
                  <span className="block font-bold text-white mb-1">Factory</span>
                  <p className="text-sm leading-relaxed text-gray-400">Gummidipoondi – 601 201</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1"><Phone size={18} className="text-brand-green" /></div>
              <div className="flex flex-col gap-1 text-sm text-gray-400">
                <span>+91 044 27929984</span>
                <span>+91 9840 90 9796</span>
                {/* <span>+91 9688 98 8455</span> */}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1"><Mail size={18} className="text-brand-yellow" /></div>
              <div className="flex flex-col gap-1 text-sm text-gray-400">
                <a href="mailto:info@mandvprojects.com" className="hover:text-white transition-colors">info@mandvprojects.com</a>
                <a href="mailto:mandvprojectsin@gmail.com" className="hover:text-white transition-colors">mandvprojectsin@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-gray-300 text-xs md:text-sm font-semibold">
              © {new Date().getFullYear()} <span className="text-brand-yellow">MANDV Web Projects</span>. All Rights Reserved.
            </p>
            <span className="text-gray-500 text-xs flex items-center gap-1 font-medium mt-1 md:mt-0 md:ml-4">
              Powered by
              <a
                href="https://mbwit.net/"
                target="_blank"
                rel="noreferrer"
                className="text-brand-yellow hover:text-white transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-brand-yellow hover:after:w-full after:transition-all"
              >
                MBW
              </a>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm text-gray-400 font-bold tracking-wider">
            <span className="hover:text-white cursor-pointer transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-brand-green hover:after:w-full after:transition-all">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow hover:after:w-full after:transition-all">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-brand-green hover:after:w-full after:transition-all">Cookies Settings</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="fixed bottom-10 right-10 w-14 h-14 bg-gradient-to-tr from-brand-green to-emerald-400 text-white rounded-full shadow-[0_10px_30px_rgba(0,130,56,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_15px_40px_rgba(0,130,56,0.6)] transition-all z-50 group border border-white/20"
      >
        <ArrowUp size={28} className="group-hover:-translate-y-2 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
