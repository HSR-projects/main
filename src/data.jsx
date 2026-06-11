import {
  CpuIcon,
  UnlockIcon,
  NewspaperIcon,
  MonitorIcon,
  GamepadIcon,
  CodeIcon,
  PresentationIcon,
  SparklesIcon,
  MusicIcon,
  LayersIcon,
  SwordsIcon,
  BoxIcon,
  BotIcon,
  ZapIcon,
} from "./icons.jsx";

export const ORG = {
  name: "HSR-projects",
  tagline: "HSR-projects ❤️ Open-Source",
  github: "https://github.com/HSR-projects",
  blog: "https://opensource.hsrprojects.org",
  email: "hsr@hsrprojects.org",
  twitter: "https://twitter.com/HSRprojects",
  location: "India",
};

const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const SLIDES = [
  {
    badge: "Verified Org · Open Source",
    title: { lead: "We build ", em: "open source", tail: " for everyone." },
    strong: "HSR-projects",
    text: " is a verified open source organization from India — every line of code we ship is free to use, study and improve.",
    cta: { label: "Explore projects", href: "#projects" },
    secondary: { label: "Visit GitHub", href: "https://github.com/HSR-projects" },
    caption: "HSR-projects ❤️ Open-Source",
    shots: [
      { src: unsplash("photo-1522071820081-009f0129c71c"), alt: "A team collaborating around laptops" },
      { src: unsplash("photo-1461749280684-dccba630e2f6"), alt: "Source code on a monitor" },
    ],
  },
  {
    badge: "Chess Software · 8 Repos",
    title: { lead: "A whole universe of ", em: "chess software", tail: "." },
    strong: "Owen, CHMER & playchess",
    text: " — engines, servers, games and even a chess programming language, all built in the open.",
    cta: { label: "Explore chess repos", href: "#projects" },
    secondary: { label: "Visit GitHub", href: "https://github.com/HSR-projects" },
    caption: "Chess software by HSR",
    shots: [
      { src: unsplash("photo-1528819622765-d6bcf132f793"), alt: "Chess pieces on a board" },
      { src: unsplash("photo-1529699211952-734e80c4d42b"), alt: "A game of chess in progress" },
    ],
  },
  {
    badge: "Artificial Intelligence",
    title: { lead: "Meet ", em: "KodaAI", tail: " — open AI chat." },
    strong: "KodaAI",
    text: " ships agent mode, artifacts and multi-model support — a full-stack AI chat platform, fully open source.",
    cta: { label: "Explore KodaAI", href: "https://github.com/HSR-projects/KodaAI" },
    secondary: { label: "All projects", href: "#projects" },
    caption: "KodaAI · agent mode",
    shots: [
      { src: unsplash("photo-1620712943543-bcc4688e7485"), alt: "Abstract artificial intelligence illustration" },
      { src: unsplash("photo-1485827404703-89b55fcc595e"), alt: "A white robot head" },
    ],
  },
  {
    badge: "Systems & Hardware",
    title: { lead: "From ", em: "operating systems", tail: " to bootroms." },
    strong: "ChessOS & checkm8",
    text: " — a FOSS operating system, bootrom exploits and device trees for real hardware.",
    cta: { label: "See ChessOS", href: "https://github.com/HSR-projects/ChessOS" },
    secondary: { label: "All projects", href: "#projects" },
    caption: "ChessOS · checkm8",
    shots: [
      { src: unsplash("photo-1518770660439-4636190af475"), alt: "Close-up of a circuit board" },
      { src: unsplash("photo-1531297484001-80022131f5a1"), alt: "A laptop on a dark gradient background" },
    ],
  },
];

export const HERO_STATS = [
  { value: "14", sup: "+", label: "Open source repos" },
  { value: "7", sup: "", label: "Founders" },
  { value: "100", sup: "%", label: "Free & open" },
  { value: "24×7", sup: "", label: "Community" },
];

