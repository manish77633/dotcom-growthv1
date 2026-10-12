import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal } from "./MotionLayer";

/* ---------- Button (pill, flat — colour carries the weight) ---------- */
type ButtonProps = {
  variant?: "primary" | "secondary" | "dark" | "ghost" | "onDark";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  arrow,
  ...rest
}: ButtonProps) {
  const base =
    "action-button inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-electric-cobalt";
  const sizes = {
    sm: "text-[14px] px-5 py-2.5",
    md: "text-[16px] px-6 py-3",
    lg: "text-[16px] px-7 py-3.5",
  };
  const variants = {
    primary: "bg-electric-cobalt text-white hover:bg-[#e04f12]",
    secondary: "bg-white text-charcoal border border-ink-navy/15 hover:border-ink-navy/45",
    dark: "bg-ink-navy text-white hover:bg-[#162268]",
    ghost: "text-graphite hover:bg-ink-navy/5",
    onDark: "bg-white/10 text-white border border-white/25 hover:bg-white/20",
  };
  const cls = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4" strokeWidth={2} />}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}

/* ---------- Text link with arrow ---------- */
export function TextLink({
  href = "#contact",
  children,
  className,
  onDark,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "motion-link group inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors",
        onDark ? "text-white hover:text-lavender-mist" : "text-ink-navy hover:text-electric-cobalt",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
    </a>
  );
}

/* ---------- Pill tag / label ---------- */
export function Tag({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "mist" | "glass";
  className?: string;
}) {
  const tones = {
    light: "bg-white text-ink-navy border border-cream-border",
    dark: "bg-ink-navy text-white",
    mist: "bg-lavender-mist text-ink-navy",
    glass: "bg-white/15 text-white border border-white/30 backdrop-blur-sm",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------- Photo ---------- */
export function Photo({
  src,
  alt = "",
  className,
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      decoding="async"
      className={cn("object-cover bg-lavender-mist", className)}
      style={style}
    />
  );
}

/* ---------- Section heading (eyebrow + serif display + optional action) ---------- */
export function SectionHead({
  eyebrow,
  title,
  sub,
  action,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  if (align === "center") {
    return (
      <div className={cn("mx-auto max-w-[820px] text-center", className)}>
        <Reveal distance={12}><div className="eyebrow">{eyebrow}</div></Reveal>
        <Reveal delay={0.08} distance={32}>
          <h2 className="h-display mt-4 sm:mt-5 text-[28px] xs:text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.12] sm:leading-[1.04]">{title}</h2>
        </Reveal>
        {sub && (
          <Reveal delay={0.18} distance={16}>
            <p className="mx-auto mt-3.5 sm:mt-5 max-w-[620px] text-[15px] sm:text-[17px] leading-[1.6] text-graphite/70">{sub}</p>
          </Reveal>
        )}
      </div>
    );
  }
  return (
    <div className={cn("flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="min-w-0 max-w-[760px] flex-1">
        <Reveal distance={12}><div className="eyebrow">{eyebrow}</div></Reveal>
        <Reveal delay={0.08} distance={32}>
          <h2 className="h-display mt-4 sm:mt-5 text-[28px] xs:text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.16] sm:leading-[1.12]">{title}</h2>
        </Reveal>
        {sub && (
          <Reveal delay={0.18} distance={16}>
            <p className="mt-3.5 sm:mt-5 max-w-[600px] text-[15px] sm:text-[17px] leading-[1.6] text-graphite/70">{sub}</p>
          </Reveal>
        )}
      </div>
      {action && <Reveal delay={0.2} className="shrink-0">{action}</Reveal>}
    </div>
  );
}

/* ---------- Logo ---------- */
export function Logo({
  dark,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#home"
      className={cn(
        "group inline-flex items-center select-none font-abc font-black tracking-[-0.035em] text-[23px] sm:text-[25px] leading-none transition-opacity hover:opacity-90",
        className,
      )}
      aria-label="dotcom Growth home"
    >
      <span className="text-[#ff5e1a]">dotcom</span>
      <span className={cn("ml-[1px] inline-flex items-center", dark ? "text-white" : "text-charcoal")}>
        <span>Gr</span>
        <span
          className={cn(
            "mx-[1.5px] inline-flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
            dark ? "bg-white text-[#ff5e1a]" : "bg-charcoal text-[#ff5e1a]",
            "size-[1.05em] align-middle -translate-y-[0.03em]",
          )}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-[62%] fill-current"
            aria-hidden="true"
          >
            <path d="M12 4.5L6.5 10.5H9.75V19.5H14.25V10.5H17.5L12 4.5Z" />
          </svg>
        </span>
        <span>wth</span>
      </span>
    </a>
  );
}

/* ---------- Logo strip ---------- */
export function LogoStrip({
  title,
  brands,
  className,
}: {
  title?: string;
  brands: { name: string; cls: string }[];
  className?: string;
}) {
  return (
    <div className={cn("container-x", className)}>
      {title && (
        <Reveal distance={12}>
          <p className="text-center text-[14px] font-medium text-graphite/70">{title}</p>
        </Reveal>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:justify-between lg:gap-x-6">
        {brands.map((b) => (
          <span
            key={b.name}
            className={cn("whitespace-nowrap text-charcoal/80", b.cls)}
          >
            {b.name}
          </span>
        ))}
      </div>
    </div>
  );
}
