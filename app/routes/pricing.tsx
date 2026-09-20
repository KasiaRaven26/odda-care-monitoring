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
        className="h-5 w-5"
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
        className="h-5 w-5"
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
      className="h-5 w-5"
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
        {/* Hero */}
        <section className="bg-[#F6F1E7] px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                PRICING
              </p>

              <h1 className="mt-6 max-w-xl text-[32px] font-semibold leading-[1.12] tracking-tight text-black sm:text-[36px] lg:text-[48px]">
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

            <div className="relative overflow-hidden rounded-[32px] shadow-[0_24px_60px_rgba(48,54,45,0.14)]">
              <img
                src="/images/odda-pricing1.png"
                alt="Older woman living independently at home"
                className="aspect-[4/3] w-full object-cover brightness-[0.82]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Complete Odda service
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-5xl font-semibold tracking-[-0.05em]">
                    £34.99
                  </span>

                  <span className="pb-1.5 text-lg text-white">per week</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                One simple service
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-black sm:text-5xl">
                Clear pricing.
                <br />
                No complicated packages.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-black">
                The complete Odda system is provided as part of your
                subscription, so your family has everything needed from the
                beginning.
              </p>
            </div>

            <div>
              {/* Primary recurring cost */}
              <article className="rounded-[30px] border border-[#66735E]/15 bg-[#EEF1EA] px-6 py-8 sm:px-8 sm:py-9">
                <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-10">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DDE4D8] text-[#4F5C48]">
                      <PricingIcon type="home" />
                    </span>

                    <div>
                      

                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-black sm:text-[28px]">
                        Weekly subscription
                      </h3>

                      <p className="mt-3 max-w-xl leading-7 text-black/70">
                        The complete Odda service, equipment and ongoing
                        support.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-5 sm:min-w-[170px] sm:border-l sm:border-t-0 sm:py-2 sm:pl-8 sm:pt-0 sm:text-right">
                    <p className="text-[36px] font-semibold leading-none tracking-[-0.045em] text-black sm:text-[42px]">
                      £34.99
                    </p>
                    <p className="mt-2 text-sm font-medium text-black/55">
                      per week
                    </p>
                  </div>
                </div>
              </article>

              {/* Secondary costs */}
              <div className="mt-5 overflow-hidden rounded-[28px] border border-black/10 bg-white px-6 sm:px-8">
                <article className="grid gap-6 border-b border-black/15 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-10">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1EFE8] text-black/70">
                      <PricingIcon type="tools" />
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-black sm:text-2xl">
                        Professional installation
                      </h3>

                      <p className="mt-2 max-w-xl leading-7 text-black/70">
                        Initial setup of the Odda system inside the home.
                      </p>
                    </div>
                  </div>

                  <div className="pl-[68px] sm:min-w-[170px] sm:pl-0 sm:text-right">
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-black">
                      £99
                    </p>
                    <p className="mt-1 text-sm text-black/55">one-off</p>
                  </div>
                </article>

                <article className="grid gap-6 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-10">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1EFE8] text-black/70">
                      <PricingIcon type="shield" />
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-black sm:text-2xl">
                        Equipment deposit
                      </h3>

                      <p className="mt-2 max-w-xl leading-7 text-black/70">
                        Fully refundable when the Odda equipment is returned.
                      </p>
                    </div>
                  </div>

                  <div className="pl-[68px] sm:min-w-[210px] sm:pl-0 sm:text-right">
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-black">
                      £100
                    </p>
                    <p className="mt-1 text-sm text-black/55">refundable</p>

                    <span className="mt-3 inline-flex rounded-full bg-[#E7ECE2] px-3 py-1.5 text-xs font-semibold text-[#52604D]">
                      Returned when you cancel
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Value */}
        <section className="bg-[#66735E] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                A different way to think about care
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Better information can support better decisions.
              </h2>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              <article className="border-t border-white/35 pt-6">
                <span className="text-sm text-white/60">01</span>
                <h3 className="mt-8 text-2xl font-semibold">
                  Earlier awareness
                </h3>
                <p className="mt-4 leading-7 text-white/80">
                  Notice meaningful changes in familiar routines before they
                  become larger concerns.
                </p>
              </article>

              <article className="border-t border-white/35 pt-6">
                <span className="text-sm text-white/60">02</span>
                <h3 className="mt-8 text-2xl font-semibold">
                  Reassurance between visits
                </h3>
                <p className="mt-4 leading-7 text-white/80">
                  Stay connected to everyday wellbeing even when you cannot be
                  there in person.
                </p>
              </article>

              <article className="border-t border-white/35 pt-6">
                <span className="text-sm text-white/60">03</span>
                <h3 className="mt-8 text-2xl font-semibold">
                  Better care decisions
                </h3>
                <p className="mt-4 leading-7 text-white/80">
                  Make choices using a clearer picture of what is actually
                  happening at home.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#F6F1E7] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              Find out more
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl">
              If you&apos;re worried about a parent or relative living alone,
              we would be glad to talk it through.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black">
              Speak with our team and book a free, no-obligation consultation.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[#66735E] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#56614F]"
            >
              Book a free consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
