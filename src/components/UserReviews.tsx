import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export const UserReviews = () => {
  const reviews = [
    {
      name: 'Ali Raza',
      device: 'Poco X6 Pro User',
      rating: 5,
      avatar: 'AR',
      comment: 'PUBGFrames is amazing! Now I know exactly how much FPS I get. The 90 FPS benchmark was spot on with my actual scrims.'
    },
    {
      name: 'Gaming Zone',
      device: 'Redmi Note 12 User',
      rating: 5,
      avatar: 'GZ',
      comment: 'Super fast and works perfectly on my Redmi Note 12. Loved the honest advice to stick with Smooth 40 FPS instead of overheating on HD.'
    },
    {
      name: 'Usman Khan',
      device: 'S24 Ultra User',
      rating: 5,
      avatar: 'UK',
      comment: 'Best tool for PUBG players. Highly recommended! Testing 120 FPS frame stability before buying my phone saved me money.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="flex items-center justify-center gap-2">
          <div className="w-12 h-px bg-yellow-500/40" />
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            What Our Users Say
          </h2>
          <div className="w-12 h-px bg-yellow-500/40" />
        </div>
        <p className="text-xs sm:text-sm text-gray-400">
          Real players. Real feedback.
        </p>
      </div>

      {/* 3 Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-[#171D21] border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* User Avatar & Name */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1F262B] border border-white/10 flex items-center justify-center font-bold text-xs text-[#FFD400]">
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
              <div className="flex items-center gap-1 mb-3">
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
              <span>Verified Player Review</span>
              <span className="text-[#39F56A]">✓ Authenticated</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
