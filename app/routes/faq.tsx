import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/faq";
import Navbar from "../components/Navbar";

const faqSections = [
  {
    title: "About Odda",
    items: [
      {
        question: "What is Odda?",
        answer:
          "Odda is a home monitoring service that helps families stay connected to an older relative’s daily routine. Small, discreet sensors are placed around the home to notice movement, activity and changes in routine — giving you plain-English updates and alerts, so you’re not left guessing how they’re doing.",
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
          "Odda costs £39.99 per week, plus a one-off £99 installation fee and a fully refundable £100 equipment deposit. Full details are available on our Pricing page.",
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

const popularQuestions = [
  "Does Odda use cameras or microphones?",
  "How much does Odda cost?",
  "How long does installation take?",
  "Is there a long contract?",
];

const relatedLinks: Record<string, { label: string; to: string }> = {
  "What does Odda actually monitor?": {
    label: "Explore the technology",
    to: "/technology",
  },
  "How is our data kept private and secure?": {
    label: "Read our privacy policy",
    to: "/privacy",
  },
  "How much does Odda cost?": {
    label: "View full pricing",
    to: "/pricing",
  },
  "How do I get started?": {
    label: "Book a free assessment",
    to: "/book-assessment",
  },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/£/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getQuestionId(question: string) {
  return faqAnchorIds[question] ?? slugify(question);
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  ),
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ | Odda Care" },
    {
      name: "description",
      content:
        "Clear answers about Odda Care, home monitoring, privacy, installation, pricing and support.",
    },
    { "script:ld+json": faqStructuredData },
  ];
}

export default function FaqPage() {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>(
    {},
  );
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredSections = normalizedQuery
    ? faqSections
        .map((section) => ({
          ...section,
          items: section.items.filter((item) =>
            `${item.question} ${item.answer}`
              .toLowerCase()
              .includes(normalizedQuery),
          ),
        }))
        .filter((section) => section.items.length > 0)
    : faqSections;

  const resultCount = filteredSections.reduce(
    (total, section) => total + section.items.length,
    0,
  );

  function toggleQuestion(question: string) {
    setOpenQuestions((current) => ({
      ...current,
      [question]: !current[question],
    }));
  }

  function revealQuestion(question: string) {
    const questionId = getQuestionId(question);

    setQuery("");
    setOpenQuestions((current) => ({
      ...current,
      [question]: true,
    }));
    window.history.replaceState(null, "", `#${questionId}`);

    window.setTimeout(() => {
      document.getElementById(questionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  useEffect(() => {
    function openQuestionFromHash() {
      const questionId = decodeURIComponent(
        window.location.hash.replace("#", ""),
      );

      if (!questionId) return;

      const matchingQuestion = faqSections
        .flatMap((section) => section.items)
        .find((item) => getQuestionId(item.question) === questionId)?.question;

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
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      {/* Compact hero */}
      <section className="px-7 py-16 sm:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
              FAQ
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              Questions, answered clearly.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 sm:text-lg">
              Find clear answers about how Odda works, what it costs and what
              daily life with the service looks like.
            </p>

            <div className="relative mt-8 max-w-xl">
              <label htmlFor="faq-search" className="sr-only">
                Search frequently asked questions
              </label>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search your question"
                className="w-full rounded-full border border-black/20 bg-white py-4 pl-13 pr-5 text-base outline-none transition-colors duration-300 placeholder:text-black/55 focus:border-[#315F4B]"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm">
              <span className="font-semibold">Popular:</span>
              {popularQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => revealQuestion(question)}
                  className="underline decoration-black/25 underline-offset-4 transition-colors duration-300 hover:text-[#315F4B]"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-[30px] bg-[#E8E1D6] lg:max-w-[440px] lg:justify-self-end">
            <img
              src="/images/odda-family-faq2.png"
              alt="An older mother and her adult son looking through a family album"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-7 sm:px-14 lg:grid-cols-[240px_1fr] lg:gap-20">
          <aside>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Browse by topic
              </p>
              <nav
                aria-label="FAQ categories"
                className="mt-5 flex gap-5 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0"
              >
                {filteredSections.map((section) => (
                  <a
                    key={section.title}
                    href={`#${slugify(section.title)}`}
                    className="flex shrink-0 items-center justify-between gap-5 border-b border-black/10 py-3 text-sm font-medium transition-colors duration-300 hover:text-[#315F4B]"
                  >
                    <span>{section.title}</span>
                    <span className="text-xs">{section.items.length}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            {normalizedQuery && (
              <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-black/15 pb-5">
                <p className="text-sm font-semibold">
                  {resultCount} {resultCount === 1 ? "answer" : "answers"} for
                  “{query.trim()}”
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-sm font-semibold underline decoration-black/30 underline-offset-4 transition-colors duration-300 hover:text-[#315F4B]"
                >
                  Clear search
                </button>
              </div>
            )}

            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <section
                  key={section.title}
                  id={slugify(section.title)}
                  className="mb-14 scroll-mt-28 last:mb-0"
                >
                  <h2 className="border-b border-black/20 pb-5 text-2xl font-semibold tracking-[-0.035em]">
                    {section.title}
                  </h2>

                  <div>
                    {section.items.map((faq) => {
                      const isOpen = Boolean(openQuestions[faq.question]);
                      const questionId = getQuestionId(faq.question);
                      const answerId = `${questionId}-answer`;
                      const relatedLink = relatedLinks[faq.question];

                      return (
                        <div
                          key={faq.question}
                          id={questionId}
                          className="scroll-mt-28 border-b border-black/15"
                        >
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={answerId}
                            onClick={() => toggleQuestion(faq.question)}
                            className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium outline-none transition-colors duration-300 hover:text-[#315F4B] focus-visible:text-[#315F4B]"
                          >
                            <span>{faq.question}</span>

                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              aria-hidden="true"
                              className={`h-5 w-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isOpen ? "rotate-180" : "rotate-0"
                              }`}
                            >
                              <path
                                d="M4.5 7.5 10 13l5.5-5.5"
                                stroke="currentColor"
                                strokeWidth="1.35"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          <div
                            id={answerId}
                            role="region"
                            aria-hidden={!isOpen}
                            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              isOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="max-w-2xl pb-6 pr-10">
                                <p className="text-base leading-8">
                                  {faq.answer}
                                </p>
                                {relatedLink && (
                                  <Link
                                    to={relatedLink.to}
                                    tabIndex={isOpen ? 0 : -1}
                                    className="mt-4 inline-flex border-b border-[#315F4B]/50 pb-0.5 text-sm font-semibold text-[#315F4B] transition-colors duration-300 hover:border-[#315F4B] hover:text-black"
                                  >
                                    {relatedLink.label}
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))
            ) : (
              <div className="border-y border-black/15 py-12">
                <h2 className="text-2xl font-semibold">No matching answer yet.</h2>
                <p className="mt-3 max-w-lg leading-7">
                  Try a shorter search, or contact us and we&apos;ll talk it
                  through with you.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex border-b border-black pb-1 font-semibold transition-colors duration-300 hover:text-[#315F4B]"
                >
                  Contact Odda
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#929F88] py-16 lg:py-20">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-7 sm:px-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Still have a question?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Talk it through with Aggie.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7">
              No pressure, no obligation — just a clear conversation about
              your family&apos;s situation.
            </p>
          </div>

          <Link
            to="/contact"
            className="w-fit rounded-full border border-[#F8F6F1] bg-[#F8F6F1] px-7 py-3.5 font-semibold text-black transition-colors duration-300 hover:border-black hover:bg-transparent"
          >
            Ask a question
          </Link>
        </div>
      </section>
    </main>
  );
}
