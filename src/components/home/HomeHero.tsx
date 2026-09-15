"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DEMO_HERO_SLIDES } from "@/lib/home-demo-data";
import "@/styles/home-scroll-demo.css";

const MOBILE_BP = 900;
const MOBILE_AUTO_MS = 5000;
const SLIDE_COUNT = DEMO_HERO_SLIDES.length;
const SNAP_THRESHOLD = 0.18;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function HomeHero() {
  const heroScrollRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const progressItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isSnappingRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const pauseAutoRef = useRef(false);

  const isMobileViewport = useCallback(() => window.innerWidth <= MOBILE_BP, []);

  useEffect(() => {
    const syncMobile = () => setIsMobile(isMobileViewport());
    syncMobile();
    window.addEventListener("resize", syncMobile);
    return () => window.removeEventListener("resize", syncMobile);
  }, [isMobileViewport]);

  useEffect(() => {
    if (!isMobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (pauseAutoRef.current) return;
      setMobileIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, MOBILE_AUTO_MS);

    return () => window.clearInterval(timer);
  }, [isMobile]);

  useEffect(() => {
    const heroScroll = heroScrollRef.current;
    if (!heroScroll) return;

    const slides = slideRefs.current;
    const progressItems = progressItemRefs.current;
    const fills = fillRefs.current;

    function getMetrics() {
      const scrollable = heroScroll!.offsetHeight - window.innerHeight;
      const rect = heroScroll!.getBoundingClientRect();
      const progress = clamp(-rect.top / Math.max(scrollable, 1), 0, 1);
      const phase = progress * (SLIDE_COUNT - 1);
      return { scrollable, rect, progress, phase };
    }

    function getScrollYForSlide(slideIndex: number) {
      const { scrollable, rect } = getMetrics();
      const targetProgress = slideIndex / (SLIDE_COUNT - 1);
      return window.scrollY + rect.top + targetProgress * scrollable;
    }

    function getSnapIndex(phase: number) {
      const base = Math.floor(phase);
      const fraction = phase - base;
      const direction = scrollDirectionRef.current;

      if (direction > 0) {
        return fraction > SNAP_THRESHOLD
          ? Math.min(base + 1, SLIDE_COUNT - 1)
          : base;
      }
      if (direction < 0) {
        return fraction < 1 - SNAP_THRESHOLD
          ? base
          : Math.min(base + 1, SLIDE_COUNT - 1);
      }
      return Math.round(phase);
    }

    function updateHeroSlides() {
      if (isMobileViewport()) return;

      const { phase } = getMetrics();
      const activeIndex = Math.round(phase);

      slides.forEach((slide, index) => {
        if (!slide) return;
        const x = (index - phase) * 100;
        slide.style.transform = `translateX(${x}%)`;
        slide.classList.toggle("is-active", index === activeIndex);
      });

      progressItems.forEach((item, index) => {
        item?.classList.toggle("is-active", index === activeIndex);
      });

      fills.forEach((fill, index) => {
        if (!fill) return;
        const local = clamp(phase - index + 1, 0, 1);
        fill.style.width = `${local * 100}%`;
      });
    }

    function snapToSlide(slideIndex: number) {
      if (isMobileViewport() || isSnappingRef.current) return;

      const { progress } = getMetrics();
      const targetProgress = slideIndex / (SLIDE_COUNT - 1);
      if (Math.abs(progress - targetProgress) < 0.01) return;

      isSnappingRef.current = true;
      window.scrollTo({ top: getScrollYForSlide(slideIndex), behavior: "smooth" });
      window.setTimeout(() => {
        isSnappingRef.current = false;
      }, 550);
    }

    function isInHeroZone() {
      const rect = heroScroll!.getBoundingClientRect();
      return rect.bottom > window.innerHeight * 0.25 && rect.top < window.innerHeight * 0.75;
    }

    function snapToNearestSlide() {
      if (isMobileViewport() || isSnappingRef.current || !isInHeroZone()) return;

      const { phase, progress } = getMetrics();
      const snappedIndex = getSnapIndex(phase);
      const targetProgress = snappedIndex / (SLIDE_COUNT - 1);

      if (Math.abs(progress - targetProgress) < 0.01) return;

      if (snappedIndex === SLIDE_COUNT - 1 && progress >= 0.99 && scrollDirectionRef.current > 0) {
        return;
      }

      snapToSlide(snappedIndex);
    }

    function onScroll() {
      const y = window.scrollY;
      if (y !== lastScrollYRef.current) {
        scrollDirectionRef.current = y > lastScrollYRef.current ? 1 : -1;
        lastScrollYRef.current = y;
      }
      updateHeroSlides();
    }

    function onScrollEnd() {
      snapToNearestSlide();
    }

    let wheelLocked = false;
    function onWheel(e: WheelEvent) {
      if (isMobileViewport() || isSnappingRef.current || wheelLocked) return;

      const { rect, phase, progress } = getMetrics();
      if (rect.bottom < window.innerHeight * 0.35 || rect.top > window.innerHeight * 0.35) {
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const settledIndex = Math.round(phase);

      if (direction > 0 && settledIndex >= SLIDE_COUNT - 1 && progress >= 0.97) return;
      if (direction < 0 && settledIndex <= 0 && progress <= 0.03) return;

      const targetIndex = clamp(settledIndex + direction, 0, SLIDE_COUNT - 1);
      if (targetIndex === settledIndex) return;

      e.preventDefault();
      wheelLocked = true;
      scrollDirectionRef.current = direction;
      snapToSlide(targetIndex);
      window.setTimeout(() => {
        wheelLocked = false;
      }, 700);
    }

    lastScrollYRef.current = window.scrollY;
    updateHeroSlides();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateHeroSlides);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateHeroSlides);
    };
  }, [isMobileViewport]);

  const goToMobileSlide = (index: number) => {
    setMobileIndex(index);
    pauseAutoRef.current = true;
    window.setTimeout(() => {
      pauseAutoRef.current = false;
    }, MOBILE_AUTO_MS * 2);
  };

  return (
    <section
      id="heroScroll"
      ref={heroScrollRef}
      className="elgc-hero-scroll elgc-home-section -mt-[var(--elgc-header-h,76px)]"
      style={{ ["--elgc-header-h" as string]: "76px" }}
      aria-label="Hero slideshow"
    >
      <div className="elgc-hero-sticky">
        <div
          className="elgc-hero-track"
          style={
            isMobile
              ? { transform: `translateX(-${mobileIndex * 100}%)` }
              : undefined
          }
        >
          {DEMO_HERO_SLIDES.map((slide, index) => (
            <article
              key={slide.id}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className={`elgc-hero-slide ${
                isMobile
                  ? index === mobileIndex
                    ? "is-active"
                    : ""
                  : index === 0
                    ? "is-active"
                    : ""
              }`}
              aria-hidden={isMobile ? index !== mobileIndex : undefined}
              data-slide={index}
              style={{ ["--bg" as string]: `url('${slide.background}')` }}
            >
              <div className="elgc-slide-content">
                <div className="elgc-hero-eyebrow">{slide.eyebrow}</div>
                <h1
                  className="elgc-hero-title"
                  dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
                />
                <p className="elgc-hero-text">{slide.text}</p>
                <div className="elgc-hero-actions">
                  <Link href={slide.primaryCta.href} className="elgc-btn-green">
                    {slide.primaryCta.label}
                  </Link>
                  <Link href={slide.secondaryCta.href} className="elgc-btn-outline">
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="elgc-hero-progress" aria-hidden={isMobile}>
          {DEMO_HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => {
                progressItemRefs.current[index] = el;
              }}
              className={`elgc-progress-item ${index === 0 ? "is-active" : ""}`}
            >
              <span>{slide.progressLabel}</span>
              <div className="elgc-progress-line">
                <span
                  ref={(el) => {
                    fillRefs.current[index] = el;
                  }}
                  className="elgc-progress-fill"
                />
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="elgc-hero-mobile-dots" role="tablist" aria-label="Hero slides">
            {DEMO_HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === mobileIndex}
                aria-label={slide.progressLabel}
                className={`elgc-hero-mobile-dot ${index === mobileIndex ? "is-active" : ""}`}
                onClick={() => goToMobileSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
