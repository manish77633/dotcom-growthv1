import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./ui";
import { Reveal, SectionTexture } from "./MotionLayer";

const cols = [
  {
    title: "Services",
    links: [
      "Performance Marketing",
      "SEO & Content",
      "Demand Generation",
      "Marketing Automation",
      "AI & Martech",
      "CRM Integration",
      "Brand Strategy",
    ],
    href: "#services",
  },
  {
    title: "Company",
    links: ["About", "Case Studies", "Our Process", "Contact"],
    href: "#about",
  },
  {
    title: "Resources",
    links: ["Insights", "Playbooks", "The Growth Index", "FAQ"],
    href: "#insights",
  },
];

const social = [
  {
    label: "LinkedIn",
    node: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z" />
    ),
  },
  {
    label: "Instagram",
    node: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.2" />
      </>
    ),
  },
  {
    label: "X",
    node: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "Facebook",
    node: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink-navy text-white">
      <SectionTexture motif="orbits" side="right" dark className="opacity-55" />
      <div className="container-x relative z-10 pb-40 pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2.6fr]">
          <Reveal direction="left">
            <Logo dark />
            <p className="mt-6 max-w-[360px] text-[15px] leading-[1.65] text-white/70">
              Enterprise scale. Agency speed. Revenue focus. A digital growth partner for high-growth enterprise and
              mid-market organizations.
            </p>
            <div className="mt-7 flex gap-2.5">
              {social.map((s) => (
                <a
                  key={s.label}
                  href="#home"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-ink-navy"
                >
                  <svg viewBox="0 0 24 24" className="size-[17px]" fill="currentColor" aria-hidden>
                    {s.node}
                  </svg>
                </a>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.5fr]">
            {cols.map((c) => (
              <Reveal key={c.title} distance={16}>
                <div className="eyebrow text-white/50 text-[11px] sm:text-[12px]">{c.title}</div>
                <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href={c.href} className="text-[13.5px] sm:text-[14.5px] text-white/85 transition-colors hover:text-white hover:underline hover:underline-offset-4">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal distance={16} delay={0.16} className="col-span-2 sm:col-span-2 lg:col-span-1">
              <div className="eyebrow text-white/50 text-[11px] sm:text-[12px]">Locations &amp; Contact</div>
              <ul className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-[13.5px] sm:text-[14.5px] text-white/85">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-lavender-mist" />
                  <span>
                    <strong className="block font-medium text-white">Austin HQ</strong>
                    Austin, Texas, United States
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-lavender-mist" />
                  <span>
                    <strong className="block font-medium text-white">Jaipur Delivery Center</strong>
                    SM Tower, DCM, Ajmer Rd, Jaipur, Rajasthan 302021
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-lavender-mist" />
                  <a href="mailto:dotcomgrowth2020@gmail.com" className="break-all hover:underline">
                    dotcomgrowth2020@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-lavender-mist" />
                  <span>
                    <a href="tel:+919588207166" className="hover:underline">+91 95882 07166</a>
                    <br />
                    <a href="tel:+918690517014" className="hover:underline">+91 86905 17014</a>
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DotCom Growth. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-white">Privacy Policy</a>
            <a href="#home" className="hover:text-white">Terms of Service</a>
            <a href="#home" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
