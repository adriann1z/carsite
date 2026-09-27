import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#090d13]/95 backdrop-blur-md border-t border-slate-800 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-blue-600 active:bg-blue-700 text-white text-xs font-bold shadow-md"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call 01623 000000</span>
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-800 active:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
        >
          <Calendar className="w-3.5 h-3.5 text-sky-400" />
          <span>Book Diagnostic</span>
        </a>
      </div>
    </div>
  );
};
