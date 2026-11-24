import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import books from "@/assets/obj3d-books.webp";
import brain from "@/assets/obj3d-brain.webp";
import cat from "@/assets/obj3d-cat.webp";
import globe from "@/assets/obj3d-globe.webp";
import keys from "@/assets/obj3d-keys.webp";
import billingShot from "@/assets/project-billing.webp";
import clinaraShot from "@/assets/project-clinara.webp";
import wardShot from "@/assets/project-ward.webp";
import acreShot from "@/assets/project-acre.webp";
import consensaShot from "@/assets/project-consensa.webp";
import giftagentShot from "@/assets/project-giftagent.webp";
import rexShot from "@/assets/project-rex.webp";
import screenmeshShot from "@/assets/project-screenmesh.webp";
import usageledgerShot from "@/assets/project-usageledger.webp";
import voxieShot from "@/assets/project-voxie.webp";
import x402Shot from "@/assets/project-x402.webp";
import onkeyShot from "@/assets/project-onkey.webp";
import inscribeShot from "@/assets/project-inscribe.webp";
import climber from "@/assets/obj3d-climber.webp";
import earth from "@/assets/rabbit-hole/earth.webp";
import astronautFalling from "@/assets/rabbit-hole/astronaut-falling.webp";
import camera from "@/assets/rabbit-hole/camera.webp";
import code from "@/assets/rabbit-hole/code.webp";
import console_ from "@/assets/rabbit-hole/console.webp";
import cursor from "@/assets/rabbit-hole/cursor.webp";
import folder from "@/assets/rabbit-hole/folder.webp";
import headphones from "@/assets/rabbit-hole/headphones.webp";
import laptop from "@/assets/rabbit-hole/laptop.webp";
import phone from "@/assets/rabbit-hole/phone.webp";
import sparkles from "@/assets/rabbit-hole/sparkles.webp";
import { ArrivalFade, ClimbBackButton } from "@/components/rabbit-hole";
import { jsonLd, pageMeta, SITE_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    ...pageMeta({
      title: "Projects — Nidhi Prajapati",
      description:
        "All of Nidhi Prajapati's projects: AI agents (Voxie, REX, Inscribe, Point), web3 and privacy (Acre, Consensa, Ward, Onkey, x402), and billing infrastructure.",
      path: "/work",
    }),
    scripts: [
      jsonLd({
        "@type": "CollectionPage",
        url: `${SITE_URL}/work`,
        name: "Projects by Nidhi Prajapati",
        author: { "@id": `${SITE_URL}/#person` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "SoftwareApplication",
              name: p.title,
              description: p.long,
              applicationCategory: "DeveloperApplication",
              ...(p.live ? { url: p.live } : {}),
              ...(p.code ? { codeRepository: p.code } : {}),
              author: { "@type": "Person", name: "Nidhi Prajapati", url: SITE_URL },
            },
          })),
        },
      }),
    ],
  }),
  component: WorkPage,
});

type Project = {
  title: string;
  tags: string[];
  blurb: string;
  long: string;
  object: string;
  shot?: string;
  live?: string;
  code?: string;
  npm?: string;
};

