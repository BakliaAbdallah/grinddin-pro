import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Sun,
  Shield,
  Zap,
  Lock,
  CheckCircle2,
  CreditCard,
  RefreshCw,
  BarChart2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import chart from "@/assets/chart.png";
import config from "../../config.json";

// Derived config shortcuts — edit config.json to change these values
const { productName, pricing, copy, redirectUrl } = config;
const price = `$${pricing.oneTime.toFixed(2)}`;

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: `Get Access — ${productName}` },
      { name: "description", content: copy.subheadline },
    ],
  }),
  component: Checkout,
});

const countries = [
  "United States","United Kingdom","Canada","Australia","Germany","France","Italy","Spain",
  "Netherlands","Sweden","Norway","Denmark","Switzerland","Japan","Singapore","India",
  "Brazil","Mexico","South Africa","Nigeria","Ghana","Kenya","UAE","Saudi Arabia","Other",
];

function Checkout() {
  const [method, setMethod] = useState<"card" | "crypto">("card");

  return (
    <div className="min-h-screen bg-white font-sans text-foreground text-[14px]">

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <img src={logo} alt="Grinddin Pro" className="h-8 w-auto" />
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Sun className="h-4 w-4 text-gray-400" />
          </button>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-6 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Get Access</p>
        <h1 className="mt-3 text-[2.25rem] md:text-[3rem] font-[800] leading-[1.15] text-foreground">
          Your Edge in the Market.<br />
          One Indicator.{" "}
          <span className="text-primary">Total Clarity.</span>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Unlock the full power of the Grinddin Pro Market Awareness Indicator<br className="hidden md:block" />
          and see the bigger picture before every move.
        </p>
      </section>

      {/* Chart image */}
      <div className="mx-auto max-w-5xl px-6 pb-10">
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
          <img src={chart} alt="Grinddin Pro indicator on chart" className="w-full object-cover" />
        </div>
      </div>

      {/* ── Form + Payment ─────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT COLUMN ─ Access Details */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">Your Access Details</p>
            <p className="mt-0.5 text-sm text-muted-foreground mb-6">Fill in your information to get started</p>

            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1.5">Email Address</label>
                <input type="email" placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition" />
              </div>

              {/* TradingView */}
              <div>
                <label className="block text-sm font-medium mb-1.5">TradingView Username</label>
                <input type="text" placeholder="Enter your TradingView username"
                  className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition" />
                <p className="mt-1.5 text-xs text-muted-foreground">This is required for us to invite you to the private indicator.</p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name</label>
                <input type="text" placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition" />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Country <span className="font-normal text-muted-foreground">(Optional)</span>
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition bg-white pr-8">
                    <option value="">Select your country</option>
                    {countries.map(c => <option key={c}>{c}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  WhatsApp Number <span className="font-normal text-muted-foreground">(Optional)</span>
                </label>
                <input type="tel" placeholder="e.g. +1 234 567 8900"
                  className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition" />
                <p className="mt-1.5 text-xs text-muted-foreground">For important updates and support.</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-start gap-6">
              {[
                { Icon: Shield, title: "Secure Payment",  desc: "Your payment is 100% secure." },
                { Icon: Zap,    title: "Instant Access",  desc: "Get access within minutes." },
                { Icon: Lock,   title: "Private & Safe",  desc: "Your data is protected." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center gap-1.5 flex-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary/25 bg-primary/5">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-[11px] font-bold leading-tight">{title}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN ─ Payment */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">Choose Your Access Method</p>
            <p className="mt-0.5 text-sm text-muted-foreground mb-5">One-time payment. No monthly fees.</p>

            {/* Pay with Card */}
            <div
              onClick={() => setMethod("card")}
              className={`rounded-2xl border-2 p-5 cursor-pointer mb-4 transition-all ${method === "card" ? "border-primary/60 bg-white" : "border-gray-100 bg-white"}`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2.5">
                  <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${method === "card" ? "border-primary" : "border-gray-300"}`}>
                    {method === "card" && <div className="h-2 w-2 rounded-full bg-primary" />}
                  </div>
                  <span className="font-semibold text-sm">Pay with Card (Flatterwave)</span>
                </div>
                <span className="text-[10px] font-bold bg-primary text-white px-2.5 py-0.5 rounded-full tracking-wide">Recommended</span>
              </div>

              <p className="text-xs text-muted-foreground ml-6.5 mb-3 ml-[26px]">
                Pay securely with your debit/credit card, bank transfer and more.
              </p>

              {/* Card logos + price */}
              <div className="flex items-center justify-between ml-[26px] mb-3">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] font-extrabold text-blue-700 border border-gray-200 rounded px-1.5 py-0.5">VISA</span>
                  <span className="text-[11px] font-bold text-red-500 border border-gray-200 rounded px-1.5 py-0.5">MC</span>
                  <span className="text-[11px] font-bold text-green-600 border border-gray-200 rounded px-1.5 py-0.5">Verve</span>
                  <span className="text-[11px] border border-gray-200 rounded px-1.5 py-0.5">🏦</span>
                  <span className="text-[11px] text-muted-foreground">and more</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black leading-none">{price}</div>
                  <div className="text-[10px] text-muted-foreground">{pricing.label}</div>
                </div>
              </div>

              {/* Button */}
              <a
                href={redirectUrl}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white hover:bg-primary/90 transition"
              >
                <CreditCard className="h-4 w-4" />
                Pay with Card
              </a>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">🔒 Secured by Flutterwave</p>
            </div>

            {/* Pay with Crypto */}
            <div
              onClick={() => setMethod("crypto")}
              className={`rounded-2xl border-2 p-5 cursor-pointer mb-4 transition-all ${method === "crypto" ? "border-primary/60 bg-white" : "border-gray-100 bg-white"}`}
            >
              <div className="flex items-center gap-2.5 mb-1">
                <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${method === "crypto" ? "border-primary" : "border-gray-300"}`}>
                  {method === "crypto" && <div className="h-2 w-2 rounded-full bg-primary" />}
                </div>
                <span className="font-semibold text-sm">Pay with Crypto</span>
              </div>

              <p className="text-xs text-muted-foreground ml-[26px] mb-3">
                Pay using USDT, BTC, ETH and more.
              </p>

              <div className="flex items-center justify-between ml-[26px] mb-3">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] font-bold text-teal-600 border border-gray-200 rounded px-1.5 py-0.5">₮ USDT</span>
                  <span className="text-[11px] font-bold text-orange-500 border border-gray-200 rounded px-1.5 py-0.5">₿ BTC</span>
                  <span className="text-[11px] font-bold text-blue-500 border border-gray-200 rounded px-1.5 py-0.5">Ξ ETH</span>
                  <span className="text-[11px] border border-gray-200 rounded px-1.5 py-0.5">◎</span>
                  <span className="text-[11px] text-muted-foreground">and more</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black leading-none">{price}</div>
                  <div className="text-[10px] text-muted-foreground">{pricing.label}</div>
                </div>
              </div>

              <a
                href={redirectUrl}
                className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-primary py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition"
              >
                <CreditCard className="h-4 w-4" />
                Pay with Crypto
              </a>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">🔒 Secure crypto payment via trusted gateway</p>
            </div>

            {/* What happens next */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-5">
              <p className="text-sm font-bold mb-4">What happens next?</p>
              <ul className="space-y-3">
                {[
                  { step: "1", label: "Pay",             desc: "Complete your secure one-time payment." },
                  { step: "2", label: "Confirm",         desc: "We verify your details within minutes." },
                  { step: "3", label: "Wait for Invite", desc: "You'll receive a TradingView invite to the private indicator." },
                  { step: "4", label: "Start Using",     desc: "Add Grinddin Pro to your chart and trade smarter." },
                ].map(({ step, label, desc }) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-[10px] font-bold mt-0.5">{step}</span>
                    <span className="text-sm text-foreground/80"><span className="font-semibold">{label}</span> — {desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer strip ───────────────────────────────────────── */}
      <footer className="bg-primary/5 border-t border-primary/10 mt-4">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Brand */}
            <div className="flex items-start gap-4 max-w-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-extrabold text-sm leading-snug">Built for Traders. Backed by Clarity.</div>
                <p className="mt-1 text-[12px] text-muted-foreground leading-relaxed">
                  This is not a signal service. Grinddin Pro is a market awareness tool that helps you read the market environment with confidence.
                </p>
              </div>
            </div>

            {/* Feature icons */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4">
              {[
                { Icon: Shield,    title: "No Buy / Sell Signals", desc: "You stay in control." },
                { Icon: RefreshCw, title: "No Monthly Fees",       desc: "One-time payment." },
                { Icon: BarChart2, title: "Works on All Markets",  desc: "Forex, Indices, Crypto, Commodities." },
                { Icon: TrendingUp,title: "Regular Updates",       desc: "Constant improvements." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center gap-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary/25 bg-primary/8">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-[11px] font-bold leading-tight">{title}</div>
                  <div className="text-[10px] text-muted-foreground">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="mt-6 pt-5 border-t border-primary/10 text-center text-[11px] text-muted-foreground">
            <p>
              🔒 By completing your purchase, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
            <p className="mt-1">© 2024 Grinddin Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
