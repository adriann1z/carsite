import React, { useState } from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, ArrowRight, ShieldAlert, Sparkles, Wrench } from 'lucide-react';
import { WARNING_LIGHTS, WarningLight } from '../data/businessData';

interface WarningLightsProps {
  selectedLightId?: string | null;
  onSelectWarningLight?: (lightId: string) => void;
  onBookDiagnosticForLight?: (lightName: string) => void;
}

export const WarningLights: React.FC<WarningLightsProps> = ({
  selectedLightId: externalSelectedId,
  onSelectWarningLight,
  onBookDiagnosticForLight,
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string>('check-engine');

  const currentId = externalSelectedId || internalSelectedId;
  const activeLight = WARNING_LIGHTS.find((l) => l.id === currentId) || WARNING_LIGHTS[0];

  const handleSelect = (light: WarningLight) => {
    setInternalSelectedId(light.id);
    if (onSelectWarningLight) {
      onSelectWarningLight(light.id);
    }
  };

  const handleBook = () => {
    if (onBookDiagnosticForLight) {
      onBookDiagnosticForLight(`Warning Light: ${activeLight.name}`);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLightColorClasses = (color: 'amber' | 'red' | 'yellow', isSelected: boolean) => {
    if (color === 'red') {
      return {
        text: isSelected ? 'text-red-500' : 'text-slate-400 group-hover:text-red-400',
        bg: isSelected ? 'bg-red-500/15 border-red-500/50' : 'bg-slate-900/80 border-slate-800',
        glow: isSelected ? 'shadow-[0_0_25px_rgba(239,68,68,0.35)]' : '',
        badge: 'text-red-400',
        accentHex: '#ef4444',
      };
    } else {
      // amber or yellow
      return {
        text: isSelected ? 'text-amber-400' : 'text-slate-400 group-hover:text-amber-400',
        bg: isSelected ? 'bg-amber-500/15 border-amber-500/50' : 'bg-slate-900/80 border-slate-800',
        glow: isSelected ? 'shadow-[0_0_25px_rgba(245,158,11,0.35)]' : '',
        badge: 'text-amber-400',
        accentHex: '#f59e0b',
      };
    }
  };

  // Helper for rendering realistic automotive vector symbols
  const renderDashboardIcon = (light: WarningLight, isSelected: boolean) => {
    const color = light.color === 'red' ? '#ef4444' : '#f59e0b';
    const activeColor = isSelected ? color : '#64748b';
    const filterStyle = isSelected
      ? { filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 12px ${color}88)` }
      : undefined;

    switch (light.id) {
      case 'check-engine':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 transition-all" style={filterStyle} fill={activeColor}>
            <path d="M4 10h2V7h3v3h6V7h3v3h2v2h2v4h-2v2h-2v2H9v-2H7v-2H4v-4H2v-2h2v-2zm4 4h8v-2H8v2z" />
          </svg>
        );
      case 'abs':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 transition-all" style={filterStyle} fill="none">
            <circle cx="12" cy="12" r="9" stroke={activeColor} strokeWidth="2" strokeDasharray="3 3" />
            <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="bold" fill={activeColor}>
              ABS
            </text>
          </svg>
        );
      case 'airbag':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 transition-all" style={filterStyle} fill={activeColor}>
            <circle cx="9" cy="8" r="3" />
            <path d="M3 18c0-3.3 2.7-6 6-6s6 2.7 6 6H3z" />
            <circle cx="17" cy="11" r="4" fill="none" stroke={activeColor} strokeWidth="2" />
          </svg>
        );
      case 'battery':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 transition-all" style={filterStyle} fill={activeColor}>
            <path d="M16 4h-2V2h-4v2H8v3H4v13h16V7h-4V4zM8 14H6v-2h2v2zm10 0h-4v-2h4v2z" />
          </svg>
        );
      case 'brake':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 transition-all" style={filterStyle} fill="none">
            <circle cx="12" cy="12" r="9" stroke={activeColor} strokeWidth="2" />
            <path d="M12 7v6m0 3v1" stroke={activeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M3 8a10 10 0 0 1 0 8M21 8a10 10 0 0 0 0 8" stroke={activeColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'traction':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 transition-all" style={filterStyle} fill={activeColor}>
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
          </svg>
        );
      case 'temperature':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 transition-all" style={filterStyle} fill={activeColor}>
            <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-2z" />
          </svg>
        );
      case 'tpms':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8 transition-all" style={filterStyle} fill={activeColor}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 11h2v-2h-2v2zm0-4h2V5h-2v4z" />
          </svg>
        );
      default:
        return <AlertTriangle className="w-8 h-8" />;
    }
  };

  return (
    <section id="warning-lights" className="py-24 bg-[#0a0d13] relative overflow-hidden border-t border-slate-800">
      {/* Background glow pools */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Diagnostic Knowledgebase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Got a Warning Light On?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Don't ignore a dashboard warning light. We can diagnose the fault and explain exactly what your vehicle is telling you.
          </p>
        </div>

        {/* 8 Warning Light Icons Grid */}
        <div className="mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {WARNING_LIGHTS.map((light) => {
              const isSelected = light.id === currentId;
              const styling = getLightColorClasses(light.color, isSelected);

              return (
                <button
                  key={light.id}
                  onClick={() => handleSelect(light)}
                  className={`group relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    styling.bg
                  } ${styling.glow} ${
                    isSelected ? 'ring-2 ring-sky-400/50 scale-105' : 'hover:border-slate-700 hover:bg-slate-850'
                  }`}
                  aria-pressed={isSelected}
                >
                  {/* Warning Symbol */}
                  <div className="mb-3 transition-transform duration-200 group-hover:scale-110">
                    {renderDashboardIcon(light, isSelected)}
                  </div>

                  {/* Label */}
                  <span
                    className={`text-xs font-bold text-center leading-tight transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {light.name}
                  </span>

                  {/* Severity indicator dot */}
                  <div className="mt-2 flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: styling.accentHex }}
                    />
                    <span className="text-[10px] text-slate-400 uppercase font-mono">
                      {light.color}
                    </span>
                  </div>

                  {/* Active triangle marker */}
                  {isSelected && (
                    <div
                      className="absolute -bottom-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                      style={{ borderTopColor: styling.accentHex }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE INSPECTOR CARD FOR THE SELECTED LIGHT */}
        {activeLight && (
          <div className="mt-10 bg-gradient-to-b from-[#131b26] to-[#0c121a] rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Big icon + Urgency */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-slate-900/80 rounded-xl border border-slate-800">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all"
                  style={{
                    backgroundColor: activeLight.color === 'red' ? '#ef44441a' : '#f59e0b1a',
                    border: `1px solid ${activeLight.color === 'red' ? '#ef444455' : '#f59e0b55'}`,
                  }}
                >
                  {renderDashboardIcon(activeLight, true)}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {activeLight.name}
                </h3>

                {/* Urgency Badge (unboxed text) */}
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold">
                  <span
                    className={
                      activeLight.severity === 'Immediate Stop'
                        ? 'text-red-400'
                        : 'text-amber-400'
                    }
                  >
                    Urgency: {activeLight.severity}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    Colour: {activeLight.color.toUpperCase()}
                  </span>
                </div>

                <p className="mt-4 text-xs text-slate-400 leading-relaxed text-balance">
                  {activeLight.shortDesc}
                </p>
              </div>

              {/* Middle & Right Column: Common causes & Safety verdict */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-1.5">
                    <Wrench className="w-4 h-4" />
                    <span>Common Root Causes for this Light</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeLight.commonCauses.map((cause, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                      >
                        <span className="text-sky-400 font-bold leading-none mt-0.5">•</span>
                        <span>{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-semibold text-slate-200 block mb-1">
                      Can I safely drive my vehicle?
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {activeLight.safeToDrive}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-semibold text-slate-200 block mb-1">
                      Recommended Workshop Action:
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {activeLight.recommendedAction}
                    </p>
                  </div>
                </div>

                {/* Direct Action for this light */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 text-center sm:text-left">
                    Have this warning symbol currently illuminated on your dashboard?
                  </div>
                  <button
                    onClick={handleBook}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer active:scale-95"
                  >
                    <span>Book Diagnostic Check for {activeLight.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Global CTA Underneath */}
        <div className="mt-14 text-center">
          <button
            onClick={handleBook}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer active:scale-95"
          >
            <AlertCircle className="w-5 h-5 text-sky-200" />
            <span>Book a Diagnostic Check</span>
          </button>
          <p className="mt-3 text-xs text-slate-400">
            Same-day or next-day slots available in Mansfield • Transparent quotation before any repair work starts
          </p>
        </div>

      </div>
    </section>
  );
};
