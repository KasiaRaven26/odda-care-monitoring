import Navbar from "../components/Navbar";

const values = [
  {
    title: "No cameras, no microphones. ",
    description:
      "Your parent’s home stays their home - nothing is watched, nothing is recorded.",
  },
  {
    title: "You’ll hear how their day went - not a chart of it.",
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

export default function About() {
  return (
    <div className="min-h-screen bg-[#F6F1E8] text-black">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#A5B19C]">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-7 py-20 sm:px-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-[88px] lg:py-28">
            <div className="flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                About Odda
              </p>

              <h1 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-3xl lg:text-4xl">
               Built by someone who's sat with families like yours.<br></br>
Not a tech company guessing at care.
<br></br>A carer who knew there had to be a better way.
              </h1>

              <div className="mt-16  border-white/30 pt-8 lg:mt-auto">
                <p className="text-[88px] font-extralight leading-[0.85] tracking-[-0.07em] text-white sm:text-[104px]">
                  13
                </p>

                <p className="mt-5 max-w-sm text-base font-medium leading-7 text-white sm:text-lg">
                  years in dementia, Parkinson&apos;s <br></br>and end-of-life care.
                </p>
              </div>
            </div>

           {/* Founder photo */}
<div
  tabIndex={0}
  className="group relative isolate overflow-hidden rounded-[34px] bg-[#EAE4D9] outline-none"
>
  <img
    src="/images/Aggie-arden.jpg"
    alt="Aggie Arden, founder of Odda"
    className="block aspect-[4/5] h-full w-full object-cover"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

  <div className="absolute inset-x-7 bottom-7 z-10 flex flex-col justify-end sm:inset-x-9 sm:bottom-9">
    <p className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
      Aggie Arden
    </p>

    <p className="mt-2 text-sm font-semibold text-white/90">
      Founder of Odda
    </p>

    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-5 group-hover:max-h-[360px] group-hover:opacity-100 group-focus:mt-5 group-focus:max-h-[360px] group-focus:opacity-100">
      <p className="border-t border-white/30 pt-5 text-base font-medium leading-7 text-white/90">
        After 13 years supporting people with dementia, Parkinson&apos;s and
        through end-of-life care, I saw how often families were left guessing
        between visits—and how existing technology could compromise the dignity
        it was meant to protect.
      </p>

      <blockquote className="mt-5 text-xl font-semibold leading-8 tracking-[-0.02em] text-white sm:text-2xl">
        “Families need reassurance without turning a loved one&apos;s home into a
        place of surveillance.”
      </blockquote>
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                How Odda works
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
                A quiet picture <br></br>of everyday life.
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
          alt="An older woman sharing a warm conversation with her carer at home"
          loading="lazy"
          className="aspect-[5/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
        />
      </div>
    </div>

    <div className="self-center ">
      {values.map((value, index) => (
        <article
          key={value.title}
          className="grid gap py-8 sm:grid-cols-[64px_1fr] sm:gap-8 sm:py-10"
        >
          <span className="text-2xl font-extralight leading-none text-grey">
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
        <section className="bg-[#F6F1E8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1380px] px-7 sm:px-14 lg:px-[88px]">
            <div className="grid gap-12 rounded-[36px] bg-[#E8E1D6] px-7 py-12 sm:px-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-16 lg:py-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                  Where Odda is today
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em]">
                  I would rather grow slowly and get it right rather than grow quickly and let a family down.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-black sm:text-lg">
                <p>
                  I’m currently working with families across
                  Stratford-upon-Avon and the Cotswolds, testing hardware
                  thoroughly with local families and building software with my developers that
                  actually makes sense to real families-<br></br>not just investors.
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Get in touch
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl">
              Worried about somebody living alone?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
              I would be glad to talk it through.<br></br>With no pressure and no obligation.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="rounded-full border-2 border-white bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white"
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
