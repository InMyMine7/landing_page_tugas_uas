
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Target } from 'lucide-react';

const About = () => {
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
            Tentang <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">CyberShield </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Proyek kolaborasi mahasiswa Teknik Informatika Darmajaya untuk menciptakan solusi keamanan siber yang inovatif dan mudah diakses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="glass-card p-4 rounded-3xl">
                <img 
                  alt="Tim mahasiswa TI Darmajaya sedang berkolaborasi di depan laptop"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                 src="https://www.darmajaya.ac.id/wp-content/uploads/DSC03493-1024x575.jpg" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-fuchsia-600 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30 float">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Misi Kami</h3>
                <p className="text-slate-400">
                  Mengaplikasikan ilmu yang didapat di bangku kuliah untuk membangun solusi nyata yang bermanfaat bagi keamanan digital masyarakat Indonesia.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Tujuan Proyek</h3>
                <p className="text-slate-400">
                  Menjadi platform edukasi dan proteksi, meningkatkan kesadaran akan pentingnya keamanan siber, sekaligus menyediakan alat yang powerful untuk melawannya.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
