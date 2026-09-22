import type { Route } from "./+types/how-it-works";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "We set everything up",
    description:
      "We visit the home, understand what support would be helpful and install the Odda Hub and discreet sensors in the right places.",
  },
  {
    number: "02",
    title: "Odda learns the daily rhythm",
    description:
      "The sensors quietly build a picture of familiar routines, including movement around the home, door activity and changes in the home environment.",
  },
  {
    number: "03",
    title: "Important changes become clear",
    description:
      "Odda View turns everyday signals into simple, meaningful updates, helping you notice when something is different from the usual routine.",
  },
  {
    number: "04",
    title: "The right people stay connected",
    description:
      "Family members and the people involved in care can stay informed, providing reassurance and helping everyone make better decisions together.",
  },
];

const practicalQuestions = [
  {
    question: "What happens if the internet or power goes down?",
    href: "/faq#power-and-internet",
    answer:
      "Odda monitors the connection and sensor status. If the system goes offline or a device needs attention, you will be notified. The exact connectivity setup is confirmed during the home assessment.",
  },
  {
    question: "Does the person at home need to press anything?",
    href: "/faq#nothing-to-press",
    answer:
      "No. Everyday monitoring happens quietly in the background. There is nothing to wear, charge or remember to press for the system to understand normal activity.",
  },
  {
    question: "How long does installation take?",
    href: "/faq#installation-time",
    answer:
      "Most installations are completed during one home visit. We position and test the devices, make sure everything is connected and explain Odda View before we leave.",
  },
  {
    question: "Will I receive constant notifications?",
    href: "/faq#notifications",
    answer:
      "No. Odda is designed to avoid unnecessary alerts. You can check the app whenever you wish, while notifications focus on changes that may genuinely matter.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "How it works | Odda Care" },
    {
      name: "description",
      content:
        "See how Odda turns discreet home sensor activity into clear updates and meaningful alerts for families.",
    },
  ];
}

export default function HowItWorksPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const timeline = timelineRef.current;

    if (!timeline) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(timeline);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#E9E4DA] sm:min-h-[640px] lg:min-h-[720px]">
        <img
          src="/images/woman-kitchen.png"
          alt="Older woman preparing a cup of tea in her kitchen while Odda works quietly in the background"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] lg:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1380px] items-center px-4 py-12 sm:min-h-[640px] sm:px-6 lg:min-h-[720px] lg:px-10">
          <div className="max-w-[620px] rounded-[34px] border border-white/3  px-7 py-10 shadow-[0_24px_70px_rgba(27,34,24,0.18)] backdrop-blur-sm sm:px-11 sm:py-12 lg:px-14 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white">
              How it works
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl">
              From quiet signals to real reassurance.
            </h1>

            <p className="mt-6 text-base font-normal leading-8 text-white sm:text-lg">
              No cameras. No microphones.
              <br />
              Just a clear, everyday picture of how things are going.
            </p>
          </div>
        </div>
        <a
  href="#process"
  aria-label="Scroll down to see how Odda works"
  className="group absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-white/90 transition-colors duration-300 hover:text-white sm:bottom-9"
>
  

  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-7 w-7 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] motion-safe:animate-bounce"
  >
    <path
      d="M5 9l7 7 7-7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>
      </section>

 {/* Numbered process */}
<section
  id="process"
  className="bg-[#F8F6F1] px-4 py-14 sm:px-6 lg:py-20"
