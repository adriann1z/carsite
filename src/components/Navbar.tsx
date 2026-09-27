import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { MansfieldLogo } from './MansfieldLogo';

interface NavbarProps {
  onBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Warning Lights', href: '#warning-lights' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#05080c] border-b border-slate-800/70 text-xs py-1.5 px-4 text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Workshop Open: Mon–Fri 8am–5:30pm • Sat 8:30am–1pm
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">
              Serving Mansfield &amp; surrounding areas
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar: transparent over hero, slightly more solid with backdrop blur when scrolled */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0e14]/95 backdrop-blur-md border-b border-slate-800/90 shadow-xl shadow-black/50 py-2.5'
            : 'bg-[#070b10]/60 backdrop-blur-sm border-b border-slate-800/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Zone 1: Smaller version of the uploaded logo as the navbar brand */}
          <a
            href="#home"
            className="flex items-center group transition-transform hover:scale-102"
            aria-label="Mansfield Auto Electrics Home"
          >
            <div className="w-44 sm:w-52 h-auto">
              <MansfieldLogo
                variant="dark"
                showSubtitle={false}
                className="w-full h-auto drop-shadow-[0_2px_8px_rgba(0,102,255,0.35)]"
              />
            </div>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Prominent Call Now button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 hover:from-blue-500 hover:to-sky-500 rounded-lg shadow-md shadow-blue-600/30 transition-all hover:shadow-blue-500/40 active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="p-2 text-sky-400 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0c1117] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700"
              >
                <span>Book Diagnostic Online</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
