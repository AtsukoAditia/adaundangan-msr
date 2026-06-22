"use client";

import { useEffect, useMemo, useState } from "react";

interface Props {
  targetDate: string;
}

function calcDiff(target: Date) {
  const now = Date.now();
  const diff = target.getTime() - now;
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export default function Countdown({ targetDate }: Props) {
  const target = useMemo(() => new Date(targetDate), [targetDate]);
  const [remaining, setRemaining] = useState(() => calcDiff(target));

  useEffect(() => {
    const id = setInterval(() => setRemaining(calcDiff(target)), 1_000);
    return () => clearInterval(id);
  }, [target]);

  if (!remaining) {
    return (
      <section className="bg-burgundy px-6 py-16 text-center text-ivory">
        <p className="font-display text-2xl font-bold text-gold">
          Acara telah berlangsung
        </p>
      </section>
    );
  }

  const units = [
    { label: "Hari", value: remaining.days },
    { label: "Jam", value: remaining.hours },
    { label: "Menit", value: remaining.minutes },
    { label: "Detik", value: remaining.seconds },
  ];

  return (
    <section className="bg-burgundy px-6 py-16">
      <div className="mx-auto flex max-w-lg justify-center gap-4">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center">
            <span className="font-display text-4xl font-bold text-gold md:text-5xl">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-xs uppercase tracking-wider text-ivory/80">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
