import { Mail, Phone } from "lucide-react";
import { Button, Photo } from "./ui";
import { DashboardCard } from "./mocks";
import { Reveal, SectionTexture } from "./MotionLayer";
import { img } from "../data";

export default function FinalCTA() {
  return (
    <section id="contact" className="pb-24 md:pb-32">
      <SectionTexture motif="waves" side="right" />
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] border border-cream-border bg-white">
          <SectionTexture motif="orbits" side="left" className="opacity-50" />
          <div className="relative z-10 grid items-stretch lg:grid-cols-[6fr_6fr]">
            <Reveal direction="left" className="flex flex-col justify-center p-6 sm:p-12 lg:p-16">
              <div className="eyebrow">Get started</div>
              <h2 className="h-display mt-4 sm:mt-5 text-[28px] xs:text-[34px] sm:text-[52px] lg:text-[64px] leading-[1.12] sm:leading-[1.04]">
                Ready to build your next <em>growth engine?</em>
              </h2>
              <p className="mt-3.5 sm:mt-6 max-w-[460px] text-[15px] sm:text-[17px] text-graphite/70">
                Tell us where growth is stalling. We'll show you how strategy, technology and creative can turn it
                into measurable revenue.
              </p>
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3">
                <Button size="lg" href="mailto:dotcomgrowth2020@gmail.com?subject=Growth%20consultation" arrow className="w-full sm:w-auto">
                  Get Started
                </Button>
                <Button size="lg" variant="secondary" href="tel:+919588207166" className="w-full sm:w-auto">
                  Schedule a call
                </Button>
              </div>
              <div className="mt-8 sm:mt-10 flex flex-col gap-2.5 border-t border-cream-border pt-6 text-[13.5px] sm:text-[14px] text-graphite/75 sm:flex-row sm:gap-8">
                <a href="mailto:dotcomgrowth2020@gmail.com" className="inline-flex items-center gap-2 hover:text-electric-cobalt">
                  <Mail className="size-4 text-electric-cobalt" /> dotcomgrowth2020@gmail.com
                </a>
                <a href="tel:+919588207166" className="inline-flex items-center gap-2 hover:text-electric-cobalt">
                  <Phone className="size-4 text-electric-cobalt" /> +91 95882 07166
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.16} className="cta-media-group relative min-h-[350px] sm:min-h-[420px] bg-lavender-mist/60 lg:min-h-[560px]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="cta-backplate absolute -right-10 top-10 h-[78%] w-[80%] rotate-[4deg] rounded-[24px] bg-ink-navy" aria-hidden />
                <div className="absolute right-4 top-4 sm:right-10 sm:top-10 h-[72%] w-[82%] sm:w-[78%] overflow-hidden rounded-[20px] sm:rounded-[24px] border-4 sm:border-[6px] border-white">
                  <div className="absolute -inset-y-7 inset-x-0">
                    <Photo
                      src={img.cta}
                      alt="Consultant walking a client team through a project on a laptop"
                      className="cta-photo size-full"
                    />
                  </div>
                </div>
                <DashboardCard
                  tab="growth"
                  compact
                  className="cta-dashboard absolute bottom-4 left-3 w-[min(300px,calc(100%-24px))] shadow-[0_8px_32px_rgba(12,23,84,0.16)] sm:bottom-10 sm:left-8"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
