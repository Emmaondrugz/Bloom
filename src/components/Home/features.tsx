import FeatureSpinner from "./feature-spinner";
import FeatureWave from "./feature-wave";
import RevealWords from "./reveal-words";

const otherPlatforms = [
  "Generic storefronts",
  "Long setup time",
  "Orders scattered in chats",
  "Separate checkout links",
  "Unclear payment status",
];

const bloomBenefits = [
  "A storefront that feels like you",
  "Live in minutes",
  "Every order in one place",
  "Checkout built right in",
  "Sales and payments, clearly tracked",
];

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <span
      data-micro-item="pop"
      className={`flex size-5 shrink-0 items-center justify-center rounded-full text-white ${muted ? "bg-[#CECBC9]" : "bg-[#1C1917]"}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-4">
        <path
          d="m5.5 12.5 4 4 9-9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Features() {
  return (
    <section id="about" className="flex w-full flex-col items-center gap-10 px-4 py-24 sm:gap-10 sm:px-8 sm:py-32">
      <h2
        data-section-heading
        className="bricolage relative z-20 max-w-170 text-center text-[45px] leading-[90%] tracking-tight text-[#111] sm:text-6xl sm:leading-[100%]"
      >
        <RevealWords lines={["Never settle", "for the ordinary"]} />
      </h2>

      <div className="feature-comparison relative isolate flex w-full max-w-[900px] flex-col items-center px-2 py-7 lg:flex-row lg:items-center lg:px-8 lg:py-14">
        <FeatureWave />
        <div className="feature-comparison-card feature-comparison-card--other relative z-10 w-full max-w-[360px] rounded-[24px] bg-[#f7f7f7] px-5 py-7 lg:w-[58%] lg:max-w-none lg:px-7 lg:py-7">
          <h3 className="bricolage mb-8 text-[29px] leading-none font-bold tracking-tight text-[#1C1917] sm:text-3xl">
            Other platforms
          </h3>
          <ul data-micro-group className="flex flex-col gap-4">
            {otherPlatforms.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3.5 text-base sm:text-lg leading-snug text-[#85817F]"
              >
                <CheckIcon muted />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="feature-comparison-card feature-comparison-card--bloom relative z-20 -mt-3 w-full max-w-[560px] rounded-[24px] bg-[#FEA8F1] px-5 py-7 text-[#1C1917] lg:-ml-[16%] lg:-mt-0 lg:w-[58%] lg:max-w-none lg:px-7 lg:py-7">
          <FeatureSpinner />
          <div className="mb-7 flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#1C1917] text-[#FEA8F1]">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="size-5"
                aria-hidden="true"
              >
                <path
                  d="M20 1C22.2 13.4 26.6 17.8 39 20c-12.4 2.2-16.8 6.6-19 19C17.8 26.6 13.4 22.2 1 20 13.4 17.8 17.8 13.4 20 1Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <h3 className="bricolage text-[34px] leading-none font-bold tracking-tight sm:text-4xl">
              Bloom
            </h3>
          </div>
          <ul data-micro-group className="flex flex-col gap-4">
            {bloomBenefits.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3.5 text-base leading-snug sm:text-lg"
              >
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
