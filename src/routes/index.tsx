import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Link2,
  Droplet,
  LineChart,
  Users,
  Star,
  Zap,
  Crosshair,
  LockKeyhole,
  ShieldCheck,
  Quote,
  Menu,
} from "lucide-react";
import laptop from "@/assets/laptop2.png";
import logo from "@/assets/logo.png";
import config from "../../config.json";

const { copy } = config;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grinddin Pro — See the Bigger Picture" },
      { name: "description", content: "Grinddin Pro: clean real-time view of market condition, session context, volatility, and trend strength." },
      { property: "og:title", content: "Grinddin Pro" },
      { property: "og:description", content: "Market Awareness Indicator for serious traders." },
    ],
  }),
  component: Index,
});

const heroFeatures = [
  { Icon: Link2,     title: "Plug & Play",    desc: "Add to your chart and go." },
  { Icon: Droplet,   title: "Lightweight",     desc: "Optimized for performance." },
  { Icon: LineChart, title: "All Markets",     desc: "Forex, Indices, Commodities, Crypto." },
  { Icon: Users,     title: "For All Traders", desc: "New traders & pros welcome." },
];

const bottomFeatures = [
  { Icon: Zap,         title: "Real-time Market Context", desc: "1D & 4H bias, session, ADR, volatility & trend strength." },
  { Icon: Crosshair,   title: "Make Better Decisions",    desc: "See the bigger picture before you take a trade." },
  { Icon: LockKeyhole, title: "No Signals. No Noise.",    desc: "Just clean information that helps you focus." },
];

const testimonials = [
  { initial: "D", name: "Daniel K.",  country: "United States", code: "US", text: "Finally an indicator that shows the market clearly without clutter. Total game changer!" },
  { initial: "L", name: "Luca M.",    country: "Italy",         code: "IT", text: "The session and trend insights help me stay in the right trades. Love the simplicity." },
  { initial: "R", name: "Rajesh P.",  country: "India",         code: "IN", text: "Clean, powerful, and easy to read. This indicator improved my consistency a lot." },
  { initial: "M", name: "Mei L.",     country: "Singapore",     code: "SG", text: "Perfect for both new and experienced traders. Everything in one view!" },
  { initial: "T", name: "Thabo M.",   country: "South Africa",  code: "ZA", text: "Helps me avoid bad sessions and focus only when the market is right. Great tool!" },
];

function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 md:px-12 md:py-5 border-b border-gray-100">
        {/* Logo */}
        <img src={logo} alt="Grinddin Pro" className="h-8 w-auto md:h-9" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {["Features", "Pricing", "Reviews", "FAQ"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/checkout"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
        >
          Get Access Now <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </header>

      {/* Mobile-only CTA button row */}
      <div className="md:hidden px-6 pt-5 pb-2 flex justify-center">
        <a
          href="/checkout"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
        >
          Get Access Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl overflow-hidden">

        {/* Desktop 2-column grid */}
        <div className="lg:grid lg:items-center lg:grid-cols-[460px_1fr]">

          {/* ── Column 1: all left content ── */}
          <div>
            {/* Badge + Heading + Description (shared mobile & desktop) */}
            <div className="px-6 pt-5 pb-0 md:px-12 md:pt-8 text-center lg:text-left">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-primary uppercase">
                Market Awareness Indicator
              </span>
              <h1 className="mt-5 leading-[1.08] tracking-normal">
                <span className="block text-[2.5rem] font-[800] md:text-[3.25rem]">SEE THE</span>
                <span className="block text-[2rem] font-[700] text-primary md:text-[2.6rem]">BIGGER PICTURE.</span>
                <span className="block text-[1.5rem] font-[600] md:text-[1.9rem] whitespace-nowrap">BEFORE YOU TAKE A TRADE.</span>
              </h1>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground mx-auto max-w-sm lg:mx-0">
                {copy.subheadline}
              </p>
            </div>

            {/* Desktop-only feature list (inside left column) */}
            <ul className="hidden lg:flex flex-col gap-5 px-12 pt-8 pb-10">
              {heroFeatures.map(({ Icon, title, desc }) => (
                <li key={title} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{title}</div>
                    <div className="text-sm text-muted-foreground">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 2: desktop laptop (hidden on mobile) ── */}
          <div className="hidden lg:flex items-center justify-end h-full">
            <img
              src={laptop}
              alt="Grinddin Pro on chart"
              className="w-[125%] object-contain"
            />
          </div>

        </div>

        {/* Mobile-only: laptop then feature list (outside the grid) */}
        <div className="lg:hidden">
          <div className="px-4 pt-6 pb-2">
            <img src={laptop} alt="Grinddin Pro on chart" className="w-full object-contain" />
          </div>
          <ul className="px-6 pt-4 pb-8 space-y-5">
            {heroFeatures.map(({ Icon, title, desc }) => (
              <li key={title} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold">{title}</div>
                  <div className="text-sm text-muted-foreground">{desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* ── Stats bar ──────────────────────────────────────────── */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-screen-xl px-6 py-7 md:px-12 md:py-8">

          {/* Mobile: stars centered, then 1000+ & Secure side by side */}
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-14">
            {/* Stars */}
            <div className="flex flex-col items-center gap-1 lg:items-start">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Trusted by traders worldwide</span>
            </div>

            {/* Active traders + Secure: side-by-side on mobile too */}
            <div className="flex items-center gap-8 lg:gap-14">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold">1000+</div>
                  <div className="text-xs text-muted-foreground">Active traders</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold">Secure</div>
                  <div className="text-xs text-muted-foreground">Safe &amp; encrypted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom 3-column features ───────────────────────────── */}
      <section id="features" className="border-t border-gray-100">
        <div className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-12">
          <div className="rounded-2xl border border-gray-100 bg-gray-50">
            <div className="grid divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {bottomFeatures.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 px-6 py-6 md:px-8 md:py-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{title}</div>
                    <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section id="reviews" className="border-t border-gray-100">
        <div className="mx-auto max-w-screen-xl px-6 py-10 md:px-12 md:py-12">
          <div className="text-center text-xs font-bold tracking-[0.2em] text-primary uppercase mb-8">
            What traders are saying
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-xs font-bold">
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.country} <span className="ml-0.5 font-semibold">{t.code}</span>
                      </div>
                    </div>
                  </div>
                  <Quote className="h-4 w-4 rotate-180 text-muted-foreground/40" />
                </div>
                <div className="mt-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-screen-xl px-6 py-6 md:px-12 text-center text-sm text-muted-foreground">
          © 2024 Grinddin Pro. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
