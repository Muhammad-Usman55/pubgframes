'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          Contact & Benchmark Submissions
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[#525866] max-w-[54ch]">
          Notice an outdated FPS cap or want us to add a newly launched phone model? Send your device findings below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea]">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#15803d] mx-auto" />
              <h2 className="text-xl font-semibold text-[#0b0c0e]">Message received</h2>
              <p className="text-[15px] text-[#525866] max-w-sm mx-auto">
                Thank you for helping keep PUBGFrames accurate. Our team reviews hardware logs within 48 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-md bg-[#1f2de6] text-white text-[14px] font-medium cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-[15px]">
              <div>
                <label className="block text-[#0b0c0e] font-medium mb-1.5 text-[14px]">Your name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Usman Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-md bg-[#f6f7f9] border border-[#d6dbe3] text-[#0b0c0e] placeholder-[#6b7280] focus:outline-none focus:border-[#1f2de6]"
                />
              </div>

              <div>
                <label className="block text-[#0b0c0e] font-medium mb-1.5 text-[14px]">Email address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-md bg-[#f6f7f9] border border-[#d6dbe3] text-[#0b0c0e] placeholder-[#6b7280] focus:outline-none focus:border-[#1f2de6]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0b0c0e] font-medium mb-1.5 text-[14px]">Topic</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full p-3 rounded-md bg-[#f6f7f9] border border-[#d6dbe3] text-[#0b0c0e] font-medium focus:outline-none focus:border-[#1f2de6]"
                  >
                    <option value="Benchmark Submission">Benchmark Submission</option>
                    <option value="FPS Data Correction">FPS Data Correction</option>
                    <option value="Device Request">Add Unlisted Device</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#0b0c0e] font-medium mb-1.5 text-[14px]">Phone model (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Redmi Note 12 Pro"
                    value={formData.deviceModel}
                    onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                    className="w-full p-3 rounded-md bg-[#f6f7f9] border border-[#d6dbe3] text-[#0b0c0e] placeholder-[#6b7280] focus:outline-none focus:border-[#1f2de6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#0b0c0e] font-medium mb-1.5 text-[14px]">Details</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share observed FPS mode, software version, and match behavior..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-md bg-[#f6f7f9] border border-[#d6dbe3] text-[#0b0c0e] placeholder-[#6b7280] focus:outline-none focus:border-[#1f2de6] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#1f2de6] hover:bg-[#1723bf] text-white font-medium text-[15px] transition-colors duration-150 cursor-pointer"
              >
                Send message
              </button>
            </form>
          )}
        </div>

        <div className="md:col-span-5 space-y-5">
          <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-3 text-[15px]">
            <h2 className="text-base font-semibold text-[#0b0c0e]">What helps us verify fastest</h2>
            <ul className="space-y-2 text-[#525866] list-disc list-inside">
              <li>Exact phone variant (4G vs 5G, Global vs India/China)</li>
              <li>Unlocked PUBG preset (e.g. Smooth + Extreme+)</li>
              <li>Observed heat or frame drops after 20–30 minutes</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-[#e2e5ea] space-y-1.5 text-[15px]">
            <h3 className="font-semibold text-[#0b0c0e]">Direct email</h3>
            <p className="text-[#525866]">For lab corrections and press inquiries:</p>
            <p className="font-medium text-[#0b0c0e]">lab@pubgframes.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
