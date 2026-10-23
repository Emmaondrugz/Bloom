import ProfileStack from "../ui/profile_stack";
import SplitArrowAction from "../ui/split-arrow-action";
import RevealWords from "./reveal-words";

const features = [
  "Digital products",
  "Courses & memberships",
  "Services & bookings",
];

export default function Hero() {
  return (
    <div
      data-hero-section
      className="pointer-events-none px-3 relative z-20 w-full flex-col gap-5 h-fit sm:h-screen flex max-w-370 items-center"
    >
      <div className="h-19 w-full xl:h-18" />

      {/* Hero Banner */}
      <div className="flex xl:flex-row pt-5 sm:pt-10 flex-col sm:items-center xl:items-stretch gap-18 xl:gap-0 justify-between flex-1 rounded-lg w-full">
        {/* Banner/Hero Text - Buttons */}
        <div className="pointer-events-auto flex flex-col sm:items-center xl:items-start gap-8 relative z-10 shrink-0">
          <div
            data-section-heading
            className="sm:text-center xl:text-left sm:text-[80px] text-6xl text-[#111] leading-[90%] bricolage tracking-tighter"
          >
            <RevealWords lines={["Your Online", "store Live in", "minutes."]} />
          </div>

          {/* Feature list */}
          <ul data-micro-group className="flex flex-col gap-2">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg
                  data-micro-item="spin"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="#FEA8F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
                </svg>
                <span className="text-base font-medium uppercase tracking-wider font-[var(--font-dm-sans)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <SplitArrowAction href="#pricing" className="w-[300px] text-lg">
            Launch Store
          </SplitArrowAction>
        </div>

        <div className="pointer-events-none relative z-0 flex w-full items-end justify-center h-[45vh] sm:h-[55vh] xl:h-auto xl:absolute xl:inset-0">
          <div className="relative h-full aspect-[849/768] shrink-0 origin-bottom scale-[1.15] sm:scale-100 xl:h-[80%] xl:h-[85%]">
            <img
              src="/hero_image.webp"
              alt=""
              className="h-full w-full object-contain"
            />
            <img
              src="/naira-coin-green-detailed.webp"
              data-hero-scene="coin"
              alt=""
              className="absolute left-[73%] top-[8%] w-[12%]"
            />
            <img
              src="/shopping-cart-green-blurred-complete.webp"
              data-hero-scene="cart"
              alt=""
              className="absolute bottom-[4%] left-[3%] blur-xs w-[35%]"
            />
          </div>
        </div>

        {/* Bloom short description */}
        <div className="xl:flex flex-col hidden self-center xl:mt-0 -mt-10 z-10 relative">
          <div className="flex max-w-150 xl:max-w-90 bg-white flex-col p-4 rounded-xl gap-2">
            <div className="text-gray-600 sm:text-lg">
              Add your products, set your prices, and get paid. Bloom handles
              the storefront, checkout, and delivery.
            </div>
            <ProfileStack
              profiles={[
                { src: "/profile1.png" },
                { src: "/profile2.png" },
                { src: "/profile3.webp" },
              ]}
              label="Join 2,000+ creators"
            />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] bg-linear-to-b from-transparent to-white h-20"
      />
    </div>
  );
}
