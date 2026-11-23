import React from 'react';
import { Metadata } from 'next';
import { ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fair Use & Benchmark Disclaimer — PUBGFrames',
  description: 'Official legal disclaimer, trademark notices, and benchmark accuracy statements for PUBGFrames.'
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Legal Disclaimer</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Disclaimer & Fair Use Notice</h1>
        <p className="text-xs sm:text-sm text-gray-400">Last updated: February 2026</p>
      </div>

      <div className="p-6 rounded-2xl bg-[#101518] border border-white/5 space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Independent Platform Statement</h2>
          <p>
            PUBGFrames is an independent smartphone gaming performance information platform. PUBGFrames is <strong>NOT affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with PUBG Mobile, Krafton, Inc., Tencent Games, Proxima Beta Pte. Limited, Level Infinite, or any of their subsidiaries or affiliates.
          </p>
          <p>
            The official PUBG Mobile website can be found at <a href="https://www.pubgmobile.com" target="_blank" rel="noreferrer" className="text-[#FFD400] hover:underline">https://www.pubgmobile.com</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Trademarks & Copyrights</h2>
          <p>
            &ldquo;PUBG&rdquo;, &ldquo;PUBG Mobile&rdquo;, &ldquo;PLAYERUNKNOWN&apos;S BATTLEGROUNDS&rdquo;, and all associated logos, character designs, weapon models, map names, and in-game assets are trademarks or registered trademarks of Krafton, Inc. and/or Tencent Games. All other trademarks (including Apple, Samsung, Xiaomi, POCO, Qualcomm, MediaTek, OnePlus, Realme, Infinix, etc.) belong to their respective corporate owners.
          </p>
          <p>
            The use of these names and trademarks is for identification and informative comparison purposes only under Fair Use and does not imply endorsement or partnership.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Benchmark Estimation Accuracy</h2>
          <p>
            All frame rate (FPS) values, stability ratings, and thermal evaluations presented on PUBGFrames are estimates based on available hardware technical specifications and community benchmark logs.
          </p>
          <p>
            Actual real-world performance on your device may vary significantly depending on factors including, but not limited to: ambient room temperature, device casing, battery charge level, background app synchronization, display refresh rate settings, custom ROMs, and game patch updates released by the publisher.
          </p>
        </section>
      </div>
    </div>
  );
}
