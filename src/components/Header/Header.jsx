import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Facebook, Linkedin, Twitter, ChevronDown, Shield, CloudRain, Layout, ArrowUpRight, Sun, Footprints, Package, Factory, Building2, Settings2, Warehouse, ShieldAlert, LifeBuoy } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';

const navigation = [
  { name: 'Home', to: 'home' },
  { name: 'About Us', to: 'about' },
  {
    name: 'Products',
    to: 'products',
    dropdown: [
      { name: 'Personal Productive Equipment', to: 'products', icon: Shield },
      { name: 'Environment Safety', to: 'products', icon: CloudRain },
      { name: 'Ladder', to: 'products', icon: Layout },
      { name: 'Staircase', to: 'products', icon: ArrowUpRight },
      { name: 'Sky Light Guard', to: 'products', icon: Sun },
      { name: 'Roof Walk Way', to: 'products', icon: Footprints },
    ]
  },
  {
    name: 'Services',
    to: 'services',
    dropdown: [
      { name: 'Material Handling Systems', to: 'services', icon: Package },
      { name: 'Industrial Fabrication', to: 'services', icon: Factory },
      { name: 'Commercial Fabrication', to: 'services', icon: Building2 },
      { name: 'Press Components', to: 'services', icon: Settings2 },
      { name: 'Industrial & Commercial Shed', to: 'services', icon: Warehouse },
    ],
    desc: 'Fabrication: 13 Products'
  },
  {
    name: 'Sales',
    to: 'sales',
    dropdown: [
      { name: 'Industrial Safety', to: 'sales', icon: ShieldAlert },
      { name: 'Lifeline Systems', to: 'sales', icon: LifeBuoy }
    ]
  },
  { name: 'EPC', to: 'epc' },
  { name: 'Clientele', to: 'clientele' },
  { name: 'Contact Us', to: 'contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full relative z-50">
      {/* Top Header */}
      <div className="bg-brand-green text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center text-xs xl:text-sm">
          <div className="flex gap-6">
            <a href="tel:+919840909796" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
              <Phone size={14} /> +91 9840 90 9796
            </a>
            <a href="mailto:info@mandvprojects.com" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
              <Mail size={14} /> info@mandvprojects.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Chennai, Tamil Nadu
            </span>
            <div className="flex gap-3 ml-4 border-l border-white/20 pl-4">
              <Facebook size={16} className="cursor-pointer hover:text-brand-yellow" />
              <Linkedin size={16} className="cursor-pointer hover:text-brand-yellow" />
              <Twitter size={16} className="cursor-pointer hover:text-brand-yellow" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-md py-2 z-50' : 'bg-white py-4 relative'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer shrink-0" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="MANDV Logo" className="h-10 md:h-14 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-brand-green tracking-tight leading-none">MANDV </span>
              <span className="text-[9px] md:text-[11px] font-bold text-brand-yellow uppercase tracking-[0.3em]">Project Services</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                  activeClass="text-brand-green font-bold"
                  className="flex items-center gap-1 text-[13px] font-bold text-brand-dark hover:text-brand-green cursor-pointer transition-colors uppercase tracking-widest py-4"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === item.name ? '-rotate-180' : ''}`} />}
                </Link>

                {/* Ultra Premium Mega Menu */}
                {item.dropdown && (
                  <div className={`absolute top-[100%] left-1/2 -translate-x-1/2 w-[850px] pt-6 transition-all duration-400 transform origin-top ${openDropdown === item.name ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
                    <div className="bg-white shadow-[0_40px_100px_rgba(0,0,0,0.12)] rounded-[2rem] border border-gray-100 overflow-hidden flex flex-col">

                      {/* Top Banner Area */}
                      <div className="bg-brand-green relative overflow-hidden px-10 py-4 flex items-center justify-between">
                        {/* Decorative Pattern Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px] opacity-20"></div>
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-xl">
                          <h4 className="text-xl lg:text-3xl font-bold text-white">{item.name}</h4>
                        </div>
                        <div className="relative z-10 shrink-0 hidden md:block">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md shadow-inner">
                            <ChevronDown size={24} className="text-brand-yellow -rotate-90" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Links Grid */}
                      <div className="p-10 bg-gray-50/50">
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-8">
                          Select from our offerings
                        </span>

                        <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                          {item.dropdown.map((sub, idx) => (
                            <Link
                              key={idx}
                              to={sub.to}
                              smooth={true}
                              offset={-100}
                              onClick={() => setOpenDropdown(null)}
                              className="group/link flex items-start gap-4 cursor-pointer"
                            >
                              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 group-hover/link:bg-brand-green group-hover/link:text-brand-yellow group-hover/link:border-brand-green transition-all duration-300 transform group-hover/link:-translate-y-1 shrink-0">
                                {sub.icon && React.createElement(sub.icon, { size: 20 })}
                              </div>
                              <div className="flex flex-col pt-1">
                                <span className="text-sm font-bold text-brand-dark group-hover/link:text-brand-green transition-colors leading-tight">
                                  {sub.name}
                                </span>
                                <span className="text-xs text-gray-400 mt-1 font-medium group-hover/link:text-brand-green/70 transition-colors">
                                  Explore {sub.name.split(' ')[0]}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="contact"
              smooth={true}
              className="bg-brand-yellow text-brand-dark px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all cursor-pointer shadow-lg hover:shadow-xl shrink-0 ml-2"
            >
              ENQUIRE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-brand-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl z-50 left-0">
            <div className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-50 last:border-0">
                  <div className="flex justify-between items-center px-4 py-3">
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                      className="text-base font-bold text-brand-dark uppercase tracking-wider block w-full"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="p-2 bg-gray-50 rounded-lg text-brand-green"
                      >
                        <ChevronDown size={20} className={`transition-transform ${openDropdown === item.name ? '-rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="bg-gray-50 rounded-xl mb-4 p-2">
                      {item.desc && <div className="p-3 text-xs font-bold text-brand-green uppercase">{item.desc}</div>}
                      {item.dropdown.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.to}
                          smooth={true}
                          offset={-80}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-6 py-3 text-sm font-semibold text-gray-600 hover:text-brand-green"
                        >
                          - {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
