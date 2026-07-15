import { QuoteConfig } from "@/types/invitation";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface Props {
  quote: QuoteConfig;
}

export default function QuoteSection({ quote }: Props) {
  return (
    <section className="relative bg-ivory px-6 py-24 overflow-hidden">
      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <ScrollReveal>
          {/* Top ornament */}
          <div className="ornament-line mb-8">
            <div className="deco-dot" />
          </div>

          <Quote className="mx-auto mb-6 h-10 w-10 text-gold/30" />

          <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed text-burgundy">
            &ldquo;{quote.text}&rdquo;
          </blockquote>

          {quote.source && (
            <cite className="mt-6 block text-sm not-italic text-burgundy/50 font-medium">
              &mdash; {quote.source}
            </cite>
          )}

          {/* Bottom ornament */}
          <div className="ornament-line mt-8">
            <div className="deco-dot" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
