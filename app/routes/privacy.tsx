import { Link } from "react-router";
import type { Route } from "./+types/privacy";
import Navbar from "../components/Navbar";

const sections = [
  { id: "who-we-are", label: "Who we are" },
  { id: "scope", label: "Who this policy covers" },
  { id: "information", label: "Information we collect" },
  { id: "sources", label: "Where information comes from" },
  { id: "uses", label: "How and why we use it" },
  { id: "sensitive-data", label: "Sensitive information" },
  { id: "sharing", label: "Who we share it with" },
  { id: "international", label: "International transfers" },
  { id: "retention", label: "How long we keep it" },
  { id: "security", label: "How we protect it" },
  { id: "rights", label: "Your rights" },
  { id: "automated", label: "Automated analysis" },
  { id: "cookies", label: "Website and cookies" },
  { id: "contact", label: "Contact and complaints" },
];

const dataUses = [
  {
    purpose: "Provide and manage the Odda service",
    examples:
      "Set up sensors and accounts, display household activity, send requested alerts and reports, and provide customer support.",
    basis:
      "Performance of our contract, steps requested before a contract, and consent where required.",
  },
  {
    purpose: "Keep the service reliable and secure",
    examples:
      "Monitor device status, diagnose faults, prevent misuse, protect accounts and maintain service records.",
    basis:
      "Our legitimate interests in providing a safe, dependable service and complying with legal obligations.",
  },
  {
    purpose: "Take payment and administer subscriptions",
    examples:
      "Manage billing, deposits, refunds, cancellations and financial records.",
    basis: "Performance of our contract and compliance with legal obligations.",
  },
  {
    purpose: "Improve Odda",
    examples:
      "Understand how features perform, troubleshoot recurring issues and improve the clarity of alerts and reports.",
    basis:
      "Our legitimate interests, using aggregated or de-identified information where reasonably possible.",
  },
  {
    purpose: "Communicate with you",
    examples:
      "Respond to enquiries, arrange visits, provide important service messages and handle complaints or rights requests.",
    basis:
      "Performance of our contract, our legitimate interests and compliance with legal obligations.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | Odda Care" },
    {
      name: "description",
      content:
        "How Odda Care collects, uses, protects and shares personal information.",
    },
  ];
}

