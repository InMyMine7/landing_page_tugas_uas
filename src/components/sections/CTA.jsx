import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = ({ scrollToSection }) => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-600 to-cyan-500 rounded-3xl blur-xl opacity-30"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative space-y-8 glass-card rounded-3xl p-10 lg:p-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Tunggu Apa Lagi?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Gabung sama ribuan orang lain yang udah bikin dunia digitalnya lebih aman bareng CyberGuard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-fuchsia-500/20 hover:scale-105 transition-transform btn-shine text-lg px-8 py-6"
            >
              Coba Gratis 30 Hari
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="text-slate-400 text-sm">
            * Gak perlu kartu kredit • 5 menit setup • Support 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(CTA);