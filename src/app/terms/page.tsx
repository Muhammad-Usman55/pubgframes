import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — PUBGFrames',
  description: 'Terms of service and user agreements for PUBGFrames platform.'
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <h1 className="text-3xl font-black text-white">Terms of Service</h1>
      <div className="p-6 rounded-2xl bg-[#101518] border border-white/5 space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <p>
          By accessing and using PUBGFrames, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please do not use the service.
        </p>
        <h2 className="text-base font-bold text-white pt-2">Informational Use Only</h2>
        <p>
          The content on PUBGFrames is provided for general reference and educational purposes. While we strive to maintain accurate benchmark telemetry, PUBGFrames cannot guarantee that future game engine updates will not alter device compatibility.
        </p>
        <h2 className="text-base font-bold text-white pt-2">No GFX Tool or APK Modification</h2>
        <p>
          PUBGFrames does not distribute, promote, or host third-party GFX tools, unauthorized configuration files, or game client modifications that violate the PUBG Mobile End User License Agreement (EULA).
        </p>
      </div>
    </div>
  );
}
