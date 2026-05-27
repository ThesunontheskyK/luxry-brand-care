import React from 'react';

import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Philosophy />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;