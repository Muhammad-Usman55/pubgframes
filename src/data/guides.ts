export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  readTime: string;
  category: 'Optimization' | 'Hardware' | 'Settings' | 'Competitive';
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  featured: boolean;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    bulletPoints?: string[];
    proTip?: string;
  }[];
}

export const GUIDES_DATA: GuideArticle[] = [
  {
    id: 'guide-best-smartphones-pubg',
    slug: 'best-smartphones-for-pubg-mobile',
    title: 'Best Smartphones for PUBG Mobile in 2026: 60, 90 & 120 FPS Ranked',
    subtitle: 'From budget picks under $250 to tournament-grade flagships, here are the real-world top choices tested for thermal stability.',
    excerpt: 'Comprehensive analysis of the best smartphones for PUBG Mobile across budget, mid-range, and flagship price segments tested for thermal throttling and frame stability.',
    readTime: '6 min read',
    category: 'Hardware',
    publishedDate: '2026-02-15',
    author: {
      name: 'Usman Khan',
      role: 'Hardware Benchmarking Lead'
    },
    featured: true,
    content: [
      {
        sectionTitle: 'The 120 FPS Shift in Competitive PUBG Mobile',
        paragraphs: [
          'With PUBG Mobile supporting native 120 FPS (Extreme+) across modern flagships powered by Snapdragon 8 Gen 2, 8 Gen 3, 8 Elite, and Apple A17/A18 Pro chips, competitive play has moved to lower frame-time latency.',
          '120 FPS halves frame delivery time compared to 60 FPS — dropping from 16.6ms down to 8.3ms. In practical gunfights, this gives tighter crosshair tracking on strafing targets, cleaner spray transfers, and noticeably faster close-quarters response.'
        ],
        bulletPoints: [
          'Best Overall Flagships: Samsung Galaxy S24 Ultra, Galaxy S25 Ultra, iPhone 16 Pro Max',
          'Best Value 120 FPS Performers: POCO F6 Pro, iQOO Neo 9 Pro, OnePlus 12R',
          'Best Dedicated Gaming Phones: ASUS ROG Phone 9 Pro & REDMAGIC 10 Pro',
          'Best Budget 90 FPS Picks: POCO X6 Pro 5G & Infinix GT 20 Pro'
        ],
        proTip: 'Confirm your phone display refresh rate is locked to 120Hz or higher inside Android Display Settings before opening PUBG Mobile; adaptive refresh savers sometimes cap matches at 60Hz.'
      },
      {
        sectionTitle: 'Sustained Thermals Beat Short Peak Benchmarks',
        paragraphs: [
          'Many phones hit 90 or 120 FPS for the first 5 minutes in Erangel. Once battery and SoC skin temperatures climb past 43°C, dynamic voltage throttling drops frame delivery to 45–55 FPS right during final-zone fights.',
          'Vapor chamber surface area, graphite heat spreading, and efficiency under 3D Vulkan loads matter far more in 30-minute classic matches than short synthetic AnTuTu bursts.'
        ],
        bulletPoints: [
          'Target phones with vapor chambers above 4,000 mm² for long ranked sessions',
          'In warm ambient rooms (30°C+), remove thick silicone cases while grinding rank',
          'Magnetic Peltier coolers prevent thermal throttling almost entirely on Snapdragon 8-series chips'
        ]
      }
    ]
  },
  {
    id: 'guide-improve-pubg-fps',
    slug: 'how-to-improve-pubg-fps-and-reduce-lag',
    title: 'How to Improve PUBG Mobile FPS and Eliminate Frame Drops',
    subtitle: 'Practical in-game settings and OS-level optimizations to stabilize frame times and stop late-circle stutters without unsafe tools.',
    excerpt: 'Safe settings and system optimizations to improve PUBG Mobile frame rate, reduce heat buildup, and minimize input latency without breaching fair-play rules.',
    readTime: '5 min read',
    category: 'Optimization',
    publishedDate: '2026-01-20',
    author: {
      name: 'Ali Raza',
      role: 'Esports Performance Analyst'
    },
    featured: true,
    content: [
      {
        sectionTitle: '1. Configure Optimal In-Game Graphics & Frame Rate',
        paragraphs: [
          'Every tier-1 scrim player relies on one foundation: choose the lowest graphics preset ("Smooth") paired with the highest unlocked Frame Rate option available for your device.',
          'High presets like HDR and Ultra HD add heavy volumetric lighting, foliage shadows, and post-processing shaders that spike GPU draw calls during multi-squad smoke pushes.'
        ],
        bulletPoints: [
          'Graphics: Smooth (lowest shader overhead)',
          'Frame Rate: Extreme+ (120 FPS), Extreme (60/90 FPS), or highest native option',
          'Style: Colorful or Classic for clear enemy silhouette contrast',
          'Anti-Aliasing: Disable on mid-range GPUs; 2x only on cool flagships',
          'Auto-Adjust Graphics: Off, so mid-fight resolution scaling never stalls frame pacing'
        ],
        proTip: 'Leaving "Auto-adjust graphics" enabled causes micro-hitches whenever the game switches texture LOD levels mid-match.'
      },
      {
        sectionTitle: '2. Safe Android & iOS System Adjustments',
        paragraphs: [
          'Modern mobile operating systems run aggressive background sync services and virtual RAM paging that interrupt CPU thread scheduling right when enemies render into your field of view.',
          'Clean built-in gaming utilities stabilize frame pacing without needing any third-party APK mods or risky GFX tools.'
        ],
        bulletPoints: [
          'Turn off Battery Saver and Adaptive Battery limits during gaming',
          'Disable Android RAM Expansion / Virtual RAM (reduces flash storage I/O stalls)',
          'Keep at least 15–20% free UFS storage so shader caching never bottlenecks',
          'Download only the maps you play to limit background asset overhead'
        ]
      }
    ]
  },
  {
    id: 'guide-smooth-vs-hd',
    slug: 'understanding-smooth-vs-hd-graphics',
    title: 'Smooth vs HD Graphics: Why Pro Players Always Choose Smooth',
    subtitle: 'How shadows, grass density, and thermal headroom affect enemy spotting and gunfight consistency.',
    excerpt: 'Detailed comparison between Smooth, Balanced, HD, HDR, and Ultra HD settings in PUBG Mobile and why visual realism reduces competitive awareness.',
    readTime: '5 min read',
    category: 'Settings',
    publishedDate: '2026-01-10',
    author: {
      name: 'Usman Khan',
      role: 'Hardware Benchmarking Lead'
    },
    featured: false,
    content: [
      {
        sectionTitle: 'Visual Clarity Over Cinematics in Battle Royale',
        paragraphs: [
          'In open maps like Erangel, Miramar, and Rondo, visual clutter directly delays target acquisition. HD and HDR modes draw deep self-shadowing under grass blades and dark interior rooms, masking prone opponents.',
          'Smooth mode strips complex shadow maps and simplifies ambient occlusion, turning darkened window frames and hillside brush into readable terrain.'
        ],
        bulletPoints: [
          'Smooth Mode: Reveals prone players hiding in grass much more clearly',
          'Smooth Mode: Unlocks 90 FPS and 120 FPS modes that stay locked in HD/HDR on most phones',
          'Smooth Mode: Runs 4°C to 8°C cooler during 45-minute back-to-back matches'
        ],
        proTip: 'Combine Smooth graphics with Colorful style and 115–125% screen brightness outdoors for clean distant horizon spotting.'
      },
      {
        sectionTitle: 'When Higher Presets Actually Make Sense',
        paragraphs: [
          'Balanced and HD graphics remain reasonable choices for casual TDM sessions or content recording on flagship chips that keep stable 60 FPS without overheating.',
          'Ultra HD looks crisp on OLED tablets and flagships, yet its strict 40 FPS cap introduces noticeable turn blur compared to Smooth at 90 or 120 FPS.'
        ]
      }
    ]
  },
  {
    id: 'guide-snapdragon-vs-mediatek',
    slug: 'snapdragon-vs-mediatek-for-pubg-mobile',
    title: 'Snapdragon vs MediaTek Dimensity vs Apple Silicon: Which Wins for PUBG?',
    subtitle: 'Comparing Adreno, Mali/Immortalis, and Apple GPUs on driver maturity, day-one FPS unlocks, and heat control.',
    excerpt: 'Technical breakdown comparing Qualcomm Snapdragon, MediaTek Dimensity, and Apple A-series processors in PUBG Mobile frame pacing and whitelist support.',
    readTime: '7 min read',
    category: 'Hardware',
    publishedDate: '2025-12-28',
    author: {
      name: 'Usman Khan',
      role: 'Hardware Benchmarking Lead'
    },
    featured: false,
    content: [
      {
        sectionTitle: 'Driver Optimization: Why Adreno & Apple Lead Early Unlocks',
        paragraphs: [
          'While flagship MediaTek Dimensity 9300 and 9400 silicon matches Snapdragon in raw shader throughput, Qualcomm Adreno and Apple GPUs consistently receive day-one optimization profiles whenever PUBG Mobile introduces new high-frame-rate tiers.',
          'If you buy a newly released phone expecting immediate 90 FPS or 120 FPS support, Snapdragon 8-series and iPhone Pro models historically receive client whitelist activation fastest.'
        ],
        bulletPoints: [
          'Snapdragon 8 Gen 2 / Gen 3 / 8 Elite: Strongest tournament stability and whitelist priority',
          'Dimensity 8200 / 8300 / 9300: Outstanding price-to-performance 90 FPS mid-range value',
          'Apple A17 Pro / A18 Pro: Consistent frame times with low input latency, best paired with manual screen brightness limits to avoid thermal dimming',
          'Exynos & Google Tensor: Capable at 60 FPS, though warmer under extended hot climates'
        ]
      },
      {
        sectionTitle: 'Picking the Right SoC tier for Your Budget',
        paragraphs: [
          'For reliable 60 FPS classic gameplay under a tight budget, look for Snapdragon 7+ Gen 2/3, Snapdragon 6 Gen 1/7s Gen 2, or Dimensity 7200/8050 chips paired with UFS 3.1 storage.',
          'Slow eMMC storage and entry-level Helio G-series chips remain fine for Smooth 40 FPS casual play, but will micro-stutter when dropping into densely populated compounds.'
        ]
      }
    ]
  },
  {
    id: 'guide-gyroscope-zero-recoil',
    slug: 'gyroscope-hardware-vs-software-pubg-guide',
    title: 'Hardware vs Software Gyroscope in PUBG Mobile: Sensitivity & Delay Explained',
    subtitle: 'Why budget phones suffer gyro lag and how physical MEMS gyro sensors improve spray control.',
    excerpt: 'Understand the difference between Ultra Fast Hardware Gyro and virtual software gyroscopes, plus practical sensitivity starting points for M416 and 4x/6x sprays.',
    readTime: '6 min read',
    category: 'Competitive',
    publishedDate: '2026-02-02',
    author: {
      name: 'Ali Raza',
      role: 'Esports Performance Analyst'
    },
    featured: false,
    content: [
      {
        sectionTitle: 'Why Software Gyro Feels Sluggish in Close Combat',
        paragraphs: [
          'Some entry-level smartphones cut costs by omitting a physical 6-axis MEMS gyroscope chip, instead calculating orientation roughly using the accelerometer and magnetometer.',
          'In PUBG Mobile, virtual software gyro exhibits drift, diagonal jitter, and a 40–80ms input delay when tilting your device to track vehicles or control 3x/4x sprays.'
        ],
        bulletPoints: [
          'Check every phone page on PUBGFrames for Hardware vs Software Gyro verification before buying',
          'Enable "Always On" gyroscope only on genuine Hardware Gyro devices',
          'Pair 90/120 FPS with a hardware gyro for smooth continuous vertical recoil compensation'
        ],
        proTip: 'If your phone uses a software gyroscope, switch to "Scope On" gyro or thumb-based ADS sensitivity to avoid erratic camera wobble while looting.'
      },
      {
        sectionTitle: 'Calibrated Starting Gyro Sensitivity Baseline',
        paragraphs: [
          'Start in Cheer Park or Training Grounds at 60+ FPS and dial your No-Scope gyro around 300–350% for quick hip-fire turns, while lowering 3x (220–260%) and 4x (180–220%) until sprays hold tightly at 100 meters.'
        ]
      }
    ]
  },
  {
    id: 'guide-thermal-cooling-pubg',
    slug: 'mobile-gaming-cooling-and-thermal-throttling-guide',
    title: 'Preventing Overheating & FPS Drops During 2-Hour PUBG Ranked Sessions',
    subtitle: 'How smartphone skin temperature triggers FPS locks and the most effective ways to keep chips cool.',
    excerpt: 'Learn the exact thermal thresholds that throttle mobile CPUs/GPUs in PUBG Mobile and practical habits to keep 90 and 120 FPS steady.',
    readTime: '5 min read',
    category: 'Optimization',
    publishedDate: '2026-02-10',
    author: {
      name: 'Usman Khan',
      role: 'Hardware Benchmarking Lead'
    },
    featured: false,
    content: [
      {
        sectionTitle: 'What Happens Inside Your Phone at 43°C',
        paragraphs: [
          'Smartphones lack active internal fans (except gaming models like REDMAGIC). To protect lithium batteries from degradation above 42°C–45°C, Android and iOS thermal daemons reduce GPU clock speeds by 25–40% and dim screen brightness.',
          'Once GPU frequency steps down, your frame rate fluctuates unpredictably between 45 and 75 FPS even if your phone normally supports 90 or 120 FPS.'
        ],
        bulletPoints: [
          'Avoid charging with fast chargers (45W–120W) while playing classic matches — fast charging adds 6°C–9°C of battery heat immediately',
          'Use bypass charging if your phone supports it (ASUS ROG, Infinix GT, iQOO, REDMAGIC)',
          'Keep screen brightness at 70–85% indoors instead of 100% max HDR nit output'
        ],
        proTip: 'Using our interactive Gaming Session Duration slider in the FPS Checker previews how each phone cools down or throttles after 15, 30, and 45 minutes.'
      }
    ]
  }
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES_DATA.find((g) => g.slug === slug);
}
