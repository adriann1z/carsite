import React, { useState } from 'react';
import {
  Cpu,
  Zap,
  AlertTriangle,
  BatteryCharging,
  ShieldCheck,
  Gauge,
  Sliders,
  Activity,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/businessData';

interface ServicesProps {
  onSelectServiceForBooking?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-amber-400" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-sky-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-sky-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-sky-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-sky-400" />;
      default:
        return <Cpu className="w-6 h-6 text-sky-400" />;
    }
  };

  const handleBookService = (service: ServiceItem) => {
    setActiveModalService(null);
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(service.title);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0d121a] relative border-t border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Auto Electrical &amp; Diagnostic Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            From warning lights to difficult electrical faults, we can help diagnose and repair problems with your vehicle.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#121924] hover:bg-[#162130] rounded-2xl p-6 border border-slate-800 hover:border-sky-500/40 shadow-lg shadow-black/30 hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with icon and index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:border-sky-500/50 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key symptom snippets */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Common Symptoms:
                  </span>
                  <ul className="space-y-1.5">
                    {service.commonSymptoms.slice(0, 2).map((symptom, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-sky-400 font-bold leading-none mt-0.5">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action affordance */}
              <div className="mt-6 pt-3 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleBookService(service)}
                  className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-sky-600 rounded-md transition-colors cursor-pointer"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Bottom Trust Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-950/40 via-slate-900 to-blue-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Unsure which auto electrical service you need?
            </h4>
            <p className="mt-1 text-sm text-slate-300">
              Call our Mansfield workshop directly. Describe what happens when starting, driving, or turning on lights, and our technician will advise the best next step.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:01623000000"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-md transition-colors"
            >
              Call 01623 000000
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              Request Free Callback
            </a>
          </div>
        </div>

      </div>

      {/* SERVICE DETAIL MODAL */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-xl bg-[#101722] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                {getServiceIcon(activeModalService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  Service Inspection
                </span>
                <h3 className="text-xl font-bold text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mt-3">
              {activeModalService.fullDesc}
            </p>

            <div className="mt-5 space-y-4">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Recognisable Symptoms &amp; Fault Triggers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.commonSymptoms.map((symptom, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1">
                  Our Diagnostic Approach:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {activeModalService.diagnosticMethod}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Back to Overview
              </button>
              <button
                onClick={() => handleBookService(activeModalService)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
              >
                Book Inspection for {activeModalService.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
