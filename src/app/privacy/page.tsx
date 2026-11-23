import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — PUBGFrames',
  description: 'PUBGFrames user privacy policy and data protection standards.'
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <h1 className="text-3xl font-black text-white">Privacy Policy</h1>
      <div className="p-6 rounded-2xl bg-[#101518] border border-white/5 space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <p>
          At PUBGFrames, privacy is a fundamental right. We do not require account registration or collect private user credentials to use our FPS estimation tools.
        </p>
        <h2 className="text-base font-bold text-white pt-2">No In-Game Account Access</h2>
        <p>
          PUBGFrames never requests your PUBG Mobile player ID, game password, social login, or any in-game credentials. All estimations are calculated based on device hardware profiles selected by the user.
        </p>
        <h2 className="text-base font-bold text-white pt-2">Cookies & Analytics</h2>
        <p>
          We use minimal, anonymized website telemetry to monitor platform uptime, server responsiveness, and Core Web Vitals to deliver the fastest mobile experience possible.
        </p>
      </div>
    </div>
  );
}
