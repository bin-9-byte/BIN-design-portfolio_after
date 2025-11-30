import React from 'react';
import { Section } from './ui/Section';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FADE_IN_UP, FADE_IN, createTransition } from '../constants/animations';

// ============================================================================
// 表单输入字段样式常量
// ============================================================================
const FORM_LABEL_CLASS = "block text-xs uppercase tracking-widest text-stone-400 mb-2";
const FORM_INPUT_CLASS = "w-full bg-transparent border-b border-stone-300 py-2 text-stone-800 focus:outline-none transition-colors";

export const Contact: React.FC = () => {
   return (
      <Section id="contact" className="min-h-[70vh] flex flex-col justify-between">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
               <motion.h2
                  {...FADE_IN_UP}
                  className="font-serif text-5xl md:text-7xl text-stone-800 mb-8"
                  style={{ willChange: 'transform, opacity' }}
               >
                  Let's create <br />something <span className="text-wabi-clay italic">timeless</span>.
               </motion.h2>
               <p className="font-sans text-stone-600 max-w-sm leading-relaxed mb-12">
                  Currently available for freelance projects and collaborations. Drop me a line if you resonate with my philosophy.
               </p>

               <div className="space-y-6">
                  <a href="mailto:hello@komorebi.design" className="block font-serif text-2xl md:text-3xl text-stone-800 hover:text-wabi-clay transition-colors underline decoration-1 underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wabi-clay focus-visible:ring-offset-2 focus-visible:ring-offset-wabi-paper" aria-label="Send email to roclee24@163.com">
                     roclee24@163.com
                  </a>
                  
                  {/* 社交媒体链接 */}
                  <div className="pt-4">
                     <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">Connect</p>
                     <div className="flex gap-6">
                        <a href="#" className="text-sm text-stone-600 hover:text-wabi-clay transition-colors flex items-center gap-2 group">
                           <span>Twitter</span>
                           <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="#" className="text-sm text-stone-600 hover:text-wabi-clay transition-colors flex items-center gap-2 group">
                           <span>Instagram</span>
                           <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="#" className="text-sm text-stone-600 hover:text-wabi-clay transition-colors flex items-center gap-2 group">
                           <span>Facebook</span>
                           <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <motion.div
               {...FADE_IN}
               transition={createTransition(0.3)}
               className="flex flex-col justify-end"
               style={{ willChange: 'opacity' }}
            >
               <form className="space-y-6 w-full max-w-md" aria-label="Contact form">
                  <div>
                     <label className={FORM_LABEL_CLASS}>Name</label>
                     <input type="text" className={FORM_INPUT_CLASS} placeholder="John Doe" name="name" autoComplete="name" />
                  </div>
                  <div>
                     <label className={FORM_LABEL_CLASS}>Email</label>
                     <input type="email" className={FORM_INPUT_CLASS} placeholder="john@example.com" name="email" autoComplete="email" />
                  </div>
                  <div>
                     <label className={FORM_LABEL_CLASS}>Message</label>
                     <textarea rows={4} className={`${FORM_INPUT_CLASS} resize-none`} placeholder="Tell me about your project..." name="message"></textarea>
                  </div>
                  <button type="submit" className="font-sans text-sm uppercase tracking-widest bg-stone-800 text-stone-50 px-8 py-3 hover:bg-wabi-clay transition-colors duration-300 self-start mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wabi-clay focus-visible:ring-offset-2">
                     Send Message
                  </button>
               </form>
            </motion.div>
         </div>
      </Section>
   );
};

