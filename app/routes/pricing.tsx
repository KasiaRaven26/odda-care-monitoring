import { Link } from "react-router";
import Navbar from "../components/Navbar";

const includedFeatures = [
  "Odda Hub and discreet sensors for the home",
  "Odda View access for approved family members",
  "Plain-English updates about daily routines",
  "Meaningful alerts when something changes",
  "Monthly reports showing longer-term patterns",
  "Ongoing support, maintenance and replacement equipment",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M7 3v2M11 3v2" />
    </svg>
  );
}

export function meta() {
  return [
    { title: "Pricing | Odda Care" },
    {
      name: "description",
      content:
        "Simple Odda Care pricing: £39.99 per week, professional installation and a fully refundable equipment deposit.",
    },
  ];
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      <main>
        {/* Hero and primary price */}
        <section className="overflow-hidden bg-white px-7 py-16 sm:px-14 lg:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-20">
            <div className="lg:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                Pricing
              </p>

              <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                Simple, honest pricing for real peace of mind.
              </h1>

              <p className="mt-7 max-w-[590px] text-base leading-8 sm:text-lg">
                One complete service, with no complicated packages. Your
                subscription includes the equipment, daily updates, meaningful
                alerts, reports and ongoing support.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/book-assessment"
                  className="w-fit rounded-full border border-[#929F88] bg-[#929F88] px-7 py-3.5 font-semibold text-black transition-colors duration-300 hover:border-black hover:bg-transparent"
                >
                  Book a free assessment
                </Link>

                <a
                  href="#included"
                  className="w-fit border-b border-black pb-1 font-semibold"
                >
                  See what&apos;s included
                </a>
              </div>
            </div>

            <div className="rounded-[34px] bg-[#DDE5D9] px-7 py-9 sm:px-10 sm:py-11">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Complete Odda service
                </p>

                <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
                    £39.99
                  </span>
                  <span className="pb-2 text-lg font-medium">per week</span>
                </div>

                <div className="mt-8 flex items-center gap-4 border-t border-black/15 pt-7">
                  <span className="shrink-0 text-[#315F4B]">
                    <CoffeeIcon />
                  </span>
                  <p className="max-w-sm text-lg font-semibold leading-7">
                    £5.71 a day - about the cost of one coffee.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-black/15 pt-6 text-sm font-semibold leading-6">
                  <p>No hidden fees</p>
                  <p>No complicated tiers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section id="included" className="scroll-mt-24 bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 px-7 sm:px-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <figure className="overflow-hidden rounded-[30px] bg-[#E8E1D6]">
              <img
                src="/images/odda-pricing1.png"
                alt="An older woman living independently at home"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                Everything included
              </p>
              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.045em]">
                More than a box of sensors.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 sm:text-lg">
                Odda is a complete, supported service designed to give your
                family a clearer picture of how things are at home.
              </p>

              <ul className="mt-8">
                {includedFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 border-t border-black/15 py-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-0.5 shrink-0 text-[#315F4B]">
                      <CheckIcon />
                    </span>
                    <span className="text-base font-medium leading-7">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Upfront costs */}
        <section className="bg-[#F8F6F1] py-20 lg:py-24">
          <div className="mx-auto max-w-[1180px] px-7 sm:px-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                Before the service begins
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em]">
                Two upfront costs, clearly explained.
              </h2>
            </div>

            <div className="mt-12 grid border-y border-black/15 md:grid-cols-2">
              <article className="py-10 md:pr-12">
                <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                  Professional installation
                </p>
                <p className="mt-5 text-5xl font-semibold tracking-[-0.055em]">
                  £99
                </p>
                <p className="mt-2 font-semibold">one-off</p>
                <p className="mt-5 max-w-md text-base leading-7">
                  We position, connect and test the system, then make sure your
                  family understands how to use Odda View. Payable on the day
                  of installation.
                </p>
              </article>

              <article className="border-t border-black/15 py-10 md:border-l md:border-t-0 md:pl-12">
                <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                  Equipment deposit
                </p>
                <p className="mt-5 text-5xl font-semibold tracking-[-0.055em]">
                  £100
                </p>
                <p className="mt-2 font-semibold">fully refundable</p>
                <p className="mt-5 max-w-md text-base leading-7">
                  The deposit is returned when the Odda equipment is returned
                  in good working order at the end of the service.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Payment details */}
        <section className="bg-[#929F88] py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-7 sm:px-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                Simple payments
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em]">
                One automatic Direct Debit.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 sm:text-lg">
                Your weekly subscription is collected automatically, so there
                is nothing to remember or pay manually. There is no long
                lock-in contract, and we explain everything before you decide.
              </p>

              <div className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#243128] px-6 py-3">
                <span className="text-sm font-semibold text-white">
                  Secure payments by
                </span>
                <img
                  src="/images/gocardless-logo-white.svg"
                  alt="GoCardless"
                  className="h-5 w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F8F6F1] py-20 lg:py-24">
          <div className="mx-auto max-w-[1180px] px-7 text-center sm:px-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em]">
              Start with a conversation
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em]">
              See whether Odda is right for your family.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 sm:text-lg">
              Book a free home assessment with no pressure and no obligation.
            </p>
            <Link
              to="/book-assessment"
              className="mt-8 inline-flex rounded-full border border-[#929F88] bg-[#929F88] px-8 py-4 font-semibold text-black transition-colors duration-300 hover:border-black hover:bg-transparent"
            >
              Book a free assessment
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
