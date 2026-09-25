import Navbar from "../components/Navbar";

export default function InsightsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white font-['Montserrat'] text-black">
        <section className="border-b border-black/10 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
              Odda insights
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-black sm:text-4xl">
              Written for anyone trying to do right by a parent who wants to do
              it their own way.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-black sm:text-lg">
              Practical ideas about care, independence and staying connected
              with the people who matter.
            </p>
          </div>
        </section>

        <article className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[900px]">
           <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
  <span className="rounded-full bg-[#E8ECE4] px-4 py-2 text-black">
    Care at home
  </span>

  <time
    dateTime="2026-09-25"
    className="rounded-full bg-[#F3ECE1] px-4 py-2 text-black"
  >
    25 September 2026
  </time>

  <span className="rounded-full bg-[#EDF0F2] px-4 py-2 text-black">
    5 min read
  </span>
</div>
            <h2 className="mt-7 max-w-[850px] text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-black sm:text-4xl">
              Supporting independence at home starts with a conversation
            </h2>

            <p className="mt-6 max-w-[760px] text-lg leading-8 text-black">
              When someone you love begins to need more support, it can be
              hard to know where to start. Small, practical conversations can
              help you understand what matters to them and what would make
              daily life easier.
            </p>

            <figure className="mx-auto mt-10 max-w-[520px]">
              <img
                src="/images/insights-support-at-home.png"
                alt="Older woman and her adult daughter talking over tea at home"
                className="aspect-[3/2] w-full rounded-[24px] object-cover"
                loading="lazy"
              />

            
            </figure>

            <div className="mx-auto mt-12 max-w-[740px] space-y-7 text-base leading-8 text-black sm:text-lg sm:leading-9">
              <p>
                A familiar home can hold years of routines, memories and
                personal choices. So when a parent, partner or friend needs
                extra help, it is natural to want to protect their
                independence as well as their wellbeing. The most useful
                first step is often to ask what they find easy, what has
                become difficult and what they would like to keep doing for
                themselves.
              </p>

              <h3 className="pt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-black">
                Begin with their priorities
              </h3>

              <p>
                Try asking an open question such as, “Is there anything at
                home that feels more difficult lately?” Listen before
                offering a solution. Someone may welcome help with shopping
                but prefer to keep preparing their own meals. Another person
                may be comfortable with regular visits but dislike the idea
                of changing their home.
              </p>

              <p>
                There is no single arrangement that suits everyone. Starting
                with the person’s preferences makes it easier to find support
                that fits their life.
              </p>

              <h3 className="pt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-black">
                Look at the practical details together
              </h3>

              <p>
                Walk through an ordinary day together. Is it easy to move
                around the home? Are everyday items within reach? Would help
                with cleaning, meals or getting out make a difference?
                Changes to a home can range from simple adjustments to
                equipment or adaptations. Age UK recommends considering
                these options when a long-term condition or disability makes
                daily life harder.
              </p>

              <blockquote className="border-l-2 border-black pl-6 text-lg font-semibold leading-8 text-black">
                “What would help you keep doing the things you enjoy?”
              </blockquote>

              <h3 className="pt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-black">
                Make staying in touch feel natural
              </h3>

              <p>
                A call, a cup of tea or a regular visit can offer much more
                than an update. It is also a chance to spend time together.
                The NHS suggests that regular phone calls, visits and help
                with everyday activities can support an older person who may
                be feeling isolated.
              </p>

              <p>
                Agree on a rhythm that works for both of you. Some people
                enjoy a quick daily call; others prefer a longer
                conversation once or twice a week. Keeping that contact
                predictable can make it easier to share concerns when they
                arise.
              </p>

              <h3 className="pt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-black">
                Know when to ask for more help
              </h3>

              <p>
                Family support does not have to cover everything. A paid
                carer can help with everyday tasks while someone continues
                living in their own home. If needs are changing, you can
                also contact the local council about a care needs assessment
                and explore what support may be available.
              </p>

              <p>
                The aim is to make decisions together, with the person at
                the centre of the conversation. Support works best when it
                responds to their actual needs and respects the life they
                want to lead.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-[740px] border-t border-black/15 pt-7">
              <p className="text-sm font-semibold text-black">
                Further reading
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-black">
                <li>
                  <a
                    href="https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/loneliness-in-older-people-how-to-help/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-black/40 underline-offset-4 hover:decoration-black"
                  >
                    NHS: Loneliness in older people — how to help
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.nhs.uk/social-care-and-support/care-services-equipment-and-care-homes/homecare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-black/40 underline-offset-4 hover:decoration-black"
                  >
                    NHS: Help at home from a paid carer
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.ageuk.org.uk/information-advice/care/helping-a-loved-one/carers-checklist/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-black/40 underline-offset-4 hover:decoration-black"
                  >
                    Age UK: Carer’s checklist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}