import { useEffect, useState } from "react";
import type { Route } from "./+types/faq";
import Navbar from "../components/Navbar";

const faqSections = [
  {
    title: "About Odda",
    items: [
      {
        question: "What is Odda?",
        answer:
          "Odda is a home monitoring service that helps families stay connected to an elderly relative’s daily routine. Small, discreet sensors are placed around the home to notice movement, activity and changes in routine — giving you plain-English updates and alerts, so you’re not left guessing how they’re doing.",
      },
      {
        question: "Does Odda use cameras or microphones?",
        answer:
          "No — never. Odda has no cameras and no microphones anywhere in the home. Sensors detect movement and activity only, such as a door opening or motion in a room. They don’t record images or sound.",
      },
      {
        question: "Is Odda a medical or care service?",
        answer:
          "No. Odda doesn’t provide care, medical monitoring or diagnosis, and it isn’t a substitute for care visits, a personal alarm or emergency response. It helps families notice patterns and changes in daily routine, so they can decide whether to check in or seek support.",
      },
      {
        question: "Who is Odda for?",
        answer:
          "Odda is designed for older adults who live alone and want to remain independent, and for the family members who worry about them — whether they live down the road, a few hours away or further afield.",
      },
    ],
  },
  {
    title: "How it works",
    items: [
      {
        question: "What does Odda actually monitor?",
        answer:
          "Depending on the home, sensors can notice movement between rooms, morning and night-time activity, bathroom visits, doors opening and closing, and unusual changes in routine. Everything is translated into simple, human language rather than raw technical data.",
      },
      {
        question: "How will I see the information?",
        answer:
          "Information is available through the Odda family dashboard and through alerts sent by email, with SMS available where enabled. Updates are written plainly, such as “Morning activity began around 8am”, rather than showing technical sensor logs.",
      },
      {
        question: "Do I still receive information if nothing unusual happens?",
        answer:
          "Yes. Alongside alerts, you’ll receive regular daily or weekly summaries and reports, so you have a general sense of routine rather than only receiving notifications when something changes.",
      },
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
        question: "What if a sensor stops working or its battery runs low?",
        answer:
          "You’ll be notified automatically, and we’ll arrange a replacement or repair as part of your subscription at no additional cost.",
      },
    ],
  },
  {
    title: "Installation & equipment",
    items: [
      {
        question: "How long does installation take?",
        answer:
          "Most installations are completed during one home visit. We position and test the devices, make sure everything is connected and explain Odda View before we leave.",
      },
      {
        question: "Do I need to be technical to use Odda?",
        answer:
          "Not at all. The dashboard and alerts are written in plain English, and we handle the setup and technical side for you.",
      },
      {
        question: "Do I own the equipment?",
        answer:
          "No. The equipment remains Odda’s property and is provided as part of your subscription, similar to a rental. If a sensor fails, it is replaced at no additional cost.",
      },
      {
        question: "What’s the £100 deposit for?",
        answer:
          "It is a fully refundable deposit against the equipment. It is returned when the equipment is returned in good working order, for example if you choose to end the service.",
      },
      {
        question: "Can I move or add sensors later?",
        answer:
          "Yes. If your family’s needs change, get in touch and we can adjust the setup.",
      },
    ],
  },
  {
    title: "Family access & privacy",
    items: [
      {
        question: "Who can see the information Odda collects?",
        answer:
          "Only people you approve. The main account holder controls who else in the family has access and what they can see.",
      },
      {
        question: "Can the person being monitored see their own information?",
        answer:
          "Yes, if they would like to. A simple account can be created for them and kept as straightforward as possible.",
      },
      {
        question: "How is our data kept private and secure?",
        answer:
          "Odda is registered with the ICO and handles data in line with UK GDPR and the Data Protection Act 2018. Data is only used to provide the service and is never sold.",
      },
      {
        question: "Does the person being monitored need to agree?",
        answer:
          "Yes. Odda is built around consent, dignity and independence. We discuss this during the home assessment, including how to have the conversation with your relative.",
      },
    ],
  },
  {
    title: "Visitors & everyday life",
    items: [
      {
        question: "What if a cleaner, carer or visitor comes to the house?",
        answer:
          "Odda includes a way to note visitor periods so normal visits aren’t mistaken for unusual activity. We’ll explain how this works during setup.",
      },
      {
        question: "Will I receive constant notifications?",
        answer:
          "No. Odda is designed to avoid unnecessary notifications. The aim is to provide meaningful alerts you’ll pay attention to, rather than constant pings.",
      },
    ],
  },
  {
    title: "Pricing & contract",
    items: [
      {
        question: "How much does Odda cost?",
        answer:
          "Odda costs £34.99 per week, plus a one-off £99 installation fee and a fully refundable £100 equipment deposit. Full details are available on our Pricing page.",
      },
      {
        question: "Is there a long contract?",
        answer:
          "There is no long lock-in contract. If Odda isn’t right for your family, you can end the service and your deposit will be refunded once the equipment is returned.",
      },
      {
        question: "Can I try it before committing fully?",
        answer:
          "Yes. We offer a free, no-obligation home assessment to discuss whether Odda is right for your situation before anything is installed.",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        question: "How do I get started?",
        answer:
          "Get in touch to arrange a free home assessment. We’ll talk through your family’s situation, what matters most to you and what the setup could look like — with no pressure and no obligation.",
      },
    ],
  },
];

