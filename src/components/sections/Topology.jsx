import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Server, Wifi, AlertTriangle, FileText, Globe } from 'lucide-react';

const Node = ({ icon: Icon, label, detail, delay, nodeRef, style }) => (
  <motion.div
    ref={nodeRef}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring', stiffness: 120 }}
    className="absolute flex flex-col items-center text-center transform-none"
    style={{ ...style, transform: 'translate(-50%, -50%)' }}
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-fuchsia-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-1 sm:mb-2">
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    </div>
    <span className="font-semibold text-white text-sm sm:text-base">{label}</span>
    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-[100px] sm:max-w-[120px]">{detail}</p>
  </motion.div>
);

const AttackLine = ({ d, delay, duration }) => (
  <motion.path
    d={d}
    fill="none"
    stroke="url(#attack-gradient)"
    strokeWidth="2.5"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration, delay, ease: 'easeInOut' }}
  />
);

const Topology = () => {
  const attackerRef = useRef(null);
  const internetRef = useRef(null);
  const firewallRef = useRef(null);
  const webServerRef = useRef(null);
  const dataRef = useRef(null);
  const svgRef = useRef(null);
  const [paths, setPaths] = useState([]);

  const nodes = [
    {
      icon: User,
      label: 'Attacker',
      detail: 'Pelaku yang mencoba mengeksploitasi sistem.',
      delay: 0.2,
      ref: attackerRef,
      style: { top: '50%', left: '5%' },
    },
    {
      icon: Globe,
      label: 'Internet',
      detail: 'Media penghubung antara pengguna dan sistem.',
      delay: 0.4,
      ref: internetRef,
      style: { top: '10%', left: '20%' },
    },
    {
      icon: Wifi,
      label: 'Firewall',
      detail: 'Lapisan perlindungan untuk menyaring trafik berbahaya.',
      delay: 0.6,
      ref: firewallRef,
      style: { top: '50%', left: '50%' },
    },
    {
      icon: Server,
      label: 'Web Server',
      detail: 'Tempat aplikasi atau situs di-hosting.',
      delay: 0.8,
      ref: webServerRef,
      style: { top: '15%', left: '65%' },
    },
    {
      icon: FileText,
      label: 'Data Sensitif',
      detail: 'Informasi rahasia yang menjadi target utama serangan.',
      delay: 1.0,
      ref: dataRef,
      style: { top: '50%', left: '85%' },
    },
  ];

  useEffect(() => {
    const updatePaths = () => {
      const newPaths = [];
      const svgBox = svgRef.current?.getBoundingClientRect();
      if (!svgBox) return;

      for (let i = 0; i < nodes.length - 1; i++) {
        const fromEl = nodes[i].ref.current;
        const toEl = nodes[i + 1].ref.current;
        if (!fromEl || !toEl) continue;

        const fromBox = fromEl.getBoundingClientRect();
        const toBox = toEl.getBoundingClientRect();

        const x1 = fromBox.left + fromBox.width / 2 - svgBox.left;
        const y1 = fromBox.top + fromBox.height / 2 - svgBox.top;
        const x2 = toBox.left + toBox.width / 2 - svgBox.left;
        const y2 = toBox.top + toBox.height / 2 - svgBox.top;
        const cx = (x1 + x2) / 2;
        const cy = Math.min(y1, y2) - 100;

        const d = `M ${x1} ${y1} Q ${cx} ${cy}, ${x2} ${y2}`;
        newPaths.push(d);
      }

      setPaths(newPaths);
    };

    const timeout = setTimeout(updatePaths, 300);
    window.addEventListener('resize', updatePaths);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updatePaths);
    };
  }, []);

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Anatomi <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Serangan Siber</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Visualisasi sederhana bagaimana serangan siber dapat menembus pertahanan dan mencapai targetnya.
          </p>
        </motion.div>

        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] glass-card rounded-3xl p-4 sm:p-6 overflow-hidden">
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="attack-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f87171" />
              </linearGradient>
            </defs>
            {paths.map((d, idx) => (
              <AttackLine key={idx} d={d} delay={idx * 0.5 + 0.5} duration={1} />
            ))}
          </svg>

          {nodes.map(({ icon, label, detail, delay, ref, style }) => (
            <Node key={label} icon={icon} label={label} detail={detail} delay={delay} nodeRef={ref} style={style} />
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <AlertTriangle className="w-10 h-10 sm:w-14 sm:h-14 text-red-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Topology);
