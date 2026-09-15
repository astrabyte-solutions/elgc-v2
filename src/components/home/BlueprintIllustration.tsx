export function BlueprintIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Main distillation tower cluster */}
      <rect x="118" y="24" width="22" height="260" stroke="currentColor" strokeWidth="1.1" />
      <rect x="152" y="48" width="18" height="236" stroke="currentColor" strokeWidth="1.1" />
      <rect x="178" y="12" width="26" height="272" stroke="currentColor" strokeWidth="1.2" />
      <rect x="214" y="36" width="20" height="248" stroke="currentColor" strokeWidth="1.1" />
      <rect x="244" y="58" width="16" height="226" stroke="currentColor" strokeWidth="1" />

      {/* Scaffold on main tower */}
      <path d="M178 40 H204 V280 H178 Z" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" />
      <path d="M182 60 H200 M182 90 H200 M182 120 H200 M182 150 H200 M182 180 H200 M182 210 H200 M182 240 H200" stroke="currentColor" strokeWidth="0.7" />
      <path d="M182 60 V240 M200 60 V240 M191 60 V240" stroke="currentColor" strokeWidth="0.7" />

      {/* Left scaffold structure */}
      <path d="M48 120 H108 V300 H48 Z" stroke="currentColor" strokeWidth="0.9" />
      <path d="M48 140 H108 M48 170 H108 M48 200 H108 M48 230 H108 M48 260 H108 M48 290 H108" stroke="currentColor" strokeWidth="0.7" />
      <path d="M68 120 V300 M88 120 V300" stroke="currentColor" strokeWidth="0.7" />
      <path d="M58 300 L78 270 L98 300" stroke="currentColor" strokeWidth="0.8" />

      {/* Pipe rack horizontal */}
      <path d="M40 108 H320" stroke="currentColor" strokeWidth="1" />
      <path d="M40 148 H300" stroke="currentColor" strokeWidth="1" />
      <path d="M40 188 H310" stroke="currentColor" strokeWidth="1" />
      <path d="M40 228 H290" stroke="currentColor" strokeWidth="1" />

      {/* Vertical pipes connecting towers */}
      <path d="M140 108 V228 M192 108 V228 M228 108 V228" stroke="currentColor" strokeWidth="0.9" />

      {/* Storage spheres & tanks */}
      <circle cx="72" cy="330" r="22" stroke="currentColor" strokeWidth="1.1" />
      <path d="M50 330 H94" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="300" cy="340" rx="36" ry="12" stroke="currentColor" strokeWidth="1.1" />
      <path d="M264 340 V300" stroke="currentColor" strokeWidth="1.1" />
      <path d="M336 340 V300" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="300" cy="300" rx="36" ry="12" stroke="currentColor" strokeWidth="1.1" />

      <ellipse cx="168" cy="360" rx="48" ry="14" stroke="currentColor" strokeWidth="1.1" />
      <path d="M120 360 V320" stroke="currentColor" strokeWidth="1.1" />
      <path d="M216 360 V320" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="168" cy="320" rx="48" ry="14" stroke="currentColor" strokeWidth="1.1" />

      {/* Platform & base */}
      <path d="M24 380 H336" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 388 H336" stroke="currentColor" strokeWidth="0.8" />

      {/* Small valves / nodes */}
      <circle cx="140" cy="148" r="3" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="192" cy="188" r="3" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="228" cy="108" r="3" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="88" cy="228" r="3" stroke="currentColor" strokeWidth="0.9" />

      {/* Crane arm hint on right */}
      <path d="M270 80 L320 40 L320 52 L278 88 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M318 40 V100" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
