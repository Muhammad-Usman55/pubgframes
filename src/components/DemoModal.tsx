'use client';

import React, { useState } from 'react';
import { X, Play, CheckCircle2, Zap, Smartphone, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'90fps' | '120fps' | '60fps'>('90fps');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#101518] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
        {/* Glow corner */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FFD400]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400]">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">PUBGFrames Live Engine Demo</h3>
              <p className="text-xs text-gray-400">See how real-time frame rate simulation and benchmark verification works</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#171D21] border border-white/10 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 my-4">
          <button
            onClick={() => setActiveTab('90fps')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === '90fps'
                ? 'bg-[#39F56A] text-black shadow-[0_0_15px_rgba(57,245,106,0.3)]'
                : 'bg-[#171D21] text-gray-300 hover:bg-white/5'
            }`}
          >
            POCO X6 Pro (90 FPS Demo)
          </button>
          <button
            onClick={() => setActiveTab('120fps')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === '120fps'
                ? 'bg-[#FFD400] text-black shadow-[0_0_15px_rgba(255,212,0,0.3)]'
                : 'bg-[#171D21] text-gray-300 hover:bg-white/5'
            }`}
          >
            S24 Ultra (120 FPS Demo)
          </button>
          <button
            onClick={() => setActiveTab('60fps')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === '60fps'
                ? 'bg-[#28A9FF] text-black shadow-[0_0_15px_rgba(40,169,255,0.3)]'
                : 'bg-[#171D21] text-gray-300 hover:bg-white/5'
            }`}
          >
            iPhone 13 (60 FPS Demo)
          </button>
        </div>

        {/* Simulated Gameplay Canvas */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
          <Image
            src={
              activeTab === '120fps'
                ? '/gameplay/ultrahd.svg'
                : activeTab === '90fps'
                ? '/gameplay/hd.svg'
                : '/gameplay/smooth.svg'
            }
            alt="PUBG Mobile Simulation"
            fill
            className="object-cover"
          />

          {/* Real-time Telemetry HUD */}
          <div className="absolute top-4 left-4 p-3 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 font-mono text-xs text-white space-y-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-400">FRAME RATE:</span>
              <span className="text-[#39F56A] font-bold text-sm">
                {activeTab === '120fps' ? '119.8 FPS' : activeTab === '90fps' ? '89.4 FPS' : '59.9 FPS'}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-400">FRAME TIME:</span>
              <span className="text-yellow-400">
                {activeTab === '120fps' ? '8.3 ms' : activeTab === '90fps' ? '11.1 ms' : '16.6 ms'}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-400">STABILITY:</span>
              <span className="text-cyan-400">97.8%</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-400">TEMP:</span>
              <span className="text-green-400">38.2°C</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 shadow-lg">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>REAL-TIME ENGINE ESTIMATE</span>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <span>Benchmarked with hardware frame capture over 4G/5G cellular play.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#FFD400] text-black font-bold hover:bg-yellow-400"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
};
