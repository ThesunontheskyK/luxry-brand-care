import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-900">
      {/* Background with slight glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
        <img 
          src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury background" 
          className="w-full h-full object-cover opacity-30"
          fetchPriority="high"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-7 space-y-8"
        >
          <div className="inline-block">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-400 block font-semibold mb-2">
              The Art of Preservation
            </span>
            <div className="h-[1px] w-full bg-gold-gradient" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] font-light text-white">
            คืนชีวิตชีวาแด่ <br />
            <span className="italic font-normal text-gold-gradient text-6xl md:text-8xl">ชิ้นงานล้ำค่า</span> <br />
            ของคุณ
          </h1>
          
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg font-light">
            เราตระหนักดีว่ากระเป๋าและเครื่องหนังแบรนด์เนมของคุณไม่ใช่แค่สิ่งของ แต่คือศิลปะและเรื่องราวที่คุ้มค่าแก่การดูแลรักษาด้วยความประณีตระดับสูงสุด
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gold-gradient text-dark-900 text-xs tracking-[0.2em] uppercase font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 text-center rounded-sm"
            >
              จองบริการสปา
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border border-white/20 text-xs tracking-[0.2em] uppercase text-white hover:border-gold-400 hover:text-gold-400 transition-colors duration-500 text-center flex items-center justify-center space-x-3 rounded-sm group"
            >
              <span>ชมบริการของเรา</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Accents */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="hidden md:block md:col-span-5 relative"
        >
           <div className="aspect-[3/4] glass-light rounded-sm p-4 transform rotate-3 hover:rotate-0 transition-transform duration-700">
             <div className="w-full h-full border border-gold-500/20 rounded-sm relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Handbag Details"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
                />
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}