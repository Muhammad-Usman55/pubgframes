import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Target, Award, Cpu, Flame, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About PUBGFrames — Premium Smartphone Gaming Performance Platform',
  description:
    'Learn about PUBGFrames mission to provide transparent, accurate, and verified PUBG Mobile FPS estimates and gaming benchmarks for smartphone players.'
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-bold">
          <Target className="w-3.5 h-3.5" />
          <span>About PUBGFrames</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Check Your PUBG FPS. <span className="text-[#FFD400]">Play Better.</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          PUBGFrames is a dedicated mobile gaming hardware benchmarking platform created for PUBG Mobile competitors, casual players, and tech enthusiasts.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#171D21] border border-white/5 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#39F56A]/10 text-[#39F56A] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Zero Fabricated Benchmarks</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Unlike generic phone spec sites that invent numbers, every PUBG Mobile frame rate on PUBGFrames is cross-referenced with real-world gameplay logs, hardware GPU compute capabilities, and community tournament telemetry.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#171D21] border border-white/5 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 text-[#FFD400] flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Thermal Throttling Awareness</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Hitting 90 FPS in the training lobby is easy. Sustaining 90 FPS in the 6th zone with 20 players alive is what matters. We measure sustained thermal endurance and notify players about throttling risks.
          </p>
        </div>
      </div>

      {/* Testing Methodology */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#101518] border border-white/5 space-y-4">
        <h2 className="text-xl font-black text-white">Our Testing Methodology</h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          Our performance ratings are calculated from five primary factors:
        </p>
        <ul className="space-y-2 text-xs text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#39F56A] font-bold">1.</span>
            <span><strong>GPU Architecture & API Drivers:</strong> Evaluation of Adreno, Mali, and Apple Metal shader cores and Vulkan driver stability.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#39F56A] font-bold">2.</span>
            <span><strong>Official In-Game Whitelist:</strong> Verification of whether PUBG Mobile client has enabled 90 FPS / 120 FPS for that specific model identifier.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#39F56A] font-bold">3.</span>
            <span><strong>Frame Time Consistency:</strong> 99th percentile frame-time latency measured over 30-minute classic match simulations.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#39F56A] font-bold">4.</span>
            <span><strong>Hardware Vapor Chamber Sizing:</strong> Effective thermal dissipation capacity under sustained 3D gaming load.</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          href="/fps-checker"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFD400] text-black font-extrabold text-sm hover:bg-yellow-400"
        >
          <span>Test Your Device Now Free</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
