import { useRef, useState } from "react";

const technologyItems = [
  {
    title: "Odda Hub",
    image: "/images/odda-hub-transparent.png",
    description:
      "The quiet centre of the system. It securely collects information from the sensors and sends it to Odda View.",
    placement:
      "Place it near a power socket in a central part of the home. It should remain plugged in.",
  },
  {
    title: "Motion sensor",
    image: "/images/odda-motion-sensor-transparent.png",
    description:
      "Notices everyday movement in key rooms, helping Odda understand routines without cameras or microphones.",
    placement:
      "Position it in a hallway or main living space, facing into the room rather than directly towards a window.",
  },
  {
    title: "Environmental sensor",
    image: "/images/odda-environment-sensor-transparent.png",
    description:
      "Monitors conditions around the home, including temperature and humidity, to help identify meaningful changes.",
    placement:
      "Use it in a living room or bedroom, away from radiators, direct sunlight and areas with frequent steam.",
  },
  {
    title: "Door sensor",
    image: "/images/odda-door-sensor-transparent.png",
    description:
      "Lets you know when an important door opens or closes, including activity at unusual times of day or night.",
    placement:
      "Fit the two parts to the door and frame so they sit close together whenever the door is closed.",
  },
  {
    title: "Smart plug",
    image: "/images/odda-smart-plug-transparent.png",
    description:
      "Helps build a picture of familiar routines, such as whether the kettle has been used at the usual time.",
    placement:
      "Use it with a familiar appliance, such as the kettle or a lamp, to help understand everyday routines.",
  },
  {
    title: "Assistance button",
    image: "/images/odda-assistance-button-transparent.png",
    description:
      "An optional way to ask for help. It works alongside Odda’s passive monitoring as an additional layer of support.",
    placement:
      "Place it somewhere easy to reach, such as beside the bed or near a favourite chair.",
  },
];

type TechnologyItem = (typeof technologyItems)[number];

function ExpandIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`relative block h-4 w-4 transform-gpu transition-transform duration-300 ease-out ${
        open ? "rotate-45" : "rotate-0"
      }`}
    >
      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
      <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
    </span>
  );
}

export default function SensorInsights() {
  const [selectedItem, setSelectedItem] = useState<TechnologyItem | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const unmountTimer = useRef<number | null>(null);

  function openDetails(item: TechnologyItem) {
    if (unmountTimer.current !== null) {
      window.clearTimeout(unmountTimer.current);
      unmountTimer.current = null;
    }

    setSelectedItem(item);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setDetailsOpen(true));
    });
  }

  function closeDetails() {
    setDetailsOpen(false);

    unmountTimer.current = window.setTimeout(() => {
      setSelectedItem(null);
      unmountTimer.current = null;
    }, 700);
  }

  return (
    <>
      {/* Odda View mockups */}
      <section
        id="how-it-works"
        className="relative z-10 -mt-8 bg-[#929F88] px-4 pb-20 sm:px-6 lg:-mt-12 lg:pb-24"
      >
        <div className="mx-auto max-w-[1380px] rounded-[40px] bg-[#F8F6F1] px-7 py-12 shadow-[0_24px_70px_rgba(41,50,38,0.16)] sm:px-14 lg:px-[88px] lg:py-16">
          <div className="mb-10 max-w-3xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black">
              ODDA HUB
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-black sm:text-5xl">
              Where information becomes reassurance.
            </h2>

            <p className="mt-5 w-full max-w-2xl text-base leading-7 text-black sm:text-lg">
              Odda View brings information from every sensor together and turns
              it into something clear and easy to understand — without
              technical data or complicated sensor logs.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <article className="overflow-hidden">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="group relative h-[480px] overflow-hidden sm:h-[560px]">
                  <img
                    src="/images/odda-view-home.png"
                    alt="Odda View home screen showing the current home status"
                    loading="lazy"
                    className="absolute left-1/2 top-1/2 w-[250%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.25]"
                  />
                </div>

                <div className="group relative h-[480px] overflow-hidden sm:h-[560px]">
                  <img
                    src="/images/odda-view-monthly-report.png"
                    alt="Odda View monthly report showing activity and home conditions"
                    loading="lazy"
                    className="absolute left-1/2 top-1/2 w-[250%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.25]"
                  />
                </div>
              </div>
            </article>

            <article className="flex flex-col justify-center px-7 py-9 sm:px-9 lg:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                What you can see
              </p>

              <div className="mt-7">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl">
                  At a glance
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#656A62] sm:text-base sm:leading-7">
                  See the current home status, recent activity and environmental
                  conditions in one clear view.
                </p>
              </div>

              <div className="my-7 h-px w-full bg-black/10" />

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl">
                  Monthly reports
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#656A62] sm:text-base sm:leading-7">
                  Understand longer-term routines and meaningful changes without
                  having to interpret technical sensor data.
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
          {technologyItems.map((item) => (
            <article key={item.title}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#929F8B]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain p-8 transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] sm:p-10"
                />

                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`Open information about ${item.title}`}
                  onClick={() => openDetails(item)}
                  className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:border-white/55 hover:bg-white/25 active:scale-95"
                >
                  <ExpandIcon open={false} />
                </button>

                <h3 className="absolute bottom-6 left-6 max-w-[80%] text-2xl font-semibold leading-tight tracking-[-0.035em] text-white">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Device details modal */}
      {selectedItem && (
        <div
          className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 sm:p-6 ${
            detailsOpen
              ? "bg-black/35 backdrop-blur-[2px]"
              : "bg-black/0 backdrop-blur-none"
          }`}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="device-details-title"
            className={`pointer-events-auto relative z-10 max-h-[calc(100vh-2rem)] w-full max-w-[540px] origin-center overflow-y-auto rounded-[28px] bg-white p-5 font-['Montserrat'] shadow-[0_30px_90px_rgba(0,0,0,0.24)] will-change-transform transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-6 ${
              detailsOpen
                ? "scale-100 opacity-100"
                : "scale-[0.9] opacity-0"
            }`}
          >
            <button
              type="button"
              aria-label="Close device information"
              onClick={closeDetails}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#F3F1EA] text-black shadow-[0_6px_20px_rgba(0,0,0,0.10)] transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95"
            >
              <ExpandIcon open />
            </button>

            <div className="grid grid-cols-[105px_1fr] items-center gap-5 sm:grid-cols-[135px_1fr] sm:gap-6">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[20px] bg-[#929F8B]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-full w-full object-contain p-5"
                />
              </div>

              <div className="pr-9 sm:pr-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                  Device details
                </p>

                <h2
                  id="device-details-title"
                  className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.04em] text-black sm:text-3xl"
                >
                  {selectedItem.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-black sm:text-base sm:leading-7">
                  {selectedItem.description}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-[20px] bg-[#F3F1EA] px-5 py-4">
              <p className="text-[13px] font-semibold text-[#89967E]">
                Where to place it
              </p>

              <p className="mt-2 text-sm leading-6 text-black sm:text-base sm:leading-7">
                {selectedItem.placement}
              </p>
            </div>

            <p className="mt-4 text-xs leading-5 text-black/55">
              Final positioning is agreed during setup and does not require a
              permanent installation.
            </p>
          </article>
        </div>
      )}
    </>
  );
}
