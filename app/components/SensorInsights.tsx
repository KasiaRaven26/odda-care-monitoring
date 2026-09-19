import { useEffect, useRef, useState } from "react";

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
  const [selectedItem, setSelectedItem] =
    useState<TechnologyItem | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const unmountTimer = useRef<number | null>(null);
  const hoverTimer = useRef<number | null>(null);
  const closeHoverTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
      if (closeHoverTimer.current !== null)
        window.clearTimeout(closeHoverTimer.current);
      if (unmountTimer.current !== null)
        window.clearTimeout(unmountTimer.current);
    };
  }, []);

  // Animacja tekstu po prawej stronie
  const textPanelRef = useRef<HTMLElement | null>(null);
  const [textPanelVisible, setTextPanelVisible] = useState(false);

  useEffect(() => {
  const element = textPanelRef.current;

  if (!element) {
    setTextPanelVisible(true);
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTextPanelVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px 80px 0px",
    }
  );

  observer.observe(element);

  return () => observer.disconnect();
}, []);

  function openDetails(item: TechnologyItem) {
  if (hoverTimer.current !== null) {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }

  if (closeHoverTimer.current !== null) {
    window.clearTimeout(closeHoverTimer.current);
    closeHoverTimer.current = null;
  }

  if (unmountTimer.current !== null) {
    window.clearTimeout(unmountTimer.current);
    unmountTimer.current = null;
  }

  setSelectedItem(item);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      setDetailsOpen(true);
    });
  });
}

function scheduleOpen(item: TechnologyItem) {
  if (hoverTimer.current !== null) {
    window.clearTimeout(hoverTimer.current);
  }

  hoverTimer.current = window.setTimeout(() => {
    hoverTimer.current = null;
    openDetails(item);
  }, 100);
}

function cancelScheduledOpen() {
  if (hoverTimer.current !== null) {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }
}

function scheduleClose() {
  if (closeHoverTimer.current !== null) {
    window.clearTimeout(closeHoverTimer.current);
  }

  closeHoverTimer.current = window.setTimeout(() => {
    closeHoverTimer.current = null;
    closeDetails();
  }, 280);
}

function cancelScheduledClose() {
  if (closeHoverTimer.current !== null) {
    window.clearTimeout(closeHoverTimer.current);
    closeHoverTimer.current = null;
  }
}

function closeDetails() {
  cancelScheduledOpen();
  cancelScheduledClose();

  if (unmountTimer.current !== null) {
    window.clearTimeout(unmountTimer.current);
  }

  setDetailsOpen(false);

  unmountTimer.current = window.setTimeout(() => {
    setSelectedItem(null);
    unmountTimer.current = null;
  }, 480);
}

  useEffect(() => {
    if (!selectedItem) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeDetails();
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedItem]);
  

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

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-black sm:text-4xl">
       The heart of Odda.
            </h2>

            <p className="mt-5 w-full max-w-2xl text-base leading-7 text-black sm:text-lg">
              Sensors gather the signals. Odda View turns them into clear, meaningful updates - learning what normal looks like, noticing important changes and explaining everything in plain, everyday language.
            </p>
          </div>
<div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
  <article className="overflow-hidden">
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {/* Home */}
      <div className="group relative h-[480px] overflow-hidden sm:h-[560px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/odda-home.png"
            alt="Odda View home screen showing the current home status"
            loading="lazy"
            className="h-[500px] w-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12]"
          />
        </div>
      </div>

      {/* Monthly report */}
      <div className="group relative h-[480px] overflow-hidden sm:h-[560px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/odda-monthly-report.png"
            alt="Odda View monthly report showing activity and home conditions"
            loading="lazy"
            className="h-[500px] w-auto scale-[1.08] object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.20]"
          />
        </div>
      </div>
    </div>
  </article>


            <article className="flex flex-col justify-center px-7 py-9 sm:px-9 lg:px-10">
  

  <div className="mt-7">
    <h3 className="text-[22px] font-semibold tracking-[-0.035em] text-black sm:text-[26px]">
      At a glance
    </h3>

    <p className="mt-3 text-sm leading-6 text-black sm:text-base sm:leading-7">
      A quick daily check — is everything usual, or does something need
      attention — plus live temperature, humidity and sensor status.
    </p>
  </div>

  <div className="my-6 h-px w-full bg-black" />

  <div>
    <h3 className="text-[22px] font-semibold tracking-[-0.035em] text-black sm:text-[26px]">
      Weekly patterns
    </h3>

    <p className="mt-3 text-sm leading-6 text-black sm:text-base sm:leading-7">
      See activity broken down week by week, so small changes in routine are
      easy to spot before they become a concern.
    </p>
  </div>

  <div className="my-6 h-px w-full bg-black/10" />

  <div>
    <h3 className="text-[22px] font-semibold tracking-[-0.035em] text-black sm:text-[26px]">
      Monthly reports
    </h3>

    <p className="mt-3 text-sm leading-6 text-black sm:text-base sm:leading-7">
      A downloadable summary of averages and trends — easy to share with family
      or a GP, without digging through raw data.
    </p>
  </div>
</article>
          </div>
        </div>
      </section>

      {/* Technology products */}
      <section className="mx-auto max-w-[1380px] px-2 pb-20 pt-4 sm:px-6 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
            What’s inside the system
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white :text-4xl">
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
                  onMouseEnter={() => scheduleOpen(item)}
                  onMouseLeave={cancelScheduledOpen}
                  onFocus={() => scheduleOpen(item)}
                  onBlur={cancelScheduledOpen}
                  onClick={() => openDetails(item)}
                  className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md transform-gpu transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 hover:border-white/70 hover:bg-white/25 hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] active:scale-95"
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
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDetails();
          }}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 transition-opacity duration-300 ease-out sm:p-6 ${
            detailsOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="device-details-title"
            onMouseEnter={cancelScheduledClose}
            onMouseLeave={scheduleClose}
            className={`relative z-10 grid max-h-[calc(100vh-2rem)] w-full max-w-[680px] overflow-y-auto rounded-[30px] bg-[#111111] font-['Montserrat'] text-white shadow-[0_30px_90px_rgba(0,0,0,0.30)] will-change-transform transform-gpu transition-[transform,opacity] duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid-cols-[210px_1fr] ${
              detailsOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <button
              type="button"
              aria-label="Close device information"
              onClick={closeDetails}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-[transform,background-color,border-color] duration-300 ease-out hover:rotate-90 hover:border-white/60 hover:bg-white/20 active:scale-95"
            >
              <ExpandIcon open />
            </button>

            <div className="flex min-h-[210px] items-center justify-center bg-[#929F8B] p-8 sm:min-h-full sm:p-7">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="h-[145px] w-[145px] object-contain sm:h-[170px] sm:w-[170px]"
              />
            </div>

            <div className="flex flex-col p-7 sm:p-9 sm:pr-14">
              

              <h2
                id="device-details-title"
                className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[34px]"
              >
                {selectedItem.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-white sm:text-base">
                {selectedItem.description}
              </p>

              <div className="mt-7 border-t border-white/15 pt-6">
               

                <p className="mt-3 text-sm leading-7 text-white sm:text-base">
                  {selectedItem.placement}
                </p>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
