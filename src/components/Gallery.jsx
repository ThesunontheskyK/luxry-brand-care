import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1200&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // เปลี่ยนรูปทุก 4 วินาที
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-transparent relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16 space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-600 block font-semibold">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-900 font-light">ผลงานของเรา</h2>
            <div className="w-16 h-[1px] bg-gold-gradient mx-auto" />
            <p className="text-dark-900/60 text-sm tracking-wider">ส่วนหนึ่งของผลงานที่ผ่านมาของเรา</p>
          </div>

          {/* กรอบภาพ (Frame) */}
          <div className="relative p-3 md:p-4 border border-gold-500/30 rounded-sm bg-white/50 backdrop-blur-sm">
            <div className="relative w-full aspect-square md:aspect-[2/1] overflow-hidden rounded-sm shadow-xl group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`Gallery slide ${currentIndex + 1}`}
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-dark-900/10 z-10 pointer-events-none" />

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentIndex === idx 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
