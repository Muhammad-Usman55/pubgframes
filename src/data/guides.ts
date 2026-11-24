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
    avatar: string;
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
    subtitle: 'From budget warriors under $250 to tournament-grade flagships, here are the real-world top picks for competitive players.',
    excerpt: 'Comprehensive analysis of the best smartphones for PUBG Mobile across budget, mid-range, and flagship price segments tested for thermal throttling and frame stability.',
    readTime: '6 min read',
    category: 'Hardware',
    publishedDate: '2026-02-15',
    author: {
      name: 'Usman Khan',
      role: 'Hardware Benchmarking Lead',
      avatar: '/avatars/author-1.png'
    },
    featured: true,
    content: [
      {
        sectionTitle: 'The 120 FPS Revolution in PUBG Mobile',
        paragraphs: [
          'With PUBG Mobile officially rolling out native 120 FPS (Extreme+) support across modern flagships powered by Snapdragon 8 Gen 2/3 and Apple A17/A18 Pro chips, competitive gaming has shifted into a new gear.',
          '120 FPS cuts frame time latency in half compared to 60 FPS — from 16.6ms down to just 8.3ms. This gives pro players faster crosshair acquisition, snappier recoil recovery, and an unmistakable advantage in close-range 1v1 gunfights.'
        ],
        bulletPoints: [
          'Best Overall Flagship: Samsung Galaxy S24 Ultra / iPhone 15 Pro Max',
          'Best Value 120 FPS Performer: POCO F6 Pro & iQOO Neo 9 Pro',
          'Best Dedicated Gaming Hardware: ASUS ROG Phone 8 Pro',
          'Best Budget 90 FPS Option: POCO X6 Pro & Infinix GT 20 Pro'
        ],
        proTip: 'Always check if your smartphone display refresh rate is set to 120Hz or higher in Android system settings before launching PUBG Mobile, otherwise the game will cap at 60 FPS.'
      },
      {
        sectionTitle: 'Thermal Throttling: The Hidden FPS Killer',
        paragraphs: [
          'Many smartphones can hit 90 or 120 FPS for the first 5 minutes of a match. But when the SoC reaches 43°C to 45°C, aggressive thermal throttling triggers, dropping your frames down to 45 or 50 FPS right in the final circle.',
          'When choosing a gaming phone, the vapor chamber size and sustained cooling performance matter just as much as peak benchmark numbers.'
        ],
        bulletPoints: [
          'Look for phones with vapor chambers exceeding 4,000 mm²',
          'Avoid phones with metal unibodies without external cooling in hot climates',
          'A magnetic peltier phone cooler can prevent up to 95% of thermal frame drops'
        ]
      }
    ]
  },
  {
    id: 'guide-improve-pubg-fps',
    slug: 'how-to-improve-pubg-fps-and-reduce-lag',
    title: 'How to Improve PUBG Mobile FPS and Eliminate Frame Drops',
    subtitle: 'Step-by-step guide to squeezing maximum frame stability, reducing touch latency, and stopping sudden stutters.',
    excerpt: 'Practical, safe settings and system optimizations to boost PUBG Mobile frame rate, prevent overheating, and lower input lag without violating game terms.',
    readTime: '5 min read',
    category: 'Optimization',
    publishedDate: '2026-01-20',
    author: {
      name: 'Ali Raza',
      role: 'Esports Performance Analyst',
      avatar: '/avatars/author-2.png'
    },
    featured: true,
    content: [
      {
        sectionTitle: '1. In-Game Graphics Settings Optimization',
        paragraphs: [
          'The single most important rule followed by virtually all tier-1 tournament players is simple: always select "Smooth" graphics combined with the maximum available Frame Rate setting (Ultra, Extreme, or Extreme+).',
          'Selecting higher visual settings like HD, HDR, or Ultra HD burdens the GPU with realistic shadows and heavy post-processing effects that obscure enemy silhouettes in grass and cause dramatic frame drops during smoke grenades.'
        ],
        bulletPoints: [
          'Graphics: Smooth',
          'Frame Rate: Extreme (90 FPS) or Extreme+ (120 FPS)',
          'Style: Colorful or Soft (provides highest enemy contrast)',
          'Anti-Aliasing: Close or 2X (disable if your phone runs warm)',
          'Auto-Adjust Graphics: DISABLE (prevent unexpected mid-game resolution dips)'
        ],
        proTip: 'Disable "Auto-adjust graphics" in PUBG settings. When enabled, it dynamically downgrades your resolution and creates micro-stutters during heavy gunfights.'
      },
      {
        sectionTitle: '2. Android System Tweaks for Gaming',
        paragraphs: [
          'Modern Android skins (MIUI/HyperOS, One UI, ColorOS) run dozens of background synchronization threads that interrupt CPU scheduling during matches.',
          'Using the dedicated Game Turbo / Game Space utility to lock brightness, clear background RAM, and prioritize network packets can noticeably stabilize your frame time.'
        ],
        bulletPoints: [
          'Turn off Battery Saver mode completely',
          'Enable "Performance Mode" in battery settings',
          'Disable Ram Expansion / Virtual RAM (often causes storage I/O bottlenecks and stutter)'
        ]
      }
    ]
  },
  {
    id: 'guide-smooth-vs-hd',
    slug: 'understanding-smooth-vs-hd-graphics',
    title: 'Smooth vs HD Graphics: Why Pro Players Always Choose Smooth',
    subtitle: 'The science behind frame rates, motion blur, and spotting enemies faster in competitive matches.',
    excerpt: 'Detailed comparison between Smooth, Balanced, HD, HDR, and Ultra HD settings in PUBG Mobile. Discover why visual realism hurts competitive performance.',
    readTime: '4 min read',
    category: 'Settings',
    publishedDate: '2026-01-10',
    author: {
      name: 'Gaming Zone',
      role: 'Esports Coach & Content Creator',
      avatar: '/avatars/author-3.png'
    },
    featured: false,
    content: [
      {
        sectionTitle: 'Why Realism Is Your Enemy in Battle Royale',
        paragraphs: [
          'In single-player adventure games, high definition textures and dynamic volumetric lighting enhance immersion. In competitive PUBG Mobile, however, shadows and dense grass rendering work directly against you.',
          'On HD and HDR settings, grass renders with dense self-shadowing, making prone enemies ("snakes") significantly harder to distinguish from the terrain.'
        ],
        bulletPoints: [
          'Smooth Mode: Removes dynamic grass shadows, making distant targets pop immediately',
          'Smooth Mode: Maximizes GPU headroom to sustain peak FPS during 4-squad vehicle crashes',
          'Smooth Mode: Keeps device temperature 4°C to 8°C cooler over an hour of continuous play'
        ],
        proTip: 'Pair Smooth graphics with the "Colorful" style to make player clothing and enemy headgear stand out vibrantly against the Erangel landscape.'
      }
    ]
  },
  {
    id: 'guide-snapdragon-vs-mediatek',
    slug: 'snapdragon-vs-mediatek-for-pubg-mobile',
    title: 'Snapdragon vs MediaTek vs Dimensity: Which Chipset Wins for PUBG?',
    subtitle: 'Architectural breakdown of Adreno vs Mali GPUs, Vulkan API driver support, and sustained gaming endurance.',
    excerpt: 'Deep-dive comparison between Qualcomm Snapdragon and MediaTek Dimensity processors. How GPU drivers and game developer optimization affect your PUBG FPS.',
    readTime: '7 min read',
    category: 'Hardware',
    publishedDate: '2025-12-28',
    author: {
      name: 'Usman Khan',
      role: 'Hardware Benchmarking Lead',
      avatar: '/avatars/author-1.png'
    },
    featured: false,
    content: [
      {
        sectionTitle: 'Driver Optimization: The Adreno Advantage',
        paragraphs: [
          'While MediaTek Dimensity chips (such as the Dimensity 8300 and 9300) have matched and even surpassed Qualcomm in theoretical raw compute, Qualcomm Adreno GPUs continue to enjoy deeper day-one driver optimization from Tencent and Krafton.',
          'Historically, new graphics features (like 90 FPS and 120 FPS modes) rollout first to Snapdragon 8-series chipsets before arriving on equivalent MediaTek hardware.'
        ],
        bulletPoints: [
          'Snapdragon 8 Gen 3: Unrivaled 120 FPS consistency, highest developer priority',
          'Dimensity 8300 / 8200: Incredible budget performance, 90 FPS champion',
          'Exynos & Tensor: Struggles with sustained 3D thermal throttling in high ambient temperatures'
        ]
      }
    ]
  }
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES_DATA.find((g) => g.slug === slug);
}
