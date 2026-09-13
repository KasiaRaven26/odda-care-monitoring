import { useState } from "react";

const technologyItems = [
  {
    
    title: "Odda Hub",
    image: "/images/odda-hub-transparent.png",
    description:
      "The quiet centre of the system. It securely collects information from the sensors and sends it to Odda View.",
  },
  {
    
    title: "Motion sensor",
    image: "/images/odda-motion-sensor-transparent.png",
    description:
      "Notices everyday movement in key rooms, helping Odda understand routines without cameras or microphones.",
  },
  {
    
    title: "Environmental sensor",
    image: "/images/odda-environment-sensor-transparent.png",
    description:
      "Monitors conditions around the home, including temperature and humidity, to help identify meaningful changes.",
  },
  {
    
    title: "Door sensor",
    image: "/images/odda-door-sensor-transparent.png",
    description:
      "Lets you know when an important door opens or closes, including activity at unusual times of day or night.",
  },
  {
  
    title: "Smart plug",
    image: "/images/odda-smart-plug-transparent.png",
    description:
      "Helps build a picture of familiar routines, such as whether the kettle has been used at the usual time.",
  },
  {
    
    title: "Assistance button",
    image:  "/images/odda-assistance-button-transparent.png",
    description:
      "An optional way to ask for help. It works alongside Odda’s passive monitoring as an additional layer of support.",
  },
];

export default function TechnologyPage() {
  const [systemOpen, setSystemOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white px-4 py-16 lg:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-[1380px] px-2 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          {/* Hero text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              The technology behind Odda
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-black sm:text-6xl lg:text-7xl">
              A simple guide to what’s actually in the home.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4F554C]">
              Home monitoring technology is new to most families, so we explain
              everything clearly — no jargon and no assumptions.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#656A62]">
              Every device is small, battery-powered and designed to blend
              quietly into the home. Nothing records images or sound, and
              nothing about the installation is permanent.
            </p>
          </div>

          {/* Hero image */}
          <div className="overflow-hidden rounded-[30px]">
            <img
              src="/images/odda-hub-installation-living-room-v2.png"
              alt="Odda hub being installed in a living room"
              className="aspect-[4/3] h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Three principles */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "No cameras",
            "No microphones",
            "No permanent installation",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              <span className="h-2 w-2 rounded-full bg-[#D5A827]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Technology products */}
      <section className="mx-auto max-w-[1380px] px-2 pb-20 sm:px-6 lg:px-10">
        {/* Section heading */}
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            What’s inside the system
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
            Small devices working quietly together.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#656A62]">
            Each device notices one small part of everyday life. Odda View
            brings everything together and turns it into clear, useful
            information.
          </p>
        </div>

        {/* Complete system card */}
        <div className="mb-6 overflow-hidden rounded-[28px] border border-black/10 bg-white">
          <div className="grid items-center md:grid-cols-[210px_1fr_auto]">
            {/* Complete kit image */}
            <div className="m-3 mx-auto h-[180px] w-[180px] overflow-hidden rounded-[22px]">
              <img
                src="/images/odda-kit-product.png"
                alt="The complete Odda sensor kit"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </div>

            {/* System information */}
            <div className="px-6 py-5 md:px-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/50">
                The complete Odda system
              </span>

              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-black">
                Designed to work as one.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#656A62]">
                Sensors notice everyday activity, while Odda View turns it into
                clear and reassuring information.
              </p>
            </div>

            {/* System Read more */}
            <div className="px-6 pb-6 md:pb-0 md:pr-8">
              <button
                type="button"
                aria-expanded={systemOpen}
                onClick={() => setSystemOpen((open) => !open)}
                className="whitespace-nowrap rounded-full border border-black bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
              >
                {systemOpen ? "Show less" : "Read more"}
              </button>
            </div>
          </div>

          {/* Expanded system information */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              systemOpen
                ? "grid-rows-[1fr] border-t border-black/10"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid gap-5 px-6 py-6 text-sm leading-6 text-[#656A62] md:grid-cols-3 md:px-8">
                <p>
                  Small sensors quietly notice movement, door activity and
                  familiar household routines.
                </p>

                <p>
                  The Odda Hub securely connects the devices and sends their
                  information to Odda View.
                </p>

                <p>
                  Odda View translates those signals into useful updates rather
                  than technical sensor data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Individual device cards */}
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {technologyItems.map((item) => (
    <article
      key={item.title}
      className="overflow-hidden rounded-[28px]"
    >
      <details className="group">
        <summary className="relative cursor-pointer list-none overflow-hidden rounded-[28px] bg-[#929F8B] [&::-webkit-details-marker]:hidden">
          {/* Przezroczyste zdjęcie produktu */}
          <div className="aspect-[4/3]">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          </div>

          {/* Numer */}
          <span className="absolute left-7 top-6 text-sm font-semibold text-black/50">
            {item.number}
          </span>

          {/* Duży tytuł bez tła i bordera */}
          <h3 className="absolute bottom-7 left-7 max-w-[55%] text-2xl font-semibold tracking-[-0.035em] text-">
            {item.title}
          </h3>

          {/* Read more bezpośrednio na zdjęciu */}
          <span className="absolute bottom-6 right-6 rounded-full border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
            Read more
          </span>
        </summary>

        {/* Tekst po rozwinięciu */}
        <div className="rounded-b-[28px] border border-t-0 border-black/10 bg-white px-7 py-6">
          <p className="text-sm leading-6 text-[#656A62]">
            {item.description}
          </p>
        </div>
      </details>
    </article>
  ))}
</div>
      </section>
    </main>
  );
}