import { useId } from "react";
import { ArrowRight, Check, Database, Target, Zap } from "lucide-react";
import { cn } from "../utils/cn";

export type TabKey = "campaigns" | "funnel" | "leads" | "automation" | "growth";

export const TABS: { key: TabKey; label: string }[] = [
  { key: "campaigns", label: "Campaigns" },
  { key: "funnel", label: "Funnel" },
  { key: "leads", label: "Leads" },
  { key: "automation", label: "Automation" },
  { key: "growth", label: "Growth" },
];

const GREEN = "#22a06b";
const AMBER = "#f5a524";
const RED = "#e5484d";

function PanelTitle({ title, sub, chip }: { title: string; sub?: string; chip?: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="font-abc text-[16px] font-medium leading-tight tracking-[-0.01em] text-charcoal">{title}</div>
        {sub && <div className="mt-0.5 text-[12px] text-stone">{sub}</div>}
      </div>
      {chip && (
        <span className="rounded-full bg-lavender-mist px-2.5 py-1 text-[10px] font-medium text-ink-navy">{chip}</span>
      )}
    </div>
  );
}

/* ---------- Campaign performance: stacked bars by channel ---------- */
function CampaignPanel({ compact }: { compact?: boolean }) {
  // Indexed sample revenue by week. Channel mix and totals vary like a real campaign.
  const weeks = [
    [35, 20, 12], [43, 22, 13], [39, 28, 15], [48, 31, 18],
    [46, 27, 20], [55, 32, 18], [51, 39, 21], [62, 38, 24],
  ];
  const k = compact ? 0.62 : 1;
  return (
    <div>
      <PanelTitle title="Campaign performance" sub="Revenue-attributed, by channel" chip="Last 8 weeks" />
      <div className="relative mt-4 flex items-end gap-2 border-b border-cream-border" style={{ height: 156 * k }}>
        <div className="pointer-events-none absolute inset-x-0 top-1/3 border-t border-dashed border-cream-border" />
        <div className="pointer-events-none absolute inset-x-0 top-2/3 border-t border-dashed border-cream-border" />
        {weeks.map((w, i) => (
          <div key={i} className="relative flex flex-1 flex-col-reverse gap-[2px]" title={`Week ${i + 1}: ${w.reduce((sum, value) => sum + value, 0)} indexed revenue · Google ${w[0]}, Meta ${w[1]}, LinkedIn ${w[2]}`}>
            <div className="rounded-b-[3px] bg-ink-navy" style={{ height: w[0] * k }} />
            <div className="bg-electric-cobalt" style={{ height: w[1] * k }} />
            <div className="rounded-t-[3px] bg-[#ffcaa8]" style={{ height: w[2] * k }} />
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between gap-2 text-[9px] text-stone">
        {weeks.map((_, i) => <span key={i} className="flex-1 text-center">W{i + 1}</span>)}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-graphite/70">
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-ink-navy" /> Google
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-electric-cobalt" /> Meta
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-[#ffcaa8]" /> LinkedIn
        </span>
      </div>
    </div>
  );
}

/* ---------- Conversion funnel ---------- */
function FunnelPanel({ compact }: { compact?: boolean }) {
  const stages: [string, number, string][] = [
    ["Visitors", 12480, "#0c1754"],
    ["Leads", 1148, "#18224b"],
    ["Marketing qualified", 412, "#ff5e1a"],
    ["Sales qualified", 146, "#ff8142"],
    ["Closed-won", 32, "#ffd5be"],
  ];
  return (
    <div>
      <PanelTitle title="Conversion funnel" sub="Visit to revenue, one view" chip="All channels" />
      <div className={cn("mt-4 space-y-2.5", compact && "mt-3 space-y-2")}>
        {stages.map(([label, count, bg], index) => (
          <div key={label} className="space-y-1">
            <div className="flex items-center justify-between text-[11.5px] font-medium leading-none">
              <span className="text-charcoal truncate">{label}</span>
              <span className="text-stone font-semibold shrink-0 pl-2" title={index ? `${(count / stages[index - 1][1] * 100).toFixed(1)}% from previous stage` : "Total visitors"}>{count.toLocaleString()} <span className="font-normal">{index ? `· ${(count / stages[index - 1][1] * 100).toFixed(1)}%` : ""}</span></span>
            </div>
            <div className="h-2 w-full rounded-full bg-warm-canvas overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${index ? (count / stages[index - 1][1] * 100).toFixed(1) : 100}%`, background: bg }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Lead generation ---------- */
function LeadsPanel({ compact }: { compact?: boolean }) {
  const rows = [
    { src: "LinkedIn Ads", ev: "Demo request · score 86", q: "High", c: GREEN },
    { src: "Organic search", ev: "Pricing enquiry · score 81", q: "High", c: GREEN },
    { src: "Google Ads", ev: "Contact form · score 64", q: "Medium", c: AMBER },
    { src: "Email nurture", ev: "Webinar signup · score 58", q: "Medium", c: AMBER },
    { src: "Meta Ads", ev: "Lead form · score 32", q: "Low", c: RED },
  ];
  const shown = compact ? rows.slice(0, 4) : rows;
  return (
    <div>
      <PanelTitle title="Lead generation" sub="Source quality, scored in the CRM" chip="Today" />
      <div className="mt-3 divide-y divide-cream-border">
        {shown.map((r) => (
          <div key={r.src} className="flex items-center gap-3 py-2.5">
            <span className="size-2 shrink-0 rounded-full" style={{ background: r.c }} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] font-medium text-charcoal">{r.src}</div>
              <div className="truncate text-[11px] text-stone">{r.ev}</div>
            </div>
            <span className="rounded-full bg-warm-canvas px-2.5 py-1 text-[11px] font-medium text-graphite">
              {r.q} intent
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Automation workflow ---------- */
function Node({
  icon,
  title,
  sub,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 rounded-xl border border-cream-border bg-white px-3 py-2.5", className)}>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-lavender-mist text-electric-cobalt">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="truncate text-[13px] font-medium leading-tight text-charcoal">{title}</div>
        <div className="truncate text-[11px] text-stone">{sub}</div>
      </div>
    </div>
  );
}

export function AutomationPanel({ compact }: { compact?: boolean }) {
  const line = <div className="mx-auto h-4 w-px bg-smoke" />;
  return (
    <div>
      <PanelTitle title="Lifecycle automation" sub="Lead capture to hand-off" chip="Active" />
      <div className="mt-4">
        <Node icon={<Zap className="size-4" />} title="Form submitted" sub="247 triggers this week" />
        {line}
        <Node icon={<Database className="size-4" />} title="Enrich and dedupe in CRM" sub="241 records synced" />
        {line}
        <Node icon={<Target className="size-4" />} title="Score the lead" sub="241 leads scored" />
        <div className="mx-auto h-4 w-px bg-smoke" />
        <div className={cn("grid gap-2", compact ? "grid-cols-1" : "grid-cols-2")}>
          <div className="flex items-center gap-2 rounded-xl border border-cream-border bg-warm-canvas px-3 py-2.5 text-[12px] font-medium text-charcoal">
            <span className="size-2 rounded-full" style={{ background: GREEN }} /> Route to sales · 68
          </div>
          {!compact && (
            <div className="flex items-center gap-2 rounded-xl border border-cream-border bg-warm-canvas px-3 py-2.5 text-[12px] font-medium text-charcoal">
              <span className="size-2 rounded-full" style={{ background: AMBER }} /> Nurture · 173
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Growth: gradient area chart + gauge ---------- */
function GrowthPanel({ compact }: { compact?: boolean }) {
  const uid = useId().replace(/:/g, "");
  const line = "M0 100 L35 91 L70 96 L105 78 L140 82 L175 63 L210 68 L245 48 L280 55 L320 28";
  return (
    <div>
      <PanelTitle title="Revenue attribution" sub="Pipeline to P&L contribution" chip="Trend" />
      <div className="mt-3 flex items-center gap-4">
        <div className="relative shrink-0">
          <svg width={compact ? 70 : 88} height={compact ? 70 : 88} viewBox="0 0 88 88" className="-rotate-90">
            <circle cx="44" cy="44" r="35" fill="none" stroke="#ffe8dc" strokeWidth="8" />
            <circle
              cx="44"
              cy="44"
              r="35"
              fill="none"
              stroke="#ff5e1a"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="158 220"
            />
            <circle
              cx="44"
              cy="44"
              r="23"
              fill="none"
              stroke="#0c1754"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="122 145"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-ink-navy" aria-label="72% of target reached">
            <span className={cn("font-bold leading-none", compact ? "text-[10px]" : "text-[14px]")}>72%</span>
            <span className={cn("mt-0.5 font-semibold uppercase leading-none tracking-normal", compact ? "text-[6px]" : "text-[7px]")}>target</span>
          </div>
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          {[
            ["Pipeline velocity", "+12%", GREEN],
            ["Cost per lead", "−3%", GREEN],
            ["Attribution coverage", "84%", AMBER],
          ].map(([l, s, c]) => (
            <div key={l} className="flex items-center justify-between gap-2 text-[12px]">
              <span className="truncate text-graphite/80">{l}</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-charcoal">
                <i className="size-2 rounded-full" style={{ background: c }} />
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 320 120" className="mt-3 w-full" preserveAspectRatio="none" style={{ height: compact ? 70 : 110 }}>
        <defs>
          <linearGradient id={`${uid}-g`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="0.55" stopColor="#ff8a73" stopOpacity="0.3" />
            <stop offset="1" stopColor="#ff8a73" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 40 H320 M0 80 H320" fill="none" stroke="#ece7e3" strokeDasharray="3 5" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d={`${line} L320 120 L0 120 Z`} fill={`url(#${uid}-g)`} />
        <path d={line} fill="none" stroke="#0c1754" strokeWidth="2.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <circle cx="320" cy="28" r="3.5" fill="#ff5e1a" />
      </svg>
      <div className="flex justify-between text-[9px] text-stone"><span>Week 1</span><span>Week 10</span></div>
    </div>
  );
}

/* ---------- Dashboard card (switches panel by tab) ---------- */
export function DashboardCard({
  tab,
  compact,
  className,
  footer = true,
}: {
  tab: TabKey;
  compact?: boolean;
  className?: string;
  footer?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-cream-border bg-white text-left shadow-[0_4px_24px_rgba(12,23,84,0.08)]",
        compact ? "p-4" : "p-6",
        className,
      )}
    >
      {tab === "campaigns" && <CampaignPanel compact={compact} />}
      {tab === "funnel" && <FunnelPanel compact={compact} />}
      {tab === "leads" && <LeadsPanel compact={compact} />}
      {tab === "automation" && <AutomationPanel compact={compact} />}
      {tab === "growth" && <GrowthPanel compact={compact} />}
      {footer && (
        <div className="mt-4 flex items-center justify-between border-t border-cream-border pt-3 text-[10.5px] text-stone">
          <span>Illustrative interface · sample data</span>
          <span className="inline-flex items-center gap-1 text-ink-navy">
            Full view <ArrowRight className="size-3" />
          </span>
        </div>
      )}
    </div>
  );
}

/* ---------- Small reusable mock: CRM field sync ---------- */
export function CrmSyncMock() {
  const rows = [
    ["Lead score", "Score"],
    ["Campaign source", "Source"],
    ["Lifecycle stage", "Stage"],
  ];
  return (
    <div className="rounded-2xl border border-cream-border bg-white p-4 shadow-[0_4px_24px_rgba(12,23,84,0.08)]">
      <div className="flex items-center justify-between">
        <div className="font-abc text-[14px] font-medium text-charcoal">CRM field sync</div>
        <span className="inline-flex items-center gap-1 rounded-full bg-lavender-mist px-2 py-0.5 text-[10px] font-medium text-ink-navy">
          <Check className="size-3" /> Mapped
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {rows.map(([a, b]) => (
          <div key={a} className="flex items-center gap-2 text-[12px]">
            <span className="flex-1 rounded-lg bg-warm-canvas px-3 py-2 text-graphite">{a}</span>
            <ArrowRight className="size-3.5 shrink-0 text-electric-cobalt" />
            <span className="flex-1 rounded-lg border border-cream-border px-3 py-2 text-charcoal">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
