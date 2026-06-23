import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Users,
  Star,
  Zap,
  Crosshair,
  LockKeyhole,
  ShieldCheck,
  Quote,
  ChevronDown,
  ChevronUp,
  Clock,
  BarChart2,
  TrendingUp,
  Newspaper,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import laptop from "@/assets/laptop2.png";
import logo from "@/assets/logo.png";
import config from "../../config.json";

const { copy, pricing } = config;
const price = `$${pricing.oneTime.toFixed(2)}`;

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
  {
    Icon: Eye,
    title: "1D & 4H Bias",
    desc: "See higher timeframe direction at a glance.",
  },
  {
    Icon: Clock,
    title: "Session Awareness",
    desc: "Know when London and New York sessions are active.",
  },
  {
    Icon: BarChart2,
    title: "Volatility & Risk",
    desc: "Track session ADR and volume to understand market energy.",
  },
  {
    Icon: TrendingUp,
    title: "Trend Strength & Movement",
    desc: "Understand trend direction and current market movement.",
  },
  {
    Icon: Newspaper,
    title: "News Events",
    desc: "Stay aware of high-impact events that can move the market.",
  },
];

const bottomFeatures = [
  { Icon: Zap,         title: "Real-time Market Context", desc: "1D & 4H bias, session, ADR, volatility & trend strength." },
  { Icon: Crosshair,   title: "Make Better Decisions",    desc: "See the bigger picture before you take a trade." },
  { Icon: LockKeyhole, title: "No Signals. No Noise.",    desc: "Just clean information that helps you focus." },
];

const testimonials = [
  { initial: "D", name: "Daniel K.",  country: "United States", code: "US", text: "Finally an indicator that shows the market clearly without clutter. Total game changer!", img: null },
  { initial: "L", name: "Luca M.",    country: "Italy",         code: "IT", text: "The session and trend insights help me stay in the right trades. Love the simplicity.", img: null },
  { initial: "R", name: "Rajesh P.",  country: "India",         code: "IN", text: "Clean, powerful, and easy to read. This indicator improved my consistency a lot.", img: null },
  { initial: "M", name: "Mei L.",     country: "Singapore",     code: "SG", text: "Perfect for both new and experienced traders. Everything in one view!", img: null },
  { initial: "T", name: "Thabo M.",   country: "South Africa",  code: "ZA", text: "Helps me avoid bad sessions and focus only when the market is right. Great tool!", img: null },
  // Additional slots — set img to a URL to show a photo, or leave null for initial avatar
  { initial: "A", name: "Amara S.",   country: "Ghana",         code: "GH", text: "I was sceptical at first but the bias panel alone is worth every penny. Highly recommend.", img: null },
  { initial: "J", name: "James O.",   country: "United Kingdom", code: "GB", text: "News events panel kept me out of two terrible trades last week. This is essential.", img: null },
  { initial: "C", name: "Carlos V.",  country: "Brazil",        code: "BR", text: "The ADR and volatility section changed how I size my positions. No more guessing the range.", img: null },
];

