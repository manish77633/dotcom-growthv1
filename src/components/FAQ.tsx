import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui";
import { Reveal, SectionTexture } from "./MotionLayer";
import { cn } from "../utils/cn";

const faqs = [
  {
    q: "What does DotCom Growth help businesses achieve?",
    a: "We design and build growth infrastructure that compounds. By connecting strategy, martech, performance marketing and creative, we help growth show up in your revenue — not just your reports.",
  },
  {
    q: "Which services do you provide?",
    a: "Marketing automation, digital transformation, demand generation, performance marketing, AI & martech, brand strategy, SEO & content and CRM integration — organised across three specialist hubs: Martech & Digital Transformation, Growth & Performance Marketing, and Brand & Creative Production.",
  },
  {
    q: "How do you measure growth?",
    a: "Against revenue KPIs: pipeline, P&L contribution and efficiency, rather than impressions, likes or reach. We set up the analytics and attribution infrastructure first, so spend can be tied to outcomes.",
  },
  {
    q: "Do you work with B2B companies?",
    a: "Yes. B2B demand generation, paid media on Google, Meta and LinkedIn, and CRM and automation setup are core to our work. We also support B2C, e-commerce and marketplace brands.",
  },
  {
    q: "How does your growth process work?",
    a: "We follow a six-step system: Discover, Strategy, Build, Activate, Optimize and Scale. It starts with an audit of your stack and funnel, builds the infrastructure, then launches and optimises programs against your revenue KPIs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16">
      <SectionTexture motif="grid" side="left" />
      <div className="container-x grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal direction="left">
            <div className="eyebrow">FAQ</div>
            <h2 className="h-display mt-4 sm:mt-5 text-[28px] xs:text-[34px] sm:text-[50px] lg:text-[64px] leading-[1.12] sm:leading-[1.04]">
              You've likely got a few <em>questions</em>
            </h2>
            <p className="mt-3.5 sm:mt-6 max-w-[380px] text-[15px] sm:text-[16px] text-graphite/70">
              Can't find what you need? We're happy to talk it through on a free consultation.
            </p>
            <Button variant="secondary" href="#contact" className="mt-5 sm:mt-7">
              Ask the team
            </Button>
          </Reveal>
        </div>

        <div className="border-t border-cream-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-reveal-card="soft" className="faq-row border-b border-cream-border">
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-[15px] sm:text-[17px] font-medium leading-snug text-charcoal">{f.q}</span>
                    <ChevronDown
                      className={cn("size-4.5 sm:size-5 shrink-0 text-graphite transition-transform duration-300", isOpen && "rotate-180")}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] pb-5 sm:pb-6 text-[14px] sm:text-[16px] leading-[1.6] text-graphite/75">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
