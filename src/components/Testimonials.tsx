import { SectionHead, Tag } from "./ui";
import { Reveal, SectionTexture } from "./MotionLayer";
import { cn } from "../utils/cn";

const quotes = [
  {
    dark: true,
    q: "For the first time, our CRM, automated workflows and performance campaigns told the exact same story. We scaled from fragmented channels into a unified engine generating measurable bottom-line revenue.",
    name: "Vikramaditya S.",
    role: "VP of Growth & Strategy · Omnichannel Retail",
    initials: "VS",
    badge: "Enterprise Partner",
  },
  {
    q: "The specialist structure is what sets Dotcom apart. Martech, performance media and creative each had a dedicated owner — and a single unified plan tied strictly to our CAC and pipeline velocity.",
    name: "Rohit Agarwal",
    role: "Marketing Director · Fintech & Insurtech",
    initials: "RA",
    badge: "Verified Impact",
  },
  {
    q: "They analyzed our margins and conversion friction on the very first call, not vanity impressions. In under 12 months, our digital channels surpassed every historical growth milestone.",
    name: "Ananya Mehta",
    role: "Co-Founder · Direct-to-Consumer Brand",
    initials: "AM",
    badge: "Scaling Partner",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pb-24 md:pb-32">
      <SectionTexture motif="dots" side="right" />
      <div className="container-x">
        <SectionHead
          eyebrow="Client voices"
          title={
            <>
              What partners <em>say</em> about working with us
            </>
          }
          sub="How high-growth founders and commercial leaders scale their revenue engines with Dotcom Growth."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.15fr_1fr_1fr]">
          {quotes.map((t, i) => (
            <figure
              key={i}
              data-reveal-card="up"
              className={cn(
                "trace-border hover-lift relative flex min-h-[300px] sm:min-h-[360px] flex-col justify-between rounded-2xl p-5 sm:p-9",
                t.dark ? "trace-border--dark on-dark bg-ink-navy text-white" : "border border-cream-border bg-white text-charcoal",
              )}
            >
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "font-serif text-[48px] sm:text-[72px] leading-[0.7]",
                    t.dark ? "text-white/90" : "text-electric-cobalt",
                  )}
                  aria-hidden
                >
                  “
                </span>
                <Tag tone={t.dark ? "glass" : "mist"}>{t.badge}</Tag>
              </div>
              <Reveal delay={0.12} distance={16}>
                <blockquote
                  className={cn(
                    "mt-4 sm:mt-6 font-serif tracking-[-0.015em]",
                    t.dark ? "text-[18px] xs:text-[20px] sm:text-[27px] leading-[1.3]" : "text-[16.5px] xs:text-[18px] sm:text-[22px] leading-[1.35]",
                  )}
                >
                  {t.q}
                </blockquote>
              </Reveal>
              <figcaption className="mt-8 flex items-center gap-3 border-t pt-5 text-[14px] border-current/10">
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full text-[13px] font-bold",
                    t.dark ? "bg-white text-ink-navy" : "bg-lavender-mist text-ink-navy",
                  )}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block font-medium">{t.name}</span>
                  <span className={cn("block text-[13px]", t.dark ? "text-white/60" : "text-stone")}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
