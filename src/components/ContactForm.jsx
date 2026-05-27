import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function ContactForm() {
  const contacts = [
    {
      icon: <Phone size={28} />,
      title: "โทรศัพท์",
      detail: "02-123-4567",
      link: "tel:021234567",
      action: "โทรทันที"
    },
    {
      icon: <FacebookIcon size={28} />,
      title: "Facebook Page",
      detail: "Maison de L'Éclat",
      link: "https://facebook.com",
      action: "ส่งข้อความ"
    },
    {
      icon: <MessageCircle size={28} />,
      title: "LINE Official",
      detail: "@maisonleclat",
      link: "#",
      action: "เพิ่มเพื่อน"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-transparent relative">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-600 block font-semibold">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 font-light">ช่องทางการติดต่อ</h2>
          <div className="w-16 h-[1px] bg-gold-gradient mx-auto" />
          <p className="text-dark-900/60 text-sm tracking-wider">สอบถามรายละเอียด หรือส่งรูปภาพชิ้นงานเพื่อประเมินราคาเบื้องต้นได้ฟรี</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {contacts.map((contact, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a 
                href={contact.link}
                target={contact.link.startsWith('http') ? "_blank" : "_self"}
                rel="noreferrer"
                className="group glass-white p-10 hover:bg-white transition-all duration-500 flex flex-col items-center text-center rounded-sm relative overflow-hidden border-t-2 border-transparent hover:border-gold-500 block h-full shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500" />
                
                <div className="w-16 h-16 border border-gold-500/30 flex items-center justify-center text-gold-600 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 mb-6 relative z-10">
                  {contact.icon}
                </div>
                
                <h3 className="text-xl font-serif text-dark-900 mb-3 relative z-10">{contact.title}</h3>
                <p className="text-dark-900/80 font-light mb-8 relative z-10">{contact.detail}</p>
                
                <div className="mt-auto pt-6 w-full border-t border-dark-900/5 text-xs tracking-widest uppercase text-dark-900/50 group-hover:text-gold-600 transition-colors duration-300 relative z-10">
                  {contact.action}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
