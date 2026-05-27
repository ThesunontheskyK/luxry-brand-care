import React from 'react';
import { Sparkles, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const serviceList = [
    {
      icon: <Sparkles size={24} />,
      title: "Deep Cleaning & Spa",
      desc: "ทำความสะอาดล้ำลึก ขจัดคราบฝังแน่น และบำรุงเส้นใยหนังด้วยทรีตเมนต์สูตรพิเศษที่ปลอดภัยต่อผิวสัมผัสดั้งเดิมของแบรนด์เนม"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Leather Restoration",
      desc: "ซ่อมแซมรอยถลอก รอยขีดข่วน พร้อมบริการปรับแต่งและฟื้นฟูสีเดิมของหนังให้กลับมาสม่ำเสมอ เรียบเนียนดุจแรกซื้อ"
    },
    {
      icon: <Clock size={24} />,
      title: "Hardware Care",
      desc: "ขัดเงาโลหะ ชุบอะไหล่ทองหรือเงิน และซ่อมแซมซิปหรือหมุดต่างๆ ให้เงางาม ปราศจากความหมองคล้ำและคราบสนิมเขียว"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-32 px-6 bg-dark-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-6"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400 block font-semibold">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white font-light">บริการระดับพรีเมียมของเรา</h2>
          <div className="w-16 h-[1px] bg-gold-gradient mx-auto" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {serviceList.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group glass-light p-10 hover:bg-dark-800 transition-all duration-500 flex flex-col justify-between rounded-sm relative overflow-hidden border-t-2 border-transparent hover:border-gold-500"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500" />
              
              <div className="space-y-8 relative z-10">
                <div className="w-16 h-16 border border-gold-500/30 flex items-center justify-center text-gold-400 rounded-full group-hover:bg-gold-500 group-hover:text-dark-900 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{service.desc}</p>
              </div>
              <div className="pt-10 text-xs tracking-widest uppercase text-gold-400 group-hover:translate-x-2 transition-transform duration-300 flex items-center space-x-3 relative z-10">
                <span>รายละเอียดเพิ่มเติม</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}