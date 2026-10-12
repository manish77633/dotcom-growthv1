import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-50 flex size-12 items-center justify-center rounded-full border border-white/20 bg-ink-navy text-white shadow-[0_8px_28px_rgba(12,23,84,0.28)] transition-[opacity,transform,background-color] duration-300 hover:-translate-y-1 hover:bg-electric-cobalt focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-electric-cobalt sm:bottom-7 sm:right-7 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ArrowUp aria-hidden="true" className="size-5" strokeWidth={2.2} />
    </button>
  );
}
