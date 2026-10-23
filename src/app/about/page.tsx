import Header from "@/components/Home/header";
import RevealWords from "@/components/Home/reveal-words";
import HeadingAnimation from "@/components/About/heading-animation";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-[1400px] flex-col px-4 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-32 lg:px-12">
        {/* About us heading section */}
        <section className="flex flex-col gap-12 lg:gap-16">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.75fr)] lg:items-end lg:gap-16">
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
            <p className="max-w-[400px] text-base leading-relaxed text-[#514b49] sm:text-xl lg:pb-2">
              That idea was simple, anyone should be able to turn what they
              create into a sale. Bloom gives creators one place to share their
              work, take orders, and grow on their own terms.
            </p>
          </div>

          {/* Section Images/Ui Go here */}
          <div className="grid w-full grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)] gap-3 sm:gap-5">
            <div className="h-72 min-w-0 rounded-3xl bg-[#f7f7f7] sm:h-120"></div>

            {/* Sale overview ui container */}
            <div className="h-72 min-w-0 rounded-3xl bg-[#f7f7f7] sm:h-120"></div>
          </div>
        </section>
      </main>
    </>
  );
}
