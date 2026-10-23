import Image from "next/image";
import StepImagePanel from "./step-image-panel";
import StepOneLine from "./step-one-line";
import StepThreeLine from "./step-three-line";
import StepThreePhone from "./step-three-phone";
import RevealWords from "./reveal-words";

function StepArrowNotch({ color }: { color: string }) {
  return (
    <div
      data-micro-group
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 z-10 size-28 sm:size-32"
    >
      <svg
        viewBox="0 0 128 128"
        className="absolute inset-0 size-full"
        preserveAspectRatio="none"
        style={{ fill: "var(--step-card-surface, #eceff4)" }}
      >
        <path d="M0 0H128V8C128 17 120 24 112 24H56A32 32 0 0 0 24 56V112C24 120 16 128 8 128H0Z" />
      </svg>
      <div
        data-micro-item="step-spin"
        className="absolute bottom-2 right-2 flex size-16 items-center justify-center rounded-full sm:size-20"
        style={{ backgroundColor: color }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-7 text-[#fff] sm:size-8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 4 12 H 20 M 14 6 L 20 12 L 14 18" />
        </svg>
      </div>
    </div>
  );
}

export default function Steps() {
  return (
    <div id="steps" className="w-full py-20 sm:gap-72 gap-32 flex flex-col h-fit">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-base bg-[#FEA8F1] py-1.5 px-4 font-medium text-[#222] rounded-full">
          How it works
        </h2>
        <h1
          data-section-heading
          className="bricolage relative z-20 max-w-[90%] sm:max-w-170 tracking-tight text-center text-[43px] sm:text-6xl leading-[100%] sm:leading-[120%] text-[#111] sm:leading-[100%]"
        >
          <RevealWords lines={["Go from idea to first sale in 3 simple steps"]} />
        </h1>
      </div>

      <div className="w-full flex flex-col gap-32 sm:gap-32 relative">
        {/* Step one container */}
        <div
          data-step-row
          className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 sm:flex-row sm:justify-center sm:gap-16"
        >
          <div className="relative isolate w-full max-w-100 shrink-0 sm:w-100">
            <StepOneLine />
            <StepImagePanel className="relative z-10 h-80 sm:h-120 w-full overflow-hidden rounded-2xl bg-[#AA94FF] p-1 sm:h-150">
              <span
                aria-hidden="true"
                className="bricolage pointer-events-none shrink-0 absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[450px] font-black leading-none text-white sm:text-[750px]"
              >
                1
              </span>
              <Image
                src="/step-1-phone-cutout.webp"
                alt="Man looking at his phone"
                width={1241}
                height={1268}
                sizes="440px"
                className="absolute bottom-0 left-1/2 z-10 h-auto w-[80%] sm:w-[110%] max-w-none -translate-x-1/2"
              />
            </StepImagePanel>
          </div>

          {/* Step one Text */}
          <div className="step-text-card relative flex w-full max-w-lg flex-col items-start justify-center gap-4 overflow-hidden rounded-2xl px-6 pt-8 pb-28 text-black sm:gap-6 sm:p-8 sm:pb-32">
            <h2 className="text-4xl sm:text-6xl bricolage relative z-1">
              Sign in
            </h2>
            <p className="text-lg sm:text-xl text-gray-800  relative z-1">
              Sign up in seconds just your name, email, and store details. No
              complex or technical setup.
            </p>
            <StepArrowNotch color="#AA94FF" />
          </div>
        </div>

        {/* Step two container */}
        <div
          data-step-row
          className="mx-auto flex w-full max-w-6xl flex-col-reverse items-start gap-8 px-4 sm:flex-row sm:justify-center sm:gap-16"
        >
          <div className="step-text-card relative flex w-full max-w-lg flex-col items-start justify-center gap-4 overflow-hidden rounded-2xl px-6 pt-8 pb-28 text-black sm:gap-6 sm:p-8 sm:pb-32">
            <h2 className="bricolage relative z-10 text-4xl sm:text-6xl">
              Add product
            </h2>
            <p className="relative z-10 text-lg text-gray-800 sm:text-xl">
              Snap a photo, add a few details, and set your price. Your product
              is ready to share in your store.
            </p>
            <StepArrowNotch color="#85AA65" />
          </div>

          <div className="relative isolate w-full max-w-100 shrink-0 sm:w-100">
            <StepImagePanel className="relative z-10 h-80 w-full overflow-hidden rounded-2xl bg-[#85AA65] p-1 sm:h-150">
              <span
                aria-hidden="true"
                className="bricolage pointer-events-none shrink-0 absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[450px] font-black leading-none text-white sm:text-[650px]"
              >
                2
              </span>
              <Image
                src="/step-2-product-photo-cutout.webp"
                alt="Woman photographing a bottle for her store with a phone"
                width={1145}
                height={1374}
                sizes="(min-width: 640px) 440px, 80vw"
                className="absolute bottom-0 left-1/2 z-10 h-auto w-[80%] max-w-none -translate-x-1/2 sm:w-[110%]"
              />
            </StepImagePanel>
          </div>
        </div>

        {/* Step three container */}
        <div
          data-step-row
          className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 sm:flex-row sm:justify-center sm:gap-16"
        >
          <StepThreeLine />
          <div className="relative isolate w-full max-w-100 shrink-0 sm:w-100">
            <StepImagePanel className="relative z-10 h-80 w-full overflow-hidden rounded-2xl bg-[#FEA8F1] p-1 sm:h-150">
              <span
                aria-hidden="true"
                className="bricolage pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[400px] font-black leading-none text-white sm:text-[650px]"
              >
                3
              </span>
              <StepThreePhone />
            </StepImagePanel>
          </div>

          <div className="step-text-card relative z-10 flex max-w-lg flex-col items-start justify-center gap-4 overflow-hidden rounded-2xl px-6 pt-8 pb-28 text-black sm:w-full sm:gap-6 sm:p-8 sm:pb-32">
            <h2 className="bricolage relative z-10 text-4xl sm:text-6xl">
              Get paid
            </h2>
            <p className="relative z-10 text-lg text-gray-800 sm:text-xl">
              A new order lands, and Bloom lets you know right away. Keep track
              of every sale and payment from your store.
            </p>
            <StepArrowNotch color="#FEA8F1" />
          </div>
        </div>
      </div>
    </div>
  );
}
