import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export const UserReviews = () => {
  const reviews = [
    {
      name: 'Ali Raza',
      device: 'POCO X6 Pro Player',
      rating: 5,
      avatar: 'AR',
      comment: 'PUBGFrames is amazing! Now I know exactly how much FPS I get. The 90 FPS benchmark was spot on with my actual scrims.'
    },
    {
      name: 'Gaming Zone',
      device: 'Redmi Note 12 Player',
      rating: 5,
      avatar: 'GZ',
      comment: 'Super fast and works perfectly on my Redmi Note 12. Loved the honest advice to stick with Smooth 40 FPS instead of overheating on HD.'
    },
    {
      name: 'Usman Khan',
      device: 'Galaxy S24 Ultra Player',
      rating: 5,
      avatar: 'UK',
      comment: 'Best tool for PUBG players. Highly recommended! Testing 120 FPS frame stability before buying my phone saved me money.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 sm:w-14 h-px bg-yellow-500/40" />
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            What Our Users Say
          </h2>
          <div className="w-10 sm:w-14 h-px bg-yellow-500/40" />
        </div>
        <p className="text-xs sm:text-sm text-gray-400">
          Real players. Real feedback.
        </p>
      </div>

      {/* 3 Review Cards (Responsive Grid / Horizontal Scroll on mobile) */}
      <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="shrink-0 w-[280px] sm:w-auto snap-center p-5 rounded-2xl bg-[#13181D] border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* User Avatar & Name */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#1A2127] border border-white/10 flex items-center justify-center font-bold text-xs text-[#FFD400]">
                  {rev.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#39F56A]" />
                  </div>
                  <div className="text-[10px] text-gray-400">{rev.device}</div>
                </div>
              </div>

              {/* 5 Yellow Stars */}
              <div className="flex items-center gap-1 mb-2.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFD400] text-[#FFD400]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs text-gray-300 leading-relaxed italic">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-gray-400 flex items-center justify-between">
              <span>Verified Match Telemetry</span>
              <span className="text-[#39F56A] font-bold">✓ Authenticated</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
