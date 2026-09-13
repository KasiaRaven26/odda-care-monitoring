import { useState } from "react";

type Insight = {
  title: string;
  status: string;
  message: string;
  description: string;
  icon: "morning" | "movement" | "door" | "home" | "night";
  iconColor: string;
  iconBackground: string;
};

const insights: Insight[] = [
  {
    title: "Morning routine",
    status: "8:12am",
    message: "Mum is up and about.",
    description:
      "First movement was noticed in the kitchen at 8:12am, around the usual time.",
    icon: "morning",
    iconColor: "#A27B18",
    iconBackground: "#F4EBD3",
  },
  {
    title: "Movement around the home",
    status: "9:12am",
    message: "Activity looks familiar.",
    description:
      "Movement has been noticed between the kitchen and living room throughout the morning.",
    icon: "movement",
    iconColor: "#68775E",
    iconBackground: "#E6ECE1",
  },
  {
    title: "Coming and going",
    status: "11:05am",
    message: "The front door was opened.",
    description:
      "The door sensor noticed that the front door opened at 11:05am and closed shortly afterwards.",
    icon: "door",
    iconColor: "#A46A33",
    iconBackground: "#F2E6DA",
  },
  {
    title: "Home environment",
    status: "20.1°C",
    message: "Home feels comfortable.",
    description:
      "The current temperature is 20.1°C and humidity is within the usual range.",
    icon: "home",
    iconColor: "#65727C",
    iconBackground: "#E4E9EC",
  },
  {
    title: "Night-time changes",
    status: "Last night",
    message: "A change worth noticing.",
    description:
      "Movement was noticed in the hallway at 2:14am, which is later than the usual routine.",
    icon: "night",
    iconColor: "#6E6685",
    iconBackground: "#E9E5EF",
  },
];

function SignalIcon({ item }: { item: Insight }) {
  const sharedProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: item.iconColor,
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  if (item.icon === "morning") {
    return (
      <svg {...sharedProps}>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
      </svg>
    );
  }

  if (item.icon === "movement") {
    return (
      <svg {...sharedProps}>
        <circle cx="12" cy="5.5" r="2" />
        <path d="m9.5 21 1-6-3-2.5 2.5-4h4l2.5 3.5 3 1M14 21l-1-6 3-3" />
      </svg>
    );
  }

  if (item.icon === "door") {
    return (
      <svg {...sharedProps}>
        <path d="M5 21h14M7 21V3h10v18M14 12h.01" />
      </svg>
    );
  }

  if (item.icon === "home") {
    return (
      <svg {...sharedProps}>
        <path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-6h6v6" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="M20 15.5A8 8 0 0 1 8.5 4a8.2 8.2 0 1 0 11.5 11.5Z" />
    </svg>
  );
}

export default function SensorInsights() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleCard(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section
      id="how-it-works"
      className="bg-white px-4 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 rounded-[38px] bg-[#F5F2EC] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:p-16">
        {/* Lewa strona */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
            Small signals. Meaningful insight.
          </p>

          <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#919E86] sm:text-5xl lg:text-6xl">
            See what everyday activity can tell you.
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-[#52574F] sm:text-lg">
            Odda turns simple sensor activity into clear, reassuring updates
            about everyday routines at home.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#D8D2C7] bg-white/55 px-5 py-3 text-sm text-[#52574F]">
            <span className="h-2 w-2 rounded-full bg-[#D5A827]" />
            No cameras. No microphones.
          </div>
        </div>

        {/* Rozwijane kapsuły */}
        <div className="space-y-3">
          {insights.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.title}
                className={`overflow-hidden rounded-[28px] border transition-all duration-500 ${
                  isOpen
                    ? "border-[#D4CCBD] bg-white shadow-[0_16px_45px_rgba(55,48,38,0.06)]"
                    : "border-white/60 bg-white/45 hover:bg-white/70"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleCard(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[17px]"
                    style={{ backgroundColor: item.iconBackground }}
                  >
                    <SignalIcon item={item} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold text-black sm:text-lg">
                      {item.title}
                    </span>

                    {!isOpen && (
                      <span className="mt-1 block text-sm text-[#777B73]">
                        Tap to see an example update
                      </span>
                    )}
                  </span>

                  <span className="hidden rounded-full bg-[#F1EEE7] px-4 py-2 text-sm font-medium text-[#62665F] sm:block">
                    {item.status}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[15px] border border-[#DDD7CC] bg-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className={`h-4 w-4 transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-7 sm:pb-7">
                      <div className="ml-0 border-t border-[#E7E2D9] pt-5 sm:ml-16">
                        <div className="rounded-[22px] bg-[#F8F6F1] p-5">
                          <div className="mb-3 flex items-center justify-between gap-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B8F86]">
                              Example update
                            </span>

                            <span className="text-sm font-medium text-[#777B73]">
                              {item.status}
                            </span>
                          </div>

                          <p className="text-lg font-semibold text-[#31352F]">
                            {item.message}
                          </p>

                          <p className="mt-2 max-w-xl text-sm leading-6 text-[#646960] sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}