function PrivacySection({
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

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      <header className="bg-[#6C7965] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
            Your information
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Privacy and dignity sit at the heart of Odda. This policy explains
            what information we use, why we use it and the choices available to
            you.
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
              aria-label="Privacy policy contents"
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
                No cameras. No microphones. No sale of personal information.
              </p>
              <p className="mt-2">
                Odda sensors detect simple events such as movement, a door
                opening or use of a connected device. They do not record images,
                conversations or audio.
              </p>
            </div>

            <PrivacySection id="who-we-are" number="01" title="Who we are">
              <p>
                Odda Ltd (“Odda”, “we”, “us” or “our”) is responsible for the
                personal information described in this policy. In data
                protection law, this means we are generally the controller of
                that information.
              </p>
              <p>
                We are registered with the Information Commissioner’s Office
                under registration number <strong>ZC150677</strong>.
              </p>
            </PrivacySection>

            <PrivacySection
              id="scope"
              number="02"
              title="Who this policy covers"
            >
              <p>This policy applies to information about:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#6C7965]">
                <li>the person living in a home where Odda is installed;</li>
                <li>
                  the customer who arranges or pays for the service, where that
                  is a different person;
                </li>
                <li>family members and other authorised Odda View users;</li>
                <li>people who contact us or request an assessment; and</li>
                <li>visitors to our website.</li>
              </ul>
              <p>
                The customer must help ensure that the person living in the home
                and other relevant household members receive this policy and
                understand how Odda works.
              </p>
            </PrivacySection>

            <PrivacySection
              id="information"
              number="03"
              title="Information we collect"
            >
              <p>Depending on how you use Odda, we may collect:</p>
              <ul className="list-disc space-y-3 pl-5 marker:text-[#6C7965]">
                <li>
                  <strong className="text-black">Identity and contact details</strong>,
                  such as names, addresses, email addresses and telephone
                  numbers.
                </li>
                <li>
                  <strong className="text-black">Account and access details</strong>,
                  including authorised users, login records, preferences and
                  alert settings.
                </li>
                <li>
                  <strong className="text-black">Home and installation details</strong>,
                  including property layout information relevant to sensor
                  placement, installed devices and visit records.
                </li>
                <li>
                  <strong className="text-black">Sensor and routine data</strong>,
                  such as timestamps for movement, door activity, connected
                  device use, temperature, humidity and device status. We may
                  use these signals to describe patterns or changes in routine.
                </li>
                <li>
                  <strong className="text-black">Service and technical data</strong>,
                  including device identifiers, connection status, fault logs,
                  IP address, browser information and security events.
                </li>
                <li>
                  <strong className="text-black">Payment and subscription details</strong>.
                  Payment card or bank information may be collected directly by
                  our payment provider rather than stored by Odda.
                </li>
                <li>
                  <strong className="text-black">Communications</strong>, including
                  enquiries, feedback, complaints and notes from assessments or
                  support conversations.
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection
              id="sources"
              number="04"
              title="Where information comes from"
            >
              <p>
                We receive information directly from you, from the person who
                arranges the service, from authorised users, and automatically
                from Odda devices and the Odda View service. We may also receive
                information from payment, communications and technical service
                providers where needed to operate and support Odda.
              </p>
              <p>
                If someone gives us information about another person, they
                should make sure they are entitled to do so and, where
                appropriate, direct that person to this policy.
              </p>
            </PrivacySection>

            <PrivacySection
              id="uses"
              number="05"
              title="How and why we use information"
            >
              <p>
                We only use personal information where we have a lawful reason.
                The main purposes and legal bases we expect to rely on are set
                out below.
              </p>

              <div className="overflow-hidden rounded-2xl border border-black/10">
                {dataUses.map((item) => (
                  <div
                    key={item.purpose}
                    className="border-t border-black/10 p-5 first:border-t-0 sm:p-6"
                  >
                    <h3 className="font-semibold text-black">{item.purpose}</h3>
                    <p className="mt-2">{item.examples}</p>
                    <p className="mt-2 text-sm">
                      <strong className="text-black">Legal basis:</strong>{" "}
                      {item.basis}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Where we rely on legitimate interests, we consider the benefit
                of the activity, whether it is necessary and its possible impact
                on the people concerned. We will not use personal information
                for incompatible purposes without an appropriate legal basis.
              </p>
            </PrivacySection>

            <PrivacySection
              id="sensitive-data"
              number="06"
              title="Sensitive information"
            >
              <p>
                Routine and sensor information is not automatically health data.
                However, information you provide, or conclusions drawn in a
                particular context, may reveal or strongly suggest something
                about a person’s health. This may be special category data under
                data protection law.
              </p>
              <p>
                Where we use special category data, we will identify both a
                lawful basis and an additional legal condition. This may include
                explicit consent where appropriate. We apply additional care,
                access controls and data minimisation to sensitive information.
              </p>
            </PrivacySection>

            <PrivacySection
              id="sharing"
              number="07"
              title="Who we share information with"
            >
              <p>We may share relevant information with:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#6C7965]">
                <li>
                  family members and other people authorised to use Odda View;
                </li>
                <li>
                  suppliers that provide hosting, communications, payment,
                  installation, maintenance or professional services to us;
                </li>
                <li>
                  regulators, courts, law enforcement or emergency services
                  where disclosure is required or permitted by law; and
                </li>
                <li>
                  a buyer, investor or successor if our business is reorganised,
                  sold or transferred, subject to appropriate safeguards.
                </li>
              </ul>
              <p>
                Service providers may only use information for agreed purposes
                and must protect it. We do not sell personal information to data
                brokers or advertisers.
              </p>
            </PrivacySection>

            <PrivacySection
              id="international"
              number="08"
              title="International transfers"
            >
              <p>
                Some service providers may process information outside the
                United Kingdom. Where this happens, we use an appropriate legal
                safeguard, such as a UK adequacy regulation or approved
                contractual protections, and carry out any assessment required
                by data protection law.
              </p>
              <p>
                You may contact us for more information about the safeguards
                relevant to your information.
              </p>
            </PrivacySection>

            <PrivacySection
              id="retention"
              number="09"
              title="How long we keep information"
            >
              <p>
                We keep personal information only for as long as reasonably
                necessary for the purpose for which it was collected, including
                providing the service, maintaining security, resolving disputes
                and meeting legal, accounting or reporting requirements.
              </p>
              <p>
                The retention period depends on the type and sensitivity of the
                information, the amount of information, the risk of harm from
                unauthorised use, whether we can achieve the purpose another way
                and any applicable legal requirements. We delete or anonymise
                information when it is no longer needed.
              </p>
            </PrivacySection>

            <PrivacySection
              id="security"
              number="10"
              title="How we protect information"
            >
              <p>
                We use technical and organisational measures designed to protect
                personal information against loss, misuse, unauthorised access,
                alteration and disclosure. These include access controls,
                account safeguards, monitoring and procedures for handling
                suspected incidents.
              </p>
              <p>
                No connected or online service can guarantee absolute security.
                Please use a strong, unique password and contact us promptly if
                you believe an account or device may have been compromised.
              </p>
            </PrivacySection>

            <PrivacySection id="rights" number="11" title="Your rights">
              <p>
                Depending on the circumstances, UK data protection law may give
                you the right to:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#6C7965]">
                <li>be informed about how we use your information;</li>
                <li>ask for access to the information we hold about you;</li>
                <li>ask us to correct inaccurate or incomplete information;</li>
                <li>ask us to delete or restrict the use of information;</li>
                <li>object to particular uses of information;</li>
                <li>receive certain information in a portable format;</li>
                <li>withdraw consent at any time where we rely on consent; and</li>
                <li>
                  challenge certain decisions made solely by automated means.
                </li>
              </ul>
              <p>
                These rights are not absolute and exemptions may apply. We may
                need to verify your identity and authority before acting on a
                request. You will not usually need to pay a fee.
              </p>
            </PrivacySection>

            <PrivacySection
              id="automated"
              number="12"
              title="Automated analysis"
            >
              <p>
                Odda automatically analyses sensor events to identify routines,
                changes and conditions that may generate an update or alert.
                This analysis supports human decisions by customers and
                authorised users; it does not make decisions about a person that
                have legal or similarly significant effects solely by automated
                means.
              </p>
              <p>
                You can contact us if you would like more information about how
                a particular update or alert was produced.
              </p>
            </PrivacySection>

            <PrivacySection
              id="cookies"
              number="13"
              title="Website and cookies"
            >
              <p>
                Our website may use essential technologies needed for security
                and functionality. If we use optional analytics or similar
                cookies, we will provide information and choices through our
                Cookie Policy or cookie settings where required.
              </p>
              <p>
                Links to other websites are governed by the privacy policies of
                those organisations. We are not responsible for how independent
                websites handle personal information.
              </p>
            </PrivacySection>

            <PrivacySection
              id="contact"
              number="14"
              title="Contact and complaints"
            >
              <p>
                To exercise a privacy right, ask a question or make a data
                protection complaint, please contact Odda using the link below.
                We will review your request and respond in accordance with data
                protection law.
              </p>
              <p>
                You also have the right to raise a concern with the Information
                Commissioner’s Office. We would appreciate the opportunity to
                address your concern first, but this does not affect your right
                to contact the ICO.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
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

                <a
                  href="https://ico.org.uk/make-a-complaint/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-black/20 px-5 py-3 text-sm font-semibold text-black transition-colors hover:border-[#315F4B] hover:text-[#315F4B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F4B]"
                >
                  Visit the ICO website
                </a>
              </div>
            </PrivacySection>
          </article>
        </div>
      </div>
    </main>
  );
}
