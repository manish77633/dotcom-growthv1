import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./ui";

const columns = [
  { title: "Services", links: ["Performance Marketing", "SEO & Content", "Demand Generation", "Marketing Automation", "AI & MarTech", "CRM Integration", "Brand Strategy"].map(label => ({ label, href: "#services" })) },
  { title: "Company", links: [{ label: "About", href: "#about" }, { label: "Case Studies", href: "#case-studies" }, { label: "Our Process", href: "#process" }, { label: "Contact", href: "#contact" }] },
  { title: "Resources", links: [{ label: "Insights", href: "#insights" }, { label: "Playbooks", href: "#insights" }, { label: "The Growth Index", href: "#proof" }, { label: "FAQ", href: "#faq" }] },
];

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 text-[12px] font-semibold uppercase tracking-[0.13em] text-[#bec8de] after:mt-3 after:block after:h-[2px] after:w-10 after:bg-[#ff5e1a]">{children}</h2>;
}

const linkClass = "transition-colors hover:text-[#ff8a55] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ff8a55]";

export default function Footer() {
  return <footer id="site-footer" className="relative isolate overflow-hidden bg-[#071431] text-white">
    <div aria-hidden="true" className="bg footer-photo-bg pointer-events-none absolute inset-0" />
    <div className="relative z-10 mx-auto max-w-[1510px] px-5 pb-9 pt-20 sm:px-8 lg:px-12 lg:pt-24 xl:px-16">
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.7fr_1.1fr_0.95fr_0.95fr_1.4fr] xl:gap-x-12">
        <div>
          <Logo dark className="text-[26px] sm:text-[30px]" />
          <p className="mt-6 max-w-[360px] text-[15px] leading-[1.7] text-[#c7d0e2] lg:text-[16px] xl:text-[17px]">Enterprise scale. Agency speed. Revenue focus. A digital growth partner for high-growth enterprise and mid-market organizations.</p>
          <div className="mt-6 flex gap-3" aria-label="Social platforms">
            {[
              { label: "LinkedIn", node: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z" /> },
              { label: "Instagram", node: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.2" cy="6.8" r="1.2" /></> },
              { label: "X", node: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
              { label: "Facebook", node: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
            ].map(({ label, node }) => <span key={label} title={`${label} profile URL pending verification`} aria-label={label} className="flex size-11 items-center justify-center rounded-full border border-[#8290ac]/45 text-white/90"><svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true">{node}</svg></span>)}
          </div>
        </div>
        {columns.map(({ title, links }) => <nav key={title} aria-label={`${title} footer links`}>
          <Heading>{title}</Heading>
          <ul className="space-y-3.5">{links.map(({ label, href }) => <li key={label}><a href={href} className={`group flex items-center justify-between gap-2 text-[14px] leading-[1.4] text-[#e9edf6] xl:text-[15px] ${linkClass}`}><span>{label}</span><ArrowRight className="size-3.5 shrink-0 text-white/70 transition-transform group-hover:translate-x-1 group-hover:text-[#ff8a55]" aria-hidden="true" /></a></li>)}</ul>
        </nav>)}
        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <Heading>Locations &amp; Contact</Heading>
          <ul className="space-y-5 text-[14px] leading-[1.55] text-[#c7d0e2] xl:text-[15px]">
            <li className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-white" /><span><strong className="block font-semibold text-white">Austin HQ</strong>Austin, Texas, United States</span></li>
            <li className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-white" /><span><strong className="block font-semibold text-white">Jaipur Delivery Center</strong>SM Tower, DCM, Ajmer Rd,<br />Jaipur, Rajasthan 302021</span></li>
            <li className="flex gap-3"><Mail className="mt-0.5 size-5 shrink-0 text-white" /><a className={`min-w-0 break-all text-white/90 ${linkClass}`} href="mailto:dotcomgrowth2020@gmail.com">dotcomgrowth2020@gmail.com</a></li>
            <li className="flex gap-3"><Phone className="mt-0.5 size-5 shrink-0 text-white" /><span className="flex flex-col"><a className={linkClass} href="tel:+919588207166">+91 95882 07166</a><a className={linkClass} href="tel:+918690517014">+91 86905 17014</a></span></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-5 border-t border-[#98a9c5]/35 pt-8 text-[13px] text-[#aebbd3] sm:flex-row sm:items-center sm:justify-between lg:mt-20 lg:text-[14px]">
        <span>© 2026 DotCom Growth. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Legal pages pending verified destinations">{["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label, index) => <span key={label} className="inline-flex items-center gap-4">{index > 0 && <i className="h-4 w-px bg-[#8999b6]/50" aria-hidden="true" />}{label}</span>)}</div>
      </div>
    </div>
  </footer>;
}
