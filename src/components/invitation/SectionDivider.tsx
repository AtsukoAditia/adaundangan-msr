import { Heart } from "lucide-react";

type Variant = "floral" | "wave" | "dots" | "heart";

interface Props {
  variant?: Variant;
  className?: string;
}

export default function SectionDivider({ variant = "heart", className }: Props) {
  if (variant === "floral") {
    return (
      <div className={`relative py-4 ${className ?? ""}`}>
        <svg
          viewBox="0 0 800 60"
          className="mx-auto w-full max-w-2xl text-gold/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M0 30 Q200 10 400 30 Q600 50 800 30" />
          <path d="M100 30 Q200 45 300 30 Q400 15 500 30 Q600 45 700 30" />
          {/* leaves */}
          <ellipse cx="400" cy="28" rx="8" ry="4" className="fill-gold/20" />
          <ellipse cx="300" cy="32" rx="6" ry="3" className="fill-gold/15" />
          <ellipse cx="500" cy="26" rx="6" ry="3" className="fill-gold/15" />
          <circle cx="400" cy="30" r="2.5" className="fill-gold/50" />
        </svg>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`relative overflow-hidden ${className ?? ""}`}>
        <svg
          viewBox="0 0 1200 40"
          className="w-full text-gold/20"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M0 20 Q150 5 300 20 Q450 35 600 20 Q750 5 900 20 Q1050 35 1200 20" />
          <path d="M0 25 Q150 10 300 25 Q450 40 600 25 Q750 10 900 25 Q1050 40 1200 25" />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`flex items-center justify-center gap-6 py-6 ${className ?? ""}`}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
        <div className="flex gap-2">
          <span className="deco-dot opacity-40" />
          <span className="deco-dot opacity-70" />
          <span className="deco-dot" />
          <span className="deco-dot opacity-70" />
          <span className="deco-dot opacity-40" />
        </div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
      </div>
    );
  }

  // heart (default)
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className ?? ""}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
      <Heart className="h-4 w-4 text-gold/50 fill-gold/30" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
    </div>
  );
}
