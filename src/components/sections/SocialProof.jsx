import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { stats, testimonials } from '@/constants/navigation';

const SocialProof = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Kata Mereka yang Udah <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Pake</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Jangan cuma percaya kata kami, lihat apa kata para profesional industri.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <div className="text-5xl font-black bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-3xl p-8 h-full flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(SocialProof);