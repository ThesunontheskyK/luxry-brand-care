import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white/80 pt-24 pb-12 px-6 border-t border-white/5 relative">
      <div className="absolute top-0 right-[20%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h4 className="text-xl font-serif tracking-[0.2em] uppercase text-white">Maison de L'Éclat</h4>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            สถาบันดูแลและฟื้นฟูเครื่องหนังและของแบรนด์เนมระดับพรีเมียม ด้วยความประณีตระดับงานฝีมือดั้งเดิม
          </p>
        </div>
        <div className="space-y-6">
          <h5 className="text-xs tracking-[0.2em] uppercase text-gold-400 font-semibold">เวลาทำการ</h5>
          <p className="text-sm text-white/50 font-light">เปิดบริการทุกวัน: 10:00 น. - 20:00 น.</p>
        </div>
        <div className="space-y-6">
          <h5 className="text-xs tracking-[0.2em] uppercase text-gold-400 font-semibold">การติดต่อ</h5>
          <p className="text-sm text-white/50 font-light leading-loose">
            โทร: 02-123-4567 <br />
            Email: contact@maisonleclat.com <br />
            Line: @maisonleclat
          </p>
        </div>
        <div className="space-y-6">
          <h5 className="text-xs tracking-[0.2em] uppercase text-gold-400 font-semibold">สถานที่ตั้ง</h5>
          <p className="text-sm text-white/50 font-light leading-loose">
            ชั้น G, อาคารลักชูรีพลาซ่า <br />
            ถ. สุขุมวิท กรุงเทพฯ 10110
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-[10px] tracking-[0.25em] uppercase text-white/30">
        &copy; {new Date().getFullYear()} Maison de L'Éclat. All Rights Reserved.
      </div>
    </footer>
  );
}