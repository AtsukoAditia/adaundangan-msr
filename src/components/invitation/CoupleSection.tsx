import { Person } from "@/types/invitation";
import { Heart } from "lucide-react";
import Image from "next/image";

interface Props {
  groom: Person;
  bride: Person;
}

function PersonCard({ person, flip }: { person: Person; flip?: boolean }) {
  const displayName = person.nickname
    ? `${person.name} (${person.nickname})`
    : person.name;
  return (
    <div
      className={`flex flex-col items-center gap-4 ${flip ? "md:flex-col-reverse" : ""}`}
    >
      {person.photoUrl && (
        <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-gold shadow-lg md:h-64 md:w-64">
          <Image
            src={person.photoUrl}
            alt={person.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 208px, 256px"
          />
        </div>
      )}
      <div className="text-center">
        <h3 className="font-display text-2xl font-bold text-burgundy md:text-3xl">
          {displayName}
        </h3>
        {person.childOrder && (
          <p className="mt-1 text-sm text-burgundy/70">{person.childOrder}</p>
        )}
        <p className="mt-1 text-sm text-burgundy/60">
          Putra/i dari Bpk. {person.fatherName} & Ibu {person.motherName}
        </p>
      </div>
    </div>
  );
}

export default function CoupleSection({ groom, bride }: Props) {
  return (
    <section id="couple" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-burgundy">
          Mempelai
        </h2>
        <p className="mb-12 text-center text-sm text-burgundy/60">
          Dengan penuh rasa syukur, kami memperkenalkan kedua mempelai
        </p>
        <div className="relative flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center md:gap-16">
          <PersonCard person={groom} />
          <div className="hidden md:flex md:items-center md:pt-28">
            <Heart className="h-8 w-8 shrink-0 text-gold" />
          </div>
          <PersonCard person={bride} flip />
        </div>
      </div>
    </section>
  );
}
