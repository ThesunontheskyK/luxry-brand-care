import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: "10K+", label: "ชิ้นงานที่ดูแล", delay: 0.1 },
    { value: "99%", label: "ความพึงพอใจ", delay: 0.2 },
    { value: "15+", label: "ปีแห่งประสบการณ์", delay: 0.3 },
    { value: "50+", label: "แบรนด์ชั้นนำ", delay: 0.4 },
  ];

  return (
    <section className="py-20 bg-transparent border-y border-dark-900/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: stat.delay, ease: "easeOut" }}
            className="space-y-3"
          >
            <div className="text-4xl md:text-5xl font-serif text-gold-gradient-dark font-light">
              {stat.value}
            </div>
            <div className="text-xs tracking-[0.2em] uppercase text-dark-900/60">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
