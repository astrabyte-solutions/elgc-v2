import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  image: string;
  breadcrumbs?: BreadcrumbItem[];
  label?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  bottomBar?: ReactNode;
  overlay?: "left" | "full";
}

export function PageHero({
  image,
  breadcrumbs,
  label,
  title,
  description,
  children,
  bottomBar,
  overlay = "left",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[480px] overflow-hidden md:min-h-[560px]">
      <Image
        src={image}
        alt="Hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className={`absolute inset-0 ${
          overlay === "left"
            ? "bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40"
            : "bg-navy/75"
        }`}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 lg:px-8 lg:py-28">
        {breadcrumbs && (
          <nav className="mb-4 flex items-center gap-1 text-sm text-white/70">
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {item.href ? (
                  <Link href={item.href} className="hover:text-green">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-green">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {label && (
          <p className="mb-3 text-sm font-bold tracking-widest text-green uppercase">{label}</p>
        )}
        <h1 className="max-w-3xl text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
      {bottomBar && (
        <div className="relative border-t border-white/10 bg-navy/90 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">{bottomBar}</div>
        </div>
      )}
    </section>
  );
}
