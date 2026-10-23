import type { ReactNode } from "react";

type SplitArrowActionProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  tone?: "dark" | "light";
  size?: "default" | "large";
};

export default function SplitArrowAction({
  children,
  href,
  className = "",
  tone = "dark",
  size = "default",
}: SplitArrowActionProps) {
  const large = size === "large";
  const classes = `group relative inline-block max-w-full cursor-pointer text-left align-middle focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aa94ff] ${large ? "h-[62px]" : "h-14"} ${className}`;
  const labelClasses = `absolute inset-y-0 left-0 flex items-center whitespace-nowrap rounded-full px-7 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${large ? "w-[calc(100%_-_4.125rem)] group-hover:translate-x-[4.125rem] group-focus-visible:translate-x-[4.125rem]" : "w-[calc(100%_-_3.75rem)] group-hover:translate-x-[3.75rem] group-focus-visible:translate-x-[3.75rem]"} ${tone === "light" ? "bg-white text-[#1c1917]" : "bg-[#1c1917] text-white"}`;
  const circleClasses = "absolute inset-y-0 flex aspect-square items-center justify-center rounded-full text-[#1c1917] transition-[scale,rotate,opacity] duration-500 ease-out motion-reduce:transition-none";
  const content = (
    <>
      <span className={`${circleClasses} left-0 z-10 -rotate-180 scale-0 bg-[#aa94ff] opacity-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:rotate-0 group-focus-visible:scale-100 group-focus-visible:opacity-100`} aria-hidden="true">
        <ArrowIcon />
      </span>
      <span className={labelClasses}>{children}</span>
      <span className={`${circleClasses} right-0 bg-[#fea8f1] group-hover:rotate-180 group-hover:scale-0 group-hover:opacity-0 group-focus-visible:rotate-180 group-focus-visible:scale-0 group-focus-visible:opacity-0`} aria-hidden="true">
        <ArrowIcon />
      </span>
    </>
  );

  return href ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}
