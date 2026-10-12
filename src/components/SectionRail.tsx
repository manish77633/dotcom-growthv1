import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const sections = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Capabilities"],
  ["engine", "Growth engine"],
  ["process", "Process"],
  ["case-studies", "Case studies"],
  ["proof", "Results"],
  ["why", "Why us"],
  ["testimonials", "Testimonials"],
  ["insights", "Insights"],
  ["faq", "FAQ"],
  ["contact", "Contact"],
] as const;

export default function SectionRail() {
  const [active, setActive] = useState<string>("home");
  const [overCaseStudies, setOverCaseStudies] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const threshold = window.innerHeight * 0.42;
        let current: string = sections[0][0];
        for (const [id] of sections) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= threshold) current = id;
        }
        setActive(current);
        const caseSection = document.getElementById("case-studies");
        if (caseSection) {
          const bounds = caseSection.getBoundingClientRect();
          setOverCaseStudies(bounds.top < window.innerHeight * 0.8 && bounds.bottom > window.innerHeight * 0.2);
        }
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav aria-label="Jump to section" className={cn("fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col transition-opacity duration-200 min-[1360px]:flex 2xl:right-8", overCaseStudies && "pointer-events-none opacity-0")}>
      {sections.map(([id, label]) => {
        const selected = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Go to ${label}`}
            aria-current={selected ? "location" : undefined}
            className="group relative flex h-5 w-10 items-center justify-end rounded-lg focus-visible:outline-2 focus-visible:outline-electric-cobalt"
          >
            <span aria-hidden="true" className="pointer-events-none absolute right-12 translate-x-1 whitespace-nowrap rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-[11px] font-semibold text-ink-navy opacity-0 shadow-[0_6px_20px_rgba(12,23,84,0.12)] backdrop-blur-xl transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">{label}</span>
            <span aria-hidden="true" className={cn("h-[3px] rounded-full shadow-[0_1px_6px_rgba(12,23,84,0.12)] transition-all duration-300", selected ? "w-9 bg-electric-cobalt" : "w-6 bg-ink-navy/45 group-hover:w-9 group-hover:bg-ink-navy")} />
          </a>
        );
      })}
    </nav>
  );
}
