import Image from "next/image";

export default function StepThreePhone() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[118%] max-w-[472px] -translate-x-1/2 translate-y-[5%]"
      aria-hidden="true"
    >
      <Image
        src="/step-3-phone-clean.webp"
        alt=""
        width={1508}
        height={1043}
        sizes="(min-width: 640px) 472px, 118vw"
        className="h-auto w-full"
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1508 1043"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect x="204" y="813" width="1100" height="141" rx="75" fill="#fce1df" />
        <rect x="142" y="643" width="1236" height="239" rx="74" fill="#fff" />
        <text
          x="385"
          y="746"
          fill="#1c1917"
          fontFamily="Arial, sans-serif"
          fontSize="62"
          fontWeight="700"
          textLength="600"
          lengthAdjust="spacingAndGlyphs"
        >
          You have a new order
        </text>
        <text x="998" y="746" fontSize="57">{"\uD83C\uDF89"}</text>
        <text
          x="1230"
          y="743"
          fill="#c9c9c9"
          fontFamily="Arial, sans-serif"
          fontSize="52"
        >
          now
        </text>
        <text
          x="385"
          y="824"
          fill="#909090"
          fontFamily="Arial, sans-serif"
          fontSize="52"
          textLength="655"
          lengthAdjust="spacingAndGlyphs"
        >
          Chloe just ordered 5 items
        </text>
      </svg>
      <svg
        className="absolute left-[12.47%] top-[65.48%] aspect-square w-[10.35%] rounded-[20%]"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <rect width="100" height="100" rx="20" fill="#FEA8F1" />
        <path
          d="M 50 8 C 46 30 30 46 8 50 C 30 54 46 70 50 92 C 54 70 70 54 92 50 C 70 46 54 30 50 8 Z"
          fill="#1C1917"
        />
      </svg>
    </div>
  );
}
