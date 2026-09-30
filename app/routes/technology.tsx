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
import { Link } from "react-router";
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
    details:
      "Motion, door, environmental and smart plug sensors notice simple household events — never images, conversations or private moments.",
    image: "/images/sensor1.jpeg",
    imageAlt: "An Odda sensor installed discreetly in a living room",
    imageClassName: "object-cover object-[center_32%]",
  },
  {
    number: "02",
    title: "Odda Hub",
    description: "Securely processes the signals and sends the data onwards.",
    details:
      "The hub brings each signal together, adds time and context, and securely sends the useful information to Odda View.",
    image: "/images/odda-install.png",
    imageAlt: "Aggie showing how the Odda Hub is set up in a living room",
    imageClassName: "object-cover object-center",
  },
  {
    number: "03",
    title: "Odda View",
    description: "Turns the information into clear, plain-language updates.",
    details:
      "Odda View makes the signals easy to understand, showing the current home status, useful patterns and alerts that may need attention.",
    image: "/images/alert1.png",
    imageAlt: "Odda View app and notifications shown in a phone mockup",
    imageClassName: "object-cover object-center mix-blend-multiply",
  },
];

const installationSteps = [
  {
    number: "01",
    stage: "Start here",
    title: "Order",
    description: "Choose the Odda setup that feels right for the home.",
  },
  {
    number: "02",
    stage: "In-home setup",
    title: "Professional installation",
    description: "We position, connect and test every device — £99 one-off.",
    href: "/pricing",
  },
  {
    number: "03",
    stage: "Learn the app",
    title: "Onboarding",
    description: "We show your family how to use Odda View with confidence.",
  },
  {
    number: "04",
    stage: "Ongoing",
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
            <div className="w-full max-w-[430px] rounded-[34px] bg-black/40 px-7 py-8 text-white shadow-[0_24px_70px_rgba(27,34,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-9 lg:px-9 lg:py-10">
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

            <div className="mt-12 grid items-stretch gap-y-1 lg:grid-cols-[1fr_52px_1fr_52px_1fr] lg:gap-y-0">
              {systemFlow.map((step, index) => (
                <div key={step.title} className="contents">
                  <article
                    tabIndex={0}
                    aria-describedby={`system-step-${step.number}`}
                    className="group overflow-hidden rounded-[30px] bg-white shadow-[0_18px_50px_rgba(49,95,75,0.09)] outline-none transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-[#315F4B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F6F1]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E4DB]">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className={`h-full w-full ${step.imageClassName}`}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-[#315F4B]/10 opacity-0 transition-opacity duration-400 group-hover:opacity-100 group-focus:opacity-100" />

                      <span className="absolute right-5 top-5 z-20 flex h-11 min-w-11 items-center justify-center rounded-full bg-white/90 px-3 text-sm font-semibold tracking-[0.1em] text-black shadow-sm backdrop-blur-md">
                        {step.number}
                      </span>

                      <div className="pointer-events-none absolute inset-x-4 bottom-4 z-10 translate-y-3 rounded-[20px] bg-white/95 p-5 text-left opacity-0 shadow-[0_18px_45px_rgba(28,58,46,0.18)] backdrop-blur-md transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 sm:inset-x-5 sm:bottom-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#315F4B]">
                          What happens here
                        </p>
                        <p
                          id={`system-step-${step.number}`}
                          className="mt-2 text-sm leading-6 text-black"
                        >
                          {step.details}
                        </p>
                      </div>
                    </div>

                    <div className="px-7 py-7 sm:px-8 sm:py-8">
                      <h3 className="text-2xl font-semibold tracking-[-0.035em] text-black">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-base leading-7 text-black">
                        {step.description}
                      </p>

                      <p className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#315F4B]">
                        Hover or tap for details
                        <span
                          aria-hidden="true"
                          className="text-base font-normal transition-transform duration-300 group-hover:rotate-45 group-focus:rotate-45"
                        >
                          +
                        </span>
                      </p>
                    </div>
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
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/60 bg-[#91A27F]/88 shadow-[0_18px_45px_rgba(72,88,70,0.14)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 hover:border-white/80 hover:bg-[#819274]/92 hover:shadow-[0_24px_55px_rgba(72,88,70,0.20)]">
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
        <section className="relative overflow-hidden bg-[#687A62] px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-44 -top-44 h-[480px] w-[480px] rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10"
          />

          <div className="relative mx-auto max-w-[1380px]">
            <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  Privacy by design
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                  Insight into the day.
                  <span className="block text-white">
                    Not into private moments.
                  </span>
                </h2>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                
                
              </div>
            </div>

            <div className="mt-9 grid border-t border-white/25 pt-8 lg:grid-cols-2">
                <div className="pb-8 lg:pr-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    What Odda notices
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                    Quiet signals from daily life.
                  </h3>

                  <div className="mt-5 grid grid-cols-2 gap-x-5 sm:grid-cols-3">
                    {[
                      { label: "Movement", Icon: Activity },
                      { label: "Temperature", Icon: Thermometer },
                      { label: "Humidity", Icon: Droplets },
                      { label: "Doors", Icon: DoorOpen },
                      { label: "Appliances", Icon: PlugZap },
                    ].map(({ label, Icon }) => (
                      <div
                        key={label}
                        className="group flex cursor-default items-center gap-3 border-t border-white/25 py-3"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#315F4B] shadow-[0_5px_14px_rgba(24,48,38,0.16)] transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-105">
                          <Icon
                            aria-hidden="true"
                            className="h-[18px] w-[18px]"
                            strokeWidth={1.8}
                          />
                        </span>
                        <p className="text-sm font-medium leading-5">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/25 pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    What stays private
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                    Patterns, never people.
                  </h3>

                  <div className="mt-5">
                    {[
                      {
                        label: "No cameras",
                        detail: "No photographs or footage inside the home.",
                        Icon: CameraOff,
                      },
                      {
                        label: "No microphones",
                        detail: "No conversations or household sounds captured.",
                        Icon: MicOff,
                      },
                      {
                        label: "No audio or video",
                        detail: "No live streams, clips or recordings stored.",
                        Icon: VideoOff,
                      },
                    ].map(({ label, detail, Icon }) => (
                      <div
                        key={label}
                        className="group flex cursor-default items-center gap-4 border-t border-white/25 py-3"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#315F4B] shadow-[0_5px_14px_rgba(24,48,38,0.16)] transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-105">
                          <Icon
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.8}
                          />
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-5">
                            {label}
                          </p>
                          <p className="mt-0.5 text-xs leading-5 text-white sm:text-sm">
                            {detail}
                          </p>
                        </div>
                      </div>
                    ))}
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
        className="block h-auto w-full mix-blend-multiply"
      />
    </div>
  </div>
</section>
        {/* Installation */}
        <section className="bg-[#F8F6F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1380px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black">
                THE PROCESS
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
                Four simple steps.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-black sm:text-lg">
                From choosing Odda to understanding the first updates, we help
                your family get everything in place.
              </p>
            </div>

            <div className="relative mt-14 lg:mt-16">
              <ol className="grid gap-x-8 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
                {installationSteps.map((step, index) => (
                  <li
                    key={step.number}
                    className="process-step relative min-h-14 pl-20 lg:pl-0"
                  >
                    {index < installationSteps.length - 1 && (
                      <>
                        <span
                          aria-hidden="true"
                          className="process-connector process-connector--y absolute bottom-[-2.5rem] left-[27px] top-14 w-px bg-[#315F4B]/20 lg:hidden"
                        >
                          <span className="process-arrowhead process-arrowhead--y absolute -bottom-px -left-[3px] h-2 w-2 border-b border-r border-[#315F4B]/65" />
                        </span>

                        <span
                          aria-hidden="true"
                          className="process-connector process-connector--x absolute left-14 right-[-2.5rem] top-[27px] hidden h-px bg-[#315F4B]/20 lg:block"
                        >
                          <span className="process-arrowhead process-arrowhead--x absolute -right-px -top-[3px] h-2 w-2 border-r border-t border-[#315F4B]/65" />
                        </span>
                      </>
                    )}
                    <span
                      className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#315F4B] bg-[#315F4B] text-sm font-semibold tracking-[0.1em] text-white shadow-[0_4px_18px_rgba(49,95,75,0.12)] lg:relative"
                    >
                      {step.number}
                    </span>

                    <div className="lg:mt-8">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#315F4B]">
                        {step.stage}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.03em] text-black">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-[270px] text-sm leading-7 text-black">
                        {step.description}
                      </p>

                      {step.href && (
                        <Link
                          to={step.href}
                          className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#315F4B] underline decoration-[#315F4B]/20 underline-offset-4 transition-colors hover:decoration-[#315F4B]/60"
                        >
                          View pricing
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
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
