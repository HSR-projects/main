import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplineSceneBasic } from "@/components/ui/demo";
import {
  ORG,
  REPOS,
  FOUNDERS,
  QUICKSTART,
  LANGUAGE_COLORS,
} from "./data.jsx";
import {
  GitHubIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  CopyIcon,
  CheckIcon,
  HeartIcon,
  CrownIcon,
  MailIcon,
  GlobeIcon,
  ExternalLinkIcon,
} from "./icons.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Navbar() {
  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Founders", href: "#founders" },
    { label: "About", href: "#about" },
  ];
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between gap-4"
    >
      <a
        href="#top"
        className="glass-strong flex cursor-pointer items-center gap-2.5 rounded-full py-2 pl-2.5 pr-5"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-emerald-700 text-white">
          <CrownIcon className="w-4 h-4" />
        </span>
        <span className="font-display font-semibold tracking-tight">
          HSR<span className="text-accent">-projects</span>
        </span>
      </a>
      <nav className="glass-strong flex items-center gap-1 rounded-full px-2.5 py-2">
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={ORG.blog}
            target="_blank"
            rel="noreferrer"
            aria-label="HSR-projects website"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <GlobeIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${ORG.email}`}
            aria-label="Email HSR-projects"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <MailIcon className="w-4 h-4" />
          </a>
          <span className="mx-1.5 h-5 w-px bg-white/15" />
          <a
            href={ORG.blog}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent/60 px-4 py-1.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent/10"
          >
            Support us
          </a>
        </div>
        <a
          href={ORG.github}
          target="_blank"
          rel="noreferrer"
          className="ml-1 flex items-center gap-2 rounded-full bg-accent px-5 py-1.5 text-sm font-bold uppercase tracking-wide text-slate-950 transition-colors duration-200 hover:bg-accent-dark hover:text-white"
        >
          <GitHubIcon className="w-4 h-4" />
          GitHub
        </a>
      </nav>
    </motion.header>
  );
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-blue-500/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}

function RepoTile({ repo }) {
  const Icon = repo.icon;
  return (
    <a
      href={`${ORG.github}/${repo.name}`}
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
      title={`${repo.name} on GitHub`}
      className="pointer-events-auto flex cursor-pointer flex-col justify-between gap-3 rounded-2xl border border-emerald-200/10 bg-white/[0.03] p-4 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${repo.gradient} text-white`}
      >
        <Icon className="w-5 h-5" />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-sm font-semibold text-white/90">
          {repo.name}
        </span>
        <span className="text-xs text-slate-400">{repo.tag}</span>
      </span>
    </a>
  );
}

