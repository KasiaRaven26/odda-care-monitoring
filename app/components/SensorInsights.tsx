import { useState } from "react";
import { Link } from "react-router";

const dashboardFeatures = [
  {
    prompt: "How was today?",
    title: "Understand today",
    description:
      "See the shape of the day at a glance, with familiar activity translated into a clear, reassuring summary.",
  },
  {
    prompt: "Has anything changed?",
    title: "Notice meaningful changes",
    description:
      "Odda learns what a familiar routine looks like and brings important changes to your attention in plain language.",
  },
  {
    prompt: "Is there something I should know?",
    title: "See longer-term patterns",
    description:
      "Weekly views and monthly reports help your family understand whether routines are staying consistent over time.",
  },
];

export default function SensorInsights() {
  const [activeDevice, setActiveDevice] = useState<"desktop" | "phone">(
    "desktop",
  );

  return (
    <section
      id="how-it-works"
      className="bg-[#EDF1EA] px-7 py-20 sm:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#315F4B]">
              Odda View
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              The day, made clear.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 sm:text-lg">
            Sensors gather the signals. Odda View turns them into clear,
            meaningful updates — so your family can understand what is
            happening without reading technical sensor data.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          {/* Compact, manually controlled product carousel. */}
          <div>
            <div className="mx-auto w-full max-w-[520px]">
              <div className="flex h-[230px] items-center justify-center sm:h-[270px]">
                {activeDevice === "desktop" ? (
                  <img
                    src="/images/desktop3-transparent.png"
                    alt="Odda View desktop dashboard showing today's activity and longer-term routines"
                    loading="lazy"
                    className="block h-auto w-full object-contain"
                    style={{ maxWidth: "420px" }}
                  />
                ) : (
                  <img
                    src="/images/odda-home.png"
                    alt="Odda View mobile dashboard on an iPhone"
                    loading="lazy"
                    className="block max-w-full object-contain drop-shadow-[0_10px_16px_rgba(25,32,23,0.1)]"
                    style={{ height: "170px", width: "auto" }}
                  />
                )}
              </div>

              <div
                role="tablist"
                aria-label="Choose Odda View device"
                className="mt-3 flex items-center justify-center gap-7"
              >
                {(["desktop", "phone"] as const).map((device) => {
                  const isSelected = activeDevice === device;

                  return (
                    <button
                      key={device}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveDevice(device)}
                      className={[
                        "border-b pb-1 text-sm font-semibold capitalize transition-colors duration-300",
                        isSelected
                          ? "border-[#315F4B] text-[#315F4B]"
                          : "border-transparent text-black hover:border-black/30",
                      ].join(" ")}
                    >
                      {device === "desktop" ? "Desktop view" : "Phone view"}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-4 text-center text-sm font-semibold">
              Available on phone and desktop.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              What Odda View answers
            </p>

            <div className="mt-6 border-t border-black/20">
              {dashboardFeatures.map((feature, index) => (
                <article
                  key={feature.title}
                  className="flex gap-5 border-b border-black/20 py-5"
                >
                  <span className="mt-1 text-xs font-semibold text-[#315F4B]">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{feature.prompt}</p>
                    <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 sm:text-base sm:leading-7">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link
              to="/how-it-works"
              className="mt-8 inline-flex border-b border-black/35 pb-1 font-semibold transition-colors duration-300 hover:border-[#315F4B] hover:text-[#315F4B]"
            >
              Explore how Odda works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