const faqAnchorIds: Record<string, string> = {
  "What happens if the internet or power goes down?": "power-and-internet",
  "Does the person at home need to press anything?": "nothing-to-press",
  "How long does installation take?": "installation-time",
  "Will I receive constant notifications?": "notifications",
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ | Odda Care" },
    {
      name: "description",
      content: "Frequently asked questions about Odda Care.",
    },
  ];
}

export default function FaqPage() {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>(
    {},
  );

  function toggleQuestion(question: string) {
    setOpenQuestions((current) => ({
      ...current,
      [question]: !current[question],
    }));
  }

  useEffect(() => {
    function openQuestionFromHash() {
      const questionId = decodeURIComponent(
        window.location.hash.replace("#", ""),
      );

      if (!questionId) return;

      const matchingQuestion = Object.entries(faqAnchorIds).find(
        ([, id]) => id === questionId,
      )?.[0];

      if (!matchingQuestion) return;

      setOpenQuestions((current) => ({
        ...current,
        [matchingQuestion]: true,
      }));

      window.requestAnimationFrame(() => {
        document.getElementById(questionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }

    const timer = window.setTimeout(openQuestionFromHash, 100);
    window.addEventListener("hashchange", openQuestionFromHash);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", openQuestionFromHash);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F6F1E7] font-['Montserrat'] text-black">
      <Navbar />

      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* FAQ hero */}
          <div className="relative mt-12 aspect-[16/7] overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/odda-family-faq2.png"
              alt="Older mother and her adult son looking through a family album"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />

            <div className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Frequently Asked Questions
                </h1>

                <p className="mt-5 max-w-lg text-base leading-7 text-white md:text-lg">
                  Speak with one of our experts and book a free, no-obligation
                  consultation.
                </p>

                <a
                  href="/book-assessment"
                  className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white px-7 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:bg-transparent hover:text-white"
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
            </div>
          </div>

          {/* FAQ categories */}
          <div className="mt-16 columns-1 gap-6 lg:columns-2">
            {faqSections.map((section) => (
              <div
                key={section.title}
                className="mb-6 break-inside-avoid rounded-[2rem] border border-[#CDAA24]/25 bg-white p-6 sm:p-7"
              >
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-black">
                  {section.title}
                </h2>

                <div className="divide-y divide-black/10">
                  {section.items.map((faq) => {
                    const isOpen = Boolean(openQuestions[faq.question]);

                    return (
                      <div
                        key={faq.question}
                        id={faqAnchorIds[faq.question]}
                        className="scroll-mt-32"
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => toggleQuestion(faq.question)}
                          className="flex w-full items-center justify-between gap-5 py-5 text-left text-lg font-medium text-black"
                        >
                          <span>{faq.question}</span>

                          <span className="flex h-8 w-8 shrink-0 items-center justify-center text-black">
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              aria-hidden="true"
                              className={`h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isOpen ? "rotate-180" : "rotate-0"
                              }`}
                            >
                              <path
                                d="M4.5 7.5 10 13l5.5-5.5"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>

                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pb-5 pr-12 text-base leading-7 text-black">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}