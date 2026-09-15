"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { DEMO_SERVICE_CARDS } from "@/lib/home-demo-data";
import "@/styles/home-scroll-demo.css";

const MOBILE_BP = 900;
const SERVICE_COUNT = DEMO_SERVICE_CARDS.length;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function HomeServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const snapPointsRef = useRef<number[]>([]);
  const isSnappingRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef(0);
  const activeIndexRef = useRef(0);

  const isMobileViewport = useCallback(() => window.innerWidth <= MOBILE_BP, []);

  useEffect(() => {
    const section = sectionRef.current;
    const stack = stackRef.current;
    if (!section || !stack) return;

    const cards = cardRefs.current;

    function measureSnapPoints(): number[] {
      const cardEls = cards.filter((card): card is HTMLElement => Boolean(card));
      if (cardEls.length === 0) return [];

      const stackDocTop = stack!.getBoundingClientRect().top + window.scrollY;
      let offsetY = 0;
      const points: number[] = [];

      cardEls.forEach((card) => {
        const stickyTop = parseInt(getComputedStyle(card).top, 10) || 110;
        points.push(stackDocTop + offsetY - stickyTop);
        offsetY += card.offsetHeight + (parseFloat(getComputedStyle(card).marginBottom) || 38);
      });

      return points;
    }

    function refreshSnapPoints() {
      snapPointsRef.current = measureSnapPoints();
    }

    function findSnapIndex(scrollY: number, direction: number) {
      const snapPoints = snapPointsRef.current;
      if (snapPoints.length === 0) return 0;

      if (scrollY <= snapPoints[0]) return 0;
      if (scrollY >= snapPoints[snapPoints.length - 1]) return snapPoints.length - 1;

      for (let i = 0; i < snapPoints.length - 1; i++) {
        if (scrollY >= snapPoints[i] && scrollY < snapPoints[i + 1]) {
          const midpoint = (snapPoints[i] + snapPoints[i + 1]) / 2;
          if (direction > 0) return scrollY >= midpoint ? i + 1 : i;
          if (direction < 0) return scrollY < midpoint ? i : i + 1;
          return scrollY - snapPoints[i] < snapPoints[i + 1] - scrollY ? i : i + 1;
        }
      }

      return snapPoints.length - 1;
    }

    function isInServicesZone() {
      const snapPoints = snapPointsRef.current;
      if (snapPoints.length === 0) return false;
      const y = window.scrollY;
      return y >= snapPoints[0] - 120 && y <= snapPoints[snapPoints.length - 1] + 200;
    }

    function isHeroHandlingWheel() {
      const hero = document.getElementById("heroScroll");
      if (!hero) return false;
      const rect = hero.getBoundingClientRect();
      return rect.bottom > window.innerHeight * 0.5 && rect.top < window.innerHeight * 0.35;
    }

    function setActiveCard(index: number) {
      if (isMobileViewport()) return;

      activeIndexRef.current = index;
      cards.forEach((card, i) => {
        if (!card) return;
        card.classList.toggle("is-active", i === index);
        card.classList.toggle("is-past", i < index);
      });
    }

    function snapToCard(cardIndex: number) {
      if (isMobileViewport() || isSnappingRef.current) return;

      const snapPoints = snapPointsRef.current;
      const targetY = snapPoints[cardIndex];
      if (targetY === undefined) return;
      if (Math.abs(window.scrollY - targetY) < 6) {
        setActiveCard(cardIndex);
        return;
      }

      isSnappingRef.current = true;
      setActiveCard(cardIndex);
      window.scrollTo({ top: targetY, behavior: "smooth" });
      window.setTimeout(() => {
        isSnappingRef.current = false;
      }, 600);
    }

    function snapToNearestCard() {
      if (isMobileViewport() || isSnappingRef.current) return;

      const snapPoints = snapPointsRef.current;
      if (snapPoints.length === 0 || !isInServicesZone()) return;

      const y = window.scrollY;
      const lastIndex = snapPoints.length - 1;
      const snappedIndex = findSnapIndex(y, scrollDirectionRef.current);

      if (
        snappedIndex === lastIndex &&
        y >= snapPoints[lastIndex] - 6 &&
        scrollDirectionRef.current > 0
      ) {
        setActiveCard(lastIndex);
        return;
      }

      snapToCard(snappedIndex);
    }

    function onScroll() {
      const y = window.scrollY;
      if (y !== lastScrollYRef.current) {
        scrollDirectionRef.current = y > lastScrollYRef.current ? 1 : -1;
        lastScrollYRef.current = y;
      }
    }

    function onScrollEnd() {
      snapToNearestCard();
    }

    let wheelLocked = false;
    function onWheel(e: WheelEvent) {
      if (isMobileViewport() || isSnappingRef.current || wheelLocked) return;
      if (isHeroHandlingWheel()) return;

      const snapPoints = snapPointsRef.current;
      if (!isInServicesZone() || snapPoints.length === 0) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentIndex = activeIndexRef.current;
      const y = window.scrollY;
      const lastIndex = snapPoints.length - 1;

      if (direction > 0 && currentIndex >= lastIndex && y >= snapPoints[lastIndex] - 20) {
        return;
      }
      if (direction < 0 && currentIndex <= 0 && y <= snapPoints[0] + 20) return;

      const targetIndex = clamp(currentIndex + direction, 0, lastIndex);
      if (targetIndex === currentIndex) return;

      e.preventDefault();
      wheelLocked = true;
      scrollDirectionRef.current = direction;
      snapToCard(targetIndex);
      window.setTimeout(() => {
        wheelLocked = false;
      }, 750);
    }

    refreshSnapPoints();
    setActiveCard(0);
    lastScrollYRef.current = window.scrollY;

    const resizeObserver = new ResizeObserver(() => {
      refreshSnapPoints();
    });
    resizeObserver.observe(stack);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", refreshSnapPoints);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", refreshSnapPoints);
    };
  }, [isMobileViewport]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="elgc-services-section elgc-home-section"
      aria-label="Services"
    >
      <div className="elgc-section-title">
        <div className="elgc-section-label">Integrated Services</div>
        <h2>
          Integrated Engineering &amp; <span>Construction Services</span>
        </h2>
      </div>

      <div ref={stackRef} className="elgc-service-stack">
        {DEMO_SERVICE_CARDS.map((service, index) => (
          <article
            key={service.href}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`elgc-service-card ${index === 0 ? "is-active" : ""}`}
            style={{ ["--card-index" as string]: String(index) }}
          >
            <div>
              <div className="elgc-service-number">{service.number}</div>
              <h3 dangerouslySetInnerHTML={{ __html: service.titleHtml }} />
              <p>{service.description}</p>
              <div className="elgc-service-badges">
                {service.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
              <Link href={service.href} className="elgc-service-link">
                View Service →
              </Link>
            </div>
            <div className="elgc-service-image">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                className="elgc-service-img object-cover"
                sizes="(max-width: 900px) 100vw, 560px"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
