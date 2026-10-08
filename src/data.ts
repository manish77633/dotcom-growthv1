const p = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const img = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  perf: p(7693745, 1800, 820),
  ai: "/images/ai-martech.jpg",
  caseRealEstate: p(4082527, 1000, 1300),
  caseEcom: p(6347555, 800, 1200),
  caseB2C: p(8939559, 800, 1200),
  caseEdtech: p(4132435, 800, 1200),
  cta: p(3860809, 1200, 1100),
  insightA: p(7698807, 900, 700),
  insightB: p(7691707, 900, 700),
  insightC: p(7698822, 900, 700),
};

export const brandsPrimary = [
  { name: "InsuranceDekho", cls: "font-abc font-semibold tracking-tight text-[22px]" },
  { name: "Unstop", cls: "font-sans font-extrabold lowercase tracking-tight text-[24px]" },
  { name: "Wooden Street", cls: "font-serif uppercase tracking-[0.14em] text-[15px] font-medium" },
  { name: "Chordia's", cls: "font-serif italic text-[26px]" },
  { name: "Healthy Day", cls: "font-abc font-bold text-[22px]" },
  { name: "Hooptale", cls: "font-sans font-semibold tracking-tight text-[22px]" },
  { name: "UpMarket", cls: "font-abc font-medium tracking-[-0.04em] text-[24px]" },
];

export const brandsSecondary = [
  { name: "TREDU", cls: "font-sans font-extrabold tracking-[0.16em] text-[18px]" },
  { name: "AISHH", cls: "font-abc font-bold tracking-[0.1em] text-[20px]" },
  { name: "Majestic", cls: "font-serif italic text-[26px]" },
  { name: "Hacker Associate", cls: "font-abc font-semibold tracking-tight text-[20px]" },
  { name: "Trimurty", cls: "font-serif font-medium text-[24px]" },
  { name: "ARCH", cls: "font-sans font-bold tracking-[0.3em] text-[18px]" },
  { name: "BCM", cls: "font-abc font-extrabold tracking-tight text-[24px]" },
];
