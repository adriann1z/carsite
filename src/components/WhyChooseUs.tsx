import React from 'react';
import { Search, Cpu, CheckCircle2, MapPin, Car, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-blue-600" />;
      case 'Car':
        return <Car className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Independent Local Specialists
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Mansfield Auto Electrics?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Vehicle electrical systems are more sophisticated than ever. Here is why local drivers and trade clients trust us with their vehicles.
          </p>
        </div>

        {/* Top 5 Benefits Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className={`bg-slate-50 hover:bg-slate-100/90 rounded-2xl p-7 border border-slate-200/90 hover:border-blue-400/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium text-slate-700 leading-relaxed">
                  {item.desc}
                </p>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <span>Verified Diagnostic Standard</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Local Workshop Trust Snapshot */}
          <div className="bg-gradient-to-br from-slate-900 to-[#121b27] text-white rounded-2xl p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Mansfield Workshop Bay</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Book a Diagnostic Slot Today
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Whether you drive a daily commuter car, a high-spec SUV, or a commercial trade van, we have the tools and test procedures to get your vehicle back to safe operating condition.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Technician Showcase & Local Area Coverage Banner */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Technician Image Asset */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 bg-slate-200">
              <img
                src="/src/assets/images/diagnostic_technician_1790521832107.jpg"
                alt="Automotive electrical technician running diagnostics on vehicle systems in Mansfield"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                PicoScope Oscilloscope &amp; CAN-Bus Testing
              </div>
            </div>
          </div>

          {/* Text and Area List */}
          <div className="w-full lg:w-2/3">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              Local Mansfield &amp; Nottinghamshire Coverage
            </div>
            <h4 className="text-2xl font-bold text-slate-900">
              Serving Mansfield &amp; Surrounding Areas
            </h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We provide specialist auto electrical fault-finding for customers across Mansfield and surrounding towns who need deeper diagnosis than standard tyre, exhaust, and service fast-fits can provide.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md shadow-xs"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Quick Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Trade Discounts for Garages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Warranty on Parts &amp; Labour</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
