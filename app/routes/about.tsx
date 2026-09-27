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
                Built on real care experience,
                <br />
                not just technology.
              </h1>

              <div className="mt-16 border-white/30 pt-8 lg:mt-auto">
                <p className="mt-5 max-w-sm text-base font-light italic leading-7 text-white/80 sm:text-lg">
                  I didn't come from a technology background.
                  <br />
                  I came to it from years of sitting with families, supporting
                  people with dementia and Parkinson's, and understanding what
                  genuinely matters when someone is trying to stay independent
                  at home.
                </p>
              </div>
            </div>

            {/* Founder photo */}
            <div
              tabIndex={0}
              className="group relative isolate w-full overflow-hidden rounded-[34px] bg-[#EAE4D9] outline-none lg:w-[80%] lg:justify-self-center"
            >
              <img
                src="/images/Aggie-arden.jpg"
                alt="Aggie Arden, founder of Odda"
                className="block aspect-[4/5] w-full object-cover"
              />

              {/* Stały gradient pod tekstem */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

              {/* Delikatne przyciemnienie przy rozwinięciu tekstu */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 ease-out group-hover:bg-black/45 group-focus:bg-black/25"
              />

              <div className="absolute inset-x-6 bottom-6 z-10 flex flex-col justify-end sm:inset-x-8 sm:bottom-8">
                <p className="text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">
                  Aggie Arden
                </p>

                <p className="mt-2 text-sm font-semibold text-white/90">
                  Founder of Odda
                </p>

                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-4 group-hover:max-h-[360px] group-hover:opacity-100 group-focus:mt-4 group-focus:max-h-[360px] group-focus:opacity-100">
                  <p className="border-t border-white/30 pt-4 text-sm font-medium leading-6 text-white">
                    I've spent over 10 years working in care - including dementia care, 
person-centred care, Parkinson's care, and end-of-life care. 
I've supported families through some of the hardest and most 
important moments of their lives, and I've seen first-hand how 
much families worry about a parent or relative living alone, 
and how little information they often have about what's really 
happening day to day. That gap between visits is where the 
worry lives - and it's what I set out to change.
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
               Why I started Odda
              </p>

              <blockquote className="mt-6 max-w-md text-3xl font-semibold leading-[1.18] tracking-[-0.04em] text-black sm:text-4xl">
                “A care visit shows you a snapshot of half an hour-not the
                other twenty-three.”
              </blockquote>
            </div>

            <div className="max-w-2xl rounded-[30px] bg-[#E8E1D6] p-7 sm:p-10">
              <p className="text-lg font-normal leading-8 text-black">
                Odda exists to close that gap. Not by watching more closely.
                <br />
                By listening better. No cameras. No microphones.
                <br />
                Just enough information to know they’re okay, without turning
                their home into something it isn’t.
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

            <div className="self-center">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="grid gap-4 py-8 sm:grid-cols-[64px_1fr] sm:gap-8 sm:py-10"
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
        <section className="bg-[#F6F1E8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1380px] px-7 sm:px-14 lg:px-[88px]">
            <div className="grid gap-12 rounded-[36px] bg-[#E8E1D6] px-7 py-12 sm:px-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-16 lg:py-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                  Where Odda is today
                </p>

                
              </div>

              <div className="space-y-6 text-base leading-8 text-black sm:text-lg">
                <p>
                  Odda is currently working with families across Stratford-upon-Avon and The Cotswolds. I'm building this business carefully and deliberately - testing hardware thoroughly, working closely with my developer to build software that actually makes sense to families, and making sure every household we work with gets a genuinely reliable, trustworthy service.
I'd rather grow slowly and get it right than grow quickly and let a family down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-[#F6F1E8] px-4 pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1380px] rounded-[36px] bg-[#A5B19C] px-7 py-16 text-center sm:px-12 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Get in touch
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl">
              Worried about somebody living alone?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
              I would be glad to talk it through.
              <br />
              With no pressure and no obligation.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
  href="/book-assessment"
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
