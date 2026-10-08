import { useEffect, useRef, useState, type FormEvent } from "react";
import { ChevronDown, Send, Sparkles } from "lucide-react";
import { cn } from "../utils/cn";

type Msg = { from: "user" | "bot"; text: string };

const chips = ["What services do you offer?", "How do you measure growth?", "Book a call"];

function reply(q: string): string {
  const s = q.toLowerCase();
  if (/service|offer|do you do|capabilit/.test(s))
    return "We work across three hubs: Martech & Digital Transformation, Growth & Performance Marketing, and Brand & Creative Production — from marketing automation and CRM integration to SEO, paid media, AI development and brand strategy.";
  if (/measure|kpi|roi|report|attribution|result/.test(s))
    return "Against revenue KPIs — pipeline, P&L contribution and efficiency — not impressions or likes. We set up analytics and attribution infrastructure first so spend can be tied to outcomes.";
  if (/book|call|contact|talk|demo|consult|schedule|reach/.test(s))
    return "Happy to help. Call +91 95882 07166, email dotcomgrowth2020@gmail.com, or use the 'Request a growth plan' form on this page for a free consultation.";
  if (/b2b|saas|industr|who/.test(s))
    return "We work with B2B companies as well as B2C, e-commerce and marketplace brands — across real estate, edtech, retail and more.";
  return "Good question — the team can answer that best on a free consultation. Call +91 95882 07166 or email dotcomgrowth2020@gmail.com.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(() => typeof window !== "undefined" && window.innerWidth >= 1024);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [msgs]);

  const ask = (q: string) => {
    const t = q.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: "user", text: t }, { from: "bot", text: reply(t) }]);
    setText("");
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    ask(text);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-smoke bg-white py-2 pl-2 pr-5 text-[14px] text-charcoal shadow-[0_8px_32px_rgba(12,23,84,0.12)] transition-shadow hover:shadow-[0_8px_32px_rgba(12,23,84,0.2)]"
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-electric-cobalt text-white">
          <Sparkles className="size-4" />
        </span>
        Ask DotCom Growth
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-4 left-1/2 z-50 w-[360px] max-w-[calc(100vw-24px)] -translate-x-1/2 rounded-2xl border border-smoke bg-white shadow-[0_8px_32px_rgba(12,23,84,0.12)]"
      role="dialog"
      aria-label="Ask DotCom Growth"
    >
      <div className="flex items-center gap-3 px-4 pb-2 pt-3.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-electric-cobalt text-white">
          <Sparkles className="size-4" />
        </span>
        <div className="flex-1 text-[14px] font-medium leading-tight text-charcoal">
          How can we help grow your business?
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Minimise chat"
          className="flex size-7 items-center justify-center rounded-full text-graphite hover:bg-ink-navy/5"
        >
          <ChevronDown className="size-4" />
        </button>
      </div>

      {msgs.length > 0 && (
        <div className="hide-scrollbar mx-4 mb-2 max-h-[190px] space-y-2 overflow-y-auto">
          {msgs.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[90%] rounded-2xl px-3.5 py-2 text-[13px] leading-[1.5]",
                m.from === "user"
                  ? "ml-auto bg-ink-navy text-white"
                  : "bg-warm-canvas text-charcoal",
              )}
            >
              {m.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>
      )}

      <form onSubmit={submit} className="mx-4 flex items-center gap-2 rounded-full border border-cream-border bg-warm-canvas py-1 pl-4 pr-1">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask about growth, martech, SEO…"
          aria-label="Ask a question"
          className="min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-stone"
        />
        <button
          type="submit"
          aria-label="Send"
          className="flex size-8 items-center justify-center rounded-full bg-electric-cobalt text-white transition-colors hover:bg-[#e04f12]"
        >
          <Send className="size-3.5" />
        </button>
      </form>

      <div className="flex flex-wrap gap-2 px-4 pb-4 pt-3">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => ask(c)}
            className="rounded-full bg-warm-canvas px-3.5 py-2 text-[12.5px] text-charcoal transition-colors hover:bg-lavender-mist"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