>
  <div className="mx-auto max-w-[1380px]">
    <div className="grid overflow-hidden rounded-[32px] bg-white px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-14 lg:py-14">
      {/* Section heading */}
      <div className="mb-10 max-w-md lg:mb-0">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black">
          THE PROCESS
        </p>

        <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black lg:text-5xl">
          Simple to set up.
          <br />
          Simple to use.
        </h2>

        <p className="mt-5 max-w-sm text-base leading-7 text-black">
          A simple, considered process designed around the person, their home
          and the people who care about them.
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative">
        {steps.map((step, index) => (
          <article
            key={step.number}
            style={{
              transitionDelay: timelineVisible
                ? `${index * 180 + 100}ms`
                : "0ms",
            }}
            className={`relative flex items-start gap-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-7 ${
              timelineVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-6 opacity-0"
            } ${
              index < steps.length - 1 ? "pb-8 sm:pb-10" : ""
            } motion-reduce:translate-x-0 motion-reduce:opacity-100`}
          >
            <span
              style={{
                transitionDelay: timelineVisible
                  ? `${index * 180 + 180}ms`
                  : "0ms",
              }}
              className={`relative z-10 block w-[46px] shrink-0 pt-0.5 text-3xl font-[200] leading-none tracking-[-0.06em] text-black/30 transition-transform duration-700 sm:w-12 sm:text-[32px] ${
                timelineVisible ? "scale-100" : "scale-95"
              }`}
            >
              {step.number}
            </span>

            <div className="max-w-3xl pt-0.5">
              <h3 className="text-xl font-medium leading-tight tracking-[-0.035em] text-black sm:text-2xl">
                {step.title}
              </h3>

              <p
                style={{
                  transitionDelay: timelineVisible
                    ? `${index * 180 + 260}ms`
                    : "0ms",
                }}
                className={`mt-2 max-w-2xl text-sm font-normal leading-7 text-black transition-[opacity,transform] duration-700 sm:text-base ${
                  timelineVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-3 opacity-0"
                } motion-reduce:translate-x-0 motion-reduce:opacity-100`}
              >
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Odda View walkthrough */}
      <section className="bg-[#929F88] px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-[1380px] rounded-[40px] bg-[#F8F6F1] px-7 py-12 sm:px-14 lg:px-[72px] lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/50">
              Odda View
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
              Clear information, without technical sensor logs.
            </h2>

            <p className="mt-6 max-w-2xl text-base font-normal leading-8 text-black/75 sm:text-lg">
              Check the current home status at a glance, review recent activity
              and see longer-term patterns in a monthly report.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid grid-cols-2 gap-2 overflow-hidden">
              <div className="group relative h-[470px] overflow-hidden sm:h-[600px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/odda-home.png"
                    alt="Odda View home status screen"
                    className="h-[540px] w-full object-contain transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                  />
                </div>
              </div>

              <div className="group relative h-[470px] overflow-hidden sm:h-[600px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/odda-monthly-report.png"
                    alt="Odda View monthly report screen"
                    className="h-[540px] w-full translate-y-4 scale-[1.13] object-contain transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.21]"
                  />
                </div>
              </div>
            </div>

            <div className="px-1 sm:px-6 lg:px-8">
              {[
                {
                  title: "At a glance",
                  text: "See whether everything looks usual, together with the latest activity, home conditions and sensor status.",
                },
                {
                  title: "Live status",
                  text: "Everyday activity is translated into simple updates, so you can understand what is happening without reading raw data.",
                },
                {
                  title: "Monthly reports",
                  text: "Review averages and patterns over time, with a clear summary that can be shared with family when useful.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`${index > 0 ? "border-t border-black/10" : ""} py-7`}
                >
                  <h3 className="text-2xl font-medium tracking-[-0.035em] text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-7 text-black">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* Practical questions */}
<section className="bg-[#F8F6F1] px-4 py-14 sm:px-6 lg:py-16">
  <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
    {/* Section heading */}
    <div className="max-w-md">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black">
        In practice
      </p>

      <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-black sm:text-4xl lg:text-[42px]">
        A few things families usually ask first.
      </h2>

      <a
        href="/faq"
        className="group mt-7 inline-flex items-center gap-3 text-base font-medium text-black"
      >
        <span className="border-b border-black pb-1">
          Visit the full FAQ
        </span>

        <span
          aria-hidden="true"
          className="text-black transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </div>

    {/* Clickable FAQ questions */}
    <div className="border-y border-black/10">
      {practicalQuestions.map((item) => (
        <a
          key={item.question}
          href={item.href}
          className="group flex items-center justify-between gap-6 border-b border-black/10 py-5 text-black last:border-b-0"
        >
          <span className="text-lg font-medium tracking-[-0.025em] text-black sm:text-xl">
            {item.question}
          </span>

          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-black transition-all duration-300 group-hover:translate-x-1 group-hover:bg-black/[0.08]"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M4 10h11M11 6l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-[#F8F6F1] px-4 pb-16 sm:px-6 lg:pb-20">
        <div className="mx-auto flex max-w-[1380px] flex-col items-start justify-between gap-8 rounded-[36px] bg-[#A5B19C] px-7 py-11 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:gap-14 lg:px-16 lg:py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.045em] text-white sm:text-[34px] lg:text-[32px]">
              Curious whether Odda<br></br> would work for your family’s home?
            </h2>

            <p className="mt-4 max-w-2xl text-base font-normal leading-7 text-white sm:text-lg">
              I’m happy to walk you through it-without pressure or obligation.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex min-w-[190px] shrink-0 items-center justify-center gap-3 rounded-full border-2 border-white bg-white px-7 py-4 text-base font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_28px_rgba(41,50,38,0.14)]"
          >
            <span>Let’s talk</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
