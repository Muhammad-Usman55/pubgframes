'use client';

import React, { useEffect, useState } from 'react';

interface FpsGaugeProps {
  fps: number; // 0 to 120
  maxFps?: number;
  size?: number;
  label?: string;
  isUnsupported?: boolean;
}

export const FpsGauge: React.FC<FpsGaugeProps> = ({
  fps,
  maxFps = 120,
  size = 200,
  label = 'FPS',
  isUnsupported = false
}) => {
  const [currentFps, setCurrentFps] = useState(0);

  useEffect(() => {
    const target = isUnsupported ? 0 : Math.min(fps, maxFps);
    const duration = 800;
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCurrentFps(Math.round(target * ease));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [fps, maxFps, isUnsupported]);

  const clampedFps = isUnsupported ? 0 : Math.min(currentFps, maxFps);
  const ratio = clampedFps / maxFps;
  const needleAngle = -180 + ratio * 180; // from -180 (0 fps) to 0 (120 fps)

  // Color determination based on FPS tier
  let fpsColor = '#39F56A'; // vibrant green default
  if (isUnsupported) fpsColor = '#EF4444';
  else if (currentFps >= 110) fpsColor = '#28A9FF'; // 120 fps cyan
  else if (currentFps >= 85) fpsColor = '#39F56A'; // 90 fps neon green
  else if (currentFps >= 55) fpsColor = '#FFD400'; // 60 fps yellow
  else if (currentFps >= 35) fpsColor = '#FF9A24'; // 40 fps orange
  else fpsColor = '#EF4444'; // 30 or less red

  return (
    <div className="flex flex-col items-center justify-center relative select-none w-full max-w-[210px] mx-auto">
      <svg viewBox="0 0 200 130" className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="gauge_arc_gradient" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#28A9FF" />    {/* Cyan / Blue */}
            <stop offset="35%" stopColor="#39F56A" />   {/* Neon Green */}
            <stop offset="70%" stopColor="#FFD400" />   {/* Yellow */}
            <stop offset="100%" stopColor="#EF4444" />  {/* Red */}
          </linearGradient>

          <filter id="gauge_glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={fpsColor} floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Arc Track */}
        <path
          d="M 20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="#1F262B"
          strokeWidth="14"
          strokeLinecap="round"
        />

        {/* Gradient Active Arc */}
        <path
          d="M 20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="url(#gauge_arc_gradient)"
          strokeWidth="12"
          strokeLinecap="round"
          filter="url(#gauge_glow)"
          opacity="0.9"
        />

        {/* Tick marks */}
        {[0, 30, 60, 90, 120].map((tick) => {
          const tickRatio = tick / 120;
          const rad = (Math.PI * (1 - tickRatio));
          const x1 = 100 - Math.cos(rad) * 65;
          const y1 = 110 - Math.sin(rad) * 65;
          const x2 = 100 - Math.cos(rad) * 72;
          const y2 = 110 - Math.sin(rad) * 72;
          return (
            <line
              key={tick}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
            />
          );
        })}

        {/* Needle */}
        <g transform={`translate(100, 110) rotate(${needleAngle})`}>
          <line
            x1="0"
            y1="0"
            x2="68"
            y2="0"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="drop-shadow(0 0 4px rgba(255,255,255,0.8))"
          />
          <circle cx="0" cy="0" r="7" fill="#171D21" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="3" fill={fpsColor} />
        </g>
      </svg>

      {/* Numerical FPS Readout */}
      <div className="text-center -mt-3 sm:-mt-4">
        {isUnsupported ? (
          <div className="text-red-500 font-black text-lg sm:text-xl tracking-tight">UNSUPPORTED</div>
        ) : (
          <div className="flex flex-col items-center">
            <span
              className="text-4xl sm:text-5xl font-black tracking-tight leading-none transition-colors duration-300 font-mono"
              style={{ color: fpsColor, textShadow: `0 0 20px ${fpsColor}40` }}
            >
              {currentFps}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-extrabold text-gray-400 mt-1">{label}</span>
          </div>
        )}
      </div>
    </div>
  );
};
