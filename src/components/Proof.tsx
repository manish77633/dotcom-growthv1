import { SectionHead, Tag } from "./ui";
import { SectionTexture } from "./MotionLayer";

const stats = [
  {
    n: "$1M+",
    label: "Revenue growth",
    text: "Driven for a single client in under 12 months.",
  },
  {
    n: "100K+",
    label: "Audience scale",
    text: "Built completely from scratch for a mid-market brand.",
  },
  {
    n: "350+",
    label: "On-demand talent",
    text: "Engineers available for custom software and transformation.",
  },
  {
    n: "3",
    label: "Specialist hubs",
    text: "Dedicated teams focused on tech, creative and performance.",
  },
];

const vanity = ["Impressions", "Likes", "Reach"];
const outcome = ["P&L contribution", "Efficiency", "Pipeline velocity"];

export default function Proof() {
  return (
    <section id="proof" className="py-12 md:py-16">
      <SectionTexture motif="grid" side="right" />
      <div className="container-x">
        <SectionHead
          eyebrow="Proof of work"
          title={
            <>
              Numbers that map to <em>revenue,</em> not reach
            </>
          }
          sub="Figures as published on dotcomgrowth.com."
        />

        {/* stat band */}
        <div className="mt-10 sm:mt-14 overflow-hidden rounded-2xl border border-cream-border bg-cream-border">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} data-reveal-card="soft" className="trace-border hover-lift bg-white p-6 sm:p-9">
                <div className="font-serif text-[44px] xs:text-[52px] sm:text-[68px] lg:text-[80px] leading-none tracking-[-0.04em] text-ink-navy">
                  {s.n}
                </div>
                <div className="eyebrow mt-4 sm:mt-6 text-[10.5px] sm:text-[11px]">{s.label}</div>
                <p className="mt-2 text-[14px] sm:text-[14.5px] leading-[1.55] text-graphite/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Index */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[5fr_7fr]">
          <div data-reveal-card="slide" className="trace-border trace-border--dark hover-lift on-dark flex flex-col justify-between rounded-2xl bg-ink-navy p-6 text-white sm:p-10">
            <Tag tone="glass" className="self-start">
              The Growth Index
            </Tag>
            <blockquote className="mt-10 sm:mt-16 lg:mt-24">
              <p className="font-serif text-[24px] xs:text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.15] tracking-[-0.02em]">
                “We don't optimize for clicks. We optimize for <em>your bottom line.</em>”
              </p>
            </blockquote>
            <p className="mt-6 sm:mt-8 max-w-[420px] text-[14.5px] sm:text-[15px] leading-[1.6] text-white/70">
              We design, build and scale commercial technology infrastructure for high-growth enterprise and
              mid-market organizations.
            </p>
          </div>

          <div data-reveal-card="soft" className="trace-border hover-lift rounded-2xl border border-cream-border bg-white p-5 sm:p-9">
            <div className="flex items-center justify-between">
              <h3 className="h-abc text-[20px] sm:text-[24px]">Design built for commercial impact</h3>
              <span className="hidden text-[11px] text-stone sm:inline">Qualitative view</span>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {/* vanity */}
              <div className="rounded-xl bg-warm-canvas p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-graphite/70">Vanity metrics</span>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-stone">
                    Low ROI
                  </span>
                </div>
                <ul className="mt-5 space-y-4">
                  {vanity.map((v, i) => (
                    <li key={v}>
                      <div className="text-[14px] text-graphite/70">{v}</div>
                      <div className="mt-2 h-2 rounded-full bg-white">
                        <i className="proof-meter block h-full origin-left rounded-full bg-smoke" style={{ width: `${[78, 64, 88][i]}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* outcome */}
              <div className="rounded-xl bg-lavender-mist/60 p-5 ring-1 ring-electric-cobalt/30">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-ink-navy">Outcome driven</span>
                  <span className="rounded-full bg-electric-cobalt px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                    Compounds
                  </span>
                </div>
                <ul className="mt-5 space-y-4">
                  {outcome.map((v, i) => (
                    <li key={v}>
                      <div className="text-[14px] font-medium text-charcoal">{v}</div>
                      <div className="mt-2 h-2 rounded-full bg-white">
                        <i className="proof-meter block h-full origin-left rounded-full bg-electric-cobalt" style={{ width: `${[84, 72, 92][i]}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-[13px] leading-[1.55] text-stone">
              Bars are illustrative of emphasis, not measured data. We report on P&amp;L contribution and efficiency —
              not impressions, likes or reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