// Every project gets one of the 3D objects; the ones with a live site also
// get its screenshot in the spotlight.
const projects: Project[] = [
  { title: "REX", tags: ["AI agents"], object: climber, shot: rexShot, blurb: "autonomous revenue execution agent.", long: "follows up every failed payment: an email, a text, then a friendly call in your customer's own language, within rules you set.", live: "https://softknockai.vercel.app/", code: "https://github.com/SomehowLiving/rex.ai" },
  { title: "Voxie", tags: ["AI agents", "Open source"], object: phone, shot: voxieShot, blurb: "voice AI that runs the call.", long: "voice agents that speak your caller's language: listening, turn-taking, interruptions and the voice, in 17 languages.", live: "https://voxieai.vercel.app/", code: "https://github.com/SomehowLiving/Voxie" },
  { title: "voiceaiagents.io", tags: ["AI agents"], object: phone, blurb: "a directory of voice AI agents.", long: "find and compare voice AI agents for support, sales and booking, by pricing, features and alternatives. agents can read it too, through an API and an MCP server.", live: "https://www.voiceaiagents.io/" },
  { title: "ScreenMesh", tags: ["Open source"], object: laptop, shot: screenmeshShot, blurb: "local-first device mesh.", long: "move work between your devices without moving it through an app you don't trust. local-first, end-to-end encrypted.", live: "https://screenmesh.vercel.app/", code: "https://github.com/SomehowLiving/screenmesh" },
  { title: "Inscribe", tags: ["AI agents", "Open source"], object: code, shot: inscribeShot, blurb: "let agents operate any website.", long: "a browser extension and an agent-native workshop built on WebMCP: it uses a site's own declared tools when it has them, and infers capabilities when it doesn't, so an agent acts on meaning instead of pixels.", live: "https://studio-bay-omega.vercel.app/", code: "https://github.com/SomehowLiving/Inscribe" },
  { title: "Point", tags: ["AI agents"], object: cursor, blurb: "point at anything on screen, ask AI.", long: "a system-wide spatial context layer: press a shortcut, select anything visible on your screen, give an instruction, and get an answer or trigger an action — no screenshot, crop, upload, explain.", code: "https://github.com/nidhiprajapati-ops/point" },
  { title: "Consensa", tags: ["AI agents", "Web3"], object: headphones, shot: consensaShot, blurb: "three AIs, sealed and checked on-chain.", long: "one AI can lie. three independent signals commit blind, and two must agree on-chain before anything trades.", live: "https://consensa.vercel.app/", code: "https://github.com/SomehowLiving/consensa" },
  { title: "Acre", tags: ["Web3"], object: folder, shot: acreShot, blurb: "prove your income, reveal nothing.", long: "zero-knowledge attestations of earning capacity for gig workers. no raw financial data exposed, ever.", live: "https://acre-web-three.vercel.app/", code: "https://github.com/SomehowLiving/acre" },
  { title: "GiftAgent", tags: ["AI agents"], object: sparkles, shot: giftagentShot, blurb: "programmable care for family.", long: "AI-powered financial care agents that look after your family members, quietly and reliably.", live: "https://trygiftagent.vercel.app/", code: "https://github.com/SomehowLiving/gift-agent" },
  { title: "x402 builder kit", tags: ["Web3", "Open source"], object: code, shot: x402Shot, blurb: "agents that pay for APIs.", long: "from 402 to settlement: a starter kit for AI agents that pay for APIs with x402 on Algorand. no mocked payments.", live: "https://x402-kit-kappa.vercel.app", code: "https://github.com/SomehowLiving/x402-builder-kit" },
  { title: "Onkey", tags: ["Web3", "Open source"], object: cursor, shot: onkeyShot, blurb: "self-hosted web3 auth.", long: "self-hosted web3 authentication for everyone: email login with smart contract wallets, as an SDK.", live: "https://onkey-nextjs-demo.vercel.app", code: "https://github.com/SomehowLiving/onkey", npm: "https://www.npmjs.com/package/@onkey/sdk" },
  { title: "UsageLedger", tags: ["Open source"], object: keys, shot: usageledgerShot, blurb: "usage-based billing, reconciled.", long: "ingests raw product-usage events, prevents duplicate billing, meters usage, calculates charges and reconciles every one.", live: "https://usage-ledger.vercel.app", code: "https://github.com/SomehowLiving/usageLedger" },
  { title: "ClinaraAI", tags: ["AI agents"], object: brain, shot: clinaraShot, blurb: "clinical decision support, explained.", long: "screens for six diseases in one session, with explainable AI, imaging workflows and generated clinical summaries, so clinicians see the why, not just the score.", live: "https://clinaraai-eight.vercel.app", code: "https://github.com/SomehowLiving/clinara-ai" },
  { title: "Kairos", tags: ["Web3"], object: globe, blurb: "timing intelligence for polymarket.", long: "tells you when to enter a prediction market, not just what to bet on: timing signals for Polymarket.", code: "https://github.com/SomehowLiving/kairos-frontend" },
  { title: "Ward", tags: ["Web3"], object: cat, shot: wardShot, blurb: "make risky on-chain moves survivable.", long: "runs risky on-chain interactions inside disposable, loss-capped smart-wallet pockets, so even a malicious contract can only take what's in the pocket.", live: "https://ward-steel.vercel.app", code: "https://github.com/SomehowLiving/Ward" },
  { title: "Billing Migration Studio", tags: ["Open source"], object: books, shot: billingShot, blurb: "billing migrations at enterprise speed.", long: "validate, map and migrate billing data across Stripe, Chargebee and CSV exports, so SaaS teams can onboard customers without breaking their invoices.", live: "https://billing-migration-studio.vercel.app", code: "https://github.com/SomehowLiving/Billing-Migration-Studio" },
  { title: "SpyCart", tags: ["AI agents"], object: camera, blurb: "secret-shop your competitors.", long: "an AI agent that buys your competitor's product for you, walks their funnel, and tells you exactly how they sell.", code: "https://github.com/SomehowLiving/spycart" },
  { title: "Chaos-Drop", tags: ["Experiments"], object: console_, blurb: "a small experiment in chaos.", long: "a small experiment in controlled chaos.", live: "https://replit.com/@harshprajapatiy/Chaos-Drop", code: "https://github.com/SomehowLiving/Chaos-Drop" },
];

