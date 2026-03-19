import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import EPC from './components/EPC/EPC';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <EPC />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
