export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 lg:py-28">
      <section className="mx-auto max-w-[1500px] bg-white px-2 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* Tekst po lewej */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#30362D]">
              The technology behind Odda
            </p>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#919E86] sm:text-6xl lg:text-7xl">
              A simple guide to what’s actually in the home.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#4F554C]">
              Home monitoring technology is new to most families, so we explain
              everything clearly — no jargon and no assumptions.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#656A62]">
              Every device is small, battery-powered and designed to blend
              quietly into the home. Nothing records images or sound, and
              nothing about the installation is permanent.
            </p>
          </div>

          {/* Zdjęcie po prawej */}
          <div className="overflow-hidden rounded-[32px]">
            <img
               src="/images/odda-hub-installation-living-room-v2.png"
              alt="Odda installer setting up the hub in a living room"
              className="aspect-[4/3] h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Trzy najważniejsze filary */}
        <div className="mt-12 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#E5DFD4] bg-[#F7F5F0] px-5 py-3 text-sm font-medium text-[#42473F]">
            <span className="h-2 w-2 rounded-full bg-[#D5A827]" />
            No cameras
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-[#E5DFD4] bg-[#F7F5F0] px-5 py-3 text-sm font-medium text-[#42473F]">
            <span className="h-2 w-2 rounded-full bg-[#919E86]" />
            No microphones
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-[#E5DFD4] bg-[#F7F5F0] px-5 py-3 text-sm font-medium text-[#42473F]">
            <span className="h-2 w-2 rounded-full bg-[#C8A55A]" />
            No permanent installation
          </div>
        </div>
      </section>
    </main>
  );
}