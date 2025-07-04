import React from 'react';

const FooterColumn = ({ title, links, handleNavClick }) => (
  <div>
    <span className="font-bold text-white mb-4 block">{title}</span>
    <div className="space-y-3">
      {links.map((link) => (
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
          className="block text-slate-400 hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default FooterColumn;
