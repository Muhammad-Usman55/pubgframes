'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    deviceModel: '',
    topic: 'Benchmark Submission',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playSuccess();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20 text-[#FFD400] text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Contact PUBGFrames <span className="text-[#39F56A]">Telemetry Lab</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
          Have a smartphone benchmark report, correction, or hardware query? Our performance testing team reviews community logs regularly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="md:col-span-7 p-6 rounded-2xl bg-[#171D21] border border-white/10 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#39F56A]/20 text-[#39F56A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Received!</h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
                Thank you for contributing to PUBGFrames. Our hardware benchmarking team will verify your report within 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-5 py-2 rounded-xl bg-[#FFD400] text-black text-xs font-bold hover:bg-yellow-400"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Usman Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39F56A]"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39F56A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                    Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white font-medium focus:outline-none focus:border-[#39F56A]"
                  >
                    <option value="Benchmark Submission">Benchmark Submission</option>
                    <option value="FPS Data Correction">FPS Data Correction</option>
                    <option value="Device Request">Add Unlisted Device</option>
                    <option value="Partnership">Hardware Review / Lab</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                    Phone Model (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. POCO X6 Pro"
                    value={formData.deviceModel}
                    onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39F56A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your device test findings, in-game graphics settings used, and observed frame stability..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39F56A] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#39F56A] hover:bg-[#34e060] text-black font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Submit Telemetry Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Info & Lab Guidelines */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-[#171D21] border border-white/10 space-y-3 text-xs">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#39F56A]" />
              <span>Telemetry Submission Rules</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To keep our database 100% verified and free of fabricated benchmarks, all submitted FPS figures must be accompanied by:
            </p>
            <ul className="space-y-1.5 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#39F56A] font-bold">1.</span>
                <span>Exact MIUI/HyperOS, One UI, or iOS build number.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#39F56A] font-bold">2.</span>
                <span>In-game graphics preset (e.g. Smooth + 90 FPS).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#39F56A] font-bold">3.</span>
                <span>Match duration and ambient room temperature.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#101518] border border-white/5 space-y-2 text-xs">
            <h4 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#FFD400]" />
              <span>Direct Lab Inquiries</span>
            </h4>
            <p className="text-gray-400">
              Direct inquiries can also be submitted to:
            </p>
            <div className="font-mono text-gray-300 font-bold text-xs pt-1">
              lab@pubgframes.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
