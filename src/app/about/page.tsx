import Image from "next/image";
import Header from "@/components/Home/header";
import RevealWords from "@/components/Home/reveal-words";
import HeadingAnimation from "@/components/About/heading-animation";
import FloatingImage from "@/components/About/floating-image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-[1400px] flex-col px-4 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-32 lg:px-12">
        {/* About us heading section */}
        <section className="flex flex-col gap-12 lg:gap-16">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.75fr)] lg:gap-16">
            <HeadingAnimation>
              <h2 className="rounded-full bg-[#FEA8F1] px-4 py-1.5 text-base font-medium text-[#222]">
                About us
              </h2>
              <h1
                data-section-heading
                className="bricolage relative z-20 max-w-[750px] text-left text-[clamp(2.7rem,6vw,5rem)] leading-[1.05] tracking-tight text-[#111]"
              >
                <RevealWords
                  lines={["Bloom started with one person and one idea"]}
                />
              </h1>
            </HeadingAnimation>
            <div className="flex flex-col items-start lg:justify-end">
              <p className="max-w-[400px] text-base leading-relaxed text-[#514b49] sm:text-xl lg:pb-2">
                That idea was simple, anyone should be able to turn what they
                create into a sale. Bloom gives creators one place to share
                their work, take orders, and grow on their own terms.
              </p>
            </div>
          </div>

          {/* Section Images/Ui Go here */}
          <div className="relative h-100 w-full rounded-3xl bg-[#f7f7f7] sm:h-120 lg:h-150">
            <Image
              src="/about-landscape.png"
              alt="Creator sitting on a sofa with a laptop and notebook"
              fill
              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) calc(100vw - 4rem), (max-width: 1400px) calc(100vw - 6rem), 1304px"
              className="rounded-3xl object-cover object-[40%_center] sm:object-center"
            />
            <div
              className="absolute top-[62%] sm:top-[60%] left-2 z-20 aspect-3/4 w-[55%] max-w-80 -translate-y-1/2 rounded-2xl shadow-lg sm:left-6 sm:w-[36%] lg:w-[30%]"
              style={{ containerType: "inline-size" }}
            >
              <Image
                src="/about-sales-overview-portrait.png"
                alt="78% sales growth radial chart with sales legend"
                width={1086}
                height={1448}
                className="h-full w-full rounded-xl object-contain"
              />
              <span
                className="bricolage absolute top-[4.5%] left-[5%] z-10 flex h-[10%] w-[60%] items-center whitespace-nowrap bg-white pl-[3%] font-bold leading-none text-black"
                style={{ fontSize: "6.4cqw" }}
              >
                Sales overview
              </span>
            </div>
            <FloatingImage />
          </div>
        </section>
      </main>
    </>
  );
}
