import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button, Photo } from "./ui";
import { DashboardCard, TABS, type TabKey } from "./mocks";
import { Reveal, SectionTexture } from "./MotionLayer";
import HeroVortexBackground from "./HeroVortexBackground";
import { img } from "../data";
import { cn } from "../utils/cn";

const stats = [
  { n: "$1M+", l: "revenue driven for a single client in under 12 months" },
  { n: "350+", l: "engineers available on demand" },
  { n: "3", l: "dedicated specialist hubs" },
];

const tabImages: Record<TabKey, { src: string; alt: string }> = {
  campaigns: { src: img.perf, alt: "Team reviewing campaign performance and marketing results" },
  funnel: { src: img.hero, alt: "Marketing team discussing the customer journey around a conference table" },
  leads: { src: img.insightA, alt: "Team working on lead generation and customer outreach" },
  automation: { src: img.ai, alt: "Analyst working with marketing technology and automated workflows" },
  growth: { src: img.about, alt: "Team collaborating on a business growth strategy" },
};

export default function Hero() {
  const [tab, setTab] = useState<TabKey>("campaigns");

  return (
    <section id="home" className="relative overflow-hidden pt-14 md:pt-20">
      {/* Antigravity Hyperspace Radial Particle Vortex Background */}
      <HeroVortexBackground />

      <SectionTexture motif="orbits" side="center" />
      <div className="container-x relative z-10 text-center">
        <Reveal distance={12}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cream-border bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-charcoal">
            <span className="size-1.5 rounded-full bg-electric-cobalt" />
            Enterprise scale · Agency speed · Revenue focus
          </div>
        </Reveal>

        <h1 className="h-display mx-auto mt-5 sm:mt-7 max-w-[1080px] text-[30px] xs:text-[36px] sm:text-[58px] lg:text-[78px] leading-[1.08] sm:leading-[1.04]">
          Turn digital growth into <em>measurable business results.</em>
        </h1>

        <Reveal delay={0.28} distance={20}>
          <p className="mx-auto mt-4 sm:mt-7 max-w-[620px] text-[15px] sm:text-[18px] leading-[1.6] text-graphite/70">
            We design and build growth infrastructure that compounds — martech, performance marketing and brand
            creative, run by dedicated specialist teams.
          </p>
        </Reveal>

        <Reveal delay={0.38} distance={18}>
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" href="#contact" arrow className="w-full sm:w-auto">
              Talk to an expert
            </Button>
            <Button size="lg" variant="secondary" href="#contact" className="w-full sm:w-auto">
              Schedule a call
            </Button>
          </div>
          <p className="mt-3.5 sm:mt-4 text-[12.5px] sm:text-[13px] text-stone">Free consultation · No obligation</p>
        </Reveal>

        {/* credibility row: aligned 3-column layout */}
        <div className="mx-auto mt-8 sm:mt-11 max-w-[820px] rounded-2xl border border-cream-border/90 bg-white/70 p-3 sm:p-5 backdrop-blur-sm shadow-[0_4px_24px_rgba(12,23,84,0.04)]">
          <dl className="grid grid-cols-3 divide-x divide-cream-border text-center">
            {stats.map((s, i) => (
              <Reveal key={s.n} delay={0.47 + i * 0.08} distance={15} className="flex flex-col items-center justify-center px-1.5 xs:px-2.5 sm:px-6">
                <dt className="font-serif text-[24px] xs:text-[30px] sm:text-[40px] leading-none tracking-[-0.03em] text-ink-navy">{s.n}</dt>
                <dd className="mt-1 sm:mt-2 text-[10px] xs:text-[11.5px] sm:text-[12.5px] leading-[1.3] text-graphite/70 max-w-[190px]">{s.l}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* Framed product visual */}
      <div className="container-x relative z-10 mt-10 sm:mt-14">
        <div
          data-rv-zoom
          className="relative rounded-[22px] sm:rounded-[28px] bg-[linear-gradient(135deg,#ffdcd0_0%,#fff0e8_42%,#f6eee7_100%)] p-2.5 sm:p-4 md:p-5"
        >
          {/* tab bar */}
          <div className="flex justify-center pb-3 sm:pb-4 pt-1 sm:pt-2">
            <div
              role="tablist"
              aria-label="Growth views"
              className="hide-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/80 bg-white/70 p-1 backdrop-blur"
            >
              {TABS.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={tab === t.key}
                  onClick={() => setTab(t.key)}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.12em] transition-colors",
                    tab === t.key ? "text-white" : "text-graphite/60 hover:text-charcoal",
                  )}
                >
                  {tab === t.key && (
                    <span className="absolute inset-0 rounded-full bg-ink-navy" aria-hidden="true" />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* visual layout: on mobile, photo on top + compact dashboard below; on desktop, dashboard floating on photo */}
          <div className="relative">
            {/* photo */}
            <div className="relative h-[180px] xs:h-[220px] sm:h-[280px] md:h-auto md:aspect-[16/10] lg:aspect-[2/1] overflow-hidden rounded-xl sm:rounded-2xl border-2 sm:border-[4px] md:border-[6px] border-white bg-lavender-mist">
              <div data-hero-parallax className="absolute -inset-y-[32px] inset-x-0 md:-inset-y-[72px]">
                <Photo
                  key={tab}
                  src={tabImages[tab].src}
                  alt={tabImages[tab].alt}
                  className="size-full object-[50%_40%]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/35 via-transparent to-ink-navy/5" />

              <div className="absolute left-3 top-3 sm:left-4 sm:top-4 items-center gap-1.5 sm:gap-2 rounded-full bg-white/95 py-1 pl-1.5 pr-3 text-[11px] sm:text-[12px] font-medium text-ink-navy inline-flex md:left-6 md:top-6 md:py-1.5 md:pl-2 md:pr-4">
                <span className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-electric-cobalt text-white">
                  <Sparkles className="size-3 sm:size-3.5" />
                </span>
                Strategy, tech and creative
              </div>
            </div>

            {/* dashboard card: on mobile stacked cleanly below photo; on desktop floating absolute */}
            <div
              key={tab}
              className="mt-2.5 sm:mt-3 md:mt-0 md:absolute md:bottom-4 md:right-4 lg:bottom-6 lg:right-6 md:w-[320px] lg:w-[350px]"
            >
              <DashboardCard tab={tab} compact className="shadow-[0_8px_32px_rgba(12,23,84,0.12)] border-white/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
