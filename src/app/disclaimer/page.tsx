import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fair Use & Benchmark Disclaimer — PUBGFrames',
  description: 'Official legal disclaimer, trademark notices, and benchmark accuracy statements for PUBGFrames.'
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.025em] text-[#0b0c0e]">
          Disclaimer & Fair Use Notice
        </h1>
        <p className="text-[14px] text-[#525866]">Updated November 2026</p>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-6 text-[15px] text-[#272b33] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">1. Independent platform statement</h2>
          <p>
            PUBGFrames is an independent smartphone gaming performance information platform. PUBGFrames is not affiliated, associated, authorized, endorsed by, or in any way officially connected with PUBG Mobile, Krafton, Inc., Tencent Games, Proxima Beta Pte. Limited, or Level Infinite.
          </p>
          <p>
            The official PUBG Mobile website can be found at{' '}
            <a href="https://www.pubgmobile.com" target="_blank" rel="noreferrer" className="text-[#1f2de6] hover:underline">
              https://www.pubgmobile.com
            </a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">2. Trademarks</h2>
          <p>
            PUBG, PUBG Mobile, and PLAYERUNKNOWN’S BATTLEGROUNDS are registered trademarks of Krafton, Inc. and/or Tencent Games. All smartphone and chipset trademarks belong to their respective owners and are used strictly for product identification and hardware comparison.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">3. Benchmark estimate accuracy</h2>
          <p>
            All FPS ranges, thermal evaluations, and battery draw estimates are based on verified technical hardware profiles and community logs. Real-world frame delivery depends on ambient room temperature, background processes, OS updates, and future game patches.
          </p>
        </section>
      </div>
    </div>
  );
}
