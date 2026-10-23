import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="flex min-h-screen w-full max-w-350 scroll-mt-24 flex-col overflow-hidden rounded-t-3xl bg-[#FEA8F1]">
      {/* Footer top content */}
      <div className="grid w-full gap-12 px-5 pt-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 sm:px-8 sm:pt-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:items-end lg:px-14 lg:pt-14">
        <div className="flex min-w-0 flex-col gap-10 sm:col-span-2 lg:col-span-1">
          <h1 className="bricolage text-[clamp(2.25rem,9vw,4.5rem)] leading-[0.95] tracking-[-0.05em] lg:text-[clamp(3rem,4.5vw,4.5rem)]">
            Build. Sell.
            <br />
            Grow. Repeat
          </h1>

          <div className="flex flex-col gap-1">
            <p className="opacity-50 font-medium">CONTACT SUPPORT</p>
            <p className="bricolage text-xl sm:text-2xl">+234 8029886673</p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="bg-black rounded-full p-3 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <title>outline-whatsapp</title>
                  <path
                    fill="#fff"
                    d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                  />
                </svg>
              </div>

              <div className="bg-black rounded-full p-3 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <title>LinkedIn</title>
                  <path
                    fill="#fff"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.94v5.666H9.35V9h3.414v1.56h.049c.476-.9 1.637-1.85 3.368-1.85c3.601 0 4.267 2.371 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124a2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452Z"
                  />
                </svg>
              </div>

              <div className="bg-black rounded-full p-3 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <title>Twitter</title>
                  <path
                    fill="#fff"
                    d="M22 5.924a8.19 8.19 0 0 1-2.357.646a4.111 4.111 0 0 0 1.804-2.27a8.22 8.22 0 0 1-2.605.996a4.105 4.105 0 0 0-7.102 2.807c0 .322.036.635.106.936A11.65 11.65 0 0 1 3.392 4.846a4.105 4.105 0 0 0 1.27 5.477a4.073 4.073 0 0 1-1.86-.514v.052a4.107 4.107 0 0 0 3.292 4.025a4.118 4.118 0 0 1-1.853.07a4.109 4.109 0 0 0 3.833 2.852A8.233 8.233 0 0 1 2 18.507a11.616 11.616 0 0 0 6.29 1.844c7.55 0 11.68-6.255 11.68-11.68c0-.178-.004-.355-.012-.53A8.333 8.333 0 0 0 22 5.924Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid min-w-0 grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-1 lg:gap-10">
          <div className="flex flex-col gap-2">
            <p className="opacity-50 font-medium">NAVIGATION</p>
            <div className="flex flex-col gap-2 text-base font-medium sm:text-xl">
              <Link href="/#steps" className="underline">
                Steps
              </Link>
              <Link href="/about" className="underline">
                About us
              </Link>
              <Link href="/#pricing" className="underline">
                Pricing
              </Link>
              <Link href="/#contact" className="underline">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="opacity-50 font-medium">LEGAL</p>
            <div className="flex flex-col gap-2 text-base font-medium sm:text-xl">
              <a href="/" className="underline">
                Terms & Condition
              </a>
              <a href="/" className="underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="sm:max-w-100 max-w-[80%] text-sm leading-relaxed sm:text-base lg:text-right">
          All Rights Reserved. © 2026 Bloom by Vile concepts, a Storefront
          builder for creators
        </div>
      </div>
      <div className="mt-auto w-full max-w-[600px] self-start pt-12 px-2 pb-2 sm:px-10 sm:pb-10">
        <div className="relative aspect-[5/1] w-full overflow-hidden">
          <Image
            src="/bloom-footer-logo.png"
            alt="Bloom"
            fill
            sizes="(max-width: 600px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
    </footer>
  );
}
