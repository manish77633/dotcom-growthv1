import { ArrowUpRight } from "lucide-react";
import { Photo, SectionHead, Tag } from "./ui";
import { SectionTexture } from "./MotionLayer";
import { img } from "../data";

function Arrow() {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cream-border bg-white text-ink-navy transition-colors group-hover:border-electric-cobalt group-hover:bg-electric-cobalt group-hover:text-white">
      <ArrowUpRight className="size-[18px]" />
    </span>
  );
}

const small = [
  {
    cat: "Marketing automation",
    title: "Why your martech stack needs an audit before your next campaign",
    meta: "6 min read · Playbook",
    src: img.insightB,
    alt: "Marketer working at a laptop",
  },
  {
    cat: "AI in marketing",
    title: "Agentic workflows in marketing: where they actually save time",
    meta: "7 min read · Perspective",
    src: img.insightC,
    alt: "Colleagues working together on laptops",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-12 md:py-16">
      <SectionTexture motif="orbits" side="left" />
      <div className="container-x">
        <SectionHead
          align="center"
          eyebrow="Insights"
          title={
            <>
              Playbooks and perspectives to help you <em>scale</em>
            </>
          }
          sub="Actionable frameworks and engineering playbooks from our growth hubs in Austin and Jaipur."
        />

        <div className="mt-14 space-y-4">
          {/* featured wide article */}
          <article data-reveal-card="soft" className="trace-border hover-lift group grid overflow-hidden rounded-2xl border border-cream-border bg-white md:grid-cols-[5fr_6fr]">
            <div className="flex flex-col justify-between gap-8 sm:gap-10 p-5 sm:p-10">
              <div>
                <Tag tone="mist">Demand generation</Tag>
                <h3 className="h-abc mt-4 sm:mt-6 text-[20px] xs:text-[24px] sm:text-[30px] md:text-[36px]">
                  The B2B demand generation playbook: from first touch to closed revenue
                </h3>
                <p className="mt-3 sm:mt-4 max-w-[440px] text-[14px] sm:text-[15.5px] leading-[1.6] text-graphite/70">
                  How to connect paid, organic and lifecycle programs into one pipeline model your sales team
                  actually trusts.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12.5px] sm:text-[13px] text-stone">8 min read · Playbook</span>
                <Arrow />
              </div>
            </div>
            <div className="relative min-h-[220px] sm:min-h-[260px] overflow-hidden">
              <Photo
                src={img.insightA}
                alt="Colleagues looking at a growth chart on a laptop"
                className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-2">
            {small.map((a) => (
              <article
                key={a.title}
                data-reveal-card="up"
                className="trace-border hover-lift group flex flex-col overflow-hidden rounded-2xl border border-cream-border bg-white"
              >
                <div className="flex flex-1 flex-col justify-between gap-6 sm:gap-8 p-5 sm:p-8">
                  <div>
                    <Tag tone="mist">{a.cat}</Tag>
                    <h3 className="h-abc mt-4 sm:mt-5 text-[19px] sm:text-[24px] md:text-[26px]">{a.title}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12.5px] sm:text-[13px] text-stone">{a.meta}</span>
                    <Arrow />
                  </div>
                </div>
                <div className="relative h-[220px] overflow-hidden">
                  <Photo
                    src={a.src}
                    alt={a.alt}
                    className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
