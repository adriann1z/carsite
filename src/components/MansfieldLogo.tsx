import React from 'react';

interface MansfieldLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'navbar';
  showSubtitle?: boolean;
}

export const MansfieldLogo: React.FC<MansfieldLogoProps> = ({
  className = 'w-full max-w-lg',
  variant = 'dark',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';
  const autoColor = isLight ? '#0f172a' : '#f8fafc';
  const carLineColor = isLight ? '#0f172a' : '#ffffff';
  const carShadowColor = isLight ? '#cbd5e1' : '#1e293b';

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 1000 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Mansfield Auto Electrics Logo"
      >
        <defs>
          {/* Electric Blue Gradient */}
          <linearGradient id="electricBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066ff" />
            <stop offset="50%" stopColor="#0099ff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>

          {/* Electric Cyan Neon Pulse Gradient */}
          <linearGradient id="neonPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0080ff" />
            <stop offset="40%" stopColor="#00d4ff" />
            <stop offset="60%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0099ff" />
          </linearGradient>

          {/* Amber Warning Gradient */}
          <linearGradient id="amberGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Subtle Glow Filter for Waveform & Battery */}
          <filter id="blueGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Amber Warning Glow Filter */}
          <filter id="amberGlowFilter" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Headlight Cyan Flare */}
          <filter id="headlightGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* 1. CAR SILHOUETTE (Roofline, Windshield, Aerodynamics)    */}
        {/* ========================================================= */}
        <g id="car-silhouette">
          {/* Main sleek roofline curve */}
          <path
            d="M 50 170 C 130 110, 280 40, 470 30 C 650 20, 800 65, 940 185 C 930 178, 915 168, 895 150 C 850 110, 750 65, 600 50 C 470 38, 310 65, 170 120 C 110 145, 75 165, 50 170 Z"
            fill={carLineColor}
            opacity={isLight ? 0.95 : 0.9}
          />

          {/* Roof upper highlight sweep */}
          <path
            d="M 290 85 C 380 48, 480 38, 590 42 C 680 46, 750 72, 805 105 C 740 75, 660 55, 570 52 C 465 48, 370 60, 290 85 Z"
            fill="url(#electricBlueGrad)"
            opacity="0.8"
          />

          {/* Side window contour / A-pillar & C-pillar */}
          <path
            d="M 330 95 C 410 65, 490 55, 575 58 C 640 60, 700 80, 745 110 C 685 88, 620 75, 555 74 C 470 72, 400 82, 330 95 Z"
            fill={isLight ? '#f1f5f9' : '#0f172a'}
            stroke={carLineColor}
            strokeWidth="3"
            opacity="0.85"
          />

          {/* Front nose / hood line with aerodynamic winglet */}
          <path
            d="M 750 115 C 800 130, 860 160, 930 185 C 945 190, 930 196, 910 194 C 850 188, 790 175, 740 160 C 725 155, 735 145, 750 115 Z"
            fill={carLineColor}
          />

          {/* Rear aerodynamic tail spoiler flick */}
          <path
            d="M 50 170 C 80 165, 120 152, 160 138 C 120 148, 85 160, 50 170 Z"
            fill="url(#electricBlueGrad)"
          />

          {/* Front Headlight Projector Flare (Cyan/Electric Blue) */}
          <g filter="url(#headlightGlow)">
            <path
              d="M 810 140 C 840 145, 875 160, 895 170 C 870 165, 840 155, 810 140 Z"
              fill="#00d4ff"
              opacity="0.95"
            />
            <ellipse cx="850" cy="155" rx="28" ry="6" transform="rotate(18 850 155)" fill="#38bdf8" opacity="0.9" />
            <circle cx="855" cy="157" r="4" fill="#ffffff" />
          </g>

          {/* Lower chassis shadow sweep */}
          <path
            d="M 120 178 C 240 138, 380 120, 550 125 C 650 128, 720 145, 760 160"
            stroke="url(#electricBlueGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.75"
          />
        </g>

        {/* ========================================================= */}
        {/* 2. ELECTRICAL CIRCUIT, BATTERY & WAVEFORM GRAPHIC         */}
        {/* ========================================================= */}
        <g id="circuit-pulse" filter="url(#blueGlowFilter)">
          
          {/* 12V BATTERY ICON */}
          <g transform="translate(85, 120)">
            {/* Battery terminals (positive & negative posts) */}
            <rect x="18" y="0" width="16" height="8" rx="2" fill="#00d4ff" stroke="#0066ff" strokeWidth="2" />
            <rect x="66" y="0" width="16" height="8" rx="2" fill="#00d4ff" stroke="#0066ff" strokeWidth="2" />
            
            {/* Battery case */}
            <rect
              x="0"
              y="6"
              width="100"
              height="58"
              rx="10"
              fill={isLight ? '#0f172a' : '#080d14'}
              stroke="url(#neonPulseGrad)"
              strokeWidth="5"
            />

            {/* Inner blue bezel */}
            <rect
              x="5"
              y="11"
              width="90"
              height="48"
              rx="7"
              fill="none"
              stroke="#0080ff"
              strokeWidth="1.5"
              opacity="0.6"
            />

            {/* Plus sign (+) */}
            <path d="M 26 35 L 26 21 M 19 28 L 33 28" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            {/* Minus sign (-) */}
            <path d="M 67 28 L 81 28" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Circuit wire from Battery to First Node */}
          <line x1="187" y1="155" x2="310" y2="155" stroke="url(#neonPulseGrad)" strokeWidth="6" strokeLinecap="round" />

          {/* First Circuit Node Ring */}
          <circle cx="316" cy="155" r="9" fill={isLight ? '#ffffff' : '#0a0f16'} stroke="#00d4ff" strokeWidth="4.5" />
          <circle cx="316" cy="155" r="3.5" fill="#38bdf8" />

          {/* Wire connecting to waveform */}
          <line x1="325" y1="155" x2="385" y2="155" stroke="url(#neonPulseGrad)" strokeWidth="6" strokeLinecap="round" />

          {/* ECG / OSCILLOSCOPE DIAGNOSTIC PULSE WAVEFORM */}
          <path
            d="M 385 155 L 400 155 L 410 120 L 420 185 L 435 90 L 450 205 L 460 135 L 470 168 L 480 155 L 540 155"
            fill="none"
            stroke="url(#neonPulseGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Second Circuit Node Ring */}
          <circle cx="546" cy="155" r="9" fill={isLight ? '#ffffff' : '#0a0f16'} stroke="#00d4ff" strokeWidth="4.5" />
          <circle cx="546" cy="155" r="3.5" fill="#38bdf8" />
        </g>

        {/* ========================================================= */}
        {/* 3. AMBER DASHBOARD WARNING LIGHTS (Engine & ABS)          */}
        {/* ========================================================= */}
        <g id="warning-symbols" filter="url(#amberGlowFilter)">
          
          {/* Wire lead towards engine light */}
          <line x1="555" y1="155" x2="585" y2="155" stroke="#f59e0b" strokeWidth="4" opacity="0.4" strokeDasharray="3 3" />

          {/* CHECK ENGINE LIGHT (EML) */}
          <g transform="translate(590, 130)">
            <path
              d="M 8 18 H 15 V 10 H 22 V 18 H 40 V 10 H 47 V 18 H 54 V 24 H 60 V 36 H 54 V 42 H 46 V 46 H 24 V 42 H 14 V 36 H 8 V 24 H 14 V 18 Z"
              fill="none"
              stroke="url(#amberGlowGrad)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Center engine core block */}
            <rect x="22" y="24" width="24" height="14" rx="2" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
          </g>

          {/* Vertical Divider Line | */}
          <line x1="675" y1="134" x2="675" y2="178" stroke={isLight ? '#94a3b8' : '#ffffff'} strokeWidth="3" opacity="0.6" strokeLinecap="round" />

          {/* ABS WARNING LIGHT (ABS) */}
          <g transform="translate(695, 126)">
            {/* Dashed outer brake pad calipers */}
            <circle
              cx="30"
              cy="30"
              r="24"
              fill="none"
              stroke="url(#amberGlowGrad)"
              strokeWidth="3.5"
              strokeDasharray="6 4"
            />
            {/* Inner solid brake circle */}
            <circle
              cx="30"
              cy="30"
              r="17"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2"
              opacity="0.8"
            />
            {/* "ABS" text */}
            <text
              x="30"
              y="36"
              fill="#fbbf24"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="14"
              fontWeight="900"
              textAnchor="middle"
              letterSpacing="1"
            >
              ABS
            </text>
          </g>
        </g>

        {/* ========================================================= */}
        {/* 4. MAIN TYPOGRAPHY: AUTO ELECTRICAL                       */}
        {/* ========================================================= */}
        <g id="main-typography" transform="translate(0, 20)">
          {/* "AUTO" in crisp bold automotive font */}
          <text
            x="20"
            y="255"
            fill={autoColor}
            fontFamily="var(--font-heading), 'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontSize="102"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="2"
          >
            AUTO
          </text>

          {/* "ELECTRICAL" in electric blue gradient */}
          <text
            x="360"
            y="255"
            fill="url(#electricBlueGrad)"
            fontFamily="var(--font-heading), 'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontSize="102"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="2"
            filter="drop-shadow(0 2px 10px rgba(0, 102, 255, 0.3))"
          >
            ELECTRICAL
          </text>
        </g>

        {/* ========================================================= */}
        {/* 5. SUBTITLE: SPECIALISTS IN MANSFIELD                     */}
        {/* ========================================================= */}
        {showSubtitle && (
          <g id="subtitle-bar" transform="translate(0, 30)">
            {/* Left Accent Rule */}
            <line
              x1="30"
              y1="285"
              x2="110"
              y2="285"
              stroke="url(#electricBlueGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Subtitle Text */}
            <text
              x="500"
              y="294"
              fill={isLight ? '#1e293b' : '#ffffff'}
              fontFamily="var(--font-heading), 'Outfit', 'Plus Jakarta Sans', sans-serif"
              fontSize="34"
              fontWeight="800"
              letterSpacing="11"
              textAnchor="middle"
            >
              SPECIALISTS IN MANSFIELD
            </text>

            {/* Right Accent Rule */}
            <line
              x1="890"
              y1="285"
              x2="970"
              y2="285"
              stroke="url(#electricBlueGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