export const LANGUAGE_COLORS = {
  Rust: "#dea584",
  HTML: "#e34c26",
  Python: "#3572A5",
  Scala: "#c22d40",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Makefile: "#427819",
  "C++": "#f34b7d",
};

export const REPOS = [
  {
    name: "Owen",
    description:
      "A from-scratch C++20 chess engine with bitboards, alpha-beta search and Stockfish NNUE evaluation.",
    language: "C++",
    tag: "Chess Engine",
    group: "Chess",
    icon: ZapIcon,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "KodaAI",
    description:
      "Full-stack AI chat with agent mode, artifacts, and multi-model support.",
    language: "TypeScript",
    tag: "AI",
    group: "AI & Tools",
    icon: BotIcon,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "ChessOS",
    description: "A FOSS operating system created by HSR-projects.",
    language: null,
    tag: "Operating System",
    group: "Systems",
    icon: MonitorIcon,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    name: "CHMER",
    description:
      "A chess programming language, for chess people who want chess more.",
    language: "Rust",
    tag: "Language",
    group: "Chess",
    icon: CodeIcon,
    gradient: "from-rose-500 to-red-600",
  },
  {
    name: "playchess",
    description: "An interactive chess website for playing online.",
    language: "Scala",
    tag: "Web App",
    group: "Chess",
    icon: SwordsIcon,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "lila-docker",
    description: "A self-hostable chess server, packaged with Docker.",
    language: "Rust",
    tag: "Infrastructure",
    group: "Chess",
    icon: BoxIcon,
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    name: "ChessPursuit",
    description: "Pursuit Chess! Foundation — a chess pursuit game project.",
    language: null,
    tag: "Game",
    group: "Chess",
    icon: GamepadIcon,
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "checkm8",
    description:
      "Originally checkm8-X — the checkm8 bootrom exploit. Checkmate!",
    language: null,
    tag: "Security Research",
    group: "Systems",
    icon: UnlockIcon,
    gradient: "from-slate-500 to-slate-700",
  },
  {
    name: "amazon-echo-show-checkers-device-trees",
    description:
      "Device trees for running custom software on Amazon Echo Show hardware.",
    language: "Makefile",
    tag: "Hardware",
    group: "Systems",
    icon: CpuIcon,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "Chess-News-public",
    description: "Public chess news, updates and stories from the community.",
    language: "HTML",
    tag: "News",
    group: "Community",
    icon: NewspaperIcon,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Conference-HSR",
    description: "The home of HSR conferences, talks and community events.",
    language: "HTML",
    tag: "Community",
    group: "Community",
    icon: PresentationIcon,
    gradient: "from-orange-500 to-amber-600",
  },
  {
    name: "Song-Library",
    description: "A curated song library you can browse on the web.",
    language: "HTML",
    tag: "Music",
    group: "Community",
    icon: MusicIcon,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "OWS",
    description: "OWS — open web services tooling written in Python.",
    language: "Python",
    tag: "Tooling",
    group: "AI & Tools",
    icon: LayersIcon,
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    name: "fbidchmerwebcharmingnocodingfun",
    description: "A charming no-coding web experiment, just for fun.",
    language: null,
    tag: "Experiment",
    group: "Community",
    icon: SparklesIcon,
    gradient: "from-lime-500 to-green-600",
  },
];

export const QUICKSTART = [
  {
    label: "KodaAI",
    repo: "KodaAI",
    comment: "Full-stack AI chat with agent mode. You're welcome.",
  },
  {
    label: "ChessOS",
    repo: "ChessOS",
    comment: "A FOSS operating system by HSR-projects.",
  },
  {
    label: "lila-docker",
    repo: "lila-docker",
    comment: "Self-hosted chess server, batteries included.",
  },
  {
    label: "Owen",
    repo: "Owen",
    comment: "From-scratch C++20 chess engine with NNUE eval.",
  },
];

export const FOUNDERS = [
  "hemu-create",
  "hemuk477",
  "Hemeshkas8888",
  "hemeshKas",
  "sivansh2018",
  "elprohemesh",
  "Srinivas-Kasukurthy",
];
