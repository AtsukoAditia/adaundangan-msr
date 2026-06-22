import { StoryItem } from "@/types/invitation";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Heart } from "lucide-react";

interface Props {
  story: StoryItem[];
}

export default function StorySection({ story }: Props) {
  if (!story.length) return null;

  return (
    <section id="story" className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-burgundy">
          Kisah Kami
        </h2>
        <p className="mb-12 text-center text-sm text-burgundy/60">
          Perjalanan cinta yang membawa kami ke hari bahagia ini
        </p>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gold/30 md:left-1/2" />
          {story.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.title}
                className={`relative mb-10 flex items-start gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
                  <Heart className="h-5 w-5 fill-gold text-gold" />
                </div>
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <p className="font-display text-lg font-bold text-burgundy">
                    {item.title}
                  </p>
                  <p className="mb-2 text-xs text-gold">
                    {format(new Date(item.date), "dd MMMM yyyy", {
                      locale: localeId,
                    })}
                  </p>
                  <p className="text-sm leading-relaxed text-burgundy/70">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
