
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { attackData } from '@/constants/navigation';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 rounded-xl">
        <p className="label text-white font-bold">{`${label}`}</p>
        <p className="intro text-cyan-400">{`Jumlah Serangan : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Stats = () => {
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
            Lanskap Ancaman Siber <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Indonesia</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Data visual mengenai jenis serangan siber yang paling sering terjadi di Indonesia (data ilustratif).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full h-96 glass-card rounded-3xl p-6"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attackData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#cbd5e1' }} />
              <YAxis stroke="#94a3b8" tick={{ fill: '#cbd5e1' }} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(100, 116, 139, 0.3)' }} />
              <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                {attackData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Stats);
