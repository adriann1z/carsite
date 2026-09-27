import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { MansfieldLogo } from './MansfieldLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080c] text-slate-400 text-sm border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand info with logo */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#home"
              className="inline-block group"
              aria-label="Mansfield Auto Electrics Home"
            >
              <div className="w-56 sm:w-64 h-auto">
                <MansfieldLogo
                  variant="dark"
                  showSubtitle={true}
                  className="w-full h-auto drop-shadow-[0_2px_10px_rgba(0,102,255,0.3)]"
                />
              </div>
            </a>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Professional auto electrical diagnostics and repairs in Mansfield. Specialist fault-finding, oscilloscope circuit testing, and warning light diagnosis for all car and light commercial vehicle makes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Diagnostic Services
                </a>
              </li>
              <li>
                <a href="#warning-lights" className="hover:text-white transition-colors">
                  Warning Light Guide
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Workshop Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-white transition-colors font-medium text-slate-300"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.emailMailto}
                  className="hover:text-white transition-colors truncate"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Auto Electrical Specialist Mansfield</span>
            <span>·</span>
            <span>Nottinghamshire Diagnostics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
