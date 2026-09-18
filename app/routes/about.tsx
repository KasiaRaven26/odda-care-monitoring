import Navbar from "../components/Navbar";

const values = [
  "No cameras, no microphones. Ever.",
  "Plain language, not sensor data.",
  "Dignity first — the person being monitored is not the product.",
  "A personal service, not a faceless subscription.",
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F6F1E8] text-black">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#A5B19C]">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-7 py-20 sm:px-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-[88px] lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                About Odda
              </p>

              <h1 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-3xl lg:text-5xl">
                Built on real care experience, not just technology.
              </h1>

              <p className="mt-8 text-lg font-medium text-white/85">
                Hi, I’m Aggie Arden, founder of Odda.
              </p>
            </div>

            {/* Founder photo */}
            <div className="relative overflow-hidden rounded-[34px] bg-[#EAE4D9]">
              <img
                src="/images/Aggie-arden.jpg"
                alt="Aggie Arden, founder of Odda"
                className="aspect-[4/5] h-full w-full object-cover"
              />

              {/* Expanding biography */}
              <div
                tabIndex={0}
                className="group absolute inset-x-5 bottom-5 max-h-[112px] cursor-default overflow-hidden rounded-[22px] bg-white/90 px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.12)] outline-none backdrop-blur-xl transition-[max-height,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:max-h-[calc(100%-2.5rem)] hover:bg-white/95 focus:max-h-[calc(100%-2.5rem)] focus:bg-white/95 sm:px-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-black">
                      Aggie Arden
                    </p>

                    <p className="mt-1 text-sm text-black/60">
                      Founder of Odda · 13 years in care
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 transition-transform duration-500 group-hover:rotate-45 group-focus:rotate-45">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="mt-5 translate-y-5 space-y-4 border-t border-black/10 pt-5 text-sm leading-6 text-[#50564E] opacity-0 transition-all delay-100 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                  <p>
                    I’ve spent 13 years working in care—dementia care,
                    Parkinson’s care and end-of-life care—supporting families
                    through some of the hardest moments of their lives.
                  </p>

                  <p>
                    Time and again, I saw adult children who loved their parents
                    deeply, wanted them to stay in the home they loved, but had
                    no real idea how they were doing between visits and phone
                    calls.
                  </p>

                  <p>
                    I’ve also seen where existing solutions fall short. Cameras
                    feel intrusive and take away dignity. Personal alarms only
                    work if someone remembers to wear them and presses the
                    button in time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Odda exists */}
        <section className="bg-[#F6F1E8] py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-7 sm:px-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20 lg:px-[88px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                Why Odda exists
              </p>

              <blockquote className="mt-6 max-w-md text-3xl font-semibold leading-[1.18] tracking-[-0.04em] text-[#6B7964] sm:text-4xl">
                “A care visit shows you a snapshot of half an hour—not the
                other twenty-three.”
              </blockquote>
            </div>

            <div className="max-w-2xl rounded-[30px] bg-[#E8E1D6] p-7 sm:p-10">
              <p className="text-lg font-semibold leading-8 text-black">
                Odda exists to close that gap—without cameras, without
                microphones and without turning a parent into a data source.
              </p>
            </div>
          </div>
        </section>

        {/* How Odda works */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-7 sm:px-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-[88px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                How Odda works
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                A quiet picture of everyday life.
              </h2>
            </div>

            <div className="rounded-[30px] bg-[#F1EDE5] p-7 sm:p-10">
              <p className="text-base leading-8 text-[#50564E] sm:text-lg">
                Sensors placed around the home build a quiet picture of daily
                routine—movement, sleep and activity. Instead of raw data, your
                family gets plain-language updates: is Mum sleeping normally,
                is Dad’s routine what it usually is?
              </p>

              <p className="mt-6 text-lg font-semibold leading-8 text-[#65715F]">
                No dashboards to interpret. No technology to learn.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#6C7965] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-[1380px] px-7 sm:px-14 lg:px-[88px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                What matters to me
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                Care should always feel human.
              </h2>
            </div>

            <div className="mt-14 grid overflow-hidden rounded-[30px] border border-white/20 sm:grid-cols-2">
              {values.map((value, index) => (
                <article
                  key={value}
                  className={`min-h-[230px] p-8 sm:p-10 ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/20"
                      : ""
                  } ${
                    index < 2 ? "border-b border-white/20" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-[#E7D49A]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-12 max-w-md text-2xl font-semibold leading-[1.25] tracking-[-0.03em]">
                    {value}
                  </h3>

                  {index === 3 && (
                    <p className="mt-4 max-w-md leading-7 text-white/70">
                      Right now, I’m personally involved in every home
                      assessment and installation.
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Where Odda is today */}
        <section className="bg-[#F6F1E8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1380px] px-7 sm:px-14 lg:px-[88px]">
            <div className="grid gap-12 rounded-[36px] bg-[#E8E1D6] px-7 py-12 sm:px-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-16 lg:py-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                  Where Odda is today
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em]">
                  Growing carefully and getting it right.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-[#50564E] sm:text-lg">
                <p>
                  I’m currently working with families across
                  Stratford-upon-Avon and the Cotswolds, testing hardware
                  thoroughly and building software with my developer that
                  actually makes sense to real families—not just investors.
                </p>

                <p className="font-semibold text-black">
                  I’d rather grow slowly and get it right than grow quickly and
                  let a family down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="bg-[#F6F1E8] px-4 pb-20 lg:pb-28"
        >
          <div className="mx-auto max-w-[1380px] rounded-[36px] bg-[#A5B19C] px-7 py-16 text-center sm:px-12 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
              Get in touch
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl">
              Worried about somebody living alone?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              I’d be glad to talk it through—no pressure and no obligation.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="rounded-full border-2 border-white bg-white px-8 py-4 font-semibold text-[#52604D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white"
              >
                Book a free assessment
              </a>

              <a
                href="mailto:hello@odda.care"
                className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#52604D]"
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