function WindowWall({ side }) {
  const repos = side === "left" ? REPOS.slice(0, 7) : REPOS.slice(7, 14);
  const extra =
    side === "left"
      ? { label: "All projects", href: "#projects", external: false }
      : { label: "HSR-projects org", href: ORG.github, external: true };
  return (
    <div
      className={`absolute top-[-6%] hidden h-[112%] w-[46%] md:block ${
        side === "left" ? "left-[-16%]" : "right-[-16%]"
      }`}
      style={{
        transform: `perspective(1100px) rotateY(${side === "left" ? 52 : -52}deg)`,
        transformOrigin: side === "left" ? "right center" : "left center",
      }}
    >
      <div className="grid h-full grid-cols-2 grid-rows-4 gap-5 p-4">
        {repos.map((repo) => (
          <RepoTile key={repo.name} repo={repo} />
        ))}
        <a
          href={extra.href}
          {...(extra.external ? { target: "_blank", rel: "noreferrer" } : {})}
          tabIndex={-1}
          title={extra.label}
          className="pointer-events-auto flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-emerald-200/20 bg-white/[0.02] p-4 font-display text-sm font-semibold text-slate-300 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-white"
        >
          {extra.label}
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-gradient absolute inset-0" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,233,180,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(148,233,180,.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <WindowWall side="left" />
      <WindowWall side="right" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_38%,rgba(34,197,94,0.14),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-surface" />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4"
    >
      <HeroBackdrop />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl pt-20 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-500 bg-clip-text text-transparent">
            Modern software
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-accent to-emerald-600 bg-clip-text text-transparent">
            with the source
          </span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
        >
          HSR-projects builds chess engines, operating systems, AI tools and
          hardware hacks — all free and open, while staying lightweight and
          made with love in India
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-white px-7 py-3 font-display text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-200"
          >
            Explore projects
          </a>
          <a
            href={ORG.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-accent/60 bg-surface/40 px-7 py-3 font-display text-sm font-semibold text-white shadow-[0_0_24px_rgba(34,197,94,0.3)] transition-colors duration-200 hover:bg-accent/10"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="scroll-mt-28 px-4 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <SplineSceneBasic />
      </motion.div>
    </section>
  );
}

function QuickStart() {
  const [tab, setTab] = useState(0);
  const [proto, setProto] = useState("https");
  const [copied, setCopied] = useState(false);

  const item = QUICKSTART[tab];
  const command =
    proto === "https"
      ? `git clone https://github.com/HSR-projects/${item.repo}.git`
      : `git clone git@github.com:HSR-projects/${item.repo}.git`;

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="quickstart" className="scroll-mt-28 px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="flex items-center gap-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <ChevronRightIcon className="w-8 h-8 text-accent" />
          Quick Start
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-accent" />
              </div>
              <div className="flex items-center gap-1 font-mono text-xs">
                {QUICKSTART.map((q, i) => (
                  <button
                    key={q.repo}
                    type="button"
                    onClick={() => setTab(i)}
                    className={`cursor-pointer rounded px-3 py-1.5 transition-colors duration-200 ${
                      i === tab
                        ? "bg-accent font-bold text-slate-950"
                        : "text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <div className="flex items-center gap-1">
                {["https", "ssh"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setProto(p)}
                    className={`cursor-pointer rounded px-3 py-1.5 uppercase transition-colors duration-200 ${
                      proto === p
                        ? "bg-accent font-bold text-slate-950"
                        : "text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <span className="rounded border border-white/20 px-2.5 py-1 text-slate-300">
                FOSS
              </span>
            </div>
          </div>

          <div className="px-6 py-7 font-mono text-sm">
            <p className="italic text-slate-500"># {item.comment}</p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="min-w-0 overflow-x-auto whitespace-nowrap">
                <span className="text-accent">$ </span>
                <span className="text-slate-100">{command}</span>
              </p>
              <button
                type="button"
                onClick={copy}
                aria-label={copied ? "Copied" : "Copy command"}
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors duration-200 hover:bg-white/15 hover:text-white"
              >
                {copied ? (
                  <CheckIcon className="w-4 h-4 text-accent" />
                ) : (
                  <CopyIcon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <motion.span
        variants={fadeUp}
        className="font-display text-sm font-semibold uppercase tracking-widest text-accent"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-4 leading-relaxed text-slate-400">
        {subtitle}
      </motion.p>
    </motion.div>
  );
}

function RepoCard({ repo }) {
  const Icon = repo.icon;
  return (
    <motion.a
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      href={`${ORG.github}/${repo.name}`}
      target="_blank"
      rel="noreferrer"
      className="glass group flex cursor-pointer flex-col rounded-2xl p-5 transition-colors duration-200 hover:border-accent/40 hover:bg-white/10"
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${repo.gradient} text-white`}
        >
          <Icon className="w-5 h-5" />
        </span>
        <div className="min-w-0">
          <h3
            title={repo.name}
            className="truncate font-display text-sm font-semibold"
          >
            {repo.name}
          </h3>
          <span className="text-xs text-slate-500">{repo.tag}</span>
        </div>
        <ExternalLinkIcon className="ml-auto w-4 h-4 shrink-0 text-slate-600 opacity-0 transition-opacity duration-200 group-hover:text-accent group-hover:opacity-100" />
      </div>
      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-400">
        {repo.description}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        {repo.language ? (
          <span className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: LANGUAGE_COLORS[repo.language] || "#94a3b8",
              }}
            />
            {repo.language}
          </span>
        ) : (
          <span>Open source</span>
        )}
        <span className="transition-colors duration-200 group-hover:text-accent">
          View repo
        </span>
      </div>
    </motion.a>
  );
}

const REPO_FILTERS = ["All", "Chess", "AI & Tools", "Systems", "Community"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? REPOS : REPOS.filter((r) => r.group === filter);

  return (
    <section id="projects" className="scroll-mt-28 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Everything we ship is open"
          subtitle="Chess runs deep here — engines, servers, games, even a chess programming language — alongside AI, security research and hardware projects."
        />
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {REPO_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                f === filter
                  ? "bg-accent font-semibold text-slate-950"
                  : "glass text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f}
              <span className="ml-1.5 text-xs opacity-60">
                {f === "All"
                  ? REPOS.length
                  : REPOS.filter((r) => r.group === f).length}
              </span>
            </button>
          ))}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FounderCard({ login }) {
  return (
    <motion.a
      variants={fadeUp}
      href={`https://github.com/${login}`}
      target="_blank"
      rel="noreferrer"
      className="glass group flex w-44 cursor-pointer flex-col items-center rounded-2xl px-4 py-6 text-center transition-colors duration-200 hover:border-accent/40 hover:bg-white/10"
    >
      <img
        src={`https://github.com/${login}.png?size=128`}
        alt={`GitHub avatar of ${login}`}
        loading="lazy"
        width="64"
        height="64"
        className="h-16 w-16 rounded-full ring-2 ring-white/15 transition-shadow duration-200 group-hover:ring-accent/60"
      />
      <span
        title={login}
        className="mt-3 w-full truncate font-display text-sm font-semibold"
      >
        {login}
      </span>
      <span className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500 transition-colors duration-200 group-hover:text-accent">
        <GitHubIcon className="w-3.5 h-3.5" />
        Founder
      </span>
    </motion.a>
  );
}

function Founders() {
  return (
    <section id="founders" className="scroll-mt-28 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Founders"
          title="The people behind the code"
          subtitle="Seven founders, one mission: keep great software free and open for everyone."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {FOUNDERS.map((login) => (
            <FounderCard key={login} login={login} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="glass mx-auto max-w-4xl rounded-3xl p-8 text-center sm:p-14"
      >
        <motion.div variants={fadeUp}>
          <HeartIcon className="mx-auto mb-6 w-10 h-10 text-accent" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Open source is the whole point
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300"
        >
          HSR-projects is a verified open source organization based in{" "}
          {ORG.location}. We believe software is better when it is built in the
          open — every repo is public, every contribution is welcome, and every
          project is free to use, study, and improve.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={ORG.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display font-semibold text-slate-950 transition-colors duration-200 hover:bg-accent-dark hover:text-white"
          >
            <GitHubIcon className="w-5 h-5" />
            Start contributing
          </a>
          <a
            href={`mailto:${ORG.email}`}
            className="glass flex items-center gap-2 rounded-xl px-6 py-3 font-display font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            <MailIcon className="w-5 h-5" />
            Contact us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl px-8 py-7 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-emerald-700 text-white">
            <CrownIcon className="w-4 h-4" />
          </span>
          <div>
            <div className="font-display text-sm font-semibold">{ORG.name}</div>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} — released as open source
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={ORG.github}
            target="_blank"
            rel="noreferrer"
            aria-label="HSR-projects on GitHub"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href={ORG.blog}
            target="_blank"
            rel="noreferrer"
            aria-label="HSR-projects website"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <GlobeIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${ORG.email}`}
            aria-label="Email HSR-projects"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <MailIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <QuickStart />
        <Projects />
        <Founders />
        <About />
      </main>
      <Footer />
    </div>
  );
}
