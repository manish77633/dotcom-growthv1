import { Layers, Target, Users } from "lucide-react";
import { Button, LogoStrip, SectionHead, TextLink } from "./ui";
import { SectionTexture } from "./MotionLayer";
import { brandsSecondary } from "../data";

const items = [
  {
    icon: Layers,
    title: "Infrastructure first. Campaigns second.",
    text: "We build the data, automation and CRM foundations before scaling spend — so every channel adds to a system that compounds.",
    link: "Learn more about our approach",
  },
  {
    icon: Users,
    title: "Specialist teams. No generalists.",
    text: "Three dedicated hubs for martech, performance and creative — each staffed by veterans in that lane, working on enterprise-agile cadence.",
    link: "Meet the three hubs",
  },
  {
    icon: Target,
    title: "Revenue KPIs. Not vanity metrics.",
    text: "Success is defined by P&L contribution, pipeline and efficiency — reported against the numbers your leadership team actually reviews.",
    link: "See how we measure growth",
  },
];

export default function Why() {
  return (
    <section id="why" className="pb-24 md:pb-32">
      <SectionTexture motif="waves" side="left" />
      <div className="container-x">
        <SectionHead
          eyebrow="Why DotCom Growth"
          title={
            <>
              Built for revenue. <em>Staffed by specialists.</em>
            </>
          }
          action={
            <Button variant="secondary" href="#contact">
              Talk to an expert
            </Button>
          }
        />

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-cream-border">
          {items.map((it) => (
            <div key={it.title} data-reveal-card="up" className="why-item md:px-10 md:first:pl-0 md:last:pr-0">
              <span className="why-icon flex size-12 items-center justify-center rounded-full bg-lavender-mist text-electric-cobalt">
                <it.icon className="size-5" strokeWidth={1.8} />
              </span>
              <h3 className="h-abc mt-4 sm:mt-6 text-[20px] sm:text-[24px] md:text-[26px] text-charcoal">{it.title}</h3>
              <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15.5px] leading-[1.6] text-graphite/70">{it.text}</p>
              <TextLink className="mt-5" href="#contact">
                {it.link}
              </TextLink>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-y border-cream-border py-10">
        <LogoStrip brands={brandsSecondary} />
      </div>
    </section>
  );
}
