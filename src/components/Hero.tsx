import React from 'react';
import {
  Phone,
  ArrowRight,
  Cpu,
  Zap,
  ShieldCheck,
  BatteryCharging,
  AlertTriangle,
  CheckCircle2,
  Activity,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { MansfieldLogo } from './MansfieldLogo';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#070b10] via-[#0b0f15] to-[#0d121a]">
      
      {/* ========================================================= */}
      {/* SUBTLE BACKGROUND GRAPHICS: Circuit lines, waveforms, glow */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        
        {/* Ambient radial electric glow */}
        <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/3 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[90px]" />

        {/* Faint Circuit Linework & Diagnostic Waveform SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="circuitGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 0 60 H 120 M 60 0 V 120" stroke="#0099ff" strokeWidth="0.75" />
              <circle cx="60" cy="60" r="3" fill="#00d4ff" />
              <circle cx="0" cy="60" r="2" fill="#00d4ff" />
              <circle cx="120" cy="60" r="2" fill="#00d4ff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitGrid)" />

          {/* Large diagnostic sweep line across the background */}
          <path
            d="M -100 450 L 300 450 L 340 400 L 370 510 L 410 370 L 440 480 L 470 450 L 1600 450"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="2"
            opacity="0.25"
          />
        </svg>

        {/* Very faint background dashboard warning symbols in corners */}
        <div className="absolute top-20 right-12 text-amber-500/10 pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-48 h-48" fill="currentColor">
            <path d="M4 10h2V7h3v3h6V7h3v3h2v2h2v4h-2v2h-2v2H9v-2H7v-2H4v-4H2v-2h2v-2zm4 4h8v-2H8v2z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SPLIT LAYOUT: Left (Copy & CTAs) | Right (Prominent Logo) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Subtle local trust marker kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping inline-block" />
              <span>Mansfield &amp; Nottinghamshire Auto Electrical Workshop</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Auto Electrical Specialists in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300">Mansfield</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl text-balance leading-relaxed">
              Professional vehicle diagnostics, fault finding and auto electrical repairs for cars and light commercial vehicles.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 hover:from-blue-500 hover:to-sky-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all active:scale-98 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all shadow-md active:scale-98 whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* Small Trust Line Underneath */}
            <div className="mt-7 text-xs sm:text-sm text-slate-400 font-medium flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1">
              <span>Diagnostics</span>
              <span className="text-sky-500" aria-hidden="true">•</span>
              <span>Electrical Faults</span>
              <span className="text-sky-500" aria-hidden="true">•</span>
              <span>Warning Lights</span>
              <span className="text-sky-500" aria-hidden="true">•</span>
              <span>ABS</span>
              <span className="text-sky-500" aria-hidden="true">•</span>
              <span>Airbag</span>
              <span className="text-sky-500" aria-hidden="true">•</span>
              <span>Battery &amp; Charging</span>
            </div>

            {/* Proof Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>All Vehicle Makes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Oscilloscope Signal Testing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent Quotes</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Mansfield Auto Electrics Logo Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Ambient blue back-glow behind logo card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-amber-500/10 rounded-3xl blur-2xl pointer-events-none opacity-80" />

            {/* Glass-Panel Container for Logo (blends seamlessly without white box) */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#121924]/90 via-[#0d131c]/90 to-[#080d14]/95 p-6 sm:p-8 lg:p-10 border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:border-sky-500/40 group">
              
              {/* Subtle top glass reflection highlight */}
              <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl pointer-events-none" />

              {/* The Official Mansfield Auto Electrics Vector Logo */}
              <div className="relative py-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                <MansfieldLogo
                  className="w-full drop-shadow-[0_10px_25px_rgba(0,102,255,0.25)]"
                  variant="dark"
                  showSubtitle={true}
                />
              </div>

              {/* Bottom decorative telemetry bar inside card */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                  <span>CAN-BUS &amp; SENSOR TESTING</span>
                </div>
                <div className="text-sky-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>MANSFIELD, NOTTS</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* TRANSITION INTO REST OF PAGE: Short Trust / Status Strip  */}
      {/* ========================================================= */}
      <div className="mt-14 lg:mt-20 border-t border-b border-slate-800/90 bg-[#090d14]/80 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            
            <a
              href="#services"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight">
                Vehicle Diagnostics
              </span>
            </a>

            <a
              href="#services"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white group"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight">
                Electrical Fault Finding
              </span>
            </a>

            <a
              href="#services"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight">
                ABS &amp; Airbag
              </span>
            </a>

            <a
              href="#services"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white group"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <BatteryCharging className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight">
                Battery &amp; Charging
              </span>
            </a>

            <a
              href="#warning-lights"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white group col-span-2 sm:col-span-1"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight">
                Warning Light Diagnosis
              </span>
            </a>

          </div>
        </div>
      </div>

    </section>
  );
};
