import { useState } from "react";
import Navbar from "../components/Navbar";

const technologyItems = [
  {
    title: "Odda Hub",
    image: "/images/odda-hub-transparent.png",
    description:
      "The quiet centre of the system. It securely collects information from the sensors and sends it to Odda View.",
  },
  {
    title: "Motion sensor",
    image: "/images/odda-motion-sensor-transparent.png",
    description:
      "Notices everyday movement in key rooms, helping Odda understand routines without cameras or microphones.",
  },
  {
    title: "Environmental sensor",
    image: "/images/odda-environment-sensor-transparent.png",
    description:
      "Monitors conditions around the home, including temperature and humidity, to help identify meaningful changes.",
  },
  {
    title: "Door sensor",
    image: "/images/odda-door-sensor-transparent.png",
    description:
      "Lets you know when an important door opens or closes, including activity at unusual times of day or night.",
  },
  {
    title: "Smart plug",
    image: "/images/odda-smart-plug-transparent.png",
    description:
      "Helps build a picture of familiar routines, such as whether the kettle has been used at the usual time.",
  },
  {
    title: "Assistance button",
    image: "/images/odda-assistance-button-transparent.png",
    description:
      "An optional way to ask for help. It works alongside Odda’s passive monitoring as an additional layer of support.",
  },
];

function ExpandIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`relative block h-4 w-4 transform-gpu transition-transform duration-[160ms] ease-out ${
        open ? "rotate-45" : "rotate-0"
      }`}
    >
      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />

      <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
    </span>
  );
}

export default function TechnologyPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white px-4 py-16 lg:py-20">
        {/* Hero */}
      <section className="mx-auto max-w-[1380px] px-2 py-12 sm:px-6 lg:px-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            {/* Hero text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                The technology behind Odda
              </p>

              <h1 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#89967E] md:text-4xl lg:text-5xl">
  A simple guide to what’s actually in the home.
</h1>

           <p className="mt-7 max-w-xl text-lg leading-8 text-black">
  Home monitoring technology is new to most families, so we explain everything
  clearly — no jargon and no assumptions.
</p>

<p className="mt-4 max-w-xl text-base leading-7 text-black">
  Every device is small, battery-powered and designed to blend quietly into the
  home. Nothing records images or sound, and nothing about the installation is
  permanent.
</p>
            </div>

            <div className="ml-auto w-full overflow-hidden rounded-[32px] bg-[#F3F1EA] shadow-[0_18px_50px_rgba(48,54,45,0.10)] lg:w-4/5">
  <img
    src="/images/odda-sensor-installation-technology.png"
    alt="Odda installer fitting a sensor inside a home"
    className="aspect-[4/3] w-full object-cover object-center"
  />
</div>
          </div>


        </section>

       {/* Odda View mockups */}
<section className="mx-auto max-w-[1380px] px-2 py-16 sm:px-6 lg:px-10 lg:py-20">
  <div className="overflow-hidden rounded-[36px] bg-[#F3F1EA] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
    {/* Heading */}
    <div className="mb-10 max-w-3xl text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">
        ODDA VIEW
      </p>

      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-black sm:text-5xl">
        Where information becomes reassurance.
      </h2>

      <p className="mt-5 w-full max-w-2xl !mx-0 text-base leading-7 text-[#656A62] sm:text-lg">
        Odda View brings information from every sensor together and turns it
        into something clear and easy to understand — without technical data or
        complicated sensor logs.
      </p>
    </div>

    <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
      {/* Both mockups in one card */}
<article className="overflow-hidden rounded-[28px] bg-white p-3 sm:p-4">
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
    {/* Home mockup */}
    <div className="group relative h-[480px] overflow-hidden rounded-[22px] bg-white sm:h-[560px]">
      <img
        src="/images/odda-view-home.png"
        alt="Odda View home screen showing the current home status"
        loading="lazy"
        className="absolute left-1/2 top-1/2 w-[250%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.25]"
      />
    </div>

    {/* Monthly report mockup */}
    <div className="group relative h-[480px] overflow-hidden rounded-[22px] bg-white sm:h-[560px]">
      <img
        src="/images/odda-view-monthly-report.png"
        alt="Odda View monthly report showing activity and home conditions"
        loading="lazy"
        className="absolute left-1/2 top-1/2 w-[250%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.25]"
      />
    </div>
  </div>
</article>
{/* Mockup descriptions */}
<article className="flex flex-col justify-center rounded-[28px] bg-white px-7 py-9 sm:px-9 lg:px-10">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
    What you can see
  </p>

  <div className="mt-7">
    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl">
      At a glance
    </h3>

    <p className="mt-3 text-sm leading-6 text-[#656A62] sm:text-base sm:leading-7">
      See the current home status, recent activity and environmental conditions
      in one clear view.
    </p>
  </div>

  <div className="my-7 h-px w-full bg-black/10" />

  <div>
    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl">
      Monthly reports
    </h3>

    <p className="mt-3 text-sm leading-6 text-[#656A62] sm:text-base sm:leading-7">
      Understand longer-term routines and meaningful changes without having to
      interpret technical sensor data.
    </p>
  </div>
</article>
    </div>
  </div>
</section>

        {/* Technology products */}
        <section className="mx-auto max-w-[1380px] px-2 pb-20 pt-4 sm:px-6 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">
              What’s inside the system
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
              Small devices working quietly together.
            </h2>
          </div>

          <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyItems.map((item) => {
              const isOpen = openItem === item.title;

              return (
                <article key={item.title}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#929F8B]">
                    {/* Product image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 h-full w-full object-contain p-8 transform-gpu transition-all duration-[320ms] ease-out sm:p-10 ${
                        isOpen
                          ? "scale-[1.03] opacity-50"
                          : "scale-100 opacity-100 group-hover:scale-[1.05]"
                      }`}
                    />

                    {/* Plus / close button */}
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-label={
                        isOpen
                          ? `Close information about ${item.title}`
                          : `Open information about ${item.title}`
                      }
                      onClick={() =>
                        setOpenItem(isOpen ? null : item.title)
                      }
                      className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-[160ms] ease-out hover:scale-105 hover:border-white/55 hover:bg-white/25 active:scale-95"
                    >
                      <ExpandIcon open={isOpen} />
                    </button>

                    {/* Title */}
                    <h3
                      className={`absolute bottom-6 left-6 max-w-[80%] text-2xl font-semibold leading-tight tracking-[-0.035em] text-white transition-all duration-[200ms] ease-out ${
                        isOpen
                          ? "translate-y-3 opacity-0"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Information card */}
                    <div
                      className={`absolute inset-x-3 bottom-3 z-20 rounded-[22px] border border-white/70 bg-white/95 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.12)] backdrop-blur-md transform-gpu transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-[115%] opacity-0"
                      }`}
                    >
                      <h3 className="pr-14 text-xl font-semibold leading-tight tracking-[-0.03em] text-black">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[17px] leading-7 text-black">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
