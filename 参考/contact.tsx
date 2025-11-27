
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export const ContactFooter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={containerRef}
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between px-4 md:px-12 lg:px-16 pt-32 pb-12 z-20"
    >
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col justify-center mb-24">
        {/* Intro Label */}
        <motion.p 
          className="text-gray-400 text-xs md:text-sm tracking-widest uppercase mb-8 ml-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Feel free to reach out if you want to collaborate with us, or simply have a chat.
        </motion.p>

        {/* Big Headline - Staggered Reveal */}
        <div className="overflow-hidden">
          <motion.h2 
            className="text-[10vw] md:text-[7vw] font-semibold leading-[0.9] tracking-tight mb-8"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            WE WOULD LOVE
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2 
            className="text-[10vw] md:text-[7vw] font-semibold leading-[0.9] tracking-tight mb-16"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            TO HEAR FROM YOU.
          </motion.h2>
        </div>

        {/* Email Link with Arrow Interaction */}
        <motion.a 
          href="mailto:contact@servius.agency" 
          className="group inline-flex items-center text-2xl md:text-4xl lg:text-5xl hover:text-gray-300 transition-colors cursor-none w-fit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          contact@servius.agency
          <span className="ml-6 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center transform group-hover:bg-white group-hover:border-transparent group-hover:scale-110 transition-all duration-300">
            <span className="text-xl md:text-2xl group-hover:text-black group-hover:-rotate-45 transition-transform duration-300">→</span>
          </span>
        </motion.a>
      </div>

      {/* Footer Info Grid - Bottom Aligned */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 border-t border-white/20 pt-8">
        
        {/* Address */}
        <div className="col-span-12 md:col-span-3 text-[10px] md:text-xs tracking-widest uppercase leading-loose text-gray-400">
          <h3 className="text-white mb-4 font-bold">Our Address</h3>
          <p>Unit D104</p>
          <p>116 Commercial Street</p>
          <p>London, E1 6NF</p>
          <p>United Kingdom</p>
          <br />
          <p>VAT: 39555475</p>
          <p>Company no. 11843690</p>
          <p>Registered in England & Wales</p>
        </div>

        {/* Socials */}
        <div className="col-span-6 md:col-span-3 text-[10px] md:text-xs tracking-widest uppercase leading-loose text-gray-400">
          <h3 className="text-white mb-4 font-bold">Follow Us</h3>
          <ul className="flex flex-col gap-1">
            <li className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Fb</a>
              <a href="#" className="hover:text-white transition-colors">Tw</a>
              <a href="#" className="hover:text-white transition-colors">Ig</a>
              <a href="#" className="hover:text-white transition-colors">Li</a>
            </li>
            <li className="mt-4 hover:text-white transition-colors cursor-none"><a href="#">→ Servius Tokyo</a></li>
            <li className="hover:text-white transition-colors cursor-none"><a href="#">→ Servius NYC</a></li>
            <li className="hover:text-white transition-colors cursor-none"><a href="#">→ Powered by Servius</a></li>
          </ul>
        </div>

        {/* Menu Links */}
        <div className="col-span-6 md:col-span-3 text-[10px] md:text-xs tracking-widest uppercase leading-loose text-gray-400">
          <h3 className="text-white mb-4 font-bold">Menu</h3>
          <ul className="flex flex-col gap-1">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press & News</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* TOP Button & Copyright */}
        <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col justify-between items-end md:items-end h-full">
           <motion.button 
             onClick={scrollToTop}
             className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/30 flex flex-col items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-none group relative overflow-hidden"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <span className="relative z-10 text-[10px] font-bold tracking-widest group-hover:translate-y-[-2px] transition-transform">TOP</span>
             <span className="relative z-10 text-lg group-hover:translate-y-[-2px] transition-transform">↑</span>
           </motion.button>
           
           <p className="text-gray-600 text-[9px] mt-4 md:mt-0 uppercase">
             © SERVIUS LONDON LTD 2024
           </p>
        </div>

      </div>
    </footer>
  );
};
