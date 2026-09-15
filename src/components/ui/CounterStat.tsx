"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  useCommas?: boolean;
}

function formatValue(value: number, useCommas: boolean) {
  if (value % 1 !== 0) return value.toFixed(1);
  if (useCommas) return value.toLocaleString("en-US");
  return String(Math.floor(value));
}

export function CounterStat({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  useCommas = false,
}: CounterStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatValue(count, useCommas)}
      {suffix}
    </span>
  );
}
