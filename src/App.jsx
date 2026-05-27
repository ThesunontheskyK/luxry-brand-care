import React, { Suspense, lazy } from 'react';

import Hero from './components/Hero';
import Navbar from './components/Navbar';

const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));
const Philosophy = lazy(() => import('./components/Philosophy'));
const Gallery = lazy(() => import('./components/Gallery'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center bg-[#FAF9F6]"></div>}>
          <Stats />
          <Services />
          <Gallery />
          <Philosophy />
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[100px] bg-[#1a1a1a]"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;