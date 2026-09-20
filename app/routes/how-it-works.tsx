import type { Route } from "./+types/how-it-works";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const steps = [
  {
    number: "01",
    title: "We visit and assess the home.",
    description:
      "We take time to understand the home, the person living there and what matters to the family. Together, we choose the most useful places for each sensor—with no invasive changes to the home.",
  },
  {
    number: "02",
    title: "Sensors quietly learn the routine.",
    description:
      "During the first days and weeks, Odda begins to understand what normal looks like for that particular person—not a generic routine based on somebody else.",
  },
  {
    number: "03",
    title: "Odda View turns activity into plain updates.",
    description:
      "Instead of technical sensor logs, you see clear information such as when the morning routine began, the latest activity and whether everything looks usual at home.",
  },
  {
    number: "04",
    title: "You get notified only when it matters.",
    description:
      "You do not need to watch the app all day. Odda highlights meaningful changes and sends an alert when something may deserve a call, a visit or a closer look.",
  },
];

const practicalQuestions = [
  {
    question: "What happens if the internet or power goes down?",
    answer:
      "Odda monitors the connection and sensor status. If the system goes offline or a device needs attention, you will be notified. The exact connectivity setup is confirmed during the home assessment.",
  },
  {
    question: "Does the person at home need to press anything?",
    answer:
      "No. Everyday monitoring happens quietly in the background. There is nothing to wear, charge or remember to press for the system to understand normal activity.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most installations are completed during one home visit. We position and test the devices, make sure everything is connected and explain Odda View before we leave.",
  },
  {
    question: "Will I receive constant notifications?",
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
              From sensor to peace of mind in four steps.
            </h1>

            <p className="mt-6 text-base font-normal leading-8 text-white sm:text-lg">
              No cameras. No microphones.<br></br> Just a clear, everyday picture of how
              things are going.
            </p>
          </div>
        </div>
      </section>

      {/* Numbered process */}
      <section className="bg-[#F8F6F1] px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/50">
              The process
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
              Simple technology, set up around real life.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-black/10 bg-white px-7 py-10 sm:px-11 sm:py-12 lg:px-16 lg:py-16">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-7 left-[26px] top-7 w-px -translate-x-1/2 bg-black/10 sm:left-7"
              />

            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`relative flex items-start gap-6 sm:gap-8 ${
                  index < steps.length - 1 ? "pb-14 sm:pb-16" : ""
                }`}
              >
                <span className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#E1E6DC] text-sm font-semibold text-black sm:h-14 sm:w-14">
                  {step.number}
                </span>

                <div className="max-w-4xl pt-1">
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] text-black sm:text-[28px]">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-base font-normal leading-8 text-black/70">
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
                  <p className="mt-3 text-base font-normal leading-7 text-black/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical questions */}
      <section className="bg-[#F8F6F1] px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/50">
              In practice
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
              A few things families usually ask first.
            </h2>

            <a
              href="/faq"
              className="mt-8 inline-flex items-center gap-2 text-base font-medium text-black underline decoration-black/30 underline-offset-8 transition-colors hover:text-[#66735E]"
            >
              Visit the full FAQ
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {practicalQuestions.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-xl font-medium tracking-[-0.025em] text-black [&::-webkit-details-marker]:hidden">
                  {item.question}

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/20 transition-transform duration-300 group-open:rotate-45">
                    <span className="relative block h-4 w-4">
                      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                    </span>
                  </span>
                </summary>

                <p className="max-w-3xl pb-7 pr-14 text-base font-normal leading-8 text-black/70">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F6F1] px-4 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-[1380px] rounded-[40px] bg-[#A5B19C] px-7 py-16 text-center sm:px-12 lg:py-20">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-5xl">
            Curious whether Odda would work for your family’s home?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-8 text-black/75 sm:text-lg">
            I’m happy to walk you through it—without pressure or obligation.
          </p>

          <a
            href="/#contact"
            className="mt-9 inline-flex min-w-[220px] items-center justify-center rounded-full border-2 border-white bg-white px-8 py-4 text-base font-medium text-black transition-colors duration-300 hover:bg-transparent"
          >
            Let’s talk
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