const filters = ["All", "AI agents", "Web3", "Open source", "Experiments"];

// A fixed scatter of stars, so the sky looks the same on server and client.
// (A proper hash, so the stars scatter instead of lining up in little rows.)
const hash = (n: number) => {
  const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};
const stars = Array.from({ length: 32 }, (_, i) => ({
  x: hash(i * 4 + 1) * 100,
  y: hash(i * 4 + 2) * 100,
  s: 1 + hash(i * 4 + 3) * 2,
  d: hash(i * 4 + 4) * 4,
}));

function Sky({ count = stars.length }: { count?: number }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.slice(0, count).map((st, i) => (
        <span key={i} className="animate-twinkle-rare absolute rounded-full bg-white" style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s, animationDelay: `${st.d * 2}s`, animationDuration: `${6 + st.d * 1.5}s` }} />
      ))}
    </div>
  );
}

// A little four-point sparkle, drawn like the doodles on the rest of the site.
function Spark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={cn("absolute h-5 w-5 text-white/80", className)}>
      <path d="M12 1 C13 9 15 11 23 12 C15 13 13 15 12 23 C11 15 9 13 1 12 C9 11 11 9 12 1Z" fill="currentColor" />
    </svg>
  );
}

function WorkPage() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = projects.map((p, i) => ({ p, i })).filter(({ p }) => filter === "All" || p.tags.includes(filter));

  useEffect(() => {
    window.scrollTo(0, 0);
    // the page around the work is space too, not paper
    const body = document.body.style.background;
    document.body.style.background = "#0b0b0d";
    return () => {
      document.body.style.background = body;
    };
  }, []);

  return (
    <main className="dark-page relative min-h-screen select-none overflow-hidden bg-[#0b0b0d] text-white">
      <ArrivalFade />
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
        <Link to="/" className="font-serif text-3xl font-medium">Nidhi</Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          <Link to="/" className="hover:text-white">brain</Link>
          <span className="text-white underline underline-offset-8">work</span>
          <a href="https://www.linkedin.com/in/nidhi-prajapati-5b4483248/" target="_blank" rel="noreferrer" className="hover:text-white">linkedin</a>
          <a href="mailto:nidhiyp05@gmail.com" className="hover:text-white">let's talk</a>
        </nav>
        <ClimbBackButton className="text-sm font-medium text-white/80 hover:text-white md:hidden">climb out ↑</ClimbBackButton>
      </header>

      {/* 8. arrival — you fell in. */}
      <section className="relative grid min-h-[100svh] place-items-center px-5">
        <Sky />
        <img src={earth} alt="" aria-hidden="true" draggable={false} className="pointer-events-none absolute bottom-0 right-0 w-[110vw] max-w-none translate-x-[8%] translate-y-[38%] md:w-[52vw] md:translate-x-[6%] md:translate-y-[30%] [mask-image:linear-gradient(to_top,black_60%,transparent)]" />
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M-20 300 C120 200 180 420 260 470 C340 520 300 640 420 680 C560 730 700 620 780 700 C860 780 900 860 1020 820" fill="none" stroke="white" strokeOpacity=".55" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        </svg>
        <img src={astronautFalling} alt="an astronaut drifting through space" draggable={false} className="animate-float-object absolute left-[6%] top-[14%] w-[38vw] max-w-[360px] md:left-[8%] md:top-[30%] md:w-[24vw]" />
        {/* the words sit up in the dark sky, clear of the earth */}
        <div className="absolute left-6 top-[44%] md:left-[36vw] md:top-[20vh]">
          <h1 className="font-serif text-[clamp(3.2rem,6.5vw,6.5rem)] leading-none">you fell in.</h1>
          <p className="mt-4 font-hand text-[clamp(1.3rem,1.9vw,1.8rem)] tracking-wide text-white/80">don't worry, it's nice down here.</p>
        </div>
        <p className="absolute bottom-[12%] left-[30%] hidden -rotate-6 font-hand text-xl leading-snug tracking-wide text-white/80 md:block">
          the projects<br />that happened when<br />"i wonder if…" turned<br />into "okay, let's build it."
        </p>
        <Spark className="left-[12%] top-[18%]" />
        <Spark className="right-[30%] top-[24%] h-4 w-4" />
        <Spark className="bottom-[26%] right-[44%] h-3 w-3" />
        <Spark className="left-[46%] top-[70%] h-4 w-4" />
      </section>

      {/* 9. all work. */}
      <section className="relative mx-auto max-w-[1300px] px-5 pb-28 pt-24 sm:px-8">
        <Sky />
        <div className="relative flex items-end gap-4">
          <h2 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none">all work.</h2>
          <svg aria-hidden="true" viewBox="0 0 60 60" className="animate-spin-slow mb-3 h-14 w-14 text-white/70">
            <path d="M30 30 m0 -2 a2 2 0 1 1 -2 3 a6 6 0 1 1 9 -6 a11 11 0 1 1 -18 6 a17 17 0 1 1 28 -12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="relative mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn("rounded-full border px-4 py-2 text-sm transition-colors", filter === f ? "border-white bg-white text-[#0b0b0d]" : "border-white/20 text-white/80 hover:border-white/60")}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map(({ p, i }) => (
            <button
              key={p.title}
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.07]"
            >
              <Thumb p={p} />
              <div className="min-w-0 p-4 pr-10 sm:p-5 sm:pr-10">
                <p className="text-lg font-medium">{p.title}</p>
                <p className="mt-1 text-sm leading-snug text-white/60">{p.blurb}</p>
              </div>
              <ArrowUpRight className="absolute bottom-5 right-4 h-4 w-4 text-white/50 transition-colors group-hover:text-white" />
            </button>
          ))}
        </div>
      </section>

      <footer className="relative mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-6 border-t border-white/10 px-5 py-10 sm:px-8">
        <p className="font-serif text-3xl">
          still more on <a href="https://github.com/SomehowLiving" target="_blank" rel="noreferrer" className="italic underline-offset-8 hover:underline">github ↗</a>
        </p>
        <ClimbBackButton className="rounded-full border border-white/60 px-6 py-3 text-white transition-colors hover:bg-white hover:text-[#0b0b0d]">climb back out ↑</ClimbBackButton>
      </footer>

      {open !== null && <Spotlight index={open} onClose={() => setOpen(null)} onMove={(d) => setOpen((open + d + projects.length) % projects.length)} />}
    </main>
  );
}

