import { useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import { Button, Photo, SectionHead, Tag, TextLink } from "./ui";
import { AutomationPanel, CrmSyncMock, DashboardCard } from "./mocks";
import { SectionTexture } from "./MotionLayer";
import { img } from "../data";
import { cn } from "../utils/cn";

function Card({
  className,
  children,
  reveal = "up",
}: {
  className?: string;
  children: ReactNode;
  reveal?: "up" | "slide" | "soft";
}) {
  return (
    <article
      data-reveal-card={reveal}
      className={cn("trace-border hover-lift group relative overflow-hidden rounded-2xl border border-cream-border", className)}
    >
      {children}
    </article>
  );
}

function Toggle({ on }: { on?: boolean }) {
  return (
    <span className={cn("relative inline-block h-5 w-9 shrink-0 rounded-full", on ? "bg-electric-cobalt" : "bg-smoke")}>
      <i
        className={cn(
          "absolute top-0.5 size-4 rounded-full bg-white transition-all",
          on ? "left-[18px]" : "left-0.5",
        )}
      />
    </span>
  );
}

function AiAgentCard() {
  const opts: [string, boolean][] = [
    ["Summarise lead activity", true],
    ["Draft follow-up email", true],
    ["Route to account owner", true],
    ["Require human approval", false],
  ];
  return (
    <div className="agent-panel w-[300px] rounded-2xl border border-cream-border bg-white p-5 shadow-[0_8px_32px_rgba(12,23,84,0.12)]">
      <div className="flex items-center justify-between">
        <div className="font-abc text-[16px] font-medium text-charcoal">Agentic workflow</div>
        <X className="size-4 text-stone" />
      </div>
      <div className="mt-4 rounded-xl bg-warm-canvas px-3 py-2.5 text-[12px] text-graphite">
        Trigger: <span className="font-medium text-charcoal">new inbound demo request</span>
      </div>
      <div className="mt-4 text-[12px] font-bold uppercase tracking-[0.1em] text-stone">Tasks</div>
      <ul className="mt-2 space-y-3">
        {opts.map(([l, on]) => (
          <li key={l} className="flex items-center justify-between gap-3 text-[13px] text-charcoal">
            {l}
            <Toggle on={on} />
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-center rounded-full bg-electric-cobalt py-2.5 text-[13px] font-medium text-white">
        Run workflow
      </div>
      <div className="mt-3 text-center text-[10.5px] text-stone">Illustrative interface</div>
    </div>
  );
}

const showcaseBrands = [
  {
    id: "wooden-street",
    name: "Wooden Street",
    tagline: "Omnichannel Furniture & Home",
    headline: "“From browsing to dream living spaces”",
    strategy: "Lifestyle brand storytelling + high-velocity creative ad variations across Meta, Google & Marketplaces.",
    metrics: [
      { label: "ROAS", val: "4.8x" },
      { label: "Shortlist Win", val: "82%" },
      { label: "Ad Creatives", val: "60+/mo" },
    ],
    deliverables: ["Visual Identity", "3D Product Ad Creatives", "Seasonal Campaigns"],
  },
  {
    id: "insurance-dekho",
    name: "InsuranceDekho",
    tagline: "Insurtech & Consumer Trust",
    headline: "“Insurance made transparent, simple & certain”",
    strategy: "High-trust educational video formats, transparent comparison framing, and national digital push.",
    metrics: [
      { label: "Conversion Lift", val: "+34%" },
      { label: "CAC Reduction", val: "-22%" },
      { label: "Trust Score", val: "9.4/10" },
    ],
    deliverables: ["Trust Framing", "Explainer Motion Graphics", "Performance Ads"],
  },
  {
    id: "trimurty",
    name: "Trimurty",
    tagline: "Luxury Sustainable Living",
    headline: "“Green architecture meeting modern luxury”",
    strategy: "Editorial architectural visual systems, high-ticket positioning, and qualified HNI lead generation.",
    metrics: [
      { label: "Pipeline Value", val: "₹45Cr+" },
      { label: "Site Visits", val: "+65%" },
      { label: "Qualified Leads", val: "88%" },
    ],
    deliverables: ["Brand Authority", "Architectural Film", "Investor Decks"],
  },
];

function BrandCreativeShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = showcaseBrands[activeIdx];

  return (
    <div className="w-full min-w-0">
      {/* Brand Selection Pills */}
      <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
        {showcaseBrands.map((b, i) => (
          <button
            key={b.id}
            type="button"
            onClick={() => setActiveIdx(i)}
            className={cn(
              "rounded-full px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-[12px] font-bold tracking-[0.04em] sm:tracking-[0.06em] transition-all",
              activeIdx === i
                ? "bg-charcoal text-white shadow-sm"
                : "border border-cream-border bg-white/80 text-graphite/70 hover:bg-white hover:text-charcoal",
            )}
          >
            {b.name}
          </button>
        ))}
      </div>

      {/* Main Campaign & Positioning Card */}
      <div className="relative rounded-2xl border border-cream-border bg-white p-3.5 sm:p-6 shadow-[0_8px_32px_rgba(12,23,84,0.06)] transition-all min-w-0 overflow-hidden">
        {/* Card Header */}
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between border-b border-cream-border pb-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex size-2 shrink-0 rounded-full bg-electric-cobalt animate-pulse" />
            <span className="font-abc text-[15px] sm:text-[17px] font-bold text-charcoal shrink-0">{active.name}</span>
            <span className="text-[11px] sm:text-[12px] text-stone truncate">· {active.tagline}</span>
          </div>
          <span className="self-start sm:self-auto rounded-full bg-lavender-mist px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-ink-navy shrink-0">
            Live Campaign System
          </span>
        </div>

        {/* Campaign Positioning Headline */}
        <div className="mt-3.5 sm:mt-5 min-w-0">
          <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-stone">Brand Positioning &amp; Hook</div>
          <div className="mt-1 font-serif text-[17px] xs:text-[19px] sm:text-[24px] lg:text-[26px] leading-[1.22] text-charcoal break-words">
            {active.headline}
          </div>
          <p className="mt-2 sm:mt-2.5 text-[12.5px] xs:text-[13px] sm:text-[14px] leading-[1.55] text-graphite/75 break-words">
            {active.strategy}
          </p>
        </div>

        {/* Deliverables tags */}
        <div className="mt-3.5 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
          {active.deliverables.map((d) => (
            <span
              key={d}
              className="rounded-lg bg-warm-canvas px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10.5px] sm:text-[11.5px] font-medium text-graphite leading-normal"
            >
              {d}
            </span>
          ))}
        </div>

        {/* Real Performance Metrics */}
        <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-1.5 sm:gap-3 border-t border-cream-border pt-3 sm:pt-5 text-left">
          {active.metrics.map((m) => (
            <div key={m.label} className="min-w-0 rounded-lg sm:rounded-xl bg-warm-canvas/60 p-1.5 xs:p-2 sm:p-3 text-center sm:text-left">
              <div className="font-serif text-[15px] xs:text-[18px] sm:text-[26px] font-normal leading-tight tracking-tight text-ink-navy truncate">
                {m.val}
              </div>
              <div className="mt-0.5 sm:mt-1 text-[9px] xs:text-[10px] sm:text-[11px] font-medium text-stone leading-tight line-clamp-2">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Trust Badge */}
      <div className="mt-2.5 sm:mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-cream-border/70 bg-white/70 px-3 sm:px-4 py-2 text-[10.5px] sm:text-[12px] text-graphite/80 backdrop-blur-sm">
        <span className="flex items-center gap-1.5 min-w-0">
          <span className="size-1.5 shrink-0 rounded-full bg-electric-cobalt" />
          <span className="truncate">Also trusted by: <strong>Unstop</strong>, <strong>Chordia's</strong>, <strong>Healthy Day</strong></span>
        </span>
        <span className="hidden font-medium text-ink-navy sm:inline shrink-0">100% Bespoke Systems</span>
      </div>
    </div>
  );
}

function SmallCard({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <Card className="flex min-h-[210px] sm:min-h-[250px] flex-col justify-between bg-white p-6 sm:p-8 transition-colors hover:border-ink-navy/20">
      <div>
        <h3 className="h-abc text-[20px] sm:text-[24px] text-charcoal">{title}</h3>
        <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15px] leading-[1.6] text-graphite/70">{text}</p>
      </div>
      <div className="mt-6 sm:mt-8 flex items-center justify-between">
        <span className="eyebrow text-[10.5px] sm:text-[11px] text-stone">{label}</span>
        <span className="flex size-8 items-center justify-center rounded-full border border-cream-border text-ink-navy transition-colors group-hover:bg-ink-navy group-hover:text-white">
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Card>
  );
}

export default function Services() {
  return (
    <section id="services" className="pb-24 md:pb-32">
      <SectionTexture motif="grid" side="left" className="texture-long" />
      <div className="container-x">
        <SectionHead
          eyebrow="Capabilities"
          title={
            <>
              Capabilities engineered for <em>compounding</em> growth
            </>
          }
          sub="Technology is only valuable when it creates measurable business outcomes. We engineer systems that directly impact operations, revenue and growth."
          action={
            <Button variant="secondary" href="#contact">
              Get started
            </Button>
          }
        />

        <div className="mt-10 sm:mt-14 space-y-4">
          {/* 1 — Performance marketing (hero card) */}
          <Card reveal="soft" className="trace-border--image relative min-h-[440px] bg-white p-6 sm:p-10 lg:h-[440px] lg:p-0">
            <Photo
              src={img.perf}
              alt="Colleagues reviewing performance charts in a meeting room"
              className="absolute inset-0 size-full object-[50%_35%] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-transparent md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent" />
            <div className="relative z-10 max-w-[440px] lg:absolute lg:left-10 lg:top-10">
              <h3 className="h-abc text-[22px] xs:text-[26px] sm:text-[32px] lg:text-[38px]">Paid media that answers to pipeline, not impressions.</h3>
              <p className="mt-3 sm:mt-4 text-[14.5px] sm:text-[16px] leading-[1.6] text-graphite/75">
                Google, Meta and LinkedIn campaigns, conversion-rate optimization and revenue attribution — managed by
                a dedicated performance hub. Ad spend optimization, tied to the P&amp;L.
              </p>
              <TextLink className="mt-4 sm:mt-5" href="#contact">
                Explore performance marketing
              </TextLink>
              <div className="mt-6 flex flex-wrap items-center gap-2.5 lg:hidden">
                <Tag>Performance marketing</Tag>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium text-ink-navy shadow-[0_4px_24px_rgba(12,23,84,0.12)]">
                  <span className="size-2 rounded-full bg-ink-navy" /> Google
                  <span className="ml-1 size-2 rounded-full bg-electric-cobalt" /> Meta
                  <span className="ml-1 size-2 rounded-full bg-[#ffcaa8]" /> LinkedIn
                </div>
              </div>
            </div>
            <Tag className="absolute bottom-6 left-6 hidden sm:bottom-8 sm:left-10 lg:inline-flex">Performance marketing</Tag>
            <div className="absolute bottom-6 right-6 hidden items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[12px] font-medium text-ink-navy shadow-[0_4px_24px_rgba(12,23,84,0.12)] md:inline-flex sm:bottom-8 sm:right-8">
              <span className="size-2 rounded-full bg-ink-navy" /> Google
              <span className="ml-2 size-2 rounded-full bg-electric-cobalt" /> Meta
              <span className="ml-2 size-2 rounded-full bg-[#ffcaa8]" /> LinkedIn
            </div>
          </Card>

          {/* 2 — Automation + CRM */}
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <Card reveal="slide" className="flex flex-col gap-6 sm:gap-8 bg-[linear-gradient(135deg,#fff1ea_0%,#ffffff_70%)] p-5 sm:p-8 lg:block lg:min-h-[440px] lg:p-0">
              <Tag className="self-start lg:absolute lg:left-8 lg:top-8" tone="mist">Marketing automation</Tag>
              <div className="lg:absolute lg:bottom-8 lg:left-8 lg:max-w-[300px]">
                <h3 className="h-abc text-[22px] sm:text-[28px]">Automate the lifecycle, from first click to hand-off.</h3>
                <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15px] leading-[1.6] text-graphite/70">
                  Scoring, routing and nurture built around your funnel — streamlining lead lifecycles so nothing
                  waits on a manual step.
                </p>
              </div>
              <div className="w-full lg:absolute lg:right-[-24px] lg:top-8 lg:w-[54%]">
                <div className="rounded-2xl border border-cream-border bg-white p-4 sm:p-5 shadow-[0_4px_24px_rgba(12,23,84,0.08)]">
                  <AutomationPanel />
                </div>
              </div>
            </Card>

            <Card className="flex flex-col justify-between gap-6 sm:gap-8 bg-white p-5 sm:p-8 lg:min-h-[440px]">
              <Tag tone="mist" className="self-start">CRM integration</Tag>
              <CrmSyncMock />
              <div>
                <h3 className="h-abc text-[20px] sm:text-[26px]">One source of truth for every lead.</h3>
                <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-graphite/70">
                  Unified data systems that put sales and marketing on the same numbers.
                </p>
              </div>
            </Card>
          </div>

          {/* 3 — AI & Martech (photo with floating card) */}
          <Card reveal="soft" className="trace-border--image relative min-h-[460px] bg-ink-navy p-6 sm:p-10 lg:h-[440px] lg:p-0">
            <Photo
              src={img.ai}
              alt="Analyst working across several laptops showing performance charts"
              className="absolute inset-0 size-full object-[50%_40%] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/95 via-ink-navy/60 to-ink-navy/20 lg:bg-gradient-to-l lg:from-ink-navy/90 lg:via-ink-navy/40 lg:to-transparent" />
            <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block">
              <AiAgentCard />
            </div>
            <div className="relative z-10 text-white lg:absolute lg:bottom-10 lg:left-auto lg:right-10 lg:max-w-[420px]">
              <Tag tone="glass" className="mb-4 inline-block lg:absolute lg:left-auto lg:-top-12 lg:right-0">AI &amp; Martech</Tag>
              <h3 className="h-abc text-[22px] xs:text-[26px] sm:text-[30px] lg:text-[36px]">Intelligent workflow automation, not another dashboard.</h3>
              <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15px] leading-[1.6] text-white/80">
                Custom LLM configurations, cognitive automation pipelines and RAG systems — plus agentic AI that
                orchestrates tasks and decisions across your operations.
              </p>
              <TextLink className="mt-4" href="#contact" onDark>
                See AI &amp; martech
              </TextLink>
            </div>
          </Card>

          {/* 4 — Transformation (dark) + Demand gen (wide) */}
          <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
            <Card reveal="slide" className="trace-border--dark flex flex-col justify-between gap-6 sm:gap-8 border-ink-navy bg-ink-navy p-5 sm:p-8 text-white lg:min-h-[440px]">
              <Tag tone="glass" className="self-start">Digital transformation</Tag>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <div className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-white/60">Architecture</div>
                <div className="mt-3 space-y-2 text-[12px]">
                  <div className="flex items-center gap-3">
                    <span className="w-[84px] sm:w-[92px] text-white/70">Legacy CRM</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/15"><i className="block h-full w-[28%] rounded-full bg-white/40" /></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-[84px] sm:w-[92px] text-white/70">Spreadsheets</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/15"><i className="block h-full w-[18%] rounded-full bg-white/40" /></span>
                  </div>
                  <div className="flex justify-center py-0.5 text-white/60"><ArrowDown className="size-4" /></div>
                  <div className="flex items-center gap-3 font-medium">
                    <span className="w-[84px] sm:w-[92px]">Unified layer</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/15"><i className="block h-full w-[92%] rounded-full bg-[#ff5e1a]" /></span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="h-abc text-[20px] sm:text-[26px]">Modernize the core, then scale on top of it.</h3>
                <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-white/70">
                  Legacy architectures and operating methods rebuilt for the market you're growing into.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col gap-6 sm:gap-8 bg-white p-5 sm:p-8 lg:grid lg:min-h-[440px] lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="flex h-full flex-col justify-between gap-6 sm:gap-8">
                <Tag tone="mist" className="self-start">Demand generation</Tag>
                <div>
                  <h3 className="h-abc text-[22px] sm:text-[28px]">Pipelines built for B2B buying cycles.</h3>
                  <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15px] leading-[1.6] text-graphite/70">
                    Always-on programs across paid, organic and lifecycle — building scalable pipelines from target
                    accounts to qualified opportunities.
                  </p>
                  <TextLink className="mt-4" href="#contact">
                    Explore demand generation
                  </TextLink>
                </div>
              </div>
              <div className="rounded-2xl bg-lavender-mist/70 p-2.5 sm:p-3">
                <DashboardCard tab="leads" compact footer={false} className="border-transparent" />
              </div>
            </Card>
          </div>

          {/* 5 — Brand strategy (tinted full width) */}
          <Card className="bg-[linear-gradient(120deg,#f8efe9_0%,#fbf2eb_55%,#fff0e8_100%)] p-4 sm:p-8 lg:p-10">
            <div className="grid min-w-0 items-center gap-6 sm:gap-8 lg:grid-cols-[5fr_7fr] lg:gap-10">
              <div className="min-w-0">
                <Tag tone="light">Brand strategy</Tag>
                <h3 className="h-abc mt-3.5 sm:mt-6 text-[22px] xs:text-[24px] sm:text-[32px] lg:text-[38px] break-words">A brand that earns the shortlist.</h3>
                <p className="mt-2.5 sm:mt-4 max-w-[440px] text-[14px] sm:text-[16px] leading-[1.6] text-graphite/75">
                  Authority and positioning, from brand identity to campaign creative, video and thought-leadership
                  content — so buyers trust you before the first call.
                </p>
                <TextLink className="mt-3.5 sm:mt-5" href="#contact">
                  Explore brand &amp; creative
                </TextLink>
              </div>
              <div className="min-w-0 w-full">
                <BrandCreativeShowcase />
              </div>
            </div>
          </Card>

          {/* 6 — Small cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <SmallCard
              label="SEO & content"
              title="Organic growth that compounds."
              text="SEO and content strategy that builds visibility — and keeps paying back long after the spend stops."
            />
            <SmallCard
              label="Analytics & attribution"
              title="Know exactly what drives revenue."
              text="Analytics and attribution infrastructure that connects spend to pipeline and closed revenue."
            />
            <SmallCard
              label="Engineering"
              title="When growth needs more than marketing."
              text="Custom software, ERP implementation and agentic AI from an engineering team of 350+."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
