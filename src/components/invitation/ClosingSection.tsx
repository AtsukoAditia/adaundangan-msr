interface Props {
  coupleName1: string;
  coupleName2: string;
  closingMessage?: string;
}

export default function ClosingSection({
  coupleName1,
  coupleName2,
  closingMessage,
}: Props) {
  const message =
    closingMessage ??
    "Atas kehadiran dan doa restu yang telah diberikan, kami mengucapkan terima kasih yang sebesar-besarnya.";

  return (
    <section className="bg-ivory px-6 py-20 text-center">
      <div className="mx-auto max-w-xl">
        <p className="mb-6 text-sm leading-relaxed text-burgundy/70">
          {message}
        </p>
        <p className="mb-2 font-script text-3xl text-burgundy">
          {coupleName1} & {coupleName2}
        </p>
        <p className="text-xs text-burgundy/40">Kami yang berbahagia</p>
      </div>
    </section>
  );
}
