function DotCluster() {
  return (
    <div className="grid grid-cols-2 gap-[5px]">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="size-[5px] rounded-full bg-[#b0bcc6]" />
      ))}
    </div>
  );
}

interface ServicesDotBackgroundProps {
  count: number;
}

export function ServicesDotBackground({ count }: ServicesDotBackgroundProps) {
  return (
    <>
      <div
        className="pointer-events-none absolute top-28 bottom-16 -left-2 hidden w-8 flex-col justify-evenly py-6 sm:flex lg:-left-10 xl:-left-14"
        aria-hidden
      >
        {Array.from({ length: count }).map((_, i) => (
          <DotCluster key={`l-${i}`} />
        ))}
      </div>
      <div
        className="pointer-events-none absolute top-28 bottom-16 -right-2 hidden w-8 flex-col justify-evenly py-6 sm:flex lg:-right-10 xl:-right-14"
        aria-hidden
      >
        {Array.from({ length: count }).map((_, i) => (
          <DotCluster key={`r-${i}`} />
        ))}
      </div>
    </>
  );
}
