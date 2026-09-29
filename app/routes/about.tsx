import { Link } from "react-router";
import Navbar from "../components/Navbar";

const values = [
  {
    title: "No cameras, no microphones.",
    description:
      "Your parent’s home stays their home — nothing is watched, nothing is recorded.",
  },
  {
    title: "You’ll hear how their day went — not a chart of it.",
    description:
      "Updates are written for you to read, not for you to interpret.",
  },
  {
    title: "Dignity first.",
    description:
      "Their comfort and independence matter more than any feature.",
  },
  {
    title: "A personal service, not a faceless subscription.",
    description:
      "I’m personally involved in every home assessment and installation.",
  },
];

export function meta() {
  return [
    { title: "About Odda | Odda Care" },
    {
      name: "description",
      content:
        "Meet Aggie Arden and discover how real care experience shaped Odda Care and its approach to independent living.",
    },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#F8F6F1]">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-7 py-20 sm:px-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-[88px] lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                About Odda
              </p>

              <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-black sm:text-5xl">
                Built on real care experience,
                <br />
                not just technology.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-black sm:text-lg">
                I didn&apos;t come from a technology background. I came to it
                from years of sitting with families, supporting people with
                dementia and Parkinson&apos;s, and understanding what genuinely
                matters when someone is trying to stay independent at home.
              </p>
            </div>

            {/* Founder photo */}
            <figure className="relative isolate w-full overflow-hidden rounded-[34px] bg-[#EAE4D9] lg:max-w-[480px] lg:justify-self-end">
              <img
                src="/images/Aggie-arden.jpg"
                alt="Aggie Arden, founder of Odda"
                className="block aspect-[4/5] w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              <figcaption className="absolute inset-x-6 bottom-6 z-10 sm:inset-x-8 sm:bottom-8">
                <p className="text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">
                  Aggie Arden
                </p>

                <p className="mt-2 text-sm font-semibold text-white/90">
                  Founder of Odda
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Founder background */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-7 sm:px-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                My background
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-black">
                Care came first.
              </h2>
            </div>

            <div className="max-w-2xl space-y-5 text-base leading-8 text-black sm:text-lg">
              <p>
                I&apos;ve spent over 10 years working in care, including
                dementia care, person-centred care, Parkinson&apos;s care and
                end-of-life care.
              </p>
              <p>
                I&apos;ve supported families through some of the hardest and
                most important moments of their lives. I saw first-hand how
                much families worry about somebody living alone, and how little
                they often know about what is happening between visits. That is
                the gap I set out to change.
              </p>
            </div>
          </div>
        </section>

        {/* Why Odda exists */}
        <section className="bg-[#F8F6F1] py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-7 sm:px-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20 lg:px-[88px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
               Why I started Odda
              </p>

              <blockquote className="mt-6 max-w-md text-3xl font-semibold leading-[1.18] tracking-[-0.04em] text-black sm:text-4xl">
                “A care visit shows you a snapshot of half an hour — not the
                other twenty-three.”
              </blockquote>
            </div>

            <div className="max-w-2xl border-l border-black/15 pl-7 sm:pl-10">
              <p className="text-lg font-normal leading-8 text-black">
                Odda exists to close that gap — not by watching more closely,
                but by listening better. No cameras. No microphones. Just
                enough information to know they&apos;re okay, without turning
                their home into something it isn&apos;t.
              </p>
            </div>
          </div>
        </section>

       
      

        {/* Values */}
        <section className="bg-[#315F4B] py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-[1380px] gap-14 px-7 sm:px-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:px-[88px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                What matters to me
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                Care should always feel human.
              </h2>

              <div className="mt-10 overflow-hidden rounded-[30px]">
                <img
                  src="/images/odda-install.png"
                  alt="Aggie explaining the Odda Hub during an installation"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="self-center">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className={`grid gap-4 py-8 sm:grid-cols-[64px_1fr] sm:gap-8 sm:py-10 ${
                    index > 0 ? "border-t border-white/20" : ""
                  }`}
                >
                  <span className="text-2xl font-extralight leading-none text-white">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="max-w-xl text-2xl font-semibold leading-[1.25] tracking-[-0.03em]">
                      {value.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-7 text-white">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Where Odda is today */}
        <section className="bg-[#F8F6F1] py-20 lg:py-24">
          <div className="mx-auto max-w-[1380px] px-7 sm:px-14 lg:px-[88px]">
            <div className="grid gap-10 border-t border-black/15 pt-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                  Where Odda is today
                </p>
                <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-black">
                  Growing carefully, with families at the centre.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-black sm:text-lg">
                <p>
                  Odda is currently working with families across
                  Stratford-upon-Avon and the Cotswolds. I&apos;m building the
                  service carefully and deliberately — testing the hardware,
                  shaping software that makes sense to families and making
                  sure every household receives reliable, personal support.
                </p>
                <p className="font-semibold">
                  I&apos;d rather grow slowly and get it right than grow quickly
                  and let a family down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-[#F8F6F1] px-4 pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1380px] rounded-[36px] bg-[#929F88] px-7 py-16 text-center sm:px-12 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
              Get in touch
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-black sm:text-4xl">
              Worried about somebody living alone?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
              I would be glad to talk it through.
              <br />
              With no pressure and no obligation.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/book-assessment"
                className="rounded-full border-2 border-black bg-black px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-transparent hover:text-black"
              >
                Book a free assessment
              </Link>

              <a
                href="mailto:hello@odda.care"
                className="rounded-full border-2 border-black px-8 py-4 font-semibold text-black transition-colors duration-300 hover:bg-white"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
