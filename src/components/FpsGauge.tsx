'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FpsGaugeProps {
  fps: number;
  maxFps?: number;
  label?: string;
  isUnsupported?: boolean;
  isEmpty?: boolean;
}

export const FpsGauge: React.FC<FpsGaugeProps> = ({
  fps,
  maxFps = 120,
  label = 'FPS',
  isUnsupported = false,
  isEmpty = false
}) => {
  const initialFps = isEmpty || isUnsupported ? 0 : Math.min(fps, maxFps);
  const [currentFps, setCurrentFps] = useState(initialFps);
  const currentRef = useRef(initialFps);

  useEffect(() => {
    const target = isEmpty || isUnsupported ? 0 : Math.min(fps, maxFps);
    const startVal = currentRef.current;
    if (startVal === target) return;

    const duration = 260;
    const startTime = performance.now();
    let animationFrameId = 0;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const nextVal = Math.round(startVal + (target - startVal) * ease);

      if (nextVal !== currentRef.current) {
        currentRef.current = nextVal;
        setCurrentFps(nextVal);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [fps, maxFps, isUnsupported, isEmpty]);

  const clampedFps = isEmpty || isUnsupported ? 0 : Math.min(currentFps, maxFps);
  const ratio = clampedFps / maxFps;
  const needleAngle = -180 + ratio * 180;

  let fpsColor = '#166534';
  if (isEmpty) fpsColor = '#3d4350';
  else if (isUnsupported) fpsColor = '#b91c1c';
  else if (clampedFps >= 110) fpsColor = '#1f2de6';
  else if (clampedFps >= 85) fpsColor = '#166534';
  else if (clampedFps >= 55) fpsColor = '#b45309';
  else if (clampedFps >= 35) fpsColor = '#c2410c';
  else fpsColor = '#b91c1c';

  const arcLength = Math.PI * 80;
  const filledLength = arcLength * ratio;

  return (
    <div className="flex flex-col items-center justify-center relative select-none w-full max-w-[220px] mx-auto">
      <svg viewBox="0 0 200 124" className="w-full h-auto overflow-visible" aria-hidden="true">
        {/* Background track */}
        <path
          d="M 20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="#e2e5ea"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Active arc */}
        {!isEmpty && !isUnsupported && clampedFps > 0 && (
          <path
            d="M 20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke={fpsColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${filledLength} ${arcLength}`}
          />
        )}

        {/* Scale ticks */}
        {[0, 30, 60, 90, 120].map((tick) => {
          const tickRatio = tick / 120;
          const rad = Math.PI * (1 - tickRatio);
          const x1 = 100 - Math.cos(rad) * 63;
          const y1 = 110 - Math.sin(rad) * 63;
          const x2 = 100 - Math.cos(rad) * 70;
          const y2 = 110 - Math.sin(rad) * 70;
          return (
            <line
              key={tick}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#9ca3af"
              strokeWidth="1.75"
            />
          );
        })}

        {/* Indicator needle */}
        <g transform={`translate(100, 110) rotate(${needleAngle})`}>
          <line
            x1="0"
            y1="0"
            x2="66"
            y2="0"
            stroke="#0b0c0e"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="0" cy="0" r="6" fill="#ffffff" stroke="#0b0c0e" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="2.5" fill={fpsColor} />
        </g>
      </svg>

      {/* Numerical Readout */}
      <div className="text-center -mt-2">
        {isEmpty ? (
          <div className="flex flex-col items-center">
            <span className="text-[36px] font-semibold tracking-tight leading-none tabular-nums text-[#3d4350]">
              --
            </span>
            <span className="text-sm font-medium text-[#3d4350] mt-1">{label}</span>
          </div>
        ) : isUnsupported ? (
          <div className="text-[#b91c1c] font-semibold text-xl tracking-tight">Unsupported</div>
        ) : (
          <div className="flex flex-col items-center">
            <span
              className="text-[36px] font-semibold tracking-tight leading-none tabular-nums transition-colors duration-200"
              style={{ color: fpsColor }}
            >
              {currentFps}
            </span>
            <span className="text-sm font-medium text-[#3d4350] mt-1">{label}</span>
          </div>
        )}
      </div>
    </div>
  );
};
