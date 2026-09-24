import Navbar from "../components/Navbar";

const calendlyUrl = "https://calendly.com/kasiaraven2507/30min";

export default function BookAssessment() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Free assessment
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Let’s talk about care at home.
          </h1>

          <p className="mt-5 text-lg leading-8 text-black/70">
            Choose a time that works for you, tell us a little about your
            situation, and confirm your free conversation.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm">
          <iframe
            title="Book a free Odda assessment"
            src={calendlyUrl}
            className="h-[850px] w-full border-0 sm:h-[760px]"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}