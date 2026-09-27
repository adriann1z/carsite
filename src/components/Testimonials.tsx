import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/businessData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0d121b] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Local Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Drivers Across Mansfield
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Read what local car owners, van operators, and independent traders say about our diagnostic accuracy and customer service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#121924] rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-slate-400 ml-2">5.0 / 5.0</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>

                {/* Vehicle & issue info */}
                <div className="mt-4 pt-4 border-t border-slate-800/90 text-xs text-slate-400">
                  <div className="font-semibold text-sky-400">{t.vehicle}</div>
                  <div className="text-slate-400 mt-0.5">Issue: {t.issue}</div>
                </div>
              </div>

              {/* Author and location */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-white block">{t.author}</span>
                  <span className="text-slate-400">{t.location}</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google / Local reputation trust bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4 text-sky-400" />
            <span className="text-slate-300">5-Star Verified Local Reputation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Fully Insured Workshop &amp; Road Testing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Member of Auto Electrical Guild Standards</span>
          </div>
        </div>

      </div>
    </section>
  );
};
