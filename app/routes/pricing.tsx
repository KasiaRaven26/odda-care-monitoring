import { useEffect, useRef, useState } from "react";
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
  const detailsSectionRef = useRef<HTMLElement | null>(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  useEffect(() => {
    const section = detailsSectionRef.current;

    if (!section || !("IntersectionObserver" in window)) {
      setDetailsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDetailsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white font-['Montserrat'] text-black">
        {/* First hero */}
        <section className="bg-[#F6F1E7] px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Pricing
              </p>

              <h1 className="mt-6 max-w-xl text-[32px] font-semibold leading-[1.12] tracking-tight sm:text-[36px] lg:text-[40px]">
                Simple, honest pricing for real peace of mind.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 md:text-lg md:leading-8">
                Odda is a complete home monitoring service, not just a box of
                sensors. Your subscription includes everything you need:
                equipment, installation, monitoring, alerts and support.
              </p>

              <a
                href="/assessment"
                className="group mt-9 inline-flex items-center justify-center gap-3 rounded-full border border-black px-7 py-4 font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                Book a free consultation
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
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
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Complete Odda service
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-5xl font-semibold tracking-[-0.05em]">
                    £39.99
                  </span>
                  <span className="pb-1.5 text-lg">per week</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing hero with the photograph */}
        <section className="relative isolate min-h-[700px] overflow-hidden bg-[#30352F]">
          <img
            src="/images/livingroom2.png"
            alt="Older woman relaxing at home"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center]"
          />

          <div className="absolute inset-0 -z-10 bg-black/25" />

          <div className="mx-auto flex min-h-[700px] max-w-[1600px] items-center px-6 py-14 lg:px-10">
            <div className="w-full rounded-[30px] border border-white/10 bg-black/40 px-5 py-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-7 sm:py-8 lg:w-[52%] lg:px-8 lg:py-9">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">
                  One simple service
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Clear pricing.
                  <br />
                  No complicated packages.
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7">
                  The complete Odda system is provided as part of your
                  subscription, so your family has everything needed from
                  the beginning.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <article className="flex min-h-[305px] min-w-0 flex-col rounded-[25px] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15">
                    <PricingIcon type="home" />
                  </span>

                  <h3 className="mt-5 break-words text-lg font-semibold leading-6 tracking-[-0.02em]">
                    Weekly subscription
                  </h3>

                  <p className="mt-3 text-sm leading-6">
                    Complete service, equipment and ongoing support.
                  </p>

                  <div className="mt-auto border-t border-white/20 pt-5">
                    <p className="text-3xl font-semibold leading-none tracking-[-0.04em]">
                      £39.99
                    </p>
                    <p className="mt-2 text-sm">per week</p>
                  </div>
                </article>

                <article className="flex min-h-[305px] min-w-0 flex-col rounded-[25px] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15">
                    <PricingIcon type="tools" />
                  </span>

                  <h3 className="mt-5 break-words text-lg font-semibold leading-6 tracking-[-0.02em]">
                    Professional installation
                  </h3>

                  <p className="mt-3 text-sm leading-6">
                    Initial setup of the Odda system inside the home. Payable
                    on the day of installation.
                  </p>

                  <div className="mt-auto border-t border-white/20 pt-5">
                    <p className="text-3xl font-semibold leading-none tracking-[-0.04em]">
                      £99
                    </p>
                    <p className="mt-2 text-sm">one-off</p>
                  </div>
                </article>

                <article className="flex min-h-[305px] min-w-0 flex-col rounded-[25px] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15">
                    <PricingIcon type="shield" />
                  </span>

                  <h3 className="mt-5 break-words text-lg font-semibold leading-6 tracking-[-0.02em]">
                    Equipment deposit
                  </h3>

                  <p className="mt-3 text-sm leading-6">
                    Fully refundable when the Odda equipment is returned.
                  </p>

                  <div className="mt-auto border-t border-white/20 pt-5">
                    <p className="text-3xl font-semibold leading-none tracking-[-0.04em]">
                      £100
                    </p>
                    <p className="mt-2 text-sm">refundable</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Payment information */}
        <section
          ref={detailsSectionRef}
          className="bg-[#F6F1E7] px-6 py-16 lg:px-10 lg:py-24"
        >
          <div
            className={`mx-auto max-w-7xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              detailsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
               

                <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  A clearer picture of the cost.
                </h2>

                <div className="mt-9 flex flex-wrap items-baseline gap-x-3">
                  <span className="text-5xl font-semibold tracking-[-0.06em] sm:text-4xl">
                    £5.71
                  </span>
                  <span className="text-lg">per day</span>
                </div>

                <p className="mt-4 max-w-md text-base leading-7 text-black">
                  That’s approximately what the £39.99 weekly subscription
                  works out to — for reassurance and a clearer picture of how
                  things are at home.
                </p>
              </div>

              <div className="self-center">
                <div className="border-b border-[#DCD8CD] pb-8">
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    Installation &amp; account setup
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-black">
                    The £99 one-off fee is payable on the day of installation.<br></br>
                    We’ll help you get everything set up.
                  </p>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    Automatic Direct Debit
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-black">
                    Your subscription is collected automatically, so there’s
                    nothing to remember or pay manually.
                  </p>
                </div>
<div className="mt-9 inline-flex w-fit max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-[#243128] px-6 py-3">
  <span className="text-sm font-semibold text-[#D5A827]">
    Secure payments powered by
  </span>

  <img
    src="/images/gocardless-logo-white.svg"
    alt="GoCardless"
    className="h-5 w-auto"
  />
</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}