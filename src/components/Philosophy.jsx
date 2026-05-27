import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-6 order-2 md:order-1 relative"
        >
          <div className="absolute -inset-4 bg-gold-500/10 blur-xl rounded-full" />
          <div className="aspect-[4/5] relative overflow-hidden rounded-sm border border-dark-900/10 z-10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1590548784585-643d2b9f2924?auto=format&fit=crop&w=1000&q=80" 
              alt="Artisan working on leather" 
              className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-6 order-1 md:order-2 space-y-8"
        >
          <div className="inline-block">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-600 block font-semibold mb-2">Craftsmanship</span>
            <div className="h-[1px] w-full bg-gold-gradient" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 leading-tight font-light">
            ความใส่ใจในทุกฝีเข็ม <br />และรายละเอียด
          </h2>
          
          <div className="space-y-6 text-dark-900/70 text-sm md:text-base leading-relaxed font-light">
            <p>
              เพราะสินค้าแบรนด์เนมแต่ละชิ้นมีกรรมวิธีการผลิตที่เป็นเอกลักษณ์ ช่างฝีมือของเราจึงต้องผ่านการฝึกฝนอย่างเข้มงวดและเข้าใจธรรมชาติของวัสดุอย่างถ่องแท้ ไม่ว่าจะเป็นหนัง Togo, Epsom, หรือ Canvas 
            </p>
            <p>
              เราเลือกใช้เฉพาะผลิตภัณฑ์ดูแลรักษาระดับออร์แกนิกและเคมีภัณฑ์เฉพาะทางที่ได้รับการยอมรับจากยุโรป เพื่อรับประกันว่าจะไม่มีการทำลายพื้นผิวที่ละเอียดอ่อนของกระเป๋าหรือเครื่องประดับชิ้นโปรดของคุณ
            </p>
          </div>
          
          <div className="pt-4">
            <div className="text-gold-gradient-dark font-serif italic text-2xl">
              "Mastery in every touch."
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}