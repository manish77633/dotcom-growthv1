import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button, Logo } from "./ui";
import { cn } from "../utils/cn";

const links: [string, string][] = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Case Studies", "#case-studies"],
  ["About", "#about"],
  ["Insights", "#insights"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-ink-navy text-white">
        <div className="container-x flex min-h-10 items-center justify-center gap-3 py-2 text-[13px]">
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]">New</span>
          <span className="hidden text-white/50 sm:inline">|</span>
          <span className="text-white/90">
            <span className="hidden sm:inline">Engineering arm now live: </span>
            350+ engineers on demand for AI, custom software and ERP.
          </span>
          <a href="#services" className="group hidden items-center gap-1 font-medium underline decoration-white/40 underline-offset-4 hover:decoration-white sm:inline-flex">
            Learn more
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Nav */}
      <header
        className={cn(
          "sticky top-0 z-40 bg-warm-canvas/90 backdrop-blur-md transition-[border-color] duration-200",
          scrolled ? "border-b border-cream-border" : "border-b border-transparent",
        )}
      >
        <div className="container-x flex h-[68px] items-center justify-between gap-6">
          <div className="flex items-center gap-10">
            <Logo />
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="nav-link rounded-full px-4 py-2 text-[14px] font-medium text-graphite transition-colors hover:bg-ink-navy/5"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="ghost" size="sm" href="tel:+919588207166">
              +91 95882 07166
            </Button>
            <Button size="sm" href="#contact">
              Get Started
            </Button>
          </div>
          <button
            className="flex size-10 items-center justify-center rounded-full border border-cream-border bg-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-cream-border bg-warm-canvas lg:hidden">
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-[16px] font-medium text-graphite hover:bg-ink-navy/5"
                >
                  {label}
                </a>
              ))}
              <Button href="#contact" className="mt-3" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
