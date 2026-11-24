import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — PUBGFrames',
  description: 'PUBGFrames user privacy policy and data protection standards.'
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.025em] text-[#0b0c0e]">
        Privacy Policy
      </h1>
      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-5 text-[15px] text-[#272b33] leading-relaxed">
        <p>
          PUBGFrames does not require account registration or collect private user credentials to use our FPS lookup and device comparison tools.
        </p>
        <h2 className="text-lg font-semibold text-[#0b0c0e] pt-1">No in-game account access</h2>
        <p>
          PUBGFrames never requests your PUBG Mobile player ID, game password, or social login. Device checks run locally against published hardware benchmarks.
        </p>
        <h2 className="text-lg font-semibold text-[#0b0c0e] pt-1">Cookies and analytics</h2>
        <p>
          We use minimal performance telemetry to monitor uptime and page loading responsiveness without selling personal data.
        </p>
      </div>
    </div>
  );
}
