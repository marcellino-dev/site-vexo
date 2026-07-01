interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

/**
 * VEXO brand mark — a geometric "V" formed by two nested chevrons.
 * Uses currentColor so it inherits the surrounding text color.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer V */}
      <path
        d="M8 20 L50 88 L92 20"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Inner V */}
      <path
        d="M30 20 L50 52 L70 20"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, showWordmark = true, wordmarkClassName }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className={className ?? "w-6 h-6"} />
      {showWordmark && (
        <span className={wordmarkClassName ?? "font-display tracking-[0.2em] text-2xl"}>
          VEXO
        </span>
      )}
    </span>
  );
}
