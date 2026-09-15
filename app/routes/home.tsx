import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/home";
import SensorInsights from "../components/SensorInsights";

const slides = [
  {
    src: "/images/odda-kitchen-routine.png",
    alt: "Starsza kobieta przygotowująca herbatę w swojej kuchni",
    title: "Independence at home",
  },
  {
    src: "/images/son-office.png",
    alt: "Dorosły syn sprawdzający na telefonie dashboard Odda Care",
    title: "Reassurance wherever you are",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Odda Care" },
    {
      name: "description",
      content: "Intelligent care at home.",
    },
  ];
}
type DropdownMenuProps = {
  label: string;
  href: string;
  items: string[];
};

function DesktopDropdown({
  label,
  href,
  items,
}: DropdownMenuProps) {
  return (
    <div className="group relative">
      <a
        href={href}
        className="flex items-center gap-1.5 rounded-full px-4 py-3 text-base font-semibold text-black transition-colors duration-200 hover:bg-black/5"
      >
        {label}

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
        >
          <path
            d="M5 7.5 10 12.5 15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="rounded-[20px] border border-black/10 bg-white/95 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className="block w-full rounded-[14px] px-4 py-3 text-left text-sm font-medium text-black transition-colors hover:bg-[#E1E6DC]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  
    const technologyRef = useRef<HTMLElement>(null);
  const [technologyVisible, setTechnologyVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const section = technologyRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
         setTechnologyVisible(entry.isIntersecting);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);
  

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  function showPreviousSlide() {
    setCurrentSlide(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  }

  function showNextSlide() {
    setCurrentSlide((current) => (current + 1) % slides.length);
  }

  return (
    <main className="min-h-screen bg-[#E4E1D7] font-['Montserrat'] text-[#3C4738]">
      <header className="sticky top-0 z-50 border-b border-[#3C4738]/10 bg-[#F6F1E7]/95 backdrop-blur-md">
  <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-3 lg:px-12">
    <a
      href="/"
      aria-label="Odda Care home"
      className="shrink-0 transition-opacity hover:opacity-80"
    >
      <img
        src="/images/odda-logo-transparent.png"
        alt="Odda Care"
       className="h-16 w-auto mix-blend-multiply lg:h-[77px]"
      />
    </a>

    <nav className="hidden items-center gap-2 md:flex">
      <a
        href="#how-it-works"
        className="rounded-full px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-[#E1E6DC]"
      >
        How it works
      </a>


      <a
        href="#about"
        className="rounded-full px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-[#E1E6DC]"
      >
        About
      </a>
<a
  href="/technology"
  className="rounded-full px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-[#E1E6DC]"
>
  Technology
</a>
      <a
        href="#pricing"
        className="rounded-full px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-[#E1E6DC]"
      >
        Pricing
      </a>

      <a
       href="/faq"
        className="rounded-full px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-[#E1E6DC]"
      >
        FAQ
      </a>
    </nav>

   <div className="hidden items-center gap-3 md:flex">
 

 <div className="flex items-center gap-5">
 <a
  href="/login"
  aria-label="Odda Hub"
 className="group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-0 bg-[#DDD4C7] text-[#222222] transition-colors hover:bg-[#CFC3B3] hover:text-[#CDAA24]"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 21c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" />
  </svg>

  <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
    Odda Hub
  </span>
</a>

  <a
    href="#contact"
    className="rounded-full bg-[#66735E] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#56614F]"
  >
    Get in touch
  </a>
</div>
</div>

    <details className="relative md:hidden">
      <summary className="cursor-pointer list-none rounded-full border border-[#30362D] px-5 py-3 font-semibold text-[#30362D]">
        Menu
      </summary>

      <nav className="absolute right-0 top-full mt-3 flex w-56 flex-col rounded-3xl border border-[#3C4738]/10 bg-[#F6F1E7] p-3 shadow-xl">
        <a
          href="#how-it-works"
          className="rounded-2xl px-4 py-3 font-semibold hover:bg-[#E1E6DC]"
        >
          How it works
        </a>

        <a
          href="#about"
          className="rounded-2xl px-4 py-3 font-semibold hover:bg-[#E1E6DC]"
        >
          About
        </a>

        <a
          href="#pricing"
          className="rounded-2xl px-4 py-3 font-semibold hover:bg-[#E1E6DC]"
        >
          Pricing
        </a>

        <a
          href="#faq"
          className="rounded-2xl px-4 py-3 font-semibold hover:bg-[#E1E6DC]"
        >
          FAQ
        </a>

        <a
          href="#contact"
          className="mt-2 rounded-m bg-[#66735E] px-4 py-3 text-center font-semibold text-white"
        >
          Get in touch
        </a>
      </nav>
    </details>
  </div>
</header>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
         <p className="mb-5 text-base font-semibold uppercase tracking-[0.18em] text-black md:text-lg">
  Intelligent care at home
</p>

  <h1 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#89967E] md:text-4xl lg:text-5xl">
  Independent living.
  <br />
  For longer.
</h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-black">
  Discreet home sensors provide helpful insight into everyday routines,
  supporting safer and more independent living without cameras or wearable
  devices.
</p>

       <div className="mt-9 flex flex-wrap gap-4">
  <a
  href="#technology"
  className="rounded-full bg-[#66735E] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#56614F]"
>
  Discover the technology
</a>

  <a
    href="#families"
    className="rounded-full border border-black px-7 py-4 font-semibold text-black transition-colors hover:bg-[#E1E6DC]"
  >
    For families
  </a>
</div>
        </div>

       <div
  role="region"
  aria-label="Odda Care stories"
  aria-roledescription="carousel"
  className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-xl shadow-[#3C4738]/15"
>
  {slides.map((slide, index) => (
    <div
      key={slide.src}
      aria-hidden={index !== currentSlide}
      className={`absolute inset-0 transition-opacity duration-700 ${
        index === currentSlide
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <img
        src={slide.src}
        alt={slide.alt}
        className="h-full w-full object-cover brightness-[0.82]"
        
      />
    </div>
  ))}

  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

<div className="absolute bottom-5 left-6 sm:left-8">
  <p className="max-w-sm text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
    {slides[currentSlide].title}
  </p>

  <a
  href="#how-it-works"
  className="mt-3 inline-flex rounded-full border border-white bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
>
  Read more
</a>
</div>

  <div className="absolute bottom-6 right-6 flex gap-2">
    {slides.map((slide, index) => (
      <button
        key={slide.src}
        type="button"
        onClick={() => setCurrentSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
        aria-current={index === currentSlide ? "true" : undefined}
        className={`h-2 rounded-full border-0 transition-all ${
          index === currentSlide
            ? "w-6 bg-[#F6E8D0]"
            : "w-2 bg-[#F6E8D0]/60 hover:bg-[#F6E8D0]"
        }`}
      />
    ))}
  </div>
</div>

          

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-7 bg-[#F6F1E7]"
                    : "w-2.5 bg-[#F6F1E7]/60 hover:bg-[#F6F1E7]/80"
                }`}
              />
            ))}
          </div>
        
      </section>
      <SensorInsights />
      
   <section
  ref={technologyRef}
  id="technology"
  className="bg-white px-6 py-20 lg:px-10 lg:py-28"
>
  <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
    {/* Zdjęcie zestawu */}
    <div className="relative aspect-[4/3]">
  <p
  className={`absolute bottom-full left-0 mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all duration-700 ease-out ${
    technologyVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-4 opacity-0"
  }`}
>
  The Odda kit <span className="mx-2">—</span> What’s included
</p>

  <img
    src="/images/odda-kit.png"
    alt="Odda Care home sensor kit"
    className={`h-full w-full rounded-[2.5rem] object-cover transition-all delay-150 duration-700 ease-out ${
  technologyVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-6 opacity-0"
}`}
  />
</div>

    {/* Zawartość zestawu */}
   <div
  className={`flex aspect-[4/3] flex-col justify-start rounded-[2.5rem] border-[3px] border-[#CDAA24]/25 bg-white p-7 transition-all delay-[450ms] duration-700 ease-out ${
    technologyVisible
      ? "translate-x-0 opacity-100"
      : "translate-x-8 opacity-0"
  }`}
>
     
<h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#89967E] md:text-3xl">
  Everything you need to stay connected.
</h2>
      <div className="mt-8 divide-y divide-black/10">
        <div className="flex items-center gap-5 py-4">
          <span className="text-2xl font-[200] text-[#92978F] md:text-3xl">01</span>

          <div>
            <h3 className="font-semibold text-black">Multi-sensors</h3>
            <p className="mt-1 text-sm text-[#52574F]">
              
Monitor motion, temperature and humidity throughout the home.

            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-4">
          <span className="text-2xl font-[200] text-[#92978F] md:text-3xl">02</span>

          <div>
            <h3 className="font-semibold text-black">Door sensors</h3>
            <p className="mt-1 text-sm text-[#52574F]">
              
Provide helpful insight into arrivals, departures and everyday routines.

            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-4">
          <span className="text-2xl font-[200] text-[#92978F] md:text-3xl">03</span>

          <div>
            <h3 className="font-semibold text-black">Odda Gateway</h3>
            <p className="mt-1 text-sm text-[#52574F]">
             03

Connects all sensors securely to the Odda app.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-4">
          <span className="text-2xl font-[200] text-[#92978F] md:text-3xl">04</span>

          <div>
            <h3 className="font-semibold text-black">Reports and alerts</h3>
            <p className="mt-1 text-sm text-[#52574F]">
              Receive activity notifications and daily, weekly and monthly reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}