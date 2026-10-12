import { useState, type FormEvent } from "react";
import { Check, Layers, Palette, Send, TrendingUp } from "lucide-react";
import { Button, Tag } from "./ui";
import { DashboardCard, TABS, type TabKey } from "./mocks";
import { Reveal, SectionTexture } from "./MotionLayer";
import { cn } from "../utils/cn";

const lanes = [
  {
    key: "martech",
    icon: Layers,
    label: "Martech & Transformation",
    items: [
      "Martech stack audit & architecture",
      "Marketing automation setup",
      "CRM integration & data flow",
      "AI-powered workflow automation",
    ],
    placeholder: "e.g. Our CRM, ad platforms and email tools don't talk to each other, so we can't see which channels create revenue…",
  },
  {
    key: "growth",
    icon: TrendingUp,
    label: "Growth & Performance",
    items: [
      "B2B demand generation",
      "Paid media — Google, Meta, LinkedIn",
      "SEO & content strategy",
      "Conversion rate optimization",
    ],
    placeholder: "e.g. We spend on paid media every month but pipeline is flat. We want to find what's really working…",
  },
  {
    key: "creative",
    icon: Palette,
    label: "Brand & Creative",
    items: [
      "Brand identity & positioning",
      "Campaign creative & production",
      "Social media management",
      "Thought leadership content",
    ],
    placeholder: "e.g. We're entering a new market and need a clear positioning and campaign creative to launch it…",
  },
];

export default function GrowthEngine() {
  const [lane, setLane] = useState(lanes[0].key);
  const [tab, setTab] = useState<TabKey>("automation");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const active = lanes.find((l) => l.key === lane) ?? lanes[0];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="engine" className="py-12 md:py-16">
      <SectionTexture motif="dots" side="left" />
      <div className="container-x">
        <div className="on-dark relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-ink-navy bg-[radial-gradient(900px_500px_at_100%_0%,rgba(255,94,26,0.35),transparent_60%),radial-gradient(600px_400px_at_0%_100%,rgba(255,142,66,0.18),transparent_60%)] p-4.5 xs:p-6 sm:p-10 lg:p-14">
          <SectionTexture motif="waves" side="right" dark className="opacity-60" />
          <div className="relative z-10 grid gap-8 sm:gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
            {/* left: interactive brief */}
            <Reveal direction="up" className="text-white">
              <Tag tone="glass">Featured solution</Tag>
              <h2 className="h-display on-dark mt-3.5 sm:mt-5 text-[26px] xs:text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.14] sm:leading-[1.04] break-words">
                Build a <em>growth engine</em> that scales.
              </h2>

              {sent ? (
                <div className="mt-7 sm:mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white text-ink-navy">
                    <Check className="size-5" />
                  </span>
                  <div className="h-abc mt-4 text-[20px] sm:text-[22px]">Thanks — your brief is noted.</div>
                  <p className="mt-2 text-[14px] sm:text-[15px] text-white/70">
                    This preview doesn't send data anywhere. To reach the team, call +91 95882 07166 or email
                    dotcomgrowth2020@gmail.com.
                  </p>
                  <button
                    className="mt-4 text-[13.5px] sm:text-[14px] font-medium underline underline-offset-4"
                    onClick={() => setSent(false)}
                  >
                    Edit brief
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 sm:mt-8">
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[14px] sm:text-[15px] font-medium">
                    <span className="flex size-5.5 sm:size-6 items-center justify-center rounded-full bg-white/15 text-[11px] sm:text-[12px]">1</span>
                    Pick your growth lane
                  </div>
                  <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    {lanes.map((l) => (
                      <button
                        type="button"
                        key={l.key}
                        onClick={() => setLane(l.key)}
                        aria-pressed={lane === l.key}
                        className={cn(
                          "trace-border flex items-center sm:flex-col sm:items-start gap-3 rounded-xl sm:rounded-2xl border p-3 sm:p-4 text-left transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                          lane === l.key
                            ? "border-white bg-white text-ink-navy shadow-sm"
                            : "border-white/20 bg-white/5 text-white hover:bg-white/10",
                        )}
                      >
                        <l.icon className="size-5 shrink-0" strokeWidth={1.8} />
                        <span className="text-[13px] font-medium leading-[1.25] flex-1">{l.label}</span>
                        {lane === l.key && (
                          <span className="sm:hidden flex size-4 items-center justify-center rounded-full bg-electric-cobalt text-white">
                            <Check className="size-2.5" />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                  <ul className="mt-3.5 sm:mt-4 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                    {active.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-white/75">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-lavender-mist" />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 sm:mt-8 flex items-center gap-2.5 sm:gap-3 text-[14px] sm:text-[15px] font-medium">
                    <span className="flex size-5.5 sm:size-6 items-center justify-center rounded-full bg-white/15 text-[11px] sm:text-[12px]">2</span>
                    Tell us your goal
                  </div>
                  <div className="mt-3 sm:mt-4 rounded-2xl bg-white p-3.5 sm:p-4 text-charcoal">
                    <textarea
                      value={goal}
                      onChange={(e) => setGoal(e.target.value.slice(0, 300))}
                      placeholder={active.placeholder}
                      rows={3}
                      className="w-full resize-none bg-transparent text-[13.5px] sm:text-[14px] leading-[1.6] outline-none placeholder:text-stone"
                      aria-label="Your growth goal"
                    />
                    <div className="mt-1 flex items-center justify-between border-t border-cream-border pt-2.5 sm:pt-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Work email"
                        aria-label="Work email"
                        className="min-w-0 flex-1 bg-transparent text-[13.5px] sm:text-[14px] outline-none placeholder:text-stone"
                      />
                      <span className="shrink-0 pl-2 text-[10.5px] sm:text-[11px] text-stone">{goal.length} / 300</span>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="mt-4 sm:mt-5 w-full sm:w-auto">
                    <Send className="size-4" /> Request a growth plan
                  </Button>
                  <p className="mt-2.5 sm:mt-3 text-[11.5px] sm:text-[12px] text-white/50">
                    Free consultation. We'll only use your details to respond to this request.
                  </p>
                </form>
              )}
            </Reveal>

            {/* right: dashboard preview */}
            <Reveal direction="up" delay={0.18} className="relative flex items-center overflow-hidden">
              <div className="absolute inset-x-4 inset-y-6 hidden sm:block rotate-[2deg] rounded-[22px] bg-[#162268] ring-1 ring-white/10" aria-hidden />
              <div className="relative w-full rounded-[20px] sm:rounded-[22px] bg-lavender-mist/95 p-2.5 sm:p-4">
                <div className="hide-scrollbar mb-2.5 sm:mb-3 flex gap-1 overflow-x-auto rounded-full bg-white p-1" role="tablist">
                  {TABS.map((t) => (
                    <button
                      key={t.key}
                      role="tab"
                      aria-selected={tab === t.key}
                      onClick={() => setTab(t.key)}
                      className={cn(
                        "relative flex-1 whitespace-nowrap rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-colors",
                        tab === t.key ? "text-white" : "text-graphite/60 hover:text-charcoal",
                      )}
                    >
                      {tab === t.key && (
                        <span className="absolute inset-0 rounded-full bg-ink-navy" aria-hidden="true" />
                      )}
                      <span className="relative z-10">{t.label}</span>
                    </button>
                  ))}
                </div>
                <div key={tab}>
                  <DashboardCard tab={tab} compact className="min-h-[280px] sm:min-h-[340px] border-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
