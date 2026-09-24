import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import SensorInsights from "../components/SensorInsights";
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

  function changeSlide(direction: number) {
    setCurrentSlide(
      (current) => (current + direction + slides.length) % slides.length,
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      {/* Full-width hero carousel */}
      <section
        aria-label="Odda Care introduction"
        aria-roledescription="carousel"
        className="relative min-h-[680px] overflow-hidden bg-[#586557] sm:min-h-[720px] lg:min-h-[760px]"
      >
        {/* Full-screen images */}
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={index === currentSlide ? slide.alt : ""}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}

        {/* Dark overlay to keep the text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/5" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1440px] items-center px-5 py-24 sm:min-h-[720px] sm:px-8 lg:min-h-[760px] lg:px-12">
          {/* Blurred text frame */}
          <div className="w-full max-w-[540px] rounded-[28px] border border-white/35 bg-black/25 p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
              Intelligent care at home
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">
              Independent living,
              <br />
              for longer.
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/95 sm:text-lg sm:leading-8">
              A network of discreet home sensors that quietly tracks daily
              routines and lets your family know if something isn&apos;t right.
            </p>

            <p className="mt-5 text-sm font-semibold leading-6 text-white sm:text-base">
              No cameras. No microphones. Nothing to wear.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/technology"
                className="rounded-full border border-white bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                See how Odda works
              </a>

              <a
                href="/book-assessment"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#F3ECE1]"
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

        {/* Carousel navigation */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label="Previous hero image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/20 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-black/45"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className="flex items-center gap-2">
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

          <button
            type="button"
            onClick={() => changeSlide(1)}
            aria-label="Next hero image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/20 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-black/45"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </section>

      <SensorInsights />
      <WelcomeChat />
    </main>
  );
}
