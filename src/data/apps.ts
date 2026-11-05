export interface AppFeature {
  title: string;
  desc: string;
}

export interface AppGalleryItem {
  src: string;
  alt: string;
}

export interface AppItem {
  id: string;
  name: string;
  category: string;
  platform: string;
  status: string;
  isLive: boolean;
  tagline: string;
  description: string;
  accentColor: string;
  highlightColor: string;
  glowColor: string;
  icon: string;
  iconFallback: string;
  shot: string;
  shotFallback: string;
  video: string;
  gallery: AppGalleryItem[];
  features: AppFeature[];
  ctaText: string;
  webUrl: string;
  appStoreUrl?: string;
  privacyUrl: string;
}

export const APPS_DATA: AppItem[] = [
  {
    id: "accrual",
    name: "Accrual",
    category: "Finance",
    platform: "Web & iOS",
    status: "Live Web App",
    isLive: true,
    tagline: "Where numbers become foresight.",
    description:
      "Private financial intelligence with voice input, receipt OCR, bank-statement parsing, NFC e-money, 10,000-iteration Monte Carlo simulation, and FIRE projections.",
    accentColor: "#454a54",
    highlightColor: "#94a3b8",
    glowColor: "rgba(69, 74, 84, 0.45)",
    icon: "/assets/accrual-icon.webp",
    iconFallback: "/assets/accrual-icon.jpg",
    shot: "/assets/accrual.webp",
    shotFallback: "/assets/accrual.jpg",
    video: "/assets/accrual-preview.mp4",
    gallery: [
      { src: "/assets/accrual.webp", alt: "Accrual balance sheet & liquidity" },
      { src: "/assets/accrual-shot-2.webp", alt: "Accrual unified ledger search" },
      { src: "/assets/accrual-shot-3.webp", alt: "Accrual one-tap receipt scanning" },
    ],
    features: [
      {
        title: "Effortless capture",
        desc: 'Speak a phrase like "kopi 20 ribu" to log a transaction, scan receipts with OCR, parse BCA, Mandiri, and Jenius statements, or read Flazz e-money via NFC.',
      },
      {
        title: "Probabilistic foresight",
        desc: "Run 10,000-iteration Monte Carlo simulations, model Lean, Fat, and Coast FIRE horizons, and trace every rupiah through Sankey cashflow diagrams.",
      },
      {
        title: "Private by design",
        desc: "Built offline-first with AES-256 encryption inside a quiet monochrome glass interface.",
      },
    ],
    ctaText: "Launch Web App",
    webUrl: "https://accrual-dashboard.accrual-project-app.workers.dev/",
    privacyUrl: "/privacy/accrual",
  },
  {
    id: "rimba",
    name: "Rimba",
    category: "Focus",
    platform: "Web & iOS",
    status: "Live Web App",
    isLive: true,
    tagline: "Where attention becomes a forest.",
    description:
      "Focus timer where a 3D isometric tree grows in real time, with co-op planting and weekly streaks that cultivate your personal sanctuary.",
    accentColor: "#1f7a4a",
    highlightColor: "#34d399",
    glowColor: "rgba(31, 122, 74, 0.45)",
    icon: "/assets/rimba-icon.webp",
    iconFallback: "/assets/rimba-icon.jpg",
    shot: "/assets/rimba.webp",
    shotFallback: "/assets/rimba.jpg",
    video: "/assets/rimba-preview.mp4",
    gallery: [
      { src: "/assets/rimba.webp", alt: "Rimba 3D sanctuary island" },
      { src: "/assets/rimba-shot-1.webp", alt: "Rimba focus session timer" },
      { src: "/assets/rimba-shot-3.webp", alt: "Rimba weekly sanctuary streak" },
    ],
    features: [
      {
        title: "Real-time growth",
        desc: "Start a focus timer and watch a tree grow in real time; leave the app mid-session and the tree withers.",
      },
      {
        title: "Plant together",
        desc: "Join co-op planting sessions with friends to cultivate shared discipline and mutual accountability.",
      },
      {
        title: "Living 3D sanctuary",
        desc: "Build weekly focus streaks that expand and protect your personal 3D voxel forest island.",
      },
    ],
    ctaText: "Launch Web App",
    webUrl: "https://rimba-website.jagarimba-tetaplestari.workers.dev/",
    privacyUrl: "/privacy/rimba",
  },
  {
    id: "tts-bareng",
    name: "TTS Bareng",
    category: "Game",
    platform: "Web & iOS",
    status: "Live on Web & iOS",
    isLive: true,
    tagline: "Kata-kata, dimainkan bareng.",
    description:
      "Permainan teka-teki silang multipemain modern dengan 220 bab, 2.652 kata baku KBBI, papan ko-op langsung via tautan/QR, Arena 1v1, dan tantangan Daily Rush.",
    accentColor: "#9a2238",
    highlightColor: "#fb7185",
    glowColor: "rgba(154, 34, 56, 0.45)",
    icon: "/assets/tts-icon.webp",
    iconFallback: "/assets/tts-icon.jpg",
    shot: "/assets/tts.webp",
    shotFallback: "/assets/tts.jpg",
    video: "/assets/tts-preview.mp4",
    gallery: [
      { src: "/assets/tts.webp", alt: "Papan permainan teka-teki silang TTS Bareng" },
      { src: "/assets/tts-shot-1.webp", alt: "Mode pertarungan Arena 1v1 TTS Bareng" },
      { src: "/assets/tts-shot-2.webp", alt: "Kombo kata dan animasi visual Liquid Glass" },
    ],
    features: [
      {
        title: "220 bab & 2.652 kata KBBI",
        desc: "Jelajahi 12 tema Nusantara dengan 8 tampilan Liquid Glass yang bekerja mulus secara offline-first.",
      },
      {
        title: "Papan ko-op langsung",
        desc: "Mainkan satu papan teka-teki silang bersama teman secara real-time cukup lewat tautan instan atau scan kode QR.",
      },
      {
        title: "Arena 1v1 & Daily Rush",
        desc: "Uji kecepatan di mode Tug-of-War, Speed Race, serta tantangan harian 90 detik dengan papan peringkat nasional setiap 00:00 WIB.",
      },
    ],
    ctaText: "Launch Web App",
    webUrl: "https://tts-bareng-web.akashaaa-id.workers.dev/",
    appStoreUrl: "https://apps.apple.com/app/id6825594780",
    privacyUrl: "/privacy/tts-bareng",
  },
  {
    id: "noticed",
    name: "Noticed",
    category: "Notes",
    platform: "Web & iOS",
    status: "Live Web App",
    isLive: true,
    tagline: "Where a passing moment becomes permanent.",
    description:
      "Field notebook and editorial journal with a 3D spatial bookshelf, manuscript stream, tactile highlighters, superscript footnotes, and Zen Reading Mode.",
    accentColor: "#7a4d2a",
    highlightColor: "#fbbf24",
    glowColor: "rgba(122, 77, 42, 0.45)",
    icon: "/assets/noticed-icon.webp",
    iconFallback: "/assets/noticed-icon.jpg",
    shot: "/assets/noticed.webp",
    shotFallback: "/assets/noticed.jpg",
    video: "/assets/noticed-preview.mp4",
    gallery: [
      { src: "/assets/noticed.webp", alt: "Noticed manuscript view & tactile typography" },
      { src: "/assets/noticed-shot-2.webp", alt: "Noticed polaroid strips and field memories" },
      { src: "/assets/noticed-shot-3.webp", alt: "Noticed unhurried Zen Reading Mode" },
    ],
    features: [
      {
        title: "3D spatial bookshelf",
        desc: "Organize field notebooks bound in tactile buckram cloth and foil stamping, blending Penguin Classics, Moleskine, and Apple Liquid Glass.",
      },
      {
        title: "Editorial manuscript stream",
        desc: "Write with inline highlighters in Amber, Sage, and Cobalt, superscript footnotes, and an unhurried Zen Reading Mode.",
      },
      {
        title: "Living memory media",
        desc: "Attach polaroid strips, 30-second muted looping video clips, and tactile voice memos for moments you want to keep forever.",
      },
    ],
    ctaText: "Launch Web App",
    webUrl: "https://noticed-web.callipolis-inc.workers.dev/",
    privacyUrl: "/privacy/noticed",
  },
];
