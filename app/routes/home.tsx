import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import SensorInsights from "../components/SensorInsights";
import PriorityList from "../components/PriorityList";
import Navbar from "../components/Navbar";
import WelcomeChat from "../components/WelcomeChat";

const slides = [
  {
    src: "/images/odda-kitchen-routine.png",
    alt: "Older woman preparing tea in her kitchen",
    label: "Independence at home",
  },
  {
    src: "/images/odda-son-work-dashboard.png",
    alt: "Adult son checking the Odda dashboard on his phone",
    label: "Reassurance wherever you are",
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      <section
        aria-label="Odda Care introduction"
        aria-roledescription="carousel"
        className="relative min-h-[650px] overflow-hidden bg-[#D9D4CB] sm:min-h-[690px] lg:min-h-[720px]"
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out motion-reduce:transition-none ${
                isActive
                  ? "visible z-10 opacity-100"
                  : "invisible pointer-events-none z-0 opacity-0"
              }`}
            >
              {/* Zdjęcie wypełnia całe hero, aby tekst pozostał częścią fotografii. */}
              <img
                src={slide.src}
                alt={isActive ? slide.alt : ""}
                className={`absolute inset-0 h-full w-full object-cover brightness-125 ${
                  index === 0
                    ? "object-[62%_center] lg:object-[center_48%]"
                    : "object-[65%_70%] lg:object-[center_55%]"
                }`}
              />
            </div>
          );
        })}

        {/* Delikatne przyciemnienie utrzymuje czytelność tekstu, nie tłumiąc zdjęcia. */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-black/25 lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.34)_40%,rgba(0,0,0,0.1)_62%,rgba(0,0,0,0.01)_82%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-30 flex min-h-[650px] items-center px-4 py-12 sm:min-h-[690px] sm:px-6 lg:min-h-[720px] lg:px-8">
          <div className="flex w-full max-w-[560px] flex-col justify-center px-3 py-7 text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.62)] sm:px-5 sm:py-8 lg:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
              Intelligent care at home
            </p>

            <h1 className="mt-4 text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[2.65rem] lg:text-[2.85rem]">
              Independent living,
              <br />
              for longer.
            </h1>

            <p className="mt-4 max-w-[470px] text-sm leading-6 text-white/95 sm:text-base sm:leading-7">
              A network of discreet home sensors that quietly tracks daily
              routines and lets your family know if something isn&apos;t right.
            </p>

            <p className="mt-4 text-sm font-semibold leading-6 text-white">
              No cameras. No microphones. Nothing to wear.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/technology"
                className="rounded-full border border-white bg-transparent px-5 py-3 text-sm font-semibold text-white [text-shadow:none] transition-colors hover:bg-white hover:text-black"
              >
                See how Odda works
              </a>

              <a
                href="/book-assessment"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black [text-shadow:none] transition-colors hover:bg-[#F3ECE1]"
              >
                Let&apos;s talk

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M4 10h11M11 6l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Kropki karuzeli */}
        <div className="absolute bottom-7 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show ${slide.label}`}
              aria-current={index === currentSlide ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-7 bg-white"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      <SensorInsights />
      <PriorityList />
      <WelcomeChat />
    </main>
  );
}
