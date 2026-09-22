import Navbar from "../components/Navbar";

type PricingIconType = "home" | "tools" | "shield";

function PricingIcon({ type }: { type: PricingIconType }) {
  if (type === "home") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M3.5 10.5 12 3l8.5 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    );
  }

  if (type === "tools") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M14.5 6.5a4.5 4.5 0 0 0-6 5.8L3 17.8 6.2 21l5.5-5.5a4.5 4.5 0 0 0 5.8-6l-2.8 2.8-3-3 2.8-2.8Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 3 19 6v5c0 4.6-2.8 8.1-7 10-4.2-1.9-7-5.4-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white font-['Montserrat'] text-black">
        {/* First hero */}
        <section className="bg-[#F6F1E7] px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                Pricing
              </p>

              <h1 className="mt-6 max-w-xl text-[32px] font-semibold leading-[1.12] tracking-tight text-black sm:text-[36px] lg:text-[40px]">
                Simple, honest pricing for real peace of mind.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-black md:text-lg md:leading-8">
                Odda is a complete home monitoring service, not just a box of
                sensors. Your subscription includes everything you need:
                equipment, installation, monitoring, alerts and support.
              </p>

              <a
                href="/#contact"
                className="mt-9 inline-flex rounded-full bg-[#66735E] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#56614F]"
              >
                Book a free consultation
              </a>
            </div>

            <div className="group relative w-full max-w-[560px] justify-self-center overflow-hidden rounded-[32px] shadow-[0_24px_60px_rgba(48,54,45,0.14)] lg:justify-self-end">
             <img
  src="/images/odda-pricing1.png"
  alt="Older woman living independently at home"
  className="aspect-[4/3] w-full object-cover brightness-[0.88] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Complete Odda service
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-5xl font-semibold tracking-[-0.05em]">
                    £39.99
                  </span>

                  <span className="pb-1.5 text-lg text-white">per week</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width pricing hero */}
        <section className="relative min-h-[700px] w-full overflow-hidden">
          <img
            src="/images/livingroom2.png"
            alt="Older woman relaxing at home"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 flex min-h-[700px] items-center px-6 py-12 lg:px-10">
            {/* Main glass frame */}
           <div className="w-full rounded-[30px] border border-white/10 bg-black/35 px-5 py-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-7 sm:py-8 lg:w-[52%] lg:translate-x-[20%] lg:px-8 lg:py-9">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
                  One simple service
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Clear pricing.
                  <br />
                  No complicated packages.
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white">
                  The complete Odda system is provided as part of your
                  subscription, so your family has everything needed from the
                  beginning.
                </p>
              </div>

              {/* Three pricing cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Weekly subscription */}
                <article className="flex min-h-[305px] min-w-0 flex-col rounded-[25px] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white">
                    <PricingIcon type="home" />
                  </span>

                  <h3 className="mt-5 break-words text-lg font-semibold leading-6 tracking-[-0.02em] text-white">
                    Weekly subscription
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white">
                    Complete service, equipment and ongoing support.
                  </p>

                  <div className="mt-auto border-t border-white/20 pt-5">
                    <p className="text-3xl font-semibold leading-none tracking-[-0.04em] text-white">
                      £39.99
                    </p>

                    <p className="mt-2 text-sm text-white">per week</p>
                  </div>
                </article>

                {/* Professional installation */}
                <article className="flex min-h-[305px] min-w-0 flex-col rounded-[25px] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white">
                    <PricingIcon type="tools" />
                  </span>

                  <h3 className="mt-5 break-words text-lg font-semibold leading-6 tracking-[-0.02em] text-white">
                    Professional installation
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white">
                    Initial setup of the Odda system inside the home.
                  </p>

                  <div className="mt-auto border-t border-white/20 pt-5">
                    <p className="text-3xl font-semibold leading-none tracking-[-0.04em] text-white">
                      £99
                    </p>

                    <p className="mt-2 text-sm text-white">one-off</p>
                  </div>
                </article>

                {/* Equipment deposit */}
                <article className="flex min-h-[305px] min-w-0 flex-col rounded-[25px] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white">
                    <PricingIcon type="shield" />
                  </span>

                  <h3 className="mt-5 break-words text-lg font-semibold leading-6 tracking-[-0.02em] text-white">
                    Equipment deposit
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white">
                    Fully refundable when the Odda equipment is returned.
                  </p>

                  <div className="mt-auto border-t border-white/20 pt-5">
                    <p className="text-3xl font-semibold leading-none tracking-[-0.04em] text-white">
                      £100
                    </p>

                    <p className="mt-2 text-sm text-white">refundable</p>

                    
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}