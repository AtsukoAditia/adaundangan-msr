import { QuoteConfig } from "@/types/invitation";
import { Quote } from "lucide-react";

interface Props {
  quote: QuoteConfig;
}

export default function QuoteSection({ quote }: Props) {
  return (
    <section className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Quote className="mx-auto mb-6 h-10 w-10 text-gold" />
        <blockquote className="font-display text-xl italic leading-relaxed text-burgundy md:text-2xl">
          &ldquo;{quote.text}&rdquo;
        </blockquote>
        {quote.source && (
          <cite className="mt-4 block text-sm not-italic text-burgundy/60">
            &mdash; {quote.source}
          </cite>
        )}
      </div>
    </section>
  );
}
