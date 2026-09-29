import { Link } from "react-router";
import type { Route } from "./+types/cookies";
import Navbar from "../components/Navbar";

const sections = [
  { id: "about", label: "About this policy" },
  { id: "what-they-are", label: "Cookies and similar technology" },
  { id: "what-we-use", label: "What Odda uses" },
  { id: "essential", label: "Essential storage" },
  { id: "optional", label: "Optional technologies" },
  { id: "controls", label: "Your controls" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

const storageItems = [
  {
    name: "odda-welcome-seen",
    type: "Local storage",
    purpose:
      "Remembers that the welcome message has already appeared, so it does not open automatically on every visit.",
    duration: "Until you clear site data in your browser.",
  },
  {
    name: "react-router-scroll-positions",
    type: "Session storage",
    purpose:
      "Helps return you to the previous scroll position when you navigate between pages.",
    duration: "For the current browser session.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cookie Policy | Odda Care" },
    {
      name: "description",
      content:
        "Information about cookies and browser storage used on the Odda Care website.",
    },
  ];
}

function CookieSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-t border-black/10 py-10 first:border-t-0 first:pt-0 sm:py-12"
    >
      <div className="flex items-start gap-4 sm:gap-6">
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DDE4D8] text-xs font-semibold text-[#315F4B]">
          {number}
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl">
            {title}
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-7 text-black/75 sm:text-base sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      <header className="bg-[#8E9B85] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
            Your choices
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Cookie Policy
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            This policy explains the limited browser storage used by the Odda
            website and how you can control it.
          </p>

          <p className="mt-8 text-sm font-medium text-white/80">
            Last updated: 29 September 2026
          </p>
        </div>
      </header>

      <div className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <nav
              aria-label="Cookie policy contents"
              className="rounded-[26px] bg-[#ECE7DD] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                On this page
              </p>

              <ol className="mt-5 grid gap-1 text-sm sm:grid-cols-2 lg:grid-cols-1">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-3 rounded-xl px-3 py-2.5 leading-5 text-black/70 transition-colors hover:bg-white/70 hover:text-[#315F4B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F4B]"
                    >
                      <span className="w-5 shrink-0 text-black/40">
                        {index + 1}.
                      </span>
                      <span>{section.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="rounded-[30px] bg-white px-6 py-10 shadow-[0_20px_60px_rgba(41,50,38,0.07)] sm:px-10 lg:px-14 lg:py-14">
            <div className="mb-12 rounded-[22px] border border-[#315F4B]/15 bg-[#EDF2EA] p-6 text-sm leading-6 text-black/75 sm:text-base sm:leading-7">
              <p className="font-semibold text-[#315F4B]">
                No analytics or advertising cookies are currently used.
              </p>
              <p className="mt-2">
                The public Odda website only uses limited browser storage for
                basic interface behaviour and page navigation.
              </p>
            </div>

            <CookieSection id="about" number="01" title="About this policy">
              <p>
                This policy applies to the public Odda Care website. It should
                be read alongside our{" "}
                <Link
                  to="/privacy"
                  className="font-semibold text-[#315F4B] underline decoration-[#315F4B]/30 underline-offset-4 hover:decoration-[#315F4B]"
                >
                  Privacy Policy
                </Link>
                , which explains how Odda Ltd uses and protects personal
                information more generally.
              </p>
            </CookieSection>

            <CookieSection
              id="what-they-are"
              number="02"
              title="Cookies and similar technology"
            >
              <p>
                A cookie is a small text file placed on a computer, phone or
                other device when you visit a website. Cookies can remember
                preferences, keep a service secure or help an organisation
                understand how a website is used.
              </p>
              <p>
                Similar technologies, including local storage and session
                storage, can save information in your browser without using a
                traditional cookie. The rules applying to cookies may also
                apply to these technologies.
              </p>
            </CookieSection>

            <CookieSection
              id="what-we-use"
              number="03"
              title="What Odda uses"
            >
              <p>
                We reviewed the current website implementation on the date shown
                above. It uses the following first-party browser storage:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-black/10">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm leading-6">
                  <thead className="bg-[#F3F0E9] text-black">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-semibold">
                        Name
                      </th>
                      <th scope="col" className="px-5 py-4 font-semibold">
                        Type
                      </th>
                      <th scope="col" className="px-5 py-4 font-semibold">
                        Purpose
                      </th>
                      <th scope="col" className="px-5 py-4 font-semibold">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {storageItems.map((item) => (
                      <tr
                        key={item.name}
                        className="border-t border-black/10 align-top"
                      >
                        <td className="px-5 py-4 font-mono text-xs text-black">
                          {item.name}
                        </td>
                        <td className="px-5 py-4">{item.type}</td>
                        <td className="px-5 py-4">{item.purpose}</td>
                        <td className="px-5 py-4">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CookieSection>

            <CookieSection
              id="essential"
              number="04"
              title="Essential storage"
            >
              <p>
                The storage described above supports functionality requested by
                the visitor or basic website navigation. It does not track you
                across other websites, build an advertising profile or measure
                marketing performance.
              </p>
              <p>
                Consent is not normally required for storage that is strictly
                necessary to provide an online service requested by the user.
                We still describe it here so that our use of browser storage is
                clear.
              </p>
            </CookieSection>

            <CookieSection
              id="optional"
              number="05"
              title="Optional technologies"
            >
              <p>
                We do not currently use optional analytics, advertising or
                social media tracking technologies on the public website.
                Consequently, there is no optional cookie preference panel to
                display at present.
              </p>
              <p>
                If optional technologies are introduced, we will update this
                policy and provide an appropriate choice before storing or
                accessing information on your device where consent is required.
              </p>
            </CookieSection>

            <CookieSection
              id="controls"
              number="06"
              title="Your browser controls"
            >
              <p>
                Most browsers let you inspect, block or delete cookies and site
                data. The controls are usually found under privacy, security or
                site settings. Deleting Odda site data will reset the stored
                welcome-message preference.
              </p>
              <p>
                Blocking all browser storage may affect how some website
                features behave. Private or incognito browsing can also limit
                how long information remains on your device.
              </p>
            </CookieSection>

            <CookieSection
              id="changes"
              number="07"
              title="Changes to this policy"
            >
              <p>
                We may update this policy when the website or applicable rules
                change. The date at the top shows when it was last updated. We
                will make important changes clear and request a new choice where
                the law requires it.
              </p>
            </CookieSection>

            <CookieSection id="contact" number="08" title="Contact us">
              <p>
                If you have a question about cookies, browser storage or your
                privacy, please contact Odda.
              </p>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#56614F] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#315F4B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F4B]"
              >
                Contact Odda
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </CookieSection>
          </article>
        </div>
      </div>
    </main>
  );
}
