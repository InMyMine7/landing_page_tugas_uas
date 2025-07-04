import React from 'react';
import { Shield } from 'lucide-react';
import { footerLinks } from '@/constants/navigation';
import FooterColumn from './FooterColumn';

const Footer = ({ scrollToSection }) => {
  const handleNavClick = (section) => {
    if (section) { // Prevent scrolling if section is undefined
      scrollToSection(section);
    }
  };

  return (
    <footer className="bg-slate-900/50 px-6 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CyberShield</span>
            </div>
            <p className="text-slate-400">
              Melindungi dunia digital dengan teknologi keamanan siber terdepan dari Universitas Darmajaya.
            </p>
          </div>
          <FooterColumn title="Produk" links={footerLinks.produk} handleNavClick={handleNavClick} />
          <FooterColumn title="Support" links={footerLinks.support} handleNavClick={handleNavClick} />
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2025 CyberShield. Dibuat dengan ❤️ oleh Mahasiswa TI Darmajaya.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <a
                key={link.id || link.label} // Fallback to label if id is undefined
                href={link.href || `#${link.id}`}
                onClick={(e) => {
                  if (link.href?.startsWith('http')) return; // Allow external links to navigate
                  e.preventDefault(); // Prevent default for internal links
                  handleNavClick(link.id); // Scroll to section
                }}
                target={link.href?.startsWith('http') ? '_blank' : '_self'} // Open external links in new tab
                rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined} // Security for external links
                className="text-slate-500 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
