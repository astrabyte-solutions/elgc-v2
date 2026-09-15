interface HomeSectionHeadingProps {
  title: string;
  light?: boolean;
  className?: string;
}

export function HomeSectionHeading({ title, light = false, className = "" }: HomeSectionHeadingProps) {
  return (
    <div className={className}>
      <h2
        className={`text-2xl font-bold sm:text-3xl lg:text-[2rem] ${
          light ? "text-white" : "text-[#0f2744]"
        }`}
      >
        {title}
      </h2>
      <div className="mt-4 h-[3px] w-14 rounded-sm bg-[#22c55e]" aria-hidden />
    </div>
  );
}
