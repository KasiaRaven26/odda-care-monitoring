import type { Route } from "./+types/faq";

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
        question: "What happens if there’s no internet in the home?",
        answer:
          "Wherever possible, Odda is designed to work without relying on the home’s own Wi-Fi by using its own connection. This is confirmed as part of the home assessment before installation.",
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
        question: "How does installation work?",
        answer:
          "We visit the home, assess the space with you, install the sensors, test everything and explain how it works. No technical knowledge is needed.",
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
        question: "Will Odda alert me about every small thing?",
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
  return (
    <main className="min-h-screen bg-[#F6F1E7] font-['Montserrat'] text-[#3C4738]">
     <header>
  <div className="...">
    {/* Logo */}
    <a
      href="/"
      aria-label="Odda Care home"
      className="shrink-0 transition-opacity hover:opacity-80"
    >
      <img
        src="/images/odda-logo-transparent.png"
        alt="Odda Care"
        className="h-16 w-auto mix-blend-multiply lg:h-[77px]"
      />
    </a>

    <nav>
      {/* linki */}
    </nav>
  </div>
</header>
     <section className="px-6 py-16 lg:px-10 lg:py-20">
  <div className="mx-auto max-w-7xl">
    {/* Nagłówek i zdjęcie */}
    <div className="relative mt-12 aspect-[16/7] overflow-hidden rounded-[2.5rem]">
  <img
    src="/images/odda-family-faq2.png"
    alt="Older mother and her adult son looking through a family album"
    className="h-full w-full object-cover"
  />

  {/* Przyciemnienie mocniejsze po lewej stronie */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />

  {/* Tekst i przycisk */}
  <div className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16">
    <div className="max-w-xl text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.22em]">
        
      </p>

      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-5 max-w-lg text-base leading-7 text-white/90 md:text-lg">
  Speak with one of our experts and book a free, no-obligation
  consultation.
</p>

      <a
        href="/#contact"
        className="mt-8 inline-flex rounded-full border border-white bg-white px-7 py-4 text-sm font-semibold text-[#3C4738] transition-all duration-300 hover:bg-white/15 hover:text-white"
      >
        Book a free consultation
      </a>
    </div>
  </div>

    </div>

    {/* Kategorie FAQ w dwóch kolumnach */}
    <div className="mt-16 columns-1 gap-6 lg:columns-2">
      {faqSections.map((section) => (
        <div
          key={section.title}
          className="mb-6 break-inside-avoid rounded-[2rem] border border-[#CDAA24]/25 bg-white p-6 sm:p-7"
        >
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#89967E]">
            {section.title}
          </h2>

          <div className="divide-y divide-black/10">
            {section.items.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-semibold text-black [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E4E1D7] transition-transform duration-300 group-open:rotate-45">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>

                <p className="pb-5 pr-12 text-base leading-7 text-[#52574F]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}