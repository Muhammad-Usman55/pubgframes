import { Metadata } from 'next';
import Link from 'next/link';
import { DEVICES_DATA } from '@/data/devices';

export const metadata: Metadata = {
  title: 'About PUBGFrames — Smartphone Gaming Performance Reference',
  description:
    'Learn how PUBGFrames tests and documents PUBG Mobile FPS estimates, thermal throttling, and hardware benchmarks across 1,630+ smartphones.'
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <div className="space-y-3">
        <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          About PUBGFrames
        </h1>
        <p className="text-[17px] text-[#525866] leading-relaxed max-w-[54ch]">
          PUBGFrames is a straightforward smartphone benchmark reference built for PUBG Mobile players who want real answers before buying a device or tweaking match settings.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-2.5">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">Realistic FPS ratings</h2>
          <p className="text-[15px] text-[#525866] leading-relaxed">
            Every frame rate across our {DEVICES_DATA.length.toLocaleString()} devices reflects official in-game client caps, GPU compute capacity, and observed match stability instead of marketing hype.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-2.5">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">Sustained heat matters</h2>
          <p className="text-[15px] text-[#525866] leading-relaxed">
            Holding 90 FPS in the lobby is easy; holding it after 25 minutes in final circles is harder. We track vapor chamber capacity and thermal throttling trends so you know what to expect.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-4">
        <h2 className="text-xl font-semibold text-[#0b0c0e]">How devices are evaluated</h2>
        <ol className="space-y-3 text-[15px] text-[#525866] list-decimal list-inside">
          <li>
            <strong className="text-[#0b0c0e] font-medium">GPU & driver architecture:</strong> Adreno, Mali, Xclipse, and Apple GPU performance under 3D loads.
          </li>
          <li>
            <strong className="text-[#0b0c0e] font-medium">In-game whitelist limits:</strong> Verification of unlocked 60, 90, and 120 FPS modes on the native client.
          </li>
          <li>
            <strong className="text-[#0b0c0e] font-medium">Frame-time stability:</strong> Measuring 99th-percentile smoothness across combat-heavy situations.
          </li>
          <li>
            <strong className="text-[#0b0c0e] font-medium">Cooling & gyroscope response:</strong> Hardware MEMS sensor audit and vapor chamber thermal headroom.
          </li>
        </ol>
      </div>

      <div>
        <Link
          href="/fps-checker"
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#1f2de6] hover:bg-[#1723bf] text-white font-medium text-[15px]"
        >
          Test your phone now
        </Link>
      </div>
    </div>
  );
}
