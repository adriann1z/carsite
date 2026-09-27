import React from 'react';
import { PhoneCall, SearchCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/businessData';

export const Process: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '1':
        return <PhoneCall className="w-6 h-6 text-sky-400" />;
      case '2':
        return <SearchCheck className="w-6 h-6 text-amber-400" />;
      case '3':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#0b0f15] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple, Straightforward Service
          </h2>
          <p className="mt-3 text-base text-slate-300">
            No jargon, no mysterious bills. Just clear diagnosis, honest advice, and proven automotive electrical fixes.
          </p>
        </div>

        {/* 3 Steps with Connected Line on Desktop */}
        <div className="mt-16 relative">
          
          {/* Subtle connected line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-8 bg-gradient-to-r from-sky-500/40 via-amber-500/40 to-emerald-500/40 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-[#121822] rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 shadow-xl transition-all flex flex-col items-center text-center relative group"
              >
                {/* Step number badge */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform">
                  {getStepIcon(item.step)}
                </div>

                <div className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-1">
                  Step 0{item.step}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-slate-300 mb-2">
                  {item.desc}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
