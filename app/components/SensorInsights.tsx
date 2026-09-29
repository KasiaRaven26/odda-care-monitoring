import { useEffect, useState } from "react";

const dashboardFeatures = [
  {
    title: "Daily activity pattern",
    description:
      "See the shape of the day at a glance, including movement around the home, kettle use and door activity.",
  },
  {
    title: "Weekly routine",
    description:
      "Understand whether familiar routines are staying consistent across the week, without reading through raw sensor data.",
  },
  {
    title: "Home environment",
    description:
      "Check temperature and humidity in one place, with clear status indicators that make unusual conditions easy to notice.",
  },
  {
    title: "Connected devices",
    description:
      "Quickly confirm that the Odda Hub and every connected sensor are online and working as expected.",
  },
];

export default function SensorInsights() {
  const [openDashboardFeature, setOpenDashboardFeature] = useState(0);
  const [activeDashboardSlide, setActiveDashboardSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveDashboardSlide((current) => (current === 0 ? 1 : 0));
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {/* Meet Odda — product introduction */}
      <section
        id="how-it-works"
        className="relative bg-white px-4 py-20 [overflow-anchor:none] sm:px-6 lg:py-24"
      >
        <div className="mx-auto max-w-[1380px] px-3 sm:px-8 lg:px-[64px]">
          <div className="mb-10 max-w-3xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black">
              ODDA VIEW
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-black">
              Meet Odda.
            </h2>

            <p className="mt-5 w-full max-w-2xl text-base leading-7 text-black sm:text-lg">
              Sensors gather the signals. Odda View turns them into clear,
              meaningful updates — learning what normal looks like, noticing
              important changes and explaining everything in plain, everyday
              language.
            </p>
          </div>

          <div className="mt-4 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            {/* Desktop and iPhone carousel */}
            <div className="relative mx-auto w-full max-w-[720px]">
              <div className="relative h-[370px] sm:h-[470px] lg:h-[520px]">
                {/* Desktop mockup */}
                <div
                  aria-hidden={activeDashboardSlide !== 0}
                  className={`absolute inset-0 flex items-center justify-center px-4 pb-12 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-6 ${
                    activeDashboardSlide === 0
                      ? "translate-x-0 opacity-100"
                      : "pointer-events-none -translate-x-4 opacity-0"
                  }`}
                >
                  <img
                    src="/images/desktop3-transparent.png"
                    alt="Odda View desktop dashboard showing daily activity, weekly routine, home environment and connected devices"
                    loading="lazy"
                    className="w-full max-w-[700px] scale-[1.1] transform-gpu object-contain transition-transform duration-700 hover:scale-[1.13]"
                  />
                </div>

                {/* iPhone mockup */}
                <div
                  aria-hidden={activeDashboardSlide !== 1}
                  className={`absolute inset-0 flex items-center justify-center px-4 pb-12 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-6 ${
                    activeDashboardSlide === 1
                      ? "translate-x-0 opacity-100"
                      : "pointer-events-none translate-x-4 opacity-0"
                  }`}
                >
                  <img
                    src="/images/odda-home.png"
                    alt="Odda View dashboard displayed on an iPhone"
                    loading="lazy"
                    className="max-h-[315px] w-auto scale-[1.1] transform-gpu object-contain drop-shadow-[0_22px_30px_rgba(25,32,23,0.18)] transition-transform duration-700 hover:scale-[1.13] sm:max-h-[410px] lg:max-h-[455px]"
                  />
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5">
                {[0, 1].map((slideIndex) => (
                  <button
                    key={slideIndex}
                    type="button"
                    aria-label={
                      slideIndex === 0
                        ? "Show desktop dashboard"
                        : "Show mobile dashboard"
                    }
                    aria-current={
                      activeDashboardSlide === slideIndex ? "true" : undefined
                    }
                    onClick={() => setActiveDashboardSlide(slideIndex)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      activeDashboardSlide === slideIndex
                        ? "w-7 bg-[#527A66]"
                        : "w-2 bg-[#527A66]/30 hover:bg-[#527A66]/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Dashboard accordion */}
            <article className="rounded-[28px] bg-white px-6 py-7 [overflow-anchor:none] sm:px-8 sm:py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black">
                Inside your dashboard
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
                The essentials made clear.
              </h3>

              <div className="mt-6 h-[420px] overflow-hidden sm:h-[390px]">
                {dashboardFeatures.map((feature, index) => {
                  const isOpen = openDashboardFeature === index;

                  return (
                    <div
                      key={feature.title}
                      className={`rounded-2xl border px-4 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
                        isOpen
                          ? "border-white/70 bg-[#91A27F]/30 shadow-[0_10px_28px_rgba(72,88,70,0.12)]"
                          : "border-black/10 bg-transparent hover:border-white/70 hover:bg-[#91A27F]/24 hover:shadow-[0_10px_28px_rgba(72,88,70,0.10)] focus-within:border-white/70 focus-within:bg-[#91A27F]/24 focus-within:shadow-[0_10px_28px_rgba(72,88,70,0.10)]"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenDashboardFeature(isOpen ? -1 : index)
                        }
                        className="group flex w-full items-center justify-between gap-5 rounded-xl py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#527A66]"
                      >
                        <span
                          className={`text-base font-semibold tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#315F4B] sm:text-lg ${
                            isOpen ? "text-[#315F4B]" : "text-black"
                          }`}
                        >
                          {feature.title}
                        </span>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#527A66] transition-colors duration-300 ${
                            isOpen ? "bg-white/50" : "group-hover:bg-white/45"
                          }`}
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                            className={`h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            <path
                              d="M4.5 7.5L10 13l5.5-5.5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-md pb-5 pr-10 text-sm leading-6 text-black sm:text-base sm:leading-7">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
