import { useEffect, useRef, useState } from "react";
import {
  Activity,
  CameraOff,
  DoorOpen,
  Droplets,
  MicOff,
  PlugZap,
  Thermometer,
  VideoOff,
} from "lucide-react";
import Navbar from "../components/Navbar";
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

const systemFlow = [
  {
    number: "01",
    title: "Sensors",
    description: "Gather quiet signals from everyday activity around the home.",
    image: "/images/odda-flow-sensors.png",
  },
  {
    number: "02",
    title: "Odda Hub",
    description: "Securely processes the signals and sends the data onwards.",
    image: "/images/odda-flow-hub.png",
  },
  {
    number: "03",
    title: "Odda View",
    description: "Turns the information into clear, plain-language updates.",
    image: "/images/odda-flow-view.png",
  },
];

const installationSteps = [
  {
    number: "01",
    title: "Order",
    description: "Choose Odda for the home you want to support.",
  },
  {
    number: "02",
    title: "Professional installation",
    description: "We position and connect every device — £99 one-off.",
    href: "/pricing",
  },
  {
    number: "03",
    title: "Onboarding",
    description: "Your family is shown how to use Odda View.",
  },
  {
    number: "04",
    title: "Everyday use",
    description: "Odda learns the routine and shares meaningful updates.",
  },
];

function ArrowConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex h-12 items-center justify-center text-[#315F4B]/55 lg:h-auto"
    >
      <svg
        viewBox="0 0 54 20"
        fill="none"
        className="h-5 w-12 rotate-90 lg:rotate-0"
      >
        <path d="M1 10h49" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="m44 4 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ExpandIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-5 w-5">
      <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-current" />
      <span className={`absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
    </span>
  );
}

export function meta() {
  return [
    { title: "Odda Technology | Odda Care" },
    {
      name: "description",
      content:
        "Explore the quiet sensors, secure hub and thoughtful software behind Odda Care.",
    },
  ];
}

export default function TechnologyPage() {
  const [selectedItem, setSelectedItem] = useState<(typeof technologyItems)[number] | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelScheduledOpen = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = null;
  };
  const cancelScheduledClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const openDetails = (item: (typeof technologyItems)[number]) => {
    cancelScheduledOpen();
    cancelScheduledClose();
    setSelectedItem(item);
    requestAnimationFrame(() => setDetailsOpen(true));
  };
  const closeDetails = () => {
    cancelScheduledOpen();
    cancelScheduledClose();
    setDetailsOpen(false);
    closeTimer.current = setTimeout(() => setSelectedItem(null), 500);
  };
  const scheduleOpen = (item: (typeof technologyItems)[number]) => {
    cancelScheduledOpen();
    openTimer.current = setTimeout(() => openDetails(item), 350);
  };
  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimer.current = setTimeout(closeDetails, 450);
  };

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDetails();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedItem]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white font-['Montserrat'] text-black">
        {/* Hero */}
        <section className="relative min-h-[570px] overflow-hidden bg-[#929F88] sm:min-h-[650px] lg:min-h-[720px]">
          <img
            src="/images/installation.png"
            alt="Odda technology being installed in a family home"
            className="absolute inset-0 h-full w-full origin-center translate-x-[10%] scale-[1.05] object-cover object-[70%_22%] sm:object-[68%_24%] lg:object-[62%_26%]"
          />
<div
  aria-hidden="true"
  className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/35 to-transparent"
/>
          <div className="relative z-10 flex min-h-[570px] w-full items-center py-16 pl-4 pr-5 sm:min-h-[650px] sm:pl-6 sm:pr-8 lg:min-h-[720px] lg:pl-20 lg:pr-10">
            <div className="w-full max-w-[430px] rounded-[28px] border border-white/15 bg-black/45 px-7 py-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-2xl sm:px-8 sm:py-9 lg:px-9 lg:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white">
                ODDA TECHNOLOGY
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-4xl lg:text-[42px]">
                Simple technology.
                <br />
                Meaningful reassurance.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-white sm:text-base">
                How few smart sensors learn a home’s rhythm and turn it into
                something a family can actually understand.
              </p>
            </div>
          </div>
        </section>

        {/* System flow */}
        <section className="bg-[#F8F6F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1380px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black">
                THE SYSTEM
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
                How it fits together.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8">
                Three parts work quietly together, turning small household
                signals into useful information.
              </p>
            </div>

            <div className="mt-10 grid items-stretch lg:grid-cols-[1fr_72px_1fr_72px_1fr]">
              {systemFlow.map((step, index) => (
                <div key={step.title} className="contents">
                  <article className="rounded-[28px] border border-black/5 bg-white px-7 py-8 shadow-[0_14px_40px_rgba(49,95,75,0.07)] sm:px-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="block h-14 w-14 overflow-hidden rounded-full bg-[#E1E6DC]">
                        <img src={step.image} alt="" className="h-full w-full scale-125 object-cover" />
                      </span>

                      <span className="text-sm font-medium tracking-[0.12em] text-black/30">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] text-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-black">
                      {step.description}
                    </p>
                  </article>

                  {index < systemFlow.length - 1 && <ArrowConnector />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full device breakdown */}
       {/* Devices */}
<section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-[72px]">
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#B5C2A7]/35 blur-3xl"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#E5CFAA]/30 blur-3xl"
  />

  <div className="relative mx-auto max-w-[1035px]">
    <div className="mb-8 max-w-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
        What’s inside the system
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
        Small devices working quietly together.
      </h2>
    </div>

    <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {technologyItems.map((item) => (
        <article key={item.title}>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/60 bg-[#91A27F]/88 shadow-[0_18px_45px_rgba(72,88,70,0.14)] backdrop-blur-xl transition-[transform,background-color,border-color,box-shadow] duration-500 motion-safe:hover:-translate-y-1 hover:border-white/80 hover:bg-[#819274]/92 hover:shadow-[0_24px_55px_rgba(72,88,70,0.20)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/25 via-white/0 to-black/[0.03]"
            />

            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain p-6 transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] sm:p-8"
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
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md transform-gpu transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 hover:border-white/70 hover:bg-white/25 hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] active:scale-95"
            >
              <ExpandIcon open={false} />
            </button>

            <h3 className="absolute bottom-5 left-5 z-20 max-w-[80%] text-xl font-semibold leading-tight tracking-[-0.035em] text-white">
              {item.title}
            </h3>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

{/* Device details modal */}
{selectedItem && (
  <div
    role="presentation"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) closeDetails();
    }}
    className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/25 px-4 py-8 backdrop-blur-[6px] transition-opacity duration-500 ease-out ${
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
      className={`relative w-full max-w-[480px] overflow-hidden rounded-[24px] border border-white/60 bg-[#91A27F]/88 font-['Montserrat'] text-white shadow-[0_30px_90px_rgba(20,25,18,0.30)] backdrop-blur-2xl transform-gpu transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        detailsOpen
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/25 via-white/0 to-black/[0.04]"
      />

      <button
        type="button"
        aria-label="Close device information"
        onClick={closeDetails}
        className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:rotate-90 hover:border-black/25 hover:bg-white active:scale-95"
      >
        <ExpandIcon open />
      </button>

      <div className="relative z-20 grid max-h-[calc(100vh-3rem)] overflow-y-auto md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[200px] items-center justify-center border-white/20 bg-white/10 px-6 py-8 md:min-h-[360px] md:border-r md:px-8">
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="h-full max-h-[230px] w-full max-w-[230px] object-contain"
          />
        </div>

        <div className="flex flex-col justify-center bg-white px-6 py-8 md:px-7 md:py-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/55">
            Device details
          </p>

          <h2
            id="device-details-title"
            className="mt-3 pr-8 text-2xl font-medium leading-tight tracking-[-0.045em] text-black sm:text-3xl"
          >
            {selectedItem.title}
          </h2>

          <p className="mt-4 text-sm font-normal leading-6 text-black/75 sm:text-base sm:leading-7">
            {selectedItem.description}
          </p>
        </div>
      </div>
    </article>
  </div>
)}

        {/* Privacy */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[36px] bg-[#F2EDE6] px-6 py-10 shadow-[0_24px_70px_rgba(85,72,55,0.08)] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/25 blur-2xl"
            />

            <div className="relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
              <div className="max-w-[510px]">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-black">
                  Privacy by design
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-black sm:text-5xl">
                  A clearer picture, with privacy intact.
                </h2>

                <p className="mt-6 max-w-[480px] text-base leading-8 text-black/70 sm:text-lg">
                  Odda notices small changes in everyday routines while
                  respecting the privacy of the person at home.
                </p>

              </div>

              <div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "No cameras", Icon: CameraOff },
                    { label: "No microphones", Icon: MicOff },
                    {
                      label: "No audio or video recording",
                      Icon: VideoOff,
                    },
                  ].map(({ label, Icon }) => (
                    <article
                      key={label}
                      className="group flex min-h-[170px] flex-col justify-between rounded-[24px] border border-white/60 bg-white/35 p-5 transition-[transform,background-color,border-color] duration-300 motion-safe:hover:-translate-y-1 hover:border-white/90 hover:bg-white/55 sm:p-6"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/55 text-black/70 transition-colors duration-300 group-hover:bg-white/80">
                        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                      </span>

                      <h3 className="mt-8 max-w-[170px] text-base font-medium leading-6 text-black">
                        {label}
                      </h3>
                    </article>
                  ))}
                </div>

                <div className="mt-4 rounded-[28px] border border-white/60 bg-white/35 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                    What Odda does notice
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-black/70 sm:text-base">
                    Simple household signals that help build a picture of the
                    everyday routine.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {[
                      { label: "Movement", Icon: Activity },
                      { label: "Temperature", Icon: Thermometer },
                      { label: "Humidity", Icon: Droplets },
                      { label: "Door activity", Icon: DoorOpen },
                      { label: "Appliance use", Icon: PlugZap },
                    ].map(({ label, Icon }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-black shadow-[0_3px_12px_rgba(85,72,55,0.06)] transition-[transform,border-color,background-color] duration-300 motion-safe:hover:-translate-y-0.5 hover:border-black/20 hover:bg-white/80"
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 text-black/60"
                          strokeWidth={1.7}
                        />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* Odda View */}
<section className="bg-[#FBFAF8] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
  <div className="mx-auto grid max-w-[1380px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
    <div className="max-w-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#315F4B]">
        ODDA VIEW
      </p>

      <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
        From quiet signals to clear updates.
      </h2>

      <p className="mt-6 text-base leading-8 text-black/75 sm:text-lg">
        Sensors around the home notice simple signals, such as movement,
        a door opening or a change in temperature. They send this
        information to the Odda Hub, which brings it together and
        shares clear updates in Odda View.
      </p>

      <p className="mt-4 text-base leading-8 text-black/75 sm:text-lg">
        In the app, you can see everyday activity and understand what
        is happening at home. If something needs attention, such as a
        front door left open, Odda View shows an alert and sends a push
        notification to your phone.
      </p>
    </div>

    <div>
      <img
        src="/images/alert1.png"
        alt="Odda View home screen and two push notifications, including a front door alert"
        loading="lazy"
        className="block h-auto w-full"
      />
    </div>
  </div>
</section>
        {/* Installation */}
        <section className="bg-[#F8F6F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1380px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#315F4B]">
                GETTING STARTED
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
                From order to everyday use.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {installationSteps.map((step) => {
                const content = (
                  <>
                    <span className="text-sm font-medium tracking-[0.12em] text-[#315F4B]/55">
                      {step.number}
                    </span>

                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black">
                      {step.description}
                    </p>

                    {step.href && (
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#315F4B]">
                        View pricing
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    )}
                  </>
                );

                if (step.href) {
                  return (
                    <a
                      key={step.number}
                      href={step.href}
                      className="group rounded-[24px] border border-[#315F4B]/10 bg-white px-6 py-7 shadow-[0_12px_35px_rgba(49,95,75,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(49,95,75,0.10)]"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <article
                    key={step.number}
                    className="rounded-[24px] border border-[#315F4B]/10 bg-white px-6 py-7 shadow-[0_12px_35px_rgba(49,95,75,0.05)]"
                  >
                    {content}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1380px] rounded-[36px] bg-[#929F88] px-7 py-14 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#315F4B]">
              NEXT STEP
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
              Ready to see it in your parent’s home?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black sm:text-lg">
              Talk through the home, the routine and whether Odda would be the
              right fit — without pressure or obligation.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(49,95,75,0.16)]"
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
        </section>
      </main>
    </>
  );
}
