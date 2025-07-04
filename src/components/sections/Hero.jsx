import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="relative px-6 pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-fuchsia-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter"
            >
              CyberShield,{' '}
              <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Darmajaya 
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              Solusi keamanan siber #kekinian pake AI. Lindungi data lo dari serangan cyber modern.
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0"
          >
            Dibuat oleh anak TI Darmajaya, buat lo yang ngga ngerti pentingnya keamanan data.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button 
              onClick={() => scrollToSection('cta')}
              size="lg" 
              className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-fuchsia-500/20 hover:scale-105 transition-transform btn-shine text-lg px-8 py-6"
            >
              Coba Gratis Sekarang
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl text-lg px-8 py-6"
            >
              Jadwal Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="relative z-10 glass-card p-4 rounded-3xl">
            <img  
              alt="Cybersecurity dashboard interface showing real-time threat monitoring"
              className="w-full h-auto rounded-2xl shadow-2xl"
             src="https://i.pinimg.com/originals/50/72/3e/50723e33864b1e61112f1774ec8118e6.gif" />
          </div>
          
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-fuchsia-600 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30 security-pulse"
          >
            <Shield className="w-14 h-14 text-white" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-600 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-pink-500/30"
          >
            <Lock className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;