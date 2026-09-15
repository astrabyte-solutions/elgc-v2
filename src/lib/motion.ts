export const easeOutExpo = [0.22, 1, 0.36, 1] as const;
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export const springSoft = { type: "spring" as const, stiffness: 90, damping: 22, mass: 0.8 };
export const springSnappy = { type: "spring" as const, stiffness: 140, damping: 18, mass: 0.6 };

export const viewportDefault = { once: true, margin: "-80px" as const };
export const viewportTight = { once: true, margin: "-40px" as const };

export const hoverLift = {
  y: -8,
  transition: { duration: 0.28, ease: easeOutExpo },
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.28, ease: easeOutExpo },
};

export const tapScale = { scale: 0.98 };
