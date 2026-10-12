import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Award, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Photo, SectionHead, Tag, TextLink } from "./ui";
import { SectionTexture } from "./MotionLayer";
import { img } from "../data";
import { cn } from "../utils/cn";

const cases = [
  {
    featured: true,
    tags: ["Real estate", "Digital transformation"],
    title: "How we digitally transformed the operations of a real estate group",
    src: img.caseRealEstate,
    alt: "Modern residential building facade with glass balconies",
    metric: "360°",
    metricLabel: "operational view",
    kv: [
      ["Delivery", "Dual-tech stack, 360°"],
      ["Focus", "Operations"],
    ],
  },
  {
    tags: ["E-commerce", "Revenue growth"],
    title: "How we took an e-commerce brand to €1M in revenue in under 12 months",
    src: img.caseEcom,
    alt: "Woman carrying parcels at home",
    metric: "€1M",
    metricLabel: "revenue in under 12 months",
    kv: [
      ["Revenue", "€1M"],
      ["Timeline", "Under 12 months"],
    ],
  },
  {
    tags: ["B2C", "Marketplace", "SEO"],
    title: "How a B2C brand grew revenue across its website and marketplaces",
    src: img.caseB2C,
    alt: "Woman unboxing a new purchase on a sofa",
    kv: [
      ["Channels", "Website + marketplaces"],
      ["Lever", "SEO growth"],
    ],
  },
  {
    tags: ["Edtech", "Audience", "Lead gen"],
    title: "Building audience and lead generation for an edtech brand",
    src: img.caseEdtech,
    alt: "Students studying together with laptops",
    kv: [
      ["Focus", "Audience"],
      ["Goal", "Lead generation"],
    ],
  },
];

const badges = ["CMMI Level 3", "AWS Partner", "Salesforce Partner", "ServiceNow Partner", "21 Years Delivery"];

