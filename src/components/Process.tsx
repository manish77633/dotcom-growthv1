import { Compass, Rocket, Search, SlidersHorizontal, TrendingUp, Wrench } from "lucide-react";
import { SectionHead, TextLink } from "./ui";
import { SectionTexture } from "./MotionLayer";

const steps = [
  {
    icon: Search,
    title: "Discover",
    text: "Martech stack audit, funnel mapping and the revenue KPIs that define success.",
  },
  {
    icon: Compass,
    title: "Strategy",
    text: "Positioning, channel mix and an attribution model tied to P&L, not vanity metrics.",
  },
  {
    icon: Wrench,
    title: "Build",
    text: "CRM, automation and analytics infrastructure — infrastructure first, campaigns second.",
  },
  {
    icon: Rocket,
    title: "Activate",
    text: "Paid, SEO, content and lifecycle programs launched by dedicated specialist teams.",
  },
  {
    icon: SlidersHorizontal,
    title: "Optimize",
    text: "Conversion testing, creative iteration and budget shifts guided by pipeline data.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    text: "Double down on what compounds; add engineering, AI and new markets on enterprise-agile cadence.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 md:py-16">
      <SectionTexture motif="waves" side="right" />
      <div className="container-x">
        <SectionHead
          eyebrow="The DotCom Growth system"
          title={
            <>
              Six steps from first audit to <em>compounding</em> growth
            </>
          }
          action={<TextLink href="#contact">Start with a discovery call</TextLink>}
        />

        <div data-process-track className="mt-14">
          <div className="mb-4 h-px w-full origin-left bg-cream-border" aria-hidden="true">
            <div data-process-fill className="h-full origin-left bg-electric-cobalt" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-cream-border bg-cream-border">
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-6">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  data-reveal-card="soft"
                  className="process-step group relative flex flex-col bg-white p-5 sm:p-7 transition-colors hover:bg-[#f4f5fd]"
                >
                  <div className="flex items-center justify-between">
                    <span className="step-number flex size-7 sm:size-8 items-center justify-center rounded-full bg-electric-cobalt text-[11.5px] sm:text-[12px] font-bold text-white">
                      {i + 1}
                    </span>
                    <s.icon className="step-icon size-4.5 sm:size-5 text-ink-navy" strokeWidth={1.7} />
                  </div>
                  <h3 className="h-abc mt-5 sm:mt-10 text-[20px] sm:text-[24px] text-charcoal">{s.title}</h3>
                  <p className="mt-2 sm:mt-3 text-[13.5px] sm:text-[14.5px] leading-[1.55] text-graphite/70">{s.text}</p>
                  {i < steps.length - 1 && (
                    <svg
                      className="process-connector absolute -right-3 top-[22px] z-10 hidden text-smoke lg:block"
                      width="26"
                      height="14"
                      viewBox="0 0 26 14"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M1 8 C 7 1, 13 1, 23 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M18 3.5 L23.5 7 L18.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
