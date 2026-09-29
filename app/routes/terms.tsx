import { Link } from "react-router";
import type { Route } from "./+types/terms";
import Navbar from "../components/Navbar";

const sections = [
  { id: "about", label: "About these terms" },
  { id: "service", label: "The Odda service" },
  { id: "consent", label: "Consent and eligibility" },
  { id: "installation", label: "Installation and equipment" },
  { id: "account", label: "Your account" },
  { id: "fees", label: "Fees and payment" },
  { id: "cancellation", label: "Cancellation" },
  { id: "availability", label: "Service availability" },
  { id: "responsibilities", label: "Your responsibilities" },
  { id: "privacy", label: "Privacy" },
  { id: "liability", label: "Our responsibility" },
  { id: "ending", label: "Ending the service" },
  { id: "general", label: "General terms" },
  { id: "contact", label: "Contact and complaints" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms & Conditions | Odda Care" },
    {
      name: "description",
      content:
        "The terms and conditions that apply when you use Odda Care services and Odda View.",
    },
  ];
}

function TermsSection({
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

        <div className="min-w-0">
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

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      <header className="bg-[#A5B19C] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
            Legal
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            These terms explain how the Odda service works, what you can expect
            from us and what we ask of you.
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
              aria-label="Terms and conditions contents"
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
                Please read these terms carefully.
              </p>
              <p className="mt-2">
                They form part of your agreement with Odda Ltd when you order
                or use our service. Your order summary may contain additional
                details specific to your home and subscription.
              </p>
            </div>

            <TermsSection id="about" number="01" title="About these terms">
              <p>
                These terms apply to the Odda home monitoring service, the Odda
                View dashboard, associated alerts and reports, and any hub,
                sensors or other equipment that we provide. In these terms,
                “Odda”, “we”, “us” and “our” mean Odda Ltd. “You” means the
                person who enters into the agreement with us.
              </p>
              <p>
                Your agreement consists of these terms and the order summary
                we provide before the service begins. If they conflict, the
                order summary takes priority for service-specific details such
                as price, equipment and installation arrangements.
              </p>
            </TermsSection>

            <TermsSection id="service" number="02" title="The Odda service">
              <p>
                Odda uses discreet sensors placed around a home to identify
                activity and changes in everyday routines. We turn those
                signals into dashboard information, summaries and selected
                alerts for approved users.
              </p>
              <div className="rounded-2xl bg-[#F6F3ED] p-5 text-black">
                <p className="font-semibold">Odda is not an emergency service.</p>
                <p className="mt-2 text-black/70">
                  It is not a medical device, diagnostic tool, personal alarm,
                  care service or substitute for professional care. It does not
                  guarantee that an accident, illness or emergency will be
                  detected. In an emergency, call 999 or the appropriate
                  emergency service.
                </p>
              </div>
              <p>
                Odda does not use cameras or microphones as part of its home
                monitoring service. The precise sensors, features and alert
                settings for your home will be described during assessment and
                in your order summary.
              </p>
            </TermsSection>

            <TermsSection
              id="consent"
              number="03"
              title="Consent and eligibility"
            >
              <p>
                You must be at least 18 years old and have authority to enter
                into this agreement. If the service is installed in another
                person’s home, you must ensure that they understand and agree
                to the installation and use of Odda, unless another lawful
                basis applies and has been agreed with us in writing.
              </p>
              <p>
                You are responsible for obtaining any permission reasonably
                required from the property owner, landlord, residents or other
                relevant people before installation. You must tell authorised
                family members and users that access is personal and subject to
                these terms.
              </p>
            </TermsSection>

            <TermsSection
              id="installation"
              number="04"
              title="Installation and equipment"
            >
              <p>
                We will agree an installation appointment with you. You must
                provide safe and reasonable access to the property and tell us
                about any known hazards, access restrictions or relevant
                connectivity issues.
              </p>
              <p>
                Unless your order summary says otherwise, all hubs, sensors and
                related equipment remain our property. You must take reasonable
                care of them, must not sell, remove, alter or interfere with
                them, and should contact us before moving any device.
              </p>
              <p>
                We may repair or replace equipment that develops a fault during
                normal use. We may charge a reasonable amount for equipment
                that is lost, deliberately damaged or not returned when the
                service ends, taking account of its age and condition. Any
                refundable equipment deposit will be handled as described in
                your order summary.
              </p>
            </TermsSection>

            <TermsSection id="account" number="05" title="Your account">
              <p>
                You must provide accurate information and keep your contact and
                payment details up to date. Login details must be kept secure
                and must not be shared outside the people you have authorised.
                Please tell us promptly if you think an account has been
                accessed without permission.
              </p>
              <p>
                You are responsible for choosing who may view information about
                the home. We may suspend access where we reasonably believe
                that an account is being misused or that doing so is necessary
                to protect the household, another user or our systems.
              </p>
            </TermsSection>

            <TermsSection id="fees" number="06" title="Fees and payment">
              <p>
                The subscription price, installation fee, equipment deposit,
                billing frequency and accepted payment method will be shown in
                your order summary before you agree to the service. Unless
                stated otherwise, prices include any applicable VAT.
              </p>
              <p>
                You authorise us or our payment provider to collect amounts
                when due. If a payment fails, we may contact you and try to
                collect it again. We will give reasonable notice before
                suspending the service for unpaid charges.
              </p>
              <p>
                We may change recurring charges by giving you reasonable notice.
                If you do not accept an increase, you may cancel before it takes
                effect without an additional cancellation charge.
              </p>
            </TermsSection>

            <TermsSection id="cancellation" number="07" title="Cancellation">
              <p>
                If you enter into the agreement at a distance or away from our
                business premises, you will normally have a legal right to
                cancel within 14 days of the day the agreement is made. You do
                not need to give a reason. Your order confirmation will explain
                how to exercise this right and include the relevant cancellation
                information.
              </p>
              <p>
                If you expressly ask us to begin installation or provide the
                service during that period and then cancel, we may charge a
                reasonable amount for the service supplied up to cancellation,
                where the law allows. You may lose the right to cancel a service
                once it has been fully performed if you gave the acknowledgements
                required by law.
              </p>
              <p>
                After the cooling-off period, you may end a rolling subscription
                by contacting us. Unless your order summary states a different
                arrangement, cancellation takes effect at the end of the current
                paid billing period. Equipment must be made available for return
                or collection in accordance with our reasonable instructions.
              </p>
            </TermsSection>

            <TermsSection
              id="availability"
              number="08"
              title="Service availability"
            >
              <p>
                Odda depends on working equipment, power, network connectivity
                and third-party services. Alerts and dashboard information may
                be delayed, incomplete or unavailable during an outage,
                maintenance, loss of connection or equipment failure.
              </p>
              <p>
                We monitor device connectivity and will take reasonable steps
                to restore the service when an issue is within our control. We
                may carry out maintenance, update software and make reasonable
                changes needed for security, legal compliance or service
                improvement. We will try to give advance notice where a change
                materially affects your use of Odda.
              </p>
            </TermsSection>

            <TermsSection
              id="responsibilities"
              number="09"
              title="Your responsibilities"
            >
              <p>You agree to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-[#6C7965]">
                <li>use Odda lawfully and only for its intended purpose;</li>
                <li>
                  maintain the power, internet access and home environment
                  reasonably required for the service;
                </li>
                <li>
                  avoid covering, moving, disconnecting or tampering with
                  equipment;
                </li>
                <li>
                  tell us promptly about faults, changes to the home or changes
                  in consent that may affect the service; and
                </li>
                <li>
                  use your own judgement and seek appropriate help rather than
                  relying solely on an Odda update or the absence of an alert.
                </li>
              </ul>
            </TermsSection>

            <TermsSection id="privacy" number="10" title="Privacy and data">
              <p>
                We process personal data to provide and support Odda, protect
                the service and meet our legal obligations. Our Privacy Policy
                explains what information we collect, the reasons we use it,
                how long we keep it and the rights available to individuals.
              </p>
              <p>
                The Odda website and service software, designs, branding and
                content belong to us or our licensors. We give you a limited,
                personal and non-transferable right to use the service for the
                duration of your agreement.
              </p>
            </TermsSection>

            <TermsSection
              id="liability"
              number="11"
              title="Our responsibility to you"
            >
              <p>
                We will provide the service with reasonable care and skill. If
                we breach this agreement, we are responsible for loss or damage
                that is a foreseeable result of that breach or our failure to
                use reasonable care and skill.
              </p>
              <p>
                We are not responsible for loss caused by circumstances outside
                our reasonable control, by inaccurate information you provide,
                by your failure to follow these terms or instructions, or by
                using Odda as an emergency or medical service when it is not one.
                We do not accept liability for business losses because the
                service is supplied for private, domestic use.
              </p>
              <p>
                Nothing in these terms excludes or limits liability where doing
                so would be unlawful, including liability for death or personal
                injury caused by negligence, fraud or fraudulent
                misrepresentation. Nothing in these terms affects your statutory
                consumer rights.
              </p>
            </TermsSection>

            <TermsSection id="ending" number="12" title="Ending the service">
              <p>
                We may end or suspend the agreement if you materially or
                repeatedly breach these terms, do not pay amounts due after we
                have given you a reasonable opportunity to do so, misuse the
                service, or create a safety or security risk. Where appropriate,
                we will explain the issue and give you a reasonable opportunity
                to put it right first.
              </p>
              <p>
                We may also end the service for a reason unrelated to your
                conduct by giving reasonable notice. When the agreement ends,
                access to Odda View will stop and our equipment must be returned.
                Any refund or deposit repayment will be calculated in accordance
                with your order summary and your legal rights.
              </p>
            </TermsSection>

            <TermsSection id="general" number="13" title="General terms">
              <p>
                We may transfer our rights and obligations under this agreement
                to another organisation, but only where this does not reduce
                your rights. You may not transfer the agreement without our
                written consent, which we will not unreasonably withhold.
              </p>
              <p>
                If part of these terms is found unenforceable, the remaining
                terms will continue to apply. A delay in enforcing a right does
                not waive that right. No person other than you and us has a right
                to enforce this agreement, except where the law provides
                otherwise.
              </p>
              <p>
                These terms are governed by the laws of England and Wales. You
                may bring proceedings in the courts of the part of the United
                Kingdom where you live where applicable.
              </p>
            </TermsSection>

            <TermsSection
              id="contact"
              number="14"
              title="Contact and complaints"
            >
              <p>
                If you have a question, want to cancel, or are unhappy with the
                service, please contact us. We will acknowledge complaints and
                aim to resolve them fairly and promptly.
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
            </TermsSection>
          </article>
        </div>
      </div>
    </main>
  );
}
