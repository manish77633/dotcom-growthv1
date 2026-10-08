import { Cpu, Target, TrendingUp } from "lucide-react";
import { Button, Photo, TextLink } from "./ui";
import { Reveal, SectionTexture } from "./MotionLayer";
import { img } from "../data";

const pillars = [
  {
    icon: Target,
    title: "Data-driven strategy",
    text: "Revenue KPIs and attribution set before a single campaign goes live.",
  },
  {
    icon: Cpu,
    title: "Technology & creativity",
    text: "Martech engineers and brand creatives working off the same brief.",
  },
  {
    icon: TrendingUp,
    title: "Long-term growth",
    text: "Infrastructure that compounds, instead of campaigns that reset every quarter.",
  },
];

const hubs = [
  "Martech & Digital Transformation",
  "Growth & Performance Marketing",
  "Brand & Creative Production",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <SectionTexture motif="waves" side="right" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* image */}
        <Reveal direction="left" className="relative mb-10 sm:mb-8 lg:col-span-7 lg:mb-0">
          <div data-rv-zoom className="relative aspect-[5/4.4] overflow-hidden rounded-[24px] border border-cream-border">
            <div className="absolute -inset-y-8 inset-x-0">
              <Photo
                src={img.about}
                alt="Strategists and marketers collaborating in a modern office"
                className="size-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/50 via-transparent to-transparent" />
          </div>
          <div data-reveal-card="soft" className="trace-border absolute -bottom-6 left-3 right-3 rounded-2xl border border-cream-border bg-white p-4.5 sm:p-5 shadow-[0_4px_24px_rgba(12,23,84,0.08)] sm:left-8 sm:right-auto sm:w-[340px]">
            <div className="eyebrow text-[10.5px] sm:text-[11px]">Three specialist hubs</div>
            <ul className="mt-2.5 sm:mt-3 space-y-2 sm:space-y-2.5">
              {hubs.map((h, i) => (
                <li key={h} className="flex items-center gap-2.5 sm:gap-3 text-[13px] sm:text-[14px] font-medium text-charcoal">
                  <span className="flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-full bg-lavender-mist text-[10.5px] sm:text-[11px] font-bold text-ink-navy">
                    {i + 1}
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal direction="right" delay={0.12} className="pt-2 sm:pt-6 lg:col-span-5 lg:pt-0">
          <div className="eyebrow">About DotCom Growth</div>
          <h2 className="h-display mt-4 sm:mt-5 text-[28px] xs:text-[32px] sm:text-[44px] leading-[1.12] sm:leading-[1.04]">
            Strategy, creativity, technology and performance — <em>one growth partner.</em>
          </h2>
          <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] text-graphite/70">
            We operate without generalists. Each division is staffed by veterans in a single lane, so you get deep
            capability without dilution — and one team accountable for the number that matters: revenue.
          </p>
          <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] text-graphite/60">Founded in 2020 · Based in Jaipur, India</p>

          <ul className="mt-9 space-y-5 border-t border-cream-border pt-8">
            {pillars.map((p) => (
              <li key={p.title} className="flex items-start gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-cream-border bg-white text-electric-cobalt">
                  <p.icon className="size-[18px]" strokeWidth={1.8} />
                </span>
                <div>
                  <div className="h-abc text-[19px] text-charcoal">{p.title}</div>
                  <p className="mt-1 text-[15px] leading-[1.55] text-graphite/70">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button href="#contact" arrow>
              Talk to an expert
            </Button>
            <TextLink href="#services">Explore our capabilities</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
