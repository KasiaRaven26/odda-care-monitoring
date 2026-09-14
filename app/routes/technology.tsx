import { useState } from "react";

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
    <main className="min-h-screen bg-white px-4 py-16 lg:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-[1380px] px-2 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          {/* Hero text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              The technology behind Odda
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-black sm:text-6xl lg:text-7xl">
              A simple guide to what’s actually in the home.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4F554C]">
              Home monitoring technology is new to most families, so we explain
              everything clearly — no jargon and no assumptions.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#656A62]">
              Every device is small, battery-powered and designed to blend
              quietly into the home. Nothing records images or sound, and
              nothing about the installation is permanent.
            </p>
          </div>

          {/* Hero image */}
          <div className="overflow-hidden rounded-[32px] bg-[#F3F1EA] shadow-[0_18px_50px_rgba(48,54,45,0.10)]">
            <img
              src="/images/odda-sensor-installation-technology.png"
              alt="Odda installer fitting a sensor inside a home"
              className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
            />
          </div>
        </div>

        {/* Three principles */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "No cameras",
            "No microphones",
            "No permanent installation",
          ].map((principle) => (
            <div
              key={principle}
              className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              <span className="h-2 w-2 rounded-full bg-[#D5A827]" />
              {principle}
            </div>
          ))}
        </div>
      </section>

      {/* Technology products */}
      <section className="mx-auto max-w-[1380px] px-2 pb-20 sm:px-6 lg:px-10">
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

                  {/* Title visible when closed */}
                  <h3
                    className={`absolute bottom-6 left-6 max-w-[80%] text-2xl font-semibold leading-tight tracking-[-0.035em] text-white transition-all duration-[200ms] ease-out ${
                      isOpen
                        ? "translate-y-3 opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Information sliding onto the card */}
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
  );
}