// A project's picture: its site screenshot, or — if it has no page to show —
// its name over a loose hand-drawn thread.
function Thumb({ p, big = false }: { p: Project; big?: boolean }) {
  if (p.shot) {
    return <img src={p.shot} alt={`${p.title} website`} draggable={false} className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />;
  }
  return (
    <div className="relative grid aspect-[16/10] w-full place-items-center overflow-hidden bg-white/[0.03]">
      <svg aria-hidden="true" viewBox="0 0 200 125" className="absolute inset-0 h-full w-full text-white/15 transition-colors duration-500 group-hover:text-white/30">
        <path d="M-10 95 C40 15 70 120 100 60 C120 20 160 35 130 78 C110 105 70 70 110 52 C150 35 170 105 215 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className={cn("relative font-serif", big ? "text-6xl" : "text-3xl")}>{p.title}</span>
    </div>
  );
}

// 11. a project, up close.
function Spotlight({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (d: number) => void }) {
  const p = projects[index]!;
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", key);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.documentElement.style.overflow = "";
    };
  }, [onClose, onMove]);

  return (
    <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#0b0b0d]/95 backdrop-blur-sm" onClick={onClose}>
      <Sky count={0} />
      <div key={index} className="animate-reveal relative mx-auto grid min-h-full max-w-[1300px] items-center gap-10 px-5 py-24 sm:px-8 md:grid-cols-[1fr_1.1fr]" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-xs tracking-wide text-white/50">{String(index + 1).padStart(2, "0")} / {p.tags.join(" · ")}</p>
          <h3 className="mt-2 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none">{p.title}</h3>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">{p.long}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[#0b0b0d] transition-opacity hover:opacity-85">
                view project <ArrowRight className="h-4 w-4" />
              </a>
            )}
            {p.code && (
              <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 transition-colors hover:bg-white/10">
                code <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {p.npm && (
              <a href={p.npm} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 transition-colors hover:bg-white/10">
                npm <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">{t}</span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <Thumb p={p} big />
          </div>
          <Spark className="-right-2 -top-6" />
        </div>
      </div>
      <button onClick={onClose} aria-label="Close" className="fixed right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 sm:right-8 sm:top-7">
        <X className="h-5 w-5" />
      </button>
      <div className="fixed inset-x-0 bottom-6 flex justify-center gap-3" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => onMove(-1)} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10">← prev</button>
        <button onClick={() => onMove(1)} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10">next →</button>
      </div>
    </div>
  );
}