const faqItems = [
  {
    q: "Do I need a paid TradingView subscription to use Grinddin Pro?",
    a: "No, Grinddin Pro works on TradingView's free plan. You will receive a private invite to the indicator after payment, which gives you full access regardless of your TradingView subscription tier.",
  },
  {
    q: "Does this indicator provide automated Buy/Sell signals?",
    a: "No. Grinddin Pro is a market awareness tool, not a signal service. It gives you clean, real-time context — bias, sessions, volatility, trend strength, and news events — so you can make better-informed decisions yourself.",
  },
  {
    q: "Who is it for?",
    a: "Grinddin Pro is designed for retail traders of all experience levels — from those just getting started who want a clear picture of market conditions, to experienced traders looking for a cleaner, unified dashboard.",
  },
  {
    q: "What markets does it support?",
    a: "Grinddin Pro works across Forex, Indices, Commodities, and Crypto — any market available on TradingView.",
  },
  {
    q: "How does access work after payment?",
    a: "After your payment is confirmed, we manually verify your details and send a TradingView invite to the private indicator script. This typically takes a few minutes during business hours.",
  },
  {
    q: "I'm new to trading — can I still get support?",
    a: "Absolutely. We welcome traders at all levels. If you have questions or need help getting set up, reach out to our support team and we'll guide you through everything.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold leading-snug">{q}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-primary" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 md:px-12 md:py-5 border-b border-gray-100">
        {/* Logo */}
        <img src={logo} alt="Grinddin Pro" className="h-8 w-auto md:h-9" />

        {/* Desktop nav — no hamburger, no separate FAQ page */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Features", href: "#features" },
            { label: "Pricing",  href: "#pricing" },
            { label: "Reviews",  href: "#reviews" },
            { label: "FAQ",      href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              {label}
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

        {/* Mobile: show nav links inline (no hamburger) */}
        <nav className="flex md:hidden items-center gap-5">
          {[
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ",     href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs font-semibold text-foreground/60 hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
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
            {/* Badge + Heading + Description */}
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

            {/* Desktop-only indicator feature list */}
            <ul className="hidden lg:flex flex-col gap-4 px-12 pt-8 pb-10">
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

          {/* ── Column 2: desktop laptop ── */}
          <div className="hidden lg:flex items-center justify-end h-full">
            <img
              src={laptop}
              alt="Grinddin Pro on chart"
              className="w-[125%] object-contain"
            />
          </div>

        </div>

        {/* Mobile-only: laptop then feature list */}
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

      {/* ── Pricing ─────────────────────────────────────────────── */}
      <section id="pricing" className="border-t border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-screen-xl px-6 py-14 md:px-12 md:py-20">

          {/* Two-column layout */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

            {/* LEFT — headline + what's included */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">Pricing</p>
              <h2 className="text-3xl font-[800] md:text-[2.75rem] leading-[1.1]">One payment.<br />Full clarity, forever.</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
                No monthly fees. No subscriptions. No surprises. Get access once and use Grinddin Pro for as long as you trade.
              </p>

              {/* Social proof strip */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm font-semibold">Trusted by 1,000+ traders</span>
                <span className="text-xs text-muted-foreground">across 30+ countries</span>
              </div>

              {/* What's included */}
              <div className="mt-8">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">What's included</p>
                <ul className="space-y-3">
                  {[
                    "1D & 4H Bias panel",
                    "London & New York session awareness",
                    "Volatility & ADR tracking",
                    "Trend strength & direction",
                    "High-impact news events",
                    "Works on Forex, Indices, Crypto & Commodities",
                    "Private TradingView indicator access",
                    "No signals — you stay in control",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — price card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl border-2 border-primary/20 bg-white shadow-2xl shadow-primary/10 overflow-hidden">
                {/* Header band */}
                <div className="bg-primary px-8 pt-8 pb-6 text-white text-center">
                  <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase mb-4">
                    {pricing.label}
                  </span>
                  <div className="text-[4rem] font-[900] leading-none">{price}</div>
                  <p className="mt-2 text-xs opacity-70">One-time · No recurring fees</p>
                </div>

                {/* Card body */}
                <div className="px-8 py-7">
                  <a
                    href="/checkout"
                    id="pricing-cta"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
                  >
                    Get Access Now <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    🔒 Secure checkout · Access delivered within minutes
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-5 space-y-3">
                    {[
                      { icon: "⚡", text: "Instant access after payment" },
                      { icon: "🔒", text: "Safe & encrypted checkout" },
                      { icon: "📊", text: "Works on TradingView free plan" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-center gap-2.5">
                        <span className="text-base leading-none">{icon}</span>
                        <span className="text-xs text-muted-foreground">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar: image if provided, else initial */}
                    {t.img ? (
                      <img
                        src={t.img}
                        alt={t.name}
                        className="h-9 w-9 rounded-lg object-cover border border-gray-200"
                      />
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-xs font-bold bg-white">
                        {t.initial}
                      </div>
                    )}
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

          {/* CTA after reviews */}
          <div className="mt-10 text-center">
            <a
              href="/checkout"
              id="reviews-cta"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
            >
              Join Them — Get Access Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section id="faq" className="border-t border-gray-100">
        <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-[800] md:text-4xl">Common Questions</h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
              Everything you need to know before you get started.
            </p>
          </div>

          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-gray-50 px-6 md:px-8">
            {faqItems.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-4">Still have questions? We're happy to help.</p>
            <a
              href="/checkout"
              id="faq-cta"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
            >
              Get Access Now <ArrowRight className="h-4 w-4" />
            </a>
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
