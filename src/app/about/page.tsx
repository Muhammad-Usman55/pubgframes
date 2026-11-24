import { Metadata } from 'next';
import Link from 'next/link';
import { DEVICES_DATA } from '@/data/devices';

export const metadata: Metadata = {
  title: 'About PUBGFrames — Smartphone Gaming Performance Reference',
  description:
    'Learn how PUBGFrames tests and documents PUBG Mobile FPS estimates, thermal throttling, editorial standards, and hardware benchmarks across 1,630+ smartphones.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <div className="space-y-3">
        <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          About PUBGFrames
        </h1>
        <p className="text-[17px] text-[#3d4350] leading-relaxed max-w-[58ch]">
          PUBGFrames is an independent mobile gaming performance publication built by mobile hardware analysts and competitive PUBG Mobile players. Our goal is simple: give players honest frame-rate limits, thermal throttling expectations, and hardware comparisons before buying a phone or queuing into ranked matches.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-2.5">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">Realistic FPS ratings</h2>
          <p className="text-[15px] text-[#3d4350] leading-relaxed">
            Every frame rate across our {DEVICES_DATA.length.toLocaleString()} indexed phones reflects verified client preset caps, GPU architecture limits, and real combat frame stability instead of synthetic peak claims.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-2.5">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">Sustained heat matters</h2>
          <p className="text-[15px] text-[#3d4350] leading-relaxed">
            Holding 90 FPS on the spawn island is easy; holding it after 25 minutes in final circles is harder. We track vapor chamber cooling, battery draw, and thermal throttling curves across long sessions.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-4">
        <h2 className="text-xl font-semibold text-[#0b0c0e]">Editorial &amp; benchmarking methodology</h2>
        <ol className="space-y-3 text-[15px] text-[#3d4350] list-decimal list-inside leading-relaxed">
          <li>
            <strong className="text-[#0b0c0e] font-medium">GPU &amp; SoC architecture audit:</strong> Adreno, Mali/Immortalis, Xclipse, and Apple Silicon sustained 3D compute profiles under mobile thermal envelopes.
          </li>
          <li>
            <strong className="text-[#0b0c0e] font-medium">Official whitelist verification:</strong> Confirming native unlocked 60 FPS (Ultra), 90 FPS (Extreme), and 120 FPS (Extreme+) presets across Smooth, Balanced, HD, HDR, and Ultra HD tiers.
          </li>
          <li>
            <strong className="text-[#0b0c0e] font-medium">Combat frame-time consistency:</strong> Documenting minimum-to-maximum FPS ranges during hot drops, smoke deployments, and multi-squad pushes.
          </li>
          <li>
            <strong className="text-[#0b0c0e] font-medium">Gyroscope &amp; cooling hardware:</strong> Classifying physical MEMS gyroscopes versus software gyro sensors and recording thermal throttling onset over 10–45 minute matches.
          </li>
        </ol>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-3">
        <h2 className="text-xl font-semibold text-[#0b0c0e]">Editorial transparency &amp; corrections</h2>
        <p className="text-[15px] text-[#3d4350] leading-relaxed">
          PUBGFrames does not accept payment from smartphone brands to inflate FPS ratings, and we never distribute APK patches or GFX tools. Game updates (such as PUBG Mobile 3.x patches) periodically whitelist newer chipsets for 90 or 120 FPS; if you observe a newly unlocked frame rate option on official firmware, submit your findings via our{' '}
          <Link href="/contact" className="text-[#1f2de6] hover:underline font-medium">
            Contact &amp; Benchmark Submissions
          </Link>{' '}
          page.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/fps-checker"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#1f2de6] hover:bg-[#1723bf] text-white font-medium text-[15px]"
        >
          Check your phone&apos;s FPS
        </Link>
        <Link
          href="/guides"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#ffffff] border border-[#d6dbe3] hover:border-[#0b0c0e] text-[#0b0c0e] font-medium text-[15px]"
        >
          Read performance guides
        </Link>
      </div>
    </div>
  );
}
