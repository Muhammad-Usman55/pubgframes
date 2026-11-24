import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — PUBGFrames',
  description: 'Terms of service and user agreements for PUBGFrames platform.'
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.025em] text-[#0b0c0e]">
        Terms of Service
      </h1>
      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-5 text-[15px] text-[#272b33] leading-relaxed">
        <p>
          By accessing PUBGFrames, you agree to use this reference platform in accordance with these terms.
        </p>
        <h2 className="text-lg font-semibold text-[#0b0c0e] pt-1">Informational use</h2>
        <p>
          All frame rates and hardware compatibility notes are provided for reference. Future game engine updates may alter device behavior.
        </p>
        <h2 className="text-lg font-semibold text-[#0b0c0e] pt-1">No GFX tools or APK modifications</h2>
        <p>
          PUBGFrames never distributes or endorses GFX tools, unauthorized config patches, or modified game clients that violate PUBG Mobile’s End User License Agreement.
        </p>
      </div>
    </div>
  );
}