export default function CaseStudies() {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) =>
    scroller.current?.scrollBy({
      left: dir * 360,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });

  return (
    <section id="case-studies" className="pb-24 md:pb-32">
      <SectionTexture motif="orbits" side="left" />
      <div className="container-x">
        <SectionHead
          align="center"
          eyebrow="Proven case studies"
          title={
            <>
              Measurable impact, <em>delivered at scale</em>
            </>
          }
          sub="What we've delivered across different verticals — from real estate operations to marketplace revenue."
        />
      </div>

      {/* full-bleed carousel */}
      <div className="relative mt-14">
        <div
          ref={scroller}
          className="hide-scrollbar flex snap-x gap-4 overflow-x-auto pb-2"
          style={{
            paddingLeft: "max(24px, calc((100vw - 1200px) / 2))",
            paddingRight: "max(24px, calc((100vw - 1200px) / 2))",
            scrollPaddingLeft: "max(24px, calc((100vw - 1200px) / 2))",
          }}
        >
          {cases.map((c) => (
            <article
              key={c.title}
              data-reveal-card="up"
              className={cn(
                "trace-border trace-border--image hover-lift group relative h-[480px] sm:h-[540px] shrink-0 snap-start overflow-hidden rounded-2xl bg-ink-navy",
                c.featured ? "w-[86vw] sm:w-[640px]" : "w-[78vw] sm:w-[330px]",
              )}
            >
              <Photo
                src={c.src}
                alt={c.alt}
                className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink-navy/70 via-ink-navy/25 to-ink-navy/90" />

              <div className="relative flex h-full flex-col justify-between p-5 text-white sm:p-7">
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <Tag key={t} tone="glass">
                      {t}
                    </Tag>
                  ))}
                </div>

                <div>
                  {c.metric && (
                    <div className="mb-4 inline-flex max-w-full flex-col rounded-xl border border-white/30 bg-ink-navy/75 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                      <span className="font-abc text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl">{c.metric}</span>
                      <span className="mt-1 text-xs font-medium text-white/85">{c.metricLabel}</span>
                    </div>
                  )}
                <h3
                  className={cn(
                    "font-serif font-normal tracking-[-0.02em] text-white",
                    c.featured
                      ? "max-w-[460px] text-[22px] xs:text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.14]"
                      : "text-[19px] sm:text-[24px] lg:text-[28px] leading-[1.2]",
                  )}
                >
                  {c.title}
                </h3>
                </div>

                <div className="rounded-xl bg-white p-3.5 sm:p-4 text-charcoal">
                  <div className="flex items-end justify-between gap-3">
                    <dl className={cn("grid flex-1 gap-2 sm:gap-3", c.featured ? "grid-cols-2" : "grid-cols-1")}>
                      {c.kv.map(([k, v]) => (
                        <div key={k}>
                          <dt className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-stone">{k}</dt>
                          <dd className={cn("font-abc font-semibold leading-snug text-ink-navy", /[0-9€%]/.test(v) ? "text-[17px] sm:text-[21px]" : "text-[13px] sm:text-[14px]")}>{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <span className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full bg-electric-cobalt text-white transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="size-3.5 sm:size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className="w-px shrink-0" aria-hidden />
        </div>

        {/* arrows */}
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous case study"
          className="absolute left-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-border bg-white text-ink-navy shadow-[0_4px_24px_rgba(12,23,84,0.12)] transition-colors hover:bg-ink-navy hover:text-white md:flex"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next case study"
          className="absolute right-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-border bg-white text-ink-navy shadow-[0_4px_24px_rgba(12,23,84,0.12)] transition-colors hover:bg-ink-navy hover:text-white md:flex"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="container-x">
        <div className="mx-auto mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-cream-border" aria-hidden="true">
          <div data-case-progress className="h-full w-[26%] rounded-full bg-ink-navy" />
        </div>
        <p className="mt-8 text-center text-[15px] text-graphite/70">
          Want results like these? Tell us about your growth goals.{" "}
          <a href="#contact" className="inline-flex items-center gap-1 font-medium text-ink-navy underline underline-offset-4 hover:text-electric-cobalt">
            Talk to an expert <ArrowRight className="size-3.5" />
          </a>
        </p>

        {/* credentials strip */}
        <div data-reveal-card="soft" className="trace-border mt-10 sm:mt-14 flex flex-col gap-6 sm:gap-8 rounded-2xl border border-cream-border bg-white p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-start gap-4 sm:gap-5 lg:max-w-[400px]">
            <span className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-full bg-electric-cobalt text-white">
              <ShieldCheck className="size-5 sm:size-6" strokeWidth={1.8} />
            </span>
            <div>
              <div className="h-abc text-[20px] sm:text-[24px]">Engineering muscle behind the marketing</div>
              <p className="mt-1.5 sm:mt-2 text-[13.5px] sm:text-[14.5px] leading-[1.55] text-graphite/70">
                350+ engineers available for AI development, agentic AI, custom software and ERP implementation —
                credentials as listed on dotcomgrowth.com.
              </p>
            </div>
          </div>
          <ul className="flex flex-wrap items-center justify-start gap-2 sm:gap-4">
            {badges.map((b, i) => (
              <li
                key={b}
                data-reveal-card="soft"
                className="flex h-[120px] w-[94px] sm:h-[132px] sm:w-[104px] flex-col items-center justify-start bg-lavender-mist px-1.5 sm:px-2 pt-3 sm:pt-4 text-center [clip-path:polygon(0_0,100%_0,100%_86%,50%_100%,0_86%)]"
              >
                <Award className="size-5 sm:size-6 text-electric-cobalt" strokeWidth={1.6} />
                <span className="mt-2 text-[9.5px] sm:text-[10px] font-bold uppercase leading-[1.25] tracking-[0.08em] text-ink-navy">
                  {i === badges.length - 1 ? "21 years" : b.split(" ").slice(0, -1).join(" ") || b}
                </span>
                <span className="mt-1 text-[10.5px] sm:text-[11px] font-medium leading-tight text-graphite/70">
                  {i === badges.length - 1 ? "Delivery" : b.split(" ").slice(-1)[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex justify-end">
          <TextLink href="#contact">Discuss your project</TextLink>
        </div>
      </div>
    </section>
  );
}
