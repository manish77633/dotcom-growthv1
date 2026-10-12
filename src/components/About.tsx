import { Cpu, Target, TrendingUp } from "lucide-react";
import { Button, Photo, TextLink } from "./ui";
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

export default function About() {
  return (
    <section id="about" className="group relative isolate overflow-hidden bg-white">
      <div className="relative">
      <div className="absolute inset-x-0 top-0 z-0 h-[340px] overflow-hidden min-[480px]:bottom-0 min-[480px]:right-auto min-[480px]:h-full min-[480px]:w-[66%] xl:w-[62%]">
        <Photo
          src={img.about}
          alt="Strategists and marketers collaborating in a modern office"
          className="size-full object-cover object-[48%_45%] transition-transform duration-700 group-hover:scale-[1.025] min-[480px]:object-center"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden min-[480px]:block"
          style={{ background: "linear-gradient(90deg, transparent 48%, rgba(255,255,255,.18) 67%, rgba(255,255,255,.78) 88%, #fff 100%)" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[340px] bg-gradient-to-b from-transparent via-transparent to-white min-[480px]:hidden" />

      <div className="container-x relative z-10 grid min-h-[720px] grid-cols-1 pb-20 pt-[300px] min-[480px]:grid-cols-[42%_58%] min-[480px]:items-center min-[480px]:py-12 md:grid-cols-[50%_50%] xl:min-h-[760px] xl:grid-cols-[58%_42%]">
        <div aria-hidden="true" className="hidden min-[480px]:block" />
        <div className="max-w-[560px] min-[480px]:pl-3 lg:pl-5">
          <div className="eyebrow text-electric-cobalt">About DotCom Growth</div>
          <h2 className="h-display mt-4 text-[32px] leading-[1.15] min-[480px]:text-[25px] min-[640px]:text-[31px] md:text-[38px] xl:text-[46px] xl:leading-[1.08]">
            Strategy, creativity, technology and performance — <em>one growth partner.</em>
          </h2>
          <p className="mt-4 max-w-[490px] text-[15px] leading-[1.6] text-graphite/75">
            We operate without generalists. Each division is staffed by veterans in a single lane, so you get deep
            capability without dilution — and one team accountable for the number that matters: revenue.
          </p>
          <p className="mt-3 text-[13px] text-graphite/55 sm:text-[14px]">Founded in 2020 · Based in Jaipur, India</p>

          <ul className="mt-6 space-y-2">
            {pillars.map((p) => (
              <li key={p.title} className="group/item flex items-start gap-4 rounded-xl py-1.5 transition-transform duration-300 hover:translate-x-1">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-electric-cobalt/35 bg-white/85 text-electric-cobalt transition-colors duration-300 group-hover/item:border-electric-cobalt group-hover/item:bg-lavender-mist">
                  <p.icon className="size-[18px]" strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-abc text-[17px] font-medium leading-tight text-ink-navy sm:text-[18px]">{p.title}</div>
                  <p className="mt-1 text-[13px] leading-[1.5] text-graphite/65 sm:text-[14px]">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
            <Button href="#contact" arrow>Talk to an expert</Button>
            <TextLink href="#services">Explore our capabilities</TextLink